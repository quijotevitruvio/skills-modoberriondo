# [ES] Desarrollo de Apps Móviles
# [EN] Mobile App Dev

[ES] Arquitectura de aplicaciones nativas o híbridas de alto rendimiento.
[EN] High-performance native or hybrid application architecture.


## [!IMPORTANT] The Golden Rule of Mobile UI
- **60FPS or Bust**: Janky scroll is unacceptable. Use `FlashList` (Shopify) instead of `FlatList` for ultra-fast rendering on old devices.
- **Offline-First**: Mobile users lose connection. Always use `WatermelonDB` or `AsyncStorage` to ensure the app works (and caches data) without internet.
- **Native Bridges**: Know when to drop from JS into Objective-C/Swift or Java/Kotlin for heavy performance tasks (e.g. Video processing).

## 🛠️ Level 99 Automation (Patterns)
- **The "EAS Build" Pipeline**: Automate the creation of `.ipa` and `.apk` files using Expo Application Services (EAS) directly from GitHub Actions.
- **Code Push**: Deploy JS bundle updates instantly to users' devices without waiting for App Store/Play Store review (using `expo-updates`).
- **Shared Design System**: Use `Tamagui` or `Tailwind (NativeWind)` to share 90% of your CSS logic between the Web and Mobile apps.

## Command Library (Execution & Diagnostics)
> [!NOTE]
> Use these to build and debug your mobile app fleet instantly.

- **Start Expo Development Server**:
  ```bash
  npx expo start --dev-client
  ```
- **Force Clear Watchman/Metro Cache**:
  ```bash
  watchman watch-del-all && rm -rf node_modules && npm install && npx expo start -c
  ```
- **Build Production IPA (iOS)**:
  ```bash
  eas build --platform ios --profile production
  ```

## Advanced Techniques
- **Gesture Handler Master**: Use `Reanimated 3` for complex, high-performance interactions that run 100% on the native thread.
- **App Store Optimization (ASO)**: Automated "Screenshot Generation" of your app in 10+ languages using frame-rendering scripts.
- **Secure Storage**: Store Auth Tokens in `expo-secure-store` which uses iOS Keychain / Android Keystore.

## Native Module Integration (The "Bridge")
- **JSI (JavaScript Interface)**: Use the new architecture to call C++ functions directly from JavaScript with zero serialization overhead.
- **Turbo Modules**: Load native modules lazily only when needed, reducing app startup time by up to 50%.
- **Swift / Kotlin Modules**: Build custom cross-platform views (e.g. specialized video players or hardware-level camera controls) using native APIs.

## Actionable Script: Native Bridge Pro
- **[native-bridge-init.js](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/mobile_app_dev/scripts/native-bridge-init.js)**: A Level 99 utility to scaffold a JSI-compatible native module for Expo with support for Swift (iOS) and Kotlin (Android).

## Inter-Skill Integration
- **With AR/VR Spatial Computing**: Link native 3D engines (Unity/Unreal) into your React Native app via a custom JSI bridge.
- **With Engine Core Performance**: Critical for mobile games or high-performance apps that need sub-millisecond responsiveness.
- **With Cybersecurity Hardening**: Use `Expo Secure Store` and native jailbreak detection to protect SaaS tokens.