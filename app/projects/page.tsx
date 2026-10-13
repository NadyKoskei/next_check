import Navbar from "@/app/components/Navbar";
import ProjectCard from "@/app/components/ProjectCard";
import styles from "./page.module.css";

const projects = [
  {
    title: "Northstar Studio",
    description:
      "A premium brand website and booking funnel for a boutique creative studio, designed to increase conversion and streamline client discovery.",
    tech: ["Next.js", "CMS", "UX", "SEO"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Pulse Metrics",
    description:
      "A reporting dashboard for a SaaS team that needed an easier way to interpret product performance and communicate results clearly.",
    tech: ["React", "Charts", "Design System"],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Harbor Goods",
    description:
      "A polished e-commerce concept with stronger storytelling, simplified navigation, and a smoother mobile purchasing flow.",
    tech: ["Shopify", "UX", "Marketing"],
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.content}>
        <div className={styles.headerRow}>
          <div>
            <span className={styles.eyebrow}>Projects</span>
            <h1>Selected work.</h1>
          </div>
          <p>
            A few examples of the product, brand, and digital experiences
            I&apos;ve helped shape from concept to launch.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </main>
    </div>
  );
}
