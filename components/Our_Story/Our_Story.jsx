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

const Our_Story = ()=>{
    return(
     <section className="py-[60px]">
        <div className="container px-[30px] lg:px-[0px]">
            <div>
                <div className="relative">
                <div className="w-[1096px] mb-[60px] bg-[#F7E7E8] rounded-lg">
                    <div className="flex px-[60px] py-[60px] flex-col gap-[40px]">
                        <div className="flex flex-col gap-[20px]">
                            <div className="max-w-[664px] w-full">
                             <h2 className={`${cinzel_decorative.className} 
                             text-5xl font-bold leading-[136%]`}>Our Story</h2>
                            </div>
                            <div className="max-w-[664px] w-full">
                                <p className={`${raleway.className} 
                                 text-[16px] font-normal leading-[150%]`}>At Sum Dim Sum, we are a local Singaporean brand that prepares dim sum dishes
                                     with wholehearted dedication and passion. Our chefs use traditional techniques 
                                     to craft our dishes, ensuring that they are of the highest quality.
                                     Come and experience our fresh and flavorful cuisine.</p>
                            </div>
                        </div>
                        <div>
                         <button className="flex py-[10px] px-[20px] rounded-lg
                            bg-[#B31217]  items-center justify-center gap-[8px]">
                             <h4 className={`${raleway.className} text-white font-semibold
                               leading-[150%] text-[16px]`}>Learn More</h4>
                               <div className="w-[18px] h-[7.5px]">
                                <img src="https://i.ibb.co/39fLGPJY/Vector-1.png"
                               className="w-full h-full" alt="Image"/>
                            </div>
                          </button>
                        </div>
                    </div>
                </div>
                <div className="w-[448px] h-[365px] border-1
                 border-[#B31217] absolute top-[40px] right-0 rounded-[20px]">
                    <h3 className="text-white"></h3>
                </div>
                <div className="w-[512px] h-[365px] absolute top-[60px] right-[20px]">
                    <img src="https://i.postimg.cc/KYHGX0Tt/story-img.png" 
                    className="w-full h-full" alt="" />
                </div>
            </div>

            <div className="pt-[60px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-[60px] h-[60px]">
                            <img src="https://i.postimg.cc/FsrMsZdp/Layer-1-1.png"
                            className="w-full h-full" alt="" />
                        </div>
                        <div className="text-center">
                            <h3 className={`${cinzel_decorative.className} 
                            text-black text-4xl leading-[150%] text-center font-semibold`}>6,000+</h3>
                            <h4 className={`${raleway.className} 
                            font-medium leading-[150%] text-center text-[18px]`}>Happy Guests</h4>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-[60px] h-[60px]">
                            <img src="https://i.postimg.cc/PJ9RdBCF/Layer-1-2.png"
                            className="w-full h-full" alt="" />
                        </div>
                        <div className="text-center">
                            <h3 className={`${cinzel_decorative.className} 
                            text-black text-4xl leading-[150%] text-center font-semibold`}>50+</h3>
                            <h4 className={`${raleway.className} 
                            font-medium leading-[150%] text-center text-[18px]`}>Unique Dishes</h4>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-[60px] h-[60px]">
                            <img src="https://i.postimg.cc/fymrT8Yz/Layer-1-3.png"
                            className="w-full h-full" alt="" />
                        </div>
                        <div className="text-center">
                            <h3 className={`${cinzel_decorative.className} 
                            text-black text-4xl leading-[150%] text-center font-semibold`}>20+</h3>
                            <h4 className={`${raleway.className} 
                            font-medium leading-[150%] text-center text-[18px]`}>Years of Quality</h4>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-[60px] h-[60px]">
                            <img src="https://i.postimg.cc/JhsKzTWf/Vector-2.png"
                            className="w-full h-full" alt="" />
                        </div>
                        <div className="text-center">
                            <h3 className={`${cinzel_decorative.className} 
                            text-black text-4xl leading-[150%] text-center font-semibold`}>12+</h3>
                            <h4 className={`${raleway.className} 
                            font-medium leading-[150%] text-center text-[18px]`}>Monthly Events</h4>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
     </section>
    )
}

export default Our_Story;