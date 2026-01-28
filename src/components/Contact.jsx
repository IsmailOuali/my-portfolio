import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Simulating form submission
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });

            // Reset status after 3 seconds
            setTimeout(() => setStatus(''), 3000);
        }, 1500);
    };

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
                    <form style={styles.form} onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="NAME"
                            style={styles.input}
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="EMAIL"
                            style={styles.input}
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="MESSAGE"
                            rows="4"
                            style={styles.input}
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <button
                            type="submit"
                            style={{
                                ...styles.button,
                                ...(status === 'sending' ? styles.buttonDisabled : {})
                            }}
                            disabled={status === 'sending'}
                        >
                            {status === 'sending' ? 'SENDING...' : status === 'success' ? 'SENT!' : 'SEND MESSAGE'}
                        </button>

                        {status === 'success' && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={styles.successMessage}
                            >
                                Thank you! Your message has been sent.
                            </motion.p>
                        )}
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
        fontWeight: 700,
        transition: 'all 0.3s ease',
        opacity: 1
    },
    buttonDisabled: {
        opacity: 0.5,
        cursor: 'not-allowed'
    },
    successMessage: {
        color: '#4CAF50',
        fontSize: '0.9rem',
        marginTop: '1rem',
        fontWeight: '500'
    }
};

export default Contact;
