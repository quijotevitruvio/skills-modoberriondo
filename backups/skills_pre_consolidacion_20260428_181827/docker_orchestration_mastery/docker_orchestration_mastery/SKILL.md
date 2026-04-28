# Docker & Orchestration Mastery Skill (Level 99)

Master-level container management, focusing on microservice orchestration, immutable infrastructure, and high-performance production clusters.

## [!IMPORTANT] The Golden Rule of Containerization
- **Immutable Infrastructure**: Never SSH into a container to fix a problem. Update the `Dockerfile` and redeploy.
- **Layer Optimization**: Use Multi-stage builds to keep production images tiny (e.g. `node:alpine` for the runtime).
- **Security Scans**: Use `trivy` or `docker scan` to find vulnerabilities in your base images BEFORE they hit production.

## 🛠️ Level 99 Automation (Patterns)
- **The "Sidecar" Strategy**: Use a dedicated Nginx sidecar container for SSL (Let's Encrypt) and compression, separating it from the app logic.
- **Microservices Orchestration**: Define a `docker-compose.yml` that links Redis, Postgres, and Node.js with a shared private network (`internal`).
- **Zero-Downtime Deployment**: Use `docker rollout` or `blue-green` staging to ensure no interruption during app updates.

## Command Library (Diagnostics & Execution)
> [!NOTE]
> Use these to manage your container fleet instantly.

- **Check Container Resource Usage (Real-time)**:
  ```bash
  docker stats --format "table {{.Name}}\t{{.CPUPerc}}\t{{.MemUsage}}"
  ```
- **Force Rebuild and Restart (Zero Cache)**:
  ```bash
  docker-compose build --no-cache && docker-compose up -d
  ```
- **Cleanup Dangling Layers (Free Disk Space)**:
  ```bash
  docker system prune -af --volumes
  ```

## Advanced Techniques
- **Secret Management**: Use `docker secrets` or environment variables injected via GitHub Actions for sensitive API keys.
- **Logging Aggregation**: Use the `json-file` log driver or stream logs to a centralized Datadog/Sentry sink.
- **Kubernetes (K8s) Logic**: Prepare for massive scale with Pods, Deployments, and Ingress controllers using a declarative `.yaml` approach.

## Actionable Script: Hardened Environment
- **[docker-compose-harden.yml](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/docker_orchestration_mastery/scripts/docker-compose-harden.yml)**: A master orchestration file for a Node.js + Postgres + Redis environment, pre-configured for high-load and secure isolation.

## Inter-Skill Integration
- **With n8n**: Run n8n as a Docker container for 100% stability and easy volume backups of your workflows.
- **With GitHub Actions**: Build and push Docker images to GCR/DockerHub on every `git push tag`.
- **With Cybersecurity**: Use non-root users inside containers (`USER node`) to prevent privilege escalation attacks.
