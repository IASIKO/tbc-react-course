import ProductsList from "./products/ProductsList";

const blogListData = [
  {
    image:
      "https://preview.colorlib.com/theme/liquorstore/images/image_1.jpg.webp",
    date: "23 April 2020",
    title: "The Recipe from a Winemaker’s Restaurent",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    image:
      "https://preview.colorlib.com/theme/liquorstore/images/image_2.jpg.webp",
    date: "23 April 2020",
    title: "The Recipe from a Winemaker’s Restaurent",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    image:
      "https://preview.colorlib.com/theme/liquorstore/images/image_3.jpg.webp",
    date: "23 April 2020",
    title: "The Recipe from a Winemaker’s Restaurent",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    image:
      "https://preview.colorlib.com/theme/liquorstore/images/image_4.jpg.webp",
    date: "23 April 2020",
    title: "The Recipe from a Winemaker’s Restaurent",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
];

const LandingContent = () => {
  return (
    <>
      <div className=" w-[100%] h-[100vh] bg-landing-bgImage bg-center bg-cover bg-no-repeat relative">
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
          <div className="h-[780px] w-[100%] flex flex-wrap bg-about-image bg-cover bg-no-repeat bg-center "></div>
          <div className="pl-[30px] py-[30px] max-w-[50%] flex flex-[0_0_50%] flex-col animate-[fall_2s_ease_100ms]">
            <span className="text-[#a23f25] text-[21px] font-normal italic">
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
              word "and" and the Little Blind Text should turn around and return
              to its own, safe country.
            </p>
            <p className="text-[35px] text-black mb-[10px]">
              <strong className="italic text-[#a23f25] font-semibold">
                115{" "}
              </strong>
              <span>Years of Experience In Business</span>
            </p>
          </div>
        </div>
      </section>

      <section className="py-[60px] relative">
        <div className="max-w-[1140px] px-[15px] m-auto animate-[fall_2s_ease_100ms]">
          <div className="mb-[30px]">
            <div className="text-center">
              <span className="text-[#a23f25] text-[21px] font-normal italic">
                Blog
              </span>
              <h2 className="text-[40px] font-bold text-black">Recent Blog</h2>
            </div>
          </div>
          <div className="w-[1140px] grid grid-cols-2 gap-4">
            {blogListData.map((listItem, index) => (
              <div key={index} className="mb-[30px] flex">
                <div
                  style={{ backgroundImage: `url(${listItem.image})` }}
                  className="w-[50%] bg-cover bg-no-repeat bg-center"
                ></div>
                <div className="w-[50%] bg-[#f5f4f0] p-[15px]">
                  <p className="mb-[10px]">
                    <span className="pr-[10px] text-gray">{listItem.date}</span>
                  </p>
                  <h3 className="text-[27px] font-medium italic mb-[10px] leading-normal text-black">
                    {listItem.title}
                  </h3>
                  <p className="mb-[10px]">{listItem.description}</p>
                  <a href="#" className="text-[#a23f25] italic font-bold">
                    Continue
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ProductsList />
    </>
  );
};

export default LandingContent;
