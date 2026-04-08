# Performance Engineering Skill (Level 99)

Master-level latency orchestration, focusing on the "100ms Goal": ensuring that every user interaction and request completes in under 100ms for an elite, frictionless experience.

## [!IMPORTANT] The Golden Rule of Performance
- **Measure First, Optimize Second**: Never optimize code without a baseline measurement from `chrome_devtools_mastery` or specialized tools.
- **The "Critical Path" Optimization**: Focus 80% of your effort on the 20% of code that handles the most traffic or has the highest latency impact (e.g., Database queries and Initial Page Load).
- **Zero-Latency UI (Optimistic Updates)**: Build interfaces that respond instantly to user input (e.g., adding a task) while the backend request continues in the background.

## 🛠️ Level 99 Automation (Patterns)
- **Edge Caching (Cloudflare Workers)**: Move your "Heavy" logic to the edge so the computation happens 5ms away from the user instead of 200ms away across the ocean.
- **Connection Pooling (Prisma/RDS Proxy)**: Ensure that your database connections are reused across serverless requests (Lambda/Cloud Run) to save 50ms+ on every handshake.
- **Asset Pre-Generation (Static ISR)**: Use Incremental Static Regeneration to keep your complex CRM pages static but fresh, serving them from memory at sub-10ms.

## Command Library (Execution & Diagnostics)
> [!NOTE]
> Use these to measure and destroy latency in your environment.

- **Measure Time to First Byte (TTFB)**:
  ```bash
  curl -o /dev/null -s -w 'TTFB: %{time_starttransfer}\n' https://your-app-url.com
  ```
- **Audit Largest Contentful Paint (LCP)**:
  ```bash
  (Using Lighthouse CLI) lighthouse https://your-app-url.com --only-categories=performance
  ```
- **Profile Node.js Memory & CPU Peaks**:
  ```bash
  node --prof your-app.js
  # Followed by node --prof-process isolate-0xnnnnnnnnnnnn-v8.log > processed.txt
  ```

## Advanced Techniques
- **WebAssembly (WASM)**: Offload heavy computation (e.g., Image processing or Data crunching) from JavaScript to high-speed compiled languages like Rust or C++ inside the browser.
- **Binary Protocols (gRPC/Protobuf)**: Swap expensive JSON payloads for binary serialization to reduce bandwidth by 60%+ and parsing time by 10x.
- **Database Index-Only Scans**: Craft your queries so the database never has to touch the disk, serving the result entirely from the index (memory).

## Actionable Script: Latency Auditor
- **[latency-audit.sh](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/performance_engineering/scripts/latency-audit.sh)**: A high-speed shell script to measure TTFB and LCP across production and staging environments.

## Inter-Skill Integration
- **With System Architecture**: Performance is the "Heartbeat" that validates the chosen architectural patterns.
- **With SQL Tuning**: This skill executes the high-level performance strategy on the database layer.
- **With Mobile App Dev**: Use "FlashList" and "Reanimated" to ensure the mobile UI maintains 60FPS even under heavy load.
