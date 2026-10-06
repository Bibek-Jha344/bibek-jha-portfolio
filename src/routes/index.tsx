import { createFileRoute } from "@tanstack/react-router";
import { CustomCursor } from "@/components/portfolio/custom-cursor";
import { Navigation } from "@/components/portfolio/navigation";
import {
  About,
  ApiPlaygroundSection,
  Contact,
  CurrentlyBuilding,
  Footer,
  GithubSection,
  GrandStayArchitecture,
  Hero,
  Journey,
  Projects,
  ResumeCTA,
  Stack,
} from "@/components/portfolio/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BIBEK.DEV | Bibek Kumar Jha - Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Bibek Kumar Jha, a Java and full-stack developer building modern web applications with Java, Spring Boot, Next.js, PostgreSQL and Redis.",
      },
      { property: "og:title", content: "BIBEK.DEV | Bibek Kumar Jha - Software Engineer" },
      { property: "og:site_name", content: "BIBEK.DEV" },
      {
        property: "og:description",
        content:
          "Java and full-stack developer building high-concurrency systems, REST APIs, and modern web applications.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <Stack />
        <CurrentlyBuilding />
        <Projects />
        <GrandStayArchitecture />
        <ApiPlaygroundSection />
        <Journey />
        <GithubSection />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
      <CustomCursor />
    </>
  );
}
