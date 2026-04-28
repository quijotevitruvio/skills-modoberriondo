# n8n Automation Expert Skill (Level 99)

Master-level orchestration for high-reliability, multi-layer autonomous business logic and real-time data synchronization.

## [!IMPORTANT] Enterprise-Grade Reliability
- **Global Error Handling**: Mandatory "Error Trigger" node in every production workflow. Route all exceptions to a dedicated "Incident Manager" workflow.
- **Data Retention**: Set `N8N_EXECUTIONS_DATA_MAX_AGE_HOURS=168` (7 days) for high-frequency tasks to prevent database bloat.
- **Environment Parity**: Use `{{ $env["VAR_NAME"] }}` for all API keys, database credentials, and secret tokens.

## 🛠️ Level 99 Automation (Patterns)
- **The "State Machine" Sync**:
  - Use a "Merge" node with "Keep Only Matches" to synchronize WooCommerce orders with CRM records based on a unique transaction hash.
- **Self-Healing Workflows**: 
  - If an "HTTP Request" fails with a 429 (Rate Limit), use a "Wait" node with exponential backoff and a "Max Tries" counter.

## Command Library (n8n-mcp & API)
> [!NOTE]
> Use these via the agentic interface to manage the n8n ecosystem at scale.

- **Bulk Purge Failed Executions**:
  ```bash
  (Using n8n-mcp) n8n_executions action="delete" status="error"
  ```
- **Force Trigger Production Webhook**:
  ```bash
  curl -X POST "https://n8n.mysite.com/webhook/ID" \
       -H "X-N8N-API-KEY: YOUR_API_KEY" \
       -d '{"event":"customer_created","data":{"id":123}}'
  ```
- **Sync Workflow Version (Rollback)**:
  ```bash
  (Using n8n-mcp) n8n_workflow_versions mode="rollback" workflowId="ID" versionId="12"
  ```

## Advanced AI-Agent Integration
- **The "Brain" Node**: Connect the **n8n AI Agent** node to a specialized vector store (Pinecone/Weaviate) to give your workflows "Contextual Memory" of your business documents.
- **Dynamic Routing**: Use a "Category" AI node to classify incoming emails (Support vs Sales) and route them to the correct sub-workflow without manual rules.

## High-Performance Monitoring
- **Workflow Health Metrics**: Build a "Status Dashboard" in n8n that checks the availability of your 10 most critical external APIs every 15 minutes.
- **Disk Usage Alert**: Trigger a WhatsApp alert if the n8n binary's volume is > 85% full to prevent execution crashes.

## Advanced Error Management & Circuit Breakers
- **Global Error Handling (The "Safety Net")**: Mandatory use of the "Error Trigger" node in every production workflow. Route all exceptions to a dedicated "Incident Manager" workflow for triage.
- **Circuit Breaker Logic**: If an external API (e.g. OpenAI or Stripe) returns a 5xx error 3 times in a row, the workflow should automatically "trip" and pause all related executions for 5 minutes, notifying the admin via WhatsApp.
- **Exponential Backoff**: Use the "Wait" node with dynamic delay calculation (e.g., `{{ 5 * Math.pow(2, $node["HTTP"].retryCount) }}`) for stable retries.

## Actionable Script: n8n Error Master
- **[n8n-error-handler.json](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/n8n_automation/scripts/n8n-error-handler.json)**: A ready-to-import n8n workflow template to handle global errors and trigger Slack/WhatsApp alerts.

## Inter-Skill Integration
- **With Cybersecurity**: Automated "IP Ban" loop that detects excessive 401/403 errors and updates the **Cloudflare WAF** IP list via API.
- **With n8n Cloud Architect**: Use n8n to monitor the health of your Docker containers and trigger automated restarts.
- **With FinOps**: Weekly "Cloud Spend" summary sent to the CFO's email with a breakdown of cost per project.


