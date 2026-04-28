# Desktop App Development Skill (Level 99)

Master-level cross-platform application orchestration, focusing on native desktop performance for Windows, macOS, and Linux using modern web technologies (Electron or Tauri).

## [!IMPORTANT] The Golden Rule of Desktop Dev
- **Native Experience Over Web Wrapper**: Don't just "wrap" a URL. Integrate with the operating system using native menus, file system access, and system tray notifications.
- **Main vs. Render Process Security**: Never expose the full Node.js API to your frontend (Render process). Use `contextBridge` and Preload scripts to ensure the frontend can only call specific, safe IPC (Inter-Process Communication) functions.
- **Auto-Update Strategy**: A desktop app without an auto-updater is a liability. Ensure a robust update channel (e.g., GitHub Releases or AWS S3) is configured from Day 1.

## 🛠️ Level 99 Automation (Patterns)
- **Tauri Integration (Rust-powered)**: Use Tauri instead of Electron for 10x smaller binary sizes and 40x less memory usage, leveraging the system's native WebView.
- **Multi-Window Management**: Seamlessly manage complex window states (Modal, Overlay, Hidden) to build deep CRM or Dashboard tools that feel like first-class professional software.
- **Hardware Integration**: Implement direct communication with local hardware (e.g., printers, scanners, local DBs) that a standard web app cannot reach.

## Command Library (Execution & Packaging)
> [!NOTE]
> Use these to scaffold and build your desktop apps instantly.

- **Scaffold a New Tauri App (Modern Tooling)**:
  ```bash
  (Using npx) npx create-tauri-app
  ```
- **Run the App in Dev Mode (with Hot Reload)**:
  ```bash
  (Using npm/cargo) npm run tauri dev
  ```
- **Build Production-Ready Installers (.exe, .dmg, .deb)**:
  ```bash
  (Using GitHub Actions) npm run tauri build
  ```

## Advanced Techniques
- **Code Signing & Notarization**: Master the process of signing your apps for Windows and Notarizing for macOS (Apple), preventing "Unknown Developer" warnings.
- **Native Node.js Addons (N-API)**: Write CPU-intensive logic in C++ or Rust and call it directly from your Electron app for maximum performance.
- **Chromium Optimization**: Use Electron configuration flags (e.g., `gpu_acceleration`, `background_throttling`) to fine-tune the Chromium instance for low-end hardware.

## Actionable Script: Desktop Build Pro
- **[desktop-build.sh](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/desktop_app_dev/scripts/desktop-build.sh)**: A high-speed shell script to package your web app into a production-ready Desktop installer.

## Inter-Skill Integration
- **With UI/UX Design System**: Apply your `design_tokens.css` to the desktop window for a consistent brand experience across Web, Mobile, and PC.
- **With Cybersecurity Hardening**: Implement "Secure-by-Default" IPC communication to prevent any arbitrary code execution via the frontend.
- **With Node.js Backend Builder**: Reuse your backend logic as the "Main Process" code for your desktop application.
