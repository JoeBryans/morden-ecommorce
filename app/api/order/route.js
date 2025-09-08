import Stripe from "stripe";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../auth";
import prisma from "../../../lib/db";

export async function POST(req) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  console.log(stripe);

  const body = await req.json();
  // const { items, total, totalquantity, shippingAddress, paymentMethod } = body;
  const { paymentMethod, paymentIntentId } = body;
  console.log("body", body);

  if (!userId) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
  let payment;
  try {
    if (paymentIntentId !== null) {
      payment = await stripe.paymentIntents.retrieve(paymentIntentId);
      console.log("payment retrieved", payment);
      return NextResponse.json({
        clientSecret: payment.client_secret,
        paymentIntentId: payment.id,
      });
    } else {
      if (paymentMethod === "card" || paymentMethod === "opay") {
        payment = await stripe.paymentIntents.create({
          amount: parseInt(body.total) * 100,
          currency: "NGN",
          automatic_payment_methods: { enabled: true },
        });
      }
      console.log(payment);

      await prisma.order.create({
        data: {
          total_qty: body.totalquantity,
          total_price: body.total,
          orderItem: body.items,
          userId: userId,
          paymentStatus: "pending",
          paymentIntentId: payment.id,
          paymentMethod: paymentMethod,
        },
      });
      return NextResponse.json({
        clientSecret: payment.client_secret,
        paymentIntentId: payment.id,
      });
    }
  } catch (error) {
    return console.log(error);
    // return NextResponse.json(error)
  }
}

export async function GET() {
  try {
    const order = await prisma.order.findMany({
      include: {
        user: true,
      },
    });
    const orderAggregates = await orderAggregate();
    return NextResponse.json({ order, orderAggregates });
  } catch (error) {
    return NextResponse.json(error);
  }
}

// order aggregate
async function orderAggregate() {
  const order = await prisma.order.aggregate({
    _sum: {
      total_price: true,
      total_qty: true,
    },
  });
  return order;
}
