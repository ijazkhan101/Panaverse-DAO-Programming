import { NextRequest, NextResponse } from "next/server";

export const GET = async () =>{
    return new NextResponse("This is Greeting APIs");
}

export const POST = async (request :  NextRequest) =>{
     const req = await request.json();

     if(req.Type){
        return NextResponse.json({
            status: "Cooking",
            Cooking :  req.Type,
            quantity :req.Quantity,
            requestMethod : "POST",
        });
     }else {
        return new NextResponse("Failed to get data")
     }
}