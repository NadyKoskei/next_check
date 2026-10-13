import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import styles from "./page.module.css";

const highlights = [
  { value: "7+", label: "Years building products" },
  { value: "18", label: "Launches and redesigns" },
  { value: "92%", label: "Client retention" },
];

const studios = [
  "Next.js",
  "TypeScript",
  "Node.js",
  "UI Systems",
  "Design QA",
  "Product Strategy",
];

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.hero}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>
            Creative developer / product designer
          </span>
          <h1>Designing digital products that feel effortless.</h1>
          <p>
            I build polished web experiences for brands, startups, and teams
            that want clarity, performance, and a memorable user journey.
          </p>

          <div className={styles.actions}>
            <Link href="/projects" className={styles.primaryButton}>
              View projects
            </Link>
            <Link href="/contact" className={styles.secondaryButton}>
              Let&apos;s talk
            </Link>
          </div>

          <div className={styles.metrics}>
            {highlights.map((item) => (
              <div key={item.label} className={styles.metricItem}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.profileCard}>
          <img src="/koskeinady.png" alt="Portrait of Koskei Nady" />
          <div className={styles.cardBadge}>
            Available for selected projects
          </div>
        </div>
      </main>

      <section className={styles.toolsSection}>
        <p>Focused on</p>
        <div className={styles.toolsList}>
          {studios.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
