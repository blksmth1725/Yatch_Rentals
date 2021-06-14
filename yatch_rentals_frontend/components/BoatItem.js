import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/BoatItem.module.css";

export default function BoatItem({ boat }) {
  console.log(boat.slug);
  return (
    <div className={styles.boat}>
      <div className={styles.img}>
        <Image src={boat.image} width={170} height={120} />
      </div>

      <div className={styles.info}>
        <h3 className={styles.boat_name}>{boat.name}</h3>
        <div className={styles.span}>
          <span>Make: {boat.make}</span>
          <span>Model: {boat.model}</span>
          <span>Length: {boat.length}</span>
        </div>
      </div>

      <div className={styles.details_btn}>
        <div className={styles.link}>
          <Link href={`/boats/${boat.slug}`}>
            <a className="btn">Details</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
