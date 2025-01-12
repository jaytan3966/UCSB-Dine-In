import Image from "next/image";
import { ReviewProps } from "../reviewsGrid";
import styles from "./reviewCard.module.css";

export const Card = (review: ReviewProps) => {
  return (
    <div className="m-5">
      <div className={styles.card}>
        <Image
          className={styles["card-image"]}
          src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"
          alt="food"
          width={100}
          height={100}
        />
        <h1 className={styles["card-title"]}>{review.foodName}</h1>
        <div className={styles["card-text"]}>
          <p>by {review.username}</p>
          <p>{review.rating} Stars</p>
        </div>
      </div>
    </div>
  );
};
