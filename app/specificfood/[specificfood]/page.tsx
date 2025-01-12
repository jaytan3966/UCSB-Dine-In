"use client";

import { useParams } from "next/navigation";
import ReviewCard from "@/app/components/Review/Review";

interface Params {
  specificFood: string;
}
export default function specificFood() {
  const params = useParams();

  const specificFood =
    typeof params.specificfood === "string"
      ? params.specificfood
      : Array.isArray(params.specificfood)
        ? params.specificfood[0]
        : undefined;

  console.log(specificFood);

  return <ReviewCard food={specificFood} diningHall="test" />;
}
