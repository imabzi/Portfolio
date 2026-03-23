'use client';

import { motion } from 'motion/react';
import { Smile } from 'lucide-react';
import type { ThemeMode } from '@/lib/types';
import type { Copy } from '@/lib/data';
import { TESTIMONIALS } from '@/lib/data';

export function Testimonials({ copy, theme }: { copy: Copy; theme: ThemeMode }) {
  return (
    <section className={`pt-[40px] md:pt-[64px] xl:pt-[80px] pb-18 md:pb-20 px-5 md:px-8 xl:px-12 overflow-hidden ${theme === 'dark' ? 'bg-[#111a28] text-white' : 'bg-ink text-white'}`}>
      <div className="w-full max-w-[92%] md:max-w-[90%] xl:max-w-[1200px] mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${theme === 'dark' ? 'bg-white/10' : 'bg-white/10'}`}>
            <Smile className="w-5 h-5 opacity-40" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight">{copy.sections.testimonials}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 rounded-[40px] border transition-all duration-300 group hover:scale-[1.02] hover:rotate-2 ${theme === 'dark' ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
            >
              <p className={`text-sm mb-10 leading-relaxed italic font-medium ${theme === 'dark' ? 'text-white/70' : 'text-white/70'}`}>&quot;{t.quote}&quot;</p>
              <div>
                <h4 className="font-bold text-base mb-1">{t.name}</h4>
                <p className="text-[10px] opacity-40 uppercase tracking-[0.2em] font-bold">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
