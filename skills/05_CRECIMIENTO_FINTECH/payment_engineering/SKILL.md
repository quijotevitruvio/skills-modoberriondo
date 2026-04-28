# [ES] Ingeniería de Pagos
# [EN] Payment Engineering

[ES] Arquitectura robusta de transacciones y conciliación de saldos.
[EN] Robust transaction architecture and balance reconciliation.


## [!IMPORTANT] The Golden Rule of Payments
- **Assume Every Client is Untrustworthy**: Never trust client-side price modification. Always calculate totals and verify signatures on the Server-Side (Webhooks).
- **PCI Compliance**: Never store raw Credit Card numbers. Always use "Tokenization" (Stripe Elements / Checkout).
- **Graceful Failures**: Build retry logic for failed payments (Dunning) to reduce churn by 15%+.

## 🛠️ Level 99 Automation (Patterns)
- **The "Webhook Switcher"**: Route Stripe events (`customer.subscription.updated`, `invoice.payment_succeeded`) to your CRM to unlock features instantly.
- **Idempotency**: Use "Idempotency Keys" to prevent double-charging a user if they click the "Pay" button twice.
- **Multi-Currency Logic**: Automatically convert prices based on user location (IP) for a 20%+ lift in global conversions.

## Command Library (Execution & Diagnostics)
> [!NOTE]
> Use these to manage and audit your financial flows instantly.

- **Listen to Local Webhooks (Stripe CLI)**:
  ```bash
  stripe listen --forward-to localhost:3000/api/webhook
  ```
- **Trigger Test Event**:
  ```bash
  stripe trigger checkout.session.completed
  ```
- **Audit Failed Payments**:
  ```bash
  (Using SQL) SELECT count(*) FROM payments WHERE status = 'FAILED' AND created_at > now() - interval '24 hours';
  ```

## Advanced Techniques
- **Proration Logic**: Calculate exactly how much to charge when a user upgrades from "Basic" to "Pro" mid-month.
- **Tax Automation**: Integrate `Stripe Tax` to automatically handle VAT/Sales Tax in 40+ countries.
- **Fraud Prevention (Radar)**: Block "High Risk" scores based on IP/Fingerprint velocity before they hit the bank.

## Actionable Script: Webhook Handler
- **[stripe-webhook.js](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/payment_engineering/scripts/stripe-webhook.js)**: A secure Node.js endpoint template to handle Stripe payment signals with signature verification.

## Inter-Skill Integration
- **With Node.js Backend**: Use the Stripe Node SDK with strict TypeScript types for bulletproof transaction logic.
- **With n8n**: Send "New Subscription" alerts to Slack or automated "Welcome Email" sequences in ConvertKit.
- **With CRO Scientist**: A/B test "Monthly" vs "Yearly" pricing plans to maximize Average Order Value (AOV).