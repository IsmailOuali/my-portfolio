import React from 'react';
import { motion } from 'framer-motion';
import ComputerCanvas from './canvas/ComputerCanvas';

const Hero = () => {
    return (
        <section style={styles.section} id="home">
            <div style={styles.container}>
                {/* Left Side: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    style={styles.content}
                >
                    <h1 style={styles.title}>
                        <span style={styles.outline}>OUALI</span><br />
                        <span style={styles.name}>ISMAIL</span>
                    </h1>

                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: '100px' }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        style={styles.divider}
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        style={styles.subtitle}
                    >
                        Developpeur Full stack
                        <span style={styles.highlight}> (Laravel / React)</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        style={styles.ctaContainer}
                    >
                        <a href="#projects" style={styles.ctaButton}>View Projects</a>
                        <a href="#contact" style={styles.ctaSecondary}>Contact Me</a>
                    </motion.div>
                </motion.div>

                {/* Right Side: 3D Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 1, ease: 'easeOut' }}
                    style={styles.canvasContainer}
                >
                    <React.Suspense fallback={<div style={{ color: 'white' }}>Loading 3D Model...</div>}>
                        <ComputerCanvas />
                    </React.Suspense>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                style={styles.scrollIndicator}
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={styles.scrollMouse}
                >
                    <div style={styles.scrollWheel} />
                </motion.div>
                <span style={styles.scrollText}>SCROLL</span>
            </motion.div>

            <div style={styles.backgroundGlow} />
        </section>
    );
};

const styles = {
    section: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 5%'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '1400px',
        zIndex: 10,
        gap: '2rem',
        flexWrap: 'wrap'
    },
    content: {
        flex: 1,
        minWidth: '350px',
        textAlign: 'left'
    },
    canvasContainer: {
        flex: 1.2,
        height: '600px',
        minWidth: '350px',
        cursor: 'grab'
    },
    title: {
        fontSize: 'clamp(3rem, 7vw, 6rem)',
        lineHeight: 0.9,
        marginBottom: '1rem',
        color: 'var(--text-primary)',
        fontWeight: '900',
        letterSpacing: '-2px'
    },
    name: {
        color: 'var(--text-primary)',
    },
    outline: {
        color: 'transparent',
        WebkitTextStroke: '1.5px var(--accent-primary)',
        fontFamily: 'var(--font-display)',
        opacity: 0.8
    },
    divider: {
        height: '4px',
        background: 'var(--gradient-primary, linear-gradient(90deg, #7000ff, #00d4ff))',
        marginBottom: '2rem',
        borderRadius: '2px'
    },
    subtitle: {
        fontSize: '1.2rem',
        color: 'var(--text-secondary)',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        marginBottom: '2.5rem',
        fontWeight: '500'
    },
    highlight: {
        color: 'var(--accent-primary)',
        fontWeight: '700'
    },
    ctaContainer: {
        display: 'flex',
        gap: '1.5rem',
    },
    ctaButton: {
        padding: '12px 30px',
        background: 'var(--accent-primary, #7000ff)',
        color: '#fff',
        borderRadius: '5px',
        textDecoration: 'none',
        fontWeight: '600',
        transition: 'transform 0.3s ease',
        boxShadow: '0 4px 15px rgba(112, 0, 255, 0.3)'
    },
    ctaSecondary: {
        padding: '12px 30px',
        border: '1px solid var(--text-secondary)',
        color: 'var(--text-primary)',
        borderRadius: '5px',
        textDecoration: 'none',
        fontWeight: '600',
        transition: 'all 0.3s ease'
    },
    scrollIndicator: {
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        opacity: 0.6
    },
    scrollMouse: {
        width: '24px',
        height: '40px',
        border: '2px solid var(--text-secondary)',
        borderRadius: '12px',
        display: 'flex',
        justifyContent: 'center',
        padding: '5px'
    },
    scrollWheel: {
        width: '2px',
        height: '8px',
        background: 'var(--text-secondary)',
        borderRadius: '1px'
    },
    scrollText: {
        fontSize: '0.7rem',
        letterSpacing: '3px',
        color: 'var(--text-secondary)'
    },
    backgroundGlow: {
        position: 'absolute',
        top: '30%',
        right: '10%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, var(--accent-glow, rgba(112, 0, 255, 0.1)) 0%, transparent 70%)',
        zIndex: 1,
        filter: 'blur(100px)',
        opacity: 0.4,
        pointerEvents: 'none'
    }
};

export default Hero;

