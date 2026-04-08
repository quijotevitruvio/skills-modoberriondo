# Ethical AI & LLM Guardrails Skill (Level 99)

The "Trusted AI" skill: Master-level orchestration of AI safety layers, focusing on prompt governance, hallucination mitigation, and unbiased inference pipelines using Guardrails AI or NVIDIA NeMo.

## [!IMPORTANT] The Golden Rule of AI Ethics
- **Human in the Loop (HITL)**: For high-stakes decisions (Medical, Financial, Legal), always require human approval before execution.
- **Explainability (XAI)**: An AI model should never be a "Black Box". Log the "Reasoning Process" (CoT) to audit why a decision was reached.
- **Trust But Verify**: Never trust the LLM output directly. Run "Guardrail Checks" for PII (Personal Identifiable Information), offensive content, and factual consistency.

## 🛠️ Level 99 Automation (Patterns)
- **PII Masking Pipeline**: Scan LLM inputs/outputs for sensitive data (Emails, Passwords) and mask them before they hit the model or logs.
- **Self-Correction Loop**: If a guardrail fails (e.g. low-confidence factual check), automatically trigger a "Refine" prompt to fix the output.
- **Bias Monitoring**: Regularly audit model responses against a "Golden Set" of unbiased queries to ensure fairness across demographics.

## Command Library (Execution & Monitoring)
> [!NOTE]
> Use these to secure your AI interactions instantly.

- **Fast PII Scan (Using Presidio/Simulated)**:
  ```bash
  python -c "import scan; print(scan.detect_pii('Hello, my email is test@example.com'))"
  ```
- **Run Guardrail Suite**:
  ```bash
  guardrails-ai run --config rails.yml
  ```
- **Audit Hallucination (NLI Check)**:
  ```bash
  python -c "import check; print(check.verify_fact(context, answer))"
  ```

## Advanced Techniques
- **Adversarial Testing (Red Teaming)**: Purposely attempt to "Jailbreak" your AI with complex prompts to identify vulnerabilities.
- **Retrieval Augmented Integrity**: Use RAG not only for data but for "Constraint Injection" to keep the AI within set parameters.
- **Constitutional AI**: Define a set of principles ("The Constitution") that the AI must follow to remain helpful and harmless.

## Actionable Script: Guardrail Check Pro
- **[guardrail-check.py](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/ethical_ai_guardrails/scripts/guardrail-check.py)**: A Python utility to intercept LLM responses and audit them for PII, sentiment, and factual grounding.

## Inter-Skill Integration
- **With AI Engineering (RAG)**: Ethical AI is the "Filter" that sits between your Vector Store and the final user response.
- **With Cybersecurity Hardening**: Protect your LLMs from "Prompt Injection" attacks as if they were SQL injections.
- **With n8n**: Automated daily "Compliance Report" that logs all blocked interactions for legal auditing.
