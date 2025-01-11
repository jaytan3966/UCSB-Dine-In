import { createClient } from "@/utils/supabase/server";

interface Review {
  id: number;
  foodName: string;
  username: string;
  rating: number;
  description: string;
}

export default async function Reviews() {
  const supabase = await createClient();
  const { data: reviews } = await supabase.from("reviews").select();

  return (
    <ul>
      {reviews?.map((review) => (
        <Card
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
