import Navbar from "@/app/components/Navbar";
import styles from "./page.module.css";

const skills = [
  "Product design",
  "UX strategy",
  "React",
  "Next.js",
  "Accessibility",
  "Brand systems",
  "Design systems",
  "Research synthesis",
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.content}>
        <div className={styles.imageBlock}>
          <img src="/koskeinady.png" alt="Koskei Nady portrait" />
        </div>

        <div className={styles.textBlock}>
          <span className={styles.eyebrow}>About</span>
          <h1>Thoughtful design meets practical execution.</h1>
          <p>
            I&apos;m a multidisciplinary designer and frontend developer with a
            focus on translating product ideas into experiences people trust and
            enjoy using. My work blends research, interaction design, and
            engineering to build clear, high-performing digital experiences.
          </p>
          <p>
            Over the years, I&apos;ve worked with founders, growing brands, and
            in-house product teams to shape websites, product flows, and design
            systems that make complex ideas easier to understand.
          </p>
        </div>
      </main>

      <section className={styles.skillsSection}>
        <h2>Core strengths</h2>
        <div className={styles.skillsList}>
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
