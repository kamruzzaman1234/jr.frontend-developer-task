"use client";

import { Cinzel_Decorative } from "next/font/google";

const cinzel_decorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const Our_Testimonial = () => {
  return (
    <section className="py-[60px]">
      <div className="container px-[30px] lg:px-[0px]">
        <div className="flex flex-col gap-[60px]">
          
          <div className="max-w-[583px] w-full mx-auto">
            <div className="flex flex-col items-center text-center">
              <h2
                className={`${cinzel_decorative.className} text-[48px] font-bold text-black leading-[136%]`}
              >
                The Talk of the Town
              </h2>
              <div className="w-[117px] h-[48px] mt-4">
                <img
                  src="https://i.postimg.cc/bJ3BGZBM/objects.png"
                  className="w-full h-full object-contain"
                  alt="Decoration"
                />
              </div>
            </div>
          </div>

          {/* Carousel Section */}
          
        </div>
      </div>
      <div>
            <div className="carousel w-full rounded-lg overflow-hidden">
              {/* Slide 1 */}
              <div id="slide1" className="carousel-item relative
               w-full background-img">
                {/* <img
                  src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                  className="w-full object-cover"
                  alt="Slide 1"
                /> */}
               <div className="container">
                   <div className="max-w-[994px] w-full mx-auto">
                  <div className="relative z-50 w-[994px]">
                    <h2 className="text-7xl font-bold ">hello raisa how are you</h2>
                  </div>
                </div>
               </div>
                <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                  <a href="#slide4" className="btn btn-circle bg-white text-black">❮</a>
                  <a href="#slide2" className="btn btn-circle bg-white text-black">❯</a>
                </div>
              </div>

              {/* Slide 2 */}
              <div id="slide2" className="carousel-item relative w-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                  className="w-full object-cover"
                  alt="Slide 2"
                />
                <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                  <a href="#slide1" className="btn btn-circle bg-white text-black">❮</a>
                  <a href="#slide3" className="btn btn-circle bg-white text-black">❯</a>
                </div>
              </div>

              {/* Slide 3 */}
              <div id="slide3" className="carousel-item relative w-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                  className="w-full object-cover"
                  alt="Slide 3"
                />
                <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                  <a href="#slide2" className="btn btn-circle bg-white text-black">❮</a>
                  <a href="#slide4" className="btn btn-circle bg-white text-black">❯</a>
                </div>
              </div>

              {/* Slide 4 */}
              <div id="slide4" className="carousel-item relative w-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                  className="w-full object-cover"
                  alt="Slide 4"
                />
                <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                  <a href="#slide3" className="btn btn-circle bg-white text-black">❮</a>
                  <a href="#slide1" className="btn btn-circle bg-white text-black">❯</a>
                </div>
              </div>
            </div>
          </div>
    </section>
  );
};

export default Our_Testimonial;
