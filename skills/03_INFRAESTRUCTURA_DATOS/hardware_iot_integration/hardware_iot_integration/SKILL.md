# Hardware-Level IoT Integration Skill (Level 99)

Master-level orchestration of physical computing and the Internet of Things (IoT), focusing on real-time sensor data, low-power edge computing (ESP32/Arduino), and robust message protocols (MQTT, LoRaWAN).

## [!IMPORTANT] The Golden Rule of IoT
- **Resilience Over Connectivity**: WiFi will fail. Hardware will reboot. Build "Watchdog Timers" and local caching to ensure your device remains operational without an internet connection.
- **Security for the Edge**: Use TLS/SSL for every MQTT message. Never hardcode credentials in source code (use flash encryption or secure storage).
- **Power Efficiency**: For battery devices, master "Deep Sleep" modes. A Level 99 IoT architect ensures a device runs for years, not days, on a single charge.

## 🛠️ Level 99 Automation (Patterns)
- **MQTT Bridge (Cloud-to-Edge)**: Use a central broker (Mosquitto/AWS IoT Core) to bridge your n8n workflows with physical hardware (e.g. triggering an office light when a CRM deal closes).
- **OTA (Over-The-Air) Updates**: Deploy new firmware to 1,000+ devices simultaneously without physical access.
- **Sensor Fusion (Kalman Filtering)**: Combine multiple noisy sensor readings (Accelerometer + Gyro) into a single, high-precision orientation or position value.

## Command Library (Execution & Debugging)
> [!NOTE]
> Use these to monitor and control your IoT fleet instantly.

- **Listen to MQTT Topic (CLI)**:
  ```bash
  mosquitto_sub -h broker.hivemq.com -t "vanguard/office/sensors/#" -v
  ```
- **Publish Test Message**:
  ```bash
  mosquitto_pub -h broker.hivemq.com -t "vanguard/office/led" -m "ON"
  ```
- **Check Serial Logs (ESP32 via CLI)**:
  ```bash
  npx -y pio device monitor --baud 115200
  ```

## Advanced Techniques
- **Edge AI (TensorFlow Lite for Microcontrollers)**: Run gesture recognition or voice activation directly on the ESP32 without sending data to the cloud.
- **MQTT Retained Messages**: Ensure new devices instantly receive the last "Command State" when they connect.
- **Mesh Networking (ESP-NOW)**: Create a local network of 50+ devices that can talk to each other without a central router.

## Actionable Script: MQTT Bridge
- **[mqtt-bridge.py](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/hardware_iot_integration/scripts/mqtt-bridge.py)**: A Python utility to bridge your CRM/SaaS events with an MQTT broker to trigger physical hardware.

## Inter-Skill Integration
- **With n8n**: The ultimate bridge. Use n8n to listen for Webhooks and send MQTT commands to your office hardware.
- **With Analytics Tracking**: Track physical interactions (e.g. a "Customer satisfaction" button in a store) as digital events in your CRM.
- **With Cloud Architect (AWS/GCP)**: Use IoT Core to scale from 1 device to 1 million with managed security and device shadows.
