# [ES] Optimización de Costos FinOps
# [EN] FinOps Cost Optimization

[ES] Alineación financiera y operativa para reducir el gasto innecesario en nube.
[EN] Financial and operational alignment to reduce cloud waste.


## [!IMPORTANT] The Golden Rule of FinOps
- **Visibility Over Optimization**: You cannot optimize what you do not measure. Implement comprehensive tagging (e.g., `Project`, `Env`, `Owner`) BEFORE attempting to cut costs.
- **Unit Economics**: Measure the cost per user or cost per transaction, not just the total bill. A $10k bill is great if it supports $1M in revenue.
- **Right-Sizing Over Stopping**: Don't just turn off servers; match the instance size to the actual CPU/RAM profile (Target 60-80% utilization).

## 🛠️ Level 99 Automation (Patterns)
- **Spot Instance Orchestration**: Automate the use of AWS Spot Instances for non-critical workloads (CI/CD, Batch processing) for up to 90% savings.
- **Auto-Scaling Governance**: Implement strict scaling-in policies to ensure that clusters shrink as fast as they grow.
- **Storage Lifecycle Management**: Automatically move "Cold" data (Logs, old snapshots) to Glacier or Archive tiers after 30 days.

## Command Library (Execution & Savings)
> [!NOTE]
> Use these to identify cloud waste instantly.

- **List Unattached EBS Volumes (AWS)**:
  ```bash
  aws ec2 describe-volumes --filters Name=status,Values=available --query 'Volumes[*].VolumeId'
  ```
- **Find Underutilized Cloud SQL Instances (GCP)**:
  ```bash
  (Using gcloud) Look for instances with < 5% CPU average over 7 days.
  ```
- **Cleanup Abandoned Snapshots**:
  ```bash
  aws ec2 describe-snapshots --owner-ids self --query 'Snapshots[?StartTime<`2024-01-01`].[SnapshotId]'
  ```

## Advanced Techniques
- **Commitment-Based Discounts (RI/SP)**: Strategic purchasing of Reserved Instances and Savings Plans based on a 1-year usage forecast.
- **Serverless Optimization**: Fine-tune Lambda/Cloud Run memory limits to find the "Sweet Spot" where performance and cost meet.
- **Data Transfer Audit**: Identify expensive inter-region or egress traffic patterns and move resources to the same VPC/Region.

## Actionable Script: Cost Audit Pro
- **[cost-audit.sh](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/finops_cost_optimization/scripts/cost-audit.sh)**: A high-speed shell script to identify unused cloud assets and suggest immediate "Easy-Win" savings.

## Inter-Skill Integration
- **With AWS/GCP Cloud Architect**: FinOps is the "Accountant" that audits the Architect's designs.
- **With n8n**: Automated weekly "Cost Report" sent to WhatsApp with a breakdown of "Waste vs Value".
- **With Performance Engineering**: Balance the "100ms Goal" with the "Lowest Possible Cost" goal.