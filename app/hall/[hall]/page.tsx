"use client";

import { useParams } from "next/navigation";

export default function Hall() {
  const params = useParams();

  return <p>{params.hall}</p>;
}
