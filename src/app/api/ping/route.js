import { NextResponse } from "next/server";
import { connectdb } from "@/utils/database";

export function GET(){
    connectdb()
    return NextResponse.json({
        message:'hello world'
    })
}