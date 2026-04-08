/**
 * Level 99 Node.js API Hardener
 * 
 * Purpose: Instantly apply enterprise-grade security headers and rate-limiting.
 * Framework: Express.js (can be adapted for Fastify)
 */

const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');

function applyHarden(app) {
  // 1. Static Security Headers (XSS, CSP, HSTS, Sniffing)
  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        objectSrc: ["'none'"],
        upgradeInsecureRequests: [],
      },
    }
  }));

  // 2. Global Rate Limiter (Prevent Brute Force)
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: "⚠️ Too many requests from this IP, please try again in 15 minutes."
  });
  app.use('/api/', limiter);

  // 3. Strict CORS Policy
  const corsOptions = {
    origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : '*',
    optionsSuccessStatus: 200,
    methods: "GET,PUT,POST,DELETE",
    credentials: true
  };
  app.use(cors(corsOptions));

  // 4. Disable X-Powered-By (Hide Node.js version)
  app.disable('x-powered-by');

  console.log("%c 🔒 API Hardened (Helmet, RateLimit, CORS Enabled) ", "color: #00ff00; font-weight: bold; background: #000;");
}

module.exports = applyHarden;
