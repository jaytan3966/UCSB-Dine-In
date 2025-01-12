import { ListItem } from "../ListItem/listItem";
import { useState, useEffect } from "react";

interface ReviewListProps {
  foodName: string | undefined;
}

export default function ReviewList({ foodName }: ReviewListProps) {
  const [response, setResponse] = useState<any[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const res = await fetch(
        `/api/reviewing?foodName=${encodeURIComponent(foodName as string)}`,
        {
          method: "GET",
        }
      );

      if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`);
      }

      const data = await res.json();
      setResponse(data);
    };

    fetchReviews();
  }, [foodName]);

  if (response.length === 0) {
    return <p>No reviews yet for this item.</p>;
  }

  return (
    <div>
      {response.map((review, index) => (
        <ListItem
          key={index}
          username={review.username}
          rating={review.rating}
          description={review.description}
        />
      ))}
    </div>
  );
}
