import Image from "next/image";
import img from "../../public/Assets/images/login-image.jpg";

const AuthorizationLayout = ({ children }) => {
  return (
    <main className="bg-[#f5f4f0] w-screen h-screen dark:bg-dark">
      <div className="bg-white w-[1100px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:bg-gray">
        <div className="flex">
          <Image src={img} alt="login-image" placeholder="blur" width={550} />
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthorizationLayout;
