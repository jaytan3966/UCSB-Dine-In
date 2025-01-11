import Link from "next/link";
import styles from "./HallCard.module.css";
import Image from "next/image";

interface Hall {
  name: string;
  picture: string;
  text: string;
}

export default function HallCard({ name, picture, text }: Hall) {
  return (
    <Link href="/Hall">
      <div className={styles.card}>
      <img className={styles["card-image"]} src={picture} alt={name}>
      </img>
        <h2 className={styles["card-title"]}>{name}</h2>
        <p className={styles["card-text"]}>{text}</p>
      </div>
    </Link>
  );
}
