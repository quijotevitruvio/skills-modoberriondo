# WhatsApp Integration Skill (Level 99)

Master-level conversational architecture for high-conversion, automated business communication and real-time customer engagement.

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


