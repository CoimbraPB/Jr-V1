import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import clsx from 'clsx';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [headerTheme, setHeaderTheme] = useState<'light' | 'dark'>('dark');
  const location = useLocation();
  const isHome = location.pathname === '/';

  const { scrollY } = useScroll();

  const [layout, setLayout] = useState({ distance: 800, initialY: 800 });

  useEffect(() => {
    const updateLayout = () => {
      const vh = window.innerHeight;
      const vw = window.innerWidth;
      
      const initialLogoHeight = vw / 18;
      const finalLogoHeight = (vw * 0.141398) / 18;
      
      // Start the logo exactly at the bottom of the hero section
      // Hero bottom padding is 40px (px-10 equivalent), Navbar top padding is 24px (py-6)
      const initialY = vh - 40 - 24 - initialLogoHeight;
      
      // Set distance so the logo finishes animating exactly when the hero leaves the screen
      const distance = vh - 40 - 24 - finalLogoHeight;
      
      setLayout({ distance, initialY });
    };
    
    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  useEffect(() => {
    const checkHeaderTheme = () => {
      if (location.pathname === '/bespoke-builds') {
        setHeaderTheme('dark');
        return;
      }

      const headerHeight = 50; // Check a point 50px from top
      const sections = document.querySelectorAll('section, footer');
      let currentSection: HTMLElement | null = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= headerHeight && rect.bottom >= headerHeight) {
          currentSection = section as HTMLElement;
        }
      });

      if (currentSection) {
        const isDark = 
          currentSection.classList.contains('bg-black') || 
          currentSection.getAttribute('data-section-dark') === 'true';
        setHeaderTheme(isDark ? 'dark' : 'light');
      } else {
        // Fallback for pages without sections or when scrolled past
        const isDarkPage = location.pathname === '/' || location.pathname === '/projects' || location.pathname === '/gallery';
        if (window.scrollY > 50) {
          setHeaderTheme('light');
        } else {
          setHeaderTheme(isDarkPage ? 'dark' : 'light');
        }
      }
    };

    window.addEventListener('scroll', checkHeaderTheme, { passive: true });
    checkHeaderTheme(); // initial check

    return () => window.removeEventListener('scroll', checkHeaderTheme);
  }, [location.pathname]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const logoWidth = useTransform(scrollY, [0, layout.distance], ['100%', '14.1398%'], { clamp: true });
  const logoY = useTransform(scrollY, [0, layout.distance], [`${layout.initialY}px`, '0px'], { clamp: true });

  return (
    <>
      <nav
        className={clsx(
          'fixed top-0 left-0 w-full z-50 transition-colors duration-300 px-10 py-6 flex items-center',
          isOpen 
            ? 'bg-transparent text-white' 
            : (headerTheme === 'light' 
                ? 'bg-white text-black' 
                : 'bg-transparent text-white')
        )}
      >
        <motion.div 
          style={{ 
            width: isHome ? logoWidth : '14.1398%', 
            y: isHome ? logoY : '0px',
            display: 'block'
          }} 
        >
          <Link to="/" className="block w-full">
            <svg width="100%" height="auto" viewBox="0 0 180 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="9" fill="currentColor" textLength="180" lengthAdjust="spacing" style={{ fontFamily: 'var(--font-racing)', fontSize: '11px' }}>JR MOTORCYCLES</text>
            </svg>
          </Link>
        </motion.div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="z-50 absolute right-10 p-2 hover:opacity-70 transition-opacity flex flex-col justify-center items-center space-y-[6px] w-10 h-10"
        >
          {isOpen ? (
            <X size={28} color="currentColor" />
          ) : (
            <>
              <span className="block w-8 h-[1px] bg-current" />
              <span className="block w-8 h-[1px] bg-current" />
            </>
          )}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] bg-black text-white flex flex-col"
          >
            {/* Menu Header */}
            <div className="flex justify-between items-center px-10 py-6">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="w-[14.1398%]"
              >
                <Link to="/" onClick={() => setIsOpen(false)} className="block w-full">
                  <svg width="100%" height="auto" viewBox="0 0 180 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="9" fill="currentColor" textLength="180" lengthAdjust="spacing" style={{ fontFamily: 'var(--font-racing)', fontSize: '11px' }}>JR MOTORCYCLES</text>
                  </svg>
                </Link>
              </motion.div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:opacity-70 transition-opacity flex justify-center items-center w-10 h-10"
              >
                <X size={28} color="currentColor" strokeWidth={1} />
              </button>
            </div>

            {/* Main Links */}
            <div className="flex-1 flex flex-col justify-center px-10 mt-12">
              <div className="flex flex-col w-full">
                {[
                  { name: 'Bespoke builds', path: '/bespoke-builds' },
                  { name: 'Projects', path: '/projects' },
                  { name: 'Current stock', path: '/current-stock' },
                  { name: 'About', path: '/about' },
                  { name: 'Contact', path: '/contact' }
                ].map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.05, duration: 0.5 }}
                    className="border-b border-white/10 last:border-b-0"
                  >
                    <Link 
                      to={link.path} 
                      onClick={() => setIsOpen(false)}
                      className="block py-4 font-display text-5xl md:text-6xl lg:text-[5.5rem] font-medium tracking-tighter text-white/50 hover:text-white transition-colors leading-none"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sub Links */}
            <div className="px-10 pb-12 flex flex-col md:flex-row justify-end gap-12 md:gap-32 mt-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-col gap-2"
              >
                <Link to="/restoration" onClick={() => setIsOpen(false)} className="text-xl font-display text-white/50 hover:text-white transition-colors">Restoration</Link>
                <Link to="/upgrades" onClick={() => setIsOpen(false)} className="text-xl font-display text-white/50 hover:text-white transition-colors">Upgrades</Link>
                <Link to="/gallery" onClick={() => setIsOpen(false)} className="text-xl font-display text-white/50 hover:text-white transition-colors">Gallery</Link>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-col gap-2"
              >
                <Link to="/faqs" onClick={() => setIsOpen(false)} className="text-xl font-display text-white/50 hover:text-white transition-colors">FAQs</Link>
                <Link to="/models" onClick={() => setIsOpen(false)} className="text-xl font-display text-white/50 hover:text-white transition-colors">Models</Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
