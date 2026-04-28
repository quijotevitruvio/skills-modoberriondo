# --- MASTER CLOUD INFRA OPS
Consolidated Knowledge Base - SkillsLocal Sovereign Environment


--- 
## --- Sub-Skill: aws_cloud_architect
# [ES] Arquitecto de Nube AWS
# [EN] AWS Cloud Architect

[ES] Diseño de infraestructuras escalables y resilientes en Amazon Web Services.
[EN] Scalable and resilient infrastructure design on Amazon Web Services.


## [!IMPORTANT] The Golden Rule of AWS Security
- **Never Use the Root Account**: Always use IAM Users/Roles with the principle of Least Privilege.
- **S3 Public Access Block**: Ensure that public access is blocked at the account and bucket level unless specifically required for hosting.
- **Server-Side Encryption**: Always enable SSE-S3 or SSE-KMS for your S3 data to ensure it's encrypted at rest.

## 🛠️ Level 99 Automation (Patterns)
- **The "Serverless" API (Lambda + API Gateway)**: Build infinitely scalable backends that cost $0 when not in use.
- **Edge Orchestration (CloudFront + S3)**: Host static CRM assets globally for < 50ms latency.
- **Infrastructure as Code (IaC)**: Use CloudFormation or Terraform to deploy entire environments in minutes.

## Command Library (Execution & Diagnostics)
> [!NOTE]
> Use these to manage your AWS resources instantly via the CLI.

- **Check S3 Bucket Size and Object Count**:
  ```bash
  aws s3 ls s3://your-bucket-name --recursive --human-readable --summarize
  ```
- **Sync Local Assets to S3 (High Performance)**:
  ```bash
  aws s3 sync ./local-folder s3://your-bucket-name --delete --acl public-read
  ```
- **Invalidate CloudFront Cache (Post-Deploy)**:
  ```bash
  aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
  ```

## Advanced Techniques
- **S3 Lifecycle Policies**: Automatically move old logs to "S3 Glacier" after 90 days to save 80%+ on storage costs.
- **VPC Peering**: Securely connect different AWS accounts or regions without exposing data to the public internet.
- **CloudWatch Alarms**: Set up billing alerts to catch "Cost Spikes" before they become expensive.

## Serverless Orchestration (Step Functions)
- **State Machines**: Coordinate multiple AWS Lambda functions into a complex, visual workflow with built-in retry logic and error handling.
- **Wait States**: Implement time-based delays (e.g. wait 24 hours before sending a follow-up email) without paying for idle compute time.
- **Parallel Execution**: Run multiple branches of logic simultaneously and aggregate the results for high-performance data processing.

## Actionable Script: Step Functions Pro
- **[step-functions-init.json](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/aws_cloud_architect/scripts/step-functions-init.json)**: A Level 99 Amazon States Language (ASL) template to orchestrate a multi-step CRM lead-processing workflow.

## Inter-Skill Integration
- **With FinOps**: Use Step Functions to automate the "Cloud Waste" cleanup process across multiple regions.
- **With AI Engineering (RAG)**: Orchestrate the "Vector Indexing" pipeline: 1. Extract, 2. Chunk, 3. Embed, 4. Upsert.
- **With Cybersecurity Hardening**: Automate the "Incident Response" workflow to isolate compromised EC2 instances and revoke IAM keys.

--- 
## --- Sub-Skill: gcp_cloud_architect
# [ES] Arquitecto de Google Cloud (GCP)
# [EN] GCP Cloud Architect

[ES] Diseño de infraestructuras inteligentes en Google Cloud Platform.
[EN] Intelligent infrastructure design on Google Cloud Platform.


## [!IMPORTANT] The Golden Rule of GCP Security
- **Use Service Accounts**: Never use your own user credentials for production services. Create specific Service Accounts with the narrowest scope possible.
- **Uniform Bucket-Level Access**: Use this for GCS buckets to simplify permission management and avoid "Public Leakage" via individual object ACLs.
- **Data Residence**: Ensure your GCS/BigQuery datasets are located in the region closest to your users to comply with GDPR/Local regulations and reduce latency.

## 🛠️ Level 99 Automation (Patterns)
- **Container Deployment (Cloud Run)**: Deploy your Dockerized Node.js/Python apps in seconds with automatic scaling to Zero.
- **Big Data Pipelines (BigQuery + GCS)**: Automatically ingest logs or CRM exports from GCS into BigQuery for instant Analysis.
- **Identity-Aware Proxy (IAP)**: Secure your internal CRM tools without a VPN by using Google's Zero-Trust architecture.

## Command Library (Execution & Diagnostics)
> [!NOTE]
> Use these to manage your Google Cloud resources instantly via the `gcloud` or `gsutil` CLI.

- **Check GCS Bucket Usage and Objects**:
  ```bash
  gsutil du -sh gs://your-bucket-name
  ```
- **Sync Local Assets to GCS (Fast & Clean)**:
  ```bash
  gsutil -m rsync -r ./local-folder gs://your-bucket-name
  ```
- **Deploy Container to Cloud Run (One-liner)**:
  ```bash
  gcloud run deploy --image gcr.io/your-project/your-image --platform managed
  ```

## Advanced Techniques
- **Object Lifecycle Management**: Automatically delete temp files or move data to "Archive" (Coldline/Nearline) after X days to save costs.
- **Cross-Project Communication**: Shared VPCs to allow services in different Google Cloud projects to communicate securely.
- **BigQuery Materialized Views**: Speed up complex analytical dashboards by 10x-100x using pre-computed materialized views.

## BigQuery ML (In-Database Machine Learning)
- **SQL-Based ML**: Create and execute machine learning models directly in BigQuery using standard SQL. No need to export data to Python for common tasks like Regression or Clustering.
- **AutoML Integration**: Leverage Google's AutoML directly from a SQL query to find the best model for your CRM lead scoring automatically.
- **Vertex AI Remote Models**: Call LLMs (Gemini) or other custom Vertex AI models from BigQuery SQL to perform sentiment analysis on millions of rows.

## Actionable Script: BigQuery ML Pro
- **[bigquery-ml-init.sql](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/gcp_cloud_architect/scripts/bigquery-ml-init.sql)**: A Level 99 SQL template to create, train, and evaluate a lead-conversion prediction model directly in BigQuery.

## Inter-Skill Integration
- **With MLOps Lifecycle**: BigQuery ML simplifies the "Training" phase by keeping data and model in the same highly-scalable environment.
- **With CRM Analytics**: Use BigQuery ML to predict "Churn" based on customer activity logs and deal history.
- **With FinOps**: Analyze cloud billing exports with BigQuery ML to identify "Anomalies" in cost patterns across all GCP projects.

--- 
## --- Sub-Skill: cloudflare_expert
# [ES] Experto en Cloudflare
# [EN] Cloudflare Expert

[ES] Seguridad, CDN y computación en el borde (Workers) con Cloudflare.
[EN] Security, CDN, and edge computing (Workers) with Cloudflare.


## [!IMPORTANT] DNS & Proxy Architecture
- **Proxied Status (Full Proxy)**: Enable for all traffic. Bypass only for non-HTTP services.
- **DNSSEC**: Mandatory for TLD protection. Enable in Cloudflare and add the DS record to your registrar.
- **Apex Domain**: Use CNAME Flattening to point the root domain to a CDN or hosting CNAME.

## 🛠️ Level 99 Automation (Scripts)
- **WAF Bulk Sync**: [waf-sync.sh](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/cloudflare_expert/scripts/waf-sync.sh)
  - *Usage*: Use this script to upload pre-hardened firewall rules via API for zero-config security.

## Command Library (API & Analytics)
> [!NOTE]
> Use these when API-based automation is needed or via Cloudflare CLI (`wrangler`).

- **Purge Cache by Tag**:
  ```bash
  curl -X POST "https://api.cloudflare.com/client/v4/zones/ZONE_ID/purge_cache" \
       -H "Authorization: Bearer API_TOKEN" \
       --data '{"tags":["wordpress","css"]}'
  ```

## Advanced Security (WAF & Zaraz)
- **WAF Custom Rules**:
  - **Block XML-RPC & Config**: Use the provided `waf-sync.sh` script to block `.htaccess` and `wp-config.php` access.
  - **Bot Management**: "Verified Bot" skip rule to allow Google/Bing crawling while challenging "Unknown" automated agents.
- **Zaraz (Zero-Latency Tracking)**: 
  - Offload GTM, Facebook Pixel, and TikTok Pixel to the edge via Zaraz. This improves INP/LCP by 40%+.

## Performance & Edge Optimization
- **Smart Tiered Cache**: Drastically reduces egress costs and origin load.
- **Brotli + Early Hints**: Always enabled for lower TTFB.
- **Cache Everything (Advanced)**: Use "Cache Reserve" (Paid) to keep static assets at the edge for up to 30 days without re-fetching.

## Inter-Skill Integration
- **With LiteSpeed**: Enable "Stale-While-Revalidate" in both to eliminate origin wait time.
- **With WP-WooCommerce**: Disable edge caching for `/cart/` and `/checkout/` using "Cache Level: Bypass" Page Rules.



--- 
## --- Sub-Skill: terraform_iac
# [ES] Infraestructura como Código (Terraform)
# [EN] Terraform IaC

[ES] Despliegue berraco de recursos en nubes mediante código declarativo.
[EN] Powerful cloud resource deployment via declarative code.


--- 
## --- Sub-Skill: ansible_automation
# [ES] Automatización con Ansible
# [EN] Ansible Automation

[ES] Gestión de configuración y despliegue de infraestructura como código.
[EN] Configuration management and infrastructure-as-code deployment.


--- 
## --- Sub-Skill: docker_orchestrator
# [ES] Orquestador de Docker
# [EN] Docker Orchestrator

[ES] Coordinación eficiente de microservicios mediante contenedores.
[EN] Efficient microservice coordination using containers.


--- 
## --- Sub-Skill: kubernetes_foundations
# [ES] Fundamentos de Kubernetes
# [EN] Kubernetes Foundations

[ES] Control básico de orquestación de contenedores en la nube.
[EN] Basic container orchestration control in the cloud.


--- 
## --- Sub-Skill: github_actions_cicd
# [ES] CI/CD con GitHub Actions
# [EN] GitHub Actions CICD

[ES] Automatización total de pruebas, construcción y despliegue en GitHub.
[EN] Total test, build, and deployment automation on GitHub.


## [!IMPORTANT] The Golden Rule of CI/CD
- **Zero Human Touch**: Production should ONLY be deployable via a successful CI pipeline. Manual FTP/SSH deploys are restricted.
- **Fail Fast**: Run Linting and Unit Tests BEFORE the build step to save compute time and catch errors early.
- **Secrets Management**: Never use raw secrets. Use `secrets.GITHUB_TOKEN` or environment variables (e.g. `CLOUDFLARE_API_TOKEN`).

## 🛠️ Level 99 Automation (Patterns)
- **The "Staging Preview"**: Automatically deploy every Pull Request to a temporary "Preview" URL (e.g. using Cloudflare Pages / Vercel).
- **Security Scanners**: Integrate `snyk` or `npm audit` directly into the workflow to block merging of vulnerable code.
- **Matrix Builds**: Test your app against multiple Node.js versions (18, 20, 22) simultaneously to ensure forward compatibility.

## Command Library (Diagnostics & Execution)
> [!NOTE]
> Use these to manage and debug your GitHub Workflows instantly.

- **Check Workflow Run Status (CLI)**:
  ```bash
  (Using n8n or terminal) gh run list --workflow=deploy.yml
  ```
- **Force Re-run a Failed Job**:
  ```bash
  gh run rerun RUN_ID
  ```
- **Validate YAML Syntax**:
  ```bash
  (Using n8n or Python) Use a YAML validator to verify `workflow.yml` indentation.
  ```

## Advanced Techniques
- **Caching**: Use `actions/cache` for `node_modules` and `dist` folders to speed up build times by 50%+.
- **Reusable Workflows**: Create a single "Centralized Deploy" workflow and call it from multiple repositories to maintain architectural consistency.
- **Docker Orchestration**: Build and push Docker images to GCR/ECR only on "Version Tag" events.

## Advanced Deployment Strategies
- **Blue-Green Deployment**: Maintain two identical production environments (Blue/Green). Deploy to Green, test, and then flip the traffic switch at the Load Balancer level for zero-downtime and instant rollback.
- **Canary Releases**: Deploy a new version to only 5% of users. Monitor error rates (via Sentry/CloudWatch) and automatically roll back if errors spike.
- **Environment-Specific Runners**: Use "Self-Hosted Runners" for heavy build jobs or internal VPN-protected deployments.

## Actionable Script: Blue-Green Deploy Pro
- **[blue-green-deploy.sh](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/github_actions_cicd/scripts/blue-green-deploy.sh)**: A shell script to orchestrate the "Traffic Flip" between two production containers or server groups.

## Inter-Skill Integration
- **With System Architecture**: CI/CD is the "Heartbeat" that pumps new code into the architectural body.
- **With FinOps**: Monitor build minutes and use "Arm64" runners where possible for 30% lower cost.
- **With Cybersecurity**: Mandatory "SCA" (Software Composition Analysis) to block packages with known CVEs.

--- 
## --- Sub-Skill: docker_orchestration_mastery
# [ES] Maestría en Orquestación Docker
# [EN] Docker Orchestration Mastery

[ES] Gestión avanzada de contenedores y servicios distribuidos complejos.
[EN] Advanced container and complex distributed service management.


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

--- 
## --- Sub-Skill: gitops_infra_continuous_sync
# [ES] GitOps y Sincronización de Infra
# [EN] GitOps Infra Continuous Sync

[ES] Gestión de infraestructura basada en el estado declarado en Git.
[EN] Infrastructure management based on Git declared state.


## ⚙️ Reconciliation Engines
- **ArgoCD & Flux Mastery**: Designing self-healing infrastructure that automatically reverts manual changes to match Git state.
- **Helm & Kustomize Orchestration**: Leveraging templating and overlays for environment-specific infrastructure management.

## 🚀 Progressive Delivery
- **Flagger & Canary Deployments**: Automating a gradual rollout of infrastructure and app changes based on real-time metrics.
- **Rollback Automation**: Instant, zero-downtime regression to the previous Git commit upon failure detection.

## 🛡️ Multi-Cluster State
- **Fleet Management**: Synchronizing infrastructure across multiple clouds and regions from a single Git repository.
- **Policy Enforcement (OPA)**: Integrating "Guardrails as Code" specifically for GitOps workflows.

--- 
## --- Sub-Skill: jenkins_pipeline_expert
# [ES] Experto en Pipelines de Jenkins
# [EN] Jenkins Pipeline Expert

[ES] Automatización compleja de despliegue y orquestación CI/CD tradicional.
[EN] Complex deployment automation and traditional CI/CD orchestration.


--- 
## --- Sub-Skill: platform_engineering_idp
# [ES] Ingeniería de Plataforma (IDP)
# [EN] Platform Engineering IDP

[ES] Creación de portales de auto-servicio para desarrolladores soberanos.
[EN] Creation of self-service portals for sovereign developers.


## 🛠️ The IDP Foundation
- **Developer Self-Service**: Designing portals (Backstage / Port) for automated infrastructure provisioning and service scaffolding.
- **Golden Paths Architectures**: Standardizing CI/CD, monitoring, and security across the organization to reduce cognitive load.

## ⚙️ Orchestration & State
- **Control Planes (Crossplane / Terraform)**: Building unified abstractions for managing multi-cloud resources as Kubernetes objects.
- **Score & Environment Specs**: Using workload-centric specifications to decouple developer needs from infrastructure implementation.

## 📈 Scalability & Governance
- **Fleet Management**: Automating the lifecycle of thousands of services and clusters with GitOps patterns (ArgoCD/Flux).
- **Compliance as Code**: Integrating policy enforcement (OPA/Kyverno) directly into the developer workflow.

--- 
## --- Sub-Skill: serverless_optimization_expert
# [ES] Experto en Optimización Serverless
# [EN] Serverless Optimization Expert

[ES] Reducción de arranques en frío y costos en funciones Lambda/Cloud.
[EN] Cold start and cost reduction in Lambda/Cloud functions.


--- 
## --- Sub-Skill: self_healing_infra_expert
# [ES] Experto en Infraestructura Autoreparable
# [EN] Self Healing Infra Expert

[ES] Sistemas berracos que se recuperan automáticamente ante el fallo.
[EN] Powerful systems that automatically recover from failure.


## 🛡️ Proactive Resiliency
- **Autonomous Error Analysis**: Using LLM-driven agents to parse Nginx/PHP/Database logs in real-time, identifying the root cause of 5XX or 4XX errors.
- **Auto-Recovery Loops**: Implementing self-executing triggers (e.g., restarting crashed services, flushing Redis caches, or rolling back failed deployments).
- **Log Correlation & Intuition**: Training infrastructure agents to correlate disparate signals (high CPU + database deadlocks) to predict and prevent cascading failures.

## ⚙️ Adaptive Optimization
- **Dynamic Resource Scaling**: Automating the adjustment of VPS limits, memory pools, and worker threads based on real-time traffic demand.
- **Green Performance Tuning**: Optimizing server configurations for maximum energy efficiency and minimal token consumption during high-traffic surges.
- **Automated Security Patching**: Proactively identifying critical vulnerabilities and applying hotfixes in a staging mirror before committing to production.

## 🚀 Zero-Ops Sovereignty
- **Immutable Infrastructure Patterns**: Ensuring that if a component fails, the system spawns a fresh, healthy replica from a known-good state.
- **Intelligent Alerting**: Filtering out "noise" to only alert the human sovereign during high-severity architectural crises that require human judgment.
