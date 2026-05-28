import { useState, useEffect, useRef } from "react";

/* ─── THEMES (CSS custom property values) ────────────────────────────────── */
const THEMES = {
  obsidian: {
    name: "Obsidian",
    dot: "#7c6aff",
    "--bg": "#0a0a0f",
    "--surface": "#111118",
    "--card": "#16161f",
    "--border": "#252535",
    "--accent": "#7c6aff",
    "--accent-rgb": "124,106,255",
    "--accent-lt": "#a99cff",
    "--text": "#e8e8f0",
    "--muted": "#7070a0",
    "--tag": "#1e1e30",
    "--tag-text": "#a99cff",
  },
  ember: {
    name: "Ember",
    dot: "#f97316",
    "--bg": "#0d0905",
    "--surface": "#130e08",
    "--card": "#1a1208",
    "--border": "#2e2010",
    "--accent": "#f97316",
    "--accent-rgb": "249,115,22",
    "--accent-lt": "#fdba74",
    "--text": "#f0e8e0",
    "--muted": "#9a7a60",
    "--tag": "#2a1a08",
    "--tag-text": "#fdba74",
  },
  arctic: {
    name: "Arctic",
    dot: "#0070f3",
    "--bg": "#f0f4f8",
    "--surface": "#ffffff",
    "--card": "#ffffff",
    "--border": "#d8e4ef",
    "--accent": "#0070f3",
    "--accent-rgb": "0,112,243",
    "--accent-lt": "#3d9aff",
    "--text": "#0f172a",
    "--muted": "#64748b",
    "--tag": "#e0eeff",
    "--tag-text": "#0070f3",
  },
  sakura: {
    name: "Sakura",
    dot: "#f472b6",
    "--bg": "#0f080d",
    "--surface": "#170d14",
    "--card": "#1e1119",
    "--border": "#321828",
    "--accent": "#f472b6",
    "--accent-rgb": "244,114,182",
    "--accent-lt": "#f9a8d4",
    "--text": "#f5e8ef",
    "--muted": "#9a7090",
    "--tag": "#2a1020",
    "--tag-text": "#f9a8d4",
  },
};

/* ─── DATA ───────────────────────────────────────────────────────────────── */
const SKILLS = [
  {
    label: "Languages",
    items: [
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SQL",
      "Node.js",
    ],
  },
  {
    label: "Frameworks",
    items: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "React-Query",
      "Jotai",
      "Express.js",
      "Micro-frontends",
    ],
  },
  {
    label: "UI & Design",
    items: [
      "Tailwind CSS",
      "Ant Design",
      "Material UI",
      "Bootstrap 5",
      "Design Systems",
    ],
  },
  {
    label: "Tools & DevOps",
    items: [
      "Git",
      "Vite",
      "Webpack",
      "Jest",
      "React Testing Library",
      "Postman",
      "JIRA",
      "CI/CD",
      "Agile",
    ],
  },
  {
    label: "Expertise",
    items: [
      "Web Performance",
      "Responsive Design",
      "State Management",
      "RESTful APIs",
      "Unit Testing",
    ],
  },
];

const EXPERIENCE = [
  {
    company: "Nagarro",
    companyPeriod: "Oct 2021 – Present",
    roles: [
      {
        title: "Senior Engineer",
        period: "Oct 2024 – Present",
        bullets: [
          {
            heading: "Enterprise Task Management Platform:",
            body: "Developed a high-performance interface using React and Tailwind CSS, implementing drag-and-drop workflows that increased operational efficiency by 25%.",
            stat: "+25% efficiency",
          },
          {
            heading: "Performance Optimization:",
            body: "Leveraged React-Query for server-state management, reducing redundant API calls by 40% and improving Time-to-Interactive (TTI) by 1.5s.",
            stat: "−40% API calls",
          },
          {
            heading: "Technical Leadership:",
            body: "Spearheaded architectural decisions for complex UI modules, ensuring scalability and adherence to best practices.",
            stat: "Arch. lead",
          },
        ],
      },
      {
        title: "Engineer / Associate Engineer / Intern",
        period: "Jan 2021 – Sept 2024",
        bullets: [
          {
            heading: "Automotive Dealer Management Ecosystem:",
            body: "Led the migration from a monolithic frontend to a Micro-frontend architecture, reducing deployment conflicts and shortening release cycles by 30%.",
            stat: "−30% release time",
          },
          {
            heading: "Design System:",
            body: "Engineered a standardized, Reusable Component Library ensuring 100% UI consistency across 5+ industrial modules and accelerating development speed by 20%.",
            stat: "100% consistency",
          },
          {
            heading: "Quality Assurance:",
            body: "Integrated Jest and React Testing Library, maintaining an 85% code coverage threshold and reducing production bugs by 15%.",
            stat: "85% coverage",
          },
          {
            heading: "Awards:",
            body: "Recognized with the Nagarro Cheerboard (2023, 2024) for technical excellence and leadership in high-priority project deliveries.",
            stat: "🏆 2023 & 2024",
          },
        ],
      },
    ],
  },
];

const PROJECTS = [
  {
    title: "Secrets",
    subtitle: "Anonymous Sharing Platform",
    icon: "🔐",
    tech: ["React", "Node.js", "OAuth", "MongoDB"],
    desc: "Developed a full-stack SPA featuring Google OAuth and encrypted data storage; successfully managed 100+ concurrent users during initial launch.",
    detail:
      "End-to-end encrypted secrets with Google OAuth 2.0, MongoDB Atlas backend, and real-time session management. Handles 100+ concurrent users at launch with zero data leakage.",
  },
  {
    title: "Library Management System",
    subtitle: "Full-Stack App",
    icon: "📚",
    tech: ["React", "Node.js", "AWS", "RDS", "S3", "SQS", "Lambda"],
    desc: "Built a full-stack library management app with borrow/return tracking system and an admin dashboard for streamlined book and user management.",
    detail:
      "Deployed on AWS Elastic Beanstalk (eu-north-1) with RDS MySQL in private subnets, S3 uploads, SQS/SNS fan-out, Lambda event processors, and GitHub Actions CI/CD pipeline.",
  },
];

const EDUCATION = [
  {
    year: "2021",
    degree: "Master of Computer Applications (MCA)",
    inst: "J.C Bose University Of Science And Technology",
    loc: "Faridabad, IN",
    detail:
      "Focused on advanced algorithms, system design, and distributed computing. Thesis on web performance optimization.",
  },
  {
    year: "2018",
    degree: "Bachelor of Computer Applications (BCA)",
    inst: "DAVCC-MDU",
    loc: "Faridabad, IN",
    detail:
      "Core foundations in programming, databases, networking, and software engineering principles.",
  },
];

const CERTS = [
  {
    title: "NagarroU",
    detail: "Frontend Excellence (React, Redux, JavaScript)",
    icon: "🏅",
  },
  {
    title: "HackerRank",
    detail: "Advanced JavaScript & SQL Certified",
    icon: "⭐",
  },
  {
    title: "NPTEL",
    detail: "Introduction to Internet of Things (IoT)",
    icon: "📡",
  },
];

const STATS = [
  { num: "4+", label: "Years Exp." },
  { num: "40%", label: "API Reduction" },
  { num: "85%", label: "Code Coverage" },
  { num: "30%", label: "Faster Releases" },
];

/* ─── HOOKS ──────────────────────────────────────────────────────────────── */
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─── SECTION WRAPPER ────────────────────────────────────────────────────── */
function Section({ id, title, children }) {
  const [ref, visible] = useInView();
  return (
    <section
      id={id}
      ref={ref}
      className="pt-16 md:pt-20"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <div className="flex items-center gap-3 mb-8 md:mb-10">
        <span
          className="h-[3px] w-7 rounded-sm flex-shrink-0"
          style={{ background: "var(--accent)" }}
        />
        <h2
          className="text-xl md:text-2xl font-extrabold tracking-tight"
          style={{ color: "var(--text)", fontFamily: "'Syne', sans-serif" }}
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

/* ─── SKILL TAG ──────────────────────────────────────────────────────────── */
function Tag({ children }) {
  const [hov, setHov] = useState(false);
  return (
    <span
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="inline-block rounded-md px-2.5 py-0.5 text-xs font-semibold cursor-default border transition-all duration-150 whitespace-nowrap"
      style={{
        background: hov ? "var(--accent)" : "var(--tag)",
        color: hov ? "#fff" : "var(--tag-text)",
        borderColor: hov ? "var(--accent)" : "var(--border)",
        transform: hov ? "translateY(-2px) scale(1.04)" : "none",
        boxShadow: hov ? "0 4px 12px rgba(var(--accent-rgb),0.3)" : "none",
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      {children}
    </span>
  );
}

/* ─── EXP BULLET ─────────────────────────────────────────────────────────── */
function ExpBullet({ heading, body, stat }) {
  const [on, setOn] = useState(false);
  return (
    <li className="flex gap-2 mb-2 items-start">
      <span
        className="mt-1.5 flex-shrink-0 text-[9px]"
        style={{ color: "var(--accent)" }}
      >
        ▸
      </span>
      <div className="flex-1 min-w-0">
        <div className="flex items-start gap-2 flex-wrap">
          <span
            className="text-sm leading-relaxed flex-1 min-w-0"
            style={{ color: "var(--muted)" }}
          >
            {heading && (
              <strong className="font-bold" style={{ color: "var(--text)" }}>
                {heading}{" "}
              </strong>
            )}
            {body}
          </span>
          {stat && (
            <button
              onClick={() => setOn((o) => !o)}
              className="flex-shrink-0 rounded-full px-3 py-0.5 text-[10.5px] font-semibold border cursor-pointer transition-all duration-150 whitespace-nowrap"
              style={{
                background: on ? "var(--accent)" : "var(--tag)",
                color: on ? "#fff" : "var(--tag-text)",
                borderColor: on ? "var(--accent)" : "var(--border)",
                transform: on ? "scale(1.06)" : "scale(1)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {stat}
            </button>
          )}
        </div>
      </div>
    </li>
  );
}

/* ─── PROJECT CARD ───────────────────────────────────────────────────────── */
function ProjectCard({ p }) {
  const [flipped, setFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);
  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < 500);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  if (isMobile) {
    return (
      <div
        className="rounded-xl mb-3 overflow-hidden border transition-colors duration-200"
        style={{
          background: "var(--card)",
          borderColor: flipped ? "var(--accent)" : "var(--border)",
        }}
      >
        <div
          onClick={() => setFlipped((f) => !f)}
          className="p-4 cursor-pointer"
        >
          <div className="flex gap-3 items-center mb-2">
            <span className="text-2xl">{p.icon}</span>
            <div>
              <div
                className="font-extrabold text-sm"
                style={{
                  color: "var(--text)",
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                {p.title}
              </div>
              <div
                className="text-[10px] font-bold uppercase tracking-widest mt-0.5"
                style={{ color: "var(--accent)" }}
              >
                {p.subtitle}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5 mb-2">
            {p.tech.map((tc) => (
              <Tag key={tc}>{tc}</Tag>
            ))}
          </div>
          <p
            className="text-xs leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            {p.desc}
          </p>
          <div
            className="text-right mt-2 text-[10px]"
            style={{
              color: "var(--muted)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            {flipped ? "hide ▲" : "details ▼"}
          </div>
        </div>
        {flipped && (
          <div
            className="px-4 pb-4 pt-3 border-t"
            style={{
              background: "rgba(var(--accent-rgb),0.07)",
              borderColor: "var(--accent)",
            }}
          >
            <p
              className="text-xs leading-relaxed italic"
              style={{ color: "var(--text)" }}
            >
              {p.detail}
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      onClick={() => setFlipped((f) => !f)}
      className="cursor-pointer mb-4"
      style={{ perspective: "900px" }}
    >
      <div
        style={{
          position: "relative",
          minHeight: 160,
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4,0.2,0.2,1)",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-xl p-5 border"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            background: "var(--card)",
            borderColor: "var(--border)",
          }}
        >
          <div className="flex gap-3 items-start mb-3">
            <span className="text-3xl flex-shrink-0">{p.icon}</span>
            <div>
              <div
                className="font-extrabold text-base"
                style={{
                  color: "var(--text)",
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                {p.title}
              </div>
              <div
                className="text-[11px] font-bold uppercase tracking-widest mt-1"
                style={{ color: "var(--accent)" }}
              >
                {p.subtitle}
              </div>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {p.tech.map((tc) => (
                  <Tag key={tc}>{tc}</Tag>
                ))}
              </div>
            </div>
          </div>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            {p.desc}
          </p>
          <div
            className="text-right mt-2.5 text-[10px]"
            style={{
              color: "var(--muted)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            click to flip ↺
          </div>
        </div>
        {/* Back */}
        <div
          className="absolute inset-0 rounded-xl p-5 border flex flex-col justify-center gap-3"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "rgba(var(--accent-rgb),0.08)",
            borderColor: "var(--accent)",
          }}
        >
          <p
            className="text-sm leading-relaxed italic"
            style={{ color: "var(--text)" }}
          >
            {p.detail}
          </p>
          <div
            className="text-right text-[10px]"
            style={{
              color: "var(--muted)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            click to flip back ↺
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── EDUCATION ROW ──────────────────────────────────────────────────────── */
function EduRow({ e }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="pl-4 mb-3 border-l-2 transition-colors duration-300"
      style={{ borderColor: open ? "var(--accent)" : "var(--border)" }}
    >
      <div onClick={() => setOpen((o) => !o)} className="cursor-pointer">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
          <div className="flex flex-wrap gap-x-2.5 gap-y-0.5 items-baseline">
            <span
              className="text-xs font-bold min-w-[32px]"
              style={{
                color: "var(--accent)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {e.year}
            </span>
            <span
              className="text-sm font-bold"
              style={{ color: "var(--text)" }}
            >
              {e.degree}
            </span>
            <span className="text-sm" style={{ color: "var(--muted)" }}>
              – {e.inst}
            </span>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span
              className="text-[11px]"
              style={{
                color: "var(--muted)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {e.loc}
            </span>
            <span
              className="text-sm inline-block transition-transform duration-200"
              style={{
                color: "var(--muted)",
                transform: open ? "rotate(90deg)" : "none",
              }}
            >
              ›
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          maxHeight: open ? 80 : 0,
          overflow: "hidden",
          opacity: open ? 1 : 0,
          transition: "max-height 0.35s ease, opacity 0.3s",
        }}
      >
        <p
          className="text-xs leading-relaxed italic mt-2"
          style={{ color: "var(--muted)" }}
        >
          {e.detail}
        </p>
      </div>
    </div>
  );
}

/* ─── CERT BADGE ─────────────────────────────────────────────────────────── */
function CertBadge({ c }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="flex items-center gap-3 rounded-lg px-4 py-3 border mb-2 transition-all duration-200 cursor-default"
      style={{
        background: hov ? "rgba(var(--accent-rgb),0.07)" : "var(--card)",
        borderColor: hov ? "var(--accent)" : "var(--border)",
        transform: hov ? "translateX(5px)" : "none",
      }}
    >
      <span className="text-2xl flex-shrink-0">{c.icon}</span>
      <div className="flex-1 min-w-0">
        <div
          className="font-bold text-sm"
          style={{ color: "var(--text)", fontFamily: "'Syne', sans-serif" }}
        >
          {c.title}
        </div>
        <div className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
          {c.detail}
        </div>
      </div>
      <span
        className="text-[10px] flex-shrink-0 transition-opacity duration-200"
        style={{
          color: "var(--accent)",
          opacity: hov ? 1 : 0,
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        verified ✓
      </span>
    </div>
  );
}

/* ─── SKILLS SECTION ─────────────────────────────────────────────────────── */
function SkillsSection() {
  const [active, setActive] = useState(null);
  const filtered = active ? SKILLS.filter((s) => s.label === active) : SKILLS;
  return (
    <div>
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-5">
        {["All", ...SKILLS.map((s) => s.label)].map((lbl) => {
          const isOn = lbl === "All" ? !active : active === lbl;
          return (
            <button
              key={lbl}
              onClick={() =>
                setActive(lbl === "All" ? null : active === lbl ? null : lbl)
              }
              className="rounded-full px-3.5 py-1 text-xs font-semibold border-0 cursor-pointer transition-all duration-150"
              style={{
                background: isOn ? "var(--accent)" : "var(--tag)",
                color: isOn ? "#fff" : "var(--tag-text)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {lbl}
            </button>
          );
        })}
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filtered.map(({ label, items }) => (
          <div
            key={label}
            className="rounded-xl p-4 md:p-5 border transition-all duration-200"
            style={{ background: "var(--card)", borderColor: "var(--border)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.boxShadow =
                "0 0 18px rgba(var(--accent-rgb),0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              className="text-[10.5px] font-bold uppercase tracking-widest mb-3"
              style={{
                color: "var(--accent)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {label}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {items.map((i) => (
                <Tag key={i}>{i}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── MAIN ───────────────────────────────────────────────────────────────── */
export default function Portfolio() {
  const [themeKey, setThemeKey] = useState("obsidian");
  const [activeSection, setActiveSection] = useState("hero");
  const [copied, setCopied] = useState(false);
  const sections = ["hero", "skills", "experience", "projects", "education"];
  const th = THEMES[themeKey];

  /* Inject CSS vars on theme change */
  useEffect(() => {
    const vars = Object.entries(th)
      .filter(([k]) => k.startsWith("--"))
      .map(([k, v]) => `${k}:${v}`)
      .join(";");
    document.documentElement.style.cssText = vars;
  }, [themeKey]);

  /* Google Fonts */
  useEffect(() => {
    if (!document.getElementById("pf-fonts")) {
      const l = document.createElement("link");
      l.id = "pf-fonts";
      l.rel = "stylesheet";
      l.href =
        "https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;600&family=Instrument+Serif:ital@0;1&display=swap";
      document.head.appendChild(l);
    }
  }, []);

  /* Active section tracking */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        }),
      { threshold: 0.25 },
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const copy = () => {
    navigator.clipboard.writeText("roshan95rai@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{
        background: "var(--bg)",
        color: "var(--text)",
        fontFamily: "'Syne', sans-serif",
      }}
    >
      {/* Global styles */}
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }
        ul { list-style: none; padding: 0; margin: 0; }
        a { text-decoration: none; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }
        @keyframes scrollPulse { 0%,100%{opacity:1} 50%{opacity:.2} }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-14 md:h-[60px] flex items-center justify-between px-4 sm:px-8 md:px-12 border-b backdrop-blur-md transition-colors duration-300"
        style={{
          background: "color-mix(in srgb, var(--surface) 88%, transparent)",
          borderColor: "var(--border)",
        }}
      >
        {/* Logo */}
        <span
          className="text-xl md:text-2xl italic"
          style={{
            color: "var(--accent)",
            fontFamily: "'Instrument Serif', serif",
          }}
        >
          rr.
        </span>

        {/* Nav links – hidden on mobile */}
        <div className="hidden md:flex gap-1">
          {sections
            .filter((s) => s !== "hero")
            .map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className="capitalize px-3 py-1.5 rounded-md text-[12.5px] font-bold border-0 cursor-pointer bg-transparent transition-colors duration-150 tracking-wide"
                style={{
                  color: activeSection === s ? "var(--accent)" : "var(--muted)",
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                {s}
              </button>
            ))}
        </div>

        {/* Theme dot switcher */}
        <div className="flex items-center gap-2">
          {Object.entries(THEMES).map(([key, t]) => (
            <button
              key={key}
              onClick={() => setThemeKey(key)}
              title={t.name}
              className="rounded-full border-[2.5px] cursor-pointer p-0 transition-all duration-200"
              style={{
                width: themeKey === key ? 20 : 17,
                height: themeKey === key ? 20 : 17,
                background: t.dot,
                borderColor: themeKey === key ? "var(--text)" : "transparent",
                transform: themeKey === key ? "scale(1.2)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </nav>

      {/* ── CONTENT ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 md:px-12">
        {/* ── HERO ── */}
        <section
          id="hero"
          className="min-h-screen flex flex-col justify-center pt-16 md:pt-20 relative"
        >
          {/* Badge */}
          <div className="mb-4">
            <span
              className="text-[11px] uppercase tracking-[0.15em] px-3 py-1 rounded border font-semibold"
              style={{
                color: "var(--accent)",
                background: "rgba(var(--accent-rgb),0.10)",
                borderColor: "rgba(var(--accent-rgb),0.3)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Senior Frontend Engineer
            </span>
          </div>

          {/* Name */}
          <h1
            className="font-extrabold tracking-tighter leading-none mb-4"
            style={{
              fontSize: "clamp(44px, 9vw, 96px)",
              color: "var(--text)",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            Roshan
            <br />
            <span
              className="italic font-normal"
              style={{
                color: "var(--accent)",
                fontFamily: "'Instrument Serif', serif",
              }}
            >
              Rai
            </span>
          </h1>

          {/* Tagline */}
          <p
            className="text-sm md:text-base leading-relaxed mb-9 max-w-lg"
            style={{ color: "var(--muted)" }}
          >
            4+ years building enterprise-grade React applications. Specialized
            in micro-frontend architecture, TypeScript, and squeezing every
            millisecond of performance.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-11">
            <a
              href="mailto:roshan95rai@gmail.com"
              className="px-6 py-3 rounded-lg font-bold text-sm tracking-wide text-white transition-opacity duration-200 hover:opacity-85"
              style={{ background: "var(--accent)" }}
            >
              Get in Touch
            </a>
            <a
              href="https://github.com/roshanraii"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg font-bold text-sm border transition-colors duration-200"
              style={{
                color: "var(--text)",
                borderColor: "var(--border)",
                background: "transparent",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "var(--border)")
              }
            >
              GitHub ↗
            </a>
            <button
              onClick={copy}
              className="px-6 py-3 rounded-lg font-bold text-sm border cursor-pointer transition-colors duration-200 bg-transparent"
              style={{
                color: copied ? "var(--accent)" : "var(--muted)",
                borderColor: "var(--border)",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              {copied ? "✓ Copied!" : "Copy Email"}
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {STATS.map(({ num, label }) => (
              <div key={label}>
                <div
                  className="text-2xl md:text-3xl font-extrabold tracking-tight"
                  style={{ color: "var(--accent)" }}
                >
                  {num}
                </div>
                <div
                  className="text-[10px] uppercase tracking-widest mt-0.5"
                  style={{
                    color: "var(--muted)",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="hidden md:flex absolute bottom-9 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5">
            <span
              className="text-[10px] uppercase tracking-[0.12em]"
              style={{
                color: "var(--muted)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              scroll
            </span>
            <div
              className="w-px h-9"
              style={{
                background: `linear-gradient(to bottom, var(--accent), transparent)`,
                animation: "scrollPulse 1.5s ease-in-out infinite",
              }}
            />
          </div>
        </section>

        {/* ── SKILLS ── */}
        <Section id="skills" title="Technical Skills">
          <SkillsSection />
        </Section>

        {/* ── EXPERIENCE ── */}
        <Section id="experience" title="Professional Experience">
          {EXPERIENCE.map((job) => (
            <div key={job.company} className="mb-5">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5 sm:gap-0 mb-3">
                <span
                  className="font-extrabold text-lg md:text-xl"
                  style={{
                    color: "var(--text)",
                    fontFamily: "'Syne', sans-serif",
                  }}
                >
                  {job.company}
                </span>
                <span
                  className="text-xs"
                  style={{
                    color: "var(--muted)",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {job.companyPeriod}
                </span>
              </div>
              {job.roles.map((role) => (
                <div
                  key={role.title}
                  className="pl-3 md:pl-4 border-l-2 mb-4"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5 sm:gap-0 mb-2">
                    <span
                      className="font-bold text-sm italic"
                      style={{ color: "var(--text)" }}
                    >
                      {role.title}
                    </span>
                    <span
                      className="text-[11px]"
                      style={{
                        color: "var(--muted)",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {role.period}
                    </span>
                  </div>
                  <ul>
                    {role.bullets.map((b, i) => (
                      <ExpBullet
                        key={i}
                        heading={b.heading}
                        body={b.body}
                        stat={b.stat}
                      />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </Section>

        {/* ── PROJECTS ── */}
        <Section id="projects" title="Projects">
          <p
            className="text-[11px] mb-4"
            style={{
              color: "var(--muted)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            click any card to flip for details ↺
          </p>
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </Section>

        {/* ── EDUCATION & CERTS ── */}
        <Section id="education" title="Education & Certifications">
          <p
            className="text-[10px] uppercase tracking-widest mb-3"
            style={{
              color: "var(--muted)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Education
          </p>
          {EDUCATION.map((e) => (
            <EduRow key={e.degree} e={e} />
          ))}
          <p
            className="text-[10px] uppercase tracking-widest mb-3 mt-7"
            style={{
              color: "var(--muted)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Certifications
          </p>
          {CERTS.map((c) => (
            <CertBadge key={c.title} c={c} />
          ))}
        </Section>

        {/* ── FOOTER ── */}
        <footer
          className="border-t mt-16 pt-9 pb-12 flex flex-wrap justify-between items-center gap-4"
          style={{ borderColor: "var(--border)" }}
        >
          <span
            className="italic text-xl"
            style={{
              color: "var(--accent)",
              fontFamily: "'Instrument Serif', serif",
            }}
          >
            rr.
          </span>
          <div className="flex flex-wrap gap-4 md:gap-6">
            {[
              ["LinkedIn", "https://linkedin.com/in/roshan-rai"],
              ["GitHub", "https://github.com/roshanraii"],
              ["Email", "mailto:roshan95rai@gmail.com"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-bold transition-colors duration-150"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--muted)")
                }
              >
                {label}
              </a>
            ))}
          </div>
          <span
            className="text-xs"
            style={{
              color: "var(--muted)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Faridabad, India
          </span>
        </footer>
      </div>

      {/* ── Side nav dots (desktop) ── */}
      <div className="hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 flex-col gap-2 z-50">
        {sections.map((s) => (
          <button
            key={s}
            onClick={() => scrollTo(s)}
            title={s}
            className="rounded h-2 border-0 cursor-pointer p-0 transition-all duration-300"
            style={{
              width: activeSection === s ? 28 : 8,
              background:
                activeSection === s ? "var(--accent)" : "var(--border)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
