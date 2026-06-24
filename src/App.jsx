import { useState, useEffect } from "react";
import profile from "../src/assets/roshanprofile.jpeg";

const SECTIONS = [
  "about",
  "work",
  "education",
  "skills",
  "projects",
  "contact",
];

const WORK = [
  {
    company: "Nagarro",
    initials: "N",
    role: "Senior Frontend Engineer",
    period: "2024 – Present",
    desc: "Developed and optimized scalable React.js applications with a focus on performance, usability, and maintainability. Built an enterprise task management platform using React, Tailwind CSS, and React Query, improving operational efficiency by 25% and reducing redundant API calls by 40%. Contributed to architectural decisions, reusable component design, and frontend best practices to deliver high-quality user experiences.",
  },
  {
    company: "Nagarro",
    initials: "N",
    role: "Frontend Engineer",
    period: "2023 – 2024",
    desc: "Built reusable React component systems and led performance optimisation initiatives across multiple client projects.",
  },
  {
    company: "Nagarro",
    initials: "N",
    role: "Associate Engineer",
    period: "2022 – 2023",
    desc: "Developed UI features for a Dealer Management System serving an automotive client with thousands of daily users.",
  },
  {
    company: "Nagarro",
    initials: "N",
    role: "Intern",
    period: "2021 – 2022",
    desc: "Started as a frontend intern, quickly ramped on React and TypeScript in an enterprise environment.",
  },
];

const EDUCATION = [
  {
    school:
      "Master of Computer Applications- J.C. Bose University of Science and Technology, YMCA",
    detail: "2018 – 2021",
    emoji: "🎓",
  },
  {
    school:"Bachelor of Computer Applications- Maharshi Dayanand University - Rohtak",
    detail: "2015 – 2018",
    emoji: "🎓",
  },
];

const SKILLS = [
  "React",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "Webpack",
  "Module Federation",
  "Tailwind CSS",
  "Node.js",
  "Redux",
  "Redux Toolkit",
  "React Query",
  "Jotai",
  "Express.js",
  "Vite",
  "AWS",
  "Git",
  "HTML5",
  "CSS3",
  "SQL",
  "Micro-frontends",
  "Ant Design",
  "Material UI",
  "Bootstrap 5",
  "Jest",
  "React Testing Library",
  "Postman",
  "JIRA",
  "CI/CD",
  "Agile",
  "Web Performance",
  "Responsive Design",
  "State Management",
  "RESTful APIs",
  "Unit Testing",
];

const PROJECTS = [
  {
    title: "Blueprint UI",
    period: "2024",
    desc: "React component library on npm — 12 components, 5 hooks, Rollup build pipeline, CJS/ESM dual output.",
    tags: ["React", "TypeScript", "Rollup", "npm"],
    link: "https://www.npmjs.com/package/blueprint-ui-roshanraii",
  },
  {
    title: "Bibliotheca",
    period: "2024",
    desc: "Full-stack library system on AWS — Elastic Beanstalk, RDS, S3, Lambda, GitHub Actions CI/CD.",
    tags: ["Node.js", "React", "AWS", "MySQL"],
    link: "#",
  },
  {
    title: "NexTask",
    period: "2023",
    desc: "Enterprise task management platform for a non-profit client, built within a micro-frontend architecture.",
    tags: ["React", "TypeScript", "Micro-frontend", "Redux"],
    link: "#",
  },
];

// ── Icons ─────────────────────────────────────────────────────────────────────
const IconHome = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const IconPerson = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const IconGithub = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
  </svg>
);
const IconLinkedin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const IconMail = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const IconSun = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);
const IconMoon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);

// ── Hooks ─────────────────────────────────────────────────────────────────────
function useTheme() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return true;
    const stored = localStorage.getItem("rr-theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const toggle = () =>
    setDark((d) => {
      localStorage.setItem("rr-theme", !d ? "dark" : "light");
      return !d;
    });
  return [dark, toggle];
}

function useActiveSection() {
  const [active, setActive] = useState("about");
  useEffect(() => {
    const handler = () => {
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          if (top <= 140 && bottom > 140) {
            setActive(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return active;
}

// ── Sub-components (each has its own hooks — no hooks in map) ─────────────────

function Badge({ text, dark }) {
  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium border mr-1.5 mb-1.5
      ${dark ? "bg-zinc-800 text-zinc-400 border-zinc-700" : "bg-zinc-100 text-zinc-500 border-zinc-200"}`}
    >
      {text}
    </span>
  );
}

function ProjectCard({ p, dark }) {
  return (
    <a
      href={p.link}
      target="_blank"
      rel="noreferrer"
      className={`block no-underline rounded-xl border p-4 transition-colors duration-150 group
        ${dark ? "bg-zinc-900 border-zinc-800 hover:border-zinc-600" : "bg-white border-zinc-200 hover:border-zinc-400"}`}
    >
      <div className="flex justify-between items-start mb-1.5">
        <span
          className={`text-[13px] font-semibold ${dark ? "text-zinc-100" : "text-zinc-900"}`}
        >
          {p.title}
        </span>
        <span
          className={`text-[11px] ${dark ? "text-zinc-500" : "text-zinc-400"}`}
        >
          {p.period}
        </span>
      </div>
      <p
        className={`text-[12px] leading-relaxed mb-2.5 ${dark ? "text-zinc-400" : "text-zinc-500"}`}
      >
        {p.desc}
      </p>
      <div>
        {p.tags.map((tag) => (
          <Badge key={tag} text={tag} dark={dark} />
        ))}
      </div>
    </a>
  );
}

function DockBtn({ icon, label, onClick, dark }) {
  return (
    <button
      onClick={onClick}
      title={label}
      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-150 border-none cursor-pointer
        ${dark ? "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700" : "text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100"}`}
    >
      {icon}
    </button>
  );
}

function NavBtn({ id, active, scrollTo, dark }) {
  const isActive = active === id;
  return (
    <button
      onClick={() => scrollTo(id)}
      className={`flex items-center gap-2.5 w-full text-left px-2.5 py-1.5 mb-0.5 rounded-lg border-none cursor-pointer text-[13px] transition-all duration-150
        ${
          isActive
            ? dark
              ? "bg-zinc-800 text-zinc-100 font-semibold"
              : "bg-zinc-100 text-zinc-900 font-semibold"
            : dark
              ? "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/60"
              : "text-zinc-400 hover:text-zinc-700 hover:bg-zinc-50"
        }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-150
        ${isActive ? "bg-blue-500" : dark ? "bg-zinc-700" : "bg-zinc-300"}`}
      />
      {id.charAt(0).toUpperCase() + id.slice(1)}
    </button>
  );
}

function SocialLink({ href, icon, dark }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`flex items-center transition-colors duration-150 ${dark ? "text-zinc-500 hover:text-zinc-100" : "text-zinc-400 hover:text-zinc-900"}`}
    >
      {icon}
    </a>
  );
}

function ContactBtn({ label, href, primary, dark }) {
  return (
    <a
      href={href}
      target={primary ? undefined : "_blank"}
      rel="noreferrer"
      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-medium no-underline transition-all duration-150
        ${
          primary
            ? dark
              ? "bg-zinc-100 text-zinc-900 hover:bg-white"
              : "bg-zinc-900 text-white hover:bg-zinc-700"
            : dark
              ? "border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200"
              : "border border-zinc-200 text-zinc-500 hover:border-zinc-400 hover:text-zinc-800"
        }`}
    >
      {label}
    </a>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [dark, toggleTheme] = useTheme();
  const active = useActiveSection();

  const scrollTo = (id) =>
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

  const DOCK = [
    {
      icon: <IconHome />,
      label: "Top",
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    { icon: <IconPerson />, label: "About", onClick: () => scrollTo("about") },
    {
      icon: <IconGithub />,
      label: "GitHub",
      onClick: () => window.open("https://github.com/roshanraii", "_blank"),
    },
    {
      icon: <IconLinkedin />,
      label: "LinkedIn",
      onClick: () =>
        window.open(
          "https://www.linkedin.com/in/roshan-rai-a6b58a199/",
          "_blank",
        ),
    },
    {
      icon: <IconMail />,
      label: "Email",
      onClick: () => {
        window.location.href = "mailto:roshan95rai@gmail.com";
      },
    },
    {
      icon: dark ? <IconSun /> : <IconMoon />,
      label: "Theme",
      onClick: toggleTheme,
    },
  ];

  const dotColor = dark ? "#3f3f46" : "#d4d4d8";

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${dark ? "bg-zinc-950 text-zinc-100" : "bg-white text-zinc-900"}`}
    >
      {/* ── Desktop top bar ── */}
      <div
        className={`hidden md:flex sticky top-0 z-50 items-center justify-between px-8 py-2.5 border-b backdrop-blur-md
        ${dark ? "bg-zinc-950/90 border-zinc-800" : "bg-white/90 border-zinc-200"}`}
      >
        <span className="font-bold text-sm">Roshan Rai</span>
        <button
          onClick={toggleTheme}
          className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer border transition-colors
            ${dark ? "bg-zinc-800 border-zinc-700 text-zinc-400 hover:text-zinc-100" : "bg-zinc-100 border-zinc-200 text-zinc-500 hover:text-zinc-900"}`}
        >
          {dark ? <IconSun /> : <IconMoon />}
        </button>
      </div>

      {/* ── Hero ── */}
      <div
        className={`relative overflow-hidden border-b ${dark ? "border-zinc-800" : "border-zinc-200"}`}
      >
        {/* Dot grid */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `radial-gradient(circle, ${dotColor} 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
            maskImage:
              "radial-gradient(ellipse 100% 100% at 50% 0%, black 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 100% 100% at 50% 0%, black 30%, transparent 100%)",
            opacity: dark ? 0.6 : 0.65,
          }}
        />
        <div className="relative z-10 max-w-[900px] mx-auto px-5 py-11 md:py-14">
          {/* Avatar */}
          <div
            className={`w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex items-center justify-center mb-5 shrink-0 border-4 outline outline-1
            ${dark ? "bg-zinc-800 border-zinc-950 outline-zinc-700" : "bg-zinc-100 border-white outline-zinc-200"}`}
          >
            <img src={profile} className="w-full h-full object-cover" alt="Roshan Rai" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2.5 leading-tight">
            Hi, I'm Roshan
          </h1>
          <p
            className={`text-sm md:text-base leading-relaxed max-w-md ${dark ? "text-zinc-400" : "text-zinc-500"}`}
          >
            Senior Frontend Engineer. I love building scalable UIs and helping
            teams ship great products.
          </p>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-[900px] mx-auto px-5 pt-10 pb-28 md:pb-20 flex gap-14 items-start">
        {/* Sidebar — desktop only */}
        <aside className="hidden md:block w-52 shrink-0 sticky top-[70px] self-start">
          <div className="mb-5">
            <p className="text-[13px] font-bold mb-0.5">Roshan Rai</p>
            <p
              className={`text-[11px] ${dark ? "text-zinc-500" : "text-zinc-400"}`}
            >
              Senior FE Engineer · Nagarro
            </p>
          </div>
          <nav className="mb-6">
            {SECTIONS.map((id) => (
              <NavBtn
                key={id}
                id={id}
                active={active}
                scrollTo={scrollTo}
                dark={dark}
              />
            ))}
          </nav>
          <div className="flex gap-3.5">
            <SocialLink
              href="https://github.com/roshanraii"
              icon={<IconGithub />}
              dark={dark}
            />
            <SocialLink
              href="https://linkedin.com/in/roshanraii"
              icon={<IconLinkedin />}
              dark={dark}
            />
            <SocialLink
              href="mailto:roshanraii@gmail.com"
              icon={<IconMail />}
              dark={dark}
            />
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 min-w-0">
          {/* About */}
          <section id="about" className="mb-14 scroll-mt-20">
            <h2
              className={`font-bold mb-3 tracking-tight md:text-[15px] text-lg ${dark ? "text-zinc-100" : "text-zinc-900"}`}
            >
              About
            </h2>
            <div
              className={`text-[13px] leading-[1.8] flex flex-col gap-2.5 ${dark ? "text-zinc-400" : "text-zinc-500"}`}
            >
              <p>
                I'm a Senior Frontend Engineer at{" "}
                <strong
                  className={
                    dark
                      ? "text-zinc-100 font-semibold"
                      : "text-zinc-900 font-semibold"
                  }
                >
                  Nagarro
                </strong>{" "}
                with 4+ years of experience building enterprise-grade UIs. I've
                progressed from intern through senior, working across automotive
                and non-profit clients.
              </p>
              <p>
                My core stack is{" "}
                <strong
                  className={
                    dark
                      ? "text-zinc-100 font-semibold"
                      : "text-zinc-900 font-semibold"
                  }
                >
                  React + TypeScript
                </strong>
                , with deep experience in micro-frontend architecture using
                Webpack Module Federation. I care about performance,
                accessibility, and code that scales.
              </p>
              <p>
                Outside of work I ship side projects — a React component library
                on npm, a full-stack system on AWS, and real-time dashboards. I
                learn by building.
              </p>
            </div>
          </section>

          {/* Work */}
          <section id="work" className="mb-14 scroll-mt-20">
            <h2
              className={`font-bold mb-4 tracking-tight md:text-[15px] text-lg ${dark ? "text-zinc-100" : "text-zinc-900"}`}
            >
              Work Experience
            </h2>
            <div className="flex flex-col gap-5">
              {WORK.map((item, i) => (
                <div key={i} className="flex gap-3.5">
                  <div
                    className={`w-9 h-9 rounded-full shrink-0 flex items-center justify-center text-[13px] font-bold mt-0.5 border
                    ${dark ? "bg-zinc-800 border-zinc-700 text-zinc-400" : "bg-zinc-100 border-zinc-200 text-zinc-500"}`}
                  >
                    {item.initials}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between flex-wrap gap-1 mb-0.5">
                      <span
                        className={`text-[13px] font-semibold ${dark ? "text-zinc-100" : "text-zinc-900"}`}
                      >
                        {item.company}
                      </span>
                      <span
                        className={`text-[11px] ${dark ? "text-zinc-500" : "text-zinc-400"}`}
                      >
                        {item.period}
                      </span>
                    </div>
                    <div
                      className={`text-[12px] mb-1 ${dark ? "text-zinc-400" : "text-zinc-500"}`}
                    >
                      {item.role}
                    </div>
                    <p
                      className={`text-[12px] leading-relaxed ${dark ? "text-zinc-500" : "text-zinc-400"}`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section id="education" className="mb-14 scroll-mt-20">
            <h2
              className={`font-bold mb-4 tracking-tight md:text-[15px] text-lg ${dark ? "text-zinc-100" : "text-zinc-900"}`}
            >
              Education
            </h2>
            {EDUCATION.map((edu, i) => (
              <div key={i} className="flex gap-3.5 items-center pb-3">
                <div
                  className={`w-9 h-9 rounded-full shrink-0 flex items-center justify-center text-lg border 
                  ${dark ? "bg-zinc-800 border-zinc-700" : "bg-zinc-100 border-zinc-200"}`}
                >
                  {edu.emoji}
                </div>
                <div>
                  <p
                    className={`text-[13px] font-semibold ${dark ? "text-zinc-100" : "text-zinc-900"}`}
                  >
                    {edu.school}
                  </p>
                  <p
                    className={`text-[11px] ${dark ? "text-zinc-500" : "text-zinc-400"}`}
                  >
                    {edu.detail}
                  </p>
                </div>
              </div>
            ))}
          </section>

          {/* Skills */}
          <section id="skills" className="mb-14 scroll-mt-20">
            <h2
              className={`font-bold mb-3.5 tracking-tight md:text-[15px] text-lg ${dark ? "text-zinc-100" : "text-zinc-900"}`}
            >
              Skills
            </h2>
            <div className="flex flex-wrap">
              {SKILLS.map((s) => (
                <Badge key={s} text={s} dark={dark} />
              ))}
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="mb-14 scroll-mt-20">
            <h2
              className={`font-bold tracking-tight md:text-[15px] text-lg ${dark ? "text-zinc-100" : "text-zinc-900"}`}
            >
              Projects
            </h2>
            <p
              className={`text-[12px] mt-1 mb-3.5 ${dark ? "text-zinc-500" : "text-zinc-400"}`}
            >
              Check out my latest work
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {PROJECTS.map((p) => (
                <ProjectCard key={p.title} p={p} dark={dark} />
              ))}
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="scroll-mt-20">
            <h2
              className={`font-bold mb-2 tracking-tight md:text-[15px] text-lg ${dark ? "text-zinc-100" : "text-zinc-900"}`}
            >
              Contact
            </h2>
            <p
              className={`text-[13px] leading-[1.7] mb-4 ${dark ? "text-zinc-400" : "text-zinc-500"}`}
            >
              Open to senior frontend roles — especially at AI-focused
              companies. Feel free to reach out.
            </p>
            <div className="flex gap-2.5 flex-wrap">
              <ContactBtn
                label="Email me"
                href="mailto:roshanraii@gmail.com"
                primary
                dark={dark}
              />
              <ContactBtn
                label="Portfolio →"
                href="https://roshanraii.github.io/myportfolio"
                dark={dark}
              />
            </div>
          </section>
        </main>
      </div>

      {/* ── Floating dock — mobile only ── */}
      <div
        className={`fixed bottom-5 left-1/2 -translate-x-1/2 z-50 md:hidden flex items-center gap-0.5 px-2.5 py-1.5 rounded-2xl border backdrop-blur-xl shadow-xl
        ${dark ? "bg-zinc-900/88 border-zinc-700 shadow-black/50" : "bg-white/88 border-zinc-200 shadow-black/10"}`}
      >
        {DOCK.map((item) => (
          <DockBtn
            key={item.label}
            icon={item.icon}
            label={item.label}
            onClick={item.onClick}
            dark={dark}
          />
        ))}
      </div>

      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; font-family: 'Inter', system-ui, sans-serif; }
      `}</style>
    </div>
  );
}
