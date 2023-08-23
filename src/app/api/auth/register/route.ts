import User from "@/models/User";
import connect from "@/utils/db";
import { request } from "http"
import  bcrypt from 'bcryptjs'
import { NextResponse } from "next/server";
export const POST = async(request)=>{
    const {name,email,password}:{name:string,email:string,password:string} = await request.json()
    await connect();
    const hashedPassword = await bcrypt.hash(password,5) 

    const newUser = new User({
        name,
        email,
        password:hashedPassword

    })
    try{
        await newUser.save()
        return new  NextResponse('User has been created',{
            status:201
        })
    }catch(err){
        throw new Error(err.message)
        
    }

}