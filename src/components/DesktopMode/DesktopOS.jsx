import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import { FaApple, FaFolder, FaGithub, FaLinkedin, FaEnvelope, FaTimes, FaMinus, FaExpand, FaWifi, FaBatteryFull, FaCompress, FaGlobe } from 'react-icons/fa';
import Projects from '../Projects';
import About from '../About';
import Contact from '../Contact';
import InteractiveBackground from './InteractiveBackground';

// Window Component with Maximize/Minimize capabilities
const DesktopWindow = ({ id, title, content, onClose, onMinimize, onMaximize, isMaximized, zIndex, onFocus }) => {
    const dragControls = useDragControls();

    // Prevent drag when maximized
    const startDrag = (e) => {
        if (!isMaximized) {
            dragControls.start(e);
        }
    };

    return (
        <motion.div
            drag={!isMaximized}
            dragControls={dragControls}
            dragListener={false}
            dragMomentum={false}
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{
                scale: 1,
                opacity: 1,
                x: isMaximized ? 0 : undefined,
                y: isMaximized ? 0 : undefined,
                width: isMaximized ? '100%' : '800px',
                height: isMaximized ? 'calc(100% - 30px)' : '600px',
                top: isMaximized ? '30px' : '10%',
                left: isMaximized ? 0 : '20%',
                borderRadius: isMaximized ? 0 : '12px'
            }}
            exit={{ scale: 0.5, opacity: 0, y: 200 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onPointerDown={onFocus}
            style={{
                position: 'absolute',
                backgroundColor: 'rgba(28, 28, 30, 0.85)',
                backdropFilter: 'blur(20px)',
                border: isMaximized ? 'none' : '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: isMaximized ? 'none' : '0 25px 50px rgba(0,0,0,0.6)',
                overflow: 'hidden',
                zIndex: zIndex,
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            {/* Title Bar */}
            <div
                style={{
                    padding: '12px 16px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    cursor: isMaximized ? 'default' : 'grab',
                    touchAction: 'none'
                }}
                onPointerDown={(e) => {
                    onFocus();
                    startDrag(e);
                }}
                onDoubleClick={onMaximize}
            >
                <div style={{ display: 'flex', gap: '8px', marginRight: '16px' }}>
                    {/* Close (Red) */}
                    <div
                        onClick={(e) => { e.stopPropagation(); onClose(); }}
                        style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        className="window-control"
                    >
                        <FaTimes style={{ fontSize: '6px', opacity: 0 }} />
                    </div>
                    {/* Minimize (Yellow) */}
                    <div
                        onClick={(e) => { e.stopPropagation(); onMinimize(); }}
                        style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        className="window-control"
                    >
                        <FaMinus style={{ fontSize: '6px', opacity: 0 }} />
                    </div>
                    {/* Maximize (Green) */}
                    <div
                        onClick={(e) => { e.stopPropagation(); onMaximize(); }}
                        style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        className="window-control"
                    >
                        <FaExpand style={{ fontSize: '6px', opacity: 0 }} />
                    </div>
                </div>
                <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem', fontWeight: 500, flex: 1, textAlign: 'center', pointerEvents: 'none' }}>
                    {title}
                </span>
                <div style={{ width: 60 }} />
            </div>

            {/* Content Area */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '0', position: 'relative' }}>
                {content}
            </div>

            <style>{`
    .window - control:hover svg { opacity: 0.6!important; color: #000; }
`}</style>
        </motion.div>
    );
};

const DesktopIcon = ({ label, icon, onDoubleClick }) => (
    <motion.div
        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
        whileTap={{ scale: 0.95 }}
        onDoubleClick={onDoubleClick}
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '90px',
            margin: '12px',
            padding: '8px',
            cursor: 'pointer',
            borderRadius: '8px',
            transition: 'background-color 0.2s'
        }}
    >
        <div style={{
            fontSize: '3.5rem',
            marginBottom: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.4))'
        }}>
            {icon}
        </div>
        <span style={{
            color: '#fff',
            fontSize: '0.85rem',
            fontWeight: 500,
            textAlign: 'center',
            textShadow: '0 1px 2px rgba(0,0,0,0.8)',
            lineHeight: '1.2'
        }}>
            {label}
        </span>
    </motion.div>
);

const DockItem = ({ icon, label, onClick, isOpen }) => (
    <motion.div
        onClick={onClick}
        whileHover={{ scale: 1.2, y: -10 }}
        style={{
            cursor: 'pointer',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}
    >
        <div style={{ fontSize: '2.5rem', color: '#fff', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
            {icon}
        </div>
        {isOpen && (
            <div style={{
                width: '4px',
                height: '4px',
                background: 'rgba(255,255,255,0.8)',
                borderRadius: '50%',
                position: 'absolute',
                bottom: '-8px'
            }} />
        )}
    </motion.div>
);

const DesktopOS = ({ onExit }) => {
    // Window State: { id, title, content, isMinimized, isMaximized, minZIndex }
    const [windows, setWindows] = useState([]);
    const [activeId, setActiveId] = useState(null);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const openWindow = (id, title, content) => {
        const existing = windows.find(w => w.id === id);
        if (existing) {
            // Restore if minimized, bring to front
            setWindows(windows.map(w => w.id === id ? { ...w, isMinimized: false } : w));
            setActiveId(id);
            return;
        }
        const newWindow = { id, title, content, isMinimized: false, isMaximized: false };
        setWindows([...windows, newWindow]);
        setActiveId(id);
    };

    const closeWindow = (id) => {
        setWindows(windows.filter(w => w.id !== id));
        if (activeId === id) {
            const visibleWindows = windows.filter(w => w.id !== id && !w.isMinimized);
            setActiveId(visibleWindows.length > 0 ? visibleWindows[visibleWindows.length - 1].id : null);
        }
    };

    const toggleMinimize = (id) => {
        setWindows(windows.map(w => {
            if (w.id === id) return { ...w, isMinimized: !w.isMinimized };
            return w;
        }));
        if (activeId === id) setActiveId(null);
    };

    const toggleMaximize = (id) => {
        setWindows(windows.map(w => {
            if (w.id === id) return { ...w, isMaximized: !w.isMaximized };
            return w;
        }));
        setActiveId(id);
    };

    const bringToFront = (id) => {
        setActiveId(id);
    };

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            position: 'relative',
            overflow: 'hidden',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}>
            {/* Interactive 3D Background */}
            <InteractiveBackground />

            {/* Top Bar */}
            <div style={{
                height: '30px',
                background: 'rgba(20, 20, 25, 0.4)',
                backdropFilter: 'blur(15px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 20px',
                color: '#fff',
                fontSize: '0.85rem',
                fontWeight: 500,
                zIndex: 9000,
                borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <FaApple style={{ fontSize: '1.1rem' }} />
                    <span style={{ fontWeight: 700 }}>Finder</span>
                    <span>File</span>
                    <span>Edit</span>
                    <span>View</span>
                    <span>Go</span>
                    <span>Window</span>
                    <span>Help</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <FaBatteryFull />
                    <FaWifi />
                    <span>{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    <button
                        onClick={onExit}
                        style={{
                            background: 'rgba(255,255,255,0.1)',
                            border: 'none',
                            color: 'white',
                            padding: '4px 10px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            marginLeft: '10px',
                            transition: 'background 0.2s'
                        }}
                    >
                        Exit OS
                    </button>
                </div>
            </div>

            {/* Desktop Icons Area */}
            <div style={{
                position: 'relative',
                zIndex: 10,
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                height: 'calc(100% - 100px)', // Leave space for Dock
                alignContent: 'flex-start',
                pointerEvents: 'none' // Let clicks pass through to background if not on icon
            }}>
                <div style={{ pointerEvents: 'auto' }}>
                    <DesktopIcon
                        label="Projects"
                        icon={<FaFolder style={{ color: '#00f0ff' }} />}
                        onDoubleClick={() => openWindow('projects', 'My Projects', <Projects />)}
                    />
                    <DesktopIcon
                        label="About Me"
                        icon={<FaFolder style={{ color: '#7000ff' }} />}
                        onDoubleClick={() => openWindow('about', 'About Me', <About />)}
                    />
                    <DesktopIcon
                        label="Contact"
                        icon={<FaFolder style={{ color: '#ff0055' }} />}
                        onDoubleClick={() => openWindow('contact', 'Contact Info', <Contact />)}
                    />
                    <DesktopIcon
                        label="Browser"
                        icon={<FaGlobe style={{ color: '#3399ff' }} />}
                        onDoubleClick={() => openWindow('browser', 'Web Browser', <div style={{ padding: 20 }}>Browser Placeholder</div>)}
                    />
                </div>
            </div>

            {/* Windows Layer */}
            <AnimatePresence>
                {windows.map((w, index) => (
                    !w.isMinimized && (
                        <DesktopWindow
                            key={w.id}
                            {...w}
                            zIndex={activeId === w.id ? 100 : 10 + index}
                            onClose={() => closeWindow(w.id)}
                            onMinimize={() => toggleMinimize(w.id)}
                            onMaximize={() => toggleMaximize(w.id)}
                            onFocus={() => bringToFront(w.id)}
                        />
                    )
                ))}
            </AnimatePresence>

            {/* Dock */}
            <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                height: '80px',
                padding: '0 25px',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                zIndex: 9000
            }}>
                <DockItem
                    icon={<FaGithub color="#fff" />}
                    label="GitHub"
                    onClick={() => window.open('https://github.com', '_blank')}
                />
                <DockItem
                    icon={<FaLinkedin color="#0077b5" />}
                    label="LinkedIn"
                    onClick={() => window.open('https://linkedin.com', '_blank')}
                />
                <DockItem
                    icon={<FaEnvelope color="#ea4335" />}
                    label="Mail"
                    onClick={() => openWindow('contact', 'Contact Info', <Contact />)}
                    isOpen={windows.some(w => w.id === 'contact')}
                />

                {/* Separator */}
                <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.2)', margin: '0 5px' }} />

                {/* Minimized / Active Apps in Dock */}
                {windows.map(w => (
                    <DockItem
                        key={w.id}
                        icon={<FaFolder color="#ffcc00" />} /* Generic icon for now, could be specific */
                        label={w.title}
                        onClick={() => {
                            if (w.isMinimized) toggleMinimize(w.id);
                            bringToFront(w.id);
                        }}
                        isOpen={true} // Always show dot for active windows
                    />
                ))}
            </div>
        </div>
    );
};

export default DesktopOS;
