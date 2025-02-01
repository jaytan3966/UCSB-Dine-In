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

  return (
    <div className="flex flex-col items-center justify-center">
      {response.map((review, index) => {
        const imageUrl = review.images
          ? `https://ggntzuglwinvqliprmts.supabase.co/storage/v1/object/public/images/${review.images}`
          : "https://scontent.xx.fbcdn.net/v/t1.15752-9/474980036_1053669236775709_3129767184793628472_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=zBL6TQO3kJQQ7kNvgENZqLs&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gER1n3o25pELGkUdF-p5m67vBrYG6V48m4P1Ds-AdcZuA&oe=67C511D6";

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
