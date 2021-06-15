import Link from "next/link";
import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a> Yatch Rentals </a>
        </Link>
      </div>

      <div className={styles.header_links}>
        <nav>
          <ul>
            <li>
              <Link href="/boats">
                <a> Boats </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
