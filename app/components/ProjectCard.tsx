import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  image: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  image,
}: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.body}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.techList}>
          {tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
