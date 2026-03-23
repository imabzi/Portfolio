"use client";

import Image from "next/image";
import {
  X,
  Menu,
  MapPin,
  Download,
  Send,
  Instagram,
  Linkedin as LinkedinIcon,
  Phone,
} from "lucide-react";
import type { ThemeMode, Language } from "@/lib/types";
import type { Copy } from "@/lib/data";
import { SIDEBAR_SKILLS } from "@/lib/data";

const SOCIAL_LINKS = [
  { label: "Telegram", href: "https://t.me/imabz", icon: Send },
  { label: "WhatsApp", href: "https://wa.me/989019683969", iconLabel: "WA" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/imabzi/",
    icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/imabz/",
    icon: LinkedinIcon,
  },
  { label: "X", href: "https://x.com/imabzayub", iconLabel: "X" },
  { label: "Phone", href: "tel:09019683969", icon: Phone },
];

export function Sidebar({
  isOpen,
  onToggle,
  theme,
  language,
  copy,
  onOpenContact,
}: {
  isOpen: boolean;
  onToggle: () => void;
  theme: ThemeMode;
  language: Language;
  copy: Copy;
  onOpenContact: () => void;
}) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        onClick={onToggle}
        className={`fixed inset-0 z-30 bg-black/20 backdrop-blur-[2px] transition-opacity duration-300 md:hidden ${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      />

      {!isOpen && (
        <button
          onClick={onToggle}
          className={`fixed left-5 top-5 z-[70] inline-flex h-12 w-12 items-center justify-center rounded-2xl border text-ink shadow-lg backdrop-blur-md transition-all duration-250 ease-out hover:scale-105 md:hidden ${theme === "dark" ? "border-white/10 bg-[#0d1522]/90 text-white shadow-black/30" : "border-ink/10 bg-white/90 shadow-ink/10"}`}
          aria-label="Open sidebar"
        >
          <Menu className="h-5 w-5" />
        </button>
      )}

      <aside
        className={`fixed left-0 top-0 z-40 flex h-screen w-[320px] max-w-[86vw] flex-col overflow-y-auto border-r p-6 transition-transform duration-300 md:p-8 ${theme === "dark" ? "border-white/10 bg-[#0d1522]" : "border-ink/5 bg-white"} ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          onClick={onToggle}
          className={`absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-250 ease-out hover:scale-105 ${theme === "dark" ? "border-white/10 bg-white/5 text-white/85" : "border-ink/10 bg-ink/0 text-ink"}`}
          aria-label="Close sidebar"
        >
          <X className="h-5 w-5" />
        </button>
        <div
          className={`flex flex-col ${language === "fa" ? "items-end text-right" : "items-start text-left"}`}
        >
          <div className="relative mb-4">
            <div
              className={`w-[96px] overflow-hidden rounded-[32px] border md:w-[120px] md:rounded-[40px] relative aspect-square ${theme === "dark" ? "border-white/16" : "border-[#b8b8b8]"}`}
            >
              <Image
                src="/Profile(SideBar).jpg"
                alt="Ayub Banaizade"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <h1 className="mb-1 text-3xl font-black tracking-tight">
            Ayub Banaizade
          </h1>
          <h2 className="mb-1 text-2xl font-medium tracking-tight">
            Creative Designer
          </h2>
          <hr className="w-full mb-2 border-gray-300" />
          <p
            className={`flex items-center gap-1 text-sm opacity-50 ${language === "fa" ? "flex-row-reverse" : ""}`}
          >
            Open To Work
          </p>
          <p
            className={`flex items-center gap-1 text-sm opacity-50 ${language === "fa" ? "flex-row-reverse" : ""}`}
          >
            Remote/On Site
          </p>
          <p className="my-2 text-[13px] font-bold leading-relaxed text-ink/60">
            {copy.sidebar.role}
          </p>
          
          <div className="mb-3 w-full pt-2">
            <h3 className="text-[calc(var(--text-xl)*1.1)] mb-2 font-medium tracking-tight">
              Skills
            </h3>
            <div className="flex flex-wrap gap-y-2">
              {SIDEBAR_SKILLS.map((skill) => (
                <div
                  key={skill.name}
                  title={skill.name}
                  className="w-1/2 flex items-center"
                >
                  {<skill.icon className="h-7 w-7 mr-1" />}
                  <span className="text-sm text-ink/60">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`mb-3 mt-2 flex w-full flex-col gap-3 md:flex-row ${language === "fa" ? "md:flex-row-reverse" : ""}`}
          >
            <button
              onClick={onOpenContact}
              className={`flex-1 cursor-pointer whitespace-nowrap rounded-xl px-5 py-3 text-center text-[11px] font-black uppercase tracking-[0.12em] shadow-lg transition-all duration-250 ease-out hover:scale-105 ${theme === "dark" ? "bg-white text-[#0d1522] shadow-black/20" : "bg-ink text-white shadow-ink/20"}`}
            >
              {copy.actions.letsTalk}
            </button>
          </div>

          <div className="w-full border-t border-ink/5 pt-3">
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={item.label}
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-250 ease-out hover:-translate-y-0.5 ${theme === "dark" ? "border-white/10 text-white/70 hover:border-white/20 hover:text-white" : "border-ink/10 text-ink/60 hover:border-ink/20 hover:text-ink"}`}
                >
                  {"icon" in item && item.icon ? (
                    <item.icon className="h-5 w-5" />
                  ) : (
                    <span className="text-[11px] font-black uppercase">
                      {item.iconLabel}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
