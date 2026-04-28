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

