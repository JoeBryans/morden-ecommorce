import prisma from "../../../lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  try {
    const category = await prisma.category.create({
      data: {
        ...body,
      },
    });

    return NextResponse.json({ message: "category created", category });
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
export async function GET(req) {
  try {
    const category = await prisma.category.findMany();

    return NextResponse.json({ message: "category created", category });
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
