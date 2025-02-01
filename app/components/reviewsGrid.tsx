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
        reviews.map((review) => {
          console.log("Processing review:", review);
    
          // Check if the review has an image
          if (!review.images) {
            console.log(`No image for review ID ${review.id}`);
            return { ...review, url: "https://scontent.xx.fbcdn.net/v/t1.15752-9/474980036_1053669236775709_3129767184793628472_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=zBL6TQO3kJQQ7kNvgENZqLs&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gER1n3o25pELGkUdF-p5m67vBrYG6V48m4P1Ds-AdcZuA&oe=67C511D6" };
          }
    
          // Fetch the public URL from Supabase (no need to await here)
          const { data: imageData } = supabase
            .storage
            .from("images") // Replace with your bucket name
            .getPublicUrl(review.images);
    
          if (!imageData) {
            console.error(`Error fetching image URL for ${review.images}:`);
            return { ...review, url: "https://scontent.xx.fbcdn.net/v/t1.15752-9/474980036_1053669236775709_3129767184793628472_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=zBL6TQO3kJQQ7kNvgENZqLs&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gER1n3o25pELGkUdF-p5m67vBrYG6V48m4P1Ds-AdcZuA&oe=67C511D6" };
          }
    
          console.log(`Fetched URL for ${review.images}:`, imageData?.publicUrl);
    
          return { ...review, url: imageData?.publicUrl || "https://scontent.xx.fbcdn.net/v/t1.15752-9/474980036_1053669236775709_3129767184793628472_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=zBL6TQO3kJQQ7kNvgENZqLs&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gER1n3o25pELGkUdF-p5m67vBrYG6V48m4P1Ds-AdcZuA&oe=67C511D6" };
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