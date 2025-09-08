import { NextResponse } from "next/server";
import prisma from "../../../lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../auth";

export async function POST(req) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  const body = await req.json();
  console.log("userId", session);

  try {
    const address = await prisma.address.create({
      data: {
        ...body,
        userId: userId,
      },
    });
    return NextResponse.json(address);
  } catch (error) {
    // console.log(error.message);

    return NextResponse.json(error.message);
  }
}

export async function GET() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  try {
    const address = await prisma.address.findMany({
      where: {
        userId: userId,
      },
      include: {
        users: {
          select: {
            name: true,
            email: true,
            phone: true,
            image: true,
          },
        },
      },
    });
    console.log(address);

    return NextResponse.json(address);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
