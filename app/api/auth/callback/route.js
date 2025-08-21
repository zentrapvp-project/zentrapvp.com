import { createClient } from "@/utils/supabase/server"
import { NextResponse } from "next/server"

export async function GET(req) {
    const {searchParams} = new URL(req.url)

    if (searchParams.get("code")) {

        const supabase = await createClient();

        const exchangeCode = await supabase.auth.exchangeCodeForSession()

        return NextResponse.json(exchangeCode)
        
    }
    
    return NextResponse.json("Called")

}