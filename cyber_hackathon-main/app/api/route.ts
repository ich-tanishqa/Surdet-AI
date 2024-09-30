import { createData } from "@/lib/data-creation-retrieval-service";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const data = await request.json();
    const { url, email, description } = data;
    await createData(url, email, description);
    return NextResponse.json({ message: "URL reported successfully!" });
}