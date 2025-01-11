import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const supabase = await createClient();
  const { data: reviews } = await supabase.from("reviews").insert(body);

  return NextResponse.json(reviews);
}

export async function GET(req: NextRequest) {
  const supabase = await createClient();
  const { data: reviews } = await supabase.from("reviews").select();

  return NextResponse.json(reviews);
}
