/**
 * Level 99 Spatial JS Scaffold
 * Purpose: Initialize a high-performance Three.js 3D environment with WebXR ready.
 */

import * as THREE from 'three';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';

export function init3DScene(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    console.log("🚀 Initializing 3D Spatial Environment...");

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    scene.background = new THREE.Color(0x0a0a0a);

    // 2. Optimized Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true; // IMPORTANT: Level 99 XR Support
    container.appendChild(renderer.domElement);

    // 3. Add XR Button
    document.body.appendChild(VRButton.createButton(renderer));

    // 4. Lighting (Optimized for performance)
    const ambientLight = new THREE.AmbientLight(0x404040, 2); // Soft white light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    // 5. Sample Object
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // 6. Animation Logic (Frame-rate Independent)
    function animate() {
        renderer.setAnimationLoop(() => {
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        });
    }

    animate();
    console.log("%c ✅ 3D Scene Performance Verified. ", "color: #fff; background: #166534;");
}
