import React, { useState, useEffect, useMemo } from 'react';
import { 
  Sparkles, 
  X, 
  ChevronRight, 
  Send, 
  CheckCircle2, 
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
  LayoutGrid,
  ArrowRight,
  SlidersHorizontal,
  Search
} from 'lucide-react';


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

// Official Pixel-Perfect Brand SVG Icon Imports
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
import supabaseIcon from './assets/icons/supabase.svg';
import vscodeIcon from './assets/icons/vscode.svg';
import microsoftIcon from './assets/icons/microsoft.svg';
import canvaIcon from './assets/icons/canva.svg';
import framerIcon from './assets/icons/framer.svg';
import laravelIcon from './assets/icons/laravel.svg';
import postmanIcon from './assets/icons/postman.svg';
import unityIcon from './assets/icons/unity.svg';



// Social Icon SVGs
function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function DiscordIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18.89 4.99a18.25 18.25 0 0 0-4.52-1.4 0.1 0.1 0 0 0-.1.05 12.78 12.78 0 0 0-.57 1.18 16.89 16.89 0 0 0-5.4 0 13.06 13.06 0 0 0-.58-1.18 0.1 0.1 0 0 0-.1-.05 18.25 18.25 0 0 0-4.52 1.4 0.1 0.1 0 0 0-.05.04C.9 9.94.3 14.75.7 19.5a0.1 0.1 0 0 0 .04.08 18.4 18.4 0 0 0 5.54 2.8 0.1 0.1 0 0 0 .11-.04 13.2 13.2 0 0 0 1.14-1.85 0.1 0.1 0 0 0-.06-.14 12.16 12.16 0 0 1-1.74-.83 0.1 0.1 0 0 1 0-.17c.12-.09.23-.18.34-.28a0.1 0.1 0 0 1 .1-.01 13.14 13.14 0 0 0 11.54 0 0.1 0.1 0 0 1 .1.01c.11.1.22.19.34.28a0.1 0.1 0 0 1 0 .17 11.83 11.83 0 0 1-1.74.83 0.1 0.1 0 0 0-.06.14 13.6 13.6 0 0 0 1.14 1.85 0.1 0.1 0 0 0 .11.04 18.35 18.35 0 0 0 5.55-2.8 0.1 0.1 0 0 0 .04-.08c.5-5.5-.8-10.3-2.4-14.47a0.1 0.1 0 0 0-.05-.04zM8.5 15.5c-1 0-1.8-0.9-1.8-2s0.8-2 1.8-2 1.8 0.9 1.8 2-0.8 2-1.8 2zm7 0c-1 0-1.8-0.9-1.8-2s0.8-2 1.8-2 1.8 0.9 1.8 2-0.8 2-1.8 2z" />
    </svg>
  );
}

const LINKEDIN_URL = "https://www.linkedin.com/in/justin-allen-azucena-1093b2299/";
const GITHUB_USERNAME = "Prince-Rim";
const GITHUB_URL = "https://github.com/Prince-Rim";

// Smooth One-Shot Typing Animation for Hero Title (Types once on land)
function TypewriterName() {
  const name = "Justin Allen Azucena";
  const [displayedText, setDisplayedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  // Blinking cursor line
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 530);
    return () => clearInterval(cursorTimer);
  }, []);

  // One-time typing on initial landing
  useEffect(() => {
    if (displayedText.length < name.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(name.slice(0, displayedText.length + 1));
      }, 85);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, name]);

  return (
    <span className="inline-flex items-baseline relative">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
        {displayedText || '\u00A0'}
      </span>
      <span
        className={`inline-block w-[3.5px] sm:w-[5px] h-[0.82em] ml-1.5 sm:ml-2 bg-gradient-to-b from-indigo-400 to-pink-400 rounded-full transition-opacity duration-150 ${
          cursorVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </span>
  );
}



// Natural Starry Cosmic Background Component
function StarField({ isDark }: { isDark: boolean }) {

  const stars = useMemo(() => {
    const starList = [];
    const seed = 42;
    for (let i = 0; i < 90; i++) {
      const top = ((Math.sin(i * 99 + seed) + 1) / 2) * 100;
      const left = ((Math.cos(i * 33 + seed) + 1) / 2) * 100;
      const size = (i % 3 === 0) ? 2.5 : (i % 2 === 0) ? 1.8 : 1.2;
      const opacity = (i % 4 === 0) ? 0.85 : (i % 3 === 0) ? 0.65 : 0.45;
      const animClass = (i % 3 === 0) ? 'animate-twinkle-1' : (i % 2 === 0) ? 'animate-twinkle-2' : 'animate-twinkle-3';
      starList.push({ id: i, top, left, size, opacity, animClass });
    }
    return starList;
  }, []);

  if (!isDark) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Deep Space Background Gradients */}
      <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-indigo-600/12 blur-[150px] animate-pulse-glow" />
      <div className="absolute top-[40%] right-[-10%] w-[650px] h-[650px] rounded-full bg-purple-600/12 blur-[160px] animate-pulse-glow" />
      <div className="absolute bottom-[-10%] left-[10%] w-[550px] h-[550px] rounded-full bg-blue-600/10 blur-[140px] animate-pulse-glow" />

      {/* Natural Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            boxShadow: star.size > 2 ? '0 0 6px 1px rgba(255, 255, 255, 0.8)' : '0 0 3px 0.5px rgba(255, 255, 255, 0.6)'
          }}
          className={`absolute rounded-full bg-white ${star.animClass}`}
        />
      ))}
    </div>
  );
}

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
    categoryLabel: 'Programming',
    iconSrc: jsIcon,
    description: 'Modern ES6+, Asynchronous JS, DOM APIs, and dynamic interactive client logic.',
    badge: 'Core'
  },
  {
    name: 'TypeScript',
    category: 'programming',
    categoryLabel: 'Programming',
    iconSrc: tsIcon,
    description: 'Type-safe scalable development, Generics, interfaces, and clean design patterns.',
    badge: 'Core'
  },
  {
    name: 'Python',
    category: 'programming',
    categoryLabel: 'Programming',
    iconSrc: pythonIcon,
    description: 'Machine Learning, AI forecasting models, automation scripting, and backend services.',
    badge: 'AI & Data'
  },
  {
    name: 'C# / .NET',
    category: 'programming',
    categoryLabel: 'Programming',
    iconSrc: csharpIcon,
    description: 'Enterprise object-oriented engineering, LINQ, async architectures, and desktop GUI.',
    badge: 'Enterprise'
  },
  {
    name: 'Java (OOP & Swing)',
    category: 'programming',
    categoryLabel: 'Programming',
    iconSrc: javaIcon,
    description: 'Desktop software development, Java Swing, JDBC, collections, and algorithms.',
    badge: 'Desktop'
  },
  {
    name: 'PHP',
    category: 'programming',
    categoryLabel: 'Programming',
    iconSrc: phpIcon,
    description: 'Server-side application logic, dynamic MVC engines, session auth, and APIs.',
    badge: 'Web'
  },
  {
    name: 'HTML5',
    category: 'frontend',
    categoryLabel: 'Frontend',
    iconSrc: html5Icon,
    description: 'Semantic HTML markup, web accessibility standards, canvas, and audio elements.',
    badge: 'Standard'
  },
  {
    name: 'CSS3',
    category: 'frontend',
    categoryLabel: 'Frontend',
    iconSrc: css3Icon,
    description: 'Modern responsive layouts, Flexbox, Grid, keyframes, and sleek transitions.',
    badge: 'Standard'
  },

  // Frontend Frameworks & Libraries
  {
    name: 'React 19',
    category: 'frontend',
    categoryLabel: 'Frontend',
    iconSrc: reactIcon,
    description: 'Modern component-driven UIs, hooks, state management, and optimized render cycles.',
    badge: 'Preferred'
  },
  {
    name: 'Vite',
    category: 'frontend',
    categoryLabel: 'Frontend',
    iconSrc: viteIcon,
    description: 'Next-gen build tool with instant Hot Module Replacement (HMR) and rollup optimization.',
    badge: 'Tooling'
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    categoryLabel: 'Frontend',
    iconSrc: tailwindIcon,
    description: 'Utility-first modern styling, dynamic dark theme systems, and responsive design.',
    badge: 'Preferred'
  },
  {
    name: 'Framer',
    category: 'frontend',
    categoryLabel: 'UI / Motion',
    iconSrc: framerIcon,
    description: 'Interactive motion prototypes, landing pages, and micro-animation orchestration.',
    badge: 'Motion'
  },

  // Backend & BaaS
  {
    name: 'ASP.NET Core',
    category: 'backend',
    categoryLabel: 'Backend',
    iconSrc: dotnetIcon,
    description: 'High-performance MVC architectures, Razor Pages, RESTful web services, and Identity.',
    badge: 'Enterprise'
  },
  {
    name: 'Laravel',
    category: 'backend',
    categoryLabel: 'Backend',
    iconSrc: laravelIcon,
    description: 'Elegant PHP framework with Eloquent ORM, Blade templating, routing, and migrations.',
    badge: 'MVC'
  },
  {
    name: 'Supabase',
    category: 'backend',
    categoryLabel: 'BaaS & Cloud',
    iconSrc: supabaseIcon,
    description: 'Backend-as-a-Service with Postgres DB, Auth, Storage, Edge Functions & Realtime.',
    badge: 'Cloud BaaS'
  },

  // Databases
  {
    name: 'PostgreSQL',
    category: 'database',
    categoryLabel: 'Database',
    iconSrc: postgresIcon,
    description: 'Enterprise relational database with JSONB support, indexing, and ACID guarantees.',
    badge: 'SQL'
  },
  {
    name: 'Microsoft SQL Server',
    category: 'database',
    categoryLabel: 'Database',
    iconSrc: mssqlIcon,
    description: 'T-SQL stored procedures, triggers, views, relational modeling, and SSMS administration.',
    badge: 'Enterprise'
  },
  {
    name: 'MySQL',
    category: 'database',
    categoryLabel: 'Database',
    iconSrc: mysqlIcon,
    description: 'Relational data management, transactional integrity, and optimized query execution.',
    badge: 'SQL'
  },

  // Design & Creative
  {
    name: 'Figma',
    category: 'design',
    categoryLabel: 'UI/UX Design',
    iconSrc: figmaIcon,
    description: 'Component design systems, wireframing, design tokens, and user flow prototyping.',
    badge: 'Design'
  },
  {
    name: 'Canva',
    category: 'design',
    categoryLabel: 'Visual Design',
    iconSrc: canvaIcon,
    description: 'Graphic design assets, brand pitch presentations, social graphics, and visual media.',
    badge: 'Design'
  },

  // Microsoft Ecosystem
  {
    name: 'VS Code',
    category: 'microsoft',
    categoryLabel: 'Microsoft Tool',
    iconSrc: vscodeIcon,
    description: 'Primary coding environment with extension toolchains, debuggers, and terminal workflows.',
    badge: 'IDE'
  },
  {
    name: 'Microsoft 365',
    category: 'microsoft',
    categoryLabel: 'Microsoft Tool',
    iconSrc: microsoftIcon,
    description: 'Advanced Excel data analysis, technical documentation in Word, and PowerPoint.',
    badge: 'Office'
  },

  // Web & CMS
  {
    name: 'WordPress',
    category: 'tools',
    categoryLabel: 'CMS & Web',
    iconSrc: wordpressIcon,
    description: 'Content management, custom template development, plugin setups, and deployment.',
    badge: 'CMS'
  },

  // Tools, ERP, Game Dev & DevOps
  {
    name: 'Unity 3D',
    category: 'tools',
    categoryLabel: 'Game Engine',
    iconSrc: unityIcon,
    description: 'Interactive 3D/2D game development, C# engine scripting, physics simulations, and UI systems.',
    badge: '3D Engine'
  },
  {
    name: 'Git',
    category: 'tools',
    categoryLabel: 'Version Control',
    iconSrc: gitIcon,
    description: 'Distributed version control, local commit histories, branching models, stash, and rebasing.',
    badge: 'VCS'
  },
  {
    name: 'GitHub',
    category: 'tools',
    categoryLabel: 'DevOps & Git',
    iconSrc: githubIcon,
    description: 'Cloud repository hosting, Pull Requests, GitHub Actions CI/CD workflows, and open-source collaboration.',
    badge: 'DevOps'
  },
  {
    name: 'SAP S/4HANA',
    category: 'tools',
    categoryLabel: 'Enterprise ERP',
    iconSrc: sapIcon,
    description: 'Enterprise resource planning across SD, MM, PP, and FI modules using Global Bike.',
    badge: 'Certified'
  },
  {
    name: 'Postman',
    category: 'tools',
    categoryLabel: 'API Testing',
    iconSrc: postmanIcon,
    description: 'RESTful API endpoint validation, automated test collections, and JSON payload inspection.',
    badge: 'Testing'
  }
];

// 3 Curated Floating Marquee Rows matching reference mockup
const floatingRow1: TechSkillItem[] = [
  { name: 'Vite', iconSrc: viteIcon, category: 'frontend', categoryLabel: 'Frontend' },
  { name: 'React 19', iconSrc: reactIcon, category: 'frontend', categoryLabel: 'Frontend' },
  { name: 'HTML5', iconSrc: html5Icon, category: 'frontend', categoryLabel: 'Frontend' },
  { name: 'CSS3', iconSrc: css3Icon, category: 'frontend', categoryLabel: 'Frontend' },
  { name: 'JavaScript', iconSrc: jsIcon, category: 'programming', categoryLabel: 'Programming' },
  { name: 'TypeScript', iconSrc: tsIcon, category: 'programming', categoryLabel: 'Programming' },
  { name: 'Tailwind CSS', iconSrc: tailwindIcon, category: 'frontend', categoryLabel: 'Frontend' },
  { name: 'Figma', iconSrc: figmaIcon, category: 'design', categoryLabel: 'Design' },
  { name: 'Supabase', iconSrc: supabaseIcon, category: 'backend', categoryLabel: 'Backend' },
  { name: 'Unity 3D', iconSrc: unityIcon, category: 'tools', categoryLabel: 'Game Engine' },
  { name: 'Framer', iconSrc: framerIcon, category: 'frontend', categoryLabel: 'Design' }
];

const floatingRow2: TechSkillItem[] = [
  { name: 'MySQL', iconSrc: mysqlIcon, category: 'database', categoryLabel: 'Database' },
  { name: 'PostgreSQL', iconSrc: postgresIcon, category: 'database', categoryLabel: 'Database' },
  { name: 'Supabase', iconSrc: supabaseIcon, category: 'backend', categoryLabel: 'BaaS & Cloud' },
  { name: 'PHP', iconSrc: phpIcon, category: 'programming', categoryLabel: 'Programming' },
  { name: 'Laravel', iconSrc: laravelIcon, category: 'backend', categoryLabel: 'Backend' },
  { name: 'Python', iconSrc: pythonIcon, category: 'programming', categoryLabel: 'AI & Data' },
  { name: 'C# / .NET', iconSrc: csharpIcon, category: 'programming', categoryLabel: 'Enterprise' },
  { name: 'ASP.NET Core', iconSrc: dotnetIcon, category: 'backend', categoryLabel: 'Backend' },
  { name: 'Java', iconSrc: javaIcon, category: 'programming', categoryLabel: 'Programming' },
  { name: 'Microsoft SQL', iconSrc: mssqlIcon, category: 'database', categoryLabel: 'Database' },
  { name: 'Postman', iconSrc: postmanIcon, category: 'tools', categoryLabel: 'API Tool' }
];

const floatingRow3: TechSkillItem[] = [
  { name: 'Figma', iconSrc: figmaIcon, category: 'design', categoryLabel: 'UI/UX Design' },
  { name: 'Canva', iconSrc: canvaIcon, category: 'design', categoryLabel: 'Visual Design' },
  { name: 'Git', iconSrc: gitIcon, category: 'tools', categoryLabel: 'Version Control' },
  { name: 'GitHub', iconSrc: githubIcon, category: 'tools', categoryLabel: 'DevOps & Git' },
  { name: 'WordPress', iconSrc: wordpressIcon, category: 'tools', categoryLabel: 'CMS & Web' },
  { name: 'Microsoft 365', iconSrc: microsoftIcon, category: 'microsoft', categoryLabel: 'Productivity' },
  { name: 'VS Code', iconSrc: vscodeIcon, category: 'microsoft', categoryLabel: 'IDE Editor' },
  { name: 'Unity 3D', iconSrc: unityIcon, category: 'tools', categoryLabel: '3D Engine' },
  { name: 'SAP S/4HANA', iconSrc: sapIcon, category: 'tools', categoryLabel: 'Enterprise ERP' },
  { name: 'Tailwind CSS', iconSrc: tailwindIcon, category: 'frontend', categoryLabel: 'Frontend' },
  { name: 'React 19', iconSrc: reactIcon, category: 'frontend', categoryLabel: 'Frontend' }
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

// Interactive 3D Perspective Card with Cursor Spotlight & Parallax
function ProjectCard3D({ 
  proj, 
  idx, 
  isDark 
}: { 
  proj: Project; 
  idx: number; 
  isDark: boolean; 
}) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Smooth 3D tilt calculation (-6deg to 6deg)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setRotate({ x: rotateX, y: rotateY });
    setSpotlight({ x, y, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: rotate.x === 0 && rotate.y === 0 ? 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' : 'transform 0.1s ease-out',
        transitionDelay: `${(idx % 3) * 110}ms`
      }}
      className={`scroll-card-reveal rounded-3xl border p-5 sm:p-6 flex flex-col justify-between group relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${
        proj.highlight
          ? isDark
            ? 'bg-gradient-to-b from-[#111936] to-[#0a0f1d] border-indigo-500/50 shadow-indigo-950/40'
            : 'bg-white border-indigo-300 shadow-indigo-100/80'
          : isDark
            ? 'bg-[#0a0f1d]/95 border-slate-800/90 hover:border-indigo-500/40 shadow-slate-950/50'
            : 'bg-white border-slate-200 hover:border-indigo-300 shadow-sm'
      }`}
    >
      {/* Interactive Cursor Spotlight Radial Glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: spotlight.opacity,
          background: `radial-gradient(420px circle at ${spotlight.x}px ${spotlight.y}px, ${
            isDark ? 'rgba(99, 102, 241, 0.18)' : 'rgba(99, 102, 241, 0.1)'
          }, transparent 60%)`
        }}
      />

      {/* Border Spotlight Shine */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300"
        style={{
          opacity: spotlight.opacity,
          background: `radial-gradient(280px circle at ${spotlight.x}px ${spotlight.y}px, rgba(168, 85, 247, 0.4), transparent 70%)`
        }}
      />

      <div className="relative z-10">
        {/* macOS Browser Mockup Top Bar & Screenshot Frame */}
        <div className="relative aspect-[16/10] w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800/90 mb-4 group/img shadow-md">
          
          {/* macOS Window Controls Header */}
          <div className="absolute top-0 inset-x-0 h-6 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-2.5 flex items-center justify-between z-20">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[9px] font-mono text-slate-500 truncate max-w-[130px]">
              {proj.title.toLowerCase().replace(/\s+/g, '')}.app
            </span>
            <div className="w-6" />
          </div>

          <img 
            src={proj.image} 
            alt={proj.title} 
            className="w-full h-full object-cover object-top pt-6 group-hover/img:scale-105 transition-transform duration-700 ease-out" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d]/80 via-transparent to-transparent opacity-60 group-hover/img:opacity-30 transition-opacity" />
          
          {/* Top-Right Badge */}
          <span className="absolute top-8 right-2.5 px-2.5 py-0.5 rounded-md text-[9px] font-mono font-bold bg-slate-950/90 border border-indigo-500/40 text-indigo-300 backdrop-blur-md shadow-lg z-20">
            {proj.badge}
          </span>
        </div>

        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[10px] font-mono font-bold tracking-wider text-indigo-400 uppercase">
            {proj.category}
          </span>
        </div>

        <h3 className="text-xl font-bold tracking-tight mb-2 group-hover:text-indigo-400 transition-colors">
          {proj.title}
        </h3>

        <p className={`text-xs leading-relaxed mb-5 line-clamp-3 ${
          isDark ? 'text-slate-400' : 'text-slate-600'
        }`}>
          {proj.description}
        </p>
      </div>

      <div className="relative z-10">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {proj.tags.map(t => (
            <span key={t} className={`text-[10px] px-2.5 py-0.5 rounded-md font-mono border transition-colors ${
              isDark ? 'bg-slate-950/90 text-slate-300 border-slate-800' : 'bg-slate-100 text-slate-700 border-slate-200'
            }`}>
              {t}
            </span>
          ))}
        </div>

        <div className={`pt-3 border-t flex items-center justify-between text-xs ${
          isDark ? 'border-slate-800/80' : 'border-slate-100'
        }`}>
          {proj.githubUrl && (
            <a
              href={proj.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-xs px-3.5 py-1.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition-all shadow-md shadow-indigo-600/20 group/btn active:scale-95"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>View Code</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
            </a>
          )}
          {proj.liveUrl && (
            <a
              href={proj.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-indigo-400 hover:underline flex items-center gap-1"
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


interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
  category: string;
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
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeTechCategory, setActiveTechCategory] = useState<string>('all');
  const [techViewMode, setTechViewMode] = useState<'floating' | 'grid'>('floating');
  const [techSearchQuery, setTechSearchQuery] = useState<string>('');
  const [activeProjectFilter, setActiveProjectFilter] = useState<string>('All');
  const [activeNavSection, setActiveNavSection] = useState<string>('hero');
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [discordCopied, setDiscordCopied] = useState(false);


  // Dynamic Bidirectional Intersection Observer for Scroll-in & Scroll-out Animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            // Re-triggers smooth animation when scrolling back up and down
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Dynamic Scrollspy to accurately update active navbar link while scrolling
  useEffect(() => {
    const sections = ['about', 'skills', 'projects', 'github-activity', 'experience', 'certificates', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 220;
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
    setTimeout(() => setDiscordCopied(false), 2500);
  };

  const interests = [
    'Software Development',
    'Web Development',
    'Machine Learning & AI',
    'Database Management',
    'Enterprise ERP (SAP)',
    'Cybersecurity'
  ];

  const education: EducationItem[] = [
    {
      degree: 'Bachelor of Science in Information Technology (4th Year)',
      institution: 'STI Academic Center Novaliches',
      period: '2023 – Present (Graduating 2026)',
      honors: 'SAP Certified & Capstone Lead Programmer',
      details: 'Focusing on enterprise business workflows, advanced full-stack web architectures, demand forecasting models, and GovTech API integrations.',
      skills: ['Full-Stack Web', 'Enterprise ERP (SAP)', 'Software Engineering', 'Applied AI'],
      logo: stiLogo
    },
    {
      degree: 'Junior High School & Senior High School (TVL - ICT Track)',
      institution: 'Lagro High School',
      period: '2017 – 2023',
      honors: 'Graduated with High Honors',
      details: 'Studied Junior High School (2017–2021) and completed Senior High School TVL-ICT track with High Honors (2021–2023). Completed On-the-Job Training (OJT) / Work Immersion at Centrive Technology. Author & Lead Developer of the automated "Classroom Attendance System with QR Code Recognition" presented in the TVL-ICT Research Congress 2023.',
      skills: ['Centrive Tech OJT', 'Junior & Senior High', 'Java Fundamentals', 'Algorithms', 'Research & Development', 'High Honors'],
      logo: lagroLogo,
      ojt: {
        company: 'Centrive Technology',
        description: 'Completed Work Immersion / On-the-Job Training (OJT) practicum in practical coding and software workflows.',
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
      title: 'eGov PH Hackathon 2026 Participation & Finalist Recognition',
      issuer: 'Department of Information and Communications Technology (DICT)',
      date: '2026',
      image: certEgov,
      description: 'Official Certificate of Recognition for developing eScholar — an AI-Powered Student Scholarship Finder and GovTech application portal presented at the nationwide eGov PH Hackathon 2026.',
      category: 'Hackathon'
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
        (activeTechCategory === 'microsoft' && (
          tech.category === 'microsoft' ||
          tech.name.toLowerCase().includes('microsoft') ||
          tech.name.toLowerCase().includes('sql server') ||
          tech.name.toLowerCase().includes('c#') ||
          tech.name.toLowerCase().includes('asp.net') ||
          tech.name.toLowerCase().includes('vs code')
        )) ||
        (activeTechCategory === 'design' && (
          tech.category === 'design' || 
          tech.name === 'Figma' || 
          tech.name === 'Canva' || 
          tech.name === 'Framer'
        )) ||
        (activeTechCategory === 'tools' && (
          tech.category === 'tools' || 
          tech.name === 'Git' || 
          tech.name === 'GitHub' || 
          tech.name === 'Unity 3D' || 
          tech.name === 'SAP S/4HANA' || 
          tech.name === 'WordPress' || 
          tech.name === 'Postman'
        )) ||

        tech.category === activeTechCategory;

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

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
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
    <div className={`min-h-screen transition-colors duration-500 flex flex-col font-sans selection:bg-indigo-500 selection:text-white relative ${
      isDark ? 'bg-[#05070e] text-slate-100' : 'bg-[#f4f7fb] text-slate-900'
    }`}>
      
      {/* Natural Starry Cosmic Background */}
      <StarField isDark={isDark} />

      {/* Header */}
      <header className={`sticky top-0 z-40 backdrop-blur-xl border-b transition-colors duration-300 ${
        isDark ? 'bg-[#05070e]/80 border-slate-800/80' : 'bg-white/80 border-slate-200/80'
      }`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between relative z-10">
          <a href="#" className="font-bold text-base tracking-tight flex items-center gap-2 group">
            <span className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-md shadow-indigo-600/30 group-hover:scale-105 transition-transform">
              JA
            </span>
            <span className={`transition-colors font-bold ${isDark ? 'text-white group-hover:text-indigo-400' : 'text-slate-900 group-hover:text-indigo-600'}`}>
              Justin Allen Azucena
            </span>
          </a>

          {/* Dynamic Scrollspy Navbar */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold">
            {navLinks.map((link) => {
              const isActive = activeNavSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`relative py-1 transition-colors duration-300 ${
                    isActive 
                      ? 'text-indigo-400 font-bold' 
                      : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl border transition-all text-xs ${
                isDark 
                  ? 'bg-slate-900 border-slate-800 text-amber-300 hover:border-slate-700' 
                  : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 shadow-sm'
              }`}
            >
              {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            <a 
              href={GITHUB_URL} 
              target="_blank" 
              rel="noreferrer"
              className={`p-2 rounded-xl border transition-all ${
                isDark ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white' : 'bg-white border-slate-200 text-slate-700 hover:text-slate-950 shadow-sm'
              }`}
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a 
              href={LINKEDIN_URL} 
              target="_blank" 
              rel="noreferrer"
              className={`p-2 rounded-xl border transition-all ${
                isDark ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-blue-400' : 'bg-white border-slate-200 text-slate-700 hover:text-blue-600 shadow-sm'
              }`}
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={copyDiscord}
              className={`p-2 rounded-xl border transition-all ${
                isDark ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-indigo-400' : 'bg-white border-slate-200 text-slate-700 hover:text-indigo-600 shadow-sm'
              }`}
              title="Discord (spieler02.)"
            >
              {discordCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <DiscordIcon className="w-4 h-4" />}
            </button>

            <a 
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white font-semibold text-xs hover:bg-indigo-500 transition-all shadow-md shadow-indigo-600/30 hover:scale-[1.02]"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative pt-16 pb-16 md:pt-24 md:pb-24 px-6 overflow-hidden z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-14 text-center md:text-left reveal-on-scroll is-visible">
          
          {/* Profile Card & Avatar - Enhanced Modern Aesthetic Framing */}
          <div className="relative group shrink-0 flex items-center justify-center my-4 md:my-0">
            {/* Ambient Multi-Layer Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/40 via-purple-500/30 to-pink-500/40 rounded-[2.5rem] blur-2xl opacity-60 group-hover:opacity-95 transition duration-700 animate-pulse-glow" />
            
            {/* Decorative Ambient Floating Accent Elements */}
            <div className="absolute -top-3 -left-3 w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-400/40 backdrop-blur-md hidden sm:flex items-center justify-center shadow-lg -rotate-12 group-hover:rotate-0 transition-transform duration-500 z-20">
              <Sparkles className="w-4 h-4 text-indigo-300 animate-pulse" />
            </div>

            {/* Main Profile Image Box */}
            <div className={`relative w-52 h-64 sm:w-60 sm:h-72 lg:w-68 lg:h-80 rounded-[2rem] overflow-hidden border-2 shadow-2xl animate-float backdrop-blur-xl transition-all duration-500 ${
              isDark 
                ? 'bg-slate-950/90 border-indigo-500/40 shadow-indigo-950/80 hover:border-indigo-400/80 hover:shadow-indigo-900/50' 
                : 'bg-white border-indigo-200/90 shadow-indigo-100 hover:border-indigo-300 hover:shadow-indigo-200'
            }`}>
              <img 
                src={profileImg} 
                alt="Justin Allen Azucena" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Subtle Inner Glass Overlay Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/10 pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[2rem] pointer-events-none" />
            </div>
          </div>


          {/* Hero Main Content */}
          <div className="flex-1 max-w-2xl">
            {/* Status & Role Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-4 backdrop-blur-md shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Full-Stack Software Engineer & Developer</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              <span className={`block text-xl sm:text-2xl lg:text-3xl font-bold mb-1 ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}>
                Hi, I am
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-black min-h-[1.2em]">
                <TypewriterName />
              </span>
            </h1>



            <p className={`text-sm sm:text-base leading-relaxed mb-6 max-w-xl font-normal ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Passionate developer specializing in <strong>intelligent full-stack web platforms</strong>, <strong>enterprise .NET systems</strong>, and <strong>desktop database applications</strong> with scalable architectures.
            </p>

            {/* Quick Contact & Location Pills */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 text-xs mb-8">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border backdrop-blur-sm transition-colors ${
                isDark ? 'bg-slate-900/80 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700 shadow-sm'
              }`}>
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                Quezon City, PH
              </span>

              <a 
                href="mailto:azucenajustinallen@gmail.com"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border backdrop-blur-sm transition-all hover:scale-[1.02] ${
                  isDark ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-indigo-300 hover:border-indigo-500/40' : 'bg-white border-slate-200 text-slate-700 hover:text-indigo-600 shadow-sm'
                }`}
              >
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                azucenajustinallen@gmail.com
              </a>

              <a 
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border backdrop-blur-sm transition-all hover:scale-[1.02] ${
                  isDark ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/40' : 'bg-white border-slate-200 text-slate-700 hover:text-blue-600 shadow-sm'
                }`}
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                LinkedIn
              </a>

              <button
                onClick={copyDiscord}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border backdrop-blur-sm transition-all hover:scale-[1.02] ${
                  isDark ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-indigo-300 hover:border-indigo-500/40' : 'bg-white border-slate-200 text-slate-700 hover:text-indigo-600 shadow-sm'
                }`}
              >
                <DiscordIcon className="w-3.5 h-3.5 text-indigo-400" />
                <span>{discordCopied ? 'Copied!' : 'Discord: spieler02.'}</span>
              </button>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-xs hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-600/30 hover:scale-[1.03] active:scale-[0.98]"
              >
                <FolderGit2 className="w-4 h-4" />
                View Projects
              </a>
              
              <a 
                href="#github-activity" 
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border font-bold text-xs transition-all hover:scale-[1.03] active:scale-[0.98] backdrop-blur-sm ${
                  isDark ? 'bg-slate-900/80 border-slate-700/80 text-slate-200 hover:bg-slate-800 hover:border-indigo-500/40' : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50 shadow-sm'
                }`}
              >
                <GithubIcon className="w-4 h-4 text-indigo-400" />
                GitHub Activity
              </a>

              <a 
                href="/resume.html" 
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border font-semibold text-xs transition-all hover:scale-[1.02] backdrop-blur-sm ${
                  isDark ? 'bg-slate-900/40 border-slate-800 text-indigo-400 hover:border-indigo-500/40 hover:text-indigo-300' : 'bg-white border-slate-200 text-indigo-600 hover:border-indigo-300 shadow-sm'
                }`}
              >
                <Download className="w-3.5 h-3.5" />
                Download Resume
              </a>
            </div>

          </div>
        </div>
      </section>


      {/* 01 - ABOUT ME */}
      <section id="about" className="py-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto reveal-on-scroll">
          
          <div className="text-center mb-12">
            <span className="text-[11px] font-mono uppercase tracking-widest text-indigo-400 font-bold block mb-1">
              GET TO KNOW ME
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              About Me
            </h2>
            <p className={`text-xs sm:text-sm mt-2 max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              A brief story about my background and passion in software engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Bio Paragraphs */}
            <div className={`md:col-span-6 p-6 sm:p-8 rounded-3xl border text-sm leading-relaxed space-y-4 ${
              isDark ? 'bg-[#0a0f1d]/90 border-slate-800/80 text-slate-300' : 'bg-white border-slate-200 text-slate-700 shadow-sm'
            }`}>
              <p>
                I am a 4th-year <strong>Information Technology</strong> student at <strong>STI Academic Center Novaliches (2023–Present)</strong> with a foundation built on computer systems, software architecture, and practical algorithm engineering.
              </p>
              <p>
                My focus centers on developing <strong>AI-integrated full-stack web platforms</strong>, <strong>enterprise .NET backend solutions</strong>, and <strong>desktop database applications</strong>. Recognized as a <strong>Top 30 Finalist</strong> in the nationwide <strong>eGov PH Hackathon 2026</strong> across 150 teams for developing <em>eScholar</em>.
              </p>
              <p>
                Studied Junior High School and completed Senior High School TVL-ICT at <strong>Lagro High School (2017–2023)</strong> with <strong>High Honors</strong>, where I pioneered and researched the automated QR Code Attendance Management System for the TVL-ICT research congress.
              </p>
            </div>

            {/* Interests & Focus Areas */}
            <div className="md:col-span-6 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                Interests & Focus
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {interests.map((interest, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-2xl border transition-all duration-300 hover:scale-[1.02] flex items-center gap-3 ${
                      isDark ? 'bg-[#0a0f1d]/80 border-slate-800/80 hover:border-indigo-500/40 text-slate-200' : 'bg-white border-slate-200 hover:border-indigo-300 text-slate-800 shadow-sm'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
                    <span className="text-xs font-semibold">{interest}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 02 - SKILLS & TECHNOLOGIES */}
      <section id="skills" className={`py-20 px-6 border-y relative z-10 transition-colors overflow-hidden ${
        isDark ? 'bg-[#070b16]/95 border-slate-800/80' : 'bg-slate-100/70 border-slate-200'
      }`}>
        <div className="max-w-6xl mx-auto reveal-on-scroll">
          
          {/* Section Header with 'View All' Toggle */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-6 border-b pb-6 border-slate-800/60">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[11px] font-mono uppercase tracking-widest text-indigo-400 font-bold block">
                  TECHNICAL ARSENAL
                </span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-semibold ${
                  isDark ? 'bg-indigo-950/80 text-indigo-300 border border-indigo-800/50' : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                }`}>
                  {skillsData.length} Tools & Stacks
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Technologies
              </h2>
              <p className={`text-xs sm:text-sm mt-1 max-w-xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Languages, frameworks, databases, cloud BaaS, and enterprise platforms I actively engineer with.
              </p>
            </div>

            {/* View Mode Toggle Button (Matching Reference Mockup "View All -> [Grid Icon]") */}
            <div className="flex items-center gap-3 shrink-0">
              {techViewMode === 'floating' ? (
                <button
                  onClick={() => setTechViewMode('grid')}
                  className={`group flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-300 shadow-sm cursor-pointer active:scale-95 ${
                    isDark 
                      ? 'bg-[#0a0f1d] hover:bg-indigo-950/50 border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/60 shadow-indigo-950/30' 
                      : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700 hover:text-indigo-600 hover:border-indigo-300 shadow-sm'
                  }`}
                  aria-label="View All Technologies Grid"
                >
                  <span className="font-medium">View All</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-indigo-400" />
                  <LayoutGrid className="w-4 h-4 ml-0.5 opacity-75 group-hover:opacity-100" />
                </button>
              ) : (
                <button
                  onClick={() => setTechViewMode('floating')}
                  className={`group flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-300 shadow-sm cursor-pointer active:scale-95 ${
                    isDark 
                      ? 'bg-indigo-600/20 text-indigo-300 border-indigo-500/40 hover:bg-indigo-600/30' 
                      : 'bg-indigo-50 text-indigo-600 border-indigo-200 hover:bg-indigo-100'
                  }`}
                  aria-label="Switch to Floating Stream"
                >
                  <SlidersHorizontal className="w-4 h-4 text-indigo-400 group-hover:rotate-180 transition-transform duration-300" />
                  <span>Floating Stream</span>
                </button>
              )}
            </div>
          </div>

          {/* VIEW MODE 1: FLOATING / HOVERING MARQUEE STREAM */}
          {techViewMode === 'floating' && (
            <div className="relative -mx-6 sm:-mx-10 py-4">
              
              {/* Left & Right Ambient Gradient Fade Masks for Infinite Floating Illusion */}
              <div className={`pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-40 z-20 bg-gradient-to-r ${
                isDark ? 'from-[#070b16] via-[#070b16]/80 to-transparent' : 'from-slate-100 via-slate-100/80 to-transparent'
              }`} />
              <div className={`pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-40 z-20 bg-gradient-to-l ${
                isDark ? 'from-[#070b16] via-[#070b16]/80 to-transparent' : 'from-slate-100 via-slate-100/80 to-transparent'
              }`} />

              <div className="flex flex-col gap-3.5 sm:gap-4.5 overflow-hidden">
                
                {/* Floating Row 1: Left Drift (Vite, React, HTML5, CSS3, JS, TS, Tailwind, Figma, Supabase, Framer...) */}
                <div className="flex overflow-hidden group py-1">
                  <div className="animate-marquee-left flex gap-3 sm:gap-4 pause-on-group-hover">
                    {[...floatingRow1, ...floatingRow1, ...floatingRow1, ...floatingRow1].map((tech, idx) => (
                      <div
                        key={`r1-${idx}`}
                        onClick={() => {
                          setActiveTechCategory(tech.category);
                          setTechViewMode('grid');
                        }}
                        className={`group/pill flex items-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl border transition-all duration-300 cursor-pointer select-none whitespace-nowrap shadow-sm hover:shadow-xl hover:scale-105 hover:-translate-y-1 active:scale-95 ${
                          isDark
                            ? 'bg-[#0a0f1d]/90 hover:bg-[#111933] border-slate-800/80 hover:border-indigo-500/80 hover:shadow-indigo-500/10 backdrop-blur-md'
                            : 'bg-white/95 hover:bg-white border-slate-200/90 hover:border-indigo-400 hover:shadow-indigo-100/70 shadow-sm backdrop-blur-md'
                        }`}
                        title={`Click to inspect ${tech.name} in Arsenal`}
                      >
                        <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center p-0.5 transition-transform group-hover/pill:scale-110 ${
                          isDark ? 'bg-slate-900/80' : 'bg-slate-50'
                        }`}>
                          <img src={tech.iconSrc} alt={tech.name} className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                        </div>
                        <span className={`text-xs sm:text-sm font-semibold tracking-tight transition-colors ${
                          isDark ? 'text-slate-200 group-hover/pill:text-white' : 'text-slate-800 group-hover/pill:text-indigo-600'
                        }`}>
                          {tech.name}
                        </span>
                        <span className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded-md font-semibold tracking-wider ${
                          isDark 
                            ? 'bg-slate-800/90 text-slate-400 group-hover/pill:bg-indigo-950/60 group-hover/pill:text-indigo-300' 
                            : 'bg-slate-100 text-slate-500 group-hover/pill:bg-indigo-50 group-hover/pill:text-indigo-600'
                        }`}>
                          {tech.categoryLabel}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Row 2: Right Drift (MySQL, PostgreSQL, Supabase, PHP, Laravel, Python, C#, ASP.NET, Java, MSSQL, Postman...) */}
                <div className="flex overflow-hidden group py-1">
                  <div className="animate-marquee-right flex gap-3 sm:gap-4 pause-on-group-hover">
                    {[...floatingRow2, ...floatingRow2, ...floatingRow2, ...floatingRow2].map((tech, idx) => (
                      <div
                        key={`r2-${idx}`}
                        onClick={() => {
                          setActiveTechCategory(tech.category);
                          setTechViewMode('grid');
                        }}
                        className={`group/pill flex items-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl border transition-all duration-300 cursor-pointer select-none whitespace-nowrap shadow-sm hover:shadow-xl hover:scale-105 hover:-translate-y-1 active:scale-95 ${
                          isDark
                            ? 'bg-[#0a0f1d]/90 hover:bg-[#111933] border-slate-800/80 hover:border-indigo-500/80 hover:shadow-indigo-500/10 backdrop-blur-md'
                            : 'bg-white/95 hover:bg-white border-slate-200/90 hover:border-indigo-400 hover:shadow-indigo-100/70 shadow-sm backdrop-blur-md'
                        }`}
                        title={`Click to inspect ${tech.name} in Arsenal`}
                      >
                        <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center p-0.5 transition-transform group-hover/pill:scale-110 ${
                          isDark ? 'bg-slate-900/80' : 'bg-slate-50'
                        }`}>
                          <img src={tech.iconSrc} alt={tech.name} className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                        </div>
                        <span className={`text-xs sm:text-sm font-semibold tracking-tight transition-colors ${
                          isDark ? 'text-slate-200 group-hover/pill:text-white' : 'text-slate-800 group-hover/pill:text-indigo-600'
                        }`}>
                          {tech.name}
                        </span>
                        <span className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded-md font-semibold tracking-wider ${
                          isDark 
                            ? 'bg-slate-800/90 text-slate-400 group-hover/pill:bg-indigo-950/60 group-hover/pill:text-indigo-300' 
                            : 'bg-slate-100 text-slate-500 group-hover/pill:bg-indigo-50 group-hover/pill:text-indigo-600'
                        }`}>
                          {tech.categoryLabel}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Row 3: Left Drift Fast (Figma, Canva, Git, GitHub, WordPress, Microsoft 365, VS Code, SAP, Tailwind, React...) */}
                <div className="flex overflow-hidden group py-1">
                  <div className="animate-marquee-left-fast flex gap-3 sm:gap-4 pause-on-group-hover">
                    {[...floatingRow3, ...floatingRow3, ...floatingRow3, ...floatingRow3].map((tech, idx) => (
                      <div
                        key={`r3-${idx}`}
                        onClick={() => {
                          setActiveTechCategory(tech.category);
                          setTechViewMode('grid');
                        }}
                        className={`group/pill flex items-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl border transition-all duration-300 cursor-pointer select-none whitespace-nowrap shadow-sm hover:shadow-xl hover:scale-105 hover:-translate-y-1 active:scale-95 ${
                          isDark
                            ? 'bg-[#0a0f1d]/90 hover:bg-[#111933] border-slate-800/80 hover:border-indigo-500/80 hover:shadow-indigo-500/10 backdrop-blur-md'
                            : 'bg-white/95 hover:bg-white border-slate-200/90 hover:border-indigo-400 hover:shadow-indigo-100/70 shadow-sm backdrop-blur-md'
                        }`}
                        title={`Click to inspect ${tech.name} in Arsenal`}
                      >
                        <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center p-0.5 transition-transform group-hover/pill:scale-110 ${
                          isDark ? 'bg-slate-900/80' : 'bg-slate-50'
                        }`}>
                          <img src={tech.iconSrc} alt={tech.name} className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                        </div>
                        <span className={`text-xs sm:text-sm font-semibold tracking-tight transition-colors ${
                          isDark ? 'text-slate-200 group-hover/pill:text-white' : 'text-slate-800 group-hover/pill:text-indigo-600'
                        }`}>
                          {tech.name}
                        </span>
                        <span className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded-md font-semibold tracking-wider ${
                          isDark 
                            ? 'bg-slate-800/90 text-slate-400 group-hover/pill:bg-indigo-950/60 group-hover/pill:text-indigo-300' 
                            : 'bg-slate-100 text-slate-500 group-hover/pill:bg-indigo-50 group-hover/pill:text-indigo-600'
                        }`}>
                          {tech.categoryLabel}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Quick Navigation & Interaction Hint */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 px-6 sm:px-10 text-xs">
                <div className={`flex items-center gap-2 font-mono ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                  <span>Hover to pause drift • Click any pill to inspect</span>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className={`font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Quick Filters:</span>
                  {[
                    { id: 'programming', label: 'Languages' },
                    { id: 'frontend', label: 'Frontend' },
                    { id: 'backend', label: 'Backend' },
                    { id: 'database', label: 'Databases' },
                    { id: 'design', label: 'Design' },
                    { id: 'microsoft', label: 'Microsoft' }
                  ].map(q => (
                    <button
                      key={q.id}
                      onClick={() => {
                        setActiveTechCategory(q.id);
                        setTechViewMode('grid');
                      }}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                        isDark 
                          ? 'bg-slate-900/80 hover:bg-indigo-950 text-slate-400 hover:text-indigo-300 border border-slate-800' 
                          : 'bg-white hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 border border-slate-200 shadow-xs'
                      }`}
                    >
                      {q.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* VIEW MODE 2: FULL CATEGORIZED GRID VIEW ('VIEW ALL') */}
          {techViewMode === 'grid' && (
            <div className="animate-in fade-in duration-300">
              
              {/* Category Filter Tabs & Quick Search */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                
                {/* Filter Pills */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 w-full md:w-auto">
                  {[
                    { id: 'all', label: 'All Arsenal' },
                    { id: 'programming', label: 'Programming' },
                    { id: 'frontend', label: 'Frontend' },
                    { id: 'backend', label: 'Backend & APIs' },
                    { id: 'database', label: 'Databases' },
                    { id: 'design', label: 'Design & UI/UX' },
                    { id: 'microsoft', label: 'Microsoft Tools' },
                    { id: 'tools', label: 'Tools & ERP' }
                  ].map(tab => {
                    const count = tab.id === 'all' 
                      ? skillsData.length 
                      : tab.id === 'microsoft'
                        ? skillsData.filter(s => s.category === 'microsoft' || s.name.includes('C#') || s.name.includes('ASP.NET') || s.name.includes('SQL Server') || s.name.includes('VS Code') || s.name.includes('Microsoft')).length
                        : tab.id === 'design'
                          ? skillsData.filter(s => s.category === 'design' || s.name === 'Figma' || s.name === 'Canva' || s.name === 'Framer').length
                          : tab.id === 'tools'
                            ? skillsData.filter(s => s.category === 'tools' || s.name === 'Git' || s.name === 'GitHub' || s.name === 'Unity 3D' || s.name === 'SAP S/4HANA' || s.name === 'WordPress' || s.name === 'Postman').length
                            : skillsData.filter(s => s.category === tab.id).length;


                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTechCategory(tab.id)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                          activeTechCategory === tab.id
                            ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 scale-105'
                            : isDark
                              ? 'bg-[#0a0f1d] text-slate-400 hover:text-white border border-slate-800'
                              : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm'
                        }`}
                      >
                        <span>{tab.label}</span>
                        <span className={`text-[10px] px-1.5 py-0.2 rounded-md font-mono ${
                          activeTechCategory === tab.id 
                            ? 'bg-white/20 text-white' 
                            : isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500'
                        }`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Instant Search Bar */}
                <div className="relative w-full md:w-64">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search stack, tool..."
                    value={techSearchQuery}
                    onChange={(e) => setTechSearchQuery(e.target.value)}
                    className={`w-full pl-9 pr-8 py-2 rounded-xl text-xs border transition-colors outline-none ${
                      isDark 
                        ? 'bg-[#0a0f1d] border-slate-800 text-white placeholder-slate-500 focus:border-indigo-500' 
                        : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-500 shadow-sm'
                    }`}
                  />
                  {techSearchQuery && (
                    <button
                      onClick={() => setTechSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

              </div>

              {/* Categorized Tech Cards Grid with Official SVGs & Descriptions */}
              {filteredSkills.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredSkills.map((tech, idx) => (
                    <div
                      key={idx}
                      className={`p-5 rounded-2xl border transition-all duration-300 hover:scale-[1.03] hover:shadow-xl flex flex-col items-center text-center justify-between group relative ${
                        isDark 
                          ? 'bg-[#0a0f1d]/90 border-slate-800/80 hover:border-indigo-500/50 hover:shadow-indigo-950/30' 
                          : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-indigo-100 shadow-sm'
                      }`}
                    >
                      {tech.badge && (
                        <span className={`absolute top-3 right-3 text-[9px] font-mono uppercase px-2 py-0.5 rounded-md font-semibold tracking-wider ${
                          isDark ? 'bg-indigo-950/80 text-indigo-300 border border-indigo-900/60' : 'bg-indigo-50 text-indigo-700 border border-indigo-100'
                        }`}>
                          {tech.badge}
                        </span>
                      )}

                      <div className="flex flex-col items-center pt-2">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110 p-2.5 ${
                          isDark ? 'bg-slate-900/90 border border-slate-800' : 'bg-slate-50 border border-slate-200 shadow-inner'
                        }`}>
                          <img src={tech.iconSrc} alt={tech.name} className="w-8 h-8 object-contain" />
                        </div>
                        <h3 className="font-bold text-sm mb-0.5 group-hover:text-indigo-400 transition-colors">
                          {tech.name}
                        </h3>
                        <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 font-semibold mb-2">
                          {tech.categoryLabel}
                        </span>
                      </div>

                      {tech.description && (
                        <p className={`text-[11px] leading-relaxed line-clamp-2 mt-1 ${
                          isDark ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                          {tech.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className={`p-12 text-center rounded-2xl border ${
                  isDark ? 'bg-[#0a0f1d] border-slate-800 text-slate-400' : 'bg-white border-slate-200 text-slate-600'
                }`}>
                  <p className="text-sm">No technologies found matching &ldquo;{techSearchQuery}&rdquo; in this category.</p>
                  <button
                    onClick={() => {
                      setTechSearchQuery('');
                      setActiveTechCategory('all');
                    }}
                    className="mt-3 px-4 py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-500 transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              )}

              {/* Back to Floating View Prompt */}
              <div className="mt-10 text-center">
                <button
                  onClick={() => setTechViewMode('floating')}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold border transition-all duration-300 ${
                    isDark
                      ? 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800'
                      : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 shadow-sm'
                  }`}
                >
                  <SlidersHorizontal className="w-4 h-4 text-indigo-400" />
                  <span>Return to Interactive Floating Stream</span>
                </button>
              </div>

            </div>
          )}

        </div>
      </section>


      {/* 03 - PROJECTS SHOWCASE */}
      <section id="projects" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto reveal-on-scroll">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b pb-4 border-slate-800/80">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-indigo-400 font-bold block mb-1">
                FEATURED WORK
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Projects Showcase
              </h2>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {['All', 'Web', 'Enterprise', 'Desktop'].map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveProjectFilter(filter)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                    activeProjectFilter === filter
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 scale-105'
                      : isDark
                        ? 'bg-[#0a0f1d] text-slate-400 hover:text-white border border-slate-800'
                        : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
            {filteredProjects.map((proj, idx) => (
              <ProjectCard3D 
                key={proj.title} 
                proj={proj} 
                idx={idx} 
                isDark={isDark} 
              />
            ))}
          </div>


        </div>
      </section>

      {/* 04 - LIVE GITHUB ACTIVITY & CONTRIBUTION GRAPH */}
      <section id="github-activity" className={`py-20 px-6 border-y relative z-10 transition-colors ${
        isDark ? 'bg-[#070b16]/90 border-slate-800/80' : 'bg-slate-100/60 border-slate-200'
      }`}>
        <div className="max-w-6xl mx-auto reveal-on-scroll">
          
          <div className="text-center mb-12">
            <span className="text-[11px] font-mono uppercase tracking-widest text-indigo-400 font-bold block mb-1">
              OPEN SOURCE & CODE ACTIVITY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              GitHub Contribution Graph
            </h2>
            <p className={`text-xs sm:text-sm mt-2 max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Live commit activity and repository metrics from my public GitHub account.
            </p>
          </div>

          {/* GitHub Contribution Heatmap Card */}
          <div className={`rounded-3xl border p-6 sm:p-8 mb-8 shadow-2xl overflow-hidden relative ${
            isDark ? 'bg-[#0a0f1d]/95 border-slate-800/90 shadow-indigo-950/20' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-600/10 border border-indigo-500/30 text-indigo-400">
                  <GithubIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base flex items-center gap-2">
                    <span>@{GITHUB_USERNAME}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                      Active
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400">Public contributions over the last year</p>
                </div>
              </div>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-500 transition-all shadow-md shadow-indigo-600/20 w-fit"
              >
                <span>Follow on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Live Contribution SVG */}
            <div className="overflow-x-auto pb-2 flex justify-center">
              <div className="min-w-[720px] p-4 rounded-2xl bg-slate-950/60 border border-slate-800/60 flex items-center justify-center">
                <img
                  src={`https://ghchart.rshah.org/6366f1/${GITHUB_USERNAME}`}
                  alt="Justin Allen Azucena's GitHub Contribution Chart"
                  className="w-full max-w-4xl h-auto"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 mt-4 text-[11px] text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <span>Less</span>
                <div className="flex gap-1">
                  <span className="w-3 h-3 rounded-sm bg-slate-800" />
                  <span className="w-3 h-3 rounded-sm bg-indigo-900" />
                  <span className="w-3 h-3 rounded-sm bg-indigo-600" />
                  <span className="w-3 h-3 rounded-sm bg-indigo-400" />
                </div>
                <span>More</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <GitCommit className="w-3.5 h-3.5 text-indigo-400" />
                  Verified Commits
                </span>
                <span className="flex items-center gap-1">
                  <GitPullRequest className="w-3.5 h-3.5 text-purple-400" />
                  Pull Requests
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-400" />
                  Open Source
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 05 - EDUCATION & ACADEMIC BACKGROUND WITH PROPORTIONAL CLEAN LOGOS */}
      <section id="experience" className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto reveal-on-scroll">
          
          <div className="text-center mb-12">
            <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-bold block mb-1">
              ACADEMIC JOURNEY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Education & Honors
            </h2>
          </div>

          <div className="space-y-6">
            {education.map((item, idx) => (
              <div 
                key={idx}
                className={`p-6 sm:p-8 rounded-3xl border transition-all hover:scale-[1.01] ${
                  isDark ? 'bg-[#0a0f1d]/90 border-slate-800/80 hover:border-slate-700' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                  
                  {/* Clean School Logo Frame */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shrink-0 border border-slate-700/80 shadow-md bg-white flex items-center justify-center p-2 group-hover:scale-105 transition-transform">
                    <img 
                      src={item.logo} 
                      alt={item.institution} 
                      className="w-full h-full object-contain" 
                    />
                  </div>

                  {/* Degree and Institution Details */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                      <h3 className="text-lg font-bold text-indigo-400 leading-snug">
                        {item.degree}
                      </h3>
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 w-fit">
                        {item.period}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-sm font-semibold mb-3 text-slate-300">
                      <Building2 className="w-4 h-4 text-purple-400 shrink-0" />
                      <span>{item.institution}</span>
                      {item.honors && (
                        <span className="text-xs font-bold text-amber-300 bg-amber-950/60 border border-amber-500/40 px-2.5 py-0.5 rounded-full">
                          🏅 {item.honors}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {item.details}
                </p>

                {/* Industry Work Immersion / OJT Showcase */}
                {item.ojt && (
                  <div className={`mb-4 p-3 sm:p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    isDark ? 'bg-slate-950/60 border-slate-800/80' : 'bg-slate-50 border-slate-200 shadow-sm'
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className="h-10 px-2.5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-center overflow-hidden shrink-0">
                        <img src={item.ojt.logo} alt={item.ojt.company} className="h-6 w-auto object-contain" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                            {item.ojt.company}
                          </span>
                          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                            Industry OJT
                          </span>
                        </div>
                        <p className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                          {item.ojt.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5">
                  {item.skills.map(s => (
                    <span key={s} className={`text-xs px-2.5 py-0.5 rounded-md font-mono border ${
                      isDark ? 'bg-slate-950 text-slate-300 border-slate-800' : 'bg-slate-100 text-slate-700 border-slate-200'
                    }`}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 06 - CERTIFICATES GALLERY */}
      <section id="certificates" className={`py-20 px-6 border-t relative z-10 transition-colors ${
        isDark ? 'bg-[#070b16]/90 border-slate-800/80' : 'bg-slate-100/60 border-slate-200'
      }`}>
        <div className="max-w-6xl mx-auto reveal-on-scroll">
          
          <div className="text-center mb-12">
            <span className="text-[11px] font-mono uppercase tracking-widest text-pink-400 font-bold block mb-1">
              CREDENTIALS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Certificates & Awards
            </h2>
            <p className={`text-xs sm:text-sm mt-2 max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Click any certificate below to inspect the verified official document.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                onClick={() => setSelectedCert(cert)}
                className={`group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl flex flex-col justify-between ${
                  isDark ? 'bg-[#0a0f1d]/90 border-slate-800/80 hover:border-purple-500/50' : 'bg-white border-slate-200 hover:border-purple-300 shadow-sm'
                }`}
              >
                <div className="relative aspect-[16/11] bg-slate-900 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
                  <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-slate-900/90 border border-slate-700 text-purple-300 backdrop-blur-sm">
                    {cert.category}
                  </span>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-xs mb-1 group-hover:text-purple-400 transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-1 text-[11px] text-purple-400 font-medium mb-2">
                      <Building2 className="w-3 h-3" />
                      <span>{cert.issuer}</span>
                    </div>
                  </div>

                  <div className={`flex items-center justify-between pt-2 border-t text-[11px] ${
                    isDark ? 'border-slate-800 text-slate-500' : 'border-slate-100 text-slate-400'
                  }`}>
                    <span>{cert.date}</span>
                    <span className="text-purple-400 font-bold inline-flex items-center gap-0.5">
                      Inspect
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal Lightbox */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className={`relative max-w-3xl w-full border rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 ${
              isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[60vh] overflow-hidden rounded-2xl bg-slate-950 flex items-center justify-center border border-slate-800 mb-6 shadow-inner">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-h-[60vh] w-auto object-contain"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-purple-500/10 border border-purple-500/30 text-purple-400 font-mono">
                  {selectedCert.category}
                </span>
                <span className="text-xs text-slate-400">Issued: {selectedCert.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-1">
                {selectedCert.title}
              </h3>
              <p className="text-sm font-semibold text-purple-400 mb-2">{selectedCert.issuer}</p>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                {selectedCert.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 07 - CONTACT SECTION */}
      <section id="contact" className="py-20 px-6 max-w-3xl mx-auto w-full relative z-10">
        <div className={`rounded-3xl border p-8 sm:p-12 shadow-2xl reveal-on-scroll ${
          isDark ? 'bg-[#0a0f1d]/95 border-slate-800/80' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="text-center mb-8">
            <span className="text-[11px] font-mono uppercase tracking-widest text-teal-400 font-bold block mb-1">
              GET IN TOUCH
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Let us Connect & Collaborate
            </h2>
            <p className="text-xs text-slate-400">
              Reach out for software opportunities, full-stack projects, or hackathons.
            </p>
          </div>

          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold mb-1 text-slate-300">Name</label>
              <input 
                type="text" 
                required
                placeholder="Justin / Recruiter" 
                className={`w-full px-4 py-3 rounded-xl border text-xs focus:outline-none focus:border-indigo-500 transition-colors ${
                  isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                }`}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1 text-slate-300">Email</label>
              <input 
                type="email" 
                required
                placeholder="you@domain.com" 
                className={`w-full px-4 py-3 rounded-xl border text-xs focus:outline-none focus:border-indigo-500 transition-colors ${
                  isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                }`}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1 text-slate-300">Message</label>
              <textarea 
                rows={4} 
                required
                placeholder="Your project inquiry or message..." 
                className={`w-full px-4 py-3 rounded-xl border text-xs resize-none focus:outline-none focus:border-indigo-500 transition-colors ${
                  isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                }`}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30"
            >
              {formSubmitted ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-green-300" />
                  Message Sent Successfully!
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className={`mt-auto border-t py-10 px-6 text-center text-xs relative z-10 ${
        isDark ? 'border-slate-800/80 text-slate-500 bg-[#05070e]' : 'border-slate-200 text-slate-500 bg-slate-50'
      }`}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
          <p>© {new Date().getFullYear()} Justin Allen Azucena</p>
          <div className="flex items-center gap-4">
            <a href="/resume.html" target="_blank" rel="noreferrer" className="hover:text-indigo-400">Resume</a>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-indigo-400">GitHub</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="hover:text-indigo-400">LinkedIn</a>
            <span className="cursor-pointer hover:text-indigo-400" onClick={copyDiscord}>Discord (spieler02.)</span>
            <a href="mailto:azucenajustinallen@gmail.com" className="hover:text-indigo-400">Email</a>
          </div>
          <p>React 19 + Vite</p>
        </div>
      </footer>

    </div>
  );
}
