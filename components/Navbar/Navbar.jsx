"use client";
import { Raleway } from "next/font/google";
import { Poppins } from "next/font/google";
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Choose as needed
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
            <div className="container">
                <div className="flex justify-between">
                    <div className="flex gap-[40px]">
                        <div className="flex gap-[4px] items-center justify-center">
                            <div className="w-[20px] h-[20px]">
                                <img src="https://i.ibb.co/gFSBNc2x/Frame.png"
                                className="w-full h-full object-cover" alt="" />
                            </div>
                            <div>
                                <h4 className={`${raleway.className} text-[12px]
                                font-normal text-white`}>Your Address Here</h4>
                            </div>
                        </div>
                        <div className="flex gap-[4px] items-center">
                            <div className="w-[20px] h-[20px]">
                                <img src="https://i.ibb.co/Pzjd4nVj/Frame-1.png"
                                className="w-full h-full object-cover" alt="" />
                            </div>
                            <div>
                                <h4 className={`${poppins.className} text-[12px]
                                font-normal text-white`}>+1234567890</h4>
                            </div>
                        </div>

                        <div className="flex gap-[4px] items-center">
                            <div className="w-[20px] h-[20px]">
                                <img src="https://i.ibb.co/cK6bkkcW/Frame-2.png"
                                className="w-full h-full object-cover" alt="" />
                            </div>
                            <div>
                                <h4 className={`${raleway.className} text-[12px]
                                font-normal text-white`}>example@example.com</h4>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-[20px]">
                        <div className="w-[9.29px] h-[20px]">
                            <img src="https://i.ibb.co/G4ymTss0/f1.png"
                            className="w-full h-full" alt="" />
                        </div>
                        <div className="w-[20px] h-[20px]">
                            <img src="https://i.ibb.co/yFj5SZzF/Group.png"
                            className="w-full h-full" alt="" />
                        </div>

                        <div className="w-[21.13px] h-[20px]">
                            <img src="https://i.ibb.co/pBFkV9Dn/Layer-1.png"
                            className="w-full h-full" alt="" />
                        </div>
                        <div className="w-[19.56px] h-[20px]">
                            <img src="https://i.ibb.co/G4cssGQK/Clip-path-group.png"
                            className="w-full h-full" alt="" />
                        </div>
                    </div>
                </div>    
            </div>
        </div>
        <div className="fixed w-full">
            <div className="container">

            </div>
        </div>
       </section> 
    )   
}

export default Navbar;