# [ES] n8n Governance, RBAC & Security

## 🎯 Objetivo
Implementar controles de acceso, auditoría y seguridad de grado empresarial en entornos de automatización n8n.

## 🛠️ Stack Técnico
- **Features**: RBAC (Role-Based Access Control), Source Control (Git integration).
- **Security**: HashiCorp Vault (External Secrets), Credential encryption.
- **Monitoring**: Workflow Audit Logs.

## 🚀 Capacidades Críticas
1. **Segregación de Entornos**: Ambientes de Dev, Staging y Prod con credenciales aisladas.
2. **Auditoría de Ejecución**: Registro de quién ejecutó qué y con qué datos.
3. **Secret Management**: Integración con gestores de secretos externos para evitar hardcoding.

## 📚 Referencias
- [n8n Enterprise Security](https://docs.n8n.io/enterprise/)
- [OWASP Automation Security](https://owasp.org/)
