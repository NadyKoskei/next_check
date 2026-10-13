import Link from "next/link";
import styles from "./Navbar.module.css";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.brand}>
        Koskei Nady
      </Link>

      <nav className={styles.nav} aria-label="Main navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className={styles.link}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
