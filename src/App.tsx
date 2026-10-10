import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  X, 
  Menu,
  ChevronLeft,
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
  Search,
  LayoutGrid,
  SlidersHorizontal
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

// Curated Floating Marquee Rows for Tech Stack Roulette
const floatingRow1: TechSkillItem[] = [
  { name: 'Vite', iconSrc: viteIcon, category: 'frontend', categoryLabel: 'Frontend' },
  { name: 'React 19', iconSrc: reactIcon, category: 'frontend', categoryLabel: 'Frontend' },
  { name: 'Vercel', iconSrc: vercelIcon, category: 'tools', categoryLabel: 'Hosting' },
  { name: 'HTML5', iconSrc: html5Icon, category: 'frontend', categoryLabel: 'Frontend' },
  { name: 'CSS3', iconSrc: css3Icon, category: 'frontend', categoryLabel: 'Frontend' },
  { name: 'JavaScript', iconSrc: jsIcon, category: 'programming', categoryLabel: 'Language' },
  { name: 'TypeScript', iconSrc: tsIcon, category: 'programming', categoryLabel: 'Language' },
  { name: 'Tailwind CSS', iconSrc: tailwindIcon, category: 'frontend', categoryLabel: 'Frontend' },
  { name: 'Figma', iconSrc: figmaIcon, category: 'design', categoryLabel: 'Design' },
  { name: 'Supabase', iconSrc: supabaseIcon, category: 'backend', categoryLabel: 'Backend' },
  { name: 'Unity 3D', iconSrc: unityIcon, category: 'tools', categoryLabel: 'Game Engine' },
  { name: 'Framer', iconSrc: framerIcon, category: 'frontend', categoryLabel: 'Motion' }
];

const floatingRow2: TechSkillItem[] = [
  { name: 'MySQL', iconSrc: mysqlIcon, category: 'database', categoryLabel: 'Database' },
  { name: 'PostgreSQL', iconSrc: postgresIcon, category: 'database', categoryLabel: 'Database' },
  { name: 'Supabase', iconSrc: supabaseIcon, category: 'backend', categoryLabel: 'BaaS & Cloud' },
  { name: 'Render', iconSrc: renderIcon, category: 'tools', categoryLabel: 'Cloud' },
  { name: 'PHP', iconSrc: phpIcon, category: 'programming', categoryLabel: 'Language' },
  { name: 'Netlify', iconSrc: netlifyIcon, category: 'tools', categoryLabel: 'Deployment' },
  { name: 'Laravel', iconSrc: laravelIcon, category: 'backend', categoryLabel: 'Backend' },
  { name: 'Python', iconSrc: pythonIcon, category: 'programming', categoryLabel: 'AI & Data' },
  { name: 'C# / .NET', iconSrc: csharpIcon, category: 'programming', categoryLabel: 'Enterprise' },
  { name: 'ASP.NET Core', iconSrc: dotnetIcon, category: 'backend', categoryLabel: 'Backend' },
  { name: 'Java', iconSrc: javaIcon, category: 'programming', categoryLabel: 'Desktop' },
  { name: 'SQL Server', iconSrc: mssqlIcon, category: 'database', categoryLabel: 'Database' },
  { name: 'Postman', iconSrc: postmanIcon, category: 'tools', categoryLabel: 'API Tool' }
];

const floatingRow3: TechSkillItem[] = [
  { name: 'Figma', iconSrc: figmaIcon, category: 'design', categoryLabel: 'UI/UX Design' },
  { name: 'Canva', iconSrc: canvaIcon, category: 'design', categoryLabel: 'Visual Design' },
  { name: 'Git', iconSrc: gitIcon, category: 'tools', categoryLabel: 'Version Control' },
  { name: 'GitHub', iconSrc: githubIcon, category: 'tools', categoryLabel: 'DevOps & Git' },
  { name: 'WordPress', iconSrc: wordpressIcon, category: 'tools', categoryLabel: 'CMS & Web' },
  { name: 'Android Studio', iconSrc: androidStudioIcon, category: 'tools', categoryLabel: 'Mobile IDE' },
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
  award?: string;
}

function ProjectCard({ 
  proj, 
  isDark 
}: { 
  proj: Project; 
  isDark: boolean; 
}) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`w-full h-full rounded-2xl border transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5 hover:shadow-2xl spotlight-card ${
        proj.highlight
          ? isDark
            ? 'bg-zinc-900/80 backdrop-blur-md border-indigo-500/50 hover:border-indigo-400 shadow-indigo-950/20 shadow-md ring-1 ring-indigo-500/20'
            : 'bg-white/95 backdrop-blur-md border-indigo-300/80 hover:border-indigo-500 shadow-indigo-100 shadow-lg ring-1 ring-indigo-400/20'
          : isDark 
            ? 'bg-zinc-900/60 backdrop-blur-md border-zinc-800/80 hover:border-indigo-500/40 hover:shadow-indigo-500/10' 
            : 'bg-white/95 backdrop-blur-md border-slate-200/90 hover:border-indigo-400/60 hover:shadow-xl hover:shadow-indigo-500/10 shadow-sm'
      }`}
    >
      <div>
        {/* Screenshot Frame with macOS Style Browser Window */}
        <div className={`relative aspect-[16/10] w-full overflow-hidden border-b ${
          isDark ? 'bg-zinc-900/90 border-zinc-800/80' : 'bg-slate-100 border-slate-200'
        }`}>
          {/* Window Header */}
          <div className={`absolute top-0 inset-x-0 h-7 px-3 flex items-center justify-between z-10 border-b backdrop-blur-md transition-colors ${
            isDark ? 'bg-zinc-950/85 border-zinc-800/70' : 'bg-slate-50/90 border-slate-200'
          }`}>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 border border-rose-600/30 group-hover:bg-rose-500 transition-colors" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 border border-amber-600/30 group-hover:bg-amber-500 transition-colors" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 border border-emerald-600/30 group-hover:bg-emerald-500 transition-colors" />
            </div>
            
            <div className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono font-medium border flex items-center gap-1.5 max-w-[170px] truncate ${
              isDark ? 'bg-zinc-900/90 border-zinc-800 text-zinc-400' : 'bg-white border-slate-200 text-slate-600 shadow-2xs'
            }`}>
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
              <span className="truncate">{proj.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.app</span>
            </div>

            <div className="w-6" />
          </div>

          <img 
            src={proj.image} 
            alt={proj.title} 
            className="w-full h-full object-cover object-top pt-7 group-hover:scale-105 transition-transform duration-500 ease-out" 
          />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <div className="flex items-center gap-1.5">
              <span className={`text-[10px] font-mono uppercase tracking-wider font-bold ${
                isDark ? 'text-indigo-400' : 'text-indigo-600'
              }`}>
                {proj.category}
              </span>
              {proj.award && (
                <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full border font-bold flex items-center gap-1 shadow-2xs ${
                  isDark
                    ? 'bg-amber-500/15 text-amber-300 border-amber-500/30'
                    : 'bg-amber-50 text-amber-800 border-amber-200'
                }`}>
                  <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                  {proj.award}
                </span>
              )}
            </div>

            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border font-semibold flex items-center gap-1 ${
              isDark 
                ? 'bg-zinc-900/90 border-zinc-800 text-zinc-300' 
                : 'bg-indigo-50/80 border-indigo-200 text-indigo-700'
            }`}>
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              {proj.badge}
            </span>
          </div>

          <h3 className={`text-base sm:text-lg font-bold tracking-tight mb-1.5 transition-colors ${
            isDark ? 'text-white group-hover:text-indigo-300' : 'text-slate-900 group-hover:text-indigo-600'
          }`}>
            {proj.title}
          </h3>

          <p className={`text-xs leading-relaxed line-clamp-3 mb-3 font-normal ${
            isDark ? 'text-zinc-400' : 'text-slate-600'
          }`}>
            {proj.description}
          </p>
        </div>
      </div>

      <div className="p-4 sm:p-5 pt-0">
        <div className="flex flex-wrap gap-1.5 mb-3.5">
          {proj.tags.map(t => (
            <span key={t} className={`text-[10px] px-2.5 py-0.5 rounded-md font-mono border transition-all duration-200 ${
              isDark 
                ? 'bg-zinc-900/80 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-200' 
                : 'bg-slate-50 text-slate-700 border-slate-200 font-medium hover:border-slate-300'
            }`}>
              {t}
            </span>
          ))}
        </div>

        <div className={`pt-3 border-t flex items-center justify-between text-xs ${
          isDark ? 'border-zinc-800/80' : 'border-slate-200'
        }`}>
          {proj.githubUrl && (
            <a
              href={proj.githubUrl}
              target="_blank"
              rel="noreferrer"
              className={`group/btn inline-flex items-center gap-1.5 font-medium text-xs px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                isDark 
                  ? 'bg-zinc-900 text-zinc-200 border-zinc-800 hover:bg-zinc-800 hover:text-white hover:border-zinc-700' 
                  : 'bg-slate-900 text-white border-slate-900 hover:bg-slate-800 shadow-2xs'
              }`}
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source Code</span>
              <ArrowRight className="w-3 h-3 opacity-60 group-hover/btn:translate-x-0.5 transition-transform" />
            </a>
          )}
          {proj.liveUrl && (
            <a
              href={proj.liveUrl}
              target="_blank"
              rel="noreferrer"
              className={`text-xs font-semibold hover:underline flex items-center gap-1 transition-colors ${
                isDark ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'
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
      document.body.style.backgroundColor = '#090a0f';
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      document.body.style.backgroundColor = '#f8fafc';
    }
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch {}
  }, [theme]);

  const [activeTechCategory, setActiveTechCategory] = useState<string>('all');
  const [techViewMode, setTechViewMode] = useState<'floating' | 'grid'>('floating');
  const [techSearchQuery, setTechSearchQuery] = useState<string>('');
  const [activeProjectFilter, setActiveProjectFilter] = useState<string>('All');
  const [activeNavSection, setActiveNavSection] = useState<string>('hero');
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [activeCertDocIndex, setActiveCertDocIndex] = useState<number>(0);
  const [contactData, setContactData] = useState({ name: '', email: '', message: '' });
  const [contactStatus, setContactStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [contactFeedback, setContactFeedback] = useState<string>('');
  const [discordCopied, setDiscordCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Atmospheric Developer Preloader (~1600ms)
  const [siteLoading, setSiteLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [loadFadeOut, setLoadFadeOut] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 1600; // 1.6s cinematic boot
    
    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      // Smooth non-linear curve: fast initial ramp-up, natural deceleration, snappy 100%
      const eased = t < 0.65 
        ? Math.pow(t / 0.65, 0.9) * 0.72 
        : 0.72 + Math.pow((t - 0.65) / 0.35, 1.2) * 0.28;
      const progress = Math.min(Math.round(eased * 100), 100);
      setLoadProgress(progress);

      if (elapsed < duration) {
        requestAnimationFrame(tick);
      } else {
        setLoadProgress(100);
        setLoadFadeOut(true);
        setTimeout(() => {
          setSiteLoading(false);
        }, 400);
      }
    };
    const animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  useEffect(() => {
    if (siteLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [siteLoading]);

  // Horizontal Carousel Refs & Scroll Handlers
  const projectsScrollRef = useRef<HTMLDivElement>(null);
  const certsScrollRef = useRef<HTMLDivElement>(null);

  const scrollProjects = (direction: 'left' | 'right') => {
    if (projectsScrollRef.current) {
      const amount = projectsScrollRef.current.clientWidth * 0.75;
      projectsScrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth'
      });
    }
  };

  const scrollCerts = (direction: 'left' | 'right') => {
    if (certsScrollRef.current) {
      const amount = certsScrollRef.current.clientWidth * 0.75;
      certsScrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth'
      });
    }
  };

  // Reset project scroll on category change
  useEffect(() => {
    if (projectsScrollRef.current) {
      projectsScrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeProjectFilter]);

  // Intersection observer for silky smooth reveal on scroll (bidirectional: down & up)
  useEffect(() => {
    if (siteLoading) return;

    let observer: IntersectionObserver | null = null;

    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
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
        { threshold: 0.06, rootMargin: '0px 0px -30px 0px' }
      );

      const elements = document.querySelectorAll('.reveal-on-scroll, .slide-in-from-left, .slide-in-from-right');
      elements.forEach((el) => observer!.observe(el));
    }, 60);

    return () => {
      clearTimeout(timer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [siteLoading, techViewMode]);

  // Scrollspy for active navbar indicator
  useEffect(() => {
    const sections = ['about', 'skills', 'projects', 'github-activity', 'experience', 'certificates', 'contact'];
    
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)));
      }

      const scrollPos = window.scrollY + 180;
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

  const handleCardMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  const toggleTheme = (e?: React.MouseEvent) => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';

    const doc = document as any;
    const isAppearanceTransition =
      typeof doc !== 'undefined' &&
      typeof doc.startViewTransition === 'function' &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isAppearanceTransition || !e) {
      document.documentElement.classList.add('theme-transitioning');
      setTheme(nextTheme);
      window.setTimeout(() => {
        document.documentElement.classList.remove('theme-transitioning');
      }, 550);
      return;
    }

    const rect = (e.currentTarget as HTMLElement)?.getBoundingClientRect?.() || {
      left: window.innerWidth - 80,
      top: 24,
      width: 32,
      height: 32
    };
    const x = e.clientX && e.clientX > 0 ? e.clientX : rect.left + rect.width / 2;
    const y = e.clientY && e.clientY > 0 ? e.clientY : rect.top + rect.height / 2;

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = doc.startViewTransition(() => {
      setTheme(nextTheme);
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`
      ];
      
      doc.documentElement.animate(
        {
          clipPath: clipPath,
        },
        {
          duration: 500,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          pseudoElement: '::view-transition-new(root)',
        }
      );
    }).catch(() => {
      setTheme(nextTheme);
    });
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
      highlight: true,
      award: 'Top 30 Finalist'
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
    <div className={`min-h-screen transition-colors duration-200 flex flex-col font-sans selection:bg-indigo-500 selection:text-white relative w-full overflow-x-hidden ${
      isDark ? 'bg-[#090a0f] text-zinc-100' : 'bg-[#f8fafc] text-slate-900'
    }`}>
      {/* Microscopic Analog Film Grain Texture Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-[90] opacity-[0.022] mix-blend-overlay contrast-150" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
        aria-hidden="true"
      />

      {/* Blueprint Dot Matrix Ambient Backdrop Canvas */}
      <div 
        className={`fixed inset-0 pointer-events-none -z-20 transition-opacity duration-500 ${
          isDark ? 'opacity-30' : 'opacity-15'
        }`}
        style={{
          backgroundImage: isDark 
            ? `radial-gradient(rgba(129, 140, 248, 0.25) 1px, transparent 1px)` 
            : `radial-gradient(rgba(99, 102, 241, 0.2) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse at 50% 30%, black 40%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, black 40%, transparent 85%)'
        }}
        aria-hidden="true"
      />
      
      {/* Atmospheric Developer Preloader Screen */}
      {siteLoading && (
        <div 
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-400 ease-out select-none ${
            loadFadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
          } ${
            isDark ? 'bg-[#090a0f] text-white' : 'bg-[#f8fafc] text-slate-900'
          }`}
        >
          {/* Subtle Ambient Radial Glow */}
          <div className={`absolute w-96 h-96 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow ${
            isDark ? 'bg-indigo-600/15' : 'bg-indigo-300/40'
          }`} />

          <div className="flex flex-col items-center max-w-sm text-center px-6">
            {/* Monogram Box with pulsing status */}
            <div className={`relative w-16 h-16 rounded-2xl border flex items-center justify-center mb-5 transition-transform duration-300 shadow-xl ${
              isDark 
                ? 'bg-zinc-900/90 border-zinc-800 shadow-indigo-950/40 text-white' 
                : 'bg-white border-slate-200 shadow-slate-200/60 text-slate-900'
            }`}>
              <span className="font-mono font-extrabold text-2xl tracking-tight bg-gradient-to-br from-indigo-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                JA
              </span>
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-500 animate-pulse border-2 border-inherit shadow-xs" />
            </div>

            {/* Developer Identity with Italic Emphasis */}
            <h1 className={`text-lg sm:text-xl font-extrabold tracking-tight mb-1 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Justin Allen <span className={`font-serif-italic font-normal ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Azucena</span>
            </h1>
            <p className={`text-[11px] font-mono uppercase tracking-widest mb-6 ${
              isDark ? 'text-zinc-400' : 'text-slate-500'
            }`}>
              Software Engineer // 2026
            </p>

            {/* Glowing Linear Progress Bar */}
            <div className={`w-60 sm:w-68 h-1.5 rounded-full overflow-hidden mb-3 p-0.5 border ${
              isDark ? 'bg-zinc-900/80 border-zinc-800' : 'bg-slate-200/80 border-slate-300'
            }`}>
              <div 
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400 transition-all duration-100 ease-out rounded-full shadow-xs"
                style={{ width: `${loadProgress}%` }}
              />
            </div>

            {/* Status Text & Percentage */}
            <div className={`w-60 sm:w-68 flex items-center justify-between text-[10px] font-mono ${
              isDark ? 'text-zinc-400' : 'text-slate-500'
            }`}>
              <span className="flex items-center gap-1.5 truncate pr-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping inline-block shrink-0" />
                <span className="truncate">
                  {loadProgress < 25 
                    ? 'INITIALIZING DEV RUNTIME...' 
                    : loadProgress < 55 
                    ? 'LOADING TECH ARSENAL...' 
                    : loadProgress < 85 
                    ? 'FETCHING REPOSITORIES...' 
                    : loadProgress < 100 
                    ? 'CALIBRATING WORKSPACE...' 
                    : 'SYSTEM READY'}
                </span>
              </span>
              <span className="font-semibold shrink-0">{loadProgress}%</span>
            </div>
          </div>
        </div>
      )}

      {/* Sleek Widescreen Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-200 w-full ${
        isDark ? 'bg-[#090a0f]/90 border-zinc-800/90 shadow-sm' : 'bg-white/95 border-slate-200 shadow-xs'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between relative z-10 w-full">
          <a href="#" className="font-semibold text-sm tracking-tight flex items-center gap-2 group">
            <span className={`h-7 w-7 rounded-lg border flex items-center justify-center text-xs font-mono font-bold transition-all ${
              isDark 
                ? 'bg-zinc-900 border-zinc-800 text-white group-hover:border-zinc-700' 
                : 'bg-slate-100 border-slate-200 text-slate-900 group-hover:border-slate-300'
            }`}>
              JA
            </span>
            <span className={`text-xs sm:text-sm font-bold tracking-tight transition-colors ${
              isDark ? 'text-zinc-100 group-hover:text-white' : 'text-slate-900 group-hover:text-black'
            }`}>
              Justin Allen <span className={`font-serif-italic font-normal ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Azucena</span>
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold">
            {navLinks.map((link) => {
              const isActive = activeNavSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`py-1 transition-colors ${
                    isActive 
                      ? isDark ? 'text-white font-bold' : 'text-indigo-600 font-bold'
                      : isDark ? 'text-zinc-400 hover:text-white' : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Theme Toggle Button with Spring Morph & Ambient Aura */}
            <button
              onClick={(e) => toggleTheme(e)}
              className={`relative group p-1.5 sm:p-2 rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden active:scale-90 hover:scale-105 shadow-xs ${
                isDark 
                  ? 'bg-zinc-900/90 border-zinc-700/80 hover:border-amber-400/50 shadow-amber-500/5 text-amber-300 hover:text-amber-200' 
                  : 'bg-white border-slate-200 hover:border-indigo-400/60 shadow-slate-200/80 text-indigo-600 hover:text-indigo-700'
              }`}
              title={isDark ? "Switch to light theme" : "Switch to dark theme"}
              aria-label="Toggle theme"
            >
              {/* Ambient radial aura glow behind icon */}
              <span className={`absolute inset-0 rounded-xl transition-opacity duration-300 blur-sm pointer-events-none opacity-0 group-hover:opacity-100 ${
                isDark ? 'bg-amber-400/20' : 'bg-indigo-500/15'
              }`} />

              <div className="relative w-4 h-4 flex items-center justify-center">
                {/* Sun Icon */}
                <Sun 
                  className={`w-4 h-4 text-amber-400 absolute transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                    isDark 
                      ? 'scale-100 rotate-0 opacity-100 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]' 
                      : 'scale-0 -rotate-90 opacity-0 pointer-events-none'
                  }`} 
                />
                
                {/* Moon Icon */}
                <Moon 
                  className={`w-4 h-4 text-indigo-600 absolute transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                    !isDark 
                      ? 'scale-100 rotate-0 opacity-100 drop-shadow-[0_0_8px_rgba(79,70,229,0.4)]' 
                      : 'scale-0 rotate-90 opacity-0 pointer-events-none'
                  }`} 
                />
              </div>
            </button>

            <a 
              href={GITHUB_URL} 
              target="_blank" 
              rel="noreferrer"
              className={`p-1.5 sm:p-2 rounded-lg border transition-colors ${
                isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700' : 'bg-white border-slate-200 text-slate-700 hover:text-slate-950 hover:border-slate-300 shadow-xs'
              }`}
              title="GitHub Profile"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>

            <a 
              href={LINKEDIN_URL} 
              target="_blank" 
              rel="noreferrer"
              className={`p-1.5 sm:p-2 rounded-lg border transition-colors ${
                isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-blue-400 hover:border-zinc-700' : 'bg-white border-slate-200 text-slate-700 hover:text-blue-600 hover:border-slate-300 shadow-xs'
              }`}
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={copyDiscord}
              className={`p-1.5 sm:p-2 rounded-lg border transition-colors cursor-pointer ${
                isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-indigo-400 hover:border-zinc-700' : 'bg-white border-slate-200 text-slate-700 hover:text-indigo-600 hover:border-slate-300 shadow-xs'
              }`}
              title="Discord: spieler02."
              aria-label="Copy Discord handle"
            >
              {discordCopied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <DiscordIcon className="w-3.5 h-3.5" />}
            </button>

            <a 
              href="#contact"
              className={`hidden sm:inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                isDark 
                  ? 'bg-zinc-100 text-zinc-950 border-zinc-100 hover:bg-white' 
                  : 'bg-indigo-600 text-white border-indigo-600 hover:bg-indigo-500 shadow-xs'
              }`}
            >
              Get in Touch
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className={`md:hidden p-1.5 rounded-lg border transition-colors ${
                isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-300' : 'bg-white border-slate-200 text-slate-700'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-t px-4 py-3 flex flex-col gap-1 transition-all ${
            isDark ? 'bg-[#090a0f] border-zinc-800 text-zinc-300' : 'bg-white border-slate-200 text-slate-800'
          }`}>
            {navLinks.map((link) => {
              const isActive = activeNavSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? isDark ? 'bg-zinc-800 text-white' : 'bg-indigo-50 text-indigo-700 font-bold'
                      : isDark ? 'hover:bg-zinc-900 hover:text-white' : 'hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <ChevronRight className="w-3 h-3 opacity-70" />}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`mt-2 w-full py-2 px-3 rounded-lg text-xs font-bold text-center transition-colors ${
                isDark ? 'bg-zinc-100 text-zinc-950 hover:bg-white' : 'bg-indigo-600 text-white hover:bg-indigo-500'
              }`}
            >
              Get in Touch
            </a>
          </div>
        )}

        {/* 1.5px Iridescent Scroll Reading Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-transparent overflow-hidden pointer-events-none">
          <div 
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-400 transition-all duration-75 ease-out shadow-[0_0_8px_rgba(99,102,241,0.6)]"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* Header spacer */}
      <div className="h-14 shrink-0 w-full" aria-hidden="true" />

      {/* Hero Section - Widescreen & Space Balanced with Ambient Glow */}
      <section id="hero" className="relative pt-8 pb-10 sm:pt-14 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
        {/* Ambient Gradient Glows */}
        <div className={`absolute -top-24 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow ${
          isDark ? 'bg-indigo-600/15' : 'bg-indigo-300/35'
        }`} />
        <div className={`absolute top-1/2 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow ${
          isDark ? 'bg-purple-600/10' : 'bg-purple-200/40'
        }`} style={{ animationDelay: '2.5s' }} />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-10 lg:gap-14 reveal-on-scroll text-center md:text-left">
          
          {/* Profile Avatar Frame with Float Animation */}
          <div className="shrink-0 animate-float">
            <div className={`relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-3xl overflow-hidden border shadow-xl p-1 transition-all duration-300 ${
              isDark 
                ? 'bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-zinc-900 border-zinc-800 shadow-indigo-950/30' 
                : 'bg-gradient-to-br from-indigo-500/15 via-purple-500/10 to-white border-slate-200/90 shadow-slate-200/70'
            }`}>
              <div className="w-full h-full rounded-[22px] overflow-hidden">
                <img 
                  src={profileImg} 
                  alt="Justin Allen Azucena" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 max-w-4xl">
            {/* Interactive Availability Status Pill */}
            <a 
              href="#contact"
              className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3.5 border transition-all duration-300 hover:scale-[1.02] active:scale-95 group/status cursor-pointer ${
                isDark 
                  ? 'bg-zinc-900/90 hover:bg-zinc-800/90 border-zinc-800 hover:border-emerald-500/40 text-zinc-300 shadow-sm' 
                  : 'bg-white/95 hover:bg-emerald-50/60 border-slate-200 hover:border-emerald-300 text-slate-800 shadow-xs'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>
                Available for <span className={`font-serif-italic font-normal tracking-normal text-[1.15em] ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Opportunities</span>
                <span className="opacity-40 mx-1.5">•</span>
                <span className={`text-[11px] font-mono font-medium ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>Graduating 2026</span>
              </span>
              <ArrowRight className="w-3 h-3 opacity-40 group-hover/status:opacity-100 group-hover/status:translate-x-0.5 transition-all" />
            </a>

            <h1 className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3 leading-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Justin Allen <span className={`font-serif-italic font-normal ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Azucena</span>
            </h1>

            <p className={`text-xs sm:text-base lg:text-lg leading-relaxed mb-6 font-normal max-w-3xl ${
              isDark ? 'text-zinc-300' : 'text-slate-700'
            }`}>
              Information Technology student & developer specializing in <span className={`font-serif-italic font-normal text-[1.12em] ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>scalable full-stack</span> web platforms, enterprise .NET backends, and desktop database architectures. <span className={`font-serif-italic font-normal text-[1.12em] ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Top 30 Finalist</span> in the nationwide eGov PH Hackathon 2026.
            </p>

            {/* Quick Metadata */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 text-xs mb-6">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-medium hover:-translate-y-0.5 transition-all duration-200 ${
                isDark ? 'bg-zinc-900/60 border-zinc-800 text-zinc-300' : 'bg-white border-slate-200 text-slate-700 shadow-xs'
              }`}>
                <MapPin className={`w-3.5 h-3.5 ${isDark ? 'text-zinc-400' : 'text-indigo-600'}`} />
                Quezon City, PH
              </span>

              <a 
                href="mailto:azucenajustinallen@gmail.com"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-medium hover:-translate-y-0.5 transition-all duration-200 ${
                  isDark ? 'bg-zinc-900/60 border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700' : 'bg-white border-slate-200 text-slate-700 hover:text-indigo-600 hover:border-indigo-300 shadow-xs'
                }`}
              >
                <Mail className={`w-3.5 h-3.5 ${isDark ? 'text-zinc-400' : 'text-indigo-600'}`} />
                azucenajustinallen@gmail.com
              </a>

              <button
                onClick={copyDiscord}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-medium hover:-translate-y-0.5 transition-all duration-200 cursor-pointer ${
                  isDark ? 'bg-zinc-900/60 border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700' : 'bg-white border-slate-200 text-slate-700 hover:text-indigo-600 hover:border-indigo-300 shadow-xs'
                }`}
                title="Click to copy Discord handle"
              >
                <DiscordIcon className={`w-3.5 h-3.5 ${isDark ? 'text-zinc-400' : 'text-indigo-600'}`} />
                <span>{discordCopied ? 'Copied handle!' : 'spieler02.'}</span>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <a 
                href="#projects" 
                className={`inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-xs font-semibold transition-all shadow-xs ${
                  isDark 
                    ? 'bg-zinc-100 text-zinc-950 hover:bg-white' 
                    : 'bg-indigo-600 text-white hover:bg-indigo-500'
                }`}
              >
                <FolderGit2 className="w-3.5 h-3.5" />
                View Projects
              </a>
              
              <a 
                href="#github-activity" 
                className={`inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl border text-xs font-semibold transition-all shadow-xs ${
                  isDark 
                    ? 'bg-zinc-900 border-zinc-800 text-zinc-200 hover:bg-zinc-800 hover:text-white' 
                    : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50 hover:text-slate-950'
                }`}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                GitHub Activity
              </a>

              <a 
                href="/resume.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl border text-xs font-semibold transition-all shadow-xs ${
                  isDark 
                    ? 'bg-zinc-900/50 border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700' 
                    : 'bg-white border-indigo-200 text-indigo-700 hover:bg-indigo-50'
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
      <section id="about" className={`py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative z-10 border-t scroll-mt-14 ${
        isDark ? 'border-zinc-800/80' : 'border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto">
          
          <div className="relative mb-6 sm:mb-8 reveal-on-scroll">
            <span className={`font-serif-italic select-none pointer-events-none absolute -top-4 sm:-top-8 right-0 text-6xl sm:text-7xl lg:text-8xl font-normal leading-none tracking-tighter transition-colors ${
              isDark ? 'text-white/[0.05]' : 'text-slate-900/10'
            }`}>
              01
            </span>
            <span className={`text-[11px] font-mono uppercase tracking-wider font-bold block mb-1 ${
              isDark ? 'text-indigo-400' : 'text-indigo-600'
            }`}>
              GET TO KNOW ME
            </span>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight relative z-10 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              About <span className={`font-serif-italic font-normal ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Me</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* Bio Paragraphs */}
            <div 
              onMouseMove={handleCardMouseMove}
              className={`md:col-span-6 lg:col-span-6 p-6 sm:p-7 rounded-2xl border text-sm sm:text-base leading-relaxed space-y-4 backdrop-blur-md transition-all duration-300 hover:shadow-xl reveal-on-scroll spotlight-card ${
                isDark ? 'bg-zinc-900/60 border-zinc-800/90 hover:border-indigo-500/30 text-zinc-300' : 'bg-white/95 border-slate-200/90 hover:border-indigo-300 text-slate-800 shadow-sm'
              }`}
            >
              <p>
                I am a 4th-year <span className={`font-serif-italic font-normal text-[1.12em] ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Information Technology</span> student at <strong>STI Academic Center Novaliches (2023–Present)</strong> with a strong foundation in software engineering, database management, and algorithm design.
              </p>
              <p>
                My work focuses on developing <span className={`font-serif-italic font-normal text-[1.12em] ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>AI-integrated</span> full-stack web platforms, <span className={`font-serif-italic font-normal text-[1.12em] ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>enterprise .NET</span> backend solutions, and desktop database applications. Recognized as a <span className={`font-serif-italic font-normal text-[1.12em] ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Top 30 Finalist</span> nationwide in the <strong>eGov PH Hackathon 2026</strong> out of 150 teams for developing <em>eScholar</em>.
              </p>
              <p>
                Graduated Junior High School and Senior High School TVL-ICT at <strong>Lagro High School (2017–2023)</strong> with <span className={`font-serif-italic font-normal text-[1.12em] ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>High Honors</span>, completing industry work immersion at Centrive Technology and authoring the automated QR Code Attendance Management System for the research congress.
              </p>
            </div>

            {/* Focus Areas - 2 Column Grid to Maximize Width */}
            <div className="md:col-span-6 lg:col-span-6 space-y-3 reveal-on-scroll">
              <span className={`text-xs font-mono uppercase tracking-wider font-bold block mb-3 ${
                isDark ? 'text-zinc-400' : 'text-slate-600'
              }`}>
                Core Competencies & Focus Areas
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {interests.map((interest, i) => (
                  <div
                    key={i}
                    className={`p-3.5 sm:p-4 rounded-xl border flex items-center gap-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-default ${
                      isDark 
                        ? 'bg-zinc-900/60 backdrop-blur-md border-zinc-800/80 hover:border-indigo-500/40 text-zinc-300' 
                        : 'bg-white/95 backdrop-blur-md border-slate-200 hover:border-indigo-300 text-slate-800 shadow-2xs'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0 animate-pulse" />
                    <span className="text-xs sm:text-sm font-semibold">{interest}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 02 - SKILLS & TECHNOLOGIES WITH RESTORED TECH STACK ROULETTE */}
      <section id="skills" className={`py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t relative z-10 scroll-mt-14 overflow-hidden ${
        isDark ? 'bg-zinc-950/40 border-zinc-800/80' : 'bg-slate-100/60 border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto">
          
          <div className="relative flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-4 border-b pb-5 reveal-on-scroll">
            <span className={`font-serif-italic select-none pointer-events-none absolute -top-4 sm:-top-8 right-0 text-6xl sm:text-7xl lg:text-8xl font-normal leading-none tracking-tighter transition-colors ${
              isDark ? 'text-white/[0.05]' : 'text-slate-900/10'
            }`}>
              02
            </span>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-[11px] font-mono uppercase tracking-wider font-bold block ${
                  isDark ? 'text-indigo-400' : 'text-indigo-600'
                }`}>
                  TECHNICAL ARSENAL
                </span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-semibold ${
                  isDark ? 'bg-zinc-900 text-zinc-300 border border-zinc-800' : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                }`}>
                  {skillsData.length} Stacks
                </span>
              </div>
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Technologies & <span className={`font-serif-italic font-normal ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Tools</span>
              </h2>
              <p className={`text-xs sm:text-sm mt-1 max-w-2xl ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
                Languages, frameworks, databases, and enterprise platforms I <span className={`font-serif-italic font-normal text-[1.1em] ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>actively engineer</span> with.
              </p>
            </div>

            {/* View Mode Toggle: Floating Roulette vs Full Grid */}
            <div className="flex items-center gap-2.5 shrink-0">
              {techViewMode === 'floating' ? (
                <button
                  onClick={() => setTechViewMode('grid')}
                  className={`group flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    isDark 
                      ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700' 
                      : 'bg-white border-slate-200 text-slate-800 hover:text-indigo-600 hover:border-indigo-300 shadow-xs'
                  }`}
                  aria-label="View All Technologies Grid"
                >
                  <span>View Full Grid</span>
                  <LayoutGrid className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100" />
                </button>
              ) : (
                <button
                  onClick={() => setTechViewMode('floating')}
                  className={`group flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    isDark 
                      ? 'bg-indigo-950/60 text-indigo-300 border-indigo-800/80 hover:bg-indigo-900/60' 
                      : 'bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100'
                  }`}
                  aria-label="Switch to Floating Roulette"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Floating Roulette</span>
                </button>
              )}
            </div>
          </div>

          {/* VIEW MODE 1: TECH STACK ROULETTE (FLOATING MARQUEE STREAM) */}
          {techViewMode === 'floating' && (
            <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 py-2 overflow-hidden reveal-on-scroll">
              
              {/* Left & Right Edge Fade Gradient Masks */}
              <div className={`pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 lg:w-44 z-20 bg-gradient-to-r ${
                isDark ? 'from-[#090a0f] to-transparent' : 'from-[#f8fafc] to-transparent'
              }`} />
              <div className={`pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 lg:w-44 z-20 bg-gradient-to-l ${
                isDark ? 'from-[#090a0f] to-transparent' : 'from-[#f8fafc] to-transparent'
              }`} />

              <div className="flex flex-col gap-3.5 overflow-hidden">
                
                {/* Floating Row 1: Left Drift */}
                <div className="flex overflow-hidden group py-0.5">
                  <div className="animate-marquee-left flex gap-3 sm:gap-4 pause-on-group-hover">
                    {[...floatingRow1, ...floatingRow1, ...floatingRow1, ...floatingRow1].map((tech, idx) => (
                      <div
                        key={`r1-${idx}`}
                        onClick={() => {
                          setActiveTechCategory(tech.category);
                          setTechViewMode('grid');
                        }}
                        className={`group/pill flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl border transition-all duration-200 cursor-pointer select-none whitespace-nowrap shadow-xs hover:scale-105 active:scale-95 hover:-translate-y-0.5 ${
                          isDark
                            ? 'bg-zinc-900/90 hover:bg-zinc-800 border-zinc-800 hover:border-indigo-500/40 hover:shadow-md hover:shadow-indigo-500/10'
                            : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-indigo-300 text-slate-800 hover:text-slate-950 hover:shadow-md hover:shadow-indigo-500/5'
                        }`}
                        title={`Click to filter ${tech.name}`}
                      >
                        <div className={`w-5 h-5 rounded flex items-center justify-center p-0.5 ${
                          isDark ? 'bg-zinc-800' : 'bg-slate-100'
                        }`}>
                          <img src={tech.iconSrc} alt={tech.name} className="w-4 h-4 object-contain" />
                        </div>
                        <span className={`text-xs sm:text-sm font-bold tracking-tight ${
                          isDark ? 'text-zinc-200 group-hover/pill:text-white' : 'text-slate-800 group-hover/pill:text-indigo-600'
                        }`}>
                          {tech.name}
                        </span>
                        <span className={`text-[9px] uppercase font-mono px-1.5 py-0.2 rounded font-semibold ${
                          isDark 
                            ? 'bg-zinc-800 text-zinc-400' 
                            : 'bg-slate-100 text-slate-600'
                        }`}>
                          {tech.categoryLabel}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Row 2: Right Drift */}
                <div className="flex overflow-hidden group py-0.5">
                  <div className="animate-marquee-right flex gap-3 sm:gap-4 pause-on-group-hover">
                    {[...floatingRow2, ...floatingRow2, ...floatingRow2, ...floatingRow2].map((tech, idx) => (
                      <div
                        key={`r2-${idx}`}
                        onClick={() => {
                          setActiveTechCategory(tech.category);
                          setTechViewMode('grid');
                        }}
                        className={`group/pill flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl border transition-all duration-200 cursor-pointer select-none whitespace-nowrap shadow-xs hover:scale-105 active:scale-95 hover:-translate-y-0.5 ${
                          isDark
                            ? 'bg-zinc-900/90 hover:bg-zinc-800 border-zinc-800 hover:border-indigo-500/40 hover:shadow-md hover:shadow-indigo-500/10'
                            : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-indigo-300 text-slate-800 hover:text-slate-950 hover:shadow-md hover:shadow-indigo-500/5'
                        }`}
                        title={`Click to filter ${tech.name}`}
                      >
                        <div className={`w-5 h-5 rounded flex items-center justify-center p-0.5 ${
                          isDark ? 'bg-zinc-800' : 'bg-slate-100'
                        }`}>
                          <img src={tech.iconSrc} alt={tech.name} className="w-4 h-4 object-contain" />
                        </div>
                        <span className={`text-xs sm:text-sm font-bold tracking-tight ${
                          isDark ? 'text-zinc-200 group-hover/pill:text-white' : 'text-slate-800 group-hover/pill:text-indigo-600'
                        }`}>
                          {tech.name}
                        </span>
                        <span className={`text-[9px] uppercase font-mono px-1.5 py-0.2 rounded font-semibold ${
                          isDark 
                            ? 'bg-zinc-800 text-zinc-400' 
                            : 'bg-slate-100 text-slate-600'
                        }`}>
                          {tech.categoryLabel}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Row 3: Left Drift Fast */}
                <div className="flex overflow-hidden group py-0.5">
                  <div className="animate-marquee-left-fast flex gap-3 sm:gap-4 pause-on-group-hover">
                    {[...floatingRow3, ...floatingRow3, ...floatingRow3, ...floatingRow3].map((tech, idx) => (
                      <div
                        key={`r3-${idx}`}
                        onClick={() => {
                          setActiveTechCategory(tech.category);
                          setTechViewMode('grid');
                        }}
                        className={`group/pill flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl border transition-all duration-200 cursor-pointer select-none whitespace-nowrap shadow-xs hover:scale-105 active:scale-95 hover:-translate-y-0.5 ${
                          isDark
                            ? 'bg-zinc-900/90 hover:bg-zinc-800 border-zinc-800 hover:border-indigo-500/40 hover:shadow-md hover:shadow-indigo-500/10'
                            : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-indigo-300 text-slate-800 hover:text-slate-950 hover:shadow-md hover:shadow-indigo-500/5'
                        }`}
                        title={`Click to filter ${tech.name}`}
                      >
                        <div className={`w-5 h-5 rounded flex items-center justify-center p-0.5 ${
                          isDark ? 'bg-zinc-800' : 'bg-slate-100'
                        }`}>
                          <img src={tech.iconSrc} alt={tech.name} className="w-4 h-4 object-contain" />
                        </div>
                        <span className={`text-xs sm:text-sm font-bold tracking-tight ${
                          isDark ? 'text-zinc-200 group-hover/pill:text-white' : 'text-slate-800 group-hover/pill:text-indigo-600'
                        }`}>
                          {tech.name}
                        </span>
                        <span className={`text-[9px] uppercase font-mono px-1.5 py-0.2 rounded font-semibold ${
                          isDark 
                            ? 'bg-zinc-800 text-zinc-400' 
                            : 'bg-slate-100 text-slate-600'
                        }`}>
                          {tech.categoryLabel}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Quick Navigation Hint */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 text-xs">
                <div className={`flex items-center gap-1.5 font-mono text-[11px] ${
                  isDark ? 'text-zinc-400' : 'text-slate-600'
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                  <span>Hover to pause • Click any pill to inspect</span>
                </div>

                <button
                  onClick={() => setTechViewMode('grid')}
                  className={`text-xs font-semibold hover:underline flex items-center gap-1 cursor-pointer ${
                    isDark ? 'text-indigo-400' : 'text-indigo-600'
                  }`}
                >
                  <span>Open Full Arsenal Grid</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          )}

          {/* VIEW MODE 2: FULL CATEGORIZED GRID */}
          {techViewMode === 'grid' && (
            <div className="animate-in fade-in duration-200 reveal-on-scroll">
              
              {/* Category Filter Tabs & Quick Search */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-3 mb-6">
                
                {/* Filter Pills */}
                <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
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
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          isActive
                            ? isDark
                              ? 'bg-zinc-100 text-zinc-950 font-bold'
                              : 'bg-indigo-600 text-white font-bold'
                            : isDark
                              ? 'bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white'
                              : 'bg-white border border-slate-200 text-slate-700 hover:text-slate-950 shadow-xs'
                        }`}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

                {/* Instant Search Bar */}
                <div className="relative w-full md:w-64">
                  <Search className={`w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 ${
                    isDark ? 'text-zinc-400' : 'text-slate-500'
                  }`} />
                  <input
                    type="text"
                    placeholder="Search stack, tool..."
                    value={techSearchQuery}
                    onChange={(e) => setTechSearchQuery(e.target.value)}
                    className={`w-full pl-8 pr-7 py-2 rounded-lg text-xs border outline-none transition-colors ${
                      isDark 
                        ? 'bg-zinc-900 border-zinc-800 text-white placeholder-zinc-500 focus:border-zinc-600' 
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-600 shadow-xs'
                    }`}
                  />
                  {techSearchQuery && (
                    <button
                      onClick={() => setTechSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>

              </div>

              {/* Categorized Tech Cards Grid - Scaled to 6 cols on widescreen */}
              {filteredSkills.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                  {filteredSkills.map((tech, idx) => (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-xl border transition-all duration-300 ease-out flex flex-col justify-between group hover:-translate-y-1 hover:shadow-md ${
                        isDark 
                          ? 'bg-zinc-900/60 backdrop-blur-md border-zinc-800/80 hover:border-indigo-500/40 hover:bg-zinc-900/80 hover:shadow-indigo-500/5' 
                          : 'bg-white/95 backdrop-blur-md border-slate-200/90 hover:border-indigo-300 hover:shadow-indigo-500/5 shadow-2xs'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center p-1.5 border ${
                            isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-slate-100 border-slate-200'
                          }`}>
                            <img src={tech.iconSrc} alt={tech.name} className="w-5 h-5 object-contain" />
                          </div>
                          {tech.badge && (
                            <span className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded font-semibold border ${
                              isDark 
                                ? 'bg-zinc-900 border-zinc-800 text-zinc-300' 
                                : 'bg-slate-100 border-slate-200 text-slate-700'
                            }`}>
                              {tech.badge}
                            </span>
                          )}
                        </div>
                        
                        <h3 className={`text-xs font-bold tracking-tight mb-0.5 ${
                          isDark ? 'text-zinc-100 group-hover:text-white' : 'text-slate-900 group-hover:text-indigo-600'
                        }`}>
                          {tech.name}
                        </h3>

                        <span className={`text-[10px] font-mono uppercase tracking-wider block mb-1.5 font-medium ${
                          isDark ? 'text-zinc-400' : 'text-slate-500'
                        }`}>
                          {tech.categoryLabel}
                        </span>
                      </div>

                      {tech.description && (
                        <p className={`text-[11px] leading-relaxed line-clamp-2 ${
                          isDark ? 'text-zinc-400' : 'text-slate-600'
                        }`}>
                          {tech.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className={`p-8 text-center rounded-xl border ${
                  isDark ? 'bg-zinc-900/40 border-zinc-800 text-zinc-400' : 'bg-white border-slate-200 text-slate-600'
                }`}>
                  <p className="text-xs">No technologies matching &ldquo;{techSearchQuery}&rdquo;</p>
                  <button
                    onClick={() => {
                      setTechSearchQuery('');
                      setActiveTechCategory('all');
                    }}
                    className={`mt-3 px-3 py-1 rounded-md text-xs font-semibold border transition-colors ${
                      isDark ? 'border-zinc-700 bg-zinc-800 text-zinc-200' : 'border-slate-300 bg-slate-100 text-slate-800'
                    }`}
                  >
                    Reset filter
                  </button>
                </div>
              )}

              {/* Back to Floating Roulette */}
              <div className="mt-6 text-center">
                <button
                  onClick={() => setTechViewMode('floating')}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                    isDark 
                      ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white' 
                      : 'bg-white border-slate-200 text-slate-800 hover:text-indigo-600 hover:border-indigo-300 shadow-xs'
                  }`}
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Return to Floating Roulette Stream</span>
                </button>
              </div>

            </div>
          )}

        </div>
      </section>

      {/* 03 - PROJECTS SHOWCASE */}
      <section id="projects" className={`py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative z-10 border-t scroll-mt-14 ${
        isDark ? 'border-zinc-800/80' : 'border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto">
          
          <div className="relative flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-4 border-b pb-5 reveal-on-scroll">
            <span className={`font-serif-italic select-none pointer-events-none absolute -top-4 sm:-top-8 right-0 text-6xl sm:text-7xl lg:text-8xl font-normal leading-none tracking-tighter transition-colors ${
              isDark ? 'text-white/[0.05]' : 'text-slate-900/10'
            }`}>
              03
            </span>
            <div>
              <span className={`text-[11px] font-mono uppercase tracking-wider font-bold block mb-1 ${
                isDark ? 'text-indigo-400' : 'text-indigo-600'
              }`}>
                FEATURED WORK
              </span>
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Projects <span className={`font-serif-italic font-normal ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Showcase</span>
              </h2>
              <p className={`text-xs sm:text-sm mt-1 ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
                Scroll or swipe horizontally to explore <span className={`font-serif-italic font-normal text-[1.1em] ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>featured architectures</span> & live deployments.
              </p>
            </div>

            {/* Category Filter & Navigation Controls */}
            <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
              <div className="flex flex-wrap gap-1.5">
                {['All', 'Web', 'Enterprise', 'Desktop'].map(filter => (
                  <button
                    key={filter}
                    onClick={() => setActiveProjectFilter(filter)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      activeProjectFilter === filter
                        ? isDark
                          ? 'bg-zinc-100 text-zinc-950 font-bold'
                          : 'bg-indigo-600 text-white font-bold'
                        : isDark
                          ? 'bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white'
                          : 'bg-white border border-slate-200 text-slate-700 hover:text-slate-950 shadow-xs'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {/* Chevron Nav Controls */}
              <div className="flex items-center gap-1.5 shrink-0 ml-auto sm:ml-0">
                <button
                  onClick={() => scrollProjects('left')}
                  className={`p-2 rounded-xl border transition-all cursor-pointer active:scale-95 ${
                    isDark
                      ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700'
                      : 'bg-white border-slate-200 text-slate-700 hover:text-indigo-600 hover:border-indigo-300 shadow-xs'
                  }`}
                  aria-label="Previous projects"
                  title="Previous projects"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollProjects('right')}
                  className={`p-2 rounded-xl border transition-all cursor-pointer active:scale-95 ${
                    isDark
                      ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700'
                      : 'bg-white border-slate-200 text-slate-700 hover:text-indigo-600 hover:border-indigo-300 shadow-xs'
                  }`}
                  aria-label="Next projects"
                  title="Next projects"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Horizontally Scrollable Project Track */}
          <div 
            ref={projectsScrollRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none scroll-smooth -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 reveal-on-scroll"
          >
            {filteredProjects.map((proj) => (
              <div 
                key={proj.title}
                className="w-[85vw] sm:w-[380px] md:w-[420px] lg:w-[440px] shrink-0 snap-start flex"
              >
                <ProjectCard 
                  proj={proj} 
                  isDark={isDark} 
                />
              </div>
            ))}
          </div>

          {/* Track Indicator & Swipe Hint */}
          <div className={`flex items-center justify-between mt-3 text-[11px] font-mono ${
            isDark ? 'text-zinc-500' : 'text-slate-500'
          }`}>
            <span>Showing {filteredProjects.length} {activeProjectFilter === 'All' ? 'featured' : activeProjectFilter} project{filteredProjects.length > 1 ? 's' : ''}</span>
            <span className="hidden sm:inline-block">← Drag or use chevrons to browse →</span>
          </div>

        </div>
      </section>

      {/* 04 - LIVE GITHUB ACTIVITY & CONTRIBUTION GRAPH */}
      <section id="github-activity" className={`py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t relative z-10 scroll-mt-14 ${
        isDark ? 'bg-zinc-950/40 border-zinc-800/80' : 'bg-slate-100/60 border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto">
          
          <div className="relative mb-6 reveal-on-scroll">
            <span className={`font-serif-italic select-none pointer-events-none absolute -top-4 sm:-top-8 right-0 text-6xl sm:text-7xl lg:text-8xl font-normal leading-none tracking-tighter transition-colors ${
              isDark ? 'text-white/[0.05]' : 'text-slate-900/10'
            }`}>
              04
            </span>
            <span className={`text-[11px] font-mono uppercase tracking-wider font-bold block mb-1 ${
              isDark ? 'text-emerald-400' : 'text-emerald-600'
            }`}>
              OPEN SOURCE
            </span>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight relative z-10 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              GitHub <span className={`font-serif-italic font-normal ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>Activity</span>
            </h2>
            <p className={`text-xs sm:text-sm mt-1 relative z-10 ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
              Verified live commit activity and <span className={`font-serif-italic font-normal text-[1.1em] ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>open-source</span> contributions from @{GITHUB_USERNAME}.
            </p>
          </div>

          {/* GitHub Card Frame */}
          <div 
            onMouseMove={handleCardMouseMove}
            className={`rounded-2xl border p-5 sm:p-7 overflow-hidden backdrop-blur-md transition-all duration-300 hover:shadow-xl reveal-on-scroll spotlight-card ${
              isDark ? 'bg-zinc-900/60 border-zinc-800/90 hover:border-emerald-500/30' : 'bg-white/95 border-slate-200/90 hover:border-emerald-300 shadow-sm'
            }`}
          >
            <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b ${
              isDark ? 'border-zinc-800/80' : 'border-slate-200'
            }`}>
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl border ${
                  isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-300' : 'bg-slate-100 border-slate-200 text-slate-800'
                }`}>
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`font-bold text-sm sm:text-base flex items-center gap-2 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    <span>@{GITHUB_USERNAME}</span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold ${
                      isDark ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    }`}>
                      Active
                    </span>
                  </h3>
                  <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-slate-500'}`}>Public activity over the last year</p>
                </div>
              </div>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border transition-colors w-fit ${
                  isDark 
                    ? 'bg-zinc-900 border-zinc-800 text-zinc-200 hover:text-white hover:bg-zinc-800' 
                    : 'bg-indigo-600 text-white border-indigo-600 hover:bg-indigo-500 shadow-xs'
                }`}
              >
                <span>View on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
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

            <div className={`flex flex-wrap items-center justify-between gap-3 mt-4 text-[11px] font-mono font-medium ${
              isDark ? 'text-zinc-400' : 'text-slate-600'
            }`}>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <GitCommit className="w-3.5 h-3.5" />
                  Verified Commits
                </span>
                <span className="flex items-center gap-1">
                  <GitPullRequest className="w-3.5 h-3.5" />
                  Pull Requests
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5" />
                  Open Source
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-[10px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live sync</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 05 - EDUCATION & TIMELINE */}
      <section id="experience" className={`py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative z-10 border-t scroll-mt-14 ${
        isDark ? 'border-zinc-800/80' : 'border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto">
          
          <div className="relative mb-6 reveal-on-scroll">
            <span className={`font-serif-italic select-none pointer-events-none absolute -top-4 sm:-top-8 right-0 text-6xl sm:text-7xl lg:text-8xl font-normal leading-none tracking-tighter transition-colors ${
              isDark ? 'text-white/[0.05]' : 'text-slate-900/10'
            }`}>
              05
            </span>
            <span className={`text-[11px] font-mono uppercase tracking-wider font-bold block mb-1 ${
              isDark ? 'text-indigo-400' : 'text-indigo-600'
            }`}>
              ACADEMIC JOURNEY
            </span>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight relative z-10 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Education & <span className={`font-serif-italic font-normal ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Experience</span>
            </h2>
          </div>

          {/* Minimal Timeline */}
          <div className={`relative pl-5 sm:pl-7 border-l-2 space-y-6 my-4 ${
            isDark ? 'border-zinc-800' : 'border-indigo-200'
          }`}>
            {education.map((item, idx) => (
              <div key={idx} className="relative reveal-on-scroll">
                {/* Timeline Node */}
                <div className={`absolute -left-[27px] sm:-left-[35px] top-5 w-3 h-3 rounded-full border-2 shrink-0 ${
                  isDark ? 'bg-indigo-400 border-zinc-950' : 'bg-indigo-600 border-white'
                }`} />

                <div 
                  onMouseMove={handleCardMouseMove}
                  className={`p-5 sm:p-7 rounded-2xl border transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl spotlight-card ${
                    idx % 2 === 0 ? 'slide-in-from-left' : 'slide-in-from-right'
                  } ${
                    isDark 
                      ? 'bg-zinc-900/60 backdrop-blur-md border-zinc-800/90 hover:border-indigo-500/40 hover:shadow-indigo-500/5' 
                      : 'bg-white/95 backdrop-blur-md border-slate-200/90 hover:border-indigo-300 hover:shadow-indigo-500/5 shadow-xs'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3.5 mb-3">
                    
                    {/* Institution Logo */}
                    <div className={`w-14 h-14 rounded-xl overflow-hidden shrink-0 border bg-white flex items-center justify-center p-2 ${
                      isDark ? 'border-zinc-800' : 'border-slate-200 shadow-xs'
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
                        <h3 className={`text-base sm:text-lg font-bold ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}>
                          {item.degree}
                        </h3>
                        <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded border shrink-0 w-fit ${
                          isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                        }`}>
                          {item.period}
                        </span>
                      </div>

                      <div className={`flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold mb-2.5 ${
                        isDark ? 'text-zinc-300' : 'text-slate-700'
                      }`}>
                        <Building2 className="w-3.5 h-3.5 shrink-0" />
                        <span>{item.institution}</span>
                        {item.honors && (
                          <span className={`text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full border ${
                            isDark 
                              ? 'bg-amber-950/70 border-amber-500/40 text-amber-300' 
                              : 'bg-amber-50 border-amber-200 text-amber-800'
                          }`}>
                            🏅 {item.honors}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-4 font-normal ${
                    isDark ? 'text-zinc-400' : 'text-slate-600'
                  }`}>
                    {item.details}
                  </p>

                  {/* OJT Showcase */}
                  {item.ojt && (
                    <div className={`mb-4 p-3.5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                      isDark ? 'bg-zinc-950/70 border-zinc-800/90' : 'bg-slate-50 border-slate-200 shadow-xs'
                    }`}>
                      <div className="flex items-center gap-3">
                        <div className="h-9 px-2 rounded-lg bg-white border border-slate-200 flex items-center justify-center overflow-hidden shrink-0">
                          <img src={item.ojt.logo} alt={item.ojt.company} className="h-6 w-auto object-contain" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className={`text-xs sm:text-sm font-bold ${isDark ? 'text-zinc-200' : 'text-slate-900'}`}>
                              {item.ojt.company}
                            </span>
                            <span className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold ${
                              isDark ? 'bg-zinc-900 text-zinc-300 border-zinc-800' : 'bg-indigo-50 text-indigo-700 border-indigo-200'
                            }`}>
                              Work Immersion
                            </span>
                          </div>
                          <p className={`text-[11px] sm:text-xs ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
                            {item.ojt.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map(s => (
                      <span key={s} className={`text-[10px] sm:text-xs px-2.5 py-0.5 rounded font-mono border ${
                        isDark ? 'bg-zinc-900 text-zinc-400 border-zinc-800' : 'bg-slate-100 text-slate-700 border-slate-200 font-medium'
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
      <section id="certificates" className={`py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t relative z-10 scroll-mt-14 ${
        isDark ? 'bg-zinc-950/40 border-zinc-800/80' : 'bg-slate-100/60 border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto">
          
          <div className="relative flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-4 border-b pb-4 reveal-on-scroll">
            <span className={`font-serif-italic select-none pointer-events-none absolute -top-4 sm:-top-8 right-0 text-6xl sm:text-7xl lg:text-8xl font-normal leading-none tracking-tighter transition-colors ${
              isDark ? 'text-white/[0.05]' : 'text-slate-900/10'
            }`}>
              06
            </span>
            <div>
              <span className={`text-[11px] font-mono uppercase tracking-wider font-bold block mb-1 ${
                isDark ? 'text-pink-400' : 'text-pink-600'
              }`}>
                CREDENTIALS
              </span>
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Certificates & <span className={`font-serif-italic font-normal ${isDark ? 'text-pink-400' : 'text-pink-600'}`}>Honors</span>
              </h2>
              <p className={`text-xs sm:text-sm mt-1 ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
                Scroll or swipe to view credentials. Click any card to inspect <span className={`font-serif-italic font-normal text-[1.1em] ${isDark ? 'text-pink-400' : 'text-pink-600'}`}>official documentation</span>.
              </p>
            </div>

            {/* Chevron Nav Controls */}
            <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-auto">
              <button
                onClick={() => scrollCerts('left')}
                className={`p-2 rounded-xl border transition-all cursor-pointer active:scale-95 ${
                  isDark
                    ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700'
                    : 'bg-white border-slate-200 text-slate-700 hover:text-indigo-600 hover:border-indigo-300 shadow-xs'
                }`}
                aria-label="Previous certificates"
                title="Previous certificates"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollCerts('right')}
                className={`p-2 rounded-xl border transition-all cursor-pointer active:scale-95 ${
                  isDark
                    ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700'
                    : 'bg-white border-slate-200 text-slate-700 hover:text-indigo-600 hover:border-indigo-300 shadow-xs'
                }`}
                aria-label="Next certificates"
                title="Next certificates"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Horizontally Scrollable Certificates Track */}
          <div 
            ref={certsScrollRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none scroll-smooth -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 reveal-on-scroll"
          >
            {certificates.map((cert, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedCert(cert);
                  setActiveCertDocIndex(0);
                }}
                className={`w-[80vw] sm:w-[280px] md:w-[320px] lg:w-[330px] shrink-0 snap-start group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300 ease-out flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-2xl ${
                  isDark 
                    ? 'bg-zinc-900/60 backdrop-blur-md border-zinc-800/80 hover:border-pink-500/40 hover:shadow-pink-500/10' 
                    : 'bg-white/95 backdrop-blur-md border-slate-200/90 hover:border-pink-400/60 hover:shadow-xl hover:shadow-pink-500/10 shadow-sm'
                }`}
              >
                <div className={`relative aspect-[16/11] overflow-hidden ${
                  isDark ? 'bg-zinc-950' : 'bg-slate-100'
                }`}>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[9px] font-mono font-bold backdrop-blur-md bg-black/60 text-white border border-white/20 shadow-xs">
                    {cert.category}
                  </span>
                  {cert.gallery && cert.gallery.length > 1 && (
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xs">
                      {cert.gallery.length} Records
                    </span>
                  )}
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className={`font-bold text-xs sm:text-sm mb-1 line-clamp-2 transition-colors ${
                      isDark ? 'text-zinc-100 group-hover:text-pink-400' : 'text-slate-900 group-hover:text-pink-600'
                    }`}>
                      {cert.title}
                    </h3>
                    <div className={`flex items-center gap-1 text-[11px] sm:text-xs font-medium mb-2 ${
                      isDark ? 'text-zinc-400' : 'text-slate-600'
                    }`}>
                      <Building2 className="w-3 h-3" />
                      <span className="truncate">{cert.issuer}</span>
                    </div>
                  </div>

                  <div className={`flex items-center justify-between pt-2 border-t text-[10px] sm:text-[11px] font-mono ${
                    isDark ? 'border-zinc-800/80 text-zinc-400' : 'border-slate-200 text-slate-600'
                  }`}>
                    <span>{cert.date}</span>
                    <span className={`inline-flex items-center gap-0.5 font-bold transition-colors ${
                      isDark ? 'text-pink-400 group-hover:text-pink-300' : 'text-pink-600 group-hover:text-pink-700'
                    }`}>
                      Inspect
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hint indicator below track */}
          <div className={`flex items-center justify-between mt-3 text-[11px] font-mono ${
            isDark ? 'text-zinc-500' : 'text-slate-500'
          }`}>
            <span>{certificates.length} Verified Credentials Available</span>
            <span className="hidden sm:inline-block">← Scroll or drag to browse records →</span>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs"
            onClick={() => setSelectedCert(null)}
          >
            <div 
              className={`relative max-w-3xl w-full border rounded-2xl overflow-hidden p-5 sm:p-7 max-h-[90vh] flex flex-col ${
                isDark ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-2xl'
              }`}
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className={`absolute top-4 right-4 p-1.5 rounded-lg transition-colors z-10 cursor-pointer ${
                  isDark ? 'bg-zinc-800 text-zinc-300 hover:text-white' : 'bg-slate-100 text-slate-700 hover:text-black'
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
                        className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                          activeCertDocIndex === idx
                            ? isDark
                              ? 'bg-indigo-600 text-white'
                              : 'bg-indigo-600 text-white'
                            : isDark
                              ? 'bg-zinc-800 text-zinc-300 hover:text-white'
                              : 'bg-slate-100 text-slate-700 hover:text-slate-950'
                        }`}
                      >
                        {doc.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className={`max-h-[52vh] overflow-hidden rounded-lg flex items-center justify-center border mb-4 ${
                isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <img
                  src={currentDoc.image}
                  alt={currentDoc.title || selectedCert.title}
                  className="max-h-[52vh] w-auto object-contain"
                />
              </div>

              <div className="overflow-y-auto">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase font-semibold ${
                    isDark ? 'bg-zinc-800 text-zinc-300' : 'bg-slate-100 text-slate-800'
                  }`}>
                    {selectedCert.category}
                  </span>
                  <span className={`text-xs font-mono ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
                    {currentDoc.date || selectedCert.date}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-0.5">
                  {currentDoc.title && selectedCert.gallery && selectedCert.gallery.length > 1
                    ? currentDoc.title
                    : selectedCert.title}
                </h3>
                <p className={`text-xs sm:text-sm font-semibold mb-2 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>{selectedCert.issuer}</p>
                <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-zinc-300' : 'text-slate-700'}`}>
                  {currentDoc.caption || selectedCert.description}
                </p>
              </div>
            </div>
          </div>
        );
      })()}

      {/* 07 - CONTACT SECTION - EXPANDED 2-COLUMN BALANCED WIDESCREEN LAYOUT */}
      <section id="contact" className={`py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative z-10 border-t scroll-mt-14 ${
        isDark ? 'border-zinc-800/80' : 'border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto">
          
          <div className="relative mb-6 sm:mb-8 reveal-on-scroll">
            <span className={`font-serif-italic select-none pointer-events-none absolute -top-4 sm:-top-8 right-0 text-6xl sm:text-7xl lg:text-8xl font-normal leading-none tracking-tighter transition-colors ${
              isDark ? 'text-white/[0.05]' : 'text-slate-900/10'
            }`}>
              07
            </span>
            <span className={`text-[11px] font-mono uppercase tracking-wider font-bold block mb-1 ${
              isDark ? 'text-indigo-400' : 'text-indigo-600'
            }`}>
              CONNECT
            </span>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-2 relative z-10 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Let's <span className={`font-serif-italic font-normal ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Connect</span> & Collaborate
            </h2>
            <p className={`text-xs sm:text-sm leading-relaxed relative z-10 ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
              Feel free to reach out for software engineering roles, full-stack projects, or hackathon opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Direct Info & Availability */}
            <div className="lg:col-span-5 space-y-4 reveal-on-scroll">
              {/* Direct Communication Channels */}
              <div className="space-y-3">
                <a 
                  href="mailto:azucenajustinallen@gmail.com"
                  className={`p-3.5 rounded-xl border flex items-center gap-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                    isDark 
                      ? 'bg-zinc-900/60 backdrop-blur-md border-zinc-800/80 hover:border-indigo-500/40 text-zinc-300 hover:text-white' 
                      : 'bg-white/95 backdrop-blur-md border-slate-200 hover:border-indigo-300 hover:shadow-xs text-slate-800 hover:text-indigo-600'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${isDark ? 'bg-zinc-800' : 'bg-indigo-50 text-indigo-600'}`}>
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider block font-medium opacity-60">Email</span>
                    <span className="text-xs sm:text-sm font-bold">azucenajustinallen@gmail.com</span>
                  </div>
                </a>

                <a 
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3.5 rounded-xl border flex items-center justify-between transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                    isDark 
                      ? 'bg-zinc-900/60 backdrop-blur-md border-zinc-800/80 hover:border-indigo-500/40 text-zinc-300 hover:text-white' 
                      : 'bg-white/95 backdrop-blur-md border-slate-200 hover:border-indigo-300 hover:shadow-xs text-slate-800 hover:text-indigo-600'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2 rounded-lg ${isDark ? 'bg-zinc-800' : 'bg-indigo-50 text-indigo-600'}`}>
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider block font-medium opacity-60">GitHub</span>
                      <span className="text-xs sm:text-sm font-bold">@{GITHUB_USERNAME}</span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>

                <a 
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3.5 rounded-xl border flex items-center justify-between transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                    isDark 
                      ? 'bg-zinc-900/60 backdrop-blur-md border-zinc-800/80 hover:border-blue-500/40 text-zinc-300 hover:text-white' 
                      : 'bg-white/95 backdrop-blur-md border-slate-200 hover:border-blue-300 hover:shadow-xs text-slate-800 hover:text-blue-600'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2 rounded-lg ${isDark ? 'bg-zinc-800' : 'bg-indigo-50 text-indigo-600'}`}>
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider block font-medium opacity-60">LinkedIn</span>
                      <span className="text-xs sm:text-sm font-bold">Justin Allen Azucena</span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>

              {/* Status Note */}
              <div className={`p-4 rounded-xl border flex items-center gap-3 ${
                isDark ? 'bg-zinc-950/60 border-zinc-800/80 text-zinc-400' : 'bg-indigo-50/70 border-indigo-200 text-indigo-900'
              }`}>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="text-xs font-semibold">Currently open for software developer opportunities and collaborations.</span>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 reveal-on-scroll">
              <div 
                onMouseMove={handleCardMouseMove}
                className={`rounded-2xl border p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:shadow-xl spotlight-card ${
                  isDark ? 'bg-zinc-900/60 border-zinc-800/90 hover:border-zinc-700' : 'bg-white/95 border-slate-200/90 hover:border-indigo-200 shadow-sm'
                }`}
              >
                <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Send a Direct Message
                </h3>

                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-zinc-200' : 'text-slate-800'}`}>
                        Your Name
                      </label>
                      <input 
                        type="text" 
                        required
                        disabled={contactStatus === 'loading'}
                        value={contactData.name}
                        onChange={(e) => setContactData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Justin / Recruiter" 
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs outline-none transition-colors disabled:opacity-60 font-medium ${
                          isDark 
                            ? 'bg-zinc-950 border-zinc-800 text-white placeholder-zinc-500 focus:border-indigo-500' 
                            : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 shadow-xs'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-zinc-200' : 'text-slate-800'}`}>
                        Your Email
                      </label>
                      <input 
                        type="email" 
                        required
                        disabled={contactStatus === 'loading'}
                        value={contactData.email}
                        onChange={(e) => setContactData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="you@domain.com" 
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs outline-none transition-colors disabled:opacity-60 font-medium ${
                          isDark 
                            ? 'bg-zinc-950 border-zinc-800 text-white placeholder-zinc-500 focus:border-indigo-500' 
                            : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 shadow-xs'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-zinc-200' : 'text-slate-800'}`}>
                      Message
                    </label>
                    <textarea 
                      rows={5} 
                      required
                      disabled={contactStatus === 'loading'}
                      value={contactData.message}
                      onChange={(e) => setContactData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Describe your inquiry, project scope, or opportunity..." 
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs resize-none outline-none transition-colors disabled:opacity-60 font-medium ${
                        isDark 
                          ? 'bg-zinc-950 border-zinc-800 text-white placeholder-zinc-500 focus:border-indigo-500' 
                          : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 shadow-xs'
                      }`}
                    />
                  </div>

                  {contactFeedback && (
                    <div className={`p-3 rounded-xl text-xs flex items-center gap-2 border ${
                      contactStatus === 'success' 
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-500 font-semibold' 
                        : 'bg-rose-500/10 border-rose-500/30 text-rose-500 font-semibold'
                    }`}>
                      {contactStatus === 'success' ? (
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-500" />
                      ) : (
                        <AlertCircle className="w-3.5 h-3.5 shrink-0 text-rose-500" />
                      )}
                      <span>{contactFeedback}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={contactStatus === 'loading'}
                    className={`w-full py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 ${
                      isDark 
                        ? 'bg-zinc-100 text-zinc-950 hover:bg-white' 
                        : 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-md shadow-indigo-600/20'
                    }`}
                  >
                    {contactStatus === 'loading' ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        Sending Message...
                      </>
                    ) : contactStatus === 'success' ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Message Sent Successfully!
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

          </div>
        </div>
      </section>

      {/* Widescreen Footer */}
      <footer className={`mt-auto border-t py-8 px-4 sm:px-6 lg:px-8 text-xs relative z-10 ${
        isDark ? 'border-zinc-800/80 text-zinc-400 bg-[#090a0f]' : 'border-slate-200 text-slate-600 bg-white'
      }`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <p className="font-medium">© {new Date().getFullYear()} Justin Allen Azucena</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-medium">
            <a href="/resume.html" target="_blank" rel="noreferrer" className={isDark ? 'hover:text-white' : 'hover:text-indigo-600'}>Resume</a>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className={isDark ? 'hover:text-white' : 'hover:text-indigo-600'}>GitHub</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className={isDark ? 'hover:text-white' : 'hover:text-indigo-600'}>LinkedIn</a>
            <span className={`cursor-pointer ${isDark ? 'hover:text-white' : 'hover:text-indigo-600'}`} onClick={copyDiscord}>Discord</span>
            <a href="mailto:azucenajustinallen@gmail.com" className={isDark ? 'hover:text-white' : 'hover:text-indigo-600'}>Email</a>
          </div>
          <p className="text-zinc-500 font-normal">React 19 • Vite</p>
        </div>
      </footer>

    </div>
  );
}
