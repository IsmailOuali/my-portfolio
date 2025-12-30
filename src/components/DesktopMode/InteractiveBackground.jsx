import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const BoxGrid = () => {
    const meshRef = useRef();
    const { viewport, mouse } = useThree();

    // Grid settings
    const count = 40; // 40x40 grid
    const sep = 1.5; // Separation

    // Create dummy object once for matrix calculations
    const dummy = useMemo(() => new THREE.Object3D(), []);

    // Initial positions
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            for (let j = 0; j < count; j++) {
                const x = (i - count / 2) * sep;
                const y = (j - count / 2) * sep;
                const z = 0;
                temp.push({ x, y, z, mx: i, my: j });
            }
        }
        return temp;
    }, []);

    useFrame((state) => {
        if (!meshRef.current) return;

        // Convert mouse to world space roughly (assuming camera near 0,0,10 looking at 0,0,0)
        // Viewport width/height at z=0 would be ideal.
        // Standard setup: camera z=20, fov=75. 
        // We'll iterate and update matrices
        const time = state.clock.getElapsedTime();
        const mx = (mouse.x * viewport.width) / 2;
        const my = (mouse.y * viewport.height) / 2;

        particles.forEach((particle, i) => {
            const { x, y } = particle;

            // Calculate distance from mouse
            const dx = x - mx;
            const dy = y - my;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Interaction radius
            const r = 8;
            let scale = 1;
            let z = 0;
            let rotX = 0;
            let rotY = 0;

            // Base Wave Motion
            z = Math.sin((x + time) * 0.3) * 0.5 + Math.cos((y + time) * 0.3) * 0.5;

            // Mouse Interaction
            if (dist < r) {
                const force = (r - dist) / r; // 0 to 1
                scale = 1 + force * 1.5; // Scale up
                z += force * 5; // Move towards camera
                rotX = dy * force * 0.5;
                rotY = -dx * force * 0.5;
            }

            dummy.position.set(x, y, z);
            dummy.rotation.set(rotX, rotY, 0);
            dummy.scale.set(scale, scale, scale);
            dummy.updateMatrix();

            meshRef.current.setMatrixAt(i, dummy.matrix);
            // Optional: change color? InstancedMesh color support is tricky without custom shader or setColorAt
        });

        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[null, null, count * count]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#2a2a3a" roughness={0.4} metalness={0.6} wireframe={false} />
        </instancedMesh>
    );
};

const InteractiveBackground = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, background: '#050510' }}>
            <Canvas camera={{ position: [0, 0, 30], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} color="blue" intensity={1} />
                <BoxGrid />
            </Canvas>
        </div>
    );
};

export default InteractiveBackground;
