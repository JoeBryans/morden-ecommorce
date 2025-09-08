import { NextResponse } from "next/server";

import { getServerSession } from "next-auth";
import { authOptions } from "../../../auth";
import prisma from "../../../lib/db";

export async function POST(req) {
  const body = await req.json();
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  const { images } = body;
  const image = images.map((img) => {
    return { url: img.url, cloudPublicId: img.id }
  })
  try {
    if (!userId) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    const product = await prisma.product.create({
      data: {
        ...body,
        userId: userId,
        images: {
          create: {
            url: image?.url,
            cloudPublicId: image?.cloudPublicId
          }
        },
      },
    });

    return NextResponse.json({

      message: "Product created successfully",
      product,
      ok: true,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      message: "something went wrong  ",
      error,
      ok: false,
    });
  }
}

export async function GET() {
  try {
    const product = await prisma.product.findMany(
      {
        include: {
          images: {
            select: {
              url: true,
              cloudPublicId: true
            }
          },
          category: {
            select: {
              id: true,
              name: true,
              slug: true
            }

          }
        }
      }
    );
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ message: "something went wrong  ", error });
  }
}
