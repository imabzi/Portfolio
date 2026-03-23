'use client';

import { Mail, Linkedin, Instagram } from 'lucide-react';
import type { ThemeMode } from '@/lib/types';
import type { Copy } from '@/lib/data';

export function Footer({ copy, theme }: { copy: Copy; theme: ThemeMode }) {
  return (
    <footer className={`py-12 px-6 border-t ${theme === 'dark' ? 'border-white/10' : 'border-ink/5'}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-6">
          <a href="mailto:ayub.banaizade@gmail.com" className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors duration-250 ease-out">
            <Mail className="w-4 h-4" /> ayub.banaizade@gmail.com
          </a>
          <span className="text-sm opacity-20 hidden md:block">|</span>
          <a href="tel:09019683969" className="text-sm font-medium hover:text-accent transition-colors duration-250 ease-out">
            0901 968 3969
          </a>
        </div>

        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors duration-250 ease-out">
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a href="#" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors duration-250 ease-out">
            <Instagram className="w-4 h-4" /> Instagram
          </a>
        </div>

        <p className="text-[10px] opacity-40 uppercase tracking-widest">{copy.sections.madeIn}</p>
      </div>
    </footer>
  );
}
