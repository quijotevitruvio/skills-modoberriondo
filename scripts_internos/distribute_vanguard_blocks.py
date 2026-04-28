import os
import re

# Configuración de bloques
blocks_config = {
    "Block_I_Frontend.md": (1, 16),
    "Block_II_Backend.md": (17, 35),
    "Block_III_IA_Vanguardia.md": (36, 53),
    "Block_IV_DevOps_Cloud.md": (54, 79),
    "Block_V_Terminal_Remote.md": (80, 89),
    "Block_VI_Git_Mastery.md": (90, 94),
    "Block_VII_SEO_Marketing.md": (95, 112),
    "Block_VIII_WhatsApp_Enterprise.md": (113, 116),
    "Block_IX_IA_Efficiency.md": (117, 120),
    "Block_X_Business_Compliance.md": (121, 165),
    "Block_XI_Antigravity_Mastery.md": (166, 170)
}

index_path = r"C:\Users\Rocka\.gemini\antigravity\brain\9b34d4fa-ef34-4220-9d3c-746c6936cbd8\vanguard_170_index.md"
vanguard_dir = r"C:\Users\Rocka\.gemini\antigravity\playground\nomad-armstrong\.vanguard"

# Crear directorio si no existe
if not os.path.exists(vanguard_dir):
    os.makedirs(vanguard_dir)

# Leer el índice
with open(index_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

# Función para extraer skills dentro de un rango
def extract_skills(start_num, end_num):
    content = []
    # Regex para capturar "X. skill_name: description"
    pattern = re.compile(rf"^({start_num}|(?:[1-9][0-9]*))\.  \*\*(.*?)\*\*: (.*)$")
    
    for line in lines:
        match = re.match(r"^(\d+)\.\s+\*\*(.*?)\*\*: (.*)$", line.strip())
        if match:
            num = int(match.group(1))
            name = match.group(2)
            desc = match.group(3)
            if start_num <= num <= end_num:
                content.append(f"{num}. **{name}**: {desc}")
    return content

# Generar archivos por bloque
for filename, (start, end) in blocks_config.items():
    block_skills = extract_skills(start, end)
    output_path = os.path.join(vanguard_dir, filename)
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(f"# Vanguard Orchestration: {filename.replace('_', ' ').replace('.md', '')}\n\n")
        f.write("\n".join(block_skills))
        f.write("\n")
    print(f"Generated {filename}")

print("Vanguard Orchestration distribution complete.")
