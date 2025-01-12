import Link from "next/link";
import styles from "./Review.module.css";
import Stars from "./Stars/Stars";
import { useState } from "react";
import { POST } from "../../api/routing/route";
import "bootstrap/dist/css/bootstrap.min.css";

interface ReviewCardProps {
  food: string | undefined;
  diningHall: string | undefined;
  rating: number;
}
export default function ReviewCard({
  food,
  diningHall,
  rating,
}: ReviewCardProps) {
  const [descriptionSubmitted, setDescription] = useState("");

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async () => {
    const response = await fetch("/api/routing", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: descriptionSubmitted,
        foodName: food,
        diningcommon: diningHall,
        rating: rating,
      }),
    });
  };

  return (
    <div className={styles.card}>
      <div className="flex space-x-2">
        <h2 className={styles["card-title"]}>test</h2>
        <Stars />
      </div>
      <div className="mb-3">
        <label htmlFor="formFileSm" className="form-label">
          Submit picture file
        </label>
        <input
          className="form-control form-control-sm"
          id="formFileSm"
          type="file"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Comments</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={10}
          value={descriptionSubmitted}
          onChange={handleDescriptionChange}
        ></textarea>
      </div>
      <button type="button" className="btn btn-dark" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
