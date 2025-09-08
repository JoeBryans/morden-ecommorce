import { NextResponse } from "next/server";
import prisma from "../../../../lib/db";
// import { Product } from "@prisma/client";

export async function GET(req, { params }) {
  //   const Id = params;
  const param = await params;
  const productId = param.Id;
  console.log("id", productId);
  // console.log("ids", productId);

  try {
    const { Id } = await params;
    const product = await prisma.product.findUnique({
      where: {
        id: Id,
      },
    });
    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }
    console.log("product", product);

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function PUT(req, { params }) {
  try {
    const { Id } = await params;
    const body = await req.json();

    const datas = body;
    const product = await prisma.product.update({
      where: {
        id: Id,
      },
      data: datas,
    });
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function DELETE(req, { params }) {
  const id = params.Id;
  try {
    const id = await params.Id;

    const product = await prisma.product.delete({
      where: {
        id: id,
      },
    });
    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(error);
  }
}
