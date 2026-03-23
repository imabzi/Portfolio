'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Home, User, Briefcase, FileText } from 'lucide-react';
import type { Section, ThemeMode } from '@/lib/types';
import type { Copy } from '@/lib/data';

export function Dock({
  activeSection,
  isSidebarOpen,
  copy,
  theme,
}: {
  activeSection: Section;
  isSidebarOpen: boolean;
  copy: Copy;
  theme: ThemeMode;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showDock = isVisible || isHovered;
  const activeDockClass = theme === 'dark' ? 'bg-white text-[#0d1522]' : 'bg-ink text-white';

  const items = [
    { id: 'home', icon: Home, label: copy.nav.home },
    { id: 'about', icon: User, label: copy.nav.about },
    { id: 'portfolio', icon: Briefcase, label: copy.nav.portfolio },
    { id: 'resume', icon: FileText, label: copy.nav.resume },
  ] as const;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: showDock ? 0 : 100,
        opacity: showDock ? 1 : 0,
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed bottom-8 left-1/2 z-50 hidden -translate-x-1/2 md:block ${isSidebarOpen ? 'md:left-[calc(50%+160px)]' : 'md:left-1/2'}`}
    >
      <div className={`px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-md border shadow-lg ${theme === 'dark' ? 'bg-white/10 border-white/10' : 'bg-white/70 border-white/20'}`}>
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 relative group ${isActive ? activeDockClass : (theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-black/5')}`}
            >
              <Icon className={`w-5 h-5 ${!isActive ? (theme === 'dark' ? 'text-white/60 group-hover:text-white' : 'text-ink/60 group-hover:text-ink') : ''}`} />
              <span className={`absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap uppercase tracking-widest font-bold ${theme === 'dark' ? 'bg-white text-[#0b1320]' : 'bg-ink text-white'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
