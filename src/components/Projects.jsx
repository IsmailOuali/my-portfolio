import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: 'NEON VERSE',
        category: 'Immersive Web',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80',
        color: '#7000ff'
    },
    {
        id: 2,
        title: 'CYBER DUST',
        category: '3D Experience',
        image: 'https://images.unsplash.com/photo-1534211833777-98777085c5bd?auto=format&fit=crop&q=80',
        color: '#00f0ff'
    },
    {
        id: 3,
        title: 'VOID WALKER',
        category: 'Game Design',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80',
        color: '#ff2a6d'
    },
    {
        id: 4,
        title: 'AESTHETICA',
        category: 'Brand Identity',
        image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80',
        color: '#05d9e8'
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="project-card"
            style={styles.card}
        >
            <div style={styles.imageContainer}>
                <img src={project.image} alt={project.title} style={styles.image} />
                <div style={styles.overlay} />
            </div>
            <div style={styles.info}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={{ color: project.color, ...styles.category }}>{project.category}</p>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="work" style={styles.section}>
            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={styles.header}
            >
                SELECTED WORK <span style={styles.headerLine} />
            </motion.h2>
            <div style={styles.grid}>
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '10vh 5%',
        background: 'var(--bg-primary)'
    },
    header: {
        fontSize: 'clamp(2rem, 5vw, 4rem)',
        marginBottom: '4rem',
        display: 'flex',
        alignItems: 'center',
        gap: '2rem'
    },
    headerLine: {
        height: '2px',
        flex: 1,
        background: 'var(--accent-primary)',
        opacity: 0.5
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem'
    },
    card: {
        cursor: 'pointer',
        position: 'relative'
    },
    imageContainer: {
        height: '400px',
        overflow: 'hidden',
        marginBottom: '1.5rem',
        position: 'relative'
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.6s ease',
    },
    overlay: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
        opacity: 0,
        transition: 'opacity 0.3s ease'
    },
    info: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        paddingBottom: '1rem'
    },
    projectTitle: {
        fontSize: '1.5rem',
        fontFamily: 'var(--font-display)'
    },
    category: {
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        letterSpacing: '1px'
    }
};

export default Projects;
