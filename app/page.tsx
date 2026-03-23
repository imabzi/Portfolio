'use client';

import { useState, useEffect } from 'react';
import type { Section, ThemeMode, Language } from '@/lib/types';
import { UI_COPY } from '@/lib/data';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { ResumeSection } from '@/components/ResumeSection';
import { Testimonials } from '@/components/Testimonials';
import { ExperienceSection } from '@/components/ExperienceSection';
import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';
import { Dock } from '@/components/Dock';
import { ContactModal } from '@/components/ContactModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [language, setLanguage] = useState<Language>('en');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const copy = UI_COPY[language];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'resume'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section as Section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === 'fa' ? 'fa' : 'en';
    document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
    document.body.classList.toggle('dark', theme === 'dark');
    document.body.classList.toggle('light', theme === 'light');
  }, [language, theme]);

  return (
    <div className={`min-h-screen selection:bg-accent/30 flex bg-bg text-ink transition-colors duration-300 ${theme === 'dark' ? 'dark' : 'light'}`}>
      <Sidebar
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen((prev) => !prev)}
        theme={theme}
        language={language}
        copy={copy}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <div className={`flex-1 transition-[margin] duration-300 ${isSidebarOpen ? 'md:ml-[320px]' : 'md:ml-0'}`}>
        <Header
          isSidebarOpen={isSidebarOpen}
          theme={theme}
          onToggleTheme={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
          onToggleLanguage={() => setLanguage((prev) => (prev === 'en' ? 'fa' : 'en'))}
          onOpenSidebar={() => setIsSidebarOpen(true)}
          copy={copy}
        />

        <main className="min-h-screen">
          <Hero />
          <AboutSection copy={copy} language={language} theme={theme} onOpenContact={() => setIsContactOpen(true)} />
          <PortfolioSection copy={copy} theme={theme} />
          <ResumeSection copy={copy} theme={theme} />
          <Testimonials copy={copy} theme={theme} />
          <ExperienceSection copy={copy} theme={theme} />
        </main>

        <Footer copy={copy} theme={theme} />
      </div>

      <Dock activeSection={activeSection} isSidebarOpen={isSidebarOpen} copy={copy} theme={theme} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} theme={theme} />
    </div>
  );
}
