'use client';

import Image from 'next/image';
import { Download } from 'lucide-react';
import type { ThemeMode, Language } from '@/lib/types';
import type { Copy } from '@/lib/data';

export function AboutSection({
  copy,
  language,
  theme,
  onOpenContact,
}: {
  copy: Copy;
  language: Language;
  theme: ThemeMode;
  onOpenContact: () => void;
}) {
  return (
    <section id="about" className="pt-[40px] md:pt-[64px] xl:pt-[80px] pb-18 md:pb-20 px-5 md:px-8 xl:px-12 w-full max-w-[92%] md:max-w-[90%] xl:max-w-[1200px] mx-auto">
      <div className="overflow-visible rounded-[34px] border border-[#666666] bg-transparent shadow-[0_22px_70px_rgba(15,23,42,0.09)]">
        <div className="grid items-end gap-4 md:grid-cols-[35%_62.5%] md:gap-6">
          <div className="order-2 relative flex justify-center md:order-1 md:justify-start px-[10%]">
            <div className="relative w-full max-w-[360px] md:max-w-none aspect-square">
              <Image
                src="/me.webp"
                alt="Ayub Banaizade"
                fill
                className="absolute! inset-auto! bottom-0! z-10 h-auto!"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className={`order-1 flex flex-col items-start md:order-2 py-10 md:px-2 xl:px-4 ${language === 'fa' ? 'text-right md:items-end' : 'text-left'}`}>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/40">{copy.about.eyebrow}</p>
            <h2 className="text-[30px] font-semibold tracking-[-0.05em] text-ink md:text-[42px] xl:text-[50px]">
              {copy.about.title}
            </h2>
            <p className="mt-5 text-[15px] leading-7 text-ink/62 md:text-[16px]">
              {copy.about.description}
            </p>
            <div className={`mt-8 flex flex-col gap-3 sm:flex-row ${language === 'fa' ? 'sm:flex-row-reverse' : ''}`}>
              <button
                onClick={onOpenContact}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-2xl px-6 py-3.5 text-sm font-semibold shadow-[0_14px_30px_rgba(15,23,42,0.16)] transition-all duration-250 ease-out hover:-translate-y-0.5 ${theme === 'dark' ? 'bg-white text-[#0d1522] hover:bg-white/92' : 'bg-ink text-white hover:bg-ink/92'}`}
              >
                {copy.actions.letsTalk}
              </button>
              <a
                href="#resume"
                className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl border px-6 py-3.5 text-sm font-semibold transition-all duration-250 ease-out hover:-translate-y-0.5 ${theme === 'dark' ? 'border-white/16 text-white' : 'border-ink/15 text-ink'}`}
              >
                {copy.actions.resume}
                <Download className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
