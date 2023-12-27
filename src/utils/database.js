import {connect, connection} from "mongoose";

const conn = {
    isConnected:false
}

export async function connectdb(){

    if (conn.isConnected) return
    const db = await connect('mongodb://127.0.0.1:27017/nextcrud')
    conn.isConnected = db.connections[0].readyState
}

connection.on('connected',()=>{
    console.log('Mongodb is connected')
})

connection.on('error',(err)=>{
    console.log('connection error', err)
})