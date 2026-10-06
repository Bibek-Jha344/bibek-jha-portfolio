import grandStayImage from "@/assets/grandstay-showcase.jpg";
import workSphereImage from "@/assets/worksphere-showcase.jpg";
import driveRentImage from "@/assets/driverent-showcase.jpg";
import mediSafeImage from "@/assets/medisafe-showcase.jpg";

export const siteConfig = {
  name: "Bibek Kumar Jha",
  shortName: "BJ.",
  role: "Software Engineer | Java & Full-Stack Developer",
  location: "Bengaluru, India",
  phone: "+91-8088872993",
  email: "bibekk76@gmail.com",
  github: "https://github.com/Bibek-Jha344",
  linkedin: "",
  resumeUrl: "",
} as const;

export const navigation = [
  { label: "Work", href: "#projects" },
  { label: "Systems", href: "#architecture" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const skillGroups = [
  {
    title: "Languages",
    skills: [
      ["Java", "Core OOP, collections, multithreading, and enterprise application logic."],
      ["TypeScript", "Static type-safety, interface modeling, and safer refactoring."],
      ["JavaScript (ES6+)", "Asynchronous programming, event-driven flows, and modern runtime patterns."],
      ["SQL", "Relational modeling, joins, queries, and transactional data access."],
      ["HTML5 / CSS3", "Semantic structure, flexbox/grid, and accessible UI design."],
    ],
  },
  {
    title: "Backend",
    skills: [
      ["Spring Boot", "Production-ready service architecture and dependency injection patterns."],
      ["Spring Security & JWT", "Authentication, authorization, and stateless security workflows."],
      ["REST APIs", "Clean HTTP contracts, DTO mapping, validation, and error handling."],
      ["JPA / Hibernate", "Entity relationships, persistence layering, and ORM design."],
      ["System Design", "Service boundaries, scaling strategy, and reliable integration patterns."],
    ],
  },
  {
    title: "Frontend",
    skills: [
      ["Next.js", "Server-rendered product surfaces and modern full-stack React workflows."],
      ["React.js", "Component architecture, hooks, state orchestration, and UI composition."],
      ["Tailwind CSS", "Utility-first system design, responsive interfaces, and dark-mode polish."],
      ["Accessibility", "Readable contrast, semantic structure, and inclusive interaction design."],
      ["UI Engineering", "High-quality interaction design and product-focused interface detailing."],
    ],
  },
  {
    title: "Databases",
    skills: [
      ["PostgreSQL", "Relational schema design, indexes, and ACID transactions."],
      ["MySQL", "Relational storage, joins, and database optimization."],
      ["Redis", "In-memory caching, distributed locks, and TTL-based coordination."],
      ["Prisma ORM", "Type-safe migrations, queries, and relational mapping."],
      ["Caching", "Performance tuning, hot-path reduction, and data consistency trade-offs."],
    ],
  },
  {
    title: "Tools",
    skills: [
      ["Docker & Kubernetes", "Containerization and service orchestration for delivery workflows."],
      ["Git & GitHub", "Branching discipline, version control, and public repository collaboration."],
      ["Maven", "Java dependency management, lifecycle builds, and plugin setup."],
      ["Postman", "API testing, collections, and contract validation."],
      ["VS Code & IntelliJ", "Modern IDE workflows for Java and full-stack development."],
    ],
  },
  {
    title: "Engineering",
    skills: [
      ["Concurrency", "Distributed locking, synchronization, and race-condition awareness."],
      ["Reliability", "Fault tolerance, validation, and production-grade system hardening."],
      ["Product Architecture", "Translating business needs into maintainable engineering decisions."],
      ["Debugging", "Root-cause analysis, observability, and production issue diagnosis."],
      ["Delivery", "Shipping iterative product work with clear architectural intent."],
    ],
  },
] as const;

export type Project = {
  slug: string;
  name: string;
  label: string;
  description: string;
  technologies: readonly string[];
  features: readonly string[];
  image: string;
  imageAlt: string;
  github: string;
  liveUrl: string;
  architecture: readonly string[];
  challenges: string;
  learned: string;
  problem?: string;
  technicalImplementation?: string;
  featured?: boolean;
};

export const projects: readonly Project[] = [
  {
    slug: "staylux",
    name: "StayLux",
    label: "Full-Stack Hotel Booking & Management System",
    description:
      "A complete enterprise hotel reservation and room management platform built with Java, Spring Boot, MySQL, and Spring Security with role-based access for Users and Admins.",
    technologies: ["Java", "Spring Boot", "MySQL", "Spring Security", "JWT", "JPA / Hibernate", "JavaScript"],
    features: [
      "User & Admin role-based access",
      "JWT stateless authentication",
      "Comprehensive room & hotel CRUD",
      "Booking & cancellation pipeline",
      "Global exception handling & validation",
      "Tested API workflows via Postman",
    ],
    image: grandStayImage,
    imageAlt: "StayLux hotel management dashboard and reservation system",
    github: "https://github.com/Bibek-Jha344",
    liveUrl: "",
    architecture: ["Client (Web)", "Spring Security / JWT Filter", "Spring Boot REST Controller", "JPA / Hibernate", "MySQL Database"],
    challenges:
      "Securing administrative operations while maintaining fast room search required granular role filters and transactional rollback on booking failures.",
    learned:
      "Mastered Spring Security filter chains, JWT signing/verification, JPA bidirectional mappings, and standardized REST error responses.",
  },
  {
    slug: "worksphere",
    name: "WorkSphere",
    label: "Employee Management & Payroll System",
    description:
      "A full-stack enterprise employee management platform for managing employees, attendance tracking, leave requests, payroll processing, and department performance.",
    technologies: ["Next.js", "TypeScript", "Prisma ORM", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Role-based access control (RBAC)",
      "Daily attendance tracking",
      "Multi-tier leave approval workflow",
      "Automated payroll calculation",
      "Department performance metrics",
      "Responsive analytics dashboard",
    ],
    image: workSphereImage,
    imageAlt: "WorkSphere employee management dashboard",
    github: "https://github.com/Bibek-Jha344/worksphere-employee-management-system",
    liveUrl: "",
    architecture: ["Team Member", "Next.js Dashboard", "Prisma Client", "PostgreSQL ACID DB"],
    challenges:
      "Managing interdependent attendance, leave, and payroll calculations required strict relational foreign keys and role permissions.",
    learned:
      "Strengthened relational database modeling with PostgreSQL and built scalable dashboard information architecture with Next.js.",
  },
  {
    slug: "grandstay-nepal",
    name: "GrandStay Nepal",
    label: "High-Concurrency Hotel Booking Platform",
    description:
      "A modern hotel reservation platform designed with temporary room holds, Redis distributed locking, and multi-tier roles (Customer, Hotel Manager, Admin).",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Prisma ORM"],
    features: [
      "Customer & Manager & Admin portals",
      "10-minute TTL temporary room hold",
      "Redis distributed locking (Redlock)",
      "Race condition & double-booking prevention",
      "Real-time room availability matrix",
      "Modern responsive UI",
    ],
    image: driveRentImage,
    imageAlt: "GrandStay Nepal hotel discovery and reservation system",
    github: "https://github.com/Bibek-Jha344",
    liveUrl: "",
    architecture: ["Customer Browser", "Next.js Edge API", "Redis Distributed Lock", "PostgreSQL"],
    challenges:
      "High-traffic flash sales cause overlapping room booking requests. Engineered a Redis-based distributed lock to guarantee that only one booking transaction holds a room at any given millisecond.",
    learned:
      "Gained deep expertise in distributed concurrency, in-memory caching strategies, and designing transactional boundaries around scarce inventory.",
  },
  {
    slug: "medisafe",
    name: "MediSafe",
    label: "Healthcare / Full-Stack Application",
    description:
      "A healthcare and physiotherapy support platform that guides patients from symptom assessment to specialist discovery, appointment management, and recovery tracking.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "JWT", "bcryptjs"],
    features: [
      "Role-aware patient, doctor, physiotherapist, and admin workflows",
      "Structured symptom assessment with explainable recommendations",
      "Doctor directory with appointment booking and cancellation",
      "Prescription viewing and upload support",
      "Physiotherapy exercise library and guidance",
      "Recovery progress charts and exercise tracking",
    ],
    image: mediSafeImage,
    imageAlt: "Screenshot of the live MediSafe healthcare platform homepage and recovery dashboard preview",
    github: "https://github.com/Bibek-Jha344/Medisafe",
    liveUrl: "https://medisafe-beryl.vercel.app/",
    architecture: ["Responsive HTML / CSS / JavaScript", "Express REST API", "JWT Role-Aware Routes", "Explainable Rule Engine", "MongoDB Models / Demo Data"],
    challenges:
      "Patients need a clear path from describing symptoms to finding an appropriate specialist and managing follow-up care, without presenting automated guidance as a medical diagnosis.",
    learned:
      "Built transparent, rule-driven healthcare support flows and learned to keep demo data usable when a MongoDB connection is unavailable.",
    problem:
      "People can struggle to decide which specialist to consult and how to organize appointments and recovery guidance. MediSafe brings symptom assessment, specialist discovery, appointments, prescriptions, exercises, and progress tracking into one support workflow.",
    technicalImplementation:
      "A vanilla HTML, CSS, and JavaScript frontend is served by an Express backend. JWT-protected, role-aware routes connect to MongoDB-compatible models, with seeded demo data as a fallback. A deterministic recommendation service maps body area, symptom severity, duration, and mobility difficulty to specialist and exercise guidance; it is explicitly support-only, not a diagnosis.",
    featured: true,
  },
] as const;

export const journey = [
  "Java & Object-Oriented Fundamentals",
  "Backend Development & REST APIs",
  "Spring Boot, Spring Security & JWT",
  "Relational Databases (MySQL & PostgreSQL)",
  "Full-Stack Applications (Next.js & React)",
  "Distributed Systems & Redis Concurrency",
  "Continuous Engineering & Production Deployment",
] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}