# [ES] PromptOps y Ajuste Fino de IA
# [EN] AI PromptOps Finetuning

[ES] Optimización operativa de prompts y entrenamiento especializado de modelos.
[EN] Operational prompt optimization and specialized model training.


## [!IMPORTANT] The Golden Rule of AI Engineering
- **Version Your Prompts**: Treat prompts as code. Never hardcode them. Store them in a "Prompt Registry" (e.g., Langfuse or a dedicated JSON store) to allow for A/B testing and rollbacks.
- **Explain Before You Act (Chain-of-Thought)**: Instruct the model to "Think Step-by-Step" inside the prompt to improve accuracy by 40%+ on complex reasoning tasks.
- **Fine-Tune for Style, RAG for Knowledge**: Use Fine-tuning only when you need to change the model's structure or tone; use RAG when you need to feed it fresh, external knowledge.

## 🛠️ Level 99 Automation (Patterns)
- **Prompt Chaining**: Breakdown a complex user request (e.g. "Build a website for my business") into a sequence of smaller tasks (Sitemap -> Schema -> HTML -> CSS) to ensure maximum quality for each component.
- **Few-Shot Prompting**: Provide 3-5 high-quality examples of the output you expect inside the prompt. This is usually more effective than long, descriptive instructions.
- **Prompt Injection Defense**: Sanitize user inputs before passing them to the prompt to prevent the model from ignoring your system instructions (e.g. "Ignore all previous instructions...").

## Command Library (Execution & Eval)
> [!NOTE]
> Use these to evaluate and optimize your LLM outputs instantly.

- **Check for Prompt Sensitivity (Temperature Testing)**:
  ```bash
  (Using specialized tool) Compare outputs for Temp 0.1 vs Temp 0.7 for the same input.
  ```
- **Evaluate Hallucination Rate**:
  ```python
  (Using prompt-eval.py) Run 100 test cases and measure the "Faithfulness" of the output against the source.
  ```
- **Measure Token Efficiency**:
  ```javascript
  (Using tiktoken) console.log(tokenizer.encode("your-long-prompt").length);
  ```

## Advanced Techniques
- **RLHF (Reinforcement Learning from Human Feedback)**: Collect user feedback (Thumbs Up/Down) on your AI answers and use it to re-rank outputs or fine-tune lower-latency models.
- **Synthesized Data for Fine-tuning**: Use a large, smart model (GPT-4o) to generate thousands of "Question/Answer" pairs to fine-tune a smaller, cheaper, and faster model (Llama-3/Mistral).
- **Self-Correction Loops**: Instruct the model to "Review your own answer and find any mistakes" before returning the final response to the user.

## Actionable Script: Prompt Evaluator
- **[prompt-eval.py](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/ai_promptops_finetuning/scripts/prompt-eval.py)**: A Python utility to evaluate the accuracy and "hallucination rate" of different LLM prompts across test datasets.

## Inter-Skill Integration
- **With AI Engineering (RAG)**: This skill provides the "Instruction Set" that governs how the RAG data is consumed by the LLM.
- **With Node.js Backend Builder**: Implement "Streaming" responses (Server-Sent Events) to reduce perceived latency for the end user.
- **With Analytics Tracking Guru**: Track "AI Success Rate" as a core conversion metric in your CRM dashboards.