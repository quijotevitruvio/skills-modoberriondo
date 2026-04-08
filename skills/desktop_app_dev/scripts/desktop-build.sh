#!/bin/bash
# Level 99 Desktop App Build Pro
# Purpose: Performance-optimized packaging for Windows, macOS, and Linux.
# Usage: ./desktop-build.sh <app-dir> <target-os>

APP_DIR=$1
TARGET=$2

if [ -z "$APP_DIR" ] || [ -z "$TARGET" ]; then
    echo "Usage: ./desktop-build.sh <app-dir> <windows|macos|linux>"
    exit 1
fi

echo "🚀 Building Desktop App for $TARGET..."

cd "$APP_DIR"

# 1. Install Dependencies (Using high-speed cache)
npm install --frozen-lockfile

# 2. Build Web Frontend (Optimized for Electron/Tauri)
npm run build

# 3. Packaging Logic (Assuming Tauri for High Performance)
if [ "$TARGET" == "windows" ]; then
    npm run tauri build -- --target x86_64-pc-windows-msvc
elif [ "$TARGET" == "macos" ]; then
    npm run tauri build -- --target x86_64-apple-darwin
else
    npm run tauri build -- --target x86_64-unknown-linux-gnu
fi

echo "✅ Build Complete! Installers located in src-tauri/target/release/bundle."
