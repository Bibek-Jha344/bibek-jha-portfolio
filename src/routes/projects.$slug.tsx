import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Github, Layers, ShieldCheck, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArchitectureFlow } from "@/components/portfolio/architecture-flow";
import { Footer } from "@/components/portfolio/sections";
import { Navigation } from "@/components/portfolio/navigation";
import { TiltCard } from "@/components/portfolio/tilt-card";
import { getProject, projects } from "@/data/portfolio";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData, params }) => {
    const title = loaderData ? `${loaderData.name} Case Study | BIBEK.DEV` : "Project Not Found | BIBEK.DEV";
    const description = loaderData?.description ?? "The requested portfolio project could not be found.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:site_name", content: "BIBEK.DEV" },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
      ],
      links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
    };
  },
  component: ProjectPage,
  notFoundComponent: ProjectNotFound,
});

function ProjectPage() {
  const project = Route.useLoaderData();
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <Navigation />
      <main id="main-content" className="project-page">
        {/* Project Hero Header */}
        <section className="project-hero">
          <div className="page-shell">
            <Link to="/" hash="projects" className="back-link">
              <ArrowLeft className="h-4 w-4" /> Back to Selected Work
            </Link>
            <div className="mt-8 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <p className="eyebrow">Case Study / {project.label}</p>
            </div>
            <h1 className="mt-2 text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground">
              {project.name}
            </h1>
            <p className="project-lead">{project.description}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {project.github ? (
                <Button
                  asChild
                  size="lg"
                  className="bg-emerald-500 text-emerald-950 hover:bg-emerald-400 font-semibold gap-2 shadow-lg shadow-emerald-500/20"
                >
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4" /> View Source Code
                  </a>
                </Button>
              ) : (
                <span className="rounded-lg border border-border/60 bg-card/40 px-3 py-2 text-xs font-mono text-muted-foreground">
                  Repository link configured
                </span>
              )}

              {project.liveUrl ? (
                <Button asChild variant="outline" size="lg" className="border-border/80 bg-card/40 hover:bg-card">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Live Demo <ArrowUpRight className="h-4 w-4 ml-1" />
                  </a>
                </Button>
              ) : null}
            </div>

            {/* Showcase Image with 3D Tilt */}
            <div className="mt-12">
              <TiltCard maxTilt={4}>
                <div className="project-hero-image">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    width={1600}
                    height={1000}
                    className="w-full object-cover"
                  />
                </div>
              </TiltCard>
            </div>
          </div>
        </section>

        {/* Overview & Tech Stack */}
        <section className="section-band">
          <div className="page-shell case-grid">
            <div>
              <p className="eyebrow">Overview</p>
              <h2 className="case-heading">Engineered for real-world workflows</h2>
              <p className="case-copy">{project.description}</p>
            </div>
            <div>
              <p className="eyebrow">Technology Stack</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span className="tech-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {project.problem || project.technicalImplementation ? (
          <section className="section-band section-muted">
            <div className="page-shell grid gap-12 lg:grid-cols-2">
              {project.problem ? (
                <div>
                  <p className="eyebrow">Problem Solved</p>
                  <p className="case-copy mt-4">{project.problem}</p>
                </div>
              ) : null}
              {project.technicalImplementation ? (
                <div>
                  <p className="eyebrow">Technical Implementation</p>
                  <p className="case-copy mt-4">{project.technicalImplementation}</p>
                </div>
              ) : null}
            </div>
          </section>
        ) : null}

        {/* System Architecture */}
        <section className="section-band section-muted">
          <div className="page-shell">
            <p className="eyebrow">Architecture Flow</p>
            <h2 className="case-heading">How the components connect</h2>
            <div className="architecture-panel mt-8">
              <ArchitectureFlow items={project.architecture} />
            </div>
          </div>
        </section>

        {/* Features & Challenges */}
        <section className="section-band">
          <div className="page-shell grid gap-14 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Core Features</p>
              <h2 className="case-heading">System Capabilities</h2>
              <ul className="feature-list">
                {project.features.map((feature) => (
                  <li key={feature}>
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-8">
              <div className="rounded-xl border border-border/80 bg-card/40 p-6 backdrop-blur-sm">
                <p className="eyebrow text-amber-400">Engineering Challenge</p>
                <p className="case-copy mt-3 text-slate-300">{project.challenges}</p>
              </div>

              <div className="rounded-xl border border-border/80 bg-card/40 p-6 backdrop-blur-sm">
                <p className="eyebrow text-sky-400">Key Learnings</p>
                <p className="case-copy mt-3 text-slate-300">{project.learned}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Next Project Footer */}
        {nextProject ? (
          <section className="next-project">
            <div className="page-shell">
              <p className="eyebrow">Next Project</p>
              <Link to="/projects/$slug" params={{ slug: nextProject.slug }}>
                <span>{nextProject.name}</span>
                <ArrowRight className="h-6 w-6" />
              </Link>
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </>
  );
}

function ProjectNotFound() {
  return (
    <>
      <Navigation />
      <main className="grid min-h-[75vh] place-items-center px-6 text-center">
        <div>
          <p className="eyebrow">404 / Project</p>
          <h1 className="mt-5 font-display text-5xl font-semibold text-foreground">
            Project not found.
          </h1>
          <Button asChild className="mt-8 bg-emerald-500 text-emerald-950 hover:bg-emerald-400">
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </main>
    </>
  );
}