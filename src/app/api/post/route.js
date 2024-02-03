import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();


export async function GET(request) {
  const data = await prismaClient.user.findMany();

  return Response.json({
    success: true,
    data: data
  });  
}

export async function POST(request) {
  const res = await request.json();
  
  let user = {
    success: res.result,
    date: "" +  new Date()    
  }
  
  const data = await prismaClient.user.create({ data: user });
  return Response.json({
    success: true,
    data: data,
  });
}
