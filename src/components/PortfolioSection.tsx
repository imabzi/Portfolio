import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Layout,
  Monitor,
  PenTool,
  Play,
  Plus,
  Smartphone,
  X,
} from 'lucide-react';

type ThemeMode = 'light' | 'dark';
type PortfolioVersion = 'desktop' | 'app';
type PortfolioCategory = 'ui-ux' | 'branding' | 'video';

interface MainPortfolioCard {
  id: PortfolioCategory;
  title: string;
  description: string;
  icon: typeof Layout;
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  category?: string;
  filter?: string;
  prototypes?: {
    desktop: string | null;
    app: string | null;
  };
}

const MAIN_PORTFOLIO_CARDS: MainPortfolioCard[] = [
  {
    id: 'ui-ux',
    title: 'UI & UX',
    description: 'User-centered digital experiences.',
    icon: Layout,
  },
  {
    id: 'branding',
    title: 'Branding',
    description: 'Identity, storytelling, and visual systems.',
    icon: PenTool,
  },
  {
    id: 'video',
    title: 'Video',
    description: 'Motion, editing, and visual narratives.',
    icon: Play,
  },
];

const UIUX_PROJECTS: PortfolioProject[] = [
  {
    id: 'hamrahyar',
    title: 'HamrahYar',
    description:
      'HamrahYar is a service platform under MCI that allows users to request in-person support and technical assistance.',
    tags: ['Desktop', 'App'],
    prototypes: {
      desktop:
        'https://www.figma.com/proto/9BeUFOiy0A6b7qKEr00Jtm/MCI-HamrahYar-Desktop?node-id=1-3&starting-point-node-id=1%3A3&t=kQq66ZG8NTnsxcke-1',
      app: 'https://www.figma.com/proto/n8voCwlrIKJmIIrqJ1fT4M/MCI-HamrahYar-App?node-id=23-2866',
    },
  },
  {
    id: 'customer-club-ui',
    title: 'Customer Club',
    description:
      'A customer engagement platform focused on loyalty, rewards, and personalized experiences.',
    tags: ['Desktop', 'App'],
    prototypes: { desktop: null, app: null },
  },
  {
    id: 'microsoft-dynamics-ui',
    title: 'Microsoft Dynamics 365',
    description:
      'A business management suite designed for enterprise operations, automation, and workflow optimization.',
    tags: ['Desktop', 'App'],
    prototypes: { desktop: null, app: null },
  },
  {
    id: 'systan-ui',
    title: 'Systan',
    description:
      'A digital service ecosystem offering integrated tools for business operations and customer management.',
    tags: ['Desktop', 'App'],
    prototypes: { desktop: null, app: null },
  },
];

const BRANDING_PROJECTS: PortfolioProject[] = [
  {
    id: 'customer-club-branding',
    title: 'Customer Club',
    description: 'A loyalty and engagement platform with a modern identity system.',
    filter: 'Brand Identity',
  },
  {
    id: 'microsoft-dynamics-branding',
    title: 'Microsoft Dynamics 365',
    description: 'Enterprise-level visual system for business operations.',
    filter: 'Digital Design',
  },
  {
    id: 'systan-branding',
    title: 'Systan',
    description: 'A unified brand system for digital services.',
    filter: 'Brand Identity',
  },
  {
    id: 'brand-refresh',
    title: 'Brand Refresh 2024',
    description: 'Modern visual identity with cohesive brand guidelines.',
    filter: 'Brand Identity',
  },
  {
    id: 'packaging-design',
    title: 'Product Packaging',
    description: 'Elegant packaging design with sustainable materials focus.',
    filter: 'Print Design',
  },
  {
    id: 'social-media-branding',
    title: 'Social Media Campaign',
    description: 'Integrated visual strategy across all social platforms.',
    filter: 'Social Media',
  },
];

const VIDEO_PROJECTS: PortfolioProject[] = [
  {
    id: 'product-showcase',
    title: 'Product Showcase',
    description: 'A clean motion sequence highlighting product features.',
    filter: 'Product',
  },
  {
    id: 'social-media-promo',
    title: 'Social Media Promo',
    description: 'Fast-paced vertical video for social platforms.',
    filter: 'Social Media',
  },
  {
    id: 'advertising-spot',
    title: 'Advertising Spot',
    description: 'A cinematic commercial with storytelling focus.',
    filter: 'Advertising',
  },
  {
    id: 'motion-graphics',
    title: 'Motion Graphics Reel',
    description: 'Abstract motion design with dynamic transitions.',
    filter: 'Motion Graphics',
  },
  {
    id: 'brand-story',
    title: 'Brand Story Video',
    description: 'Narrative-driven video showcasing brand values and mission.',
    filter: 'Product',
  },
  {
    id: 'explainer-video',
    title: 'Explainer Video',
    description: 'Clear, engaging animation explaining service offerings.',
    filter: 'Product',
  },
];

const CATEGORY_FILTERS: Record<PortfolioCategory, string[]> = {
  'ui-ux': [],
  'branding': ['Brand Identity', 'Print Design', 'Digital Design', 'Social Media', 'Other'],
  'video': ['Product', 'Advertising', 'Social Media', 'Motion Graphics'],
};

const getProjectsByCategory = (category: PortfolioCategory): PortfolioProject[] => {
  switch (category) {
    case 'ui-ux':
      return UIUX_PROJECTS;
    case 'branding':
      return BRANDING_PROJECTS;
    case 'video':
      return VIDEO_PROJECTS;
    default:
      return [];
  }
};

const versionConfig: Record<PortfolioVersion, { label: string; icon: typeof Monitor }> = {
  desktop: { label: 'Desktop Version', icon: Monitor },
  app: { label: 'App Version', icon: Smartphone },
};

const getFigmaEmbedUrl = (url: string) =>
  `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`;

function ProjectCard({ project, theme }: { project: PortfolioProject; theme: ThemeMode }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`group overflow-hidden rounded-[20px] border ${
        theme === 'dark'
          ? 'border-white/10 bg-white/[0.04]'
          : 'border-ink/10 bg-white'
      }`}
    >
      <div
        className={`relative h-[180px] w-full overflow-hidden ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-white/[0.06] to-white/[0.02]'
            : 'bg-gradient-to-br from-ink/8 to-ink/3'
        }`}
      >
        <div className="flex h-full w-full items-center justify-center">
          <div className={`text-center ${theme === 'dark' ? 'text-white/40' : 'text-ink/30'}`}>
            <div className="text-3xl font-light">✦</div>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wider">Project Image</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="p-4">
        <h3 className={`mb-2 text-base font-black tracking-tight line-clamp-2 ${
          theme === 'dark' ? 'text-white' : 'text-ink'
        }`}>
          {project.title}
        </h3>
        <p className={`text-sm leading-5 line-clamp-2 ${
          theme === 'dark' ? 'text-white/54' : 'text-ink/55'
        }`}>
          {project.description}
        </p>
        {project.filter && (
          <div className="mt-3">
            <span className={`inline-flex rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${
              theme === 'dark'
                ? 'bg-white/8 text-white/55'
                : 'bg-ink/6 text-ink/48'
            }`}>
              {project.filter}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function PortfolioAccordionItem({
  project,
  expandedProjectId,
  selectedVersion,
  onToggle,
  onSelectVersion,
  theme,
}: {
  project: PortfolioProject;
  expandedProjectId: string | null;
  selectedVersion?: PortfolioVersion;
  onToggle: (projectId: string) => void;
  onSelectVersion: (projectId: string, version: PortfolioVersion) => void;
  theme: ThemeMode;
}) {
  const isExpanded = expandedProjectId === project.id;
  const activeUrl =
    selectedVersion && project.prototypes ? project.prototypes[selectedVersion] : null;

  return (
    <div
      className={`overflow-hidden rounded-[28px] border ${
        theme === 'dark'
          ? 'border-white/10 bg-white/[0.04]'
          : 'border-ink/8 bg-white/80'
      }`}
    >
      <button
        type="button"
        onClick={() => onToggle(project.id)}
        className="flex w-full items-start gap-4 px-5 py-5 text-left md:px-6"
      >
        <div className="min-w-0 flex-1">
          <h3 className="mb-2 text-xl font-black tracking-tight md:text-2xl">
            {project.title}
          </h3>
          <p className={`max-w-3xl text-sm leading-6 md:text-[15px] ${
            theme === 'dark' ? 'text-white/62' : 'text-ink/55'
          }`}>
            {project.description}
          </p>
        </div>
        <span
          className={`mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border transition-transform duration-300 ${
            theme === 'dark'
              ? 'border-white/10 bg-white/6 text-white/82'
              : 'border-ink/10 bg-white text-ink/82'
          } ${isExpanded ? 'rotate-45' : 'rotate-0'}`}
          aria-hidden="true"
        >
          <Plus className="h-5 w-5" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-current/8 px-5 pb-5 pt-5 md:px-6 md:pb-6">
              <div className="mb-5 flex flex-wrap gap-3">
                {(Object.keys(versionConfig) as PortfolioVersion[]).map((version) => {
                  const option = versionConfig[version];
                  const Icon = option.icon;
                  const isActive = selectedVersion === version;

                  return (
                    <button
                      key={version}
                      type="button"
                      onClick={() => onSelectVersion(project.id, version)}
                      className={`inline-flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-bold transition-all duration-200 ${
                        isActive
                          ? theme === 'dark'
                            ? 'border-white/30 bg-white text-[#0d1522]'
                            : 'border-ink bg-ink text-white'
                          : theme === 'dark'
                            ? 'border-white/10 bg-white/[0.03] text-white/80 hover:border-white/20 hover:bg-white/[0.08]'
                            : 'border-ink/10 bg-white text-ink/72 hover:border-ink/18 hover:bg-ink/[0.03]'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {option.label}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence mode="wait">
                {selectedVersion ? (
                  <motion.div
                    key={`${project.id}-${selectedVersion}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                  >
                    {activeUrl ? (
                      <div
                        className={`overflow-hidden rounded-[24px] border ${
                          theme === 'dark'
                            ? 'border-white/10 bg-[#08111d]'
                            : 'border-ink/10 bg-[#f3f6fb]'
                        }`}
                      >
                        <div className="aspect-[16/10] w-full">
                          <iframe
                            title={`${project.title} ${versionConfig[selectedVersion].label}`}
                            src={getFigmaEmbedUrl(activeUrl)}
                            className="h-full w-full"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    ) : (
                      <div
                        className={`rounded-[24px] border px-5 py-12 text-center ${
                          theme === 'dark'
                            ? 'border-white/10 bg-white/[0.03]'
                            : 'border-dashed border-ink/12 bg-ink/[0.02]'
                        }`}
                      >
                        <p className="text-base font-semibold">
                          {versionConfig[selectedVersion].label} prototype will be added soon.
                        </p>
                        <p className={`mt-2 text-sm ${
                          theme === 'dark' ? 'text-white/55' : 'text-ink/50'
                        }`}>
                          Replace the placeholder with a Figma prototype URL to enable the live embed.
                        </p>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key={`${project.id}-empty`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`rounded-[24px] border border-dashed px-5 py-10 text-center text-sm ${
                      theme === 'dark'
                        ? 'border-white/12 bg-white/[0.02] text-white/52'
                        : 'border-ink/12 bg-ink/[0.02] text-ink/50'
                    }`}
                  >
                    Select Desktop Version or App Version to load the prototype preview.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function UIUXPopup({
  isOpen,
  onClose,
  theme,
}: {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
}) {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(
    UIUX_PROJECTS[0].id
  );
  const [selectedVersions, setSelectedVersions] = useState<
    Record<string, PortfolioVersion | undefined>
  >({});

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) setExpandedProjectId(UIUX_PROJECTS[0].id);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute inset-0 bg-black/55 backdrop-blur-[14px]"
          aria-label="Close UI & UX popup"
        />

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className={`relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-[32px] border shadow-2xl ${
            theme === 'dark'
              ? 'border-white/10 bg-[#09111b]/95 text-white'
              : 'border-white/60 bg-[#f8f6f1]/95 text-ink'
          }`}
        >
          <div className={`flex items-start justify-between gap-6 border-b px-6 py-6 md:px-8 ${
            theme === 'dark' ? 'border-white/10' : 'border-ink/8'
          }`}>
            <div>
              <span className={`mb-3 inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] ${
                theme === 'dark'
                  ? 'bg-white/8 text-white/60'
                  : 'bg-ink/5 text-ink/45'
              }`}>
                Portfolio
              </span>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">UI & UX</h2>
              <p className={`mt-3 max-w-2xl text-sm leading-6 md:text-[15px] ${
                theme === 'dark' ? 'text-white/62' : 'text-ink/58'
              }`}>
                Browse the project list, expand any case, then choose Desktop Version or App Version to preview the Figma prototype.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border transition-transform duration-200 hover:rotate-90 ${
                theme === 'dark'
                  ? 'border-white/10 bg-white/[0.04] text-white/80'
                  : 'border-ink/10 bg-white/75 text-ink/80'
              }`}
              aria-label="Close UI & UX popup"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="overflow-y-auto px-4 py-4 md:px-6 md:py-6">
            <div className="space-y-4">
              {UIUX_PROJECTS.map((project) => (
                <PortfolioAccordionItem
                  key={project.id}
                  project={project}
                  expandedProjectId={expandedProjectId}
                  selectedVersion={selectedVersions[project.id]}
                  onToggle={(projectId) =>
                    setExpandedProjectId((current) =>
                      current === projectId ? null : projectId
                    )
                  }
                  onSelectVersion={(projectId, version) => {
                    setExpandedProjectId(projectId);
                    setSelectedVersions((current) => ({
                      ...current,
                      [projectId]: version,
                    }));
                  }}
                  theme={theme}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function CategoryPopup({
  isOpen,
  onClose,
  category,
  theme,
}: {
  isOpen: boolean;
  onClose: () => void;
  category: PortfolioCategory;
  theme: ThemeMode;
}) {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const categoryTitle = MAIN_PORTFOLIO_CARDS.find((c) => c.id === category)?.title || '';
  const projects = getProjectsByCategory(category);
  const filters = CATEGORY_FILTERS[category];

  const filteredProjects =
    selectedFilter && category !== 'ui-ux'
      ? projects.filter((p) => p.filter === selectedFilter)
      : projects;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute inset-0 bg-black/55 backdrop-blur-[14px]"
          aria-label={`Close ${categoryTitle} popup`}
        />

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className={`relative z-10 flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-[32px] border shadow-2xl ${
            theme === 'dark'
              ? 'border-white/10 bg-[#09111b]/95 text-white'
              : 'border-white/60 bg-[#f8f6f1]/95 text-ink'
          }`}
        >
          <div className={`flex items-start justify-between gap-6 border-b px-6 py-6 md:px-8 ${
            theme === 'dark' ? 'border-white/10' : 'border-ink/8'
          }`}>
            <div>
              <span className={`mb-3 inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] ${
                theme === 'dark'
                  ? 'bg-white/8 text-white/60'
                  : 'bg-ink/5 text-ink/45'
              }`}>
                Portfolio
              </span>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                {categoryTitle}
              </h2>
              <p className={`mt-3 max-w-2xl text-sm leading-6 md:text-[15px] ${
                theme === 'dark' ? 'text-white/62' : 'text-ink/58'
              }`}>
                Explore our curated collection of {categoryTitle.toLowerCase()} projects.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border transition-transform duration-200 hover:rotate-90 ${
                theme === 'dark'
                  ? 'border-white/10 bg-white/[0.04] text-white/80'
                  : 'border-ink/10 bg-white/75 text-ink/80'
              }`}
              aria-label={`Close ${categoryTitle} popup`}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {filters.length > 0 && (
            <div className={`flex flex-wrap items-center justify-center gap-3 border-b px-6 py-5 md:px-8 ${
              theme === 'dark' ? 'border-white/10' : 'border-ink/8'
            }`}>
              <button
                type="button"
                onClick={() => setSelectedFilter(null)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition-all duration-200 border ${
                  selectedFilter === null
                    ? theme === 'dark'
                      ? 'border-white/30 bg-white text-[#0d1522]'
                      : 'border-ink bg-ink text-white'
                    : theme === 'dark'
                      ? 'border-white/10 bg-white/[0.03] text-white/80 hover:border-white/20 hover:bg-white/[0.08]'
                      : 'border-ink/10 bg-white text-ink/72 hover:border-ink/18 hover:bg-ink/[0.03]'
                }`}
              >
                All
              </button>

              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setSelectedFilter(filter)}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition-all duration-200 border ${
                    selectedFilter === filter
                      ? theme === 'dark'
                        ? 'border-white/30 bg-white text-[#0d1522]'
                        : 'border-ink bg-ink text-white'
                      : theme === 'dark'
                        ? 'border-white/10 bg-white/[0.03] text-white/80 hover:border-white/20 hover:bg-white/[0.08]'
                        : 'border-ink/10 bg-white text-ink/72 hover:border-ink/18 hover:bg-ink/[0.03]'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          )}

          <div className="overflow-y-auto px-4 py-6 md:px-6 md:py-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: idx * 0.05,
                    ease: 'easeOut',
                  }}
                >
                  <ProjectCard project={project} theme={theme} />
                </motion.div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className={`flex flex-col items-center justify-center rounded-[24px] border py-12 ${
                theme === 'dark'
                  ? 'border-white/10 bg-white/[0.03]'
                  : 'border-ink/10 bg-ink/[0.02]'
              }`}>
                <p className="text-base font-semibold">No projects found</p>
                <p className={`mt-2 text-sm ${
                  theme === 'dark' ? 'text-white/55' : 'text-ink/50'
                }`}>
                  Try adjusting your filter selection.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function PortfolioSection({
  copy,
  theme,
}: {
  copy: {
    sections: {
      portfolio: string;
      portfolioDescription: string;
    };
  };
  theme: ThemeMode;
}) {
  const [activePopup, setActivePopup] = useState<PortfolioCategory | null>(null);

  return (
    <>
      <section
        id="portfolio"
        className="mx-auto w-full max-w-[92%] px-5 pb-18 pt-[40px] md:max-w-[90%] md:px-8 md:pb-20 md:pt-[64px] xl:max-w-[1200px] xl:px-12 xl:pt-[80px]"
      >
        <div className="mb-8">
          <h2 className="mb-4 text-6xl font-black tracking-tighter">
            {copy.sections.portfolio}
          </h2>
          <div className="mb-3 h-[2px] w-[64px] rounded-full bg-ink/10" />
          <p className="mt-2 max-w-2xl text-lg font-light leading-relaxed text-ink/40">
            {copy.sections.portfolioDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {MAIN_PORTFOLIO_CARDS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActivePopup(project.id)}
              className="group cursor-pointer"
            >
              <div className="relative flex h-auto flex-col items-center justify-center overflow-hidden rounded-[20px] border border-white/18 bg-white/10 p-5 backdrop-blur-[20px] transition-all duration-250 ease-out hover:-translate-y-[2px] hover:scale-[1.02] hover:border-white/28 md:h-[220px] md:p-6 xl:h-[260px] xl:p-7">
                <div className="mb-4 transition-transform duration-250 ease-out group-hover:-translate-y-[3px]">
                  <project.icon
                    className="h-[32px] w-[32px] text-ink/10 transition-colors duration-250 ease-out group-hover:text-accent md:h-[36px] md:w-[36px] xl:h-[42px] xl:w-[42px]"
                    strokeWidth={1}
                  />
                </div>

                <div className="relative z-10 text-center">
                  <h3 className="mb-2 text-[18px] font-black tracking-tight transition-colors duration-250 ease-out group-hover:text-accent md:text-[20px] xl:text-[22px]">
                    {project.title}
                  </h3>
                  <p className="mx-auto max-w-[200px] translate-y-2 text-[14px] font-medium leading-[1.4] text-ink/0 opacity-0 transition-all duration-250 ease-out group-hover:translate-y-0 group-hover:text-ink/60 group-hover:opacity-100 md:text-[15px] xl:text-[16px]">
                    {project.description}
                  </p>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-[20px] border border-white/5" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <UIUXPopup
        isOpen={activePopup === 'ui-ux'}
        onClose={() => setActivePopup(null)}
        theme={theme}
      />
      <CategoryPopup
        isOpen={activePopup === 'branding'}
        onClose={() => setActivePopup(null)}
        category="branding"
        theme={theme}
      />
      <CategoryPopup
        isOpen={activePopup === 'video'}
        onClose={() => setActivePopup(null)}
        category="video"
        theme={theme}
      />
    </>
  );
}
