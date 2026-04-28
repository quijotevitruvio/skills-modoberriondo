-- Level 99 BigQuery ML Prediction
-- Purpose: Predict if a lead will convert based on activity and source.

-- 1. Create Model (Wait 5-10 min for training)
CREATE OR REPLACE MODEL `vanguard_project.crm_data.lead_scoring_model`
OPTIONS(
  model_type='LOGISTIC_REG',
  auto_class_weights=TRUE,
  input_label_cols=['converted']
) AS
SELECT
  converted,
  lead_source,
  total_web_visits,
  total_time_on_web,
  last_activity
FROM
  `vanguard_project.crm_data.leads_table`
WHERE
  data_split = 'TRAIN';

-- 2. Evaluate Model Performance
SELECT
  *
FROM
  ML.EVALUATE(MODEL `vanguard_project.crm_data.lead_scoring_model`, (
    SELECT
      converted,
      lead_source,
      total_web_visits,
      total_time_on_web,
      last_activity
    FROM
      `vanguard_project.crm_data.leads_table`
    WHERE
      data_split = 'TEST'
  ));

-- 3. Predict Lead Conversion (Real-time in SQL)
SELECT
  lead_id,
  predicted_converted,
  predicted_converted_probs
FROM
  ML.PREDICT(MODEL `vanguard_project.crm_data.lead_scoring_model`, (
    SELECT
      lead_id,
      lead_source,
      total_web_visits,
      total_time_on_web,
      last_activity
    FROM
      `vanguard_project.crm_data.leads_new`
  ));
