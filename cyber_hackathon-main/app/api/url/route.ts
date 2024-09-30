import { scanUrl } from "@/lib/link-scanner-service";
import { NextResponse } from "next/server";

export async function POST(request: Request) {

    const data = await request.json();
    const {url} = data;
    const res = await scanUrl(url); 
    return NextResponse.json({res});
}