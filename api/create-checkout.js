// Vercel serverless function — creates a Stripe Checkout Session for donations
// Handles both one-time and monthly recurring donations with a pre-filled amount.
//
// Environment variables required (set in Vercel dashboard → Project → Settings → Environment Variables):
//   STRIPE_SECRET_KEY  - starts with sk_live_... (or sk_test_... for testing)
//
// POST body: { amount: number (USD dollars), frequency: 'one-time' | 'monthly' }
// Returns:   { url: string }  — redirect the user here

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-06-20',
});

export default async function handler(req, res) {
  // CORS — allow requests from wikibiome.com and Vercel previews
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { amount, frequency } = req.body || {};

    // Validate amount
    const dollars = Number(amount);
    if (!Number.isFinite(dollars) || dollars < 1 || dollars > 100000) {
      return res.status(400).json({ error: 'Invalid amount. Must be between $1 and $100,000.' });
    }
    const cents = Math.round(dollars * 100);

    // Validate frequency
    const freq = frequency === 'monthly' ? 'monthly' : 'one-time';

    // Determine origin for redirect URLs
    const origin = req.headers.origin || `https://${req.headers.host}` || 'https://wikibiome.com';

    const sessionConfig = {
      mode: freq === 'monthly' ? 'subscription' : 'payment',
      success_url: `${origin}/support?status=success&amount=${dollars}&frequency=${freq}`,
      cancel_url: `${origin}/support?status=cancelled`,
      billing_address_collection: 'auto',
      // Allow donors to add a note / stay in touch
      custom_fields: [
        {
          key: 'stay_in_touch',
          label: { type: 'custom', custom: 'Receive updates from WikiBiome?' },
          type: 'dropdown',
          dropdown: {
            options: [
              { label: 'Yes — send me updates on new research and signatures', value: 'yes' },
              { label: 'No thanks', value: 'no' },
            ],
          },
          optional: true,
        },
      ],
      metadata: {
        frequency: freq,
        amount_usd: String(dollars),
        source: 'wikibiome.com',
      },
    };

    if (freq === 'monthly') {
      // Subscription — create a recurring price on the fly
      sessionConfig.line_items = [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'WikiBiome Monthly Support',
            description: 'Recurring monthly donation to WikiBiome',
          },
          unit_amount: cents,
          recurring: { interval: 'month' },
        },
        quantity: 1,
      }];
    } else {
      // One-time donation
      sessionConfig.line_items = [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'WikiBiome Donation',
            description: 'One-time donation to WikiBiome',
          },
          unit_amount: cents,
        },
        quantity: 1,
      }];
      // Only allow promotion codes / enable tipping-style UX for one-time
      sessionConfig.submit_type = 'donate';
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Stripe checkout error:', err);
    return res.status(500).json({ error: err.message || 'Unable to create checkout session' });
  }
}
