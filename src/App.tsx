import React, { useState, useEffect, useMemo } from 'react';
import { 
  X, 
  Menu,
  ChevronRight, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Loader2,
  Building2, 
  FolderGit2, 
  Mail, 
  MapPin, 
  Sun, 
  Moon, 
  Download, 
  Check, 
  ExternalLink,
  GitCommit,
  GitPullRequest,
  Star,
  ArrowRight,
  Search
} from 'lucide-react';

import { GitHubContributionGraph } from './components/GitHubContributionGraph';

import profileImg from './assets/profile1.jpg';
import stiLogo from './assets/sti-logo.png';
import lagroLogo from './assets/lagro-logo.png';
import centriveLogo from './assets/centrive-logo.png';

// Project Screenshots
import projEscholar from './assets/projects/escholar.png';
import projLekatsu from './assets/projects/lekatsu.png';
import projSafepoint from './assets/projects/safepoint.png';
import projJonbrix from './assets/projects/jonbrix.png';
import projElibrary from './assets/projects/elibrary.png';
import projMusicplayer from './assets/projects/musicplayer.png';
import projEcommerce from './assets/projects/ecommerce.png';

// Certificates
import certCtf from './assets/certificates/cert4.png';
import certSap from './assets/certificates/cert5.jpg';
import certOracle from './assets/certificates/cert3.jpg';
import certEducba from './assets/certificates/cert2.jpg';
import certNstp from './assets/certificates/cert1.jpg';
import certResearch from './assets/certificates/cert9.png';
import certRescue from './assets/certificates/cert10.png';
import certPython from './assets/certificates/cert8.jpg';
import certCanva from './assets/certificates/cert7.jpg';
import certEgov from './assets/certificates/certegov.png';
import certEgovTop30 from './assets/certificates/certegov-top30.png';
import certEgovAppearance from './assets/certificates/certegov-appearance.png';

// Official Brand SVG Icon Imports
import jsIcon from './assets/icons/javascript.svg';
import tsIcon from './assets/icons/typescript.svg';
import javaIcon from './assets/icons/java.svg';
import csharpIcon from './assets/icons/csharp.svg';
import pythonIcon from './assets/icons/python.svg';
import phpIcon from './assets/icons/php.svg';
import reactIcon from './assets/icons/react.svg';
import viteIcon from './assets/icons/vite.svg';
import tailwindIcon from './assets/icons/tailwindcss.svg';
import html5Icon from './assets/icons/html5.svg';
import css3Icon from './assets/icons/css3.svg';
import dotnetIcon from './assets/icons/dotnet.svg';
import postgresIcon from './assets/icons/postgresql.svg';
import mssqlIcon from './assets/icons/mssql.svg';
import mysqlIcon from './assets/icons/mysql.svg';
import sapIcon from './assets/icons/sap.svg';
import gitIcon from './assets/icons/git.svg';
import githubIcon from './assets/icons/github.svg';
import figmaIcon from './assets/icons/figma.svg';
import wordpressIcon from './assets/icons/wordpress.svg';
import renderIcon from './assets/icons/render.svg';
import vercelIcon from './assets/icons/vercel.svg';
import netlifyIcon from './assets/icons/netlify.svg';
import androidStudioIcon from './assets/icons/androidstudio.svg';
import supabaseIcon from './assets/icons/supabase.svg';
import vscodeIcon from './assets/icons/vscode.svg';
import microsoftIcon from './assets/icons/microsoft.svg';
import canvaIcon from './assets/icons/canva.svg';
import framerIcon from './assets/icons/framer.svg';
import laravelIcon from './assets/icons/laravel.svg';
import postmanIcon from './assets/icons/postman.svg';
import unityIcon from './assets/icons/unity.svg';

// Social Icon SVGs
function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function DiscordIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18.89 4.99a18.25 18.25 0 0 0-4.52-1.4 0.1 0.1 0 0 0-.1.05 12.78 12.78 0 0 0-.57 1.18 16.89 16.89 0 0 0-5.4 0 13.06 13.06 0 0 0-.58-1.18 0.1 0.1 0 0 0-.1-.05 18.25 18.25 0 0 0-4.52 1.4 0.1 0.1 0 0 0-.05.04C.9 9.94.3 14.75.7 19.5a0.1 0.1 0 0 0 .04.08 18.4 18.4 0 0 0 5.54 2.8 0.1 0.1 0 0 0 .11-.04 13.2 13.2 0 0 0 1.14-1.85 0.1 0.1 0 0 0-.06-.14 12.16 12.16 0 0 1-1.74-.83 0.1 0.1 0 0 1 0-.17c.12-.09.23-.18.34-.28a0.1 0.1 0 0 1 .1-.01 13.14 13.14 0 0 0 11.54 0 0.1 0.1 0 0 1 .1.01c.11.1.22.19.34.28a0.1 0.1 0 0 1 0 .17 11.83 11.83 0 0 1-1.74.83 0.1 0.1 0 0 0-.06.14 13.6 13.6 0 0 0 1.14 1.85 0.1 0.1 0 0 0 .11.04 18.35 18.35 0 0 0 5.55-2.8 0.1 0.1 0 0 0 .04-.08c.5-5.5-.8-10.3-2.4-14.47a0.1 0.1 0 0 0-.05-.04zM8.5 15.5c-1 0-1.8-0.9-1.8-2s0.8-2 1.8-2 1.8 0.9 1.8 2-0.8 2-1.8 2zm7 0c-1 0-1.8-0.9-1.8-2s0.8-2 1.8-2 1.8 0.9 1.8 2-0.8 2-1.8 2z" />
    </svg>
  );
}

const LINKEDIN_URL = "https://www.linkedin.com/in/justin-allen-azucena-1093b2299/";
const GITHUB_USERNAME = "Prince-Rim";
const GITHUB_URL = "https://github.com/Prince-Rim";

interface TechSkillItem {
  name: string;
  category: 'programming' | 'frontend' | 'backend' | 'database' | 'design' | 'microsoft' | 'tools';
  categoryLabel: string;
  iconSrc: string;
  description?: string;
  badge?: string;
}

const skillsData: TechSkillItem[] = [
  // Programming Languages
  {
    name: 'JavaScript',
    category: 'programming',
    categoryLabel: 'Language',
    iconSrc: jsIcon,
    description: 'Modern ES6+, Asynchronous JS, DOM APIs, and dynamic client logic.',
    badge: 'Core'
  },
  {
    name: 'TypeScript',
    category: 'programming',
    categoryLabel: 'Language',
    iconSrc: tsIcon,
    description: 'Type-safe scalable development, Generics, interfaces, and clean patterns.',
    badge: 'Core'
  },
  {
    name: 'Python',
    category: 'programming',
    categoryLabel: 'Language',
    iconSrc: pythonIcon,
    description: 'Applied machine learning models, forecasting scripts, and backend automation.',
    badge: 'AI & Data'
  },
  {
    name: 'C# / .NET',
    category: 'programming',
    categoryLabel: 'Language',
    iconSrc: csharpIcon,
    description: 'Enterprise object-oriented engineering, LINQ, and robust backend logic.',
    badge: 'Enterprise'
  },
  {
    name: 'Java (OOP)',
    category: 'programming',
    categoryLabel: 'Language',
    iconSrc: javaIcon,
    description: 'Desktop software development, Swing GUI, JDBC, collections, and algorithms.',
    badge: 'Desktop'
  },
  {
    name: 'PHP',
    category: 'programming',
    categoryLabel: 'Language',
    iconSrc: phpIcon,
    description: 'Server-side application logic, MVC structures, session auth, and APIs.',
    badge: 'Web'
  },

  // Frontend
  {
    name: 'React 19',
    category: 'frontend',
    categoryLabel: 'Frontend',
    iconSrc: reactIcon,
    description: 'Component architecture, modern hooks, state management, and optimized render cycles.',
    badge: 'Preferred'
  },
  {
    name: 'Vite',
    category: 'frontend',
    categoryLabel: 'Frontend',
    iconSrc: viteIcon,
    description: 'Fast modern build tool with instant HMR and Rollup production bundling.',
    badge: 'Build Tool'
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    categoryLabel: 'Frontend',
    iconSrc: tailwindIcon,
    description: 'Utility-first modern styling, responsive layouts, and dark theme systems.',
    badge: 'Styling'
  },
  {
    name: 'HTML5',
    category: 'frontend',
    categoryLabel: 'Frontend',
    iconSrc: html5Icon,
    description: 'Semantic markup, accessibility standards, audio APIs, and SEO fundamentals.',
    badge: 'Standard'
  },
  {
    name: 'CSS3',
    category: 'frontend',
    categoryLabel: 'Frontend',
    iconSrc: css3Icon,
    description: 'Responsive flexbox, CSS grid, transitions, and keyframe animations.',
    badge: 'Standard'
  },
  {
    name: 'Framer',
    category: 'frontend',
    categoryLabel: 'Frontend',
    iconSrc: framerIcon,
    description: 'Interactive component motion and polished micro-interaction prototypes.',
    badge: 'Motion'
  },

  // Backend & BaaS
  {
    name: 'ASP.NET Core',
    category: 'backend',
    categoryLabel: 'Backend',
    iconSrc: dotnetIcon,
    description: 'High-performance MVC architectures, Razor Pages, RESTful web services, and auth.',
    badge: 'Enterprise'
  },
  {
    name: 'Laravel',
    category: 'backend',
    categoryLabel: 'Backend',
    iconSrc: laravelIcon,
    description: 'PHP framework with Eloquent ORM, Blade templating, routing, and migrations.',
    badge: 'MVC'
  },
  {
    name: 'Supabase',
    category: 'backend',
    categoryLabel: 'Backend',
    iconSrc: supabaseIcon,
    description: 'Backend-as-a-Service with Postgres, Auth, real-time subscriptions, and Storage.',
    badge: 'Cloud BaaS'
  },

  // Databases
  {
    name: 'PostgreSQL',
    category: 'database',
    categoryLabel: 'Database',
    iconSrc: postgresIcon,
    description: 'Relational database with JSONB support, indexing, and ACID compliance.',
    badge: 'SQL'
  },
  {
    name: 'SQL Server',
    category: 'database',
    categoryLabel: 'Database',
    iconSrc: mssqlIcon,
    description: 'T-SQL stored procedures, triggers, views, relational modeling, and SSMS.',
    badge: 'Enterprise'
  },
  {
    name: 'MySQL',
    category: 'database',
    categoryLabel: 'Database',
    iconSrc: mysqlIcon,
    description: 'Relational data management, transactional integrity, and query tuning.',
    badge: 'SQL'
  },

  // Developer Tools & Cloud
  {
    name: 'Git',
    category: 'tools',
    categoryLabel: 'Tools',
    iconSrc: gitIcon,
    description: 'Distributed version control, branch management, stash, and rebasing workflows.',
    badge: 'VCS'
  },
  {
    name: 'GitHub',
    category: 'tools',
    categoryLabel: 'Tools',
    iconSrc: githubIcon,
    description: 'Pull requests, code review, GitHub Actions CI/CD, and repository management.',
    badge: 'DevOps'
  },
  {
    name: 'VS Code',
    category: 'tools',
    categoryLabel: 'Tools',
    iconSrc: vscodeIcon,
    description: 'Primary code editor with custom extensions, debugger, and terminal integration.',
    badge: 'IDE'
  },
  {
    name: 'Postman',
    category: 'tools',
    categoryLabel: 'Tools',
    iconSrc: postmanIcon,
    description: 'API testing, automated test collections, and JSON endpoint verification.',
    badge: 'Testing'
  },
  {
    name: 'SAP S/4HANA',
    category: 'tools',
    categoryLabel: 'Tools',
    iconSrc: sapIcon,
    description: 'Enterprise resource planning across SD, MM, PP, and FI modules.',
    badge: 'ERP Certified'
  },
  {
    name: 'Vercel',
    category: 'tools',
    categoryLabel: 'Tools',
    iconSrc: vercelIcon,
    description: 'Edge deployments, continuous preview pipelines, and static web hosting.',
    badge: 'Hosting'
  },
  {
    name: 'Render',
    category: 'tools',
    categoryLabel: 'Tools',
    iconSrc: renderIcon,
    description: 'Cloud hosting, containerized web services, and managed database hosting.',
    badge: 'Cloud'
  },
  {
    name: 'Netlify',
    category: 'tools',
    categoryLabel: 'Tools',
    iconSrc: netlifyIcon,
    description: 'Continuous web deployment, serverless functions, and global CDN delivery.',
    badge: 'Cloud'
  },
  {
    name: 'WordPress',
    category: 'tools',
    categoryLabel: 'Tools',
    iconSrc: wordpressIcon,
    description: 'Content management, custom templates, plugins, and site delivery.',
    badge: 'CMS'
  },
  {
    name: 'Android Studio',
    category: 'tools',
    categoryLabel: 'Tools',
    iconSrc: androidStudioIcon,
    description: 'Android application development, Gradle configurations, and emulation testing.',
    badge: 'Mobile'
  },
  {
    name: 'Unity 3D',
    category: 'tools',
    categoryLabel: 'Tools',
    iconSrc: unityIcon,
    description: 'Interactive 3D/2D game development, C# scripting, and physics simulation.',
    badge: 'Engine'
  },
  {
    name: 'Figma',
    category: 'design',
    categoryLabel: 'Design',
    iconSrc: figmaIcon,
    description: 'User interface wireframing, component design systems, and clickable prototypes.',
    badge: 'UI/UX'
  },
  {
    name: 'Canva',
    category: 'design',
    categoryLabel: 'Design',
    iconSrc: canvaIcon,
    description: 'Visual presentations, graphic documentation, and promotional layout design.',
    badge: 'Creative'
  },
  {
    name: 'Microsoft 365',
    category: 'microsoft',
    categoryLabel: 'Productivity',
    iconSrc: microsoftIcon,
    description: 'Spreadsheet data analysis in Excel, documentation in Word, and pitch decks.',
    badge: 'Office'
  }
];

interface Project {
  title: string;
  category: string;
  badge: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  highlight?: boolean;
}

function ProjectCard({ 
  proj, 
  isDark 
}: { 
  proj: Project; 
  isDark: boolean; 
}) {
  return (
    <div
      className={`rounded-xl border transition-all duration-200 flex flex-col justify-between overflow-hidden group ${
        isDark 
          ? 'bg-zinc-900/30 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/50' 
          : 'bg-white border-zinc-200/90 hover:border-zinc-300 hover:shadow-xs'
      }`}
    >
      <div>
        {/* Screenshot Frame with Minimal Top Bar */}
        <div className={`relative aspect-[16/10] w-full overflow-hidden border-b ${
          isDark ? 'bg-zinc-950 border-zinc-800/70' : 'bg-zinc-100 border-zinc-200/70'
        }`}>
          {/* Subtle Window Dot Indicators */}
          <div className={`absolute top-0 inset-x-0 h-6 px-3 flex items-center justify-between z-10 backdrop-blur-xs border-b ${
            isDark ? 'bg-zinc-950/80 border-zinc-800/60' : 'bg-zinc-50/80 border-zinc-200/60'
          }`}>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-zinc-600/60" />
              <span className="w-2 h-2 rounded-full bg-zinc-600/60" />
              <span className="w-2 h-2 rounded-full bg-zinc-600/60" />
            </div>
            <span className={`text-[10px] font-mono truncate max-w-[140px] ${
              isDark ? 'text-zinc-500' : 'text-zinc-400'
            }`}>
              {proj.title.toLowerCase().replace(/\s+/g, '')}.app
            </span>
            <div className="w-6" />
          </div>

          <img 
            src={proj.image} 
            alt={proj.title} 
            className="w-full h-full object-cover object-top pt-6 group-hover:scale-[1.02] transition-transform duration-300 ease-out" 
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className={`text-[10px] font-mono uppercase tracking-wider font-medium ${
              isDark ? 'text-zinc-400' : 'text-zinc-500'
            }`}>
              {proj.category}
            </span>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
              isDark 
                ? 'bg-zinc-900 border-zinc-800 text-zinc-300' 
                : 'bg-zinc-100 border-zinc-200 text-zinc-700'
            }`}>
              {proj.badge}
            </span>
          </div>

          <h3 className={`text-base font-semibold tracking-tight mb-2 transition-colors ${
            isDark ? 'text-zinc-100 group-hover:text-white' : 'text-zinc-900 group-hover:text-zinc-950'
          }`}>
            {proj.title}
          </h3>

          <p className={`text-xs leading-relaxed line-clamp-3 mb-4 ${
            isDark ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            {proj.description}
          </p>
        </div>
      </div>

      <div className="p-5 pt-0">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {proj.tags.map(t => (
            <span key={t} className={`text-[10px] px-2 py-0.5 rounded font-mono border ${
              isDark 
                ? 'bg-zinc-900/60 text-zinc-400 border-zinc-800/80' 
                : 'bg-zinc-50 text-zinc-600 border-zinc-200'
            }`}>
              {t}
            </span>
          ))}
        </div>

        <div className={`pt-3 border-t flex items-center justify-between text-xs ${
          isDark ? 'border-zinc-800/80' : 'border-zinc-200'
        }`}>
          {proj.githubUrl && (
            <a
              href={proj.githubUrl}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1.5 font-medium text-xs px-3 py-1.5 rounded-lg border transition-all ${
                isDark 
                  ? 'bg-zinc-900 text-zinc-200 border-zinc-800 hover:bg-zinc-800 hover:text-white' 
                  : 'bg-zinc-100 text-zinc-800 border-zinc-200 hover:bg-zinc-200 hover:text-zinc-900'
              }`}
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source</span>
              <ArrowRight className="w-3 h-3 opacity-60" />
            </a>
          )}
          {proj.liveUrl && (
            <a
              href={proj.liveUrl}
              target="_blank"
              rel="noreferrer"
              className={`text-xs font-medium hover:underline flex items-center gap-1 ${
                isDark ? 'text-zinc-300' : 'text-zinc-700'
              }`}
            >
              <ExternalLink className="w-3 h-3" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

interface CertificateGalleryItem {
  title: string;
  image: string;
  caption?: string;
  date?: string;
}

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
  category: string;
  gallery?: CertificateGalleryItem[];
}

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  honors?: string;
  details: string;
  skills: string[];
  logo: string;
  ojt?: {
    company: string;
    description: string;
    logo: string;
  };
}

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved === 'dark' || saved === 'light') return saved;
      if (window.matchMedia('(prefers-color-scheme: light)').matches) return 'light';
    }
    return 'dark';
  });

  // Sync theme with HTML root class and body background
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      document.body.style.backgroundColor = '#09090b';
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      document.body.style.backgroundColor = '#fafafa';
    }
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch {}
  }, [theme]);

  const [activeTechCategory, setActiveTechCategory] = useState<string>('all');
  const [techSearchQuery, setTechSearchQuery] = useState<string>('');
  const [activeProjectFilter, setActiveProjectFilter] = useState<string>('All');
  const [activeNavSection, setActiveNavSection] = useState<string>('about');
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [activeCertDocIndex, setActiveCertDocIndex] = useState<number>(0);
  const [contactData, setContactData] = useState({ name: '', email: '', message: '' });
  const [contactStatus, setContactStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [contactFeedback, setContactFeedback] = useState<string>('');
  const [discordCopied, setDiscordCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Subtle intersection observer for reveal on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Scrollspy for active navbar indicator
  useEffect(() => {
    const sections = ['about', 'skills', 'projects', 'github-activity', 'experience', 'certificates', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveNavSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const copyDiscord = () => {
    navigator.clipboard.writeText('spieler02.');
    setDiscordCopied(true);
    setTimeout(() => setDiscordCopied(false), 2000);
  };

  const interests = [
    'Full-Stack Software Engineering',
    'Enterprise .NET & Distributed Architectures',
    'Applied Machine Learning & Forecasting Models',
    'Relational Database Modeling & Optimization',
    'GovTech & Biometric API Integrations',
    'Enterprise ERP Workflows (SAP S/4HANA)'
  ];

  const education: EducationItem[] = [
    {
      degree: 'Bachelor of Science in Information Technology (4th Year)',
      institution: 'STI Academic Center Novaliches',
      period: '2023 – Present (Graduating 2026)',
      honors: 'SAP Certified & Capstone Lead Programmer',
      details: 'Specializing in enterprise business systems, full-stack web architectures, demand forecasting algorithms, and government API integrations.',
      skills: ['Full-Stack Web', 'Enterprise ERP (SAP)', 'Software Architecture', 'Applied AI'],
      logo: stiLogo
    },
    {
      degree: 'Junior & Senior High School (TVL - ICT Track)',
      institution: 'Lagro High School',
      period: '2017 – 2023',
      honors: 'Graduated with High Honors',
      details: 'Completed Junior High School (2017–2021) and Senior High School TVL-ICT track with High Honors (2021–2023). Completed Work Immersion practicum at Centrive Technology. Author & Lead Developer of the automated "Classroom Attendance System with QR Code Recognition" presented in the TVL-ICT Research Congress 2023.',
      skills: ['Centrive Tech OJT', 'Java Fundamentals', 'Algorithms', 'High Honors'],
      logo: lagroLogo,
      ojt: {
        company: 'Centrive Technology',
        description: 'Completed Work Immersion / On-the-Job Training practicum in practical coding and software workflows.',
        logo: centriveLogo
      }
    }
  ];

  const projects: Project[] = [
    {
      title: 'eScholar',
      category: 'Web / AI App',
      badge: 'eGov Hackathon 2026',
      description: 'AI-Powered Student Scholarship Finder, Eligibility Engine, & Application Management Portal built for the eGov Hackathon. Features OCR document parsing, NIDAS biometric face liveness eKYC, eGov PH SMS 2FA, and institutional reviewer workflows.',
      tags: ['React 19', 'Vite', 'Tailwind CSS', 'AI / OCR', 'GovTech APIs'],
      image: projEscholar,
      githubUrl: 'https://github.com/Prince-Rim/eScholar',
      highlight: true
    },
    {
      title: 'LeKatsuMNL',
      category: 'Enterprise / AI',
      badge: 'Hybrid SSA-LSTM AI',
      description: 'Enterprise sales and inventory management web application for restaurant operations utilizing a hybrid Single-Spectrum Analysis + Long Short-Term Memory neural network for predictive food demand forecasting.',
      tags: ['ASP.NET Core', 'C#', 'Razor Pages', 'LSTM AI', 'SQL Server'],
      image: projLekatsu,
      githubUrl: 'https://github.com/Prince-Rim/LeKatsuMNL',
      highlight: true
    },
    {
      title: 'SafePoint',
      category: 'Web App',
      badge: 'Community Safety',
      description: 'Real-time, interactive map-based community safety and hazard mapping platform with geotagged incident reports, emergency broadcasting, and community hazard alerts.',
      tags: ['JavaScript', 'Map API', 'Real-Time', 'Tailwind CSS'],
      image: projSafepoint,
      githubUrl: 'https://github.com/Prince-Rim/SafePoint'
    },
    {
      title: 'JonBrix POS & Inventory',
      category: 'Desktop & Java',
      badge: 'Client Production',
      description: 'Desktop point of sale and inventory management software built for JonBrix Motosupply with receipt printing, Apache POI spreadsheet export, and transactional MySQL database.',
      tags: ['Java', 'Swing / AWT', 'MySQL', 'Apache POI'],
      image: projJonbrix,
      githubUrl: 'https://github.com/Prince-Rim/Java-Point-Of-Sales-System'
    },
    {
      title: 'E-Library System',
      category: 'Desktop & Java',
      badge: 'Database Management',
      description: 'Desktop cataloging platform for managing book collections, research theses, series tracking, borrower records, and transactional loan histories.',
      tags: ['Java', 'NetBeans', 'MySQL / SQL Server', 'JDBC'],
      image: projElibrary,
      githubUrl: 'https://github.com/Prince-Rim/Library-Management'
    },
    {
      title: 'Music Player',
      category: 'Web App',
      badge: 'Interactive UI',
      description: 'Responsive web audio streaming player with dynamic playlist queueing, spectrum controls, waveform visualization, and clean UI.',
      tags: ['HTML5 Audio', 'JavaScript', 'CSS3'],
      image: projMusicplayer,
      githubUrl: 'https://github.com/Prince-Rim/Music-Player'
    },
    {
      title: 'Multi-Platform E-Commerce Shop',
      category: 'Web App',
      badge: 'Full-Stack E-Commerce',
      description: 'Dynamic e-commerce shopping platform with product catalog filtering, interactive cart state, checkout workflow, and multi-backend data architecture.',
      tags: ['JavaScript', 'PHP', 'MySQL', 'CSS3'],
      image: projEcommerce,
      githubUrl: 'https://github.com/Prince-Rim/JavaScript_E-Commerce'
    }
  ];

  const certificates: Certificate[] = [
    {
      title: 'eGov PH Hackathon 2026 — Top 30 Finalist Recognition',
      issuer: 'Department of Information and Communications Technology (DICT)',
      date: 'September 2026',
      image: certEgovTop30,
      description: 'Official Certificate of Recognition awarded by DICT Undersecretary David L. Almirol Jr. to Team Fakebitz for qualifying as one of the Top 30 Finalist Teams nationwide at the eGovPH Hackathon 2026 for developing eScholar. Includes verified individual Certificate of Appreciation and Certificate of Appearance for the ceremonial launch of eGovAI at The Manila Hotel.',
      category: 'Hackathon',
      gallery: [
        {
          title: 'Top 30 Finalist Recognition',
          image: certEgovTop30,
          caption: 'Official Certificate of Recognition — Top 30 Finalist Teams awarded to Team Fakebitz (Justin Allen Azucena) by DICT Undersecretary David L. Almirol Jr. on September 21, 2026.',
          date: 'September 21, 2026'
        },
        {
          title: 'Certificate of Appreciation',
          image: certEgov,
          caption: 'Certificate of Appreciation awarded to Justin Allen Azucena for invaluable contribution and active engagement in the eGovPH Hackathon 2026 held at SMX Convention Center Aura on July 22, 2026.',
          date: 'July 22, 2026'
        },
        {
          title: 'Certificate of Appearance',
          image: certEgovAppearance,
          caption: 'Certificate of Appearance certifying Justin Allen T. Azucena of FakeBitz - STI College Novaliches attending the Ceremonial Launching of eGovAI in eGovPH SuperApp at The Manila Hotel on September 21, 2026.',
          date: 'September 21, 2026'
        }
      ]
    },
    {
      title: 'Single Day Masterclass with Python',
      issuer: 'Athena Global Education / UniAthena',
      date: 'November 3, 2023',
      image: certPython,
      description: 'Webinar masterclass covering Python fundamentals, scripting, automation, and real-world practical development with Assistant Professor Manideepak Choudhry.',
      category: 'Programming'
    },
    {
      title: 'University Capture the Flag (CTF) Preliminary Round',
      issuer: 'Trend Micro / TrendLabs',
      date: 'August 22, 2025',
      image: certCtf,
      description: 'Cybersecurity competition testing web security, vulnerability assessment, cryptography, and network forensics.',
      category: 'Security'
    },
    {
      title: 'SAP S/4HANA (SD, MM, PP, FI, CO Modules) using Global Bike',
      issuer: 'SAP University Alliances & STI College',
      date: 'Jan - Jun 2025',
      image: certSap,
      description: 'Hands-on enterprise resource planning across Sales & Distribution, Materials Management, Production, and Financial Accounting.',
      category: 'Enterprise'
    },
    {
      title: 'Java Fundamentals Course Completion',
      issuer: 'Oracle Academy',
      date: 'June 19, 2024',
      image: certOracle,
      description: 'Core Java programming principles, Object-Oriented Design (OOP), data structures, and algorithmic logic.',
      category: 'Software'
    },
    {
      title: 'Upgrading to Java 8 Tutorials',
      issuer: 'EDUCBA',
      date: 'October 3, 2022',
      image: certEducba,
      description: 'Advanced functional programming in Java, Lambda expressions, Streams API, and new Date/Time concurrency APIs.',
      category: 'Software'
    },
    {
      title: 'Classroom Attendance System with QR Code Recognition',
      issuer: 'Lagro High School Research Congress',
      date: 'June 10, 2023',
      image: certResearch,
      description: 'Author & Lead Developer of the automated QR Code Attendance System under the TVL-ICT Research Congress.',
      category: 'Academic'
    },
    {
      title: 'Canva Graphic Design & Visual Communication Masterclass',
      issuer: 'Canva & Tech Community',
      date: '2023',
      image: certCanva,
      description: 'Digital visual design, presentation development, UI asset creation, and brand storytelling techniques.',
      category: 'Design'
    },
    {
      title: 'Disaster Emergency Management & CPR Practicum Training',
      issuer: 'Rescue 177 Training Center & STI Novaliches',
      date: 'December 14, 2023',
      image: certRescue,
      description: 'Disaster emergency preparedness, CPR hands-compression training, and mass casualty evacuation simulation.',
      category: 'Preparedness'
    },
    {
      title: 'National Service Training Program (NSTP) Graduation',
      issuer: 'STI College Novaliches',
      date: 'June 8, 2024',
      image: certNstp,
      description: 'Civic leadership, ethical development, and community welfare service in compliance with R.A. 9163.',
      category: 'Academic'
    }
  ];

  const filteredSkills = useMemo(() => {
    return skillsData.filter((tech) => {
      const matchesCategory = 
        activeTechCategory === 'all' ||
        (activeTechCategory === 'programming' && tech.category === 'programming') ||
        (activeTechCategory === 'frontend' && tech.category === 'frontend') ||
        (activeTechCategory === 'backend' && (tech.category === 'backend' || tech.category === 'database')) ||
        (activeTechCategory === 'tools' && (tech.category === 'tools' || tech.category === 'microsoft')) ||
        (activeTechCategory === 'design' && tech.category === 'design');

      const matchesSearch = 
        !techSearchQuery ||
        tech.name.toLowerCase().includes(techSearchQuery.toLowerCase()) ||
        tech.categoryLabel.toLowerCase().includes(techSearchQuery.toLowerCase()) ||
        (tech.description && tech.description.toLowerCase().includes(techSearchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeTechCategory, techSearchQuery]);

  const filteredProjects = activeProjectFilter === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(activeProjectFilter.toLowerCase()));

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus('loading');
    setContactFeedback('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '6d4a21bd-1fab-46f5-b215-e3b60833c1fc';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: contactData.name,
          email: contactData.email,
          message: contactData.message,
          from_name: contactData.name,
          subject: `Portfolio Inquiry from ${contactData.name}`
        })
      });

      const data = await response.json();

      if (response.status === 200 && data.success) {
        setContactStatus('success');
        setContactFeedback('Message sent successfully. I will get back to you promptly.');
        setContactData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setContactStatus('idle');
          setContactFeedback('');
        }, 5000);
      } else {
        setContactStatus('error');
        setContactFeedback(data.message || 'Failed to send message. Please contact via email directly.');
        setTimeout(() => {
          setContactStatus('idle');
        }, 6000);
      }
    } catch {
      setContactStatus('error');
      setContactFeedback('Network error. Please contact via email directly.');
      setTimeout(() => {
        setContactStatus('idle');
      }, 6000);
    }
  };

  const isDark = theme === 'dark';

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'github-activity', label: 'Activity' },
    { id: 'experience', label: 'Education' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 flex flex-col font-sans selection:bg-zinc-700 selection:text-white relative w-full overflow-x-hidden ${
      isDark ? 'bg-[#09090b] text-zinc-100' : 'bg-[#fafafa] text-zinc-900'
    }`}>
      
      {/* Sleek Minimalist Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-200 w-full ${
        isDark ? 'bg-[#09090b]/80 border-zinc-800/80' : 'bg-white/80 border-zinc-200/80'
      }`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between relative z-10 w-full">
          <a href="#" className="font-semibold text-sm tracking-tight flex items-center gap-2 group">
            <span className={`h-6 w-6 rounded-md border flex items-center justify-center text-[11px] font-mono font-medium transition-colors ${
              isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-200 group-hover:border-zinc-700' : 'bg-zinc-100 border-zinc-200 text-zinc-800 group-hover:border-zinc-300'
            }`}>
              JA
            </span>
            <span className={`text-xs sm:text-sm font-medium tracking-tight transition-colors ${
              isDark ? 'text-zinc-200 group-hover:text-white' : 'text-zinc-800 group-hover:text-black'
            }`}>
              Justin Allen Azucena
            </span>
          </a>

          {/* Minimalist Navigation Links */}
          <nav className="hidden md:flex items-center gap-5 text-xs">
            {navLinks.map((link) => {
              const isActive = activeNavSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`py-1 transition-colors ${
                    isActive 
                      ? isDark ? 'text-white font-medium' : 'text-zinc-950 font-medium'
                      : isDark ? 'text-zinc-400 hover:text-zinc-200' : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={toggleTheme}
              className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                isDark 
                  ? 'bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700' 
                  : 'bg-white border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300'
              }`}
              title={isDark ? "Switch to light theme" : "Switch to dark theme"}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            <a 
              href={GITHUB_URL} 
              target="_blank" 
              rel="noreferrer"
              className={`p-1.5 rounded-lg border transition-colors ${
                isDark ? 'bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700' : 'bg-white border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300'
              }`}
              title="GitHub Profile"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>

            <a 
              href={LINKEDIN_URL} 
              target="_blank" 
              rel="noreferrer"
              className={`p-1.5 rounded-lg border transition-colors ${
                isDark ? 'bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700' : 'bg-white border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300'
              }`}
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={copyDiscord}
              className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                isDark ? 'bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700' : 'bg-white border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300'
              }`}
              title="Discord: spieler02."
              aria-label="Copy Discord handle"
            >
              {discordCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <DiscordIcon className="w-3.5 h-3.5" />}
            </button>

            <a 
              href="#contact"
              className={`hidden sm:inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                isDark 
                  ? 'bg-zinc-100 text-zinc-900 border-zinc-100 hover:bg-white' 
                  : 'bg-zinc-900 text-white border-zinc-900 hover:bg-zinc-800'
              }`}
            >
              Get in Touch
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className={`md:hidden p-1.5 rounded-lg border transition-colors ${
                isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-400' : 'bg-white border-zinc-200 text-zinc-600'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-t px-4 py-3 flex flex-col gap-1 transition-all ${
            isDark ? 'bg-[#09090b] border-zinc-800 text-zinc-300' : 'bg-white border-zinc-200 text-zinc-700'
          }`}>
            {navLinks.map((link) => {
              const isActive = activeNavSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? isDark ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-950 font-semibold'
                      : isDark ? 'hover:bg-zinc-900/60 hover:text-zinc-200' : 'hover:bg-zinc-50 hover:text-zinc-900'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <ChevronRight className="w-3 h-3 opacity-60" />}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`mt-2 w-full py-2 px-3 rounded-lg text-xs font-medium text-center transition-colors ${
                isDark ? 'bg-zinc-100 text-zinc-900 hover:bg-white' : 'bg-zinc-900 text-white hover:bg-zinc-800'
              }`}
            >
              Get in Touch
            </a>
          </div>
        )}
      </header>

      {/* Header spacer */}
      <div className="h-14 shrink-0 w-full" aria-hidden="true" />

      {/* Hero Section */}
      <section id="hero" className="relative pt-16 pb-16 md:pt-24 md:pb-24 px-6 overflow-hidden z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 reveal-on-scroll is-visible">
          
          {/* Minimal Profile Photo */}
          <div className="shrink-0">
            <div className={`w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border transition-colors ${
              isDark 
                ? 'bg-zinc-900 border-zinc-800' 
                : 'bg-zinc-100 border-zinc-200 shadow-xs'
            }`}>
              <img 
                src={profileImg} 
                alt="Justin Allen Azucena" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1">
            {/* Status Pill */}
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4 border transition-colors ${
              isDark 
                ? 'bg-zinc-900/60 border-zinc-800 text-zinc-300' 
                : 'bg-zinc-100/90 border-zinc-200 text-zinc-700'
            }`}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Full-Stack Software Developer</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3 text-zinc-900 dark:text-zinc-100 leading-tight">
              Justin Allen Azucena
            </h1>

            <p className={`text-sm sm:text-base leading-relaxed mb-6 font-normal max-w-2xl ${
              isDark ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              Information Technology student & developer specializing in scalable full-stack web platforms, enterprise .NET backends, and desktop database architectures. Top 30 Finalist in the nationwide eGov PH Hackathon 2026.
            </p>

            {/* Quick Metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs mb-7">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border ${
                isDark ? 'bg-zinc-900/50 border-zinc-800 text-zinc-400' : 'bg-white border-zinc-200 text-zinc-600 shadow-xs'
              }`}>
                <MapPin className="w-3 h-3 text-zinc-400" />
                Quezon City, PH
              </span>

              <a 
                href="mailto:azucenajustinallen@gmail.com"
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border transition-colors ${
                  isDark ? 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700' : 'bg-white border-zinc-200 text-zinc-600 hover:text-zinc-900 shadow-xs'
                }`}
              >
                <Mail className="w-3 h-3 text-zinc-400" />
                azucenajustinallen@gmail.com
              </a>

              <button
                onClick={copyDiscord}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border transition-colors cursor-pointer ${
                  isDark ? 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700' : 'bg-white border-zinc-200 text-zinc-600 hover:text-zinc-900 shadow-xs'
                }`}
                title="Click to copy Discord handle"
              >
                <DiscordIcon className="w-3 h-3 text-zinc-400" />
                <span>{discordCopied ? 'Copied handle' : 'spieler02.'}</span>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a 
                href="#projects" 
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-colors ${
                  isDark 
                    ? 'bg-zinc-100 text-zinc-900 hover:bg-white' 
                    : 'bg-zinc-900 text-white hover:bg-zinc-800'
                }`}
              >
                <FolderGit2 className="w-3.5 h-3.5" />
                View Projects
              </a>
              
              <a 
                href="#github-activity" 
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-xs font-medium transition-colors ${
                  isDark 
                    ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800/80 hover:text-white' 
                    : 'bg-white border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950 shadow-xs'
                }`}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                GitHub Activity
              </a>

              <a 
                href="/resume.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-xs font-medium transition-colors ${
                  isDark 
                    ? 'bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700' 
                    : 'bg-white border-zinc-200 text-zinc-600 hover:text-zinc-900 shadow-xs'
                }`}
              >
                <Download className="w-3.5 h-3.5" />
                Resume
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 01 - ABOUT ME */}
      <section id="about" className={`py-16 px-6 relative z-10 border-t scroll-mt-14 ${
        isDark ? 'border-zinc-800/80' : 'border-zinc-200/80'
      }`}>
        <div className="max-w-4xl mx-auto reveal-on-scroll">
          
          <div className="mb-8">
            <span className={`text-[11px] font-mono uppercase tracking-wider font-medium block mb-1 ${
              isDark ? 'text-zinc-500' : 'text-zinc-400'
            }`}>
              Background
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              About Me
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Bio Paragraphs */}
            <div className={`md:col-span-7 p-6 rounded-xl border text-sm leading-relaxed space-y-4 ${
              isDark ? 'bg-zinc-900/30 border-zinc-800/80 text-zinc-300' : 'bg-white border-zinc-200/90 text-zinc-700 shadow-xs'
            }`}>
              <p>
                I am a 4th-year <strong>Information Technology</strong> student at <strong>STI Academic Center Novaliches (2023–Present)</strong> with a strong foundation in software engineering, database management, and algorithm design.
              </p>
              <p>
                My work focuses on developing <strong>AI-integrated full-stack web platforms</strong>, <strong>enterprise .NET backend solutions</strong>, and <strong>desktop database applications</strong>. Recognized as a <strong>Top 30 Finalist</strong> nationwide in the <strong>eGov PH Hackathon 2026</strong> out of 150 teams for developing <em>eScholar</em>.
              </p>
              <p>
                Graduated Junior High School and Senior High School TVL-ICT at <strong>Lagro High School (2017–2023)</strong> with <strong>High Honors</strong>, completing industry work immersion at Centrive Technology and authoring the automated QR Code Attendance Management System for the research congress.
              </p>
            </div>

            {/* Focus Areas */}
            <div className="md:col-span-5 space-y-2">
              <span className={`text-xs font-mono uppercase tracking-wider font-medium block mb-3 ${
                isDark ? 'text-zinc-400' : 'text-zinc-500'
              }`}>
                Core Competencies
              </span>
              <div className="space-y-2">
                {interests.map((interest, i) => (
                  <div
                    key={i}
                    className={`p-3 rounded-lg border flex items-center gap-2.5 transition-colors ${
                      isDark ? 'bg-zinc-900/30 border-zinc-800/70 text-zinc-300' : 'bg-white border-zinc-200/80 text-zinc-700 shadow-xs'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0" />
                    <span className="text-xs font-medium">{interest}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 02 - SKILLS & TECHNOLOGIES (Curated Clean Category Grid) */}
      <section id="skills" className={`py-16 px-6 border-t relative z-10 scroll-mt-14 ${
        isDark ? 'bg-zinc-950/40 border-zinc-800/80' : 'bg-zinc-50/70 border-zinc-200/80'
      }`}>
        <div className="max-w-4xl mx-auto reveal-on-scroll">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className={`text-[11px] font-mono uppercase tracking-wider font-medium block mb-1 ${
                isDark ? 'text-zinc-500' : 'text-zinc-400'
              }`}>
                Arsenal
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Technologies & Tools
              </h2>
              <p className={`text-xs sm:text-sm mt-1 max-w-xl ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Languages, frameworks, databases, and tooling actively engineered with.
              </p>
            </div>

            {/* Instant Filter Search */}
            <div className="relative w-full sm:w-60">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                placeholder="Filter tools..."
                value={techSearchQuery}
                onChange={(e) => setTechSearchQuery(e.target.value)}
                className={`w-full pl-8 pr-7 py-1.5 rounded-lg text-xs border transition-colors outline-none ${
                  isDark 
                    ? 'bg-zinc-900/70 border-zinc-800 text-white placeholder-zinc-500 focus:border-zinc-600' 
                    : 'bg-white border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-zinc-400 shadow-xs'
                }`}
              />
              {techSearchQuery && (
                <button
                  onClick={() => setTechSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-200"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>

          {/* Clean Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 mb-6">
            {[
              { id: 'all', label: 'All Stacks' },
              { id: 'programming', label: 'Languages' },
              { id: 'frontend', label: 'Frontend' },
              { id: 'backend', label: 'Backend & Data' },
              { id: 'tools', label: 'Tools & Cloud' },
              { id: 'design', label: 'Design' }
            ].map(tab => {
              const isActive = activeTechCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTechCategory(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    isActive
                      ? isDark
                        ? 'bg-zinc-100 text-zinc-900 font-semibold'
                        : 'bg-zinc-900 text-white font-semibold'
                      : isDark
                        ? 'bg-zinc-900/50 text-zinc-400 hover:text-zinc-200 border border-zinc-800/80 hover:border-zinc-700'
                        : 'bg-white text-zinc-600 hover:text-zinc-900 border border-zinc-200 hover:border-zinc-300 shadow-xs'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Curated Grid */}
          {filteredSkills.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {filteredSkills.map((tech, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border transition-all duration-200 flex flex-col justify-between group ${
                    isDark 
                      ? 'bg-zinc-900/30 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/60' 
                      : 'bg-white border-zinc-200/90 hover:border-zinc-300 hover:shadow-xs'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center p-1.5 border transition-colors ${
                        isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
                      }`}>
                        <img src={tech.iconSrc} alt={tech.name} className="w-5 h-5 object-contain" />
                      </div>
                      {tech.badge && (
                        <span className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded border ${
                          isDark 
                            ? 'bg-zinc-900 border-zinc-800 text-zinc-400' 
                            : 'bg-zinc-100 border-zinc-200 text-zinc-600'
                        }`}>
                          {tech.badge}
                        </span>
                      )}
                    </div>
                    
                    <h3 className={`text-xs font-semibold tracking-tight ${
                      isDark ? 'text-zinc-200 group-hover:text-white' : 'text-zinc-800 group-hover:text-black'
                    }`}>
                      {tech.name}
                    </h3>

                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-1.5">
                      {tech.categoryLabel}
                    </span>
                  </div>

                  {tech.description && (
                    <p className={`text-[11px] leading-relaxed line-clamp-2 ${
                      isDark ? 'text-zinc-500' : 'text-zinc-500'
                    }`}>
                      {tech.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className={`p-8 text-center rounded-xl border ${
              isDark ? 'bg-zinc-900/30 border-zinc-800 text-zinc-400' : 'bg-white border-zinc-200 text-zinc-600'
            }`}>
              <p className="text-xs">No technologies matching &ldquo;{techSearchQuery}&rdquo;</p>
              <button
                onClick={() => {
                  setTechSearchQuery('');
                  setActiveTechCategory('all');
                }}
                className={`mt-3 px-3 py-1 rounded-md text-xs font-medium border transition-colors ${
                  isDark ? 'border-zinc-700 bg-zinc-800 text-zinc-200' : 'border-zinc-300 bg-zinc-100 text-zinc-800'
                }`}
              >
                Reset filter
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 03 - PROJECTS SHOWCASE */}
      <section id="projects" className={`py-16 px-6 relative z-10 border-t scroll-mt-14 ${
        isDark ? 'border-zinc-800/80' : 'border-zinc-200/80'
      }`}>
        <div className="max-w-4xl mx-auto reveal-on-scroll">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className={`text-[11px] font-mono uppercase tracking-wider font-medium block mb-1 ${
                isDark ? 'text-zinc-500' : 'text-zinc-400'
              }`}>
                Featured Work
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Projects
              </h2>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-1.5">
              {['All', 'Web', 'Enterprise', 'Desktop'].map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveProjectFilter(filter)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    activeProjectFilter === filter
                      ? isDark
                        ? 'bg-zinc-100 text-zinc-900 font-semibold'
                        : 'bg-zinc-900 text-white font-semibold'
                      : isDark
                        ? 'bg-zinc-900/50 text-zinc-400 hover:text-zinc-200 border border-zinc-800/80'
                        : 'bg-white text-zinc-600 hover:text-zinc-900 border border-zinc-200 shadow-xs'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredProjects.map((proj) => (
              <ProjectCard 
                key={proj.title} 
                proj={proj} 
                isDark={isDark} 
              />
            ))}
          </div>

        </div>
      </section>

      {/* 04 - LIVE GITHUB ACTIVITY & CONTRIBUTION GRAPH */}
      <section id="github-activity" className={`py-16 px-6 border-t relative z-10 scroll-mt-14 ${
        isDark ? 'bg-zinc-950/40 border-zinc-800/80' : 'bg-zinc-50/70 border-zinc-200/80'
      }`}>
        <div className="max-w-4xl mx-auto reveal-on-scroll">
          
          <div className="mb-8">
            <span className={`text-[11px] font-mono uppercase tracking-wider font-medium block mb-1 ${
              isDark ? 'text-zinc-500' : 'text-zinc-400'
            }`}>
              Open Source
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              GitHub Activity
            </h2>
            <p className={`text-xs sm:text-sm mt-1 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Verified commit activity and repository contributions from @{GITHUB_USERNAME}.
            </p>
          </div>

          {/* Clean GitHub Card Frame */}
          <div className={`rounded-xl border p-5 sm:p-6 overflow-hidden ${
            isDark ? 'bg-zinc-900/30 border-zinc-800/80' : 'bg-white border-zinc-200/90 shadow-xs'
          }`}>
            <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b ${
              isDark ? 'border-zinc-800/80' : 'border-zinc-200'
            }`}>
              <div className="flex items-center gap-2.5">
                <div className={`p-2 rounded-lg border ${
                  isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-300' : 'bg-zinc-100 border-zinc-200 text-zinc-700'
                }`}>
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm flex items-center gap-2 text-zinc-100 dark:text-zinc-100 light:text-zinc-900">
                    <span>@{GITHUB_USERNAME}</span>
                    <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded border ${
                      isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-400' : 'bg-zinc-100 border-zinc-200 text-zinc-600'
                    }`}>
                      Public Activity
                    </span>
                  </h3>
                </div>
              </div>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors w-fit ${
                  isDark 
                    ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800' 
                    : 'bg-zinc-100 border-zinc-200 text-zinc-700 hover:text-black hover:bg-zinc-200'
                }`}
              >
                <span>View Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Live Contribution Graph */}
            <div className="w-full">
              <GitHubContributionGraph
                username={GITHUB_USERNAME}
                githubUrl={GITHUB_URL}
                isDark={isDark}
              />
            </div>

            <div className={`flex flex-wrap items-center justify-between gap-3 mt-4 text-[11px] font-mono ${
              isDark ? 'text-zinc-500' : 'text-zinc-500'
            }`}>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <GitCommit className="w-3.5 h-3.5" />
                  Commits
                </span>
                <span className="flex items-center gap-1">
                  <GitPullRequest className="w-3.5 h-3.5" />
                  Pull Requests
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5" />
                  Repositories
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-[10px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Live sync</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 05 - EDUCATION & TIMELINE */}
      <section id="experience" className={`py-16 px-6 relative z-10 border-t scroll-mt-14 ${
        isDark ? 'border-zinc-800/80' : 'border-zinc-200/80'
      }`}>
        <div className="max-w-4xl mx-auto reveal-on-scroll">
          
          <div className="mb-8">
            <span className={`text-[11px] font-mono uppercase tracking-wider font-medium block mb-1 ${
              isDark ? 'text-zinc-500' : 'text-zinc-400'
            }`}>
              Academic
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Education & Experience
            </h2>
          </div>

          {/* Minimal Timeline */}
          <div className={`relative pl-6 sm:pl-8 border-l space-y-8 my-6 ${
            isDark ? 'border-zinc-800' : 'border-zinc-300'
          }`}>
            {education.map((item, idx) => (
              <div key={idx} className="relative">
                {/* Timeline Node */}
                <div className={`absolute -left-[31px] sm:-left-[39px] top-6 w-3 h-3 rounded-full border-2 shrink-0 ${
                  isDark ? 'bg-zinc-400 border-zinc-950' : 'bg-zinc-800 border-white'
                }`} />

                <div 
                  className={`p-6 rounded-xl border transition-colors ${
                    isDark 
                      ? 'bg-zinc-900/30 border-zinc-800/80' 
                      : 'bg-white border-zinc-200/90 shadow-xs'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                    
                    {/* Institution Logo */}
                    <div className={`w-12 h-12 rounded-lg overflow-hidden shrink-0 border bg-white flex items-center justify-center p-1.5 ${
                      isDark ? 'border-zinc-800' : 'border-zinc-200'
                    }`}>
                      <img 
                        src={item.logo} 
                        alt={item.institution} 
                        className="w-full h-full object-contain" 
                      />
                    </div>

                    {/* Degree & Year */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                          {item.degree}
                        </h3>
                        <span className={`text-xs font-mono shrink-0 ${
                          isDark ? 'text-zinc-400' : 'text-zinc-500'
                        }`}>
                          {item.period}
                        </span>
                      </div>

                      <div className={`flex flex-wrap items-center gap-2 text-xs font-medium mb-3 ${
                        isDark ? 'text-zinc-400' : 'text-zinc-600'
                      }`}>
                        <Building2 className="w-3.5 h-3.5 shrink-0" />
                        <span>{item.institution}</span>
                        {item.honors && (
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                            isDark 
                              ? 'bg-zinc-900 border-zinc-800 text-zinc-300' 
                              : 'bg-zinc-100 border-zinc-200 text-zinc-700'
                          }`}>
                            {item.honors}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {item.details}
                  </p>

                  {/* OJT Showcase */}
                  {item.ojt && (
                    <div className={`mb-4 p-3 rounded-lg border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                      isDark ? 'bg-zinc-950/60 border-zinc-800/80' : 'bg-zinc-50 border-zinc-200'
                    }`}>
                      <div className="flex items-center gap-3">
                        <div className="h-8 px-2 rounded bg-white border border-zinc-200 flex items-center justify-center overflow-hidden shrink-0">
                          <img src={item.ojt.logo} alt={item.ojt.company} className="h-5 w-auto object-contain" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className={`text-xs font-semibold ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>
                              {item.ojt.company}
                            </span>
                            <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded border ${
                              isDark ? 'bg-zinc-900 text-zinc-400 border-zinc-800' : 'bg-zinc-100 text-zinc-600 border-zinc-200'
                            }`}>
                              Work Immersion
                            </span>
                          </div>
                          <p className={`text-[11px] ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                            {item.ojt.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map(s => (
                      <span key={s} className={`text-[10px] px-2 py-0.5 rounded font-mono border ${
                        isDark ? 'bg-zinc-900 text-zinc-400 border-zinc-800' : 'bg-zinc-50 text-zinc-600 border-zinc-200'
                      }`}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 06 - CERTIFICATES GALLERY */}
      <section id="certificates" className={`py-16 px-6 border-t relative z-10 scroll-mt-14 ${
        isDark ? 'bg-zinc-950/40 border-zinc-800/80' : 'bg-zinc-50/70 border-zinc-200/80'
      }`}>
        <div className="max-w-4xl mx-auto reveal-on-scroll">
          
          <div className="mb-8">
            <span className={`text-[11px] font-mono uppercase tracking-wider font-medium block mb-1 ${
              isDark ? 'text-zinc-500' : 'text-zinc-400'
            }`}>
              Credentials
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Certificates & Awards
            </h2>
            <p className={`text-xs sm:text-sm mt-1 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Select any certificate to inspect the verified official document.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certificates.map((cert, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedCert(cert);
                  setActiveCertDocIndex(0);
                }}
                className={`group cursor-pointer rounded-xl overflow-hidden border transition-all duration-200 flex flex-col justify-between ${
                  isDark 
                    ? 'bg-zinc-900/30 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/60' 
                    : 'bg-white border-zinc-200/90 hover:border-zinc-300 hover:shadow-xs'
                }`}
              >
                <div className={`relative aspect-[16/11] overflow-hidden ${
                  isDark ? 'bg-zinc-950' : 'bg-zinc-100'
                }`}>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-300 ease-out"
                  />
                  <span className={`absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[9px] font-mono font-medium backdrop-blur-xs ${
                    isDark ? 'bg-zinc-900/90 border border-zinc-800 text-zinc-300' : 'bg-white/95 border border-zinc-200 text-zinc-700 shadow-xs'
                  }`}>
                    {cert.category}
                  </span>
                  {cert.gallery && cert.gallery.length > 1 && (
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[9px] font-mono font-medium bg-zinc-900/90 border border-zinc-800 text-zinc-300 backdrop-blur-xs">
                      {cert.gallery.length} Records
                    </span>
                  )}
                </div>

                <div className="p-3.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className={`font-semibold text-xs mb-1 line-clamp-2 transition-colors ${
                      isDark ? 'text-zinc-200 group-hover:text-white' : 'text-zinc-800 group-hover:text-black'
                    }`}>
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-1 text-[11px] font-medium text-zinc-500 mb-2">
                      <Building2 className="w-3 h-3" />
                      <span className="truncate">{cert.issuer}</span>
                    </div>
                  </div>

                  <div className={`flex items-center justify-between pt-2 border-t text-[10px] font-mono ${
                    isDark ? 'border-zinc-800/80 text-zinc-500' : 'border-zinc-200 text-zinc-500'
                  }`}>
                    <span>{cert.date}</span>
                    <span className={`inline-flex items-center gap-0.5 ${
                      isDark ? 'text-zinc-400 group-hover:text-zinc-200' : 'text-zinc-600 group-hover:text-zinc-900'
                    }`}>
                      Inspect
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Certificate Modal Lightbox */}
      {selectedCert && (() => {
        const currentDoc = selectedCert.gallery && selectedCert.gallery.length > 0
          ? selectedCert.gallery[activeCertDocIndex] || {
              title: selectedCert.title,
              image: selectedCert.image,
              caption: selectedCert.description,
              date: selectedCert.date
            }
          : {
              title: selectedCert.title,
              image: selectedCert.image,
              caption: selectedCert.description,
              date: selectedCert.date
            };

        return (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
            onClick={() => setSelectedCert(null)}
          >
            <div 
              className={`relative max-w-2xl w-full border rounded-2xl overflow-hidden p-6 max-h-[90vh] flex flex-col ${
                isDark ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-white border-zinc-200 text-zinc-900 shadow-xl'
              }`}
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className={`absolute top-4 right-4 p-1.5 rounded-lg transition-colors z-10 ${
                  isDark ? 'bg-zinc-800 text-zinc-400 hover:text-white' : 'bg-zinc-100 text-zinc-600 hover:text-black'
                }`}
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Multi-document Tabs */}
              {selectedCert.gallery && selectedCert.gallery.length > 1 && (
                <div className="mb-4 pr-10">
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCert.gallery.map((doc, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveCertDocIndex(idx)}
                        className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                          activeCertDocIndex === idx
                            ? isDark
                              ? 'bg-zinc-100 text-zinc-900'
                              : 'bg-zinc-900 text-white'
                            : isDark
                              ? 'bg-zinc-800/80 text-zinc-400 hover:text-zinc-200'
                              : 'bg-zinc-100 text-zinc-600 hover:text-zinc-900'
                        }`}
                      >
                        {doc.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className={`max-h-[50vh] overflow-hidden rounded-lg flex items-center justify-center border mb-4 ${
                isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
              }`}>
                <img
                  src={currentDoc.image}
                  alt={currentDoc.title || selectedCert.title}
                  className="max-h-[50vh] w-auto object-contain"
                />
              </div>

              <div className="overflow-y-auto">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase ${
                    isDark ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-100 text-zinc-700'
                  }`}>
                    {selectedCert.category}
                  </span>
                  <span className={`text-xs font-mono ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    {currentDoc.date || selectedCert.date}
                  </span>
                </div>
                <h3 className="text-base font-semibold mb-0.5">
                  {currentDoc.title && selectedCert.gallery && selectedCert.gallery.length > 1
                    ? currentDoc.title
                    : selectedCert.title}
                </h3>
                <p className="text-xs font-medium text-zinc-500 mb-2">{selectedCert.issuer}</p>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {currentDoc.caption || selectedCert.description}
                </p>
              </div>
            </div>
          </div>
        );
      })()}

      {/* 07 - CONTACT SECTION */}
      <section id="contact" className={`py-16 px-6 relative z-10 border-t scroll-mt-14 ${
        isDark ? 'border-zinc-800/80' : 'border-zinc-200/80'
      }`}>
        <div className="max-w-2xl mx-auto w-full reveal-on-scroll">
          <div className={`rounded-xl border p-6 sm:p-8 ${
            isDark ? 'bg-zinc-900/30 border-zinc-800/80' : 'bg-white border-zinc-200/90 shadow-xs'
          }`}>
            <div className="mb-6">
              <span className={`text-[11px] font-mono uppercase tracking-wider font-medium block mb-1 ${
                isDark ? 'text-zinc-500' : 'text-zinc-400'
              }`}>
                Connect
              </span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-1">
                Get in Touch
              </h2>
              <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Inquiries regarding full-stack software development, collaborations, or hackathons.
              </p>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-3.5">
              <div>
                <label className={`block text-xs font-medium mb-1 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>Name</label>
                <input 
                  type="text" 
                  required
                  disabled={contactStatus === 'loading'}
                  value={contactData.name}
                  onChange={(e) => setContactData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Your Name" 
                  className={`w-full px-3.5 py-2 rounded-lg border text-xs outline-none transition-colors disabled:opacity-60 ${
                    isDark 
                      ? 'bg-zinc-900/60 border-zinc-800 text-white placeholder-zinc-500 focus:border-zinc-600' 
                      : 'bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-zinc-400 focus:bg-white shadow-xs'
                  }`}
                />
              </div>
              <div>
                <label className={`block text-xs font-medium mb-1 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>Email</label>
                <input 
                  type="email" 
                  required
                  disabled={contactStatus === 'loading'}
                  value={contactData.email}
                  onChange={(e) => setContactData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="your.email@domain.com" 
                  className={`w-full px-3.5 py-2 rounded-lg border text-xs outline-none transition-colors disabled:opacity-60 ${
                    isDark 
                      ? 'bg-zinc-900/60 border-zinc-800 text-white placeholder-zinc-500 focus:border-zinc-600' 
                      : 'bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-zinc-400 focus:bg-white shadow-xs'
                  }`}
                />
              </div>
              <div>
                <label className={`block text-xs font-medium mb-1 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>Message</label>
                <textarea 
                  rows={4} 
                  required
                  disabled={contactStatus === 'loading'}
                  value={contactData.message}
                  onChange={(e) => setContactData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Your message or project scope..." 
                  className={`w-full px-3.5 py-2 rounded-lg border text-xs resize-none outline-none transition-colors disabled:opacity-60 ${
                    isDark 
                      ? 'bg-zinc-900/60 border-zinc-800 text-white placeholder-zinc-500 focus:border-zinc-600' 
                      : 'bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-zinc-400 focus:bg-white shadow-xs'
                  }`}
                />
              </div>

              {contactFeedback && (
                <div className={`p-3 rounded-lg text-xs flex items-center gap-2 border ${
                  contactStatus === 'success' 
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
                    : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
                }`}>
                  {contactStatus === 'success' ? (
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
                  ) : (
                    <AlertCircle className="w-3.5 h-3.5 shrink-0 text-rose-400" />
                  )}
                  <span>{contactFeedback}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={contactStatus === 'loading'}
                className={`w-full py-2.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 ${
                  isDark 
                    ? 'bg-zinc-100 text-zinc-900 hover:bg-white' 
                    : 'bg-zinc-900 text-white hover:bg-zinc-800'
                }`}
              >
                {contactStatus === 'loading' ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    Sending...
                  </>
                ) : contactStatus === 'success' ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Sent
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`mt-auto border-t py-8 px-6 text-xs relative z-10 ${
        isDark ? 'border-zinc-800/80 text-zinc-500 bg-[#09090b]' : 'border-zinc-200 text-zinc-500 bg-white'
      }`}>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <p>© {new Date().getFullYear()} Justin Allen Azucena</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <a href="/resume.html" target="_blank" rel="noreferrer" className={isDark ? 'hover:text-zinc-300' : 'hover:text-zinc-900'}>Resume</a>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className={isDark ? 'hover:text-zinc-300' : 'hover:text-zinc-900'}>GitHub</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className={isDark ? 'hover:text-zinc-300' : 'hover:text-zinc-900'}>LinkedIn</a>
            <span className={`cursor-pointer ${isDark ? 'hover:text-zinc-300' : 'hover:text-zinc-900'}`} onClick={copyDiscord}>Discord</span>
            <a href="mailto:azucenajustinallen@gmail.com" className={isDark ? 'hover:text-zinc-300' : 'hover:text-zinc-900'}>Email</a>
          </div>
          <p className="text-zinc-500">React 19 • Vite</p>
        </div>
      </footer>

    </div>
  );
}
