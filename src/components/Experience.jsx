import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaReact, FaVuejs, FaAngular, FaHtml5, FaCss3Alt, FaDocker, FaJenkins, FaJira, FaFigma, FaShieldAlt, FaProjectDiagram, FaTachometerAlt, FaServer } from 'react-icons/fa';
import { SiPhp, SiLaravel, SiSpring, SiJavascript, SiMysql, SiPostgresql, SiMongodb, SiFirebase, SiGit, SiPostman, SiScrumalliance } from 'react-icons/si';

const Experience = () => {
    const experiences = [
        {
            company: 'ArkxTalent',
            role: 'TECHNICAL COACH LARAVEL/VUE',
            period: 'nov. 2025 - Today',
            description: 'Support for interns in their progression in web development: leading hands-on workshops, supervising projects, reviewing code, and implementing best practices (MVC, Git, code quality). Creation of educational exercises and regular technical follow-up.'
        },
        {
            company: 'DevNet',
            role: 'FULLSTACK DEVELOPER',
            period: 'fév. 2025 - Today',
            description: 'Full development of the classifieds platform (front-end, back-end, and database). Design of the application architecture and integration of features for user, listing, and payment management. Implementation of an admin dashboard for monitoring publications and statistics. Application of security best practices, performance optimization, and deployment to a production server. Collaboration with the design team to ensure a smooth and responsive user experience.'
        },
        {
            company: 'Freelance',
            role: 'FULLSTACK DEVELOPER',
            period: '2023 - 2024',
            description: 'Complete development of a web platform with Laravel for the back-end and React for the front-end. Design and implementation of the application architecture, including user management, roles, and CRUD operations. Integration of secure REST APIs and setup of a modern authentication system (JWT). Deployment of the application on a server and monitoring after production release. Autonomous project management, from conception to final delivery.'
        }
    ];

    const education = [
        {
            school: 'YouCode(UM6P)',
            degree: 'WEB AND MOBILE DEVELOPER',
            year: '2023-2025'
        },
        {
            school: '1337 (UM6P)',
            degree: 'SOFTWARE DEVELOPER',
            year: '2021-2023'
        },
        {
            school: 'Ecole superieur de technologie',
            degree: 'NETWORK ADMINISTARTION',
            year: '2019-2021'
        }
    ];

    const skills = [
        {
            category: 'Languages & Back-end',
            items: [
                { name: 'PHP (Laravel)', icon: <SiLaravel /> },
                { name: 'Java (Spring)', icon: <SiSpring /> },
                { name: 'JavaScript', icon: <SiJavascript /> }
            ]
        },
        {
            category: 'Front-end',
            items: [
                { name: 'React', icon: <FaReact /> },
                { name: 'Vue.js', icon: <FaVuejs /> },
                { name: 'Angular', icon: <FaAngular /> },
                { name: 'HTML', icon: <FaHtml5 /> },
                { name: 'CSS', icon: <FaCss3Alt /> }
            ]
        },
        {
            category: 'Databases',
            items: [
                { name: 'MySQL', icon: <SiMysql /> },
                { name: 'PostgreSQL', icon: <SiPostgresql /> },
                { name: 'MongoDB', icon: <SiMongodb /> },
                { name: 'Firebase', icon: <SiFirebase /> }
            ]
        },
        {
            category: 'APIs',
            items: [
                { name: 'REST', icon: <FaServer /> },
                { name: 'SOAP', icon: <FaServer /> }
            ]
        },
        {
            category: 'Tools & Methodologies',
            items: [
                { name: 'Git', icon: <SiGit /> },
                { name: 'Docker', icon: <FaDocker /> },
                { name: 'Jenkins', icon: <FaJenkins /> },
                { name: 'Postman', icon: <SiPostman /> },
                { name: 'Scrum', icon: <SiScrumalliance /> },
                { name: 'Jira', icon: <FaJira /> },
                { name: 'Figma', icon: <FaFigma /> }
            ]
        },
        {
            category: 'Others',
            items: [
                { name: 'Optimization', icon: <FaTachometerAlt /> },
                { name: 'Web Security', icon: <FaShieldAlt /> },
                { name: 'UML / Merise', icon: <FaProjectDiagram /> }
            ]
        }
    ];

    return (
        <section id="experience" style={styles.section}>
            <div style={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 style={styles.heading}>EXPERIENCE</h2>
                    <div style={styles.timeline}>
                        {experiences.map((exp, index) => (
                            <div key={index} style={styles.timelineItem}>
                                <div style={styles.timelineDot} />
                                <div style={styles.timelineContent}>
                                    <span style={styles.period}>{exp.period}</span>
                                    <h3 style={styles.role}>{exp.role}</h3>
                                    <h4 style={styles.company}>{exp.company}</h4>
                                    <p style={styles.description}>{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h2 style={{ ...styles.heading, marginTop: '5rem' }}>EDUCATION</h2>
                    <div style={styles.grid}>
                        {education.map((edu, index) => (
                            <div key={index} style={styles.card}>
                                <span style={styles.year}>{edu.year}</span>
                                <h3 style={styles.degree}>{edu.degree}</h3>
                                <p style={styles.school}>{edu.school}</p>
                            </div>
                        ))}
                    </div>

                    <h2 style={{ ...styles.heading, marginTop: '5rem' }}>SKILLS</h2>
                    <div style={styles.skillsGrid}>
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                style={styles.skillCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{
                                    y: -5,
                                    borderColor: 'var(--accent-primary)',
                                    boxShadow: '0 10px 30px -10px rgba(0,255,136,0.2)'
                                }}
                            >
                                <h3 style={styles.skillCategory}>{skill.category}</h3>
                                <div style={styles.skillTags}>
                                    {skill.items.map((item, i) => (
                                        <motion.span
                                            key={i}
                                            style={styles.skillTag}
                                            whileHover={{
                                                scale: 1.1,
                                                background: 'var(--accent-primary)',
                                                color: '#000',
                                                borderColor: 'var(--accent-primary)'
                                            }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <span style={{ fontSize: '1.2em', display: 'flex' }}>
                                                {item.icon}
                                            </span>
                                            {item.name}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '10vh 5%',
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)'
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto'
    },
    heading: {
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        marginBottom: '3rem',
        color: 'var(--accent-primary)',
        fontFamily: 'var(--font-display)',
        letterSpacing: '2px',
        textShadow: '0 0 20px rgba(0,255,136,0.3)'
    },
    timeline: {
        borderLeft: '2px solid rgba(255,255,255,0.1)',
        paddingLeft: '2rem',
        marginLeft: '1rem'
    },
    timelineItem: {
        marginBottom: '4rem',
        position: 'relative'
    },
    timelineDot: {
        position: 'absolute',
        left: '-2.6rem',
        top: '0.5rem',
        width: '1rem',
        height: '1rem',
        background: 'var(--accent-primary)',
        borderRadius: '50%',
        boxShadow: '0 0 15px var(--accent-primary)'
    },
    period: {
        color: 'var(--accent-secondary)',
        fontSize: '0.9rem',
        fontFamily: 'var(--font-mono)',
        marginBottom: '0.5rem',
        display: 'block'
    },
    role: {
        fontSize: '1.5rem',
        marginBottom: '0.5rem',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-display)'
    },
    company: {
        fontSize: '1.1rem',
        color: 'var(--text-secondary)',
        marginBottom: '1rem'
    },
    description: {
        lineHeight: 1.6,
        color: 'var(--text-secondary)'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem'
    },
    card: {
        background: 'rgba(255,255,255,0.03)',
        padding: '2rem',
        borderRadius: '16px',
        border: '1px solid rgba(255,255,255,0.05)',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease'
    },
    year: {
        color: 'var(--accent-primary)',
        fontSize: '0.9rem',
        fontFamily: 'var(--font-mono)'
    },
    degree: {
        fontSize: '1.2rem',
        margin: '1rem 0 0.5rem',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-display)'
    },
    school: {
        color: 'var(--text-secondary)'
    },
    skillsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem'
    },
    skillCard: {
        background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
        padding: '2.5rem',
        borderRadius: '24px',
        border: '1px solid rgba(255,255,255,0.05)',
        backdropFilter: 'blur(20px)',
        cursor: 'default'
    },
    skillCategory: {
        fontSize: '1.1rem',
        marginBottom: '2rem',
        color: 'var(--accent-secondary)',
        fontFamily: 'var(--font-display)',
        letterSpacing: '1px',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        paddingBottom: '1rem',
        display: 'inline-block'
    },
    skillTags: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem'
    },
    skillTag: {
        background: 'rgba(255,255,255,0.05)',
        padding: '0.6rem 1.2rem',
        borderRadius: '50px',
        fontSize: '0.85rem',
        color: 'var(--text-primary)',
        border: '1px solid rgba(255,255,255,0.1)',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px'
    }
};

export default Experience;
