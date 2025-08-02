"use client";

import { Cinzel_Decorative, Raleway, Poppins } from "next/font/google";

const cinzel_decorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const poppins = Poppins({
    subsets:["latin"],
    weight: ['200', '400', '600', '700', '800'],
    display:"swap",
})

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const Contact_form = ()=>{
    return(
        <section className="py-[60px] relative">
            <div className="container">
                <div className="flex">
                    <div className="w-[826px] h-[746px] contact-bg">
                        <div className="bg-overly">
                            <div className="px-[60px] py-[120px]">
                               <div className="flex flex-col gap-[60px]">
                                    <div className="relative z-60">
                                        <h4 className={`${raleway.className}
                                         text-[24px] relative z-50 text-white leding-[150%] font-semibold`}>Just Say Hi !</h4>
                                        <p className={`${raleway.className} 
                                         font-normal text-white relative z-60 leading-[150%] text-[16px]`}>Tell us more about you and we’ll contact you soon.</p>
                                    </div>
                                    <div>
                                        <form action="">
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[60px]">
                                                <div className="col-span-2
                                                 flex flex-col relative z-50">
                                                    <label htmlFor="" className="relative z-50 text-white">Name</label>
                                                    <input type="text"
                                                     className="outline-none border-b-1 text-white relative z-50 border-white"/>

                                                </div>
                                                <div className="c
                                                 flex flex-col relative z-50">
                                                    <label htmlFor="" className="relative z-50 text-white">Email</label>
                                                    <input type="email"
                                                     className="outline-none border-b-1 text-white relative z-50 border-white"/>

                                                </div>
                                                <div className="
                                                 flex flex-col relative z-50">
                                                    <label htmlFor="" className="relative z-50 text-white">Phone Number</label>
                                                    <input type="tel"
                                                     className="outline-none border-b-1 relative text-white z-50 border-white"/>

                                                </div>

                                                 <div className=" col-span-2 mt-[20px]
                                                 flex flex-col relative z-50">
                                                    <label htmlFor="" className="relative z-50 text-white">Phone Number</label>
                                                    <input type="tel"
                                                     className="outline-none border-b-1 relative z-50 text-white border-white"/>

                                                </div>
                                                <div className="flex justify-end col-span-2 relative">
                                                    <input type="submit" className="relative 
                                                    bg-[#B31217] text-white z-50 pl-[49.5px] pr-[56px]
                                                    py-[11.5px] rounded-2xl"/>
                                                    <img src="" alt="" />
                                                    <div className="w-[18px] h-[7.5px] absolute z-50
                                                     right-[20px] top-[22px]">
                                                        <img src="https://i.ibb.co/39fLGPJY/Vector-1.png"
                                                        className="w-full h-full relative z-50" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="w-[494px] h-[746px] bg-[url('https://i.ibb.co/kVz0B0TR/tree1.png')]
                    relative bg-[length:500px_500px] z-20   bg-no-repeat bg-center">
                        <div className="absolute w-full h-full rounded-r-2xl opacity-80 bg-[#F7E7E8]">
                            <div className="flex  flex-col justify-center min-h-screen">
                            <div className="flex flex-col gap-[60px] px-[60px]">
                                <div className="flex flex-col gap-[20px]">
                                    <h3 className={`${poppins.className} text-[24px] leading-[150%]
                                     font-semibold text-black`}>Contact Information</h3>
                                    <ul className="space-y-[18px]">
                                        <li className={`${raleway.className} text-[18px]`}>Maui, Hawaii, USA</li>
                                        <li className={`${raleway.className} text-[18px]`}>Call us: +1234567890</li>
                                        <li className={`${raleway.className} text-[18px]`}>Whatsapp: +1234567890</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-[20px]">
                                    <h3 className={`${poppins.className} text-[24px]
                                    leading-[150%] font-semibold text-black`}>Follow us</h3>
                                    <div className="flex gap-[10px]">
                                        <div className="w-[9.29px] h-[20px]">
                                            <img src="https://i.ibb.co/r2ksKLw6/f11.png"
                                            className="w-full h-full" alt="" />
                                        </div>
                                        <div className="w-[20px] h-[20px]">
                                            <img src="https://i.ibb.co/rfMp27jC/l22.png" className="h-full h-full" alt="" />
                                        </div>
                                        <div className="w-[20px] h-[20px]">
                                            <img src="https://i.ibb.co/VcnY1Vtr/l44.png" className="w-full h-full" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-40 right-40">
                <div className="w-[193px]">
                    <img src="https://i.ibb.co/YTp2DKCS/Contact-Us.png"
                     alt="" className="w-full"/>
                </div>
            </div>
        </section>
    )
}

export default Contact_form;