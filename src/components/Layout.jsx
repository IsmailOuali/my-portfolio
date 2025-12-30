import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        }

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, []);

    return (
        <div className="layout-container">
            <nav style={styles.nav}>
                <div style={styles.logo}>PORTFOLIO</div>
                <div style={styles.links}>
                    <a href="#work">Work</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
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
        padding: '2rem 5%',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 100,
        mixBlendMode: 'difference',
        color: '#fff'
    },
    logo: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: '1.5rem',
        letterSpacing: '1px'
    },
    links: {
        display: 'flex',
        gap: '2rem',
        fontFamily: 'var(--font-main)',
        fontSize: '0.9rem',
        textTransform: 'uppercase'
    }
};

export default Layout;
