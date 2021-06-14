import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import { API_URL } from "@/config/index";
import styles from "@/styles/Boat.module.css";

export default function Boat({ boat }) {
  const deleteBoat = console.log("DELETED");

  return (
    <Layout>
      <div className={styles.boat}>
        <div className={styles.controls}>
          <Link href={`/boats/edit/${boat.id}`}>
            <a>
              <FaPencilAlt /> Edit Boat
            </a>
          </Link>
          <a href="#" className={styles.delete} onClick={deleteBoat}>
            <FaTimes className={styles.times_icon} /> Delete Boat
          </a>
        </div>
        <h1>{boat.name}</h1>
        {boat.image && (
          <div className={styles.image}>
            <Image
              className={styles.image}
              src={boat.image}
              width={960}
              height={600}
            />
          </div>
        )}
      </div>
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
