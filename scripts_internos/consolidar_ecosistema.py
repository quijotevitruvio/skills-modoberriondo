import os
import shutil
import datetime

# Configuración de Rutas
BASE_DIR = r"C:\Users\Rocka\.antigravity"
SKILLS_DIR = os.path.join(BASE_DIR, "skills")
BACKUP_DIR = os.path.join(BASE_DIR, "backups", f"skills_pre_consolidacion_{datetime.datetime.now().strftime('%Y%m%d_%H%M%S')}")
CORE_DIR = os.path.join(BASE_DIR, "skillslocal_core")

# Definición de Mapeos Maestros (Consolidación)
MASTER_MAPPING = {
    "master_whatsapp_ecosystem": [
        "whatsapp_automation_pro", "whatsapp_conversion_funnels", 
        "whatsapp_flows_logic_engineering", "whatsapp_integration", 
        "enterprise_whatsapp_chatbot_expert"
    ],
    "master_wordpress_woo_pro": [
        "woo_checkout_optimizer", "woo_database_hardening", 
        "wp_data_synchronizer_pro", "wp_woocommerce_architect", 
        "gutenberg_block_architect", "rankmath_seo_mastery"
    ],
    "master_quantum_engineering": [
        "quantum_algorithm_optimization", "quantum_bridge_logistics", 
        "quantum_computing_foundations", "quantum_error_correction_logic", 
        "quantum_safe_cryptography", "hybrid_quantum_orchestrator"
    ],
    "master_ai_orchestration": [
        "agentic_ai_system_design", "ai_agents_orchestrator", 
        "ai_augmented_dev_workflows", "multimodal_ai_orchestrator", 
        "ai_promptops_finetuning", "vibe_coding_engineering", "vibe_coding_pro"
    ],
    "master_blockchain_crypto": [
        "blockchain_smart_contract_security", "binance_api_orchestration", 
        "binance_liquidity_farming", "defi_yield_farming_optimization", 
        "liquidity_pool_management", "crypto_wealth", "binance_launchpad_strategy",
        "cex_dex_bridge_efficiency", "mev_blockchain_protection", "mev_searcher_tactics",
        "on_chain_alpha_scraping", "smart_contract_profit_auditing", "token_econometrics_expert",
        "tokenomics_sovereign_design"
    ],
    "master_cybersecurity_sovereignty": [
        "cybersecurity_auditor", "cybersecurity_hardening", "security_red_teaming", 
        "zero_trust_architecture_expert", "zero_trust_ai_security", 
        "anti_scraping_bot_defense", "git_security_secrets_defense",
        "bug_bounty_automation", "dark_web_intel", "vpn_proxy_detection_vanguard"
    ],
    "master_cloud_infra_ops": [
        "aws_cloud_architect", "gcp_cloud_architect", "cloudflare_expert", 
        "terraform_iac", "ansible_automation", "docker_orchestrator", 
        "kubernetes_foundations", "github_actions_cicd", "docker_orchestration_mastery",
        "gitops_infra_continuous_sync", "jenkins_pipeline_expert", "platform_engineering_idp",
        "serverless_optimization_expert", "self_healing_infra_expert"
    ],
    "master_seo_growth_hacking": [
        "technical_seo_expert", "programmatic_seo_expert", "schema_markup_guru", 
        "google_search_console_mastery", "growth_hacking_engineering", 
        "ecommerce_growth_scientist", "cro_scientist", "pinterest_visual_seo_forge",
        "authority_link_building_osint"
    ],
    "master_skillslocal_orchestration": [
        "vanguard_elite_synergy", "vanguard_master_engine", "vanguard_omega_orchestrator",
        "vanguard_summit_170_orchestrator", "vanguard_summit_175_orchestrator", 
        "vanguard_summit_orchestrator", "vanguard_legacy_refactor",
        "antigravity_power_user_orchestration"
    ]
}

def consolidate():
    print(f"--- Iniciando consolidacion en {BACKUP_DIR}...")
    
    # 1. Backup
    if not os.path.exists(BACKUP_DIR):
        os.makedirs(BACKUP_DIR)
    
    # 2. Procesar Mapeos
    for master_name, sub_skills in MASTER_MAPPING.items():
        master_path = os.path.join(SKILLS_DIR, master_name)
        if not os.path.exists(master_path):
            os.makedirs(master_path)
        
        master_skill_file = os.path.join(master_path, "SKILL.md")
        with open(master_skill_file, "w", encoding="utf-8") as master_f:
            master_f.write(f"# --- {master_name.replace('_', ' ').upper()}\n")
            master_f.write(f"Consolidated Knowledge Base - SkillsLocal Sovereign Environment\n\n")
            
            for sub_skill in sub_skills:
                sub_path = os.path.join(SKILLS_DIR, sub_skill)
                sub_file = os.path.join(sub_path, "SKILL.md")
                
                if os.path.exists(sub_file):
                    print(f"--- Fusionando {sub_skill} -> {master_name}...")
                    with open(sub_file, "r", encoding="utf-8") as sub_f:
                        content = sub_f.read()
                        # Rebranding al vuelo
                        content = content.replace("Vanguard", "SkillsLocal")
                        content = content.replace("vanguard_", "skillslocal_")
                        
                        master_f.write(f"\n--- \n## --- Sub-Skill: {sub_skill}\n")
                        master_f.write(content)
                        master_f.write("\n")
                    
                    # Mover a backup y eliminar original
                    shutil.move(sub_path, os.path.join(BACKUP_DIR, sub_skill))
                else:
                    print(f"--- Habilidad {sub_skill} no encontrada, omitiendo.")

    # 3. Renombrar restos de Vanguard en todas las skills restantes
    for folder in os.listdir(SKILLS_DIR):
        folder_path = os.path.join(SKILLS_DIR, folder)
        if os.path.isdir(folder_path):
            # Renombrar carpeta si tiene vanguard
            if "vanguard" in folder.lower():
                new_folder = folder.lower().replace("vanguard", "skillslocal")
                new_path = os.path.join(SKILLS_DIR, new_folder)
                if not os.path.exists(new_path):
                    os.rename(folder_path, new_path)
                    folder_path = new_path
            
            # Rebranding en el archivo SKILL.md
            skill_md = os.path.join(folder_path, "SKILL.md")
            if os.path.exists(skill_md):
                with open(skill_md, "r", encoding="utf-8") as f:
                    content = f.read()
                new_content = content.replace("Vanguard", "SkillsLocal").replace("vanguard_", "skillslocal_")
                if new_content != content:
                    with open(skill_md, "w", encoding="utf-8") as f:
                        f.write(new_content)

    print("--- Consolidacion completada. Ejecuta 'python skillslocal.py sync' para actualizar el mapa.")

if __name__ == "__main__":
    consolidate()
