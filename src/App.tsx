import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  User, 
  Briefcase, 
  FileText, 
  Mail, 
  Linkedin, 
  Instagram, 
  MessageCircle,
  ArrowRight,
  ExternalLink,
  Award,
  BookOpen,
  Layers,
  Sparkles,
  Zap,
  Star,
  Smile,
  Heart,
  MapPin,
  MessageSquare,
  Bookmark,
  Archive,
  Plus,
  Minus,
  ArrowUpRight,
  Linkedin as LinkedinIcon,
  Monitor,
  PenTool,
  Play,
  Layout,
  Download,
  Menu,
  X,
  Phone,
  Send,
  Twitter,
  Moon,
  Sun,
  Languages
} from 'lucide-react';
import { SplineDesign } from './components/ThreeScene';
import { PortfolioSection } from './components/PortfolioSection';

// --- Types ---
type Section = 'home' | 'about' | 'portfolio' | 'resume';
type ThemeMode = 'light' | 'dark';
type Language = 'en' | 'fa';
type Copy = (typeof UI_COPY)[Language];

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
}

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  logo: string;
}

const UI_COPY = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Me',
      portfolio: 'Portfolio',
      resume: 'Resume',
    },
    actions: {
      letsTalk: "Let's Talk",
      resume: 'Resume',
      theme: 'Theme',
      language: 'Language',
    },
    about: {
      eyebrow: 'About Me',
      title: 'Hi, I am Ayub.',
      description: 'I create brand, motion, and digital experiences with a calm visual language, precise detail, and a focus on making every touchpoint feel refined.',
    },
    sections: {
      portfolio: 'Portfolio',
      portfolioDescription: 'A curated selection of my recent design, branding, and motion projects.',
      resume: 'Resume',
      resumeDescription: 'I specialize in crafting visual identities, designing meaningful experiences, and producing high-impact motion and graphic content for brands and digital platforms.',
      testimonials: 'What others say!',
      experience: 'Recent Experience',
      madeIn: 'Made in Tehran',
    },
    sidebar: {
      location: 'Tehran - Iran',
      role: 'Visual Storyteller | Brand & Motion Graphics Specialist',
      experience: 'More Than 10 Years',
      experienceIncludes: 'Experience Includes:',
    },
  },
  fa: {
    nav: {
      home: 'خانه',
      about: 'درباره من',
      portfolio: 'نمونه کار',
      resume: 'رزومه',
    },
    actions: {
      letsTalk: 'گفتگو کنیم',
      resume: 'رزومه',
      theme: 'تم',
      language: 'زبان',
    },
    about: {
      eyebrow: 'درباره من',
      title: 'سلام، من ایوب هستم.',
      description: 'من تجربه‌های برند، موشن و دیجیتال را با زبانی بصری آرام، دقت بالا و توجه به جزئیات طراحی می‌کنم تا هر نقطه تماس حرفه‌ای و refined باشد.',
    },
    sections: {
      portfolio: 'نمونه کار',
      portfolioDescription: 'منتخبی از پروژه‌های اخیر من در طراحی، برندینگ و موشن.',
      resume: 'رزومه',
      resumeDescription: 'تمرکز من بر ساخت هویت بصری، تجربه‌های معنادار و محتوای گرافیکی و موشن اثرگذار برای برندها و پلتفرم‌های دیجیتال است.',
      testimonials: 'نظر دیگران',
      experience: 'تجربه‌های اخیر',
      madeIn: 'ساخته شده در تهران',
    },
    sidebar: {
      location: 'تهران - ایران',
      role: 'روایتگر بصری | متخصص برند و موشن گرافیک',
      experience: 'بیش از ۱۰ سال تجربه',
      experienceIncludes: 'حوزه‌های تجربه:',
    },
  },
} as const;

// --- Data ---
const PROJECTS: Project[] = [
  {
    id: 'dreamline',
    title: 'Dreamline',
    description: 'Immersive automotive pod designed to enhance mobility, comfort, and sensory experiences.',
    image: 'https://picsum.photos/seed/dreamline/800/600',
    tags: ['UX Design', 'Industrial Design'],
    year: 'Spring 2025'
  },
  {
    id: 'cheers',
    title: 'Cheers',
    description: 'Integrated payment system embodying tipping through transparent, playful, and interactive feedback.',
    image: 'https://picsum.photos/seed/cheers/800/600',
    tags: ['UX Design', 'Interaction Design'],
    year: 'Spring 2024'
  },
  {
    id: 'torus',
    title: 'Torus',
    description: 'AI powered wildfire detection system to provide early mobile fires or sparking lines to prevent disasters.',
    image: 'https://picsum.photos/seed/torus/800/600',
    tags: ['UX Design', 'Interaction Design'],
    year: 'Winter 2025'
  },
  {
    id: 'nest',
    title: 'Nest Thermostat Redesign',
    description: 'A modern take on the smart home interface focusing on accessibility and intuitive control.',
    image: 'https://picsum.photos/seed/nest/800/600',
    tags: ['UI Design', 'Product Design'],
    year: 'Winter 2024'
  }
];

const EXPERIENCES: Experience[] = [
  {
    company: 'Samanehaye Modiriat',
    role: 'Senior Graphic Designer',
    period: 'Aug 2024 - Present',
    description: 'Leading creative direction for enterprise management systems and establishing design systems.',
    logo: 'https://picsum.photos/seed/sm/100/100'
  },
  {
    company: 'Systan',
    role: 'Senior Graphic Designer',
    period: 'Dec 2024 - Present',
    description: 'Specializing in digital marketing media and brand storytelling for high-impact campaigns.',
    logo: 'https://picsum.photos/seed/systan/100/100'
  },
  {
    company: 'Zibax Beauty',
    role: 'Graphic Manager',
    period: 'Mar 2023 - Apr 2024',
    description: 'Managed creative department, oversaw photography sessions and brand positioning.',
    logo: 'https://picsum.photos/seed/zibax/100/100'
  }
];

// --- Components ---

const PortfolioPopup = ({ project, isOpen, onClose }: { project: any, isOpen: boolean, onClose: () => void }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!isOpen) return null;

  const content = {
    'UI & UX': {
      title: 'HamrahYar Desktop – App',
      description: 'طراحی UI برای همراه یار',
      buttonText: 'See Figma',
      images: ['https://picsum.photos/seed/ui1/800/600', 'https://picsum.photos/seed/ui2/800/600', 'https://picsum.photos/seed/ui3/800/600']
    },
    'Branding': {
      title: 'Branding Projects',
      description: 'Selected identity and visual system designs.',
      buttonText: 'See Figma',
      images: ['https://picsum.photos/seed/brand1/800/600', 'https://picsum.photos/seed/brand2/800/600']
    },
    'Videos': {
      title: 'Video & Motion Projects',
      description: 'Selected edits, animations, and motion compositions.',
      buttonText: 'See Figma',
      images: ['https://picsum.photos/seed/video1/800/600', 'https://picsum.photos/seed/video2/800/600']
    }
  }[project.title as 'UI & UX' | 'Branding' | 'Videos'];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
    >
      <div 
        className="absolute inset-0 bg-black/55 backdrop-blur-[12px]" 
        onClick={onClose}
      />
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative w-full max-w-[92%] md:max-w-[85%] xl:max-w-[70%] bg-white rounded-[24px] p-6 md:p-8 xl:p-12 max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-ink/5 transition-all duration-250 ease-out hover:rotate-90 hover:scale-110"
        >
          <Plus className="w-7 h-7 rotate-45" />
        </button>

        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-ink mb-4">{content?.title}</h2>
            <p className="text-lg text-ink/60 font-medium">{content?.description}</p>
          </div>

          <div className="border-t border-ink/5 pt-8">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-ink hover:text-accent transition-colors duration-250 ease-out"
            >
              <span className="w-8 h-8 rounded-full bg-ink/5 flex items-center justify-center">
                {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
              {isExpanded ? 'Hide Designs' : 'See Designs'}
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-8">
                    {content?.images.map((img, i) => (
                      <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 border border-ink/5">
                        <img src={img} alt="Design sample" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="pt-4">
            <button className="bg-ink text-white px-10 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest hover:scale-[1.03] hover:rotate-[2deg] transition-all duration-250 ease-out shadow-lg shadow-ink/10">
              {content?.buttonText}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Header = ({
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
}) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 right-0 z-50 hidden border-b px-8 py-6 backdrop-blur-md transition-[left] duration-300 md:flex md:items-center md:justify-between ${theme === 'dark' ? 'border-white/10 bg-[#0d1522]/78' : 'border-ink/5 bg-white/80'} ${isSidebarOpen ? 'left-[320px]' : 'left-0'}`}>
      <nav className="flex items-center gap-6 text-[13px] font-bold uppercase tracking-[0.15em] text-ink/60">
        {!isSidebarOpen && (
          <button
            onClick={onOpenSidebar}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-250 ease-out hover:-translate-y-0.5 ${theme === 'dark' ? 'border-white/10 bg-white/5 text-white/80' : 'border-ink/10 bg-white/70 text-ink/80'}`}
            aria-label="Open sidebar"
          >
            <Menu className="h-4 w-4" />
          </button>
        )}
        <button onClick={() => scrollToSection('home')} className="hover:text-ink transition-colors uppercase">{copy.nav.home}</button>
        <button onClick={() => scrollToSection('about')} className="hover:text-ink transition-colors uppercase">{copy.nav.about}</button>
        <button onClick={() => scrollToSection('portfolio')} className="hover:text-ink transition-colors uppercase">{copy.nav.portfolio}</button>
        <button onClick={() => scrollToSection('resume')} className="hover:text-ink transition-colors uppercase">{copy.nav.resume}</button>
      </nav>
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleTheme}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border bg-transparent transition-all duration-250 ease-out hover:-translate-y-0.5 ${theme === 'dark' ? 'border-white/10 text-white/80 hover:border-white/20 hover:text-white' : 'border-ink/10 text-ink/75 hover:border-ink/20 hover:text-ink'}`}
          aria-label={copy.actions.theme}
        >
          {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
        <button
          onClick={onToggleLanguage}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border bg-transparent transition-all duration-250 ease-out hover:-translate-y-0.5 ${theme === 'dark' ? 'border-white/10 text-white/80 hover:border-white/20 hover:text-white' : 'border-ink/10 text-ink/75 hover:border-ink/20 hover:text-ink'}`}
          aria-label={copy.actions.language}
        >
          <Languages className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
};

const Hero = () => (
  <section id="home" className="relative hidden min-h-screen flex-col items-center justify-center overflow-hidden md:flex">
    <SplineDesign />

    {/* <motion.div 
      whileHover={{ rotate: -12, scale: 1.08 }}
      animate={{ y: [0, 10, 0], x: [0, -6, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      className="absolute top-[55%] right-[28%] w-12 h-12 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-ink/5 cursor-pointer z-20 opacity-80"
    >
      <Zap className="w-[18px] md:w-[24px] h-[18px] md:h-[24px] text-[#FFCC00]" />
    </motion.div>

    <motion.div 
      whileHover={{ rotate: 15, scale: 1.05 }}
      animate={{ x: [0, 6, 0], y: [0, -4, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      className="absolute top-[40%] right-[22%] w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center border border-ink/5 cursor-pointer z-20 opacity-80"
    >
      <PenTool className="w-[18px] md:w-[24px] h-[18px] md:h-[24px] text-ink/40" />
    </motion.div>

    <motion.div 
      whileHover={{ y: -4, scale: 1.03, rotate: -10 }}
      animate={{ x: [0, -10, 0], y: [0, 6, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      className="absolute top-[60%] left-[32%] w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center border border-ink/5 cursor-pointer z-20 opacity-80"
    >
      <Layout className="w-[18px] md:w-[24px] h-[18px] md:h-[24px] text-ink/40" />
    </motion.div>

    <motion.div 
      whileHover={{ y: -6, rotate: 12, scale: 1.15 }}
      animate={{ y: [0, -5, 0], rotate: [0, 5, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      className="absolute top-[48%] left-[24%] w-10 h-10 bg-white rounded-xl shadow-md border border-ink/5 flex items-center justify-center font-black text-ink/40 text-base cursor-pointer z-20 opacity-80"
    >
      <span className="text-[18px] md:text-[24px]">⌘</span>
    </motion.div>

    <motion.div 
      whileHover={{ rotate: 180, scale: 1.3 }}
      animate={{ rotate: [0, 360], scale: [1, 1.15, 1] }}
      transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 5, repeat: Infinity } }}
      className="absolute top-[32%] right-[35%] opacity-80 cursor-pointer z-20"
    >
      <Star className="w-[18px] md:w-[24px] h-[18px] md:h-[24px] text-ink" fill="currentColor" />
    </motion.div>

    <motion.div 
      whileHover={{ scale: 1.5, rotate: -45 }}
      animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
      transition={{ duration: 3, repeat: Infinity, delay: 1.2 }}
      className="absolute top-[42%] left-[42%] opacity-80 cursor-pointer z-20"
    >
      <Star className="w-[18px] md:w-[24px] h-[18px] md:h-[24px] text-ink" fill="currentColor" />
    </motion.div>

    
    <motion.div 
      animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.4, 0.1] }}
      transition={{ duration: 2.5, repeat: Infinity }}
      className="absolute top-[46%] left-[48%] w-2 h-2 bg-accent rounded-full"
    />
    <motion.div 
      animate={{ scale: [1, 1.6, 1], opacity: [0.1, 0.5, 0.1] }}
      transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
      className="absolute top-[58%] right-[40%] w-3 h-3 bg-[#007AFF] rounded-full"
    />
    <motion.div 
      animate={{ scale: [1, 1.4, 1], opacity: [0.05, 0.2, 0.05] }}
      transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      className="absolute top-[38%] right-[45%] w-2 h-2 bg-ink rounded-full"
    />

    <div className="w-full max-w-[92%] md:max-w-[90%] xl:max-w-[1200px] text-center relative z-10">
      <motion.h1 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="text-[36px] md:text-[48px] xl:text-[65px] font-black tracking-tighter text-ink leading-[1.2] md:leading-[1.5] cursor-default select-none"
      >
        Creative energy<br />
        in <motion.span 
          animate={{ 
            fontStyle: ['normal', 'italic', 'normal'],
            fontWeight: [900, 800, 900]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          whileHover={{ color: '#007AFF', scale: 1.02 }}
          className="inline-block transition-all duration-250 ease-out"
        >
          motion
        </motion.span>
      </motion.h1>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-16 flex justify-center gap-6"
      >
        <div className="w-3 h-3 rounded-full bg-accent animate-bounce" />
        <div className="w-3 h-3 rounded-full bg-ink/10" />
        <div className="w-3 h-3 rounded-full bg-ink/10" />
      </motion.div>
    </div> */}
  </section>
);

const ProjectGrid = ({ copy }: { copy: Copy }) => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    { 
      title: 'UI & UX', 
      description: 'User-centered digital experiences.', 
      icon: Layout
    },
    { 
      title: 'Branding', 
      description: 'Identity, storytelling, and visual systems.', 
      icon: PenTool
    },
    { 
      title: 'Videos', 
      description: 'Motion, editing, and visual narratives.', 
      icon: Play
    }
  ];

  return (
    <section id="portfolio" className="pt-[40px] md:pt-[64px] xl:pt-[80px] pb-18 md:pb-20 px-5 md:px-8 xl:px-12 w-full max-w-[92%] md:max-w-[90%] xl:max-w-[1200px] mx-auto">
      <div className="mb-8">
        <h2 className="text-6xl font-black tracking-tighter mb-4">{copy.sections.portfolio}</h2>
        <div className="h-[2px] w-[64px] bg-ink/10 rounded-full mb-3" />
        <p className="text-lg font-light text-ink/40 leading-relaxed mt-2">
          {copy.sections.portfolioDescription}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer"
          >
            <div className="relative h-auto md:h-[220px] xl:h-[260px] rounded-[20px] backdrop-blur-[20px] bg-white/10 border border-white/18 p-5 md:p-6 xl:p-7 transition-all duration-250 ease-out hover:scale-[1.02] hover:-translate-y-[2px] hover:border-white/28 overflow-hidden flex flex-col items-center justify-center">
              <div className="mb-4 transition-transform duration-250 ease-out group-hover:-translate-y-[3px]">
                <project.icon className="w-[32px] md:w-[36px] xl:w-[42px] h-[32px] md:h-[36px] xl:h-[42px] text-ink/10 group-hover:text-accent transition-colors duration-250 ease-out" strokeWidth={1} />
              </div>
              
              <div className="text-center relative z-10">
                <h3 className="text-[18px] md:text-[20px] xl:text-[22px] font-black mb-2 tracking-tight group-hover:text-accent transition-colors duration-250 ease-out">
                  {project.title}
                </h3>
                <p className="text-[14px] md:text-[15px] xl:text-[16px] font-medium text-ink/60 leading-[1.4] max-w-[200px] mx-auto">
                  {project.description}
                </p>
              </div>

              {/* Subtle inner glow */}
              <div className="absolute inset-0 rounded-[20px] border border-white/5 pointer-events-none" />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <PortfolioPopup 
            project={selectedProject} 
            isOpen={!!selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const ExperienceSection = ({ copy, theme }: { copy: Copy; theme: ThemeMode }) => (
  <section className={`pt-[40px] md:pt-[64px] xl:pt-[80px] pb-18 md:pb-20 px-5 md:px-8 xl:px-12 ${theme === 'dark' ? 'bg-transparent' : 'bg-white'}`}>
    <div className="w-full max-w-[92%] md:max-w-[90%] xl:max-w-[1200px] mx-auto">
      <div className="flex items-center gap-3 mb-16">
        <div className="w-10 h-10 rounded-2xl bg-ink/5 flex items-center justify-center">
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
            className="p-10 rounded-[40px] bg-bg border border-ink/5 hover:border-accent/20 transition-all duration-300 group hover:scale-[1.02] hover:rotate-2"
          >
            <div className="w-14 h-14 mb-8 flex items-center justify-center bg-white rounded-2xl shadow-sm border border-ink/5">
              <img src={exp.logo} alt={exp.company} className="max-w-[70%] max-h-[70%] object-contain opacity-60 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
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

const AboutSection = () => (
  <section id="about" className="pt-[40px] md:pt-[64px] xl:pt-[80px] pb-18 md:pb-20 px-5 md:px-8 xl:px-12 w-full max-w-[92%] md:max-w-[90%] xl:max-w-[1200px] mx-auto">
    <div className="backdrop-blur-[20px] bg-white/12 rounded-[24px] p-6 md:p-8 xl:p-12 flex flex-col md:flex-row items-center gap-12 md:gap-16 overflow-hidden border border-white/20">
      <div className="w-full md:w-[280px] flex-shrink-0">
        <img 
          src="/api/files/64-0.png" 
          alt="Ayub Banaizade" 
          className="w-full h-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex-1 text-left">
        <h2 className="text-[24px] md:text-[28px] xl:text-[36px] font-black text-ink mb-4 tracking-tight">Hi, I’m Ayub</h2>
        <p className="text-[16px] md:text-[18px] xl:text-[20px] font-medium text-ink/80 mb-6 leading-[1.5]">
          Creative professional with more than 10 years of experience in visual storytelling, branding, motion graphics, and digital content creation.
        </p>
        <p className="text-[14px] md:text-[15px] xl:text-[16px] text-ink/50 mb-10 leading-[1.5] font-medium">
          I've always loved beautiful things. Because they're pretty, because beauty reflects intention and care. Finding the right materials, tools, or systems and putting them in service of a clear vision, that's where true value lies.
        </p>
        <div className="flex items-center gap-6">
          <button className="bg-ink text-white px-10 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest hover:scale-[1.03] hover:rotate-[2deg] transition-all duration-250 ease-out flex items-center gap-3 shadow-lg shadow-ink/10">
            About Me <ArrowRight className="w-5 h-5" />
          </button>
          <button 
            onClick={() => {
              const el = document.getElementById('resume');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="border-2 border-ink/10 px-10 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-ink hover:text-white hover:scale-[1.03] hover:-rotate-[2deg] transition-all duration-250 ease-out"
          >
            Resume
          </button>
        </div>
      </div>
    </div>
  </section>
);

const AboutSectionMinimal = ({
  copy,
  language,
  theme,
  onOpenContact,
}: {
  copy: Copy;
  language: Language;
  theme: ThemeMode;
  onOpenContact: () => void;
}) => (
  <section id="about" className="pt-[40px] md:pt-[64px] xl:pt-[80px] pb-18 md:pb-20 px-5 md:px-8 xl:px-12 w-full max-w-[92%] md:max-w-[90%] xl:max-w-[1200px] mx-auto">
    <div className="overflow-visible rounded-[34px] border border-[#666666] bg-transparent p-6 shadow-[0_22px_70px_rgba(15,23,42,0.09)] md:p-8 xl:p-10">
      <div className="grid items-center gap-8 md:grid-cols-[30%_70%] md:gap-10">
        <div className="order-2 relative flex justify-center md:order-1 md:justify-start">
          <div className="relative w-full max-w-[280px] md:max-w-none">
            <div className="pointer-events-none absolute inset-x-[50%] bottom-[8%] h-10 rounded-full bg-ink/10 blur-2xl md:bottom-0" />
            <img
              src="/me.png"
              alt="Ayub Banaizade"
              className="relative z-10 block w-full h-auto scale-[1.24] translate-y-6 object-contain drop-shadow-[0_24px_40px_rgba(15,23,42,0.16)] md:translate-x-[-6%] md:translate-y-8 md:scale-[1.28]"
            />
          </div>
        </div>
        <div className={`order-1 flex flex-col items-start md:order-2 md:pl-4 xl:pl-8 ${language === 'fa' ? 'text-right md:items-end' : 'text-left'}`}>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/40">{copy.about.eyebrow}</p>
          <h2 className="max-w-[12ch] text-[30px] font-semibold tracking-[-0.05em] text-ink md:text-[42px] xl:text-[50px]">
            {copy.about.title}
          </h2>
          <p className="mt-5 max-w-[52ch] text-[15px] leading-7 text-ink/62 md:text-[16px]">
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

const Testimonials = ({ copy }: { copy: Copy }) => (
  <section className="pt-[40px] md:pt-[64px] xl:pt-[80px] pb-18 md:pb-20 px-5 md:px-8 xl:px-12 bg-ink text-white overflow-hidden">
    <div className="w-full max-w-[92%] md:max-w-[90%] xl:max-w-[1200px] mx-auto">
      <div className="flex items-center gap-3 mb-16">
        <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
          <Smile className="w-5 h-5 opacity-40" />
        </div>
        <h2 className="text-4xl font-bold tracking-tight">{copy.sections.testimonials}</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            name: "Ali Rezaei",
            role: "CEO @ Samanehaye Modiriat",
            quote: "Ayub's creative vision and attention to detail are unmatched. He transformed our brand identity into something truly world-class."
          },
          {
            name: "Sara Ahmadi",
            role: "Marketing Director @ Systan",
            quote: "Working with Ayub was a joy. His ability to bring complex ideas to life through motion graphics is incredible."
          },
          {
            name: "Mohammad Karimi",
            role: "Founder @ Zibax Beauty",
            quote: "Ayub is a superstar collaborator. His work for our beauty brand was both elegant and effective."
          },
          {
            name: "Neda Hosseini",
            role: "Creative Lead @ Pezhvak",
            quote: "Ayub is one of the most talented designers I've ever worked with. His versatility across photography and design is rare."
          }
        ].map((t, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group hover:scale-[1.02] hover:rotate-2"
          >
            <p className="text-sm text-white/70 mb-10 leading-relaxed italic font-medium">"{t.quote}"</p>
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

const Footer = ({ copy, theme }: { copy: Copy; theme: ThemeMode }) => (
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

const ContactModal = ({
  isOpen,
  onClose,
  theme,
}: {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
}) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${email || 'visitor'}`);
    const body = encodeURIComponent(`Sender: ${email}\n\n${message}`);
    window.location.href = `mailto:ayub.banaizade@gmail.com?subject=${subject}&body=${body}`;
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute inset-0 bg-black/45 backdrop-blur-[6px]"
        aria-label="Close contact form"
      />
      <div className={`relative z-10 w-full max-w-xl rounded-[28px] border p-6 shadow-2xl md:p-8 ${theme === 'dark' ? 'border-white/10 bg-[#111a28] text-white' : 'border-ink/10 bg-white text-ink'}`}>
        <button
          onClick={onClose}
          className={`absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-2xl border ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-ink/10 bg-ink/0'}`}
          aria-label="Close contact form"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/40">Let&apos;s Talk</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Send a message</h3>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="mb-2 block text-sm font-medium">Your email</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className={`w-full rounded-2xl border px-4 py-3 outline-none ${theme === 'dark' ? 'border-white/10 bg-white/5 text-white placeholder:text-white/35' : 'border-ink/10 bg-white text-ink placeholder:text-ink/35'}`}
              placeholder="name@example.com"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium">Message</span>
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
              rows={6}
              className={`w-full rounded-2xl border px-4 py-3 outline-none ${theme === 'dark' ? 'border-white/10 bg-white/5 text-white placeholder:text-white/35' : 'border-ink/10 bg-white text-ink placeholder:text-ink/35'}`}
              placeholder="Tell me about your project..."
            />
          </label>
          <div className="flex justify-end">
            <button
              type="submit"
              className={`inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold ${theme === 'dark' ? 'bg-white text-[#0d1522]' : 'bg-ink text-white'}`}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ResumeItem = ({ 
  company, 
  role, 
  type, 
  period, 
  location, 
  description, 
  skills, 
  media, 
  logo,
  projects,
  theme
}: any) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="relative group py-8 first:pt-0 last:pb-0">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4 flex-1">
          <div className={`w-10 h-10 rounded-lg border flex items-center justify-center p-2 shadow-sm flex-shrink-0 mt-1 ${theme === 'dark' ? 'bg-[#111a28] border-white/10' : 'bg-white border-ink/5'}`}>
            {logo ? (
              <img src={logo} alt={company} className="max-w-full max-h-full object-contain" referrerPolicy="no-referrer" />
            ) : (
              <Briefcase className={`w-5 h-5 ${theme === 'dark' ? 'text-[#0d1522]' : 'text-ink/20'}`} />
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-bold text-ink">
                {role} <span className="font-normal opacity-40 mx-1">@</span> {company}
              </h3>
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1 hover:bg-ink/5 rounded-full transition-colors duration-250 ease-out"
              >
                {isExpanded ? (
                  <Minus className={`w-4 h-4 ${theme === 'dark' ? 'text-[#0d1522]' : 'text-ink/20'}`} />
                ) : (
                  <Plus className={`w-4 h-4 ${theme === 'dark' ? 'text-[#0d1522]' : 'text-ink/20'}`} />
                )}
              </button>
            </div>
            <p className="text-[11px] text-ink/50 font-medium uppercase tracking-wider mb-3">
              {period} <span className="mx-2 opacity-30">|</span> {location}
            </p>
            
            {description && (
              <div className={`text-sm text-ink/60 leading-relaxed whitespace-pre-line ${isExpanded ? 'mb-6' : 'line-clamp-2 mb-2'}`}>
                {description}
              </div>
            )}

            {isExpanded && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-6"
              >
                {projects && (
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-ink/40">Project List:</p>
                    <ul className="text-xs text-ink/60 list-disc list-inside space-y-1">
                      {projects.map((p: string, i: number) => <li key={i}>{p}</li>)}
                    </ul>
                  </div>
                )}
                
                {skills && (
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill: string) => (
                      <span key={skill} className="px-2 py-1 bg-ink/5 rounded text-[10px] font-bold uppercase tracking-widest text-ink/60">{skill}</span>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {media && (
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide mt-4">
                {media.map((img: string, idx: number) => (
                  <div key={idx} className="flex-shrink-0 rounded-xl overflow-hidden bg-gray-100 border border-ink/5 w-40 aspect-[4/3]">
                    <img src={img} alt="Work sample" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Dock = ({ activeSection, isSidebarOpen, copy, theme }: { activeSection: Section, isSidebarOpen: boolean, copy: Copy, theme: ThemeMode }) => {
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

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ 
        y: showDock ? 0 : 100, 
        opacity: showDock ? 1 : 0 
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed bottom-8 left-1/2 z-50 hidden -translate-x-1/2 md:block ${isSidebarOpen ? 'md:left-[calc(50%+160px)]' : 'md:left-1/2'}`}
    >
      <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
        <button 
          onClick={() => scrollToSection('home')} 
          className={`dock-item group ${activeSection === 'home' ? activeDockClass : ''}`}
        >
          <Home className="w-5 h-5" />
          <span className="dock-tooltip">{copy.nav.home}</span>
        </button>
        <button 
          onClick={() => scrollToSection('about')} 
          className={`dock-item group ${activeSection === 'about' ? activeDockClass : ''}`}
        >
          <User className="w-5 h-5" />
          <span className="dock-tooltip">{copy.nav.about}</span>
        </button>
        <button 
          onClick={() => scrollToSection('portfolio')} 
          className={`dock-item group ${activeSection === 'portfolio' ? activeDockClass : ''}`}
        >
          <Briefcase className="w-5 h-5" />
          <span className="dock-tooltip">{copy.nav.portfolio}</span>
        </button>
        <button 
          onClick={() => scrollToSection('resume')} 
          className={`dock-item group ${activeSection === 'resume' ? activeDockClass : ''}`}
        >
          <FileText className="w-5 h-5" />
          <span className="dock-tooltip">{copy.nav.resume}</span>
        </button>
      </div>
    </motion.div>
  );
};

const Sidebar = ({
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
}) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { label: 'Telegram', href: 'https://t.me/imabz', icon: Send },
    { label: 'WhatsApp', href: 'https://wa.me/989019683969', iconLabel: 'WA' },
    { label: 'Instagram', href: 'https://www.instagram.com/imabzi/', icon: Instagram },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/imabz/', icon: LinkedinIcon },
    { label: 'X', href: 'https://x.com/imabzayub', iconLabel: 'X' },
    { label: 'Phone', href: 'tel:09019683969', icon: Phone }
  ];

  return (
    <>
      <div
        onClick={onToggle}
        className={`fixed inset-0 z-30 bg-black/20 backdrop-blur-[2px] transition-opacity duration-300 md:hidden ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
      />

      {!isOpen && (
        <button
          onClick={onToggle}
          className={`fixed left-5 top-5 z-[70] inline-flex h-12 w-12 items-center justify-center rounded-2xl border text-ink shadow-lg backdrop-blur-md transition-all duration-250 ease-out hover:scale-105 md:hidden ${theme === 'dark' ? 'border-white/10 bg-[#0d1522]/90 text-white shadow-black/30' : 'border-ink/10 bg-white/90 shadow-ink/10'}`}
          aria-label="Open sidebar"
        >
          <Menu className="h-5 w-5" />
        </button>
      )}

      <aside className={`fixed left-0 top-0 z-40 flex h-screen w-[320px] max-w-[86vw] flex-col overflow-y-auto border-r p-6 transition-transform duration-300 md:p-8 ${theme === 'dark' ? 'border-white/10 bg-[#0d1522]' : 'border-ink/5 bg-white'} ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <button
          onClick={onToggle}
          className={`absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-250 ease-out hover:scale-105 ${theme === 'dark' ? 'border-white/10 bg-white/5 text-white/85' : 'border-ink/10 bg-ink/0 text-ink'}`}
          aria-label="Close sidebar"
        >
          <X className="h-5 w-5" />
        </button>
        <div className={`mt-12 flex flex-col ${language === 'fa' ? 'items-end text-right' : 'items-start text-left'}`}>
        <div className="relative mb-8">
          <div className={`w-[96px] overflow-hidden rounded-[32px] border md:w-[120px] md:rounded-[40px] ${theme === 'dark' ? 'border-white/16' : 'border-[#b8b8b8]'}`}>
            <img 
              src="/Profile(SideBar).jpg" 
              alt="Ayub Banaizade" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="mb-1 text-3xl font-black tracking-tight">Ayub Banaizade</h1>
        <p className={`mb-6 flex items-center gap-1 text-xs font-black opacity-30 ${language === 'fa' ? 'flex-row-reverse' : ''}`}>
          <MapPin className="w-3 h-3" /> {copy.sidebar.location}
        </p>
        
        <p className="mb-8 text-[13px] font-bold leading-relaxed text-ink/60">
          {copy.sidebar.role}
        </p>

        <div className="mb-8 w-full border-t border-ink/5 pt-8">
          <div className="mb-2 space-y-0.5">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-30 leading-tight">{copy.sidebar.experience}</p>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-30 leading-tight">{copy.sidebar.experienceIncludes}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { name: 'Adobe Photoshop', label: 'Ps' },
              { name: 'Adobe Illustrator', label: 'Ai' },
              { name: 'Adobe After Effects', label: 'Ae' },
              { name: 'Figma', label: 'Fi' },
              { name: 'Adobe XD', label: 'Xd' },
              { name: 'CorelDRAW', label: 'Cd' },
            ].map((skill) => (
              <div 
                key={skill.label}
                title={skill.name} 
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-ink/5 transition-all duration-250 ease-out hover:scale-[1.03] hover:rotate-[2deg]"
              >
                <span className="text-[9px] font-black opacity-40">{skill.label}</span>
              </div>
            ))}
          </div>
        </div>
          <div className={`mb-8 flex w-full flex-col gap-3 md:flex-row ${language === 'fa' ? 'md:flex-row-reverse' : ''}`}>
            <button 
              onClick={() => scrollToSection('resume')}
              className={`flex-1 rounded-xl border-2 px-5 py-3 text-[11px] font-black uppercase tracking-[0.12em] transition-all duration-250 ease-out hover:scale-105 ${theme === 'dark' ? 'border-white/12 text-white hover:bg-white hover:text-[#0d1522]' : 'border-ink/10 text-ink hover:bg-ink hover:text-white'}`}
            >
              <span className="inline-flex items-center gap-2 whitespace-nowrap">
                {copy.actions.resume}
                <Download className="h-4 w-4" />
              </span>
            </button>
            <button
              onClick={onOpenContact}
              className={`flex-1 whitespace-nowrap rounded-xl px-5 py-3 text-center text-[11px] font-black uppercase tracking-[0.12em] shadow-lg transition-all duration-250 ease-out hover:scale-105 hover:rotate-[2deg] ${theme === 'dark' ? 'bg-white text-[#0d1522] shadow-black/20' : 'bg-ink text-white shadow-ink/20'}`}
            >
              {copy.actions.letsTalk}
            </button>
          </div>

          <div className="w-full border-t border-ink/5 pt-6">
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={item.label}
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-250 ease-out hover:-translate-y-0.5 ${theme === 'dark' ? 'border-white/10 text-white/70 hover:border-white/20 hover:text-white' : 'border-ink/10 text-ink/60 hover:border-ink/20 hover:text-ink'}`}
                >
                  {'icon' in item && item.icon ? <item.icon className="h-5 w-5" /> : <span className="text-[11px] font-black uppercase">{item.iconLabel}</span>}
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

// --- Main App ---

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
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
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const syncSidebar = (_event?: MediaQueryListEvent) => {
      setIsSidebarOpen(true);
    };

    syncSidebar();
    mediaQuery.addEventListener('change', syncSidebar);

    return () => mediaQuery.removeEventListener('change', syncSidebar);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === 'fa' ? 'fa' : 'en';
    document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
    document.body.classList.toggle('theme-dark', theme === 'dark');
    document.body.classList.toggle('theme-light', theme === 'light');
  }, [language, theme]);

  return (
    <div className={`min-h-screen selection:bg-accent/30 flex bg-bg text-ink transition-colors duration-300 ${theme === 'dark' ? 'theme-dark' : 'theme-light'}`}>
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
          <AboutSectionMinimal copy={copy} language={language} theme={theme} onOpenContact={() => setIsContactOpen(true)} />
          <PortfolioSection copy={copy} theme={theme} />
          
          {/* Resume Section */}
          <section id="resume" className="pt-[40px] md:pt-[64px] xl:pt-[80px] pb-18 md:pb-20 px-5 md:px-8 xl:px-12 w-full max-w-[92%] md:max-w-[90%] xl:max-w-[1200px] mx-auto">
            {/* Resume Header - Minimal now since AboutSection has the intro */}
            <div className="mb-8">
              <h2 className="text-6xl font-black tracking-tighter mb-4">{copy.sections.resume}</h2>
              <div className="h-[2px] w-[64px] bg-ink/10 rounded-full mb-3" />
              <p className="text-lg font-light text-ink/40 leading-relaxed mt-2">
                I specialize in crafting visual identities, designing meaningful experiences, and producing high‑impact motion and graphic content for brands and digital platforms.
              </p>
            </div>

            {/* Experience Section */}
            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 mb-24">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-ink/30 pt-1">{copy.sections.experience}</h2>
              <div className="space-y-12">
                <ResumeItem 
                  company="Samanehaye Modiriat"
                  role="Senior Graphic Designer"
                  type="Full-time"
                  period="Aug 2024 – Present"
                  location="Tehran, Iran"
                  description={`🎨 Graphic Designer | Videographer | Photographer | Editor | UI Specialist

I’m a multi-disciplinary designer focused on creating visual and digital experiences that leave a lasting impact. From designing brand identities and creating visual concepts to producing digital content, I craft unique stories with every project.

Roles & Responsibilities:
- Designing brand identities and brand books for various businesses
- Designing UI for websites and optimizing user experience for digital platforms
- Creating Instagram, LinkedIn, YouTube posts and content for other platforms to engage audiences and build meaningful connections
- Designing motion graphics and animated banners (logo motion) for digital ads and campaigns
- Interior design for companies to create inspiring and comfortable work environments
- Photography, videography, and editing with a professional and artistic approach for every project
- Utilizing all skills to create unique and memorable experiences for the audience`}
                  skills={['Branding', 'UI Design', 'Creative Direction', 'Team Leadership']}
                  theme={theme}
                />
                <ResumeItem 
                  company="Systan"
                  role="Senior Graphic Designer"
                  type="Full-time"
                  period="Dec 2024 – Present"
                  location="Tehran Province, Iran"
                  description="Specializing in digital marketing media and brand storytelling. Creating high-impact visual content for marketing campaigns and social platforms."
                  skills={['Digital Marketing Media', 'Design', 'Visual Storytelling', 'Social Media']}
                  media={["https://picsum.photos/seed/systan-1/800/450", "https://picsum.photos/seed/systan-2/800/450"]}
                  theme={theme}
                />
                <ResumeItem 
                  company="Zibax Beauty"
                  role="Graphic Manager"
                  type="Full-time"
                  period="Mar 2023 – Apr 2024"
                  location="Tehran, Iran"
                  description="Managed the creative department for a leading beauty brand. Oversaw photography sessions, graphic production, and brand positioning."
                  skills={['Photography', 'Graphics', 'Management', 'Beauty Industry', 'Brand Strategy']}
                  media={["https://picsum.photos/seed/zibax-1/400/300", "https://picsum.photos/seed/zibax-2/400/300", "https://picsum.photos/seed/zibax-3/400/300"]}
                  theme={theme}
                />
                
                {/* Pezhvak Multi-role */}
                <div className="relative group py-8">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center p-2 shadow-sm flex-shrink-0 mt-1 ${theme === 'dark' ? 'bg-[#111a28] border border-white/10' : 'bg-white border border-ink/5'}`}>
                      <Briefcase className={`w-5 h-5 ${theme === 'dark' ? 'text-[#0d1522]' : 'text-ink/20'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-ink mb-1">Pezhvak Advertising & Marketing Agency</h3>
                      <p className="text-[11px] text-ink/50 font-medium uppercase tracking-wider mb-6">Khorramshahr, Iran</p>
                      
                      <div className="space-y-8 ml-4 border-l border-ink/10 pl-6">
                        <div className="relative">
                          <div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-accent" />
                          <h4 className="text-xs font-bold text-ink">Senior Designer</h4>
                          <p className="text-[10px] text-ink/40 font-bold uppercase tracking-widest">Oct 2019 – Mar 2023</p>
                        </div>
                        <div className="relative">
                          <div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-ink/20" />
                          <h4 className="text-xs font-bold text-ink">Graphic Designer</h4>
                          <p className="text-[10px] text-ink/40 font-bold uppercase tracking-widest">Apr 2022 – Present</p>
                        </div>
                        <div className="relative">
                          <div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-ink/20" />
                          <h4 className="text-xs font-bold text-ink">Motion Graphic Designer</h4>
                          <p className="text-[10px] text-ink/40 font-bold uppercase tracking-widest">May 2021 – Apr 2022</p>
                        </div>
                        <div className="relative">
                          <div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-ink/20" />
                          <h4 className="text-xs font-bold text-ink">Photographer</h4>
                          <p className="text-[10px] text-ink/40 font-bold uppercase tracking-widest">May 2017 – Apr 2022</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <ResumeItem 
                  company="3soot (Online Hypermarket)"
                  role="Social Media Designer"
                  type="Freelance"
                  period="Sep 2018 – Mar 2022"
                  location="Abadan, Iran"
                  description="Designed social media content and marketing assets for one of the region's largest online hypermarkets."
                  skills={['UI Design', 'Social Media', 'E-commerce']}
                  theme={theme}
                />
                <ResumeItem 
                  company="GLX Mobile"
                  role="Designing Engineer"
                  type="Freelance"
                  period="Sep 2021 – Nov 2021"
                  location="Remote"
                  description="Engineered visual designs for mobile interfaces and marketing materials."
                  projects={['Mobile UI Kit', 'Marketing Campaign Visuals', 'Product Photography Guidelines']}
                  skills={['Photography', 'Motion Graphics', 'UI Engineering', 'Mobile Design']}
                  theme={theme}
                />
                <ResumeItem 
                  company="Glamora"
                  role="Photographer"
                  type="Full-time"
                  period="Mar 2018 – Apr 2020"
                  location="Tehran Province, Iran"
                  description="Professional photography for high-end fashion and lifestyle brands."
                  skills={['Fashion Photography', 'Lighting', 'Post-production']}
                  theme={theme}
                />
              </div>
            </div>

            {/* Skill Section */}
            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 mb-24">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-ink/30 pt-1">Skills</h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
                {[
                  { name: 'Photoshop', icon: 'photoshop' },
                  { name: 'Illustrator', icon: 'illustrator' },
                  { name: 'After Effects', icon: 'aftereffects' },
                  { name: 'Figma', icon: 'figma' },
                  { name: 'Adobe XD', icon: 'xd' },
                  { name: 'CorelDRAW', icon: 'coreldraw' }
                ].map((tool) => (
                  <div key={tool.name} className="flex flex-col items-center gap-3 group cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-ink/5 flex items-center justify-center p-3.5 shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300 grayscale group-hover:grayscale-0">
                      <img src={`https://picsum.photos/seed/${tool.icon}/100/100`} alt={tool.name} className="w-full h-full object-contain rounded-md" referrerPolicy="no-referrer" />
                    </div>
                    <span className="text-[9px] font-bold text-ink/30 uppercase tracking-[0.15em] text-center group-hover:text-ink/60 transition-colors">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 mb-24">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-ink/30 pt-1">Education</h2>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm font-bold text-ink">Islamic Azad University</h3>
                  <span className="text-[10px] font-bold text-ink/30 uppercase tracking-widest">2015 – 2017</span>
                </div>
                <p className="text-sm text-ink/60 mb-4">Bachelor's Degree in Illustration <span className="mx-2 opacity-30">|</span> Grade: 17</p>
                <div className="flex flex-wrap gap-2">
                  {['Adobe InDesign', 'Adobe Illustrator', 'Visual Arts', 'Creative Direction', 'Branding', 'Layout Design'].map(skill => (
                    <span key={skill} className="px-2 py-1 bg-ink/5 rounded text-[10px] font-bold uppercase tracking-widest text-ink/40">{skill}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Involvement Section */}
            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 mb-24">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-ink/30 pt-1">Tools</h2>
              <div className="space-y-8">
                {[
                  { role: "Design Ambassador", company: "Placeholder Company", period: "Sep 2025 – Present" },
                  { role: "Creative Lead", company: "Placeholder Organization", period: "Mar 2024 – Present" },
                  { role: "Web Designer", company: "Placeholder Startup", period: "Sep – Dec 2024" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start justify-between group">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center p-2 shadow-sm ${theme === 'dark' ? 'bg-[#111a28] border border-white/10' : 'bg-white border border-ink/5'}`}>
                        <Plus className={`w-5 h-5 transition-opacity ${theme === 'dark' ? 'text-[#0d1522] opacity-70' : 'opacity-10 group-hover:opacity-40'}`} />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-ink">{item.role} <span className="font-normal opacity-40 mx-1">@</span> {item.company}</h3>
                        <p className="text-[10px] text-ink/40 font-bold uppercase tracking-widest">{item.period}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards Section */}
            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 mb-24">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-ink/30 pt-1">Achievements</h2>
              <div className="space-y-8">
                {[
                  { title: "Best Visual Designer Award", year: "2024" },
                  { title: "Motion Graphics Excellence Award", year: "2023" },
                  { title: "Creative Direction Achievement", year: "2022" }
                ].map((award, i) => (
                  <div key={i} className="flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-accent/5 flex items-center justify-center">
                        <Award className="w-4 h-4 text-accent/40" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-ink group-hover:text-accent transition-colors">{award.title}</h3>
                        <p className="text-[10px] text-ink/40 font-bold uppercase tracking-widest">{award.year}</p>
                      </div>
                    </div>
                    <ArrowUpRight className={`w-4 h-4 transition-opacity ${theme === 'dark' ? 'text-[#0d1522] opacity-70' : 'opacity-10 group-hover:opacity-40'}`} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Testimonials copy={copy} />
          <ExperienceSection copy={copy} theme={theme} />
        </main>

        <Footer copy={copy} theme={theme} />
      </div>

      <Dock activeSection={activeSection} isSidebarOpen={isSidebarOpen} copy={copy} theme={theme} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} theme={theme} />
    </div>
  );
}
