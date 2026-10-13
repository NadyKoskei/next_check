import Navbar from "@/app/components/Navbar";
import styles from "./page.module.css";

const methods = [
  { label: "Email", value: "koskeinady@gmail.com" },
  { label: "Instagram", value: "@nady_ck" },
  { label: "Location", value: "Nairobi, Kenya" },
];

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.content}>
        <div className={styles.textBlock}>
          <span className={styles.eyebrow}>Contact</span>
          <h1>Let&apos;s build something clear and memorable.</h1>
          <p>
            Whether you need a polished launch site, product redesign, or a
            stronger brand presence, I&apos;d love to hear what you&apos;re
            planning.
          </p>

          <div className={styles.contactList}>
            {methods.map((method) => (
              <div key={method.label} className={styles.contactItem}>
                <span>{method.label}</span>
                <strong>{method.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <form className={styles.form}>
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea rows={5} placeholder="Tell me about your project" />
          </label>
          <button type="submit">Send message</button>
        </form>
      </main>
    </div>
  );
}
