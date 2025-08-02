"use client";

import { Cinzel_Decorative,Raleway, Poppins } from "next/font/google";

const cinzel_decorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    display:"swap"
})

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const Footer = ()=>{
    return(
        <section className="pt-[60px] pb-[30px]">
            <div className="container">
                <div className="border-t-1 border-b-1 border-[#B31217]">
                    <div className="flex justify-between py-[60px]">
                        <div className="flex flex-col gap-[30px]">   
                            <h3 className={`${cinzel_decorative.className} text-[24px] 
                            font-bold leading-[50%]`}>Contact</h3>
                            <div className="flex flex-col gap-[20px]">
                                <div className="flex gap-[6px]">
                                    <div className="w-[24px] h-[24px]">
                                        <img src="https://i.ibb.co/T6zRbGh/c1.png" className="w-full h-full" alt="" />
                                    </div>
                                    <h5 className={`${poppins.className}
                                    text-[16px] font-light leading-[150%]`}>+1234567890</h5>
                                </div>
                                <div className="flex gap-[6px]">
                                    <div className="w-[24px] h-[24px]">
                                        <img src="https://i.ibb.co/rKFhT1z0/m1.png" className="w-full h-full" alt="" />
                                    </div>
                                    <h5 className={`${poppins.className}
                                    text-[16px] font-light leading-[150%]`}>Your Address Here</h5>
                                </div>
                                <div className="flex gap-[6px]">
                                    <div className="w-[24px] h-[24px]">
                                        <img src="https://i.ibb.co/sd5Fv3w1/e1.png" className="w-full h-full" alt="" />
                                    </div>
                                    <h5 className={`${poppins.className}
                                    text-[16px] font-light leading-[150%]`}>example@example.com</h5>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[40px]">
                            <div className="w-[296px]">
                                <img src="https://i.ibb.co/DgbRsQf5/footer-logo.png"
                                className="w-full h-full" alt="" />
                            </div>
                            <div>
                                <div className="flex justify-center gap-[20px] ">
                        <div className="w-[9.29px] h-[17px] md:h-[17px] lg:w-[9.29px] lg:h-[24px]">
                            <img src="https://i.ibb.co/B2c71qZv/Vector-4.png"
                            className="w-full h-full" alt="" />
                        </div>
                        <div className="w-[17px] h-[17px] md:w-[22px] md:h-[22px] lg:w-[24px] lg:h-[24px]">
                            <img src="https://i.ibb.co/93nx7twV/Group-1.png"
                            className="w-full h-full" alt="" />
                        </div>

                        <div className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] lg:w-[24px] lg:h-[24px]">
                            <img src="https://i.ibb.co/Q3WTZvjv/Layer-1-4.png"
                            className="w-full h-full" alt="" />
                        </div>
                        <div className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] lg:w-[24px] lg:h-[24px]">
                            <img src="https://i.ibb.co/VcnY1Vtr/l44.png"
                            className="w-full h-full" alt="" />
                        </div>
                    </div>
                            </div>
                        </div>
                        <div>
                            <ul className="text-right space-y-[20px]">
                                <li className={`${raleway.className} text-[18px] font-normal 
                                leading-[150%]`}>Home</li>
                                <li className={`${raleway.className} text-[18px] font-normal 
                                leading-[150%]`}>About Us</li>
                                <li className={`${raleway.className} text-[18px] font-normal 
                                leading-[150%]`}>Privacy Policy</li>
                                <li className={`${raleway.className} text-[18px] font-normal 
                                leading-[150%]`}>Terms & Conditions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center ">
                <div className="flex items-center mt-[40px]">
                    <h5>Copyright 2024</h5>
                    <div className="w-[16px] h-[16px]">
                        <img src="https://i.ibb.co/d44yHh9H/svg839.png" 
                 className="w-full h-full object-cover" alt="" /> 
                    </div>
                    <h5>SumDimSum</h5>
                </div>
                
            </div>
        </section>
    )
}

export default Footer;