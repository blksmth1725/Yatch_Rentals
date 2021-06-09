import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

export default function BoatsPage({ boats }) {
  console.log(boats);

  return (
    <Layout>
      <h1>
        Here we will display all the boats to both Public and Private Users
      </h1>
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
