# AI Content Automation Skill (Level 99)

State-of-the-art autonomous content ecosystems for infinite, SEO-dominant organic reach.

## [!IMPORTANT] Core Model Ecosystem
- **Primary (Gemini 1.5 Pro)**: Use for "Long-Form" content, structural logic, and complex research.
- **Secondary (Gemini 1.5 Flash)**: Best for high-volume Meta Descriptions, Alt Text, and Translation.
- **Local (Ollama/Llama 3)**: Use for data scrubbing, PII removal, and internal draft auditing.

## 🛠️ Level 99 Automation (Patterns)
- **The "Infinite Loop" Crawler**:
  - n8n triggers every 24h -> Scrapes industry news (RSS) -> AI cleans & summarizes -> AI writes unique perspective -> Post to WP.
- **AI-Agent Support**:
  - Connect **n8n AI Agent** node to Meta/TikTok marketing data to auto-adjust ad copy based on real-time CPA.

## Command Library (AI Orchestration)
> [!NOTE]
> Use these to interact with the LLM via CLI or n8n nodes.

- **Bulk Process Meta Descriptions (n8n Logic)**:
  - `Node: HTTP Request (WP API)` -> `Node: Gemini (Flash)` -> `Node: HTTP Request (Update WP)`.
- **Generate Branded Visuals (DALL-E 3)**:
  - `Prompt: "A high-end, 8k product photography of [SKU], soft shadows, light grey background, professional studio lighting."`

## Advanced Multimedia Automation
- **Video Hook Generation**: Use AI to script 10 variations of the first 3 seconds for Meta/TikTok ads.
- **Auto-Podcast**: Send the weekly blog post to an **OpenAI TTS** or **ElevenLabs** node to generate an audio version.
- **Dynamic Translation**: Real-time localization of the entire site using the **DeepL API** for global SEO.

## AI-Driven Personalization (LTV Focus)
- **Dynamic Product Recommendations**: Use a custom AI prompt to analyze a user's past 12 months of purchase history and suggest one "High Probability" upsell in the receipt email.
- **Predictive Support**: Analyze WhatsApp sentiment in real-time. If sentiment is < -0.5, escalate to a human agent immediately.

## Inter-Skill Integration
- **With Meta Ads**: Auto-refresh ad creatives every 7 days using newly generated AI images to fight "Creative Fatigue".
- **With Technical SEO**: Run [seo-audit.js](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/technical_seo_expert/scripts/seo-audit.js) after each AI-generated post to ensure 100/100 scores.
- **With Cybersecurity**: Use AI to scan incoming site comments for "SQL Injection" or "XSS" patterns that signature-based filters might miss.


