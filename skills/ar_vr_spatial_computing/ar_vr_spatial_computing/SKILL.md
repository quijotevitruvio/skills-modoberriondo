# AR/VR & Spatial Computing Skill (Level 99)

Master-level orchestration of immersive 3D environments, focusing on high-performance spatial browsers (Apple Vision Pro, Meta Quest) using Three.js and the WebXR API.

## [!IMPORTANT] The Golden Rule of Spatial Web
- **Performance is Physics**: In VR, a frame drop equals physical nausea for the user. Maintain a rock-solid 90+ FPS using optimized geometry and custom shaders.
- **Occlusion & Lighting**: For AR, ensure digital objects "interact" with the real world through depth-sensing and environmental light estimation.
- **Accessibility in 3D**: Design for gaze-based and hand-gesture interactions, not just controllers or mice.

## 🛠️ Level 99 Automation (Patterns)
- **Instanced Rendering**: Render thousands of objects (e.g. data points or trees) in a single draw call for maximum GPU efficiency.
- **LOD (Level of Detail)**: Switch to lower-polygon models for distant objects automatically to save memory and processing.
- **Shader Orchestration**: Use GLSL (OpenGL Shading Language) to create "Impossibly Small but Beautiful" effects that don't rely on heavy textures.

## Command Library (Execution & Debugging)
> [!NOTE]
> Use these to scaffold and debug your 3D spatial scenes.

- **Check Scene Complexity (Draw Calls)**:
  ```javascript
  (Using Three.js) renderer.info.render.calls
  ```
- **Inspect WebXR Session Health**:
  ```bash
  (In Chrome/Edge) chrome://webxr-internals/
  ```
- **Initialize a 3D Canvas**:
  ```bash
  (Using npx) npx -y create-r3f-app (for React-Three-Fiber)
  ```

## Advanced Techniques
- **Light Probe Generation**: Dynamically capture real-world light (via ARCore/ARKit) and apply it to virtual objects for photorealism.
- **Physical Computing Integration**: Link your VR scene to real-world IoT sensors (via MQTT node in n8n) for "Digital Twin" simulations.
- **Spatial Audio**: Use the Web Audio API to create "Positional" sound that changes as the user moves through the 3D scene.

## Actionable Script: Spatial Scaffold
- **[3d-scaffold.js](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/ar_vr_spatial_computing/scripts/3d-scaffold.js)**: A script to initialize a performance-optimized Three.js boilerplate with ready-to-use XR support.

## Inter-Skill Integration
- **With UI/UX Design Systems**: Translate your 2D design tokens into "3D Materials" for brand consistency in spatial apps.
- **With AI RAG**: Build a "Spatial Brain" where users can browse your Vector DB items as floating 3D nodes in the real world.
- **With Performance Engineering**: 3D is the ultimate test of the "10s of Milliseconds" goal for interactive frames.
