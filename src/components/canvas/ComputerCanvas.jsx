import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float, ContactShadows } from '@react-three/drei';

const ComputerModel = (props) => {
    const group = useRef();

    // Rotating animation
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        group.current.rotation.y = Math.sin(t / 4) / 8;
        group.current.rotation.x = Math.cos(t / 4) / 8;
        group.current.position.y = Math.sin(t / 1.5) / 10;
    });

    return (
        <group ref={group} {...props} dispose={null}>
            {/* Laptop Base */}
            <mesh position={[0, -0.5, 0]}>
                <boxGeometry args={[3, 0.2, 2]} />
                <meshStandardMaterial color="#2a2a2a" metalness={0.7} roughness={0.3} />
            </mesh>

            {/* Laptop Keyboard Area details (simple planes) */}
            <mesh position={[0, -0.39, 0.3]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[2.5, 1]} />
                <meshStandardMaterial color="#111111" />
            </mesh>

            {/* Screen Hinge - Screen Group */}
            <group position={[0, -0.4, -0.8]} rotation={[Math.PI / 10, 0, 0]}>
                {/* Lid */}
                <mesh position={[0, 0.75, 0]}>
                    <boxGeometry args={[3, 1.8, 0.1]} />
                    <meshStandardMaterial color="#2a2a2a" metalness={0.7} roughness={0.3} />
                </mesh>

                {/* Screen Display */}
                <mesh position={[0, 0.75, 0.06]}>
                    <planeGeometry args={[2.8, 1.6]} />
                    <meshStandardMaterial
                        color="#050505"
                        emissive="#0066ff"
                        emissiveIntensity={0.5}
                        roughness={0.3}
                        metalness={0.7}
                    />
                </mesh>

                {/* Fake UI on screen - glowing bars */}
                <mesh position={[-0.5, 0.75, 0.07]}>
                    <planeGeometry args={[1, 0.1]} />
                    <meshBasicMaterial color="#00aaff" />
                </mesh>
                <mesh position={[0.5, 0.5, 0.07]}>
                    <planeGeometry args={[0.8, 0.4]} />
                    <meshBasicMaterial color="#ff00aa" />
                </mesh>
            </group>
        </group>
    );
};

const ComputerCanvas = () => {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Canvas
                shadows
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
            >
                <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />

                {/* Stable Lighting Setup */}
                <ambientLight intensity={0.8} />
                <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
                <pointLight position={[-5, -5, -5]} intensity={2} color="#7000ff" />
                <pointLight position={[5, 5, 5]} intensity={1.5} color="#00d4ff" />

                <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                    <ComputerModel />
                </Float>

                <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 2.5}
                    maxPolarAngle={Math.PI / 1.8}
                />
            </Canvas>
        </div>
    );
};

export default ComputerCanvas;
