"use client";

import { Cinzel_Decorative, Raleway } from "next/font/google";

const cinzel_decorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
})

const raleway = Raleway({
    subsets:['latin'],
    weight:['300', '400', '500', '600', '700', '800'],
    display:'swap',
})

const Drive_Intro = ()=>{
    return(
        <section className="py-[60px] back-img">
            <div className="container px-[30px] lg:px-[0px]">
                <div className="max-w-[994px] w-full mx-auto">
                    <div className="flex flex-col gap-[60px]">
                        <div className="flex flex-col gap-[20px] justify-center w-[994px] relative z-50">
                            <h2 className={`${cinzel_decorative.className}
                            text-[48px] leading-[130%] text-center
                             text-white font-bold`}>Dive Into the World of Sumptuous
                              Sum Dim Sum</h2>
                              <p className={`${raleway.className} text-[16px] 
                              font-normal leading-[150%] 
                              text-center text-white`}>Embark on a culinary journey where every bite tells a story of tradition and passion. 
                                At Sum Dim Sum, we bring you an authentic Asian dining 
                                experience with handcrafted dishes,
                                 vibrant flavors, and the warmth of our culture.
                                 From delicate dumplings to savory
                               bites, our menu is a celebration of taste and artistry. Come, 
                                 savor the joy of good food, and let
                                 every dish transport you to the heart of dim sum perfection.</p>
                        </div>
                        <div className="flex justify-center relative z-50">
                                <button className="flex py-[10px] px-[20px] rounded-lg
                bg-[#B31217]  items-center justify-center gap-[8px]">
                    <h4 className={`${raleway.className} text-white font-semibold
                    leading-[150%] text-[16px]`}>Explore Our Menu</h4>
                    <div className="w-[18px] h-[7.5px]">
                        <img src="https://i.ibb.co/39fLGPJY/Vector-1.png"
                        className="w-full h-full" alt="Image"/>
                    </div>
                
                </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Drive_Intro;