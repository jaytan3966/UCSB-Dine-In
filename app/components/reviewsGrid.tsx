import { Card } from "./reviewCard/reviewCard";

export interface ReviewProps {
  id: number;
  foodName: string;
  username: string;
  rating: number;
  description: string;
  diningcommon: string;
}

<<<<<<< HEAD
export default function Reviews({ reviews }: { reviews: ReviewProps[] }) {
  const handleReview = (review: ReviewProps) => {
    console.log(review);
  };

=======
export default function Reviews({reviews}: {reviews: ReviewProps[]}) {
  
>>>>>>> c1a3517ce2496cc3920e679e7681427db70be813
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
