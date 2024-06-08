// import { NextResponse } from "next/server";

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// export const revalidate = 0;

// export async function GET() {
// //   const payments = await stripe.paymentIntents.list();
// //   console.log("🚀 ~ POST ~ paymentLinks:", payments);

//   const paymentLinks = await stripe.paymentLinks.list();
//   console.log("🚀 ~ GET ~ paymentLinks:", paymentLinks)

//   const paymentIntent = await stripe.paymentIntents.retrieve(
//     "pi_3PP70dACkFDwwCCj1qWKH8GW"
//   );
//   console.log("🚀 ~ GET ~ paymentIntent:", paymentIntent)

//   return NextResponse.json({});
// }
