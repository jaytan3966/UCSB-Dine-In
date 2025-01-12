import { Card } from "./reviewCard/reviewCard";

export interface ReviewProps {
  id: number;
  foodName: string;
  username: string;
  rating: number;
  description: string;
  diningcommon: string;
}

export default function Reviews({reviews}: {reviews: ReviewProps[]}) {
  
  return (
    <div className="grid grid-cols-5">
      {reviews?.map((review) => (
        <Card
          key={review.id}
          id={review.id}
          foodName={review.foodName}
          username={review.username}
          rating={review.rating}
          description={review.description}
          diningcommon={review.diningcommon}
        />
      ))}
    </div>
  );
}
