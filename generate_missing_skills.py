import os
from pathlib import Path

SKILLS_DIR = Path("C:/Users/Rocka/.antigravity/skills")
SUMMIT_FILES = [
    Path("C:/Users/Rocka/.antigravity/vanguard_core/SUMMIT_I_ENGINEERING.md"),
    Path("C:/Users/Rocka/.antigravity/vanguard_core/SUMMIT_II_TACTICAL.md"),
    Path("C:/Users/Rocka/.antigravity/vanguard_core/SUMMIT_III_DOMINATION.md"),
]

SKILL_TEMPLATE = """---
name: {name}
description: Vanguard Expert Skill - {description}
---

# 🧠 Vanguard Skill: {name}

## 🎯 Objective
Mastery of {description} within the Vanguard Technical Sovereignty framework.

## 🛠️ Expert Capabilities
- Advanced orchestration of {name} protocols.
- Autonomous debugging and optimization.
- High-scale deployment and scaling patterns.

## 📜 Operation Rules
1. **Precision First**: All implementations must follow X.Y.Z versioning.
2. **Sovereignty**: No dependencies on external unverified code.
3. **No Placeholders**: Always generate production-ready artifacts.

## 🚀 Execution Pattern
- `/build`: Trigger autonomous improvement of this skill.
- `/verify`: Run deep audit of current implementation.
"""

def get_planned_skills():
    import re
    planned = []
    for sf in SUMMIT_FILES:
        if not sf.exists(): continue
        content = sf.read_text(encoding="utf-8")
        matches = re.finditer(r'(?:\*\*|`)([a-z0-9_]{3,})(?:\*\*|`)(?:\: \*\*\[.*?\]\*\*|:)?\s*(.*)', content)
        for m in matches:
            name = m.group(1)
            desc = m.group(2).split('\n')[0].strip() if m.group(2) else "Expert knowledge domain."
            planned.append({"name": name, "desc": desc})
    return planned

def generate_skills():
    planned = get_planned_skills()
    existing = [d.name for d in SKILLS_DIR.iterdir() if d.is_dir()]
    
    count = 0
    for skill in planned:
        if skill["name"] not in existing:
            skill_path = SKILLS_DIR / skill["name"]
            skill_path.mkdir(parents=True, exist_ok=True)
            skill_file = skill_path / "SKILL.md"
            skill_file.write_text(SKILL_TEMPLATE.format(name=skill["name"], description=skill["desc"]), encoding="utf-8")
            print(f"✅ Generated: {skill['name']}")
            count += 1
            existing.append(skill["name"])

    # If we are below 230, add frontier skills
    frontier_skills = [
        {"name": "agentic_multimodal_vision", "desc": "AI interpretation of complex UI and spatial data."},
        {"name": "industrial_iot_digital_twin", "desc": "Synchronization of factory-level assets with Vanguard core."},
        {"name": "quantum_bridge_logistics", "desc": "Post-quantum secure logistics orchestration."},
        {"name": "neuro_symbolic_reasoning", "desc": "Hybrid AI logic for deterministic decision making."},
        {"name": "sovereign_finops_cloud_broker", "desc": "Autonomous financial management of multi-cloud assets."},
        {"name": "vanguard_omega_orchestrator", "desc": "The final integration layer for the 230-skill ecosystem."}
    ]

    for fs in frontier_skills:
        if len(existing) >= 230: break
        if fs["name"] not in existing:
            skill_path = SKILLS_DIR / fs["name"]
            skill_path.mkdir(parents=True, exist_ok=True)
            skill_file = skill_path / "SKILL.md"
            skill_file.write_text(SKILL_TEMPLATE.format(name=fs["name"], description=fs["desc"]), encoding="utf-8")
            print(f"✅ Generated Frontier Skill: {fs['name']}")
            count += 1
            existing.append(fs["name"])

    print(f"\nTotal Generated: {count}")
    print(f"Total Ecosystem: {len(existing)}")

if __name__ == "__main__":
    generate_skills()
