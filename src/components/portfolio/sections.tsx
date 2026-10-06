import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Server,
  Sparkles,
  Terminal,
  Database,
  Cpu,
  Layers,
  ShieldCheck,
  Search,
  ExternalLink,
  Code2,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArchitectureFlow } from "./architecture-flow";
import { ContactForm } from "./contact-form";
import { Reveal } from "./reveal";
import { TiltCard } from "./tilt-card";
import { SystemSimulator } from "./system-simulator";
import { ApiSandbox } from "./api-sandbox";
import { HeroScene } from "./hero-scene";
import { journey, projects, siteConfig, skillGroups } from "@/data/portfolio";

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <Reveal className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </Reveal>
  );
}

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    "Java & Spring Boot Engineer",
    "Full-Stack Architect",
    "Distributed Systems Builder",
    "Next.js & PostgreSQL Developer",
  ];

  return (
    <section id="home" className="hero-section scroll-mt-20">
      <div className="hero-grid" aria-hidden="true" />
      <div className="page-shell relative grid min-h-[calc(100svh-5rem)] items-center gap-10 py-16 md:grid-cols-[1.08fr_.92fr] md:gap-6 md:py-12 lg:grid-cols-[1.2fr_.8fr] lg:gap-10 lg:py-24">
        <div className="relative z-10 max-w-4xl">
          <Reveal>
            <div className="status-pill">
              <span />
              Open to Software Engineering Roles &amp; Collaborations
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-px w-8 bg-emerald-500/60" />
              <p className="hero-kicker">Full-Stack &amp; Distributed Systems</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="hero-name">
              BIBEK<br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
                KUMAR JHA
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="hero-headline">
              Engineering high-concurrency backend architectures, resilient REST APIs, and immersive full-stack web applications.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <p className="hero-copy">
              Specializing in Java, Spring Boot, Next.js, Redis distributed locking, relational databases, and production-oriented system design.
            </p>
          </Reveal>

          {/* Quick Impact Metrics */}
          <Reveal delay={0.26} className="mt-7 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 rounded-lg border border-border/80 bg-card/50 px-3 py-1.5 text-xs font-mono text-slate-300 backdrop-blur-sm">
              <Cpu className="h-3.5 w-3.5 text-emerald-400" />
              <span>3+ Full-Stack Systems</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-border/80 bg-card/50 px-3 py-1.5 text-xs font-mono text-slate-300 backdrop-blur-sm">
              <ShieldCheck className="h-3.5 w-3.5 text-sky-400" />
              <span>Redis Concurrency Engine</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-border/80 bg-card/50 px-3 py-1.5 text-xs font-mono text-slate-300 backdrop-blur-sm">
              <Database className="h-3.5 w-3.5 text-indigo-400" />
              <span>ACID Relational Schemas</span>
            </div>
          </Reveal>

          {/* CTA Buttons */}
          <Reveal delay={0.3} className="mt-9 flex flex-wrap gap-3.5">
            <Button
              asChild
              size="lg"
              className="bg-emerald-500 text-emerald-950 hover:bg-emerald-400 font-semibold shadow-lg shadow-emerald-500/20 gap-2 text-sm"
            >
              <a href="#projects">
                Explore Selected Work <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border/80 bg-card/40 hover:bg-card hover:border-emerald-500/50 gap-2 text-sm"
            >
              <a href={siteConfig.github} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" /> GitHub Profile
              </a>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="bg-[#12192d] hover:bg-[#18233f] text-sky-300 border border-border/60 gap-2 text-sm"
            >
              <a href="#architecture">
                <Sparkles className="h-4 w-4 text-emerald-400" /> System Simulator
              </a>
            </Button>
          </Reveal>
        </div>

        <div className="hero-scene-wrap">
          <HeroScene />
          <div className="scene-label scene-label-top">BIBEK.DEV / COMPANION UNIT 01</div>
          <div className="scene-label scene-label-bottom">INTERACTIVE SYSTEMS ENGINEER</div>
        </div>

        <div className="scroll-cue">
          <span>Scroll to explore</span>
          <ArrowDown className="h-3.5 w-3.5" />
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="section-band scroll-mt-20">
      <div className="page-shell">
        <SectionHeading
          eyebrow="01 / Profile"
          title="Engineering Philosophy & Focus"
          copy="Building real-world software by bridging rigorous backend systems with responsive, accessible user interfaces."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.3fr_.7fr] lg:items-start">
          <Reveal className="space-y-6">
            <p className="editorial-copy">
              I am a software developer passionate about architecting scalable applications that solve concrete problems. I enjoy designing clean data models, robust concurrency controls, and seamless full-stack user workflows.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              My core backend stack centers around <strong className="text-foreground">Java, Spring Boot, PostgreSQL, and Redis</strong> for reliable persistence and distributed coordination, paired with <strong className="text-foreground">Next.js, TypeScript, and Tailwind CSS</strong> for modern frontend execution.
            </p>

            {/* Engineering Pillars Bento */}
            <div className="grid gap-4 sm:grid-cols-2 pt-4">
              <div className="rounded-xl border border-border/70 bg-card/40 p-5 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase">
                  <Server className="h-4 w-4" /> Backend Architecture
                </div>
                <h4 className="mt-2 font-bold text-foreground">Concurrency &amp; Data Integrity</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Distributed locking with Redis, atomic transactions in PostgreSQL, and REST API contract design.
                </p>
              </div>

              <div className="rounded-xl border border-border/70 bg-card/40 p-5 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-sky-400 font-mono text-xs font-bold uppercase">
                  <Layers className="h-4 w-4" /> Full-Stack Interfaces
                </div>
                <h4 className="mt-2 font-bold text-foreground">Type-Safe &amp; Accessible</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Server-side rendering with Next.js, strict TypeScript schemas, and responsive UI components.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="profile-panel">
            <div className="flex items-center gap-4 border-b border-border/60 pb-5">
              <div className="profile-monogram">BJ</div>
              <div>
                <h3 className="font-bold text-lg text-foreground">{siteConfig.name}</h3>
                <p className="font-mono text-xs text-emerald-400 font-semibold">{siteConfig.role}</p>
              </div>
            </div>

            <div className="profile-row">
              <MapPin />
              <div>
                <span>Location</span>
                <strong>India (Open to Remote / Relocation)</strong>
              </div>
            </div>

            <div className="profile-row">
              <Server />
              <div>
                <span>Primary Domains</span>
                <strong>Java Backend, Microservices, Full-Stack</strong>
              </div>
            </div>

            <div className="profile-row">
              <Sparkles />
              <div>
                <span>Status</span>
                <strong className="text-emerald-400 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Hiring Opportunities
                </strong>
              </div>
            </div>

            <div className="pt-2 border-t border-border/40">
              <Button asChild className="w-full bg-emerald-500 text-emerald-950 hover:bg-emerald-400 font-semibold">
                <a href="#contact">Get In Touch <ArrowRight className="h-4 w-4 ml-1" /></a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Stack() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Languages", "Backend", "Frontend", "Databases", "Tools", "Engineering"];

  const filteredGroups = skillGroups.map((group) => {
    const isCategoryMatch = activeCategory === "All" || group.title.toLowerCase() === activeCategory.toLowerCase();
    if (!isCategoryMatch) return null;

    const filteredSkills = group.skills.filter(([name, desc]) =>
      name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      desc.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredSkills.length === 0) return null;
    return { ...group, skills: filteredSkills };
  }).filter(Boolean);

  return (
    <section id="stack" className="section-band section-muted scroll-mt-20">
      <div className="page-shell">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="02 / Toolkit"
            title="Technologies &amp; Architecture Stack"
            copy="A production-proven technology stack spanning data modeling, backend logic, and user interfaces."
          />

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Spring, Redis)..."
              className="w-full rounded-xl border border-border/80 bg-[#060911] pl-9 pr-4 py-2 text-xs font-mono text-foreground placeholder:text-muted-foreground/60 focus:border-emerald-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mt-8 flex flex-wrap gap-2 border-b border-border/60 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-lg px-4 py-1.5 font-mono text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-emerald-500 text-emerald-950 shadow-md shadow-emerald-500/20"
                  : "bg-card/40 text-muted-foreground hover:bg-card hover:text-foreground border border-border/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {filteredGroups.map((group, groupIndex) => (
            group && (
              <Reveal key={group.title} delay={groupIndex * 0.05} className="rounded-2xl border border-border/80 bg-[#0a0e1a] p-6 shadow-xl backdrop-blur-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-border/60 pb-3">
                    <h3 className="font-bold text-base text-foreground flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      {group.title}
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">0{groupIndex + 1}</span>
                  </div>

                  <div className="mt-4 grid gap-2.5">
                    {group.skills.map(([name, description]) => (
                      <div key={name} className="skill-item" tabIndex={0}>
                        <div>
                          <span>{name}</span>
                          <ArrowUpRight />
                        </div>
                        <p>{description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          ))}
        </div>
      </div>
    </section>
  );
}

export function CurrentlyBuilding() {
  const initiatives = [
    {
      title: "Distributed systems design",
      detail: "Refining resilient API patterns, message-driven workflows, and race-condition-safe booking logic for real-world products.",
    },
    {
      title: "Developer workflows",
      detail: "Improving observability, shipping pipelines, and modern frontend/backend integration patterns for faster product iteration.",
    },
    {
      title: "System reliability",
      detail: "Deepening concurrency controls, caching strategies, and robust relational schemas for high-trust production systems.",
    },
  ];

  return (
    <section id="building" className="section-band section-muted scroll-mt-20">
      <div className="page-shell">
        <SectionHeading
          eyebrow="03 / Currently Building"
          title="Shipping durable backend and product systems"
          copy="Focused on robust engineering patterns, reliable product flows, and systems that scale cleanly without sacrificing clarity."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {initiatives.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.07} className="currently-card">
              <div className="currently-card-index">0{index + 1}</div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const reduced = useReducedMotion();
  if (reduced) return <ProjectCardContent project={project} index={index} />;

  return (
    <motion.article
      initial={{ opacity: 1, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65 }}
    >
      <TiltCard maxTilt={5}>
        <ProjectCardContent project={project} index={index} />
      </TiltCard>
    </motion.article>
  );
}

function ProjectCardContent({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <article className="project-card">
      <div className="project-card-copy">
        <div className="flex items-center justify-between">
          <p className="project-index">0{index + 1} / {project.label}</p>
          <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-emerald-400 border border-emerald-500/20">
            {project.featured ? "Featured Project" : "Production System"}
          </span>
        </div>

        <h3 className="mt-2">{project.name}</h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{project.description}</p>

        {/* Tech Stack Chips */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span className="tech-tag" key={tech}>
              {tech}
            </span>
          ))}
        </div>

        {/* Feature List */}
        <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
          {project.features.slice(0, 6).map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-xs text-slate-300">
              <Check className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="bg-emerald-500 text-emerald-950 hover:bg-emerald-400 font-semibold shadow-md shadow-emerald-500/20">
            <Link to="/projects/$slug" params={{ slug: project.slug }}>
              View Case Study <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
          {project.github ? (
            <Button asChild variant="outline" className="border-border/80 bg-card/40 hover:bg-card">
              <a href={project.github} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4 mr-1.5" /> Repository
              </a>
            </Button>
          ) : null}
          {project.liveUrl ? (
            <Button asChild variant="outline" className="border-sky-400/30 bg-sky-400/5 text-sky-200 hover:bg-sky-400/10">
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                Live Demo <ExternalLink className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
          ) : null}
        </div>
      </div>

      <Link
        className="project-visual group"
        to="/projects/$slug"
        params={{ slug: project.slug }}
        aria-label={`View ${project.name} case study`}
      >
        <img
          src={project.image}
          alt={project.imageAlt}
          width={1600}
          height={1000}
          loading="lazy"
          className="transition-transform duration-700 group-hover:scale-105"
        />
        <div className="project-open">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </Link>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-band scroll-mt-20">
      <div className="page-shell">
        <SectionHeading
          eyebrow="03 / Projects"
          title="Featured Engineering Systems"
          copy="Production-style full-stack projects built around complex business logic, explicit relational models, and dependable distributed architectures."
        />
        <div className="mt-14 grid gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function GrandStayArchitecture() {
  return (
    <section id="architecture" className="section-band architecture-section scroll-mt-20">
      <div className="page-shell">
        <SectionHeading
          eyebrow="04 / System Design &amp; Concurrency"
          title="Engineered Beyond The Interface"
          copy="GrandStay treats hotel room booking as a high-concurrency distributed state problem, safeguarding scarce inventory from race conditions."
        />

        {/* Interactive Simulator */}
        <div className="mt-12">
          <SystemSimulator />
        </div>

        {/* Architectural Flow Diagram */}
        <Reveal className="mt-10 architecture-panel">
          <div>
            <p className="diagram-label">End-to-End Application Path</p>
            <ArchitectureFlow items={["Client Browser", "Next.js Edge", "Spring Boot API", "Prisma ORM", "PostgreSQL ACID DB"]} />
          </div>
          <div className="mt-10 border-t border-border/60 pt-10">
            <p className="diagram-label">Distributed Booking Lock Flow</p>
            <ArchitectureFlow items={["Checkout Click", "Redis Redlock (5s TTL)", "Inventory Check", "Temporary Room Hold", "ACID Commit"]} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ApiPlaygroundSection() {
  return (
    <section id="api-sandbox" className="section-band section-muted scroll-mt-20">
      <div className="page-shell">
        <SectionHeading
          eyebrow="05 / API Playground"
          title="Interactive REST API Explorer"
          copy="Test mock backend endpoints and inspect request structures, response schemas, and latency metrics."
        />
        <div className="mt-12">
          <ApiSandbox />
        </div>
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section id="experience" className="section-band scroll-mt-20">
      <div className="page-shell">
        <SectionHeading
          eyebrow="06 / Growth &amp; Path"
          title="My Engineering Progression"
          copy="A continuous evolution from core object-oriented programming to distributed, production-grade applications."
        />
        <div className="journey-line mt-14">
          {journey.map((item, index) => (
            <Reveal key={item} delay={index * 0.04} className="journey-item">
              <div className="flex items-center justify-between">
                <span>0{index + 1}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </div>
              <h3 className="mt-4">{item}</h3>
              {index < journey.length - 1 ? (
                <ArrowRight className="h-4 w-4 text-muted-foreground/60 hidden sm:block mt-auto" />
              ) : (
                <Check className="h-4 w-4 text-emerald-400 mt-auto" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GithubSection() {
  return (
    <section className="section-band section-muted">
      <div className="page-shell">
        <SectionHeading
          eyebrow="07 / Open Source"
          title="Building In Public"
          copy="Explore the codebase architecture, commit history, and schema models on GitHub."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal className="github-profile">
            <Github />
            <p className="mt-8 font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold">
              github.com / Bibek-Jha344
            </p>
            <h3 className="mt-2">Public Repositories</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Follow along with my backend service architectures, SQL relational designs, and full-stack implementations.
            </p>
            <Button asChild className="mt-8 bg-emerald-500 text-emerald-950 hover:bg-emerald-400 font-semibold shadow-lg shadow-emerald-500/20">
              <a href={siteConfig.github} target="_blank" rel="noreferrer">
                Open GitHub Profile <ArrowUpRight className="h-4 w-4 ml-1" />
              </a>
            </Button>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <Reveal key={project.slug} className="repo-card">
                <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Github className="h-3.5 w-3.5 text-emerald-400" /> Public Repo
                  </span>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    Active
                  </span>
                </div>
                <h3 className="mt-2">{project.name}</h3>
                <p className="line-clamp-2">{project.description}</p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span className="tech-tag text-[11px]" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="repo-link"
                  >
                    View repository <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <span className="repo-link text-muted-foreground/60">
                    Repository configured
                  </span>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ResumeCTA() {
  return (
    <section className="resume-band">
      <div className="page-shell">
        <Reveal>
          <p className="eyebrow">Ready for impactful engineering</p>
          <h2>Let's build scalable systems together.</h2>
          <p>
            I'm currently seeking Software Engineering roles where I can contribute to high-performance backend architectures, collaborate with great teams, and build reliable software.
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Button
              asChild
              size="lg"
              className="bg-emerald-500 text-emerald-950 hover:bg-emerald-400 font-semibold shadow-lg shadow-emerald-500/20"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border/80 bg-card/40 hover:bg-card"
            >
              <a href={siteConfig.github} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4 mr-2" /> GitHub Profile
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section-band scroll-mt-20">
      <div className="page-shell">
        <SectionHeading
          eyebrow="08 / Contact"
          title="Let's Connect"
          copy="Have an engineering opportunity, contract project, or technical question? I'd love to discuss."
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <Reveal className="grid content-start gap-4">
            <a className="contact-link" href={`mailto:${siteConfig.email}`}>
              <Mail />
              <div>
                <small>Email</small>
                <strong>{siteConfig.email}</strong>
              </div>
              <ArrowUpRight />
            </a>

            <a
              className="contact-link"
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github />
              <div>
                <small>GitHub</small>
                <strong>Bibek-Jha344</strong>
              </div>
              <ArrowUpRight />
            </a>

            <div className="contact-link">
              <MapPin />
              <div>
                <small>Location</small>
                <strong>India (Available Worldwide)</strong>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="brand-dot" />
            <p className="font-display text-xl font-bold text-foreground">
              {siteConfig.name}
            </p>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{siteConfig.role} • India</p>
        </div>
        <div className="text-sm text-muted-foreground sm:text-right">
          <div className="mb-2 flex gap-5 sm:justify-end">
            <a href="/#home" className="hover:text-emerald-400 transition-colors">Home</a>
            <a href="/#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href={siteConfig.github} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">GitHub</a>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-emerald-400 transition-colors">Email</a>
          </div>
          <p className="font-mono text-xs">
            © {new Date().getFullYear()} {siteConfig.name}. Engineered with React, Three.js &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}