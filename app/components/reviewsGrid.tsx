import { Card } from "./reviewCard/reviewCard";
import { useEffect, useState } from 'react';
import { createClient } from "@/utils/supabase/client";

export interface ReviewProps {
  id: number;
  foodName: string;
  username: string;
  rating: number;
  description: string;
  diningcommon: string;
  images: string;
  url: string;
}

const supabase = createClient();

export default function Reviews({reviews}: {reviews: ReviewProps[]}) {

  const [reviewsWithImageUrls, setReviewsWithImageUrls] = useState<ReviewProps[]>([]);

  useEffect(() => {
    const fetchImageUrls = async () => {
      const updatedReviews = await Promise.all(
        reviews.map(async (review) => {
          console.log("Processing review:", review);

          // Check if the review has an image
          if (!review.images) {
            console.log(`No image for review ID ${review.id}`);
            return { ...review, url: null };
          }

          // Fetch the public URL from Supabase
          const { data: imageData, error: imageError } = supabase
            .storage
            .from("images") // Replace with your bucket name
            .getPublicUrl(review.images);

          if (imageError) {
            console.error(`Error fetching image URL for ${review.images}:`, imageError);
            return { ...review, url: null };
          }

          console.log(`Fetched URL for ${review.images}:`, imageData?.publicUrl);

          return { ...review, url: imageData?.publicUrl || null };
        })
      );

      console.log("Updated reviews with image URLs:", updatedReviews);

      setReviewsWithImageUrls(updatedReviews);
    };

    fetchImageUrls();
  }, [reviews]);

  return (
    <div className="grid grid-cols-5">
      {reviewsWithImageUrls.map((review) => (
        <Card
          key={review.id}
          id={review.id}
          foodName={review.foodName}
          username={review.username}
          rating={review.rating}
          description={review.description}
          diningcommon={review.diningcommon}
          images={review.images}
          url={review.url}
        />
      ))}
    </div>
  );
}