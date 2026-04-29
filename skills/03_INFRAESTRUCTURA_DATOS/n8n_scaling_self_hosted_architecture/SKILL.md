# [ES] n8n Scaling & Self-Hosted Architecture

## 🎯 Objetivo
Desplegar y escalar instancias de n8n para entornos empresariales de alta demanda con soberanía de datos total.

## 🛠️ Stack Técnico
- **Docker Swarm / Kubernetes**: Orquestación de contenedores.
- **Redis & Workers**: Ejecución asíncrona y escalado horizontal.
- **PostgreSQL**: Base de datos de alta disponibilidad para estados de workflow.

## 🚀 Capacidades Críticas
1. **Load Balancing**: Distribución de tráfico de webhooks para evitar cuellos de botella.
2. **Binary Storage**: Configuración de S3/Minio para manejo eficiente de archivos pesados.
3. **Disaster Recovery**: Backups automatizados de base de datos y archivos de configuración.

## 📚 Referencias
- [n8n Self-Hosting Documentation](https://docs.n8n.io/hosting/)
- [High Availability Patterns for Node.js](https://nodejs.org/en/docs/guides/)
