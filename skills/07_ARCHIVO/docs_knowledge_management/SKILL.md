# [ES] Gestión del Conocimiento y Documentación
# [EN] Docs Knowledge Management

[ES] Arquitectura de información para bases de conocimiento persistentes.
[EN] Information architecture for persistent knowledge bases.


## [!IMPORTANT] The Golden Rule of Documentation
- **Docs as Code**: Store your documentation in the same repository as your code. Use Pull Requests to update docs alongside feature changes to prevent "Knowledge Decay".
- **AI-Ready Context**: Structure your docs (Markdown/MDX) so that an LLM can easily parse and retrieve specific technical answers (RAG-friendly).
- **Diagrams over Paragraphs**: Use Mermaid.js or Excalidraw to visualize architecture. A single well-placed diagram replaces 500 words of confusing text.

## 🛠️ Level 99 Automation (Patterns)
- **Automatic API Generation**: Use Swagger/OpenAPI or TypeDoc to generate your API reference directly from the source code.
- **Content Validation (Linters)**: Use `markdownlint` and `vale` to ensure consistency in tone, spelling, and formatting across all documents.
- **Multi-Output Publishing**: Build a pipeline that exports your Markdown to Web (Static Site), PDF (Client Reports), and Wiki (Internal Use).

## Command Library (Execution & Generation)
> [!NOTE]
> Use these to manage your tech knowledge base instantly.

- **Check Broken Internal Links**:
  ```bash
  npx -y link-checker docs/
  ```
- **Generate API Docs (Node.js/TypeScript)**:
  ```bash
  (Using TypeDoc) npx typedoc src/index.ts --out docs/api
  ```
- **Serve Local Docs (Docusaurus)**:
  ```bash
  npm run start -- --port 4000
  ```

## Advanced Techniques
- **Semantic Search Indexing**: Index your entire docs folder into a local Vector DB for instant, intelligent retrieval via AI Chat.
- **Workflow Orchestration (n8n)**: Automatically summarize long design documents into "WhatsApp Alerts" for the engineering team.
- **Living Architecture Diagrams**: Embed Mermaid diagrams that update automatically when the underlying JSON/YAML configuration changes.

## Actionable Script: Doc Search Index Pro
- **[doc-search-index.py](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/docs_knowledge_management/scripts/doc-search-index.py)**: A Python script to parse your documents folder and index them into a simple searchable metadata structure for AI integration.

## Inter-Skill Integration
- **With AI Engineering (RAG)**: This skill provides the "High-Quality Fuel" that powers your AI's domain knowledge.
- **With System Architecture**: Document every architectural decision (ADRs) to preserve the "Why" behind the "What".
- **With GitHub Actions**: Automate the deployment of your documentation site to GitHub Pages or AWS S3 on every push.