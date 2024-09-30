import { scanPhone } from "@/lib/link-scanner-service";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const data = await request.json();
    const { phone } = data;
    const res = await scanPhone(phone);
    return NextResponse.json({ res });
}