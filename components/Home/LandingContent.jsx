import { blogListData } from "@/data/BlogListData";
import bg from "../../public/Assets/images/bg_1.jpg";
import aboutImg from "../../public/Assets/images/about-image.jpg";
import ProductsList from "../Products/ProductsList";
import Button from "../UI/Button";
import Link from "next/link";
import BlogList from "../Blog/BlogList";

const LandingContent = () => {
  const homeBlogListData = blogListData.slice(0, 4);

  return (
    <>
      <div
        style={{ backgroundImage: `url(${bg.src})` }}
        className=" w-[100%] h-[100vh] bg-center bg-cover bg-no-repeat relative"
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 opacity-40 bg-black"></div>
        <h1 className="textStroke absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[90px] leading-tight font-bold italic">
          <div className="py-[30px] rotate-[-4deg] text-center w-[660px] m-auto">
            Good <span className="text-white">Drink</span> for Good{" "}
            <span className="text-white">Moments</span>.
            <p className="font-normal text-[20px] text-[#ffffff] py-[20px] leading-normal">
              <a
                href="#"
                className="cursor-pointer mr-[10px] bg-[#b7472a] border-[#b7472a] text-white rounded-[3px] py-[5px] px-[15px]"
              >
                Shop Now
              </a>
              <a
                href="#"
                className="cursor-pointer mr-[10px] bg-transparent border-white border-[1px] border-solid text-white rounded-[3px] py-[5px] px-[15px]"
              >
                Read more
              </a>
            </p>
          </div>
        </h1>
      </div>

      <section className="py-[60px] relative">
        <div className="max-w-[960px] px-[15px] flex justify-center items-center m-auto">
          <div
            style={{ backgroundImage: `url(${aboutImg.src})` }}
            className="h-[780px] w-[100%] flex flex-wrap  bg-cover bg-no-repeat bg-center "
          ></div>
          <div className="pl-[30px] py-[30px] max-w-[50%] flex flex-[0_0_50%] flex-col animate-[fall_2s_ease_100ms]">
            <span className="text-red text-[21px] font-normal italic">
              Since 1905
            </span>
            <h2 className="text-[45px] font-bold text-black leading-normal">
              Desire Meets A New Taste
            </h2>
            <p className="mb-[10px]">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
            <p className="mb-[10px]">
              On her way she met a copy. The copy warned the Little Blind Text,
              that where it came from it would have been rewritten a thousand
              times and everything that was left from its origin would be the
              word and and the Little Blind Text should turn around and return
              to its own, safe country.
            </p>
            <p className="text-[35px] text-black mb-[10px]">
              <strong className="italic text-red font-semibold">115 </strong>
              <span>Years of Experience In Business</span>
            </p>
          </div>
        </div>
      </section>

      <ProductsList />

      <section>
        <BlogList blogListData={homeBlogListData} />
        <div className="flex justify-center mb-[60px]">
          <Link href="/blog">
            <Button>See More...</Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default LandingContent;
