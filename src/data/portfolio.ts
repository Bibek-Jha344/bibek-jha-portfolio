import grandStayImage from "@/assets/grandstay-showcase.jpg";
import workSphereImage from "@/assets/worksphere-showcase.jpg";
import driveRentImage from "@/assets/driverent-showcase.jpg";

export const siteConfig = {
  name: "Bibek Kumar Jha",
  shortName: "BJ.",
  role: "Software Engineer | Java & Full-Stack Developer",
  location: "Bengaluru, India",
  phone: "+91-8088872993",
  email: "bibekk76@gmail.com",
  github: "https://github.com/Bibek-Jha344",
  linkedin: "",
  portfolioUrl: "https://bibek-builds-software.lovable.app", // Or custom domain
  resumeUrl: "",
} as const;

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Architecture", href: "#architecture" },
  { label: "API Sandbox", href: "#api-sandbox" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const skillGroups = [
  {
    title: "Backend & Java",
    skills: [
      ["Java", "Core OOP, Collections, Multithreading, Enterprise application logic."],
      ["Spring Boot", "Microservices, Dependency Injection, production REST APIs."],
      ["Spring Security & JWT", "Stateless token-based authentication and RBAC authorization."],
      ["REST APIs", "Clean HTTP contracts, global exception handling, DTO mapping."],
      ["JPA / Hibernate", "Entity relationships, caching, and ORM persistence."],
    ],
  },
  {
    title: "Frontend & UI",
    skills: [
      ["Next.js", "Server-side rendering, App router, and full-stack React."],
      ["React.js", "Component lifecycles, custom hooks, and modern UI architecture."],
      ["TypeScript", "Static type-safety, interface modeling, and safer refactoring."],
      ["JavaScript (ES6+)", "Asynchronous programming, DOM manipulation, modern runtime."],
      ["Tailwind CSS", "Utility-first design system and responsive dark-mode layouts."],
      ["HTML5 / CSS3", "Semantic structure, flexbox/grid, and accessible UI."],
    ],
  },
  {
    title: "Databases & Caching",
    skills: [
      ["PostgreSQL", "Relational schema design, indexes, and ACID transactions."],
      ["MySQL", "Relational storage, joins, and database optimization."],
      ["Redis", "In-memory caching, distributed locks, and TTL-based holds."],
      ["Prisma ORM", "Type-safe migrations, queries, and relational mapping."],
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      ["Docker & Kubernetes", "Containerization and local microservices orchestration."],
      ["Git & GitHub", "Branching workflows, version control, and public repo collaboration."],
      ["Maven", "Java dependency management, lifecycle builds, and plugins."],
      ["Postman", "API testing, collections, environment variables, mock servers."],
      ["IntelliJ IDEA & VS Code", "Advanced Java debugging and modern full-stack IDEs."],
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