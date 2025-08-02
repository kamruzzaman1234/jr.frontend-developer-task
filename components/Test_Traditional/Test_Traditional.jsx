"use client";

import { Cinzel_Decorative, Raleway } from "next/font/google";

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

const Test_Traditional = () => {
  return (
    <section className="py-[60px]">
      <div className="container px-[30px] lg:px-0">
        <div className="flex flex-col gap-[60px]">
          {/* Title Section */}
          <div className="max-w-[558px] w-full mx-auto">
            <div className="flex flex-col items-center text-center">
              <h2
                className={`${cinzel_decorative.className} text-[48px] font-bold text-black leading-[136%]`}
              >
                Taste the Tradition
              </h2>
              <div className="w-[117px] h-[48px] mt-4">
                <img
                  src="https://i.postimg.cc/bJ3BGZBM/objects.png"
                  className="w-full h-full"
                  alt="Decoration"
                />
              </div>
            </div>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
           
            <div className="col-span-2 w-full relative rounded-[10px] overflow-hidden">
              <img
                src="https://i.postimg.cc/HkSGcP83/Frame-427319708.png"
                className="w-full h-full object-cover"
                alt="Featured Dish"
              />

              <div className="absolute bottom-0 left-0 right-0 
               bg-gradient-to-t from-black/80 via-black/40 to-transparent
                backdrop-blur-sm p-5 flex justify-between items-center gap-4">
                <div className="flex flex-col gap-3  max-w-[438px]">
                  <h5
                    className={`${raleway.className} hidden lg:block text-[18px] font-semibold text-white`}
                  >
                    Wolfberry with Mushroom Siew Mai 枸杞子烧卖
                  </h5>
                  <p
                    className={`${raleway.className} text-[16px] hidden lg:block font-normal text-white`}
                  >
                    A traditional dim sum favorite featuring steamed dumplings
                    filled with succulent pork, mushrooms, and topped with
                    wolfberries for a hint of sweetness.
                  </p>
                </div>
                <button className="flex py-[10px] px-[20px] rounded-lg
                            bg-transparent border-1 border-white  items-center justify-center gap-[8px]">
                             <h4 className={`${raleway.className} text-white font-semibold
                               leading-[150%] text-[16px]`}>View Details</h4>
                               <div className="w-[18px] h-[7.5px]">
                                <img src="https://i.ibb.co/39fLGPJY/Vector-1.png"
                               className="w-full h-full" alt="Image"/>
                            </div>
                          </button>
              </div>
            </div>

            
            <div className="rounded-[10px] overflow-hidden">
              <img
                src="https://i.postimg.cc/1twYHWXk/2img.png"
                className="w-full h-full object-cover"
                alt="Traditional Dish"
              />
            </div>

             <div className="rounded-[10px] overflow-hidden">
              <img
                src="https://i.postimg.cc/NMBvKN6j/3img.png"
                className="w-full h-full object-cover"
                alt="Traditional Dish"
              />
            </div>

            <div className="col-span-2 w-full relative rounded-[10px] overflow-hidden">
              <img
                src="https://i.postimg.cc/D0Sj0sMz/4img.png"
                className="w-full h-full object-cover"
                alt="Featured Dish"
              />
{/* 
              <div className="absolute bottom-0 left-0 right-0
               bg-gradient-to-t from-black/80 via-black/40 to-transparent
                backdrop-blur-sm p-5 flex justify-between items-center gap-4">
                <div className="flex flex-col gap-3 max-w-[438px]">
                  <h5
                    className={`${raleway.className} text-[18px] font-semibold text-white`}
                  >
                    Wolfberry with Mushroom Siew Mai 枸杞子烧卖
                  </h5>
                  <p
                    className={`${raleway.className} text-[16px] font-normal text-white`}
                  >
                    A traditional dim sum favorite featuring steamed dumplings
                    filled with succulent pork, mushrooms, and topped with
                    wolfberries for a hint of sweetness.
                  </p>
                </div>
                <button className="flex py-[10px] px-[20px] rounded-lg
                            bg-transparent border-1 border-white  items-center justify-center gap-[8px]">
                             <h4 className={`${raleway.className} text-white font-semibold
                               leading-[150%] text-[16px]`}>View Details</h4>
                               <div className="w-[18px] h-[7.5px]">
                                <img src="https://i.ibb.co/39fLGPJY/Vector-1.png"
                               className="w-full h-full" alt="Image"/>
                            </div>
                          </button>
              </div> */}
            </div>

          </div>
          <div className="flex justify-center">
                <div className="w-[132px]">
                    <img src="https://i.postimg.cc/Fzq9kyFC/dot.png"
                    className="w-full h-full" alt="" />
                </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Test_Traditional;
