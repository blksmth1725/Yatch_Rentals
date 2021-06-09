import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

export default function HomePage({ boats }) {
  console.log(boats);
  return (
    <Layout>
      <h1>Home Page</h1>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/boats`);
  const boats = await res.json();

  return {
    props: { boats },
    revalidate: 1,
  };
}
