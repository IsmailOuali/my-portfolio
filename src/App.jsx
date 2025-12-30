import React, { useState } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import InteractiveBackground from './components/InteractiveBackground';
import DesktopOS from './components/DesktopMode/DesktopOS';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDesktop } from 'react-icons/fa';

function App() {
  const [isDesktopMode, setIsDesktopMode] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {isDesktopMode ? (
          <motion.div
            key="desktop"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}
          >
            <DesktopOS onExit={() => setIsDesktopMode(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="normal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <InteractiveBackground />
            <Layout>
              {/* Mode Switcher Button */}
              <div
                style={{
                  position: 'fixed',
                  bottom: '30px',
                  right: '30px',
                  zIndex: 1000,
                }}
              >
                <button
                  onClick={() => setIsDesktopMode(true)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#fff',
                    padding: '12px 20px',
                    borderRadius: '30px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: 'var(--font-main)',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  <FaDesktop /> Try Desktop OS
                </button>
              </div>

              <Hero />
              <Projects />
              <About />
              <Contact />
            </Layout>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App;
