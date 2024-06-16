import { unstable_setRequestLocale } from "next-intl/server";
import { getOrders } from "../../../../lib/api";
import { getSession } from "@auth0/nextjs-auth0";
import { getAuthUserAction } from "../../../../lib/actions";
import OrdersPage from "../../../../components/Orders/OrdersPage";
import { Order } from "../../../../types/profile-types";

export const metadata = {
  title: "Liquor store - Orders",
  description: "Orders page",
};

export default async function Orders({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const orders = await getOrders();
  const session = await getSession();
  const sub = session?.user?.sub;
  const auth_user = await getAuthUserAction(sub);

  const userOrders = orders.filter(
    (order: Order) => order.metadata.id === auth_user?.auth_user.rows[0].sub
  );

  return (
    <section className="py-[60px] dark:bg-gray">
      <div className="max-w-[1140px] m-auto">
        <OrdersPage
          authUser={auth_user?.auth_user.rows[0]}
          userOrders={
            auth_user?.auth_user.rows[0].role == "admin" ? orders : userOrders
          }
        />
      </div>
    </section>
  );
}
