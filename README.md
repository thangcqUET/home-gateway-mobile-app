# Smart Home Gateway Mobile App 🏠

A minimalist smart home mobile app built with React Native, Expo Router, and Firebase Cloud Messaging (FCM). Features real-time sensor data via MQTT and push notifications for device alerts.

## Features

- 🎨 **Minimalist Dark UI** - Clean, modern interface with gradient backgrounds
- 📱 **Real-time Notifications** - FCM integration for foreground, background, and killed app states
- 📊 **Sensor Dashboard** - Live sensor data (temperature, humidity, light) via MQTT
- 🔔 **Alert System** - Comprehensive notification management with severity levels
- 🌐 **MQTT Integration** - Real-time communication with IoT devices

## Prerequisites

- Node.js 18+ and npm
- Android Studio with Android SDK
- Android device or emulator
- Firebase project with Cloud Messaging enabled

## Installation

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Install Firebase packages** (already included in package.json)

   ```bash
   npm install @react-native-firebase/app @react-native-firebase/messaging
   ```

## Firebase Configuration

### 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project named `homegateway-4c521` (or use existing)
3. Enable **Cloud Messaging** in the project

### 2. Add Android App to Firebase

1. In Firebase Console, click "Add app" → Android
2. Use package name: `com.iotlab.homegateway`
3. Download `google-services.json`
4. Place it in `android/app/google-services.json`

### 3. Configure Android Build Files

The project is already configured with the following changes:

#### `android/build.gradle` (Project-level)
```gradle
buildscript {
  dependencies {
    // ... other dependencies
    classpath('com.google.gms:google-services:4.4.3')  // Added
  }
}
```

#### `android/app/build.gradle` (App-level)
```gradle
apply plugin: "com.google.gms.google-services"  // Added

android {
    namespace 'com.iotlab.homegateway'
    defaultConfig {
        applicationId 'com.iotlab.homegateway'  // Updated from default
        // ... other config
    }
}

dependencies {
    // Firebase BOM and Analytics
    implementation platform("com.google.firebase:firebase-bom:34.3.0")
    implementation "com.google.firebase:firebase-analytics"
}
```

## Running the App

### Android Development

**Important**: Use `npm run android` to run on Android (not `npm start`)

```bash
# Build and run on Android device/emulator
npm run android
```

This command:
- Builds the native Android app with Firebase integration
- Installs on connected device/emulator
- Starts Metro bundler on available port (8081, 8082, etc.)

## Testing FCM Notifications

### 1. Get FCM Token

1. Open the app on Android device
2. Navigate to **Alerts** tab
3. Tap **"FCM Token"** button
4. Copy the displayed token

### 2. Send Test Notification

1. Go to [Firebase Console](https://console.firebase.google.com/) → Cloud Messaging
2. Click **"Send your first message"**
3. Enter notification details:
   - **Title**: "Temperature Alert"
   - **Body**: "High temperature detected"
4. Click **Next** → **Send test message**
5. Paste your FCM token and send

### 3. Test Different App States

- **Foreground**: App open and active - shows in-app alert
- **Background**: App minimized - shows system notification
- **Killed**: App closed completely - shows system notification

### 4. Custom Data Format

For smart home alerts, include this data in Firebase Console:

```json
{
  "alertName": "Temperature Alert",
  "deviceId": "TEMP_001", 
  "reason": "Temperature exceeded 25°C",
  "severity": "high"
}
```

## Project Structure

```
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx          # Home screen with sensor dashboard
│   │   ├── alert.tsx          # FCM notifications display
│   │   └── _layout.tsx        # Tab navigation with NotificationProvider
├── components/
│   ├── smart-home-background.tsx  # Gradient background
│   ├── control-card.tsx       # Sensor device cards
│   └── fcm-test-panel.tsx     # FCM testing utilities
├── contexts/
│   └── NotificationContext.tsx    # FCM state management
├── services/
│   ├── fcmService.ts          # Firebase messaging service
│   └── mqttService.ts         # MQTT client for sensors
└── android/
    ├── app/
    │   ├── build.gradle       # App-level build config
    │   └── google-services.json  # Firebase configuration
    └── build.gradle           # Project-level build config
```

## Key Configuration Files

### Package Configuration

- **Application ID**: `com.iotlab.homegateway`
- **Package Name**: `home-gateway-mobile-app`
- **Firebase Project**: `homegateway-4c521`

### Dependencies

- **Firebase**: `@react-native-firebase/app@23.4.0`, `@react-native-firebase/messaging@23.4.0`
- **MQTT**: `paho-mqtt@1.1.0` for IoT device communication
- **Navigation**: `expo-router@6.0.8` for file-based routing
- **UI**: `@expo/vector-icons`, `expo-linear-gradient`

## Development

The app uses:
- **Expo Router** for navigation
- **TypeScript** for type safety
- **React Context** for state management
- **MQTT over WebSocket** for real-time data
- **FCM** for push notifications

Edit files in the `app/` directory to start developing. The project uses file-based routing.

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Firebase](https://rnfirebase.io/)
- [Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging)
- [MQTT.js Documentation](https://github.com/mqttjs/MQTT.js)