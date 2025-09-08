import prisma from "../../../../lib/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  const url = new URL(req.url);
  const catUrl = new URLSearchParams(url.searchParams);
  const cat = catUrl.get("category");
  console.log(cat);

  try {
    const category = await prisma.product.findMany({
      where: {
        category: cat,
      },
    });

    return NextResponse.json(category);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
