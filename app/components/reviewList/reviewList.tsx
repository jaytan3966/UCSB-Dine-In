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
    return <p className="text-white">No reviews yet for this item.</p>;
  }

  // return (
  //   <div>
  //     {response.map((review, index) => (
  //       <ListItem
  //         key={index}
  //         username={review.username}
  //         rating={review.rating}
  //         description={review.description}
  //         url={review.images}
  //       />
  //     ))}
  //   </div>
  // );
  return (
    <div className="flex flex-col items-center justify-center">
      {response.map((review, index) => {
        const imageUrl = review.images
          ? `https://ggntzuglwinvqliprmts.supabase.co/storage/v1/object/public/images/${review.images}`
          : null;

        return (
          <ListItem
            key={index}
            username={review.username}
            rating={review.rating}
            description={review.description}
            url={imageUrl}
          />
        );
      })}
    </div>
  );
}
