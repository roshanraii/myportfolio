import { useState, useEffect, useRef } from "react";

/* ─── THEMES ─────────────────────────────────────────────────────────────── */
const THEMES = {
  obsidian: {
    name: "Obsidian",
    dot: "#a78bfa",
    "--bg": "#0d0d0d",
    "--page": "#0d0d0d",
    "--card": "#1a1a1a",
    "--border": "#ffffff",
    "--accent": "#a78bfa",
    "--accent-rgb": "167,139,250",
    "--accent-fg": "#0d0d0d",
    "--text": "#ffffff",
    "--muted": "#a0a0a0",
    "--tag": "#2a2a2a",
    "--tag-text": "#a78bfa",
    "--shadow": "5px 5px 0px #a78bfa",
    "--shadow-sm": "3px 3px 0px #a78bfa",
    "--shadow-inv": "5px 5px 0px #ffffff",
  },
  ember: {
    name: "Ember",
    dot: "#fb923c",
    "--bg": "#0f0a00",
    "--page": "#0f0a00",
    "--card": "#1c1200",
    "--border": "#ffffff",
    "--accent": "#fb923c",
    "--accent-rgb": "251,146,60",
    "--accent-fg": "#0f0a00",
    "--text": "#fff8f0",
    "--muted": "#a0896a",
    "--tag": "#241800",
    "--tag-text": "#fb923c",
    "--shadow": "5px 5px 0px #fb923c",
    "--shadow-sm": "3px 3px 0px #fb923c",
    "--shadow-inv": "5px 5px 0px #fff8f0",
  },
  arctic: {
    name: "Arctic",
    dot: "#2563eb",
    "--bg": "#f0f4ff",
    "--page": "#f0f4ff",
    "--card": "#ffffff",
    "--border": "#0f172a",
    "--accent": "#2563eb",
    "--accent-rgb": "37,99,235",
    "--accent-fg": "#ffffff",
    "--text": "#0f172a",
    "--muted": "#475569",
    "--tag": "#dbeafe",
    "--tag-text": "#1e40af",
    "--shadow": "5px 5px 0px #2563eb",
    "--shadow-sm": "3px 3px 0px #2563eb",
    "--shadow-inv": "5px 5px 0px #0f172a",
  },
  sakura: {
    name: "Sakura",
    dot: "#f472b6",
    "--bg": "#0d0008",
    "--page": "#0d0008",
    "--card": "#1a0012",
    "--border": "#ffffff",
    "--accent": "#f472b6",
    "--accent-rgb": "244,114,182",
    "--accent-fg": "#0d0008",
    "--text": "#fff0f8",
    "--muted": "#b07090",
    "--tag": "#250018",
    "--tag-text": "#f472b6",
    "--shadow": "5px 5px 0px #f472b6",
    "--shadow-sm": "3px 3px 0px #f472b6",
    "--shadow-inv": "5px 5px 0px #fff0f8",
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
            stat: "+25%",
          },
          {
            heading: "Performance Optimization:",
            body: "Leveraged React-Query for server-state management, reducing redundant API calls by 40% and improving Time-to-Interactive (TTI) by 1.5s.",
            stat: "−40% calls",
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
            heading: "Automotive Dealer Management:",
            body: "Led the migration from a monolithic frontend to a Micro-frontend architecture, reducing deployment conflicts and shortening release cycles by 30%.",
            stat: "−30% cycles",
          },
          {
            heading: "Design System:",
            body: "Engineered a standardized Reusable Component Library ensuring 100% UI consistency across 5+ industrial modules and accelerating development speed by 20%.",
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
            stat: "🏆 ×2",
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
    desc: "Full-stack SPA featuring Google OAuth and encrypted data storage; managed 100+ concurrent users at launch.",
    detail:
      "End-to-end encrypted secrets with Google OAuth 2.0, MongoDB Atlas backend, and real-time session management. Zero data leakage at 100+ concurrent users.",
  },
  {
    title: "Library Management System",
    subtitle: "Full-Stack App",
    icon: "📚",
    tech: ["React", "Node.js", "AWS", "RDS", "S3", "SQS", "Lambda"],
    desc: "Full-stack library app with borrow/return tracking system and admin dashboard for book and user management.",
    detail:
      "Deployed on AWS Elastic Beanstalk (eu-north-1) with RDS MySQL, private subnets, S3 uploads, SQS/SNS fan-out, Lambda event processors, and GitHub Actions CI/CD.",
  },
];

const EDUCATION = [
  {
    year: "2021",
    degree: "Master of Computer Applications (MCA)",
    inst: "J.C Bose University of Science and technology",
    loc: "Faridabad, IN",
    detail:
      "Advanced algorithms, system design, distributed computing. Thesis on web performance optimization.",
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
  }, []);
  return [ref, visible];
}

/* ─── SECTION WRAPPER ────────────────────────────────────────────────────── */
function Section({ id, title, children }) {
  const [ref, visible] = useInView();
  return (
    <section
      id={id}
      ref={ref}
      className="pt-16 md:pt-24"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.55s ease, transform 0.55s ease",
      }}
    >
      {/* Block-offset section title */}
      <div className="mb-8 md:mb-10 inline-block">
        <h2
          className="text-lg md:text-xl font-black uppercase tracking-widest px-4 py-2 border-2"
          style={{
            color: "var(--accent-fg)",
            background: "var(--accent)",
            borderColor: "var(--border)",
            boxShadow: "var(--shadow-inv)",
            fontFamily: "'Space Grotesk', sans-serif",
            letterSpacing: "0.12em",
          }}
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
      className="inline-block px-2.5 py-0.5 text-[11px] font-bold uppercase border cursor-default transition-all duration-150 whitespace-nowrap tracking-wider"
      style={{
        background: hov ? "var(--accent)" : "var(--tag)",
        color: hov ? "var(--accent-fg)" : "var(--tag-text)",
        borderColor: "var(--border)",
        boxShadow: hov ? "var(--shadow-sm)" : "2px 2px 0px var(--border)",
        transform: hov ? "translate(-2px,-2px)" : "none",
        fontFamily: "'Space Grotesk', sans-serif",
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
    <li className="flex gap-3 mb-3 items-start">
      <span
        className="mt-1.5 flex-shrink-0 font-black text-xs"
        style={{ color: "var(--accent)" }}
      >
        ▶
      </span>
      <div className="flex-1 min-w-0">
        <div className="flex items-start gap-2 flex-wrap">
          <span
            className="text-sm leading-relaxed flex-1 min-w-0"
            style={{ color: "var(--muted)" }}
          >
            {heading && (
              <strong className="font-black" style={{ color: "var(--text)" }}>
                {heading}{" "}
              </strong>
            )}
            {body}
          </span>
          {stat && (
            <button
              onClick={() => setOn((o) => !o)}
              className="flex-shrink-0 px-2.5 py-0.5 text-[10px] font-black uppercase border cursor-pointer transition-all duration-150 tracking-widest"
              style={{
                background: on ? "var(--accent)" : "var(--tag)",
                color: on ? "var(--accent-fg)" : "var(--tag-text)",
                borderColor: "var(--border)",
                boxShadow: on ? "none" : "2px 2px 0px var(--border)",
                transform: on ? "translate(2px,2px)" : "none",
                fontFamily: "'Space Grotesk', sans-serif",
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
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 500 : false,
  );
  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < 500);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  if (isMobile) {
    return (
      <div
        className="mb-4 border-2 transition-all duration-150"
        style={{
          background: "var(--card)",
          borderColor: "var(--border)",
          boxShadow: flipped ? "none" : "var(--shadow)",
          transform: flipped ? "translate(5px,5px)" : "none",
        }}
      >
        <div
          onClick={() => setFlipped((f) => !f)}
          className="p-4 cursor-pointer"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">{p.icon}</span>
            <div>
              <div
                className="font-black text-sm uppercase tracking-wide"
                style={{
                  color: "var(--text)",
                  fontFamily: "'Space Grotesk', sans-serif",
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
          <div className="flex flex-wrap gap-1.5 mb-3">
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
            className="text-right mt-2 text-[10px] font-bold uppercase tracking-widest"
            style={{
              color: "var(--accent)",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            {flipped ? "HIDE ▲" : "DETAILS ▼"}
          </div>
        </div>
        {flipped && (
          <div
            className="px-4 pb-4 pt-3 border-t-2"
            style={{ background: "var(--tag)", borderColor: "var(--accent)" }}
          >
            <p
              className="text-xs leading-relaxed"
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
      className="cursor-pointer mb-5"
      style={{ perspective: "1000px" }}
    >
      <div
        style={{
          position: "relative",
          minHeight: 170,
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4,0.2,0.2,1)",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 border-2 p-5"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            background: "var(--card)",
            borderColor: "var(--border)",
            boxShadow: "var(--shadow)",
          }}
        >
          <div className="flex gap-4 items-start mb-4">
            <span className="text-3xl flex-shrink-0">{p.icon}</span>
            <div>
              <div
                className="font-black text-base uppercase tracking-wide"
                style={{
                  color: "var(--text)",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {p.title}
              </div>
              <div
                className="text-[10px] font-bold uppercase tracking-widest mt-1"
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
            className="text-right mt-3 text-[10px] font-bold uppercase tracking-widest"
            style={{
              color: "var(--accent)",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            CLICK TO FLIP ↺
          </div>
        </div>
        {/* Back */}
        <div
          className="absolute inset-0 border-2 p-5 flex flex-col justify-center gap-4"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "var(--accent)",
            borderColor: "var(--border)",
            boxShadow: "var(--shadow-inv)",
          }}
        >
          <p
            className="text-sm leading-relaxed font-semibold"
            style={{ color: "var(--accent-fg)" }}
          >
            {p.detail}
          </p>
          <div
            className="text-right text-[10px] font-bold uppercase tracking-widest"
            style={{
              color: "var(--accent-fg)",
              fontFamily: "'Space Grotesk', sans-serif",
              opacity: 0.7,
            }}
          >
            CLICK TO FLIP BACK ↺
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
      className="border-2 mb-3 transition-all duration-200"
      style={{
        borderColor: "var(--border)",
        boxShadow: open ? "none" : "var(--shadow-sm)",
        transform: open ? "translate(3px,3px)" : "none",
        background: "var(--card)",
      }}
    >
      <div
        onClick={() => setOpen((o) => !o)}
        className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 p-3 sm:p-4 cursor-pointer"
      >
        <div className="flex flex-wrap gap-x-3 gap-y-0.5 items-baseline">
          <span
            className="text-xs font-black"
            style={{
              color: "var(--accent)",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            {e.year}
          </span>
          <span
            className="text-sm font-black"
            style={{
              color: "var(--text)",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            {e.degree}
          </span>
          <span
            className="text-xs font-semibold"
            style={{ color: "var(--muted)" }}
          >
            — {e.inst}
          </span>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <span
            className="text-[11px] font-bold"
            style={{
              color: "var(--muted)",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            {e.loc}
          </span>
          <span
            className="text-sm font-black inline-block transition-transform duration-200"
            style={{
              color: "var(--accent)",
              transform: open ? "rotate(90deg)" : "none",
            }}
          >
            ›
          </span>
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
          className="px-3 sm:px-4 pb-3 text-xs leading-relaxed"
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
      className="flex items-center gap-3 border-2 px-4 py-3 mb-3 cursor-default transition-all duration-150"
      style={{
        background: hov ? "var(--accent)" : "var(--card)",
        borderColor: "var(--border)",
        boxShadow: hov ? "none" : "var(--shadow-sm)",
        transform: hov ? "translate(3px,3px)" : "none",
        color: hov ? "var(--accent-fg)" : "var(--text)",
      }}
    >
      <span className="text-2xl flex-shrink-0">{c.icon}</span>
      <div className="flex-1 min-w-0">
        <div
          className="font-black text-sm uppercase tracking-wide"
          style={{
            color: hov ? "var(--accent-fg)" : "var(--text)",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {c.title}
        </div>
        <div
          className="text-xs mt-0.5 font-semibold"
          style={{
            color: hov ? "var(--accent-fg)" : "var(--muted)",
            opacity: hov ? 0.85 : 1,
          }}
        >
          {c.detail}
        </div>
      </div>
      <span
        className="text-[10px] font-black uppercase tracking-widest flex-shrink-0 transition-opacity duration-200"
        style={{
          color: hov ? "var(--accent-fg)" : "var(--accent)",
          opacity: hov ? 1 : 0,
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        VERIFIED ✓
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
      <div className="flex flex-wrap gap-2 mb-6">
        {["All", ...SKILLS.map((s) => s.label)].map((lbl) => {
          const isOn = lbl === "All" ? !active : active === lbl;
          return (
            <button
              key={lbl}
              onClick={() =>
                setActive(lbl === "All" ? null : active === lbl ? null : lbl)
              }
              className="px-3 py-1 text-[11px] font-black uppercase tracking-widest border-2 cursor-pointer transition-all duration-150"
              style={{
                background: isOn ? "var(--accent)" : "var(--tag)",
                color: isOn ? "var(--accent-fg)" : "var(--tag-text)",
                borderColor: "var(--border)",
                boxShadow: isOn ? "none" : "2px 2px 0px var(--border)",
                transform: isOn ? "translate(2px,2px)" : "none",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              {lbl}
            </button>
          );
        })}
      </div>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(({ label, items }) => (
          <div
            key={label}
            className="border-2 p-4 transition-all duration-150"
            style={{
              background: "var(--card)",
              borderColor: "var(--border)",
              boxShadow: "var(--shadow)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translate(5px,5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "var(--shadow)";
              e.currentTarget.style.transform = "none";
            }}
          >
            <div
              className="text-[10px] font-black uppercase tracking-widest mb-3 pb-2 border-b-2"
              style={{
                color: "var(--accent)",
                borderColor: "var(--border)",
                fontFamily: "'Space Grotesk', sans-serif",
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
export default function App() {
  const [themeKey, setThemeKey] = useState("arctic");
  const [activeSection, setActiveSection] = useState("hero");
  const [copied, setCopied] = useState(false);
  const sections = ["hero", "skills", "experience", "projects", "education"];

  /* Apply CSS vars */
  useEffect(() => {
    const vars = Object.entries(THEMES[themeKey])
      .filter(([k]) => k.startsWith("--"))
      .map(([k, v]) => `${k}:${v}`)
      .join(";");
    document.documentElement.style.cssText = vars;
  }, [themeKey]);

  /* Fonts */
  useEffect(() => {
    if (!document.getElementById("pf-fonts")) {
      const l = document.createElement("link");
      l.id = "pf-fonts";
      l.rel = "stylesheet";
      l.href =
        "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap";
      document.head.appendChild(l);
    }
  }, []);

  /* Section tracker */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        }),
      { threshold: 0.2 },
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
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }
        ul { list-style: none; padding: 0; margin: 0; }
        a { text-decoration: none; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes scrollPulse { 0%,100%{opacity:1} 50%{opacity:.15} }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 md:px-12 border-b-2 h-14 md:h-16 transition-colors duration-300"
        style={{ background: "var(--bg)", borderColor: "var(--border)" }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="font-black text-lg uppercase tracking-widest border-2 px-3 py-1 cursor-pointer bg-transparent transition-all duration-150"
          style={{
            color: "var(--accent-fg)",
            background: "var(--accent)",
            borderColor: "var(--border)",
            boxShadow: "var(--shadow-sm)",
            fontFamily: "'Space Mono', monospace",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "translate(3px,3px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "var(--shadow-sm)";
            e.currentTarget.style.transform = "none";
          }}
        >
          RR
        </button>

        {/* Nav links */}
        <div className="hidden md:flex gap-1">
          {sections
            .filter((s) => s !== "hero")
            .map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className="capitalize px-3 py-1.5 text-xs font-black uppercase tracking-widest border-2 cursor-pointer transition-all duration-150 bg-transparent"
                style={{
                  color:
                    activeSection === s ? "var(--accent-fg)" : "var(--muted)",
                  background:
                    activeSection === s ? "var(--accent)" : "transparent",
                  borderColor:
                    activeSection === s ? "var(--border)" : "transparent",
                  boxShadow: activeSection === s ? "var(--shadow-sm)" : "none",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {s}
              </button>
            ))}
        </div>

        {/* Theme dots */}
        <div className="flex items-center gap-2">
          {Object.entries(THEMES).map(([key, t]) => (
            <button
              key={key}
              onClick={() => setThemeKey(key)}
              title={t.name}
              className="border-2 cursor-pointer transition-all duration-150 p-0 flex-shrink-0"
              style={{
                width: 18,
                height: 18,
                background: t.dot,
                borderColor: themeKey === key ? "var(--text)" : "transparent",
                boxShadow:
                  themeKey === key ? "2px 2px 0px var(--border)" : "none",
                transform: themeKey === key ? "translate(-1px,-1px)" : "none",
              }}
            />
          ))}
        </div>
      </nav>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 md:px-12 pb-24">
        {/* ── HERO ── */}
        <section
          id="hero"
          className="min-h-screen flex flex-col justify-center pt-20 md:pt-24 relative"
        >
          {/* Badge */}
          <div className="mb-5 inline-block">
            <span
              className="text-[11px] font-black uppercase tracking-[0.18em] px-3 py-1.5 border-2"
              style={{
                color: "var(--accent)",
                background: "var(--tag)",
                borderColor: "var(--border)",
                boxShadow: "2px 2px 0px var(--border)",
                fontFamily: "'Space Mono', monospace",
              }}
            >
              Senior Frontend Engineer
            </span>
          </div>

          {/* Name */}
          <h1
            className="font-black uppercase leading-none mb-6"
            style={{
              fontSize: "clamp(52px, 10vw, 110px)",
              letterSpacing: "-0.02em",
              color: "var(--text)",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Roshan
            <br />
            <span
              style={{
                color: "var(--accent-fg)",
                background: "var(--accent)",
                display: "inline-block",
                padding: "0 12px",
                boxShadow: "var(--shadow)",
                fontFamily: "'Space Mono', monospace",
              }}
            >
              RAI
            </span>
          </h1>

          {/* Tagline */}
          <p
            className="text-sm md:text-base leading-relaxed mb-8 max-w-md font-semibold"
            style={{ color: "var(--muted)" }}
          >
            4+ years building enterprise React apps. Micro-frontend
            architecture. TypeScript. Every millisecond counts.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-12">
            <a
              href="mailto:roshan95rai@gmail.com"
              className="px-5 py-3 font-black text-sm uppercase tracking-widest border-2 transition-all duration-150"
              style={{
                color: "var(--accent-fg)",
                background: "var(--accent)",
                borderColor: "var(--border)",
                boxShadow: "var(--shadow)",
                fontFamily: "'Space Mono', monospace",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translate(5px,5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow)";
                e.currentTarget.style.transform = "none";
              }}
            >
              Get in Touch
            </a>
            <a
              href="https://github.com/roshanraii"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 font-black text-sm uppercase tracking-widest border-2 bg-transparent transition-all duration-150"
              style={{
                color: "var(--text)",
                borderColor: "var(--border)",
                boxShadow: "var(--shadow-sm)",
                fontFamily: "'Space Mono', monospace",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translate(3px,3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                e.currentTarget.style.transform = "none";
              }}
            >
              GitHub ↗
            </a>
            <button
              onClick={copy}
              className="px-5 py-3 font-black text-sm uppercase tracking-widest border-2 cursor-pointer transition-all duration-150 bg-transparent"
              style={{
                color: copied ? "var(--accent)" : "var(--muted)",
                borderColor: "var(--border)",
                boxShadow: "2px 2px 0px var(--border)",
                fontFamily: "'Space Mono', monospace",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translate(2px,2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "2px 2px 0px var(--border)";
                e.currentTarget.style.transform = "none";
              }}
            >
              {copied ? "✓ COPIED" : "COPY EMAIL"}
            </button>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-3">
            {STATS.map(({ num, label }) => (
              <div
                key={label}
                className="border-2 px-4 py-3 min-w-[90px]"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div
                  className="text-2xl md:text-3xl font-black leading-none"
                  style={{
                    color: "var(--accent)",
                    fontFamily: "'Space Mono', monospace",
                  }}
                >
                  {num}
                </div>
                <div
                  className="text-[9px] uppercase tracking-widest font-bold mt-1"
                  style={{
                    color: "var(--muted)",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-1">
            <span
              className="text-[9px] uppercase tracking-[0.2em] font-black"
              style={{
                color: "var(--muted)",
                fontFamily: "'Space Mono', monospace",
              }}
            >
              scroll
            </span>
            <div
              className="w-px h-8"
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
            <div key={job.company} className="mb-6">
              {/* Company header */}
              <div
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 mb-4 p-3 border-2"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <span
                  className="font-black text-lg md:text-xl uppercase tracking-wide"
                  style={{
                    color: "var(--text)",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {job.company}
                </span>
                <span
                  className="text-xs font-bold"
                  style={{
                    color: "var(--accent)",
                    fontFamily: "'Space Mono', monospace",
                  }}
                >
                  {job.companyPeriod}
                </span>
              </div>
              {/* Roles */}
              {job.roles.map((role) => (
                <div
                  key={role.title}
                  className="pl-3 sm:pl-4 border-l-4 mb-4"
                  style={{ borderColor: "var(--accent)" }}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-0.5 sm:gap-0 mb-2">
                    <span
                      className="font-black text-sm uppercase tracking-wide"
                      style={{
                        color: "var(--text)",
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    >
                      {role.title}
                    </span>
                    <span
                      className="text-[11px] font-bold"
                      style={{
                        color: "var(--muted)",
                        fontFamily: "'Space Mono', monospace",
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
            className="text-[10px] font-black uppercase tracking-[0.15em] mb-4"
            style={{
              color: "var(--muted)",
              fontFamily: "'Space Mono', monospace",
            }}
          >
            click any card to flip ↺
          </p>
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </Section>

        {/* ── EDUCATION & CERTS ── */}
        <Section id="education" title="Education & Certifications">
          <p
            className="text-[10px] font-black uppercase tracking-[0.15em] mb-3"
            style={{
              color: "var(--accent)",
              fontFamily: "'Space Mono', monospace",
            }}
          >
            ▶ Education
          </p>
          {EDUCATION.map((e) => (
            <EduRow key={e.degree} e={e} />
          ))}

          <p
            className="text-[10px] font-black uppercase tracking-[0.15em] mb-3 mt-7"
            style={{
              color: "var(--accent)",
              fontFamily: "'Space Mono', monospace",
            }}
          >
            ▶ Certifications
          </p>
          {CERTS.map((c) => (
            <CertBadge key={c.title} c={c} />
          ))}
        </Section>

        {/* ── FOOTER ── */}
        <footer
          className="border-t-2 mt-20 pt-8 pb-6 flex flex-wrap justify-between items-center gap-4"
          style={{ borderColor: "var(--border)" }}
        >
          <span
            className="font-black text-base uppercase tracking-widest px-3 py-1 border-2"
            style={{
              color: "var(--accent-fg)",
              background: "var(--accent)",
              borderColor: "var(--border)",
              boxShadow: "var(--shadow-sm)",
              fontFamily: "'Space Mono', monospace",
            }}
          >
            RR
          </span>
          <div className="flex flex-wrap gap-4 md:gap-6">
            {[
              ["LINKEDIN", "https://www.linkedin.com/in/roshan-rai-a6b58a199/"],
              ["GITHUB", "https://github.com/roshanraii"],
              ["EMAIL", "mailto:roshan95rai@gmail.com"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-black uppercase tracking-widest border-b-2 pb-0.5 transition-colors duration-150"
                style={{
                  color: "var(--muted)",
                  borderColor: "transparent",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--accent)";
                  e.currentTarget.style.borderColor = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--muted)";
                  e.currentTarget.style.borderColor = "transparent";
                }}
              >
                {label}
              </a>
            ))}
          </div>
          <span
            className="text-[10px] font-bold uppercase tracking-widest"
            style={{
              color: "var(--muted)",
              fontFamily: "'Space Mono', monospace",
            }}
          >
            Faridabad, India
          </span>
        </footer>
      </div>

      {/* ── Side nav (desktop) ── */}
      <div className="hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 flex-col gap-2 z-50">
        {sections.map((s) => (
          <button
            key={s}
            onClick={() => scrollTo(s)}
            title={s}
            className="border-2 cursor-pointer p-0 transition-all duration-200"
            style={{
              width: activeSection === s ? 28 : 8,
              height: 8,
              background: activeSection === s ? "var(--accent)" : "var(--tag)",
              borderColor: "var(--border)",
              boxShadow:
                activeSection === s ? "2px 2px 0px var(--border)" : "none",
            }}
          />
        ))}
      </div>
    </div>
  );
}
