/**
 * Level 99 API Gateway Pro
 * Purpose: Initialize a high-performance reverse proxy for microservices.
 */

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 8000;

console.log("%c 🚀 API Gateway Starting... ", "color: #fff; background: #3b82f6; font-weight: bold; padding: 5px;");

// 1. JWT / Auth Middleware (Simulated)
app.use((req, res, next) => {
    // In production, verify JWT from header.
    console.log(`[AUTH] Verifying request for: ${req.url}`);
    next();
});

// 2. Microservice Routing Logic
const services = {
    '/auth': 'http://localhost:3001',
    '/crm': 'http://localhost:3002',
    '/ai': 'http://localhost:3003'
};

// 3. Register Proxies
Object.keys(services).forEach(path => {
    app.use(path, createProxyMiddleware({
        target: services[path],
        changeOrigin: true,
        pathRewrite: { [`^${path}`]: '' },
        onProxyReq: (proxyReq, req) => {
            console.log(`[PROXY] Forwarding ${req.method} to ${services[path]}`);
        },
        onError: (err, req, res) => {
            console.error(`[ERROR] Service ${path} is down! Request timed out.`);
            res.status(503).json({ error: "Service Unavailable" });
        }
    }));
});

// 4. Global Health Check
app.get('/health', (req, res) => {
    res.status(200).json({ status: "Gateway Operational", version: "Vanguard 45" });
});

app.listen(PORT, () => {
    console.log(`%c ✅ Gateway Active on Port ${PORT} `, "color: #fff; background: #166534;");
});
