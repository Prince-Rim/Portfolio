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
  Star
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
import dotnetIcon from './assets/icons/dotnet.svg';
import postgresIcon from './assets/icons/postgresql.svg';
import mssqlIcon from './assets/icons/mssql.svg';
import mysqlIcon from './assets/icons/mysql.svg';
import sapIcon from './assets/icons/sap.svg';
import gitIcon from './assets/icons/git.svg';

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
  category: string;
  categoryLabel: string;
  iconSrc: string;
}

const skillsData: TechSkillItem[] = [
  {
    name: 'JavaScript',
    category: 'programming',
    categoryLabel: 'Programming',
    iconSrc: jsIcon
  },
  {
    name: 'TypeScript',
    category: 'programming',
    categoryLabel: 'Programming',
    iconSrc: tsIcon
  },
  {
    name: 'Java (OOP & Swing)',
    category: 'programming',
    categoryLabel: 'Programming',
    iconSrc: javaIcon
  },
  {
    name: 'C# / .NET Core',
    category: 'programming',
    categoryLabel: 'Programming',
    iconSrc: csharpIcon
  },
  {
    name: 'Python',
    category: 'programming',
    categoryLabel: 'Programming',
    iconSrc: pythonIcon
  },
  {
    name: 'PHP',
    category: 'programming',
    categoryLabel: 'Programming',
    iconSrc: phpIcon
  },
  {
    name: 'React 19',
    category: 'frontend',
    categoryLabel: 'Frontend',
    iconSrc: reactIcon
  },
  {
    name: 'Vite',
    category: 'frontend',
    categoryLabel: 'Frontend',
    iconSrc: viteIcon
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    categoryLabel: 'Frontend',
    iconSrc: tailwindIcon
  },
  {
    name: 'HTML5 & CSS3',
    category: 'frontend',
    categoryLabel: 'Frontend',
    iconSrc: html5Icon
  },
  {
    name: 'ASP.NET Core',
    category: 'backend',
    categoryLabel: 'Backend',
    iconSrc: dotnetIcon
  },
  {
    name: 'PostgreSQL',
    category: 'database',
    categoryLabel: 'Database',
    iconSrc: postgresIcon
  },
  {
    name: 'Microsoft SQL Server',
    category: 'database',
    categoryLabel: 'Database',
    iconSrc: mssqlIcon
  },
  {
    name: 'MySQL',
    category: 'database',
    categoryLabel: 'Database',
    iconSrc: mysqlIcon
  },
  {
    name: 'SAP S/4HANA (SD, MM, FI)',
    category: 'tools',
    categoryLabel: 'Enterprise ERP',
    iconSrc: sapIcon
  },
  {
    name: 'Git & GitHub',
    category: 'tools',
    categoryLabel: 'Version Control',
    iconSrc: gitIcon
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
    'Information Technology'
  ];

  const education: EducationItem[] = [
    {
      degree: 'Bachelor of Science in Information Technology (4th Year)',
      institution: 'STI Academic Center Novaliches',
      period: '2023 – Present (Graduating 2026)',
      honors: 'SAP Certified Candidate & Capstone Lead',
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
      description: 'Enterprise sales and inventory management web application for restaurant operations utilizing a hybrid Sparrow Search Algorithm + Long Short-Term Memory neural network for predictive food demand forecasting.',
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

  const filteredSkills = activeTechCategory === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeTechCategory);

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
          
          {/* Profile Card & Avatar */}
          <div className="relative group shrink-0">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse-glow" />
            <div className={`relative w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden border shadow-2xl animate-float backdrop-blur-md ${
              isDark ? 'bg-slate-950/80 border-indigo-500/40 shadow-indigo-950/50' : 'bg-white border-indigo-200 shadow-indigo-100'
            }`}>
              <img 
                src={profileImg} 
                alt="Justin Allen Azucena" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
            </div>
            
            {/* Available for work Status Pill */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-right-2 px-3.5 py-1.5 rounded-full bg-slate-950/90 border border-emerald-500/40 text-emerald-300 text-[11px] font-semibold backdrop-blur-xl shadow-xl flex items-center gap-2 font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for work</span>
            </div>
          </div>

          {/* Hero Main Content */}
          <div className="flex-1 max-w-2xl">
            {/* Status & Role Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-4 backdrop-blur-md shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Full-Stack Software Engineer & Developer</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4 leading-tight">
              Hi, I am <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">Justin Allen Azucena</span>
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
                href="#contact" 
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border font-semibold text-xs transition-all hover:scale-[1.02] backdrop-blur-sm ${
                  isDark ? 'bg-slate-900/40 border-slate-800 text-indigo-400 hover:border-indigo-500/40 hover:text-indigo-300' : 'bg-white border-slate-200 text-indigo-600 hover:border-indigo-300 shadow-sm'
                }`}
              >
                <Download className="w-3.5 h-3.5" />
                Request CV
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
                My focus centers on developing <strong>AI-integrated full-stack web platforms</strong>, <strong>enterprise .NET backend solutions</strong>, and <strong>desktop database applications</strong>. Recognized as a <strong>Top 30 Finalist</strong> in the nationwide <strong>eGov PH Hackathon 2026</strong> for developing <em>eScholar</em>.
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
      <section id="skills" className={`py-20 px-6 border-y relative z-10 transition-colors ${
        isDark ? 'bg-[#070b16]/90 border-slate-800/80' : 'bg-slate-100/60 border-slate-200'
      }`}>
        <div className="max-w-5xl mx-auto reveal-on-scroll">
          
          <div className="text-center mb-10">
            <span className="text-[11px] font-mono uppercase tracking-widest text-indigo-400 font-bold block mb-1">
              TECHNICAL ARSENAL
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Skills & Technologies
            </h2>
            <p className={`text-xs sm:text-sm mt-2 max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Languages, frameworks, tools, and enterprise platforms I use to build scalable systems.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {[
              { id: 'all', label: 'All' },
              { id: 'programming', label: 'Programming' },
              { id: 'frontend', label: 'Frontend' },
              { id: 'backend', label: 'Backend' },
              { id: 'database', label: 'Database' },
              { id: 'tools', label: 'Tools & ERP' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTechCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                  activeTechCategory === tab.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 scale-105'
                    : isDark
                      ? 'bg-[#0a0f1d] text-slate-400 hover:text-white border border-slate-800'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Clean Tech Cards Grid with Official SVGs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {filteredSkills.map((tech, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all duration-300 hover:scale-[1.03] hover:shadow-xl flex flex-col items-center text-center justify-center group ${
                  isDark 
                    ? 'bg-[#0a0f1d]/90 border-slate-800/80 hover:border-indigo-500/50 hover:shadow-indigo-950/20' 
                    : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-indigo-100 shadow-sm'
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110 p-2.5 ${
                  isDark ? 'bg-slate-900/90 border border-slate-800' : 'bg-slate-50 border border-slate-200 shadow-inner'
                }`}>
                  <img src={tech.iconSrc} alt={tech.name} className="w-8 h-8 object-contain" />
                </div>
                <h3 className="font-bold text-sm mb-1 group-hover:text-indigo-400 transition-colors">
                  {tech.name}
                </h3>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 font-semibold">
                  {tech.categoryLabel}
                </span>
              </div>
            ))}
          </div>

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((proj, idx) => (
              <div
                key={idx}
                className={`rounded-3xl border p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:translate-y-[-6px] hover:shadow-2xl group relative overflow-hidden ${
                  proj.highlight
                    ? isDark
                      ? 'bg-gradient-to-b from-[#10172e] to-[#0a0f1d] border-indigo-500/40 shadow-xl shadow-indigo-950/30'
                      : 'bg-white border-indigo-300 shadow-xl shadow-indigo-100'
                    : isDark
                      ? 'bg-[#0a0f1d]/95 border-slate-800/80 hover:border-slate-700'
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div>
                  {/* Real Project Screenshot Image */}
                  <div className="relative aspect-[16/10] w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800/90 mb-4 group/img">
                    <img 
                      src={proj.image} 
                      alt={proj.title} 
                      className="w-full h-full object-cover object-top group-hover/img:scale-106 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-transparent opacity-60 group-hover/img:opacity-30 transition-opacity" />
                    <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold bg-slate-950/85 border border-slate-700 text-indigo-300 backdrop-blur-md">
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

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.tags.map(t => (
                      <span key={t} className={`text-[10px] px-2.5 py-0.5 rounded-md font-mono border ${
                        isDark ? 'bg-slate-950 text-slate-300 border-slate-800' : 'bg-slate-100 text-slate-700 border-slate-200'
                      }`}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className={`pt-3 border-t flex items-center justify-between text-xs ${
                    isDark ? 'border-slate-800' : 'border-slate-100'
                  }`}>
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 font-bold text-xs px-3.5 py-1.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition-colors shadow-md shadow-indigo-600/20"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        View Code
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
