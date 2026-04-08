/**
 * Level 99 Stripe Webhook Handler (Express)
 * Purpose: Securely process Stripe payment/subscription updates.
 */

const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const app = express();

app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    // 1. VERIFY SIGNATURE (Critical for PCI/Security)
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error(`%c ❌ Webhook Error: ${err.message} `, "color: #ff0000;");
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // 2. Process Lifecycle Events
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      console.log(`%c 💰 Payment Succeeded! (ID: ${session.id}) `, "color: #00ff00; background: #000;");
      // TODO: Internal DB: unlockUserFeatures(session.client_reference_id);
      break;
    
    case 'customer.subscription.deleted':
      const subscription = event.data.object;
      console.log(`%c 📉 Subscription Canceled! (Cust: ${subscription.customer}) `, "color: #ff9900; background: #000;");
      // TODO: Internal DB: revokeAccess(subscription.customer);
      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json({received: true});
});

app.listen(3000, () => console.log('🚀 Webhook listener on port 3000'));
