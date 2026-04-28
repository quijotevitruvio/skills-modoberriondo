# --- MASTER CYBERSECURITY SOVEREIGNTY
Consolidated Knowledge Base - SkillsLocal Sovereign Environment


--- 
## --- Sub-Skill: cybersecurity_auditor
# [ES] Auditor de Ciberseguridad
# [EN] Cybersecurity Auditor

[ES] Inspección y verificación de políticas y controles de seguridad digital.
[EN] Digital security policy and control inspection and verification.


--- 
## --- Sub-Skill: cybersecurity_hardening
# [ES] Blindaje de Ciberseguridad
# [EN] Cybersecurity Hardening

[ES] Fortalecimiento de sistemas y redes contra vectores de ataque conocidos.
[EN] Hardening systems and networks against known attack vectors.


## [!IMPORTANT] Perimeter & Identity Protection
- **Zero-Trust Access**: Mandatory Cloudflare Access (ZTA) for `/wp-admin/` and SSH. Bypass IP whitelist for specific "Safe Devices".
- **2FA Enforcement**: Mandatory TOTP (Google Authenticator/Authy) for ALL roles with "Edit" capabilities.
- **Login Obfuscation**: Move the login URL to a dynamic, non-guessable path to drop 99% of bot traffic.

## 🛠️ Level 99 Automation (Scripts)
- **One-Click Site Hardening**: [harden.sh](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/cybersecurity_hardening/scripts/harden.sh)
  - *Usage*: Run via Bash to instantly set recursive permissions, block XML-RPC, and disable directory indexing.

## Command Library (Security Auditing)
> [!NOTE]
> Use these to detect intrusions and vulnerabilities in real-time.

- **Check for Modified Core/Plugin Files**:
  ```bash
  wp core verify-checksums && wp plugin verify-checksums --all
  ```
- **Audit Recent Logins**:
  ```bash
  tail -n 100 /var/log/auth.log | grep "Accepted"
  ```
- **Automated Vuln Scan**:
  ```bash
  npx -y wpscan --url https://mysite.com --enumerate ap,at,tt,cb,dbe --threshold 80
  ```

## Advanced Server & Protocol Hardening
- **HTTP Security Headers**:
  - `Content-Security-Policy (CSP)`: Strict mode. Disallow "unsafe-inline" where possible.
  - `Permissions-Policy`: Disable camera, mic, and geolocation at the browser level.
- **File System Lockdown**: 
  - `wp-config.php`: `440` (Read-only for owner/group).
  - `.htaccess`: `440`.
  - Disallow PHP execution in `/wp-content/uploads/`.

## Proactive Threat Monitoring
- **Intrusion Detection (IDS)**: Use n8n to parse web server error logs for high-frequency `404` (Scan) or `403` (Probing) and auto-ban IPs via Cloudflare API.
- **Credential Monitoring**: Alert via WhatsApp if an admin-level user is created or if a password is changed from an unrecognized IP.

## Active Defense & Red Teaming
- **Automated Penetration Testing**: Run regular "Self-Attacks" to identify vulnerabilities before hackers do.
- **WAF Custom Rules**: Deploy specialized Cloudflare WAF rules to block Layer 7 DDoS and SQLi probes.
- **Honey-Pots**: Create "Fake" admin URLs that instantly ban any IP that attempts to access them.

## Actionable Script: Pentest Scanner
- **[penetration-test.js](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/cybersecurity_hardening/scripts/penetration-test.js)**: A frontend/backend utility to identify common injection points and misconfigured headers.

## Inter-Skill Integration
- **With System Architecture**: Implement "Immutable Infrastructure" where the server is destroyed and rebuilt from a clean Docker image every 24 hours.
- **With n8n**: Automated daily malware scan using the **Sucuri** or **VirusTotal** API nodes.



--- 
## --- Sub-Skill: security_red_teaming
# [ES] Seguridad: Red Teaming
# [EN] Security Red Teaming

[ES] Pruebas de ataque ofensivo para detectar grietas en la defensa.
[EN] Offensive attack testing to detect cracks in defense.


--- 
## --- Sub-Skill: zero_trust_architecture_expert
# [ES] Experto en Arquitectura Zero Trust
# [EN] Zero Trust Architecture Expert

[ES] Diseño de redes berracas donde nada se valida por defecto.
[EN] Powerful network design where nothing is trusted by default.
---
description: SkillsLocal Expert Skill - Advanced infrastructure security standards.
---


## 🎯 Objective
Mastery of Advanced infrastructure security standards. within the SkillsLocal Technical Sovereignty framework.

## 🛠️ Expert Capabilities
- Advanced orchestration of zero_trust_architecture_expert protocols.
- Autonomous debugging and optimization.
- High-scale deployment and scaling patterns.

## 📜 Operation Rules
1. **Precision First**: All implementations must follow X.Y.Z versioning.
2. **Sovereignty**: No dependencies on external unverified code.
3. **No Placeholders**: Always generate production-ready artifacts.

## 🚀 Execution Pattern
- `/build`: Trigger autonomous improvement of this skill.
- `/verify`: Run deep audit of current implementation.

--- 
## --- Sub-Skill: zero_trust_ai_security
# [ES] Seguridad de IA: Zero Trust
# [EN] Zero Trust AI Security

[ES] Protección berraca de modelos y datos en entornos desconfiados.
[EN] Powerful model and data protection in distrustful environments.


## 🛡️ Supply Chain Security
- **Model Poisoning Defense**: Verifying model weights and datasets against malicious tampering.
- **Supply Chain Integrity (SLSA)**: Ensuring traceability and security from training to deployment.

## 🧱 AI Perimeters
- **Prompt Injection & Jailbreak Defense**: Implementing semantic firewalls to detect and block malicious prompt attacks.
- **Output Sanitization**: Filtering AI-generated content to prevent data leakage and malicious code injection.

## 🔑 Identity & Access (IAM)
- **Granular Token Governance**: Managing API keys and tokens with ephemeral, identity-based permissions.
- **Encryption at Rest & Transit**: Hardening model weights using HSMs and encrypted storage.

--- 
## --- Sub-Skill: anti_scraping_bot_defense
# [ES] Defensa Anti-Scraping y Bots
# [EN] Anti-Scraping Bot Defense

[ES] Protección blindada contra ataques de extracción de datos y tráfico automatizado.
[EN] Armored protection against data scraping and automated traffic attacks.


## 🛡️ Perimeter Defenses
- **Behavioral Analysis**: Identifying non-human traffic patterns (mouse movement, request cadence).
- **TLS Fingerprinting**: Detecting bot frameworks based on their handshake characteristics (JA3).
- **Honeypots**: Creating hidden links and data points to trap and flag automated crawlers.

## 🛠️ Mitigations
- **Dynamic Rate Limiting**: Scaling friction based on IP reputation and user behavior.
- **Payload Obfuscation**: Strategically changing HTML structures and JS logic to break specialized scrapers.
- **Proof-of-Work (PoW)**: Requiring client-side computation for high-value requests to increase bot costs.

## 📊 Analytics
- **Bot/Human Ratio Monitoring**: Visualizing traffic composition to identify new attack vectors.

--- 
## --- Sub-Skill: git_security_secrets_defense
# [ES] Defensa de Secretos en Git
# [EN] Git Security Secrets Defense

[ES] Protección contra fugas de credenciales y API keys en el historial de código.
[EN] Protection against credential and API key leaks in code history.


## 🛡️ Identity & Verification
- **GPG/SSH Commit Signing**: Implementing mandatory cryptographic verification for every commit to ensure non-repudiation.
- **SSH Hardening**: Architecting secure access using FIDO2/Hardware-backed keys for local and remote repository interaction.

## ⚙️ Secrets Prevention & Response
- **Continuous Scanning (Trufflehog/Gitleaks)**: Integrating real-time scanning in pre-commit hooks and CI/CD pipelines to block secret push attempts.
- **Incident Response**: Mastering the surgical removal of exposed credentials from full Git history using `git-filter-repo` and credential revocation.

## 🧱 Critical Policy Enforcement
- **Branch Protection Rules**: Designing sophisticated merge requirements, code review policies, and status check gates.
- **Sensitive Path Monitoring**: Automated alerts and blocks for modifications to critical files like `.env`, `.pem`, or configuration secrets.

--- 
## --- Sub-Skill: bug_bounty_automation
# [ES] Automatización de Caza de Errores
# [EN] Bug Bounty Automation

[ES] Escaneo y reporte automatizado de vulnerabilidades para recompensas.
[EN] Automated vulnerability scanning and reporting for bounties.


## 🔍 Discovery Pipelines
- **Asset Reconnaissance**: Automating the discovery of subdomains, IP ranges, and cloud buckets via tools like `subfinder` and `naabu`.
- **Fuzzing at Scale**: Orchestrating distributed `ffuf` or `gobuster` tasks to identify hidden directories and endpoints.

## 🛡️ Vulnerability Orchestration
- **Nuclei Mastery**: Designing custom templates for identifying zero-day vulnerabilities and common misconfigurations (CVSS 8.0+).
- **Automated Exploitation (POCs)**: Scripting proof-of-concept exploits to verify vulnerabilities without manual intervention.

## ⚙️ Workflow Integration
- **Bug Capture & Reporting**: Automatically formatting discovery data into professional reports for platforms like HackerOne or Bugcrowd.
- **Continuous Monitoring**: Setting up webhook alerts for new asset appearances and changed security postures.

--- 
## --- Sub-Skill: dark_web_intel
# [ES] Inteligencia de Red Oscura
# [EN] Dark Web Intel

[ES] Monitoreo y rastreo de amenazas en foros y mercados subterráneos.
[EN] Threat monitoring and tracking on underground forums and markets.


--- 
## --- Sub-Skill: vpn_proxy_detection_vanguard
# [ES] Detección de VPN y Proxy SkillsLocal
# [EN] Vpn Proxy Detection SkillsLocal

[ES] Identificación de tráfico oculto para seguridad digital berraca.
[EN] Hidden traffic identification for powerful digital security.
---
description: SkillsLocal Expert Skill - Detección táctica de tráfico automatizado y enmascaramiento de IP para proteger la integridad de la plataforma.
---


## 🎯 Objective
Mastery of Detección táctica de tráfico automatizado y enmascaramiento de IP para proteger la integridad de la plataforma. within the SkillsLocal Technical Sovereignty framework.

## 🛠️ Expert Capabilities
- Advanced orchestration of vpn_proxy_detection_vanguard protocols.
- Autonomous debugging and optimization.
- High-scale deployment and scaling patterns.

## 📜 Operation Rules
1. **Precision First**: All implementations must follow X.Y.Z versioning.
2. **Sovereignty**: No dependencies on external unverified code.
3. **No Placeholders**: Always generate production-ready artifacts.

## 🚀 Execution Pattern
- `/build`: Trigger autonomous improvement of this skill.
- `/verify`: Run deep audit of current implementation.
