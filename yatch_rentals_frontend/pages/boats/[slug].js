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
        <div className={styles.header}>
          <h1>{boat.name}</h1>
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
        </div>
        {boat.image && (
          <div className={styles.image}>
            <Image
              className={styles.image_jpeg}
              src={boat.image}
              width={960}
              height={600}
            />
          </div>
        )}

        <div className={styles.rate_container}>
          <h3>Rate:</h3>
          <div>
            <span>{boat.rate}++</span>
          </div>
        </div>

        <div className={styles.info_container_toplevel}>
          <div className={styles.info_packet_container}>
            <span>{boat.description}</span>
          </div>
          <div className={styles.info_packet_container}>
            <h3 className={styles.h3}>Sepcs</h3>
            <div className={styles.spec_info_container}>
              <div className={styles.span_container}>
                <h4>Make:</h4>
                <span className={styles.spec_info_container_span}>
                  {boat.make}
                </span>
              </div>
              <div className={styles.span_container}>
                <h4>Model:</h4>
                <span className={styles.spec_info_container_span}>
                  {boat.model}
                </span>
              </div>
              <div className={styles.span_container}>
                <h4>Length:</h4>
                <span className={styles.spec_info_container_span}>
                  {boat.length}
                </span>
              </div>
              <div className={styles.span_container}>
                <h4>Capacity:</h4>
                <span className={styles.spec_info_container_span}>
                  {boat.capacity}
                </span>
              </div>
            </div>
          </div>
        </div>
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
