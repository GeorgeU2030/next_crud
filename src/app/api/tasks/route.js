import { NextResponse } from "next/server";
import { connectdb } from "@/utils/database";
import Task from "@/models/Task";

export async function GET(){
    connectdb()
    const tasks = await Task.find()
    return NextResponse.json(tasks)
}

export async function POST(request){

    try{
    const data = await request.json()

    const newtask = new Task (data)
    const savedtask = await newtask.save()
    console.log(savedtask)

    return NextResponse.json(savedtask)
    }catch(error){
    return NextResponse.json(error.message,{
      status:400  
    })
    }
    
}