import os
import sys
import argparse
import re
import datetime
import subprocess
from pathlib import Path

# Configuración de salida Unicode para terminales Windows
if sys.platform == "win32":
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8')

# Configuración de Rutas
SKILLSLOCAL_ROOT = Path("C:/Users/Rocka/.antigravity")
SKILLS_DIR = SKILLSLOCAL_ROOT / "skills"
CORE_DIR = SKILLSLOCAL_ROOT / "skillslocal_core"
MAP_FILE = CORE_DIR / "MAPA.md"
CODEX_FILE = CORE_DIR / "CODEX.md"

class SkillsLocalCLI:
    def __init__(self):
        self.parser = argparse.ArgumentParser(description="CLI de Soberanía Nuclear SkillsLocal")
        self.subparsers = self.parser.add_subparsers(dest="command")
        self.subparsers.add_parser("sync", help="Sincronización nuclear y generación del mapa")
        self.subparsers.add_parser("status", help="Reporte detallado del estado del ecosistema")
        self.subparsers.add_parser("update", help="Actualiza el ecosistema y habilidades via Git")

    def get_installed_skills(self):
        """Busca recursivamente todas las habilidades (carpetas con SKILL.md)."""
        skills = []
        if not SKILLS_DIR.exists():
            return []
        for root, dirs, files in os.walk(SKILLS_DIR):
            if "SKILL.md" in files:
                skills.append(os.path.basename(root))
        return sorted(list(set(skills)))

    def _get_planned_skills(self):
        """Extrae nombres de habilidades de los archivos markdown de CUMBRE."""
        planned = set()
        summit_files = list(CORE_DIR.glob("CUMBRE_*.md"))
        for sf in summit_files:
            try:
                content = sf.read_text(encoding="utf-8")
                matches = re.findall(r'(?:\*\*|`)([a-z0-9_]{5,})(?:\*\*|`)', content)
                for m in matches:
                    planned.add(m)
            except Exception:
                continue
        return sorted(list(planned))

    def update_ecosystem(self):
        """Ejecuta actualizaciones de Git en la raíz y sub-repositorios de habilidades."""
        print("🚀 [SKILLSLOCAL] Iniciando Protocolo de Actualización...")
        
        # 1. Actualizar Raíz
        if (SKILLSLOCAL_ROOT / ".git").exists():
            print(f"--- Actualizando Ecosistema Raíz: {SKILLSLOCAL_ROOT.name}")
            subprocess.run(["git", "-C", str(SKILLSLOCAL_ROOT), "pull"], check=False)
        
        # 2. Buscar repositorios en sectores
        for root, dirs, files in os.walk(SKILLS_DIR):
            if ".git" in dirs:
                repo_path = Path(root)
                print(f"--- Actualizando Habilidad/Sector: {repo_path.name}")
                subprocess.run(["git", "-C", str(repo_path), "pull"], check=False)
                # No entrar más profundo en este repo para evitar redundancia
                dirs.remove(".git") 

        print("\n✅ [SKILLSLOCAL] Proceso de actualización finalizado.")
        self.sync()

    def sync(self):
        print("🔄 [SKILLSLOCAL] Sincronizando Contexto de Soberanía Nuclear...")
        all_skills = self.get_installed_skills()
        planned = self._get_planned_skills()
        
        sectors = sorted([d.name for d in SKILLS_DIR.iterdir() if d.is_dir() and d.name[0].isdigit()])

        with open(MAP_FILE, "w", encoding="utf-8") as f:
            f.write("# 🗺️ MAPA NUCLEAR SKILLSLOCAL\n")
            f.write(f"Última Sincronización: {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n")
            
            f.write(f"**Habilidades Activas**: {len(all_skills)}\n")
            f.write(f"**Sectores Operativos**: {len(sectors)}\n\n")

            f.write("## 🏗️ Arquitectura Core\n")
            f.write(f"- [CODEX.md](file:///{CODEX_FILE})\n")
            f.write(f"- [MAPA.md](file:///{MAP_FILE})\n\n")

            for sector in sectors:
                f.write(f"### 💠 Sector: {sector}\n")
                sector_path = SKILLS_DIR / sector
                sector_skills = sorted([d.name for d in sector_path.iterdir() if d.is_dir()])
                
                for s in sector_skills:
                    skill_md = sector_path / s / "SKILL.md"
                    f.write(f"- [x] **{s}** ([SKILL](file:///{skill_md}))\n")
                f.write("\n")

            standalone = sorted([s for s in all_skills if not any((SKILLS_DIR / sector / s).exists() for sector in sectors)])
            if standalone:
                f.write("### ❓ Sin Categorizar / Independientes\n")
                for s in standalone:
                    f.write(f"- [ ] **{s}** (Pendiente de ubicación)\n")
                f.write("\n")

            missing = sorted([p for p in planned if p not in all_skills])
            if missing:
                f.write("## 🛠️ Expansión Pendiente\n")
                for m in missing:
                    f.write(f"- ⏳ `{m}` (Planeada)\n")

        print(f"✅ Mapa generado en {MAP_FILE}")
        print(f"✅ Se indexaron {len(all_skills)} habilidades en {len(sectors)} sectores.")

    def status(self):
        installed = self.get_installed_skills()
        planned = self._get_planned_skills()
        sectors = sorted([d.name for d in SKILLS_DIR.iterdir() if d.is_dir() and d.name[0].isdigit()])
        
        print("🏛️  REPORTE DE ESTADO NUCLEAR SKILLSLOCAL:")
        print(f"   - Habilidades Instaladas: {len(installed)}")
        print(f"   - Habilidades Planeadas:   {len(planned)}")
        
        completion = (len(installed) / 230 * 100)
        print(f"   - Madurez del Sistema:    {completion:.1f}% del objetivo (230)")
        print(f"   - Sectores Activos:       {len(sectors)}")
        
        missing = [p for p in planned if p not in installed]
        if missing:
            print(f"   - Próxima Expansión:      {missing[0]}")
        print(f"   - Salud del CLI:          ÓPTIMA")

    def run(self):
        args = self.parser.parse_args()
        if args.command == "sync":
            self.sync()
        elif args.command == "status":
            self.status()
        elif args.command == "update":
            self.update_ecosystem()
        else:
            self.parser.print_help()

if __name__ == "__main__":
    SkillsLocalCLI().run()
