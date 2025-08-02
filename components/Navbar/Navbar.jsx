"use client";
import { Raleway } from "next/font/google";
import { Poppins } from "next/font/google";
import Link from "next/link";
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  display: 'swap',
});

const poppins = ({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    display: 'swap',
})

const Navbar = ()=>{
    return(
        
       <section>
         <div className="bg-black py-[10px]">
            <div className="container px-[30px] lg:px-[0]">
                <div className="flex flex-col md:flex-row lg:flex-row
                md:justify-between items-center gap-[16px] lg:gap-[0px] md:gap-[0px]
                 lg:justify-between">
                    <div className="flex gap-[20px] lg:gap-[40px]">
                        <div className="flex  lg:flex-row gap-[4px] items-center justify-center">
                            <div className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] lg:w-[20px] lg:h-[20px]">
                                <img src="https://i.ibb.co/gFSBNc2x/Frame.png"
                                className="w-full h-full object-cover" alt="" />
                            </div>
                            <div>
                                <h4 className={`${raleway.className} text-[12px]
                                font-normal text-white leading-[150%]`}>Your Address Here</h4>
                            </div>
                        </div>
                        <div className="flex gap-[4px] items-center">
                            <div className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] lg:w-[20px] lg:h-[20px]">
                                <img src="https://i.ibb.co/Pzjd4nVj/Frame-1.png"
                                className="w-full h-full object-cover" alt="" />
                            </div>
                            <div>
                                <h4 className={`${poppins.className} text-[12px]
                                font-normal text-white leading-[150%]`}>+1234567890</h4>
                            </div>
                        </div>

                        <div className="flex gap-[4px] items-center">
                            <div className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] lg:w-[20px] lg:h-[20px]">
                                <img src="https://i.ibb.co/cK6bkkcW/Frame-2.png"
                                className="w-full h-full object-cover" alt="" />
                            </div>
                            <div>
                                <h4 className={`${raleway.className} text-[12px]
                                font-normal text-white leading-[150%]`}>example@example.com</h4>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-[20px] ">
                        <div className="w-[9.29px] h-[17px] md:h-[17px] lg:w-[9.29px] lg:h-[20px]">
                            <img src="https://i.ibb.co/G4ymTss0/f1.png"
                            className="w-full h-full" alt="" />
                        </div>
                        <div className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] lg:w-[20px] lg:h-[20px]">
                            <img src="https://i.ibb.co/yFj5SZzF/Group.png"
                            className="w-full h-full" alt="" />
                        </div>

                        <div className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] lg:w-[20px] lg:h-[20px]">
                            <img src="https://i.ibb.co/pBFkV9Dn/Layer-1.png"
                            className="w-full h-full" alt="" />
                        </div>
                        <div className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] lg:w-[20px] lg:h-[20px]">
                            <img src="https://i.ibb.co/G4cssGQK/Clip-path-group.png"
                            className="w-full h-full" alt="" />
                        </div>
                    </div>
                </div>    
            </div>
        </div>
       </section> 
    )   
}

export default Navbar;