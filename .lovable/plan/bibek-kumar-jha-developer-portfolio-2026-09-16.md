# Bibek Kumar Jha Developer Portfolio

## Goal
Build a production-quality, dark developer portfolio that immediately communicates serious software engineering capability while staying fully honest about experience, projects, and available links.

## Build approach
- Keep the project’s TanStack Start foundation, which provides the requested React, TypeScript, Tailwind, server rendering, routing, and SEO capabilities without replacing the supported framework.
- Establish a restrained near-black design system with off-white typography, a sophisticated cool-green accent, thin technical borders, subtle grid/noise texture, and editorial scale.
- Use reusable portfolio sections and centralized data/configuration for personal details, social links, resume path, skills, projects, and journey milestones.
- Add Motion for restrained reveals and interactions, plus a lightweight custom React Three Fiber hero scene loaded only in the browser with a static mobile/low-motion fallback.

## Pages and content
- Build the portfolio home page with sticky navigation and these anchored sections: Home, About, Stack, Projects, Experience, GitHub, Contact.
- Create dedicated project detail routes for GrandStay, WorkSphere, and DriveRent.
- Add the supplied home-page title, description, Open Graph/Twitter metadata, semantic headings, canonical URL, robots support, and route-specific metadata for each project.
- Keep LinkedIn and resume configurable and visibly unavailable until real values/files are supplied; never invent URLs, credentials, history, or metrics.

## Home page composition
- **Hero:** Bibek’s name, role, exact positioning statement, opportunity status, three requested actions, and an engineering architecture network scene.
- **About:** supplied biography plus a structured profile panel for India, role, and development focus.
- **Technology stack:** four category groups with keyboard-accessible technology descriptions on focus/hover.
- **Selected work:** three large editorial project features with generated product-interface artwork, real/configured repository links only, subtle tilt and motion, and links to full case studies.
- **GrandStay architecture:** animated request and system flows showing Next.js, server/API, Prisma, PostgreSQL, Redis locking, availability checks, holds, and confirmation.
- **Development journey:** honest learning timeline using only the supplied milestones.
- **Building in public:** profile link and selected repository cards using configured public repository data, without fabricated contribution counts.
- **Resume callout:** requested copy and actions, with a clear unavailable state until a PDF is added.
- **Contact:** email, GitHub, configurable LinkedIn, and a validated frontend-only form that opens a prepared email draft rather than pretending to send.
- **Footer:** minimal identity, contact links, and current year.

## Project detail experience
Each project route will include:
- Overview and honest project description
- Architecture visualization suited to the project
- Feature list and technology stack
- Challenges and learning notes written as project-focused engineering takeaways, without claims of production scale or employment
- GitHub action only when a verified/configured repository URL exists
- No live-demo action unless a real URL exists

## Interaction and accessibility
- Sticky desktop navigation, animated mobile menu, smooth section scrolling, visible active/focus states, and skip navigation.
- Reduced-motion support across page entrances, scroll reveals, project hover movement, architecture flow, and 3D.
- Desktop-only pointer enhancement that preserves the normal cursor; touch devices receive standard behavior.
- Keyboard-accessible menus, cards, dialogs/links, form fields, and technology disclosures.

## Assets and performance
- Generate three cohesive project preview images that resemble real software interfaces rather than stock photography.
- Lazy-load project images and the 3D scene; keep geometry, lights, and animation loops modest.
- Load a distinctive display/body font pairing efficiently from the document head.
- Avoid external API keys and unnecessary runtime requests; use static configuration for portfolio content.

## Technical structure
- `src/data/portfolio.ts` for identity, links, resume path, skills, projects, and journey data.
- Focused components for navigation, hero, 3D scene, each major section, architecture diagrams, project cards, contact form, cursor, and footer.
- Home content remains at `/`; project case studies use `/projects/$slug`.
- Extend existing design-system button variants and semantic Tailwind tokens instead of hardcoded component colors.

## Verification
- Verify `/` and all three project routes render correctly.
- Test navigation, mobile menu, section links, project links, email flow, GitHub links, disabled/configurable actions, and reduced-motion behavior.
- Check desktop plus 320px, 375px, 425px, 768px, 1024px, 1440px, and 1920px layouts through representative browser captures.
- Check for broken images, overflow, overlap, console errors, failed requests, keyboard traps, and inaccessible labels.
- Run the project’s production build, TypeScript checks, and lint command; fix resulting errors.

## Configuration handoff
Document the two intentional placeholders clearly:
- Replace the LinkedIn value in the centralized portfolio configuration.
- Add the real PDF at the configured public resume path and enable the resume actions.
