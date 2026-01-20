import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" style={styles.section}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={styles.container}
            >
                <h2 style={styles.heading}>LET'S TALK</h2>
                <div style={styles.grid}>
                    <div style={styles.info}>
                        <p style={styles.subtext}>Got a project in mind? Let's build something extraordinary together.</p>
                        <a href="mailto:ismail.ouali@ump.ac.ma" style={styles.email}>ismail.ouali@ump.ac.ma</a>
                        <p style={{ ...styles.subtext, marginTop: '1rem' }}>+212688025523</p>
                    </div>
                    <form style={styles.form} onClick={(e) => e.preventDefault()}>
                        <input type="text" placeholder="NAME" style={styles.input} />
                        <input type="email" placeholder="EMAIL" style={styles.input} />
                        <textarea placeholder="MESSAGE" rows="4" style={styles.input} />
                        <button style={styles.button}>SEND MESSAGE</button>
                    </form>
                </div>
            </motion.div>
        </section>
    );
};

const styles = {
    section: {
        padding: '15vh 5%',
        background: 'var(--bg-primary)',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center'
    },
    container: {
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto'
    },
    heading: {
        fontSize: 'clamp(3rem, 10vw, 8rem)',
        marginBottom: '4rem',
        color: 'var(--text-primary)',
        lineHeight: 0.9,
        textAlign: 'center'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem',
        alignItems: 'start'
    },
    info: {
        paddingRight: '2rem'
    },
    subtext: {
        fontSize: '1.2rem',
        color: 'var(--text-secondary)',
        marginBottom: '2rem'
    },
    email: {
        fontSize: '1.5rem',
        color: 'var(--accent-primary)',
        textDecoration: 'underline'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
    },
    input: {
        background: 'transparent',
        border: 'none',
        borderBottom: '1px solid rgba(255,255,255,0.2)',
        padding: '1rem 0',
        color: 'var(--text-primary)',
        fontSize: '1rem',
        fontFamily: 'var(--font-main)',
        outline: 'none',
        transition: 'border-color 0.3s ease'
    },
    button: {
        padding: '1rem 2rem',
        background: 'var(--accent-primary)',
        color: 'white',
        border: 'none',
        fontSize: '0.9rem',
        letterSpacing: '1px',
        cursor: 'pointer',
        marginTop: '1rem',
        alignSelf: 'flex-start',
        fontFamily: 'var(--font-display)',
        fontWeight: 700
    }
};

export default Contact;
