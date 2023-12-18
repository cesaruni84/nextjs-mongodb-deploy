
import { connectToMongoDB } from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToMongoDB()

  const listUsers = await User.find()
  return NextResponse.json(listUsers)
}

export async function POST(req, res) {
  await connectToMongoDB()

  const data = await req.json()
  const listUsers = await User.create(data)
  return NextResponse.json(listUsers)
}