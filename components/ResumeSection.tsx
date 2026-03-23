"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Briefcase,
  Plus,
  Minus,
  Award,
  ArrowUpRight,
  GraduationCap,
} from "lucide-react";
import type { ThemeMode } from "@/lib/types";
import type { Copy } from "@/lib/data";
import {
  RESUME_ITEMS,
  ADDITIONAL_RESUME_ITEMS,
  PEZHVAK_ROLES,
  SKILLS,
  INVOLVEMENTS,
  ACHIEVEMENTS,
  EDUCATION_SKILLS,
  SIDEBAR_SKILLS,
} from "@/lib/data";

function ResumeItem({
  company,
  role,
  period,
  location,
  description,
  skills,
  media,
  logo,
  projects,
  theme,
  type,
}: {
  company: string;
  role: string;
  period: string;
  location: string;
  description?: string;
  skills?: string[];
  media?: string[];
  logo?: string;
  projects?: string[];
  theme: ThemeMode;
  type?: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative group py-8 first:pt-0 last:pb-0">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4 flex-1">
          <div
            className={`w-10 h-10 rounded-lg border flex items-center justify-center p-2 shadow-sm flex-shrink-0 mt-1 relative ${theme === "dark" ? "bg-white/10 border-white/10" : "bg-white border-ink/5"}`}
          >
            {logo ? (
              <Image
                src={logo}
                alt={company}
                fill
                className="object-contain p-1"
                referrerPolicy="no-referrer"
              />
            ) : (
              <Briefcase
                className={`w-5 h-5 ${theme === "dark" ? "text-white/60" : "text-ink/40"}`}
              />
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-ink">{company}</h3>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`p-1 rounded-full transition-colors duration-250 ease-out ${theme === "dark" ? "hover:bg-white/10" : "hover:bg-ink/5"}`}
              >
                {isExpanded ? (
                  <Minus
                    className={`w-4 h-4 ${theme === "dark" ? "text-white/60" : "text-ink/40"}`}
                  />
                ) : (
                  <Plus
                    className={`w-4 h-4 ${theme === "dark" ? "text-white/60" : "text-ink/40"}`}
                  />
                )}
              </button>
            </div>
            <h3 className="text-sm font-bold text-ink">
              {role}
              {type && (
                <span className="text-[11px] text-ink/50 font-medium uppercase tracking-wider mx-2">
                  {type}
                </span>
              )}
            </h3>
            <p className="text-[11px] text-ink/50 font-medium uppercase tracking-wider my-1">
              {period} <span className="mx-2 opacity-30">|</span> {location}
            </p>

            {description && (
              <div
                className={`mt-4 text-sm text-ink/60 leading-relaxed whitespace-pre-line ${isExpanded ? "mb-6" : "line-clamp-2 mb-2"}`}
              >
                {description}
              </div>
            )}

            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="space-y-6"
              >
                {projects && (
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-ink/40">
                      Project List:
                    </p>
                    <ul className="text-xs text-ink/60 list-disc list-inside space-y-1">
                      {projects.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {skills && (
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-ink/5 rounded text-[10px] font-bold uppercase tracking-widest text-ink/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {media && (
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide mt-4">
                {media.map((img, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 rounded-xl overflow-hidden bg-ink/5 border border-ink/5 w-40 aspect-[4/3] relative"
                  >
                    <Image
                      src={img}
                      alt="Work sample"
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ResumeSection({
  copy,
  theme,
}: {
  copy: Copy;
  theme: ThemeMode;
}) {
  return (
    <section
      id="resume"
      className="pt-[40px] md:pt-[64px] xl:pt-[80px] pb-18 md:pb-20 px-5 md:px-8 xl:px-12 w-full max-w-[92%] md:max-w-[90%] xl:max-w-[1200px] mx-auto"
    >
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-6xl font-black tracking-tighter mb-4">
          {copy.sections.resume}
        </h2>
        <div className="h-[2px] w-[64px] bg-ink/10 rounded-full mb-3" />
        <p className="text-lg font-light text-ink/40 leading-relaxed mt-2">
          {copy.sections.resumeDescription}
        </p>
      </div>

      {/* Experience */}
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 mb-24">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-ink/30 pt-1">
          {copy.sections.experience}
        </h2>
        <div className="space-y-12">
          {RESUME_ITEMS.map((item) => (
            <ResumeItem key={item.company} {...item} theme={theme} />
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 mb-24">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-ink/30 pt-1">
          Skills
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
          {SIDEBAR_SKILLS.map((tool) => (
            <div
              key={tool.name}
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div
                className={`w-14 h-14 p-2.5 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300 grayscale group-hover:grayscale-0 relative ${theme === "dark" ? "bg-[#111a28] border border-white/10" : "bg-white border border-ink/5"}`}
              >
                <tool.icon className="w-full h-full" />
              </div>
              <span className="text-[9px] font-bold text-ink/30 uppercase tracking-[0.15em] text-center group-hover:text-ink/60 transition-colors">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 mb-24">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-ink/30 pt-1">
          Education
        </h2>

        <div className="relative group">
          <div className="flex flex-col items-start justify-between gap-6">
            <div className="flex items-start gap-4 flex-1">
              <div
                className={`w-10 h-10 rounded-lg border flex items-center justify-center p-2 shadow-sm flex-shrink-0 mt-1 relative ${theme === "dark" ? "bg-white/10 border-white/10" : "bg-white border-ink/5"}`}
              >
                <GraduationCap
                  className={`w-5 h-5 ${theme === "dark" ? "text-white/60" : "text-ink/40"}`}
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm font-bold text-ink">
                    Islamic Azad University Of Abadan
                  </h3>
                </div>
                <p className="text-sm text-ink/60 mb-4">
                  Bachelor&apos;s Degree in Illustration{" "}
                  <span className="mx-2 opacity-30">|</span> Grade: 17{" "}
                  <span className="mx-2 opacity-30">|</span> Jan 2015 – Dec 2017
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 flex-1">
              <div
                className={`w-10 h-10 rounded-lg border flex items-center justify-center p-2 shadow-sm flex-shrink-0 mt-1 relative ${theme === "dark" ? "bg-white/10 border-white/10" : "bg-white border-ink/5"}`}
              >
                <GraduationCap
                  className={`w-5 h-5 ${theme === "dark" ? "text-white/60" : "text-ink/40"}`}
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm font-bold text-ink">
                    Dorud State College
                  </h3>
                </div>
                <p className="text-sm text-ink/60 mb-4">
                  Associate Degree in Illustration
                  <span className="mx-2 opacity-30">|</span> Grade: 18{" "}
                  <span className="mx-2 opacity-30">|</span> Jan 2011 – Dec 2013
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 mb-24">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-ink/30 pt-1">
          Achievements
        </h2>
        <div className="space-y-8">
          {ACHIEVEMENTS.map((award, i) => (
            <div
              key={i}
              className="flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-accent/5 flex items-center justify-center">
                  <Award className="w-4 h-4 text-accent/40" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-ink group-hover:text-accent transition-colors">
                    {award.title}
                  </h3>
                  <award.description />
                </div>
              </div>
              <ArrowUpRight
                className={`w-4 h-4 transition-opacity ${theme === "dark" ? "text-white/40 group-hover:text-white/70" : "opacity-10 group-hover:opacity-40"}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
