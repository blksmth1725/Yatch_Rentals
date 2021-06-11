import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/BoatItem.module.css";

export default function BoatItem({ boat }) {
  console.log(boat.image);
  return (
    <div className={styles.boat}>
      <div className={styles.img}>
        <Image src={boat.image} width={170} height={100} />
      </div>
    </div>
  );
}
