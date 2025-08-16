import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Store references
    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Create particle field
    const particleCount = 2000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

      // Random colors with blue/purple theme
      colors[i * 3] = Math.random() * 0.5 + 0.3; // R
      colors[i * 3 + 1] = Math.random() * 0.3 + 0.2; // G
      colors[i * 3 + 2] = Math.random() * 0.7 + 0.3; // B
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.8,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.8
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Create floating geometric shapes
    const shapes = [];
    const shapeCount = 15;

    for (let i = 0; i < shapeCount; i++) {
      let geometry;
      const shapeType = Math.floor(Math.random() * 3);
      
      if (shapeType === 0) {
        geometry = new THREE.BoxGeometry(1, 1, 1);
      } else if (shapeType === 1) {
        geometry = new THREE.SphereGeometry(0.5, 16, 16);
      } else {
        geometry = new THREE.TorusGeometry(0.5, 0.2, 8, 16);
      }

      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(Math.random() * 0.3 + 0.6, 0.7, 0.6),
        transparent: true,
        opacity: 0.3,
        wireframe: true
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30
      );
      mesh.scale.setScalar(Math.random() * 0.5 + 0.5);
      
      scene.add(mesh);
      shapes.push({
        mesh,
        rotationSpeed: {
          x: Math.random() * 0.02,
          y: Math.random() * 0.02,
          z: Math.random() * 0.02
        },
        floatOffset: Math.random() * Math.PI * 2
      });
    }

    // Position camera
    camera.position.z = 15;

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // Rotate particle field
      particles.rotation.x = time * 0.05;
      particles.rotation.y = time * 0.1;

      // Animate floating shapes
      shapes.forEach((shape, index) => {
        shape.mesh.rotation.x += shape.rotationSpeed.x;
        shape.mesh.rotation.y += shape.rotationSpeed.y;
        shape.mesh.rotation.z += shape.rotationSpeed.z;
        
        shape.mesh.position.y += Math.sin(time * 0.5 + shape.floatOffset) * 0.01;
      });

      // Gentle camera movement
      camera.position.x = Math.sin(time * 0.1) * 2;
      camera.position.y = Math.cos(time * 0.08) * 1;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of geometries and materials
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <div 
        ref={mountRef} 
        className="absolute inset-0"
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}
      />
      
      {/* Optional overlay content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4 opacity-80">
            Interactive 3D Space
          </h1>
          <p className="text-xl opacity-60">
            Floating particles and geometric shapes
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThreeBackground;