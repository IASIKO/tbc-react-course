import { NextRequest, NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export const revalidate = 0;

export async function POST(req: NextRequest) {
  const { chargeId } = await req.json();
  console.log("🚀 ~ POST ~ charge:", chargeId)

  try {
    await stripe.refunds.create({
      charge: chargeId,
    });

    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    console.log("🚀 ~ POST ~ error:", error)
    return NextResponse.json({ error }, { status: 500 });
  }
}
