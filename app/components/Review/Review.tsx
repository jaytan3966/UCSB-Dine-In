import Link from "next/link";
import styles from "./Review.module.css";
import Stars from "./Stars/Stars";
import "bootstrap/dist/css/bootstrap.min.css";

interface Review {
  name: string;
}

export default function ReviewCard({ name }: Review) {
  return (
    <div className={styles.card}>
      <div className="flex space-x-2">
        <h2 className={styles["card-title"]}>{name}</h2>
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
        ></textarea>
      </div>
      <button type="button" className="btn btn-dark">
        Submit
      </button>
    </div>
  );
}
