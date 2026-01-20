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
                    <h2 style={styles.heading}>PROFIL</h2>
                    <p style={styles.paragraph}>
                        Creative and solution-oriented web developer, specialized in <span style={styles.highlight}>Laravel</span> and modern <span style={styles.highlight}>front-end frameworks</span>.
                    </p>
                    <p style={styles.paragraph}>
                        I have led several projects from end to end, applying best practices in development, security, and software architecture. My goal: to build reliable, intuitive, and scalable applications.
                    </p>
                    <div style={styles.stats}>
                        <div style={styles.statItem}>
                            <span style={styles.statNumber}>05+</span>
                            <span style={styles.statLabel}>YEARS EXP</span>
                        </div>
                        <div style={styles.statItem}>
                            <span style={styles.statNumber}>20+</span>
                            <span style={styles.statLabel}>PROJECTS</span>
                        </div>
                        <div style={styles.statItem}>
                            <span style={styles.statNumber}>3+</span>
                            <span style={styles.statLabel}>CERTIFICATIONS</span>
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
