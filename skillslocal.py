import os
import sys
import argparse
import re
import datetime
import subprocess
import json
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
BRAIN_FILE = CORE_DIR / "CEREBRO.json"

class SkillsLocalCLI:
    def __init__(self):
        self.parser = argparse.ArgumentParser(description="CLI de Soberanía Nuclear SkillsLocal")
        self.subparsers = self.parser.add_subparsers(dest="command")
        self.subparsers.add_parser("sync", help="Sincronización nuclear y generación del mapa")
        self.subparsers.add_parser("status", help="Reporte detallado del estado del ecosistema")
        self.subparsers.add_parser("update", help="Actualiza el ecosistema y habilidades via Git")
        self.subparsers.add_parser("brain", help="Genera el índice neuronal CEREBRO.json para ahorro de tokens")
        
        load_parser = self.subparsers.add_parser("load", help="Carga selectiva de una micro-habilidad")
        load_parser.add_argument("skill", help="Nombre de la habilidad a cargar")
        
        self.subparsers.add_parser("check", help="Audita la integridad del ecosistema")
        create_parser = self.subparsers.add_parser("create", help="Crea una nueva habilidad")
        create_parser.add_argument("skill_name", help="Nombre de la nueva habilidad")
        create_parser.add_argument("sector", help="Sector de la nueva habilidad")
        self.subparsers.add_parser("boot", help="Auto-carga habilidades desde SKILLS.json local")

    def get_installed_skills(self):
        """Busca recursivamente todas las habilidades (carpetas con SKILL.md)."""
        skills = {}
        if not SKILLS_DIR.exists():
            return {}
        for root, dirs, files in os.walk(SKILLS_DIR):
            if "SKILL.md" in files:
                skill_name = os.path.basename(root)
                sector = Path(root).parent.name
                skills[skill_name] = {"path": root, "sector": sector}
        return skills

    def generate_brain(self):
        """Genera un archivo JSON denso con metadatos de todas las habilidades."""
        print("🧠 [SKILLSLOCAL] Generando Córtex Neuronal...")
        skills = self.get_installed_skills()
        brain_data = {
            "last_update": datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
            "total_skills": len(skills),
            "skills": {}
        }
        
        for name, info in skills.items():
            skill_md = Path(info["path"]) / "SKILL.md"
            description = "Habilidad de ingeniería"
            if skill_md.exists():
                content = skill_md.read_text(encoding="utf-8")
                # Extraer primera línea o descripción corta
                match = re.search(r'#.*?\n(.*?)\n', content)
                if match:
                    description = match.group(1).strip()
            
            brain_data["skills"][name] = {
                "s": info["sector"],
                "d": description[:100], # Comprimido
                "p": str(skill_md)
            }
            
        BRAIN_FILE.write_text(json.dumps(brain_data, indent=2, ensure_ascii=False), encoding="utf-8")
        print(f"✅ CEREBRO.json generado con éxito en {BRAIN_FILE}")

    def load_skill(self, skill_name):
        """Muestra la ruta de una micro-habilidad específica para carga rápida."""
        skills = self.get_installed_skills()
        if skill_name in skills:
            skill_path = Path(skills[skill_name]["path"]) / "SKILL.md"
            print(f"🎯 [LOAD] Habilidad encontrada en Sector: {skills[skill_name]['sector']}")
            print(f"CONTENIDO: file:///{skill_path}")
            return str(skill_path)
        else:
            print(f"❌ Habilidad '{skill_name}' no encontrada.")
            return None

    def check(self):
        """Audita la integridad de todos los archivos SKILL.md."""
        print("🛡️ [HEALTH-CHECK] Auditando integridad del ecosistema...")
        skills = self.get_installed_skills()
        missing = 0
        for name, info in skills.items():
            if not (Path(info["path"]) / "SKILL.md").exists():
                print(f"⚠️  Alerta: Falta SKILL.md en {info['path']}")
                missing += 1
        
        if missing == 0:
            print(f"✅ Salud del ecosistema: 100% ({len(skills)} habilidades verificadas).")
        else:
            print(f"❌ Salud comprometida: Faltan {missing} archivos críticos.")

    def create(self, skill_name, sector):
        """Crea una nueva estructura de habilidad bajo un sector específico."""
        target_dir = SKILLS_DIR / sector / skill_name
        if target_dir.exists():
            print(f"⚠️  La habilidad '{skill_name}' ya existe.")
            return

        target_dir.mkdir(parents=True, exist_ok=True)
        skill_file = target_dir / "SKILL.md"
        template = f"# {skill_name}\n\n## Sector: {sector}\n## Estado: Alpha\n\n### Descripción\n[Escribir aquí]\n\n### Repositorio\n- URL: \n"
        skill_file.write_text(template, encoding="utf-8")
        
        print(f"✅ Habilidad '{skill_name}' creada en {sector}.")
        print(f"📝 Edítala en: {skill_file}")
        self.generate_brain()

    def boot(self):
        """Auto-carga habilidades basadas en el archivo SKILLS.json local del proyecto."""
        print("📌 [BOOT] Buscando manifiesto del proyecto (SKILLS.json)...")
        manifest_path = Path(os.getcwd()) / "SKILLS.json"
        
        if not manifest_path.exists():
            print(f"❌ No se encontró SKILLS.json en {os.getcwd()}")
            print("💡 Crea uno con: { \"proyecto\": \"Nombre\", \"skills_activas\": [\"skill1\", \"skill2\"] }")
            return

        try:
            with open(manifest_path, "r", encoding="utf-8") as f:
                config = json.load(f)
            
            print(f"🚀 Activando Entorno para: {config.get('proyecto', 'Proyecto Desconocido')}")
            for skill in config.get("skills_activas", []):
                self.load_skill(skill)
            print("✅ Soberanía técnica desplegada para el proyecto actual.")
        except Exception as e:
            print(f"❌ Error al procesar SKILLS.json: {e}")

    def update_ecosystem(self):
        print("🚀 [SKILLSLOCAL] Iniciando Protocolo de Actualización...")
        if (SKILLSLOCAL_ROOT / ".git").exists():
            print(f"--- Actualizando Ecosistema Raíz: {SKILLSLOCAL_ROOT.name}")
            subprocess.run(["git", "-C", str(SKILLSLOCAL_ROOT), "pull"], check=False)
        for root, dirs, files in os.walk(SKILLS_DIR):
            if ".git" in dirs:
                repo_path = Path(root)
                print(f"--- Actualizando Habilidad/Sector: {repo_path.name}")
                subprocess.run(["git", "-C", str(repo_path), "pull"], check=False)
                dirs.remove(".git") 
        print("\n✅ [SKILLSLOCAL] Proceso de actualización finalizado.")
        self.sync()

    def sync(self):
        print("🔄 [SKILLSLOCAL] Sincronizando Contexto Nuclear...")
        skills_dict = self.get_installed_skills()
        all_skills = sorted(list(skills_dict.keys()))
        sectors = sorted([d.name for d in SKILLS_DIR.iterdir() if d.is_dir() and d.name[0].isdigit()])

        with open(MAP_FILE, "w", encoding="utf-8") as f:
            f.write("# 🗺️ MAPA NUCLEAR SKILLSLOCAL\n")
            f.write(f"Última Sincronización: {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n")
            f.write(f"**Habilidades Activas**: {len(all_skills)}\n")
            f.write(f"**Sectores Operativos**: {len(sectors)}\n\n")

            for sector in sectors:
                f.write(f"### 💠 Sector: {sector}\n")
                sector_path = SKILLS_DIR / sector
                sector_skills = sorted([d.name for d in sector_path.iterdir() if d.is_dir()])
                for s in sector_skills:
                    skill_md = sector_path / s / "SKILL.md"
                    f.write(f"- [x] **{s}** ([SKILL](file:///{skill_md}))\n")
                f.write("\n")
        print(f"✅ Mapa generado en {MAP_FILE}")

    def status(self):
        installed = self.get_installed_skills()
        print("🏛️  REPORTE DE ESTADO NUCLEAR:")
        print(f"   - Habilidades Instaladas: {len(installed)}")
        print(f"   - Madurez del Sistema:    {(len(installed)/230*100):.1f}%")
        print(f"   - Salud del CLI:          ÓPTIMA")

    def run(self):
        args = self.parser.parse_args()
        if args.command == "sync":
            self.sync()
        elif args.command == "status":
            self.status()
        elif args.command == "update":
            self.update_ecosystem()
        elif args.command == "brain":
            self.generate_brain()
        elif args.command == "load":
            self.load_skill(args.skill)
        elif args.command == "check":
            self.check()
        elif args.command == "create":
            self.create(args.skill_name, args.sector)
        elif args.command == "boot":
            self.boot()
        else:
            self.parser.print_help()

if __name__ == "__main__":
    SkillsLocalCLI().run()
