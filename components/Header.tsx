"use client";

import { Menu, Moon, Sun, Languages, Download } from "lucide-react";
import type { ThemeMode } from "@/lib/types";
import type { Copy } from "@/lib/data";
import { cn, downloadPublicFile } from "@/lib/utils";

export function Header({
  isSidebarOpen,
  theme,
  onToggleTheme,
  onToggleLanguage,
  onOpenSidebar,
  copy,
}: {
  isSidebarOpen: boolean;
  theme: ThemeMode;
  onToggleTheme: () => void;
  onToggleLanguage: () => void;
  onOpenSidebar: () => void;
  copy: Copy;
}) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 right-0 z-50 hidden px-8 py-6 transition-[left] duration-300 md:flex md:items-center md:justify-between  ${isSidebarOpen ? "left-[320px]" : "left-0"}`}
    >
      <nav className="flex items-center gap-6 text-[13px] font-bold uppercase tracking-[0.15em] text-ink/60">
        {!isSidebarOpen && (
          <button
            onClick={onOpenSidebar}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-250 ease-out hover:-translate-y-0.5 ${theme === "dark" ? "border-white/10 bg-white/5 text-white/80" : "border-ink/10 bg-white/70 text-ink/80"}`}
            aria-label="Open sidebar"
          >
            <Menu className="h-4 w-4" />
          </button>
        )}
        {/* <button onClick={() => scrollToSection('home')} className="hover:text-ink transition-colors uppercase">{copy.nav.home}</button>
        <button onClick={() => scrollToSection('about')} className="hover:text-ink transition-colors uppercase">{copy.nav.about}</button>
        <button onClick={() => scrollToSection('portfolio')} className="hover:text-ink transition-colors uppercase">{copy.nav.portfolio}</button>
        <button onClick={() => scrollToSection('resume')} className="hover:text-ink transition-colors uppercase">{copy.nav.resume}</button> */}
      </nav>
      <div className="flex items-center gap-3">
        <button
          onClick={() => downloadPublicFile("/CV.pdf")}
          className={cn(
            `cursor-pointer flex-1 rounded-xl px-5 py-3 text-[11px] font-black uppercase tracking-[0.12em] transition-all duration-250 ease-out hover:rotate-[2deg] hover:scale-105`,
            "transition-opacity duration-300 ease-in opacity-85 hover:opacity-100 bg-[#f38c42] text-white shadow-[0_0_20px_3px_rgba(243,140,66,0.2)] hover:shadow-[0_0_30px_6px_rgba(243,140,66,0.5)] transition-shadow",
          )}
        >
          <span className="inline-flex items-center gap-2 whitespace-nowrap">
            {copy.actions.resume}
            <Download className="h-4 w-4" />
          </span>
        </button>
        <button
          onClick={onToggleTheme}
          className={`cursor-pointer inline-flex h-11 w-11 items-center justify-center rounded-2xl border bg-transparent transition-all duration-250 ease-out hover:-translate-y-0.5 ${theme === "dark" ? "border-white/10 text-white/80 hover:border-white/20 hover:text-white" : "border-ink/10 text-ink/75 hover:border-ink/20 hover:text-ink"}`}
          aria-label={copy.actions.theme}
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </button>
        <button
          onClick={onToggleLanguage}
          className={`cursor-pointer inline-flex h-11 w-11 items-center justify-center rounded-2xl border bg-transparent transition-all duration-250 ease-out hover:-translate-y-0.5 ${theme === "dark" ? "border-white/10 text-white/80 hover:border-white/20 hover:text-white" : "border-ink/10 text-ink/75 hover:border-ink/20 hover:text-ink"}`}
          aria-label={copy.actions.language}
        >
          <Languages className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}
