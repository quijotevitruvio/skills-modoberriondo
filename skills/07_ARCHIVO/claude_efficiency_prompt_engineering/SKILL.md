# [ES] Ingeniería de Prompts para Claude
# [EN] Claude Efficiency Prompt Engineering

[ES] Optimización de la ventana de contexto y razonamiento en modelos Anthropic.
[EN] Context window and reasoning optimization for Anthropic models.


## ⚡ Prompt Caching (The 90% Rule)
- **Prefix Matching Mastery**: Structuring prompts so that stable content (System instructions, tools, long-form documents) occupies the earliest positions.
- **Cache-Control Breakpoints**: Strategic placement of `{"type": "ephemeral"}` markings to create reusable context blocks.
- **Threshold Optimization**: Engineering prefixes to exceed the minimum caching thresholds (1024 tokens for Sonnet/Opus, 2048 for Haiku).

## ⚙️ Structural Reordering
- **Stable-to-Dynamic Flow**: Moving all user-specific, randomized, or highly variable data to the absolute end of the message payload.
- **System-State Injection**: Using cached system prompts to maintain consistent personas and logic without repassing instructions in every call.
- **Few-Shot Stability**: Caching massive example libraries that remain static, allowing for intelligent reasoning without linear input costs.

## 🚀 Advanced Interaction
- **Context Prefilling (Verification)**: Using previous assistant turn starts to steer output schemas, though ensuring compatibility with 2026 model deprecations.
- **Incremental Conversational Caching**: Managing multi-turn conversation caches to ensure only the latest message consumes full input pricing.