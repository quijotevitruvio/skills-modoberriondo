# [ES] Experto en Ciencia de Datos VIX
# [EN] Data Science VIX Expert

[ES] Análisis predictivo y modelado estadístico para el motor VIX.
[EN] Predictive analysis and statistical modeling for the VIX engine.


## [!IMPORTANT] The Golden Rule of Data Storytelling
- **Insight Over Information**: A dashboard with 50 charts is useless. A dashboard with 3 actionable "Aha!" insights is Level 99.
- **Accuracy is Integrity**: Never manipulate axes to exaggerate trends. Use standard statistical measures (Std Dev, Confidence Intervals) to present the "Truth".
- **Performance with Large Sets**: Don't render 100k SVG nodes in the browser. Use Canvas or WebGL (PixiJS/Three.js) for high-density data visualizations.

## 🛠️ Level 99 Automation (Patterns)
- **The "Dynamic Heatmap"**: Automatically correlate user behavior (clicks/time) with CRM conversion rates to identify UX bottlenecks.
- **Predictive Trendlines**: Use simple linear regression or LSTM models to forecast future revenue based on current lead velocity.
- **Interactive Force-Directed Graphs**: Visualize complex entity relationships (Account Hierarchy, Tech Stack links) with physics-based nodes.

## Command Library (Execution & Generation)
> [!NOTE]
> Use these to analyze and visualize your data streams instantly.

- **Fast Statistical Summary (Pandas CLI)**:
  ```bash
  python -c "import pandas as pd; df=pd.read_csv('data.csv'); print(df.describe())"
  ```
- **Generate a D3 Chart Template**:
  ```bash
  (Using npx) npx -y create-d3-app (Simulated)
  ```
- **Cross-Reference Data Sources**:
  ```python
  (In Python) merged_data = pd.merge(crm_df, analytics_df, on='user_id', how='inner')
  ```

## Advanced Techniques
- **Dimensionality Reduction (PCA/t-SNE)**: Simplify 50+ variables into a 2D or 3D visual cluster to identify "Hidden segments" of customers.
- **Real-Time Stream Visualization**: Connect D3.js to a WebSocket / MQTT feed for "Living Dashboards" that update every millisecond.
- **Bayesian Inference**: Move beyond A/B testing to "Thompson Sampling" for dynamic optimization of SaaS pricing or ad creative.

## Actionable Script: D3 Visualize Pro
- **[d3-visualize.js](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/data_science_vix_expert/scripts/d3-visualize.js)**: A script to initialize a high-performance interactive bar or line chart using D3.js and your CRM data.

## Inter-Skill Integration
- **With Big Data (Looker)**: Data Science provides the "Logic", while Looker provides the "Scale" and "User Interface".
- **With CRO Scientist**: Use statistical significance testing to validate every landing page experiment.
- **With n8n**: Automated daily "Anomaly Detection" that alerts you if revenue or traffic drops below 2-sigma from the mean.