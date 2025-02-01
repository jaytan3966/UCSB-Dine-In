"use client";

import { useParams } from "next/navigation";
import ReviewCard from "@/app/components/Review/Review";
import { useStarsState } from "@/app/components/Review/Stars/useStarsState";
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
    <div
      className="flex-container"
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh", // Full viewport height
        overflow: "hidden", // Prevent overall scrolling
        backgroundColor: "#1d2f54",
      }}
    >
      {/* Left Side - Fixed */}
      <div
        className="flex-item"
        style={{
          width: "40%",
          boxSizing: "border-box",
          overflow: "hidden", // Prevent scrolling
        }}
      >
        <ReviewCard
          food={specificFood}
          rating={filledStars}
          diningHall="Carrillo"
        />
      </div>

      {/* Right Side - Scrollable */}
      <div
        className="flex-item"
        style={{
          width: "60%",
          overflowY: "scroll", // Enable vertical scrolling
          boxSizing: "border-box",
        }}
      >
        <div
          data-bs-spy="scroll"
          data-bs-target="#navbar-example2"
          data-bs-offset="0"
          className="scrollspy-example"
          tabIndex="0"
        >
          <div className="bg-[#1d2f54] p-2 text-center h-[100vh]">
            <h1 className="text-5xl font-semibold text-[#ffce34]">Reviews</h1>
            <ReviewList foodName={specificFood} />
          </div>
        </div>
      </div>
    </div>
  );
}
