
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Starfield: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const clockRef = useRef(new THREE.Clock());

  useEffect(() => {
    if (!mountRef.current) return;

    const initScene = () => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 5000);
      camera.position.z = 1000;

      const renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true, 
        powerPreference: 'high-performance' 
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      mountRef.current?.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      // --- LAYER 1: Deep Nebula Stars ---
      const starsCount = 5000;
      const positions = new Float32Array(starsCount * 3);
      const colors = new Float32Array(starsCount * 3);
      const sizes = new Float32Array(starsCount);

      for (let i = 0; i < starsCount; i++) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * 4500;
        positions[i3 + 1] = (Math.random() - 0.5) * 4500;
        positions[i3 + 2] = (Math.random() - 0.5) * 4500;

        // Colors based on PNG theme (White + Emerald)
        const isEmerald = Math.random() > 0.7;
        colors[i3] = isEmerald ? 0.0 : 1.0;
        colors[i3 + 1] = 1.0;
        colors[i3 + 2] = isEmerald ? 0.25 : 1.0;

        sizes[i] = Math.random() * 2 + 0.5;
      }

      const starGeometry = new THREE.BufferGeometry();
      starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const starMaterial = new THREE.PointsMaterial({
        size: 2,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
      });

      const starPoints = new THREE.Points(starGeometry, starMaterial);
      scene.add(starPoints);

      // --- LAYER 2: Emerald Nebula Clouds (Ref PNG 1, 3, 5) ---
      const nebulaCount = 25;
      const nebulaGeometry = new THREE.PlaneGeometry(1200, 1200);
      
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext('2d')!;
      const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
      gradient.addColorStop(0, 'rgba(0, 255, 65, 0.12)');
      gradient.addColorStop(0.5, 'rgba(0, 128, 33, 0.04)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 256, 256);
      const nebulaTexture = new THREE.CanvasTexture(canvas);

      const nebulaGroup = new THREE.Group();
      for (let i = 0; i < nebulaCount; i++) {
        const material = new THREE.MeshBasicMaterial({
          map: nebulaTexture,
          transparent: true,
          opacity: Math.random() * 0.5,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });
        const mesh = new THREE.Mesh(nebulaGeometry, material);
        mesh.position.set(
          (Math.random() - 0.5) * 4000,
          (Math.random() - 0.5) * 4000,
          (Math.random() - 0.5) * 3000
        );
        mesh.rotation.z = Math.random() * Math.PI;
        nebulaGroup.add(mesh);
      }
      scene.add(nebulaGroup);

      let frameId: number;
      const animate = () => {
        frameId = requestAnimationFrame(animate);
        const time = clockRef.current.getElapsedTime();
        
        starPoints.rotation.y = time * 0.02;
        starPoints.rotation.x = time * 0.01;

        nebulaGroup.children.forEach((cloud, i) => {
          cloud.position.z += 0.2;
          if (cloud.position.z > 1500) cloud.position.z = -2500;
          cloud.rotation.z += 0.0005 * (i % 2 === 0 ? 1 : -1);
        });

        renderer.render(scene, camera);
      };

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);
      animate();

      return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(frameId);
        renderer.dispose();
        starGeometry.dispose();
        starMaterial.dispose();
        nebulaGeometry.dispose();
      };
    };

    initScene();
  }, []);

  return <div ref={mountRef} className="w-full h-full pointer-events-none fixed inset-0" />;
};

export default Starfield;
