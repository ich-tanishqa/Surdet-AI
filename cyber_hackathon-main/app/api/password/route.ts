import { scanPassword } from "@/lib/link-scanner-service";
import { NextResponse } from "next/server";

export async function POST(request: Request){
    const data = await request.json();
    const {password} = data;
    const res = await scanPassword(password);
    return NextResponse.json({res});
}