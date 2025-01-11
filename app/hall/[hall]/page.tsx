"use client";

import MenuPage from "../../menu/page";

import { useParams } from "next/navigation";

interface Params {
  hall: string;
}

export default function Hall() {
  const params = useParams();

  const hall =
    typeof params.hall === "string"
      ? params.hall
      : Array.isArray(params.hall)
        ? params.hall[0]
        : undefined;

  console.log(hall?.toLowerCase());
  if (!hall) {
    return <div>Error: Invalid Hall</div>;
  }

  if (hall === "De%20La%20Guerra") {
    return <MenuPage diningCommonCode="de-la-guerra" />;
  }
  return <MenuPage diningCommonCode={hall.toLowerCase()} />;
}
