# [ES] Small Language Models (SLM) Deployment

## 🎯 Objetivo
Desplegar modelos de lenguaje pequeños (Phi-3, Llama-3-8B, Gemma-2) en entornos locales o de bajo recurso para privacidad y ahorro de costos.

## 🛠️ Stack Técnico
- **Runtimes**: Ollama, vLLM, LM Studio.
- **Quantization**: GGUF, AWQ, EXL2.
- **Hardware**: NVIDIA RTX (Local), Mac Studio (M2/M3), VPS con GPU.

## 🚀 Capacidades Críticas
1. **Optimización de Inferencia**: Configuración de KV Cache y Parallel Sampling.
2. **Private RAG**: Integración de SLMs con bases de datos vectoriales locales.
3. **API Serving**: Exposición de endpoints compatibles con OpenAI para integración fácil.

## 📚 Referencias
- [Ollama Library](https://ollama.com/library)
- [Hugging Face SLM Collection](https://huggingface.co/models?search=slm)
