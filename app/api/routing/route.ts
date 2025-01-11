import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(req: NextRequest){
    const supabase = await createClient();
    const {data: picks} = await supabase.from("pickdisplay").select();

    return NextResponse.json(picks);
}