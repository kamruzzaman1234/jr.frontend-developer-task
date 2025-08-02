"use client";

import { Cinzel_Decorative,Raleway } from "next/font/google";

const cinzel_decorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const Our_Testimonial = () => {
  return (
    <section className="py-[60px] relative">
      <div className="container px-[30px] lg:px-[0px]">
        <div className="flex flex-col gap-[60px]">
          
          <div className="max-w-[583px] w-full mx-auto">
            <div className="flex flex-col items-center text-center">
              <h2
                className={`${cinzel_decorative.className} text-[38px] lg:text-[48px] font-bold text-black leading-[136%]`}
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
      <div className="mt-[60px] w-full">
            <div className="carousel w-full rounded-lg overflow-hidden">
              {/* Slide 1 */}
              <div id="slide1" className="carousel-item relative
               w-full background-img">
                {/* <img
                  src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                  className="w-full object-cover"
                  alt="Slide 1"
                /> */}
               <div className="container px-[30px] lg:px-[0px]">
                   <div className="max-w-[994px] w-full mx-auto">
                  <div className="relative z-50 w-full lg:w-[994px] py-[60px]">
                    <div className="flex flex-col gap-[40px] items-center">
                      <div className="w-[100px] h-[100px]">
                          <img src="https://i.ibb.co/fdLPLBT5/Ellipse-83.png"
                          className="w-full h-full" alt="" />
                      </div>
                      <div>
                          <p className={`${raleway.className} text-[16px] 
                          leading-[150%] font-normal text-white text-center`}>Sum Dim Sum is more than just a restaurant—it’s an experience that transports 
                            you to the heart of Asian culinary tradition. Each bite is a
                             harmonious blend of flavor, texture, and passion, crafted meticulously 
                             to reflect the essence of dim sum culture. The moment you step in,
                              you’re greeted by the comforting aroma of freshly steamed dumplings, 
                              the vibrant energy of a bustling kitchen, and the warm smiles of
                             a team dedicated to delivering perfection on every plate.</p>
                      </div>
                      <div className="flex gap-[8px]">
                          <div className="w-[35px] h-[34px]">
                             <img src="https://i.ibb.co/C5GtcYw2/Vector-3.png" alt="" className="w-full h-full" />
                          </div>
                          <div className="w-[35px] h-[34px]">
                             <img src="https://i.ibb.co/C5GtcYw2/Vector-3.png" alt="" className="w-full h-full" />
                          </div>
                          <div className="w-[35px] h-[34px]">
                             <img src="https://i.ibb.co/C5GtcYw2/Vector-3.png" alt="" className="w-full h-full" />
                          </div>
                          <div className="w-[35px] h-[34px]">
                             <img src="https://i.ibb.co/C5GtcYw2/Vector-3.png" alt="" className="w-full h-full" />
                          </div>
                          <div className="w-[35px] h-[34px]">
                             <img src="https://i.ibb.co/C5GtcYw2/Vector-3.png" alt="" className="w-full h-full" />
                          </div>
                      </div>
                    </div>
                    <div className="mt-[40px] mx-auto 
                    w-[132px] h-[28px]">
                        <img src="https://i.ibb.co/20P372zk/Frame-427319710.png"
                        className="w-full h-full object-cover" alt="" />
                    </div>
                  </div>
                </div>
               </div>
                <div className="absolute left-5 z-50 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                  <a href="#slide4" className="text-[26px] relative z-50 bg-transparent text-gray-300">❮</a>
                  <a href="#slide2" className="text-[26px] relative z-50 text-gray-300">❯</a>
                </div>
              </div>

              {/* Slide 2 */}
              <div id="slide2" className="carousel-item relative w-full
               background-img">
                {/* <img
                  src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                  className="w-full object-cover"
                  alt="Slide 2"
                /> */}
                <div className="container px-[30px] lg:px-[0px]">
                   <div className="max-w-[994px] w-full mx-auto">
                  <div className="relative z-50 w-full lg:w-[994px] py-[60px]">
                    <div className="flex flex-col gap-[40px] items-center">
                      <div className="w-[100px] h-[100px]">
                          <img src="https://i.ibb.co/fdLPLBT5/Ellipse-83.png"
                          className="w-full h-full" alt="" />
                      </div>
                      <div>
                          <p className={`${raleway.className} text-[16px] 
                          leading-[150%] font-normal text-white text-center`}>Sum Dim Sum is more than just a restaurant—it’s an experience that transports 
                            you to the heart of Asian culinary tradition. Each bite is a
                             harmonious blend of flavor, texture, and passion, crafted meticulously 
                             to reflect the essence of dim sum culture. The moment you step in,
                              you’re greeted by the comforting aroma of freshly steamed dumplings, 
                              the vibrant energy of a bustling kitchen, and the warm smiles of
                             a team dedicated to delivering perfection on every plate.</p>
                      </div>
                      <div className="flex gap-[8px]">
                          <div className="w-[35px] h-[34px]">
                             <img src="https://i.ibb.co/C5GtcYw2/Vector-3.png" alt="" className="w-full h-full" />
                          </div>
                          <div className="w-[35px] h-[34px]">
                             <img src="https://i.ibb.co/C5GtcYw2/Vector-3.png" alt="" className="w-full h-full" />
                          </div>
                          <div className="w-[35px] h-[34px]">
                             <img src="https://i.ibb.co/C5GtcYw2/Vector-3.png" alt="" className="w-full h-full" />
                          </div>
                          <div className="w-[35px] h-[34px]">
                             <img src="https://i.ibb.co/C5GtcYw2/Vector-3.png" alt="" className="w-full h-full" />
                          </div>
                          <div className="w-[35px] h-[34px]">
                             <img src="https://i.ibb.co/C5GtcYw2/Vector-3.png" alt="" className="w-full h-full" />
                          </div>
                      </div>
                    </div>
                    <div className="mt-[40px] mx-auto 
                    w-[132px] h-[28px]">
                        <img src="https://i.ibb.co/20P372zk/Frame-427319710.png"
                        className="w-full h-full object-cover" alt="" />
                    </div>
                  </div>
                </div>
               </div>
                <div className="absolute z-50 left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                  <a href="#slide1" className="text-[26px] relative z-50 text-gray-300">❮</a>
                  <a href="#slide3" className="text-[26px] relative z-50 text-gray-300">❯</a>
                </div>
              </div>

              {/* Slide 3 */}
              <div id="slide3" className="carousel-item relative w-full background-img">
                {/* <img
                  src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                  className="w-full object-cover"
                  alt="Slide 3"
                /> */}
                <div className="container px-[30px] lg:px-[0px]">
                   <div className="max-w-[994px] w-full mx-auto">
                  <div className="relative z-50 w-full lg:w-[994px] py-[60px]">
                    <div className="flex flex-col gap-[40px] items-center">
                      <div className="w-[100px] h-[100px]">
                          <img src="https://i.ibb.co/fdLPLBT5/Ellipse-83.png"
                          className="w-full h-full" alt="" />
                      </div>
                      <div>
                          <p className={`${raleway.className} text-[16px] 
                          leading-[150%] font-normal text-white text-center`}>Sum Dim Sum is more than just a restaurant—it’s an experience that transports 
                            you to the heart of Asian culinary tradition. Each bite is a
                             harmonious blend of flavor, texture, and passion, crafted meticulously 
                             to reflect the essence of dim sum culture. The moment you step in,
                              you’re greeted by the comforting aroma of freshly steamed dumplings, 
                              the vibrant energy of a bustling kitchen, and the warm smiles of
                             a team dedicated to delivering perfection on every plate.</p>
                      </div>
                      <div className="flex gap-[8px]">
                          <div className="w-[35px] h-[34px]">
                             <img src="https://i.ibb.co/C5GtcYw2/Vector-3.png" alt="" className="w-full h-full" />
                          </div>
                          <div className="w-[35px] h-[34px]">
                             <img src="https://i.ibb.co/C5GtcYw2/Vector-3.png" alt="" className="w-full h-full" />
                          </div>
                          <div className="w-[35px] h-[34px]">
                             <img src="https://i.ibb.co/C5GtcYw2/Vector-3.png" alt="" className="w-full h-full" />
                          </div>
                          <div className="w-[35px] h-[34px]">
                             <img src="https://i.ibb.co/C5GtcYw2/Vector-3.png" alt="" className="w-full h-full" />
                          </div>
                          <div className="w-[35px] h-[34px]">
                             <img src="https://i.ibb.co/C5GtcYw2/Vector-3.png" alt="" className="w-full h-full" />
                          </div>
                      </div>
                    </div>
                    <div className="mt-[40px] mx-auto 
                    w-[132px] h-[28px]">
                        <img src="https://i.ibb.co/20P372zk/Frame-427319710.png"
                        className="w-full h-full object-cover" alt="" />
                    </div>
                  </div>
                </div>
               </div>
                <div className="absolute z-50 left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                  <a href="#slide2" className="text-[26px] relative z-50 text-gray-300">❮</a>
                  <a href="#slide4" className="text-[26px] relative z-50 text-gray-300">❯</a>
                </div>
              </div>

              {/* Slide 4 */}
              <div id="slide4" className="carousel-item relative w-full background-img">
                {/* <img
                  src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                  className="w-full object-cover"
                  alt="Slide 4"
                /> */}

                <div className="container px-[30px] lg:px-[30px]">
                   <div className="max-w-[994px] w-full mx-auto">
                  <div className="relative z-50 w-full lg:w-[994px] py-[60px]">
                    <div className="flex flex-col gap-[40px] items-center">
                      <div className="w-[100px] h-[100px]">
                          <img src="https://i.ibb.co/fdLPLBT5/Ellipse-83.png"
                          className="w-full h-full" alt="" />
                      </div>
                      <div>
                          <p className={`${raleway.className} text-[16px] 
                          leading-[150%] font-normal text-white text-center`}>Sum Dim Sum is more than just a restaurant—it’s an experience that transports 
                            you to the heart of Asian culinary tradition. Each bite is a
                             harmonious blend of flavor, texture, and passion, crafted meticulously 
                             to reflect the essence of dim sum culture. The moment you step in,
                              you’re greeted by the comforting aroma of freshly steamed dumplings, 
                              the vibrant energy of a bustling kitchen, and the warm smiles of
                             a team dedicated to delivering perfection on every plate.</p>
                      </div>
                      <div className="flex gap-[8px]">
                          <div className="w-[35px] h-[34px]">
                             <img src="https://i.ibb.co/C5GtcYw2/Vector-3.png" alt="" className="w-full h-full" />
                          </div>
                          <div className="w-[35px] h-[34px]">
                             <img src="https://i.ibb.co/C5GtcYw2/Vector-3.png" alt="" className="w-full h-full" />
                          </div>
                          <div className="w-[35px] h-[34px]">
                             <img src="https://i.ibb.co/C5GtcYw2/Vector-3.png" alt="" className="w-full h-full" />
                          </div>
                          <div className="w-[35px] h-[34px]">
                             <img src="https://i.ibb.co/C5GtcYw2/Vector-3.png" alt="" className="w-full h-full" />
                          </div>
                          <div className="w-[35px] h-[34px]">
                             <img src="https://i.ibb.co/C5GtcYw2/Vector-3.png" alt="" className="w-full h-full" />
                          </div>
                      </div>
                    </div>
                    <div className="mt-[40px] mx-auto 
                    w-[132px] h-[28px]">
                        <img src="https://i.ibb.co/20P372zk/Frame-427319710.png"
                        className="w-full h-full object-cover" alt="" />
                    </div>
                  </div>
                </div>
               </div>
                <div className="absolute z-50 left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                  <a href="#slide3" className="text-[26px] relative z-[50] text-gray-300">❮</a>
                  <a href="#slide1" className="text-[26px] relative z-[50] text-gray-300">❯</a>
                </div>
              </div>
            </div>
        </div>
        <div className="absolute w-[200px] lg:w-[336px] bottom-30 z-60  right-10">
          <img src="https://i.ibb.co/HDzPzkK8/name-frame.png" 
           className="w-full h-full" alt="" />
        </div>
        <div className="absolute w-[64px] h-[50px] bottom-[460px] left-20 z-60">
            <img src="https://i.ibb.co/Z1YWzd3J/koma.png" 
            alt="" className="w-full h-full"/>
        </div>
    </section>
  );
};

export default Our_Testimonial;
