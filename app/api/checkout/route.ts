import { NextRequest, NextResponse } from "next/server";
import { BASE_URL } from "../../../lib/api";

interface StripeData {
  active?: boolean;
  name?: string;
  price: string;
  quantity: number;
  images?: string[];
}
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const getActiveProducts = async () => {
  const checkProducts = await stripe.products.list();
  const availableProducts = checkProducts.data.filter(
    (p: StripeData) => p.active === true
  );

  return availableProducts;
};

export async function POST(req: NextRequest) {
  const { products, profile } = await req.json();

  let activeProducts = await getActiveProducts();

  try {
    for (const product of products) {
      const stripeProduct = activeProducts?.find(
        (stripeP: StripeData) =>
          stripeP?.name?.toLowerCase() == product.title.toLowerCase()
      );
      if (stripeProduct == undefined) {
        await stripe.products.create({
          name: product.title,
          images: [product.thumbnail],
          default_price_data: {
            unit_amount: product.price * 100,
            currency: "usd",
          },
        });
      }
    }
  } catch (error) {
    console.error(error);
    throw error;
  }

  activeProducts = await getActiveProducts();
  let stripeItems: StripeData[] = [];

  for (const product of products) {
    const stripeProduct = activeProducts?.find(
      (prod: StripeData) =>
        prod?.name?.toLowerCase() == product.title.toLowerCase()
    );

    if (stripeProduct) {
      stripeItems.push({
        price: stripeProduct?.default_price,
        quantity: product?.quantity,
      });
    }
  }

  const session = await stripe.checkout.sessions.create({
    line_items: stripeItems,
    mode: "payment",
    client_reference_id: profile.sub,
    metadata: {
      phone: profile.phone,
      city: profile.city,
      address: profile.address,
    },
    success_url: `${BASE_URL}/orders/success`,
    cancel_url: `${BASE_URL}/orders/cancel`,
  });

  return NextResponse.json({ url: session.url });
}
