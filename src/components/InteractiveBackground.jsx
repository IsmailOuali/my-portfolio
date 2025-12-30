import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const InteractiveBackground = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 700 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX - 250); // Center the 500px glow
            mouseY.set(e.clientY - 250);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <motion.div
            style={{
                position: 'fixed',
                left: 0,
                top: 0,
                x: springX,
                y: springY,
                width: 500,
                height: 500,
                background: 'radial-gradient(circle, rgba(112, 0, 255, 0.15) 0%, transparent 70%)',
                filter: 'blur(50px)',
                zIndex: 0,
                pointerEvents: 'none',
                borderRadius: '50%'
            }}
        />
    );
};

export default InteractiveBackground;
