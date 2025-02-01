"use client";

import MenuPage from "../../menu/page";
import Link from "next/link";
import { useParams } from "next/navigation";

interface Params {
  hall: string;
}

let exportedHall: string | undefined;

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
    exportedHall = "CLOSED";
    return (
      <div>
      <div className="bg-[#1d2f54] p-3 flex justify-between items-center max-w-screen">
          <Link href="/">
            <button className="font-bold text-3xl text-[#ffce34]">
              UCSB Dine-In
            </button>
          </Link>
          
        </div>
        <div className="text-center">
          <h1 className="text-9xl">CLOSED</h1>
        </div>
      </div>
    );
  }

  if (hall === "De%20La%20Guerra") {
    exportedHall = hall.toLowerCase();
    return <MenuPage diningCommonCode="de-la-guerra" />;
  }
  exportedHall = hall.toLowerCase();
  return <MenuPage diningCommonCode={hall.toLowerCase()} />;
}

export {exportedHall};