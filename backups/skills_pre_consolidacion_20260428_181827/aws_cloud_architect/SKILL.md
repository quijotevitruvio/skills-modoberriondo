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