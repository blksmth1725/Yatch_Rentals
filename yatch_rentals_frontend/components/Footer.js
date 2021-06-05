import Link from "next/link";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; Yatch Rentals</p>
      <p>
        <Link href="/about">What we are about</Link>
      </p>
    </footer>
  );
}
