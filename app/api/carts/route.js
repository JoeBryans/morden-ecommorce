import { NextResponse } from "next/server";
import prisma from "../../../lib/db";

export async function POST(req) {
  try {
    const body = await req.json();
    const { totalPrice, userId, qty, productId } = body;
    const existCart = await prisma.carts.findFirst({
      where: { productId: productId, userId: userId },
    });
    console.log("existCart :", existCart);

    if (existCart) {
      const updatedCart = await prisma.carts.update({
        where: { id: existCart.id },
        data: {
          qty: existCart.qty + 1,
        },
      });
      console.log("updatedCart :", updatedCart);
      return NextResponse.json(updatedCart);
    } else {
      const cart = await prisma.carts.create({
        data: {
          userId: userId,
          qty:qty,
          productId,
        },
      });
      console.log("cart :", cart);
      return NextResponse.json(cart);
    }
  } catch (error) {
    return NextResponse.json(error);
  }
}
// const cart = await prisma.carts.create({
//   data: {
//     userId: userId,
//     cartItems: {
//       create: [{ totalPrice, qty, productId }],
//     },
//   },
//   include: {
//     cartItems: true, // Include all posts in the returned object
//   },
// // });

// console.log("carts :", cart);

// export async function PUT(req) {
//   try {
//     const body = await req.json();
//     // const { cartId } = await params;
//     const { userId, totalPrice, qty, productId } = body;

//     const user = await prisma.carts.findFirst({
//       where: { userId: userId },
//       include: {
//         cartItems: true,
//       },
//     });

//     if (user) {
//       const CartItems = user.cartItems;
//       const updatedCartItems = CartItems.map((cartItem) => {
//         if (cartItem.productId === productId) {
//           return {
//             ...cartItem,
//             totalPrice: totalPrice,
//             qty: qty,
//           };
//         } else {
//           return cartItem;
//         }
//       });
//       console.log("available:", updatedCartItems);
//     } else {
//     }
//     return NextResponse(user);
//   } catch (error) {
//     return NextResponse.json(error);
//   }
// }

export async function GET(req) {
  try {
    const user = await prisma.carts.findMany({
      include: {
        user: true,
        product: true,
      },
    });
    console.log("user :", user);
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(error);
  }
}
