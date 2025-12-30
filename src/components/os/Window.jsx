import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose, IoRemove, IoExpand } from 'react-icons/io5';

const Window = ({ isOpen, onClose, title, children, minWidth = '600px', minHeight = '400px', zIndex = 1 }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.2 }}
                    style={{ ...styles.window, minWidth, minHeight, zIndex }}
                    drag
                    dragMomentum={false}
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // Constraints handled by parent usually, but limiting drift for now
                >
                    <div style={styles.titleBar} className="window-handle">
                        <div style={styles.trafficLights}>
                            <div style={{ ...styles.light, background: '#ff5f56' }} onClick={onClose} />
                            <div style={{ ...styles.light, background: '#ffbd2e' }} />
                            <div style={{ ...styles.light, background: '#27c93f' }} />
                        </div>
                        <div style={styles.title}>{title}</div>
                        <div style={{ width: 60 }} /> {/* Spacer for centering */}
                    </div>
                    <div style={styles.content}>
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const styles = {
    window: {
        position: 'absolute',
        top: '10%',
        left: '20%',
        background: 'rgba(20, 20, 20, 0.85)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '12px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        color: '#fff'
    },
    titleBar: {
        height: '38px',
        background: 'rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
        cursor: 'default'
    },
    trafficLights: {
        display: 'flex',
        gap: '8px'
    },
    light: {
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        cursor: 'pointer'
    },
    title: {
        fontSize: '13px',
        fontWeight: 500,
        color: 'rgba(255, 255, 255, 0.7)',
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif'
    },
    content: {
        flex: 1,
        overflow: 'auto',
        position: 'relative',
        padding: '20px'
    }
};

export default Window;
