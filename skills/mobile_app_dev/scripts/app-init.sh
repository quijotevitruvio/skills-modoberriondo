#!/bin/bash
# Level 99 Mobile App Initializer (Expo)
# Purpose: Scaffolding a high-performance native-feeling app.
# Usage: ./app-init.sh my-new-app

APP_NAME=$1

if [ -z "$APP_NAME" ]; then
    echo "Usage: ./app-init.sh <app-name>"
    exit 1
fi

echo "🚀 Initializing $APP_NAME with Level 99 Performance Stack..."

# 1. Create Expo App (TypeScript)
npx create-expo-app $APP_NAME --template tabs

cd $APP_NAME

# 2. Install Core Performance & UI Dependencies
npm install lucide-react-native expo-secure-store expo-router @shopify/flash-list react-native-reanimated react-native-gesture-handler

# 3. Initialize EAS (Expo Application Services) for CI/CD
# eas init --id <your-project-id>

# 4. Setup Project Structure
mkdir -p src/components src/hooks src/api src/theme src/store

echo "✅ App $APP_NAME ready. Run 'npx expo start' to begin."
