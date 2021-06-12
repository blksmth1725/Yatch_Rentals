import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

export default function Boat({ boat }) {
  return (
    <Layout>
      <h1>This is supposed to be a single boat</h1>
      <h1>{boat.name}</h1>
    </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/boats/${slug}`);

  const boats = await res.json();
  return {
    props: {
      boat: boats[0],
    },
  };
}
