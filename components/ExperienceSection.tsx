'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';
import type { ThemeMode } from '@/lib/types';
import type { Copy } from '@/lib/data';
import { EXPERIENCES } from '@/lib/data';

export function ExperienceSection({ copy, theme }: { copy: Copy; theme: ThemeMode }) {
  return (
    <section className={`pt-[40px] md:pt-[64px] xl:pt-[80px] pb-18 md:pb-20 px-5 md:px-8 xl:px-12 ${theme === 'dark' ? 'bg-transparent' : 'bg-white'}`}>
      <div className="w-full max-w-[92%] md:max-w-[90%] xl:max-w-[1200px] mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${theme === 'dark' ? 'bg-white/10' : 'bg-ink/5'}`}>
            <Briefcase className="w-5 h-5 opacity-40" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight">{copy.sections.experience}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-10 rounded-[40px] border transition-all duration-300 group hover:scale-[1.02] hover:rotate-2 ${theme === 'dark' ? 'bg-white/5 border-white/10 hover:border-accent/20' : 'bg-bg border-ink/5 hover:border-accent/20'}`}
            >
              <div className={`w-14 h-14 mb-8 flex items-center justify-center rounded-2xl shadow-sm border relative ${theme === 'dark' ? 'bg-[#111a28] border-white/10' : 'bg-white border-ink/5'}`}>
                <Image src={exp.logo} alt={exp.company} fill className="object-contain opacity-60 group-hover:opacity-100 transition-opacity p-2" referrerPolicy="no-referrer" />
              </div>
              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-2 block">{exp.period}</span>
                <h3 className="text-xl font-bold text-ink mb-1">{exp.role}</h3>
                <p className="text-sm font-medium text-ink/40">@ {exp.company}</p>
              </div>
              <p className="text-sm text-ink/60 leading-relaxed font-medium">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
