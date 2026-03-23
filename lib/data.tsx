import { SkillsIcons } from "@/components/icons";
import type { Experience, Testimonial, ResumeItemData } from "./types";

export const UI_COPY = {
  en: {
    nav: {
      home: "Home",
      about: "About Me",
      portfolio: "Portfolio",
      resume: "Resume",
    },
    actions: {
      letsTalk: "Let's Talk",
      resume: "Resume",
      theme: "Theme",
      language: "Language",
    },
    about: {
      eyebrow: "About Me",
      title: "Hi, I am Ayub.",
      description:
        "I have always strived to deliver a blend of creativity, precision, and professional standards in my work. My goal is to create impactful and memorable visual experiences, and I continue to pursue growth and learning with strong motivation.",
    },
    sections: {
      portfolio: "Portfolio",
      portfolioDescription:
        "A curated selection of my recent design, branding, and motion projects.",
      resume: "Resume",
      resumeDescription:
        "I specialize in crafting visual identities, designing meaningful experiences, and producing high-impact motion and graphic content for brands and digital platforms.",
      testimonials: "What others say!",
      experience: "Recent Experience",
      madeIn: "Made in Tehran",
    },
    sidebar: {
      location: "Tehran - Iran",
      role: "Visual Storyteller | Brand & Motion Graphics Specialist",
      experience: "More Than 10 Years",
      experienceIncludes: "Experience Includes:",
    },
  },
  fa: {
    nav: {
      home: "خانه",
      about: "درباره من",
      portfolio: "نمونه کار",
      resume: "رزومه",
    },
    actions: {
      letsTalk: "گفتگو کنیم",
      resume: "رزومه",
      theme: "تم",
      language: "زبان",
    },
    about: {
      eyebrow: "درباره من",
      title: "سلام، من ایوب هستم.",
      description:
        "من همیشه تلاش کرده‌ام تا ترکیبی از خلاقیت، دقت و استانداردهای حرفه‌ای را در کارم ارائه دهم. هدف من خلق تجربیات بصری تأثیرگذار و به‌یادماندنی است و همچنان با انگیزه قوی به دنبال رشد و یادگیری هستم.",
    },
    sections: {
      portfolio: "نمونه کار",
      portfolioDescription:
        "منتخبی از پروژه‌های اخیر من در طراحی، برندینگ و موشن.",
      resume: "رزومه",
      resumeDescription:
        "تمرکز من بر ساخت هویت بصری، تجربه‌های معنادار و محتوای گرافیکی و موشن اثرگذار برای برندها و پلتفرم‌های دیجیتال است.",
      testimonials: "نظر دیگران",
      experience: "تجربه‌های اخیر",
      madeIn: "ساخته شده در تهران",
    },
    sidebar: {
      location: "تهران - ایران",
      role: "روایتگر بصری | متخصص برند و موشن گرافیک",
      experience: "بیش از ۱۰ سال تجربه",
      experienceIncludes: "حوزه‌های تجربه:",
    },
  },
} as const;

export type Copy = (typeof UI_COPY)[keyof typeof UI_COPY];

export const EXPERIENCES: Experience[] = [
  {
    company: "Samanehaye Modiriat",
    role: "Senior Graphic Designer",
    period: "Aug 2024 - Present",
    description:
      "Leading creative direction for enterprise management systems and establishing design systems.",
    logo: "https://picsum.photos/seed/sm/100/100",
  },
  {
    company: "Systan",
    role: "Senior Graphic Designer",
    period: "Dec 2024 - Present",
    description:
      "Specializing in digital marketing media and brand storytelling for high-impact campaigns.",
    logo: "https://picsum.photos/seed/systan/100/100",
  },
  {
    company: "Zibax Beauty",
    role: "Graphic Manager",
    period: "Mar 2023 - Apr 2024",
    description:
      "Managed creative department, oversaw photography sessions and brand positioning.",
    logo: "https://picsum.photos/seed/zibax/100/100",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ali Rezaei",
    role: "CEO @ Samanehaye Modiriat",
    quote:
      "Ayub's creative vision and attention to detail are unmatched. He transformed our brand identity into something truly world-class.",
  },
  {
    name: "Sara Ahmadi",
    role: "Marketing Director @ Systan",
    quote:
      "Working with Ayub was a joy. His ability to bring complex ideas to life through motion graphics is incredible.",
  },
  {
    name: "Mohammad Karimi",
    role: "Founder @ Zibax Beauty",
    quote:
      "Ayub is a superstar collaborator. His work for our beauty brand was both elegant and effective.",
  },
  {
    name: "Neda Hosseini",
    role: "Creative Lead @ Pezhvak",
    quote:
      "Ayub is one of the most talented designers I've ever worked with. His versatility across photography and design is rare.",
  },
];

export const RESUME_ITEMS: ResumeItemData[] = [
  {
    company: "Samanehaye Modiriat",
    role: "Senior Graphic Designer",
    type: "Full-time",
    period: "Aug 2024 – Present · 1 yr 8 mos",
    location: "Tehran County, Tehran Province, Iran",
    description: `I have worked as a Senior Designer specializing in brand identity, visual design, motion graphics, videography, and UI/UX, creating a wide range of visual content for CRM products and in‑house brands. My role includes producing photography, video editing, motion ads, print materials, and digital assets, as well as contributing to exhibition materials, social media visuals, and UI redesigns for websites and applications. I have also gained practical experience with CRM systems, including workflow structures, modules, iteration cycles, and performance evaluation processes.`,
    skills: [
      "Brand Identity Designer",
      "Visual Designer",
      "Motion Graphic Designer",
      "Videographer",
      "Video Editor",
      "Print Designer",
      "UI/UX Specialist",
    ],
  },
  {
    company: "Zibax Beauty",
    role: "Graphic Designer",
    type: "Full-time",
    period: "Mar 2023 - Apr 2024 · 1 yr 2 mos",
    location: "Tehran County, Tehran Province, Iran",
    description:
      "I worked as a Graphic Designer at Zibax Beauty, creating a wide range of visual content through photography, videography, video editing, and developing creative concepts for product‑focused shoots. I managed social media visuals by designing posts and stories, planning content calendars, and publishing materials across platforms. Additionally, I designed various marketing assets—including price catalogs, product posters, and company introduction catalogs—and provided full design support for events, workshops, competitions, and showroom activities.",
    skills: [
      "Videographer",
      "Video Editor",
      "Print Designer",
      "Digital Designer",
    ],
    media: [
      "https://picsum.photos/seed/zibax-1/400/300",
      "https://picsum.photos/seed/zibax-2/400/300",
      "https://picsum.photos/seed/zibax-3/400/300",
    ],
  },
  {
    company: "Pezhvak Advertising & Marketing Agency",
    role: "Senior Designer",
    type: "Full-time",
    period: "May 2017 – Mar 2023 · 8 yrs 6 mos",
    location: "Abadan County, Khuzestan Province, Iran",
    description:
      "I worked as a Senior Designer at Pezhvak Advertising & Marketing Agency, where I developed complete brand identities—including logos, visual systems, and branding strategies—and designed a wide range of print and digital materials such as business cards, catalogs, posters, banners, and social media assets. I also produced video content through videography, editing, and motion graphics, while contributing to UI design for websites and applications.",
    skills: [
      "Brand Identity Designer",
      "Visual Designer",
      "Motion Graphic Designer",
      "Videographer",
      "Video Editor",
      "Print Designer",
      "UI/UX Specialist",
    ],
  },
  {
    company: "3soot Online Hyper Market",
    role: "Social Media Designer",
    type: "Freelance",
    period: "Sep 2018 – Mar 2022 · 3 yrs 7 mos",
    location: "Abadan County, Khuzestan Province, Iran",
    description:
      "creating a variety of visual content ranging from social media graphics and print materials to motion‑based onboarding and loading animations for their application. Working remotely, I supported the brand’s visual presence and helped enhance the overall user experience through cohesive and engaging design.",
    skills: [
      "Social Media Designer",
      "Print Designer",
      "Motion Graphic Designer",
    ],
  },
  {
    company: "GLX Mobile",
    role: "Senior Graphic Designer",
    type: "Remote",
    period: "Sep 2021 – Nov 2021 · 3 mos",
    location: "Khorramshahr, Khuzestan Province, Iran",
    description:
      "creating mobile‑oriented video content through scripting, filming, and editing—especially unboxing and product‑intro videos optimized for social media. I also designed a variety of visual materials, including social media posts, stories, posters, and print assets, and refreshed items like business cards and shopping bags to strengthen the brand’s overall visual identity.",
    projects: [
      "Mobile UI Kit",
      "Marketing Campaign Visuals",
      "Product Photography Guidelines",
    ],
    skills: [
      "Digital Marketer",
      "Social Media Designer",
      "Visual Designer",
      "Videographer",
      "Video Editor",
      "Motion Graphic Designer",
      "Print Designer",
    ],
  },
  {
    company: "Glamora",
    role: "Senior Graphic Designer",
    type: "Full-time",
    period: "Mar 2018 – Apr 2020 · 2 yrs 2 mos",
    location: "Abadan, Khuzestan Province, Iran",
    description:
      "focusing on product photography—from shooting and retouching to preparing images for seamless website integration. Alongside this, I designed website banners and a range of promotional materials, helping strengthen the brand’s visual presence across digital platforms.",
    skills: [
      "Digital Marketer",
      "Social Media Designer",
      "Photographer",
      "Video Editor",
      "Motion Graphic Designer",
      "Print Designer",
    ],
  },
];

export const PEZHVAK_ROLES = [
  { title: "Senior Designer", period: "Oct 2019 – Mar 2023", isActive: true },
  { title: "Graphic Designer", period: "Apr 2022 – Present", isActive: false },
  {
    title: "Motion Graphic Designer",
    period: "May 2021 – Apr 2022",
    isActive: false,
  },
  { title: "Photographer", period: "May 2017 – Apr 2022", isActive: false },
];

export const SIDEBAR_SKILLS = [
  { name: "Photoshop", icon: SkillsIcons.Ps },
  { name: "Illustrator", icon: SkillsIcons.Ai },
  { name: "After Effects", icon: SkillsIcons.Ae },
  { name: "Premiere", icon: SkillsIcons.Pr },
  { name: "Adobe XD", icon: SkillsIcons.Xd },
  { name: "Figma", icon: SkillsIcons.Figma },
];

export const INVOLVEMENTS = [
  {
    role: "Design Ambassador",
    company: "Placeholder Company",
    period: "Sep 2025 – Present",
  },
  {
    role: "Creative Lead",
    company: "Placeholder Organization",
    period: "Mar 2024 – Present",
  },
  {
    role: "Web Designer",
    company: "Placeholder Startup",
    period: "Sep – Dec 2024",
  },
];

export const ACHIEVEMENTS = [
  {
    title:
      "Approved and published 4 logotypes selected by distinguished professors of the University of Art, Tehran",
    description: () => {
      return (
        <>
          <p className="text-[10px] text-ink/40 font-bold uppercase tracking-widest">
            Book Title: Iranian Logotypes 4
          </p>
          <p className="text-[10px] text-ink/40 font-bold uppercase tracking-widest">
            Publication: Afravi Research Group
          </p>
        </>
      );
    },
  },
  {
    title:
      "Approved and published: 3 logotypes selected by distinguished professors of the University of Art, Tehran",
    description: () => {
      return (
        <>
          <p className="text-[10px] text-ink/40 font-bold uppercase tracking-widest">
            Book Title: Negareh 3 Book
          </p>
          <p className="text-[10px] text-ink/40 font-bold uppercase tracking-widest">
            Publication: Rasm Group, Mazdak Kiani
          </p>
        </>
      );
    },
  },
];

export const EDUCATION_SKILLS = [
  "Adobe InDesign",
  "Adobe Illustrator",
  "Visual Arts",
  "Creative Direction",
  "Branding",
  "Layout Design",
];
