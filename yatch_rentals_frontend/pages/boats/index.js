import Layout from "@/components/Layout";
import BoatItem from "@/components/BoatItem";
import { API_URL } from "@/config/index";

export default function BoatsPage({ boats }) {
  console.log(boats);

  return (
    <Layout>
      <h1>Check out our Fleet!</h1>
      {boats.length === 0 && <h3>No boats to rent</h3>}
      {boats.map((boat) => (
        <BoatItem key={boat.id} boat={boat} />
      ))}
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
