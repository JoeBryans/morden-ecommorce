import prisma from "../../../../lib/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  const url = new URL(req.url);
  const searchParam = new URLSearchParams(url.searchParams);
  const search = searchParam.get("search");

  try {
    const product = await prisma.product.findMany({
      where: {
        name: search,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
