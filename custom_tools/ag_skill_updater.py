import os
import subprocess
import re
from datetime import datetime
from pathlib import Path

def run_command(command, cwd):
    try:
        result = subprocess.run(command, cwd=cwd, shell=True, check=True, text=True, capture_output=True)
        return result.stdout.strip()
    except subprocess.CalledProcessError as e:
        return f"Error: {e.stderr.strip()}"

def update_changelog(block_name, skill_name, summary_list):
    workspace_root = Path.cwd()
    changelog_path = workspace_root / ".vanguard" / "CHANGELOG.md"
    
    date_str = datetime.now().strftime("%Y-%m-%d")
    
    entry = [
        f"\n## Update: {date_str}\n",
        f"* **Date**: {date_str}",
        f"* **Block**: {block_name}",
        f"* **Skill Updated**: {skill_name}",
        "* **Summary of Changes**:"
    ]
    for item in summary_list:
        entry.append(f"    * {item}")
    
    try:
        with open(changelog_path, "a", encoding="utf-8") as f:
            f.write("\n".join(entry) + "\n")
    except Exception as e:
        print(f"Error escribiendo en changelog: {e}")

def extract_skills_from_block(block_path):
    skills = []
    pattern = re.compile(r"\*\*(.*?)\*\*")
    try:
        with open(block_path, "r", encoding="utf-8") as f:
            for line in f:
                match = pattern.search(line)
                if match:
                    skills.append(match.group(1).strip())
    except Exception as e:
        print(f"Error leyendo bloque {block_path}: {e}")
    return skills

def update_all_vanguard_blocks():
    workspace_root = Path.cwd()
    vanguard_dir = workspace_root / ".vanguard"
    skills_base_dir = Path.home() / ".antigravity" / "skills"
    
    if not vanguard_dir.exists():
        return f"❌ Orquestación no encontrada: El directorio {vanguard_dir} no existe."
    
    report = ["🚀 Iniciando Mantenimiento Descentralizado con Registro de Changelog\n"]
    
    blocks = sorted(list(vanguard_dir.glob("*.md")))
    
    for block_file in blocks:
        block_name = block_file.stem
        if block_name == "CHANGELOG": continue # Saltar el propio changelog
        
        report.append(f"\n📦 Bloque: {block_file.name}")
        skills = extract_skills_from_block(block_file)
        
        for skill_slug in skills:
            skill_path = skills_base_dir / skill_slug
            if skill_path.exists() and skill_path.is_dir():
                skill_changes = []
                report.append(f"  🔧 Revisando: {skill_slug}")
                
                # Actualización Git
                if (skill_path / ".git").exists():
                    git_out = run_command('git pull origin main', cwd=skill_path)
                    if "Already up to date" not in git_out:
                        skill_changes.append(f"Actualización de código vía Git: {git_out}")
                    report.append(f"    [Git] {git_out}")
                
                # Actualización Python
                if (skill_path / "requirements.txt").exists():
                    pip_out = run_command('pip install --upgrade -r requirements.txt', cwd=skill_path)
                    if "Requirement already satisfied" not in pip_out:
                        skill_changes.append("Actualización de dependencias Python (pip)")
                    report.append(f"    [Python] {pip_out}")
                
                # Actualización Node/JS
                if (skill_path / "package.json").exists():
                    npm_out = run_command('npm install', cwd=skill_path)
                    # npm install siempre hace algo de revisión, así que lo registramos si es relevante
                    # Para simplificar, registramos si se ejecutó
                    report.append(f"    [Node] {npm_out}")
                
                # Si hubo cambios efectivos, registrar en el CHANGELOG
                if skill_changes:
                    update_changelog(block_name, skill_slug, skill_changes)
                else:
                    # Log de revisión de rutina si no hay cambios estructurales detectados
                    # (Opcional: puedes comentar esto si prefieres solo logs de cambios reales)
                    pass
            else:
                report.append(f"  ⚠️ Skill '{skill_slug}' omitida (directorio no encontrado)")

    return "\n".join(report)

if __name__ == "__main__":
    print(update_all_vanguard_blocks())
