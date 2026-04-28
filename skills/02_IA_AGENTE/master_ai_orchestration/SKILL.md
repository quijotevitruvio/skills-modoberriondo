# --- MASTER AI ORCHESTRATION
Consolidated Knowledge Base - SkillsLocal Sovereign Environment


--- 
## --- Sub-Skill: agentic_ai_system_design
# [ES] Diseño de Sistemas de IA Agéntica
# [EN] Agentic AI System Design

[ES] Arquitectura de agentes autónomos y flujos de trabajo inteligentes distribuidos.
[EN] Architecture of autonomous agents and distributed intelligent workflows.


## 🤖 Agent Architectures
- **Cognitive Loops**: Designing agents with sophisticated reasoning loops (Plan -> Act -> Reflect).
- **Tool Orchestration**: Implementing advanced function-calling patterns where agents choose and use external APIs dynamically.
- **Memory & Persistence**: Architecting long-term memory systems using Vector DBs and symbolic storage.

## ⚙️ Multi-Agent Ecosystems
- **Hierarchical Swarms**: Building manager-worker agent structures for complex mission execution.
- **Communication Protocols**: Designing inter-agent communication languages for collaborative problem solving.
- **Self-Healing Systems**: Engineering agents that can detect their own failures and retry or seek assistance.

## 🛡️ Governance & Scale
- **Decision Guardrails**: Implementing strict boundary logic to ensure autonomous agents remain within business and safety limits.
- **Real-time Monitoring**: Building observability dashboards to track agent thoughts, actions, and budget usage.

--- 
## --- Sub-Skill: ai_agents_orchestrator
# [ES] Orquestador de Agentes de IA
# [EN] AI Agents Orchestrator

[ES] Gestión centralizada y coordinación de múltiples agentes de inteligencia artificial.
[EN] Centralized management and coordination of multiple AI agents.


## 🤖 Framework Mastery
- **LangGraph**: Building cyclical, stateful agent graphs for complex task decomposition.
- **CrewAI**: Orchestrating role-playing agents with specialized tasks and collaborative delegation.
- **AutoGPT / BabyAGI**: Principles of autonomous goal setting and loop-based execution.

## 🧠 Memory & Context
- **Short-term vs Long-term Memory**: Management of thread-local state and vector database persistent memory.
- **Tools & Function Calling**: Designing robust toolsets (browsing, code execution, API calling) for agents.

## ⚙️ Governance & Safety
- **Human-in-the-loop (HITL)**: Implementing breakpoints for approval in sensitive agent actions.
- **Token Optimization**: Minimizing "infinite loops" and ensuring cost-effective reasoning via prompt engineering.

## 📦 Updatability
Tracks the latest versions of LangChain, LangGraph, and CrewAI via `requirements.txt`.

--- 
## --- Sub-Skill: ai_augmented_dev_workflows
# [ES] Flujos de Desarrollo Aumentados por IA
# [EN] AI Augmented Dev Workflows

[ES] Integración de IA en el ciclo de vida de desarrollo para máxima productividad.
[EN] AI integration into the development lifecycle for maximum productivity.


## 🤖 AI Coding Agents
- **Cursor & Windsurf Mastery**: Leveraging IDE-native AI for high-velocity refactoring and codebase understanding.
- **Autonomous Engineers (Devin/OpenDevin)**: Orchestrating agents that can independently plan, code, and debug across the full stack.

## ⚙️ Automated Lifecycle
- **AI-Powered PR Reviews**: Implementing automated pull request analysis for security, performance, and clean architecture.
- **Generative Testing**: Using AI to automatically discover edge cases and generate robust unit/integration test suites.

## 🧠 Knowledge Management
- **Local Code LLMs**: Running Llama-3-70b or specialized code models locally for sensitive IP protection.
- **Context Management**: Engineering the "RAG for Code" to provide AI agents with precise context across multi-repo environments.

--- 
## --- Sub-Skill: multimodal_ai_orchestrator
# [ES] Orquestador IA Multimodal
# [EN] Multimodal AI Orchestrator

[ES] Combinación de texto, audio e imagen en flujos de IA berracos.
[EN] Combining text, audio, and image in powerful AI flows.


## 🌈 Modality Integration
- **Vision (CV)**: Leveraging GPT-4o / Gemini 1.5 Pro Vision for document understanding and scene analysis.
- **Audio (STT/TTS)**: Integrating Whisper v3 and ElevenLabs for natural voice interfaces.
- **Multimodal RAG**: Indexing and retrieving cross-modal embeddings (CLIP, ImageBind).

## 🧪 Model Orchestration
- **Chaining Modalities**: Building flows where an image stimulates a text analysis, which then generates an audio output.
- **Video Analysis**: Strategic windowing and frame extraction for processing long-form video content.

## 🛠️ Performance & Cost
- **Sampling Strategies**: Optimizing frame-per-second extraction to balance cost vs. accuracy.
- **Latent Space Exploration**: Understanding how different models represent cross-modal data.

--- 
## --- Sub-Skill: ai_promptops_finetuning
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

--- 
## --- Sub-Skill: vibe_coding_engineering
# [ES] Ingeniería de Vibe Coding
# [EN] Vibe Coding Engineering

[ES] Metodología SkillsLocal para traducir visiones en código funcional.
[EN] SkillsLocal methodology to translate visions into functional code.


## ✨ Intent-Based Architecture
- **Vision Documenting**: Designing "Vibes" that capture the soulful intent of an application—its aesthetics, performance goals, and core user experience.
- **Architectural Priming**: Providing the model with high-level design tokens (Gradients, Glassmorphism, Micro-animations) to guide the automatic generation of UI components.
- **Prompting for Soul**: Crafting instructions that focus on the "Why" and "How it should feel," letting the AI handle the "What" and "How it works internally."

## ⚙️ Prototyping Loops
- **The 80/20 Rule of Completion**: Letting the model generate 80% of the architecture in one shot based on intent, then surgically refining the final 20% of logic.
- **Iterative Vibe Refinement**: Using feedback loops (e.g., "The design is too rigid, make it more liquid") to drive massive UI/UX transformations without manual CSS editing.

## 🚀 Technical Sovereignty
- **Full-Stack Vibe-to-Code**: Moving from a simple idea to a deployed, state-managed application by directing the agent's high-level execution flow.
- **SkillsLocal Standard Alignment**: Ensuring that all "Vibe-Coded" output adheres to the Level 99 standards of the SkillsLocal repository.

--- 
## --- Sub-Skill: vibe_coding_pro
# [ES] Vibe Coding Profesional
# [EN] Vibe Coding Pro

[ES] Máxima velocidad de construcción por intención y maestría de IA.
[EN] Maximum build speed by intent and AI mastery.


## 🌊 The "Vibe" Methodology
- **Intent Expression**: Learning to describe complex system behaviors instead of code lines.
- **Context Priming**: Strategically loading relevant patterns, design systems, and business logic into the LLM context.
- **Rapid Iteration Loops**: Deploying, testing, and refining at the speed of thought.

## 🛠️ Tooling & Stack
- **AI-Driven Iteration**: Leveraging Claude 3.5 Sonnet, GPT-4o, and Gemini 1.5 Pro via specialized IDEs.
- **Micro-Deployments**: Using platforms like Vercel, Netlify, or Replit for instant proof-of-concepts.

## 🧪 Refinement & Hardening
- **The "Zen" of Prefining**: Knowing when to let the AI steer and when to take surgical manual control.
- **Pattern Recognition**: Instantly identifying structural flaws in AI-generated code.
