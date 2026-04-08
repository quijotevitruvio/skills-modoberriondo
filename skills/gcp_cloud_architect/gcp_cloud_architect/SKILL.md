# Google Cloud (GCP) Architect Skill (Level 99)

Master-level orchestration of Google Cloud Platform, focusing on GCS (Cloud Storage), Cloud Run (Container execution), BigQuery (Data analytics), and IAM (Identity and Access Management).

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
