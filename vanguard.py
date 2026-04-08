import os
import sys
import subprocess
from datetime import datetime

# Vanguard Sovereign CLI
# Forja Funcional | Grado Militar | Lvl 99

def print_banner():
    print("""
    🛡️ VANGUARD COMMAND LINE INTERFACE (CLI)
    ----------------------------------------
    Soberanía Técnica Total | Operaciones Autónomas
    """)

def run_command(cmd, desc):
    print(f"[*] Ejecutando: {desc}...")
    try:
        result = subprocess.run(cmd, shell=True, check=True, capture_output=True, text=True)
        print(f"[v] ÉXITO: {desc} completado.")
        return result.stdout
    except subprocess.CalledProcessError as e:
        print(f"[!] ERROR en {desc}: {e.stderr}")
        return None

def main():
    if len(sys.argv) < 2:
        print_banner()
        print("Modo de uso:")
        print("  python vanguard.py audit   -> Auditoría de Sinergias")
        print("  python vanguard.py update  -> Rutina de Mantenimiento /update")
        print("  python vanguard.py backup  -> Sincronización GitHub /backup")
        print("  python vanguard.py menu    -> Lanzar Menú de Inicio")
        return

    cmd = sys.argv[1].lower()

    if cmd == "audit":
        import ag_synergy_auditor
        ag_synergy_auditor.run_audit()

    elif cmd == "update":
        print_banner()
        print("[*] Iniciando Rutina Vanguard 175...")
        # Lógica simplificada para CLI
        run_command("python ag_skill_updater.py", "Actualización de Arsenal")

    elif cmd == "backup":
        print_banner()
        date_str = datetime.now().strftime('%Y-%m-%d')
        msg = f"chore(vanguard): automated backup [{date_str}] - High-Density 210 skills"
        # Agregamos los Meta-Bloques SUMMIT y archivos core
        run_command("git add .vanguard/SUMMIT_*.md vanguard_skills/ vanguard.py ag_synergy_auditor.py README.md CHANGELOG.md .agents/", "Preparación de Archivos")
        run_command(f'git commit -m "{msg}" --allow-empty', "Firma de Soberanía")
        run_command("git push origin main", "Sincronización Cloud")

    elif cmd == "menu":
        # Simula el trigger del menú interactivo Vanguard
        print("""
### 🛡️ TERMINAL DEL SISTEMA VANGUARD - ARQUITECTURA SUMMIT
*Entorno Cargado. Orquestación de Alta Densidad (210 Habilidades)*

**[ 🏛️ META-BLOQUES DISPONIBLES ]**
`[I] SUMMIT_ENGINEERING`  : Cimiento, Backend, IA, DevOps, Terminal, Git.
`[II] SUMMIT_TACTICAL`     : SEO, Growth, CRM, FinTech, IA Efficiency, Frontier.
`[III] SUMMIT_DOMINATION` : Crypto Wealth, Social Authority, High-Scale Platforms.

**Escribe 'python vanguard.py <comando>' para operar.**
        """)

    else:
        print(f"[!] Comando '{cmd}' no reconocido por la matriz Vanguard.")

if __name__ == "__main__":
    main()
