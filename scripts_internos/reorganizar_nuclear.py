import os
import shutil

BASE_DIR = r"C:\Users\Rocka\.antigravity"
SKILLS_DIR = os.path.join(BASE_DIR, "skills")

# Definición de Sectores Nucleares
SECTORS = {
    "00_CORE": [
        "master_skillslocal_orchestration", "python_automation_expert", "javascript_expert", 
        "expert_troubleshooter", "git_master_engineering", "terminal_mastery_zsh_fish", 
        "tmux_session_persistence", "vim_neovim_ide_speed", "cli_bash_perl_one_liners", 
        "linux_utility_powerhouse", "terminal_ui_tui_expert", "abu_fullstack_orchestration"
    ],
    "01_WEB_ENGINEERING": [
        "master_wordpress_woo_pro", "master_whatsapp_ecosystem", "astro_expert", 
        "react_master_architect", "preact_specialist", "nextjs_15_master", "nextjs_16_master", 
        "tailwindcss_engine", "typescript_master", "ui_ux_design_systems", "css_modern_engine", 
        "html_semantic_architect", "vuejs_pro", "svelte_master", "remix_architect", 
        "solidjs_specialist", "chrome_devtools_mastery", "core_web_vitals_optimizer", 
        "php_modern_engineering", "nodejs_backend_architect", "mobile_app_dev", "desktop_app_dev"
    ],
    "02_IA_AGENTIC": [
        "master_ai_orchestration", "agentic_multimodal_vision", "agentic_pair_programming_symbiosis", 
        "ai_governance_compliance", "ai_safety_guardrails", "chatbot_engineering", 
        "mlops_lifecycle_management", "ai_content_automation", "autonomous_workflow_engine", 
        "data_science_vix_expert", "free_ai_business_stack", "customer_support_automations", 
        "neuro_symbolic_reasoning", "ag_workflow_automation_master"
    ],
    "03_DATA_INFRA": [
        "master_cloud_infra_ops", "hostinger_management", "ferozo_donweb_management", 
        "litespeed_optimizer", "observability_expert", "edge_computing_expert", 
        "hardware_iot_integration", "hardware_web_serial_api", "postgresql_advanced", 
        "mysql_master", "sql_postgresql_tuning", "redis_hybrid_cache", "snowflake_data_warehouse", 
        "databricks_engineering", "apache_spark_expert", "horizontal_scaling_orchestrator", 
        "monorepo_orchestration", "ansible_automation", "terraform_iac", "kubernetes_foundations",
        "docker_orchestrator", "github_actions_cicd", "gitops_infra_continuous_sync",
        "jenkins_pipeline_expert", "platform_engineering_idp", "serverless_optimization_expert",
        "self_healing_infra_expert"
    ],
    "04_CYBER_OSINT": [
        "master_cybersecurity_sovereignty", "osint_expert_agent", "shadow_it_osint_advanced", 
        "autonomous_osint_agent", "classifieds_osint_moderation", "cybersecurity_auditor",
        "cybersecurity_hardening", "security_red_teaming", "zero_trust_architecture_expert",
        "zero_trust_ai_security", "anti_scraping_bot_defense", "git_security_secrets_defense",
        "bug_bounty_automation", "dark_web_intel", "vpn_proxy_detection_skillslocal"
    ],
    "05_GROWTH_FINTECH": [
        "master_seo_growth_hacking", "master_blockchain_crypto", "analytics_tracking_guru", 
        "google_ads_architect", "meta_ads_architect", "tiktok_ads_expert", 
        "email_marketing_crm_automation", "programmatic_advertising", "programmatic_lead_miner", 
        "omnichannel_marketing_loops", "linkedin_authority_automation", "social_graph_exploitation", 
        "pinterest_visual_seo_forge", "authority_link_building_osint", "anonymous_payment_gateways", 
        "payment_engineering", "local_payment_specialist", "subscription_engine_architecture", 
        "crypto_tax_sovereignty", "alegra_erp_integration", "dian_colombia_compliance", 
        "legaltech_automation", "crm_orchestrator_sales", "startup_operations_expert", 
        "low_code_automation", "ecommerce_growth_scientist", "cro_scientist", "growth_hacking_engineering",
        "technical_seo_expert", "programmatic_seo_expert", "schema_markup_guru", "google_search_console_mastery",
        "binance_api_orchestration", "binance_launchpad_strategy", "binance_liquidity_farming",
        "cex_dex_bridge_efficiency", "mev_blockchain_protection", "mev_searcher_tactics",
        "on_chain_alpha_scraping", "smart_contract_profit_auditing", "token_econometrics_expert",
        "tokenomics_sovereign_design", "blockchain_smart_contract_security", "defi_yield_farming_optimization",
        "liquidity_pool_management", "crypto_wealth"
    ],
    "06_FRONTIER": [
        "master_quantum_engineering", "spatial_workflow_architect", "digital_twin_synchronizer", 
        "vision_os_pro_engineering", "unreal_engine_industrial_sim", "spatial_mesh_reconstruction", 
        "industrial_iot_digital_twin", "edge_ai_neuromorphic", "ar_vr_spatial_computing", 
        "biotech_dtx_engineering", "cryogenic_hardware_interfaces", "post_quantum_migrate_master",
        "quantum_algorithm_optimization", "quantum_bridge_logistics", "quantum_computing_foundations",
        "quantum_error_correction_logic", "quantum_safe_cryptography", "hybrid_quantum_orchestrator"
    ],
    "07_ARCHIVE": [
        "ruby_on_rails_architect", "elixir_concurrency", "clean_architecture_master", "migration_guru",
        "qa_automation", "enterprise_resilience", "sustainable_green_engineering", "green_software_architect"
    ]
}

def nuclear_split():
    print("--- Iniciando Reestructuracion Nuclear...")
    
    # Asegurar que los directorios de sectores existan
    for sector in SECTORS.keys():
        path = os.path.join(SKILLS_DIR, sector)
        if not os.path.exists(path):
            os.makedirs(path)

    # Mover habilidades
    all_moved = []
    for sector, skills in SECTORS.items():
        sector_path = os.path.join(SKILLS_DIR, sector)
        for skill in skills:
            src = os.path.join(SKILLS_DIR, skill)
            dst = os.path.join(sector_path, skill)
            
            if os.path.exists(src) and os.path.isdir(src) and src != sector_path:
                print(f"--- Moviendo {skill} -> {sector}")
                # Si el destino ya existe (por ejecuciones previas fallidas), lo borramos primero
                if os.path.exists(dst):
                    shutil.rmtree(dst)
                shutil.move(src, dst)
                all_moved.append(skill)

    # Cualquier cosa que quede fuera y sea un directorio, va a 07_ARCHIVE
    for item in os.listdir(SKILLS_DIR):
        item_path = os.path.join(SKILLS_DIR, item)
        if os.path.isdir(item_path) and item not in SECTORS.keys():
            print(f"--- Archivando remanente: {item}")
            dst = os.path.join(SKILLS_DIR, "07_ARCHIVE", item)
            if os.path.exists(dst):
                shutil.rmtree(dst)
            shutil.move(item_path, dst)

    print("--- Division Nuclear completada.")

if __name__ == "__main__":
    nuclear_split()
