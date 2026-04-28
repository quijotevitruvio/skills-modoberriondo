# Node.js Backend Architect Skill (Level 99)

Master-level server-side orchestration, focusing on scalable REST/GraphQL APIs, real-time data streaming, and enterprise-grade security hardening.

## [!IMPORTANT] The Golden Rule of Node.js Security
- **Non-Blocking I/O**: Use `async/await` and Promisify all legacy callbacks.
- **Middleware Hardening**: Mandatory use of **Helmet**, **CORS**, and **Rate Limiting** to prevent brute force and XSS.
- **Environment Variables**: Store sensitive data in `.env` and use `process.env` validation (e.g., with Zod).

## 🛠️ Level 99 Automation (Patterns)
- **The "Worker Thread" Pattern**: Offload computationally heavy tasks (Bcrypt, large JSON parsing) to separate worker threads to keep the event loop free.
- **Microservices & Messaging**: Use **BullMQ** or **RabbitMQ** to handle background jobs reliably.
- **Graceful Shutdown**: Implement SIGTERM/SIGINT handlers to close database connections and finish inflight requests.

## Command Library (Diagnostics & Execution)
> [!NOTE]
> Use these to analyze and fix backend bottlenecks instantly.

- **Check Event Loop Lag**:
  ```javascript
  (Using n8n or Node script) node --trace-event-loop-summary app.js
  ```
- **Profile CPU Usage**:
  ```bash
  node --prof app.js && node --prof-process isolate-0xnnnnnnnnnnnn-v8.log > processed.txt
  ```
- **Verify Port Availability**:
  ```bash
  netstat -ano | findstr :3000
  ```

## Advanced Techniques
- **Stream Everything**: Use `fs.createReadStream` and `pipe()` for large file transfers to minimize RAM footprint.
- **Custom Error Handling**: Build a centralized `ErrorHandler` middleware to ensure all exceptions are caught and sanitized.
- **Redis Integration**: Implement multi-layer caching for frequent database queries to achieve < 50ms responses.

## API Gateway & Edge Logic
- **Reverse Proxy Orchestration**: Use `http-proxy-middleware` or `gateway-js` to route traffic to multiple downstream microservices (Auth, CRM, AI).
- **Authentication Handover**: Implement JWT verification at the Gateway level so downstream services can focus solely on business logic.
- **Dynamic Load Balancing**: Automatically route traffic to the healthiest or least-loaded instance of a backend service.

## Actionable Script: Gateway Pro
- **[gateway-init.js](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/nodejs_backend_architect/scripts/gateway-init.js)**: A high-performance reverse proxy script to initialize a microservices gateway in seconds.

## Inter-Skill Integration
- **With System Architecture**: Node.js becomes the "Executive Layer" for microservices communication.
- **With Docker**: Orchestrate multi-container Node.js clusters with automated health checks.
- **With n8n**: Use n8n as the "Logic Engine" while Node.js handles the "Data Transport" and "API Gateway" layers.
