import Image from "next/image";
import img from "../../public/Assets/images/login-image.jpg";
import { ReactNode } from "react";

interface AuthorizationLayoutProps {
  children: ReactNode;
}

const AuthorizationLayout: React.FC<AuthorizationLayoutProps> = ({ children }) => {
  return (
    <main className="bg-[#f5f4f0] w-screen h-screen dark:bg-dark">
      <div className="bg-white w-[1000px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:bg-gray">
        <div className="flex">
          <Image src={img} alt="login-image" placeholder="blur" width={500}/>
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthorizationLayout;
