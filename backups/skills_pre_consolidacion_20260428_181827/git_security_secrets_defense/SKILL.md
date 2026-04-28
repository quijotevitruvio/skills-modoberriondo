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