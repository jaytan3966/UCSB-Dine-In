import Image from "next/image";
import { ReviewProps } from "../reviewsGrid";
import styles from "./reviewCard.module.css";

// src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"
export const Card = (review: ReviewProps) => {
  console.log("Image URL in Card:", review.url);

  return (
    <div className="mx-2">
      <div className={styles.card}>
        <Image
          className={styles["card-image"]}
          src={review.url}
          alt="food"
          width={100}
          height={100}
        />
        <h1 className={styles["card-title"]}>{review.foodName}</h1>
        <div className={styles["card-text"]}>
          <p>{review.rating} Stars</p>
        </div>
      </div>
    </div>
  );
};
