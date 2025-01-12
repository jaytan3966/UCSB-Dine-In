"use client";

import { useParams } from "next/navigation";
import ReviewCard from "@/app/components/Review/Review";
import { useStarsState } from "@/app/components/Review/Stars/useStarsState";
import { exportedHall } from "@/app/hall/[hall]/page";
import ReviewList from "@/app/components/reviewList/reviewList";

interface Params {
  specificFood: string;
}

export default function specificFood() {
  const { filledStars } = useStarsState();
  const params = useParams();

  const specificFood =
    typeof params.specificfood === "string"
      ? params.specificfood
      : Array.isArray(params.specificfood)
        ? params.specificfood[0]
        : undefined;

  return (
    <div>
      <ReviewCard
        food={specificFood}
        rating={filledStars}
        diningHall={exportedHall}
      />
      <ReviewList foodName={specificFood} />
    </div>
  );
}
