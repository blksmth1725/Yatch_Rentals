import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import styles from "@/styles/Layout.module.css";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />
      {router.pathname === "/" && <Banner />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Miami Yatch Rentals | SF's best boat rental service",
  description: "Yatch Rentals",
  keywords: "boats, rentals, yatchs, miami, south florida, jetskis",
};
