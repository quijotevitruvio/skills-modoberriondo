# [ES] Ingeniería de IA y RAG
# [EN] AI Engineering RAG

[ES] Dominio de Retrieval-Augmented Generation para sistemas de conocimiento precisos.
[EN] Mastery of Retrieval-Augmented Generation for precise knowledge systems.


## [!IMPORTANT] The Golden Rule of AI Accuracy
- **Context is King**: Never trust an LLM to "hallucinate" technical data. Always provide the relevant context via a Vector Store (RAG) to ensure the grounding of responses.
- **Prompt Engineering**: Use Chain-of-Thought (CoT) and Few-Shot prompting to guide the logic.
- **Latency vs Logic**: Choose the right model for the job (e.g. GPT-4o/Claude 3.5 for reasoning, Groq/Llama-3-8B for speed).

## 🛠️ Level 99 Automation (Patterns)
- **The "Dynamic RAG" Pipeline**:
  - Automatically chunk documents, generate embeddings (using `text-embedding-3-small`), and upsert to a Vector DB (Pinecone/Milvus/Supabase).
- **Tool-Calling Agents**: Build agents that can "decide" when to call your other skills (e.g. "Run a SQL query" or "Check Cloudflare WAF").
- **Stateful Memory**: Implement LangGraph or n8n AI memory to maintain context across multi-turn conversations.

## Command Library (Execution & Diagnostics)
> [!NOTE]
> Use these to manage and audit your AI agents instantly.

- **Check Embedding Latency**:
  ```bash
  (Using Python) Measure time for model.encode("sample text")
  ```
- **Audit Vector Search Results (Top-K)**:
  ```bash
  (In Python/Node) query_results = index.query(vector=v, top_k=5, include_metadata=True)
  ```
- **Token Usage Tracker**:
  ```bash
  (Using n8n or Node) Track total_tokens via the API response to monitor API costs.
  ```

## Advanced Techniques
- **Semantic Chunking**: Don't just split by character count. Split by "Semantic Meaning" to preserve context in RAG.
- **Multi-Agent Orchestration**: Specialized agents for "Researcher", "Writer", and "Coder" layers working in a loop.
- **Local LLMs (Ollama)**: Use `ollama` for high-privacy data processing that never leaves the local server.

## Actionable Script: RAG Ingestor
- **[rag-ingest.py](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/ai_engineering_rag/scripts/rag-ingest.py)**: A Python utility to chunk, embed, and upload local documents to a Vector Database for instant RAG capabilities.

## Enterprise RAG & Multi-Tenant Isolation
- **Metadata Namespace Isolation**: Use namespaces (Pinecone) or `filter` metadata (Milvus/Supabase) to ensure User A never sees User B's private data.
- **Hybrid Search (Keyword + Semantic)**: Combine BM25 keyword matching with Semantic search to find exact technical terms (e.g., "Error code 404") that embeddings might miss.
- **Re-Ranking (Cross-Encoders)**: Use a second, slower but smarter model to re-rank the top 20 results for maximum precision in the final answer.

## Actionable Script: Multi-Tenant Sync
- **[multi-tenant-vector-sync.py](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/ai_engineering_rag/scripts/multi-tenant-vector-sync.py)**: A high-performance Python script to sync documents into a multi-tenant vector store with strict namespace security.

## Inter-Skill Integration
- **With n8n**: Build "Chat with your Data" workflows using the n8n AI Agent node and your Vector DB.
- **With WhatsApp**: Connect the RAG Agent to WhatsApp for an "Official Business Support" bot.
- **With Cybersecurity**: Implement PII (Personally Identifiable Information) filtering *before* sending data to an external embedding API.