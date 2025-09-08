import { NextResponse } from "next/server";
import prisma from "../../../../lib/db";

export async function GET(req, { params }) {
  try {
    const { cartId } = await params;
    console.log("cartId :", cartId);

    const cart = await prisma.carts.findUnique({
      where: { id: cartId },
      include: {
        cartItems: true,
      },
    });
    console.log("cart :", cart);

    return NextResponse.json(cart);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function DELETE(req, { params }) {
  try {
    const { cartId } = await params;
    console.log("cartId :", cartId);

    const cart = await prisma.carts.delete({
      where: { id: cartId },
    });
    console.log("cart :", cart);

    return NextResponse.json(cart);
  } catch (error) {
    return NextResponse.json(error);
  }
}

// export async function PUT(req, { params }) {
//   try {
//     const { cartId } = await params;
//     console.log("cartId :", cartId);
//     const body = await req.json();
//     const { totalPrice, qty, productId } = body;
//     console.log(body);
//     const cart = await prisma.carts.update({
//       where: { id: cartId },
//       data: {
//         cartItems: {
//           create: [{ totalPrice, qty, productId }],
//         },
//       },
//       include: {
//         cartItems: true, // Include all posts in the returned object
//       },
//     });
//     console.log("cart :", cart);
//     return NextResponse.json(cart);
//   } catch (error) {
//     return NextResponse.json(error);
//   }
// }

export async function PUT(req) {
  try {
    // const { cartId } = await params;
    const { userId, totalPrice, qty, productId } = body;

    const user = await prisma.carts.findUnique({
      where: { userId: userId },
    });

    if (user) {
      console.log("available:", user);
    } else {
    }
    return NextResponse(user);
  } catch (error) {
    return NextResponse.json(error);
  }
}
