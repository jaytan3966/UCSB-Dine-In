import { createClient } from "@/utils/supabase/server";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const foodName = decodeURIComponent(searchParams.get("foodName") || "");

  console.log("foodname received: ", foodName);

  const supabase = await createClient();
  const { data: reviews } = await supabase
    .from("reviews")
    .select("*")
    .eq("foodName", foodName);

  console.log("Supabase query foodName: ", foodName);
  console.log("Supabase query result: ", reviews);

  return new Response(JSON.stringify(reviews), { status: 200 });
}
