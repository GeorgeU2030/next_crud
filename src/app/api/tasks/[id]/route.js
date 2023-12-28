import { NextResponse } from "next/server";
import { connectdb } from "../../../../utils/database";
import Task from "../../../../models/Task";

export async function GET(request, {params}){
    try{
        connectdb()
    const taskfound = await Task.findById(params.id)

    if(!taskfound){
        return NextResponse({
            message:'task not found'
        },{
            status:404
        })
    }
    return NextResponse.json(taskfound)

    }catch(error){
    return NextResponse.json(error.message,{
        status:400
    })
    }
    
}

export async function DELETE(request, {params}){
    try{
        connectdb()
    const taskdelete = await Task.findByIdAndDelete(params.id)

    if(!taskdelete){
        return NextResponse({
            message:'task not found'
        },{
            status:404
        })
    }
    return NextResponse.json(taskdelete)

    }catch(error){
    return NextResponse.json(error.message,{
        status:400
    })
    }
}

export async function PUT(request, {params}){
    try{
        connectdb()
    const data = await request.json()
    const taskupdate = await Task.findByIdAndUpdate(params.id,data, {
        new:true
    })

    if(!taskupdate){
        return NextResponse({
            message:'task not found'
        },{
            status:404
        })
    }
    return NextResponse.json(taskupdate)

    }catch(error){
    return NextResponse.json(error.message,{
        status:400
    })
    }
}