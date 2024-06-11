import { useTranslations } from "next-intl";
import Link from "next/link";

const AdminMenu = () => {

  const t = useTranslations('admin')

  return (
    <section className="py-[60px] dark:bg-gray">
      <div className="max-w-[1140px] m-auto">
        <div className="py-[60px] flex flex-col items-center gap-4">
          <Link
            href="/admin/users"
            className="w-[300px] p-[7px] px-6 border border-solid border-red text-[18px] text-red font-medium align-middle duration-300 uppercase flex items-center gap-2 hover:bg-red hover:text-white"
          >
           {t("users")}
          </Link>

          <Link
            href="/products/add-product"
            className="w-[300px] p-[7px] px-6 border border-solid border-red text-[18px] text-red font-medium align-middle duration-300 uppercase flex items-center gap-2 hover:bg-red hover:text-white"
          >
            {t("addProduct")}
          </Link>
          <Link
            href="/products/add-product"
            className="w-[300px] p-[7px] px-6 border border-solid border-red text-[18px] text-red font-medium align-middle duration-300 uppercase flex items-center gap-2 hover:bg-red hover:text-white"
          >
            {t("addBlog")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdminMenu;
