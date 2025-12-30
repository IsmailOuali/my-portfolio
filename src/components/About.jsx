import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" style={styles.section}>
            <div style={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={styles.textContainer}
                >
                    <h2 style={styles.heading}>THE STORY</h2>
                    <p style={styles.paragraph}>
                        I am a digital artisan based in the cloud. My passion lies in bridging the gap between <span style={styles.highlight}>functional utility</span> and <span style={styles.highlight}>aesthetic beauty</span>.
                    </p>
                    <p style={styles.paragraph}>
                        With a background in computational design and visual arts, I approach every project as a unique problem-solving opportunity, wrapped in high-fidelity visuals.
                    </p>
                    <div style={styles.stats}>
                        <div style={styles.statItem}>
                            <span style={styles.statNumber}>05+</span>
                            <span style={styles.statLabel}>YEARS EXP</span>
                        </div>
                        <div style={styles.statItem}>
                            <span style={styles.statNumber}>50+</span>
                            <span style={styles.statLabel}>PROJECTS</span>
                        </div>
                        <div style={styles.statItem}>
                            <span style={styles.statNumber}>15+</span>
                            <span style={styles.statLabel}>AWARDS</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '15vh 5%',
        background: 'var(--bg-secondary)'
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto'
    },
    heading: {
        fontSize: '1rem',
        color: 'var(--accent-secondary)',
        marginBottom: '2rem',
        letterSpacing: '3px'
    },
    textContainer: {
        maxWidth: '800px'
    },
    paragraph: {
        fontSize: 'clamp(1.2rem, 3vw, 2rem)',
        lineHeight: 1.4,
        marginBottom: '3rem',
        color: 'var(--text-primary)'
    },
    highlight: {
        color: 'var(--accent-primary)',
        fontFamily: 'var(--font-display)'
    },
    stats: {
        display: 'flex',
        gap: '3rem',
        marginTop: '5rem'
    },
    statItem: {
        display: 'flex',
        flexDirection: 'column'
    },
    statNumber: {
        fontSize: '3rem',
        fontFamily: 'var(--font-display)',
        color: 'var(--text-primary)'
    },
    statLabel: {
        fontSize: '0.8rem',
        color: 'var(--text-secondary)',
        marginTop: '0.5rem',
        letterSpacing: '1px'
    }
};

export default About;
