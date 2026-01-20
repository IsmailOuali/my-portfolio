import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section style={styles.section}>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                style={styles.content}
            >
                <h1 style={styles.title}>
                    <span style={styles.outline}>OUALI</span><br />
                    ISMAIL
                </h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    style={styles.subtitle}
                >
                    Developpeur Full stack (Laravel/React)
                </motion.p>
            </motion.div>

            <div style={styles.backgroundGlow} />
        </section>
    );
};

const styles = {
    section: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
    },
    content: {
        zIndex: 10,
        textAlign: 'center'
    },
    title: {
        fontSize: 'clamp(3rem, 10vw, 8rem)',
        lineHeight: 0.9,
        marginBottom: '2rem',
        color: 'var(--text-primary)'
    },
    outline: {
        color: 'transparent',
        WebkitTextStroke: '2px var(--accent-primary)',
        fontFamily: 'var(--font-display)'
    },
    subtitle: {
        fontSize: '1.2rem',
        color: 'var(--text-secondary)',
        letterSpacing: '2px',
        textTransform: 'uppercase'
    },
    backgroundGlow: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '40vw',
        height: '40vw',
        background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
        zIndex: 1,
        filter: 'blur(50px)',
        opacity: 0.6
    }
};

export default Hero;
