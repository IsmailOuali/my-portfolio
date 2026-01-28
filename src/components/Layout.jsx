import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        }

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", mouseMove);
        }
    }, []);

    return (
        <div className="layout-container">
            <nav style={{
                ...styles.nav,
                ...(isScrolled ? styles.navScrolled : {})
            }}>
                <div style={styles.logo}>PORTFOLIO</div>
                <div style={styles.links}>
                    <a href="#work" style={styles.link}>Work</a>
                    <a href="#about" style={styles.link}>About</a>
                    <a href="#experience" style={styles.link}>Experience</a>
                    <a href="#contact" style={styles.link}>Contact</a>
                </div>
            </nav>
            <main>
                {children}
            </main>
            <motion.div
                className="cursor-follower"
                animate={{ x: mousePosition.x - 10, y: mousePosition.y - 10 }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
                style={styles.cursor}
            />
        </div>
    );
};

const styles = {
    cursor: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: 'var(--accent-primary)',
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        zIndex: 9999
    },
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2rem 5%',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        color: '#fff'
    },
    navScrolled: {
        padding: '1rem 5%',
        background: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
    },
    logo: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: '1.5rem',
        letterSpacing: '2px',
        color: 'var(--text-primary)'
    },
    links: {
        display: 'flex',
        gap: '2.5rem',
        fontFamily: 'var(--font-main)',
        fontSize: '0.85rem',
        textTransform: 'uppercase',
        letterSpacing: '1px'
    },
    link: {
        textDecoration: 'none',
        color: 'var(--text-primary)',
        fontWeight: '500',
        transition: 'color 0.3s ease',
        opacity: 0.8
    }
};

export default Layout;
