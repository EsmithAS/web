import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from 'fs';



export async function GET(request) {
  const file = await fs.readFile(process.cwd() + '/dt.json', 'utf8');

  return Response.json({
    success: true,
    data: JSON.parse(file)
  });  
}

export async function POST(request) {
  const res = await request.json();
  const file = await fs.readFile(process.cwd() + '/dt.json', 'utf8');

  let msg = JSON.parse(file);
  msg.push({
    success: res.result,
    date: new Date()    
  })

  await fs.writeFile(process.cwd() + '/dt.json', JSON.stringify(msg), 'utf8');
  console.log(res);
  return Response.json({
    success: true,
    data: file,
  });
}
