# [ES] Compresión de Contexto Few-Shot
# [EN] Few-Shot Context Compression

[ES] Maximización de eficiencia en prompts mediante ingeniería de contexto comprimida.
[EN] Prompt efficiency maximization via compressed context engineering.


## 🏗️ Data Density Engineering
- **Structural Mapping**: Representing complex examples through key-value pairs or abbreviated JSON to reduce character count.
- **Dynamic Few-Shot**: Using semantic search (RAG) to only inject the top-N relevant examples into the context window, preventing "example bloat".
- **Semantic Pruning**: Automated removal of redundant or low-information tokens from reference datasets.

## ⚙️ Prefilling & Caching Integration
- **Static Prefix Caching**: Placing the "Best-of" few-shot examples into a cached system-level prompt for 10x cost reduction.
- **Context Distillation**: Summarizing previous conversation steps into a high-density "context capsule" for long-running threads.

## 🚀 Quality Assurance
- **Reasoning Fidelity**: Measuring the impact of compression on model output accuracy (Prompt Sensitivity).
- **Instruction Nesting**: Advanced placement of examples far from the final instruction to test model "Lost in the Middle" resilience while saving tokens.