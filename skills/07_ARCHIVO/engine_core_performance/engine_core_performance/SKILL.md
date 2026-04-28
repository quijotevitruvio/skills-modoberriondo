# Engine Core & WASM Performance Skill (Level 99)

The "Deep Web" engineering skill: Master-level orchestration of the JavaScript engine (V8), Garbage Collection, and high-performance WebAssembly (WASM) modules using Rust.

## [!IMPORTANT] The Golden Rule of Engine Performance
- **Avoid De-Optimizations (De-Opts)**: Write stable, monomorphic code to ensure the JIT (Just-In-Time) compiler can generate the fastest machine code.
- **WASM for Compute-Heavy Tasks**: Don't use JS for bulk data processing, cryptography, or physics. Move it to a compiled WASM module for near-native performance.
- **Memory Profiling**: Audit your "Heap" usage to identify memory leaks early. 100 leaky MBs in a long-running SPA (Single Page App) will crash the browser.

## 🛠️ Level 99 Automation (Patterns)
- **Rust-to-WASM Compilation**: Automated toolchain (wasm-pack) to compile high-performance Rust logic into a package useable by Node.js or the browser.
- **Worker-Thread Orchestration**: Move blocking tasks to Web Workers to keep the main event loop "Jank-Free" (60+ FPS).
- **GC (Garbage Collection) Awareness**: Use Object Pooling to reuse complex objects instead of creating/destroying them, reducing GC pauses.

## Command Library (Execution & Profiling)
> [!NOTE]
> Use these to peer into the machine code level of your application.

- **Check V8 Optimization Status (Node.js)**:
  ```bash
  node --trace-opt --trace-deopt app.js
  ```
- **Measure Script Execution Time (Precise)**:
  ```javascript
  performance.now() // Microsecond precision for benchmarking.
  ```
- **Inspect Memory Heap Snapshots**:
  ```bash
  (In Chrome DevTools) Profile -> Memory -> Take Heap Snapshot.
  ```

## Advanced Techniques
- **SharedArrayBuffer & Atomics**: High-speed communication between worker threads without the overhead of postMessage.
- **AOT (Ahead-of-Time) Compilation**: Pre-compile templates or logic to JSON-friendly structures to skip the parser during runtime.
- **SIMD (Single Instruction, Multiple Data)**: Leverage CPU instructions via WASM to process multiple data points in a single cycle.

## Actionable Script: WASM Scaffold
- **[wasm-init.sh](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/engine_core_performance/scripts/wasm-init.sh)**: A shell script to scaffold a high-performance Rust-to-WASM project with a ready-to-test JS bridge.

## Inter-Skill Integration
- **With AI Engineering (RAG)**: Use WASM to process vector math and local embeddings directly in the browser (Transformers.js).
- **With Desktop App Dev**: Access low-level system memory via N-API or WASM for high-performance desktop tools.
- **With Performance Engineering**: This is the "Hard Core" layer that enables sub-10ms logic for complex apps.
