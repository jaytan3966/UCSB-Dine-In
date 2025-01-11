import { Card } from "./reviewCard";

export interface ReviewProps {
  id: number;
  foodName: string;
  username: string;
  rating: number;
  description: string;
}

export default async function Reviews(reviews: ReviewProps[]) {

  return (
    <ul>
      {reviews?.map((review) => (
        <Card
          key={review.id}
          id={review.id}
          foodName={review.foodName}
          username={review.username}
          rating={review.rating}
          description={review.description}
        />
      ))}
    </ul>
  );
}
