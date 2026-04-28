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