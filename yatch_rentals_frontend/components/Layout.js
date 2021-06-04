import Head from "next/head";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      {children}
    </div>
  );
}

Layout.defaultProps = {
  title: "Miami Yatch Rentals | SF's best boat rental service",
  description: "Yatch Rentals",
  keywords: "boats, rentals, yatchs, miami, south florida, jetskis",
};
