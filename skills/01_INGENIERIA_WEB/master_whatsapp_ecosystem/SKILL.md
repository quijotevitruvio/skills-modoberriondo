# --- MASTER WHATSAPP ECOSYSTEM
Consolidated Knowledge Base - SkillsLocal Sovereign Environment


--- 
## --- Sub-Skill: whatsapp_automation_pro
# [ES] Automatización de WhatsApp Profesional
# [EN] Whatsapp Automation Pro

[ES] Flujos berracos de mensajería masiva y bots personalizados.
[EN] Powerful messaging flows and personalized bots.
---
description: SkillsLocal Expert Skill - Advanced flows and bot management.
---


## 🎯 Objective
Mastery of Advanced flows and bot management. within the SkillsLocal Technical Sovereignty framework.

## 🛠️ Expert Capabilities
- Advanced orchestration of whatsapp_automation_pro protocols.
- Autonomous debugging and optimization.
- High-scale deployment and scaling patterns.

## 📜 Operation Rules
1. **Precision First**: All implementations must follow X.Y.Z versioning.
2. **Sovereignty**: No dependencies on external unverified code.
3. **No Placeholders**: Always generate production-ready artifacts.

## 🚀 Execution Pattern
- `/build`: Trigger autonomous improvement of this skill.
- `/verify`: Run deep audit of current implementation.

--- 
## --- Sub-Skill: whatsapp_conversion_funnels
# [ES] Embudos de Conversión por WhatsApp
# [EN] Whatsapp Conversion Funnels

[ES] Ingeniería de cierres de ventas berracos en el chat.
[EN] Powerful sales closing engineering within chat.


## 💬 The Conversation Engine
- **WhatsApp Business API (Cloud API)**: Leveraging the official Meta API for high-scale messaging and template flows.
- **Interactive Messaging**: Creating button-driven menus and list-messages to guide users through the sales funnel.

## 📈 Automated Funnels
- **Lead Nurturing Loops**: Sequence of automated messages (Drip campaigns) triggered by a web lead or cart abandonment.
- **Appointment Automation**: Integrating Calendly or custom booking systems directly into the chat flow.
- **Cart Recovery on JS**: Using WhatsApp to send personalized recovery links with discounts.

## 🛡️ Governance & Scale
- **Opt-in Management**: Ensuring compliance with global privacy standards to avoid number banning.
- **Team Handover**: Seamlessly transitioning from automated bots to live agents for high-value closures.

--- 
## --- Sub-Skill: whatsapp_flows_logic_engineering
# [ES] Ingeniería de Lógica en WhatsApp Flows
# [EN] Whatsapp Flows Logic Engineering

[ES] Construcción berraca de formularios y procesos dentro de WhatsApp.
[EN] Powerful form and process building inside WhatsApp.


## 🏗️ UI Component Design
- **Flow Screens**: Designing structured layouts for forms, product selectors, and booking calendars using the Meta Flow schema.
- **Interactive Elements**: Mastering native List Messages, Buttons, and Carousels to minimize user input friction.
- **Dynamic Content Selection**: Engineering screens that update in real-time based on previous user choices within the same flow.

## ⚙️ Logic & State Management
- **Flow Data Exchange**: Handling complex JSON payloads between the client device and the server endpoint.
- **State Persistence**: Managing multi-step transaction states while preserving user context across the entire flow journey.
- **Form Validation**: Implementing client-side and server-side verification for user inputs (Email, Dates, Numerical values).

## 🚀 Business Use Cases
- **Self-Service Booking**: Automating appointment scheduling without redirects to external websites.
- **Product Configuration**: Building visual carousels where users can select sizes, colors, and add-ons in-chat.
- **Customer Feedback (CSAT)**: Designing internal survey flows for high-response post-purchase feedback.

--- 
## --- Sub-Skill: whatsapp_integration
# [ES] Integración de WhatsApp
# [EN] Whatsapp Integration

[ES] Conexión berraca de sistemas externos con la plataforma WhatsApp.
[EN] Powerful connection of external systems with the WhatsApp platform.


## [!IMPORTANT] API Ecosystem & Trust
- **Meta Cloud API (v20.0+)**: The absolute gold standard. Zero message markup, direct access to the latest interactive features (Lists, Flow).
- **Embedded Signup**: Mandatory for rapid client onboarding. Use the Meta Business Suite to manage "Official Business Account" (Green Badge) applications.
- **Messaging Limits**: Start at Tier 1 (1k/day) and scale to Tier 3 (Unlimited) by maintaining a "High Quality" rating (low block rate).

## 🛠️ Level 99 Automation (Patterns)
- **The "Interactive Flow"**:
  - Replace static text with **WhatsApp Flows**. Create a multi-step form (e.g., "Book a Meeting") inside the WhatsApp UI to keep the user engaged without leaving the app.
- **Deduplication & Delivery**: 
  - Use a "Message ID Store" (Redis/BigQuery) to ensure no customer receives the same "Abandoned Cart" message twice in 24 hours.

## Command Library (Meta API & Debugging)
> [!NOTE]
> Use these via the terminal to test dynamic payloads and verify the webhook handshake.

- **Send Interactive List Message**:
  ```bash
  (Using n8n or Python) Post to /v20.0/PHONE_ID/messages with "type": "interactive" and "sections" for professional product selection.
  ```
- **Check Business Account Status**:
  ```bash
  curl -G "https://graph.facebook.com/v20.0/WABA_ID" \
       -d "fields=name,status,message_template_namespace" \
       -d "access_token=TOKEN"
  ```
- **Verify Webhook Challenge (Local)**:
  ```bash
  (In Node.js) Use `crypto.createHmac('sha256', secret).update(payload).digest('hex')` to verify `X-Hub-Signature-256`.
  ```

## Advanced Conversational AI
- **RAG-Powered Support**: Connect WhatsApp to a **Llama-3 or GPT-4o** agent via n8n. Use "Semantic Search" (Vector DB) to answer customer questions using only YOUR business documentation.
- **Proactive Notifications**: Trigger a WhatsApp based on "User Behavior" (e.g., "I see you've viewed the pricing page 3 times, need a 10% discount?").

## Conversion & Engagement Optimization
- **CTWA (Click-to-WhatsApp Ads)**: Integrate with the **Meta Ads Architect** skill to send traffic directly into an automated "Sales Qualified Lead" (SQL) flow.
- **The "Human-in-the-Loop"**: Build an n8n logic that "Handsoff" the AI chat to a human agent if the sentiment analysis detects "Frustration" or a "Help" keyword.

## Inter-Skill Integration
- **With Meta Ads**: Automated "Post-Click" sequences. If a user clicks a FB Ad, the WhatsApp bot instantly greets them by name.
- **With Analytics Guru**: Track "WhatsApp Click-Through Rate" (CTR) as a custom event in GA4 via the SST container.
- **With Cybersecurity**: Automated "OTP" (One-Time Password) delivery for enhanced login security on WordPress.



--- 
## --- Sub-Skill: enterprise_whatsapp_chatbot_expert
# [ES] Experto en Chatbots de WhatsApp
# [EN] Enterprise WhatsApp Chatbot Expert

[ES] Soluciones conversacionales escalables sobre la API de WhatsApp Business.
[EN] Scalable conversational solutions over the WhatsApp Business API.


## 🏢 Meta Cloud API Mastery
- **Infrastructure Scaling**: Orchestrating throughput of up to 500 MPS (messages per second) using the official Meta Cloud API.
- **WABA Onboarding**: Mastering the Meta Business Manager verification and official Green Tick application processes.
- **Webhooks & Events**: Designing robust, real-time event handlers for delivery receipts, read signals, and user interaction payloads.

## 🤖 Agentic Commerce Logic
- **Task-Focused AI Agents**: Engineering agents with specific business goals (Lead Qual, Booking, Upsell) and persistent memory.
- **RAG for WhatsApp**: Implementing Retrieval-Augmented Generation to provide context-aware, factually accurate support in-chat.
- **The "Human-in-the-Loop" Bridge**: Designing seamless handoff protocols to live agents when AI complexity thresholds are reached.

## ⚙️ Conversational CRM Integration
- **HubSpot/Salesforce Sync**: Real-time bi-directional data flow between WhatsApp conversations and the central source of truth.
- **Unified Identity**: Mapping WhatsApp numbers to customer profiles across multi-channel touchpoints.
- **Proactive Utility Messages**: Automating notifications (Cart recovery, Order updates) following Meta's structural guidelines.
