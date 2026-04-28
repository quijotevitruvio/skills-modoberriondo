# Python Automation Expert Skill (Level 99)

Master-level data orchestration, focusing on high-frequency scraping, mass-data processing, and linking Python logic to n8n/WP systems via APIs.

## [!IMPORTANT] The Golden Rule of Python Automation
- **Virtual Environments**: Always use `venv` or `conda` for project isolation. Never pollute the system's global Python.
- **Error Handling**: Implement exhaustive `try-except-finally` blocks to handle network timeouts and missing data fields.
- **Type Hinting**: Use Python Type Hints (`x: str`, `-> list[dict]`) for absolute logic clarity in large scripts.

## 🛠️ Level 99 Automation (Patterns)
- **The "High-Frequency Scraper"**: Use `Playwright` or `Selenium-base` with stealth modes to bypass bot-detection algorithms.
- **Mass CSV/JSON Processing**: Use `Pandas` for sub-second data transformations and `Numpy` for high-performance mathematical operations.
- **Asyncio Parallelism**: Use `asyncio` and `aiohttp` to perform thousands of concurrent API requests without overloading the CPU.

## Command Library (Diagnostics & Execution)
> [!NOTE]
> Use these to analyze and fix Python automations instantly.

- **Fast Pip Audit (Security)**:
  ```bash
  (Using n8n or Python) pip-audit --local
  ```
- **Check CPU usage (CLI-style)**:
  ```bash
  python -m cProfile -s time script.py
  ```
- **Generate `requirements.txt`**:
  ```bash
  pip freeze > requirements.txt
  ```

## Advanced Techniques
- **headless-scraping**: Master the use of headless browsers to automate complex JS-rendered web pages.
- **REST-to-Python**: Use `FastAPI` to create ultra-fast wrapper APIs for your Python scripts so they can be called from n8n or WordPress.
- **Data Cleanup**: Implement "Fuzzy String Matching" with `FuzzyWuzzy` to clean up inconsistent CRM data.

## Massive-Scale Task Queues
- **Celery + Redis/RabbitMQ**: Offload heavy computations (Image processing, Scrapers) from your main API to a fleet of background workers.
- **Task Retries & Exponential Backoff**: Ensure your workers never lose data due to transient network errors or rate-limits.
- **Distributed Scheduling (Celery Beat)**: Run recurring tasks (e.g. daily database cleanup or CRM sync) with precision across multiple nodes.

## Actionable Script: Background Worker Pro
- **[worker-init.py](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/python_automation_expert/scripts/worker-init.py)**: A Level 99 boilerplate to initialize a Celery worker with Redis as a broker and custom error handling.

## Inter-Skill Integration
- **With MLOps Lifecycle**: Use Python workers to trigger model retraining asynchronously when new data is ingested.
- **With WhatsApp Integration**: Handle thousands of incoming messages by queuing them for response generation, ensuring no message is dropped.
- **With FinOps**: Run massive "Cost Audits" in the background across 100+ cloud accounts without blocking the main dashboard.
