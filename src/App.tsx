/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { BespokeBuilds } from './pages/BespokeBuilds';
import { Projects } from './pages/Projects';
import { CurrentStock } from './pages/CurrentStock';
import { About } from './pages/About';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence 
      mode="wait"
      onExitComplete={() => {
        window.scrollTo(0, 0);
        if ((window as any).lenis) {
          (window as any).lenis.scrollTo(0, { immediate: true });
        }
      }}
    >
      <motion.div 
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/bespoke-builds" element={<BespokeBuilds />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/current-stock" element={<CurrentStock />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Expose lenis globally so we can reset it on route change
    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
