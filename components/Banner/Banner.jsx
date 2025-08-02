"use client"
import { Cinzel_Decorative, Raleway } from "next/font/google"
import Link from "next/link"

const cinzel_decorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
})

const raleway = Raleway({
    subsets:['latin'],
    weight:['300', '400', '700', '800'],
    display:'swap',
})

const Banner = () => {
  return (
    <section className="bg-img relative">
    {/* Navbar Area  */}
         <div className="py-[10px] sticky top-[-10]">
          <div className="container">
            <div className="navbar">
              <div className="navbar-start">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="text-white lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content
                   bg-black  lg:bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                      <li><Link href="" className={`${raleway.className} font-bold 
                  leading-[150%] text-white text-[16px]`}>Home</Link></li>
                  <li><Link href="" className={`${raleway.className} font- normal
                  leading-[150%] text-[#ffffff] text-[16px]`}>About</Link></li>
                  <li><Link href="" className={`${raleway.className} font- normal
                  leading-[150%] text-[#ffffff] text-[16px]`}>Menu & Locations</Link></li>
                  <li><Link href="" className={`${raleway.className} font- normal
                  leading-[150%] text-[#ffffff] text-[16px]`}>Reservation</Link></li>
                  <li><Link href="" className={`${raleway.className} font- normal
                  leading-[150%] text-[#ffffff] text-[16px]`}>Merchandise</Link></li>
                  <li><Link href="" className={`${raleway.className} font- normal
                  leading-[150%] text-[#ffffff] text-[16px]`}>Career</Link></li>
                  <li><Link href="" className={`${raleway.className} font- normal
                  leading-[150%] text-[#ffffff] text-[16px]`}>Contact</Link></li>
                  </ul>
                </div>
                <Link href="/" className="w-[148px] h-[50px]">
                  <img src="https://i.ibb.co/YFKjmg1p/logo.png" className="w-full h-full" alt="logo" />
                </Link>
              </div>
        
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-[40px]">
                  <li><Link href="" className={`${raleway.className} font-bold 
                  leading-[150%] text-white text-[16px]`}>Home</Link></li>
                  <li><Link href="" className={`${raleway.className} font- normal
                  leading-[150%] text-[#ffffff] text-[16px]`}>About</Link></li>
                  <li><Link href="" className={`${raleway.className} font- normal
                  leading-[150%] text-[#ffffff] text-[16px]`}>Menu & Locations</Link></li>
                  <li><Link href="" className={`${raleway.className} font- normal
                  leading-[150%] text-[#ffffff] text-[16px]`}>Reservation</Link></li>
                  <li><Link href="" className={`${raleway.className} font- normal
                  leading-[150%] text-[#ffffff] text-[16px]`}>Merchandise</Link></li>
                  <li><Link href="" className={`${raleway.className} font- normal
                  leading-[150%] text-[#ffffff] text-[16px]`}>Career</Link></li>
                  <li><Link href="" className={`${raleway.className} font- normal
                  leading-[150%] text-[#ffffff] text-[16px]`}>Contact</Link></li>

                  

                  
                </ul>
              </div>
        
              <div className="navbar-end">
                <a className={`${raleway.className} bg-[#999999] py-[10px]
                font-semibold px-[20px] rounded-lg leading-[150%] text-white`} >Boowk a Table</a>
              </div>
            </div>
          </div>
        </div>
{/* Hero Banner Area */}
     <div className="py-[130px] md:py-[180px] lg:py-[236px] ">
             <div className="container px-[30px] lg:px-[0]">
        <div className="flex flex-col">
          <div className="flex flex-col gap-[20px]">
            <div className="max-w-[1320px] w-full mx-auto">
              <h1
                className={`${cinzel_decorative.className} font-bold text-4xl lg:text-6xl 
                text-center leading-[136%] text-white`}
              >
                Welcome to Sum Dim Sum – Where Every Bite Tells a Story
              </h1>
            </div>
            <div className="max-w-[850px] w-full mx-auto">
                <p className={`${raleway.className} text-[16px] 
                 leading-[150%] font-normal text-center
                  text-white`}>At Sum Dim Sum, we bring families and friends together over the timeless tradition of
                     sharing delectable dishes. From our expertly crafted dim sum to our vibrant ambiance,
                      every moment here is a celebration of taste and togetherness. Explore our menu,
                     reserve your table, or order your favorites online today!</p>
            </div>
          </div>
          <div className="flex justify-center mt-[60px]">
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
     <div className="absolute bottom-[20px] right-[20px] md:
     lg:bottom-[70px] lg:right-[80px]"> 
       <div  className="w-[174px] 
       h-[174px] ">
           <img src="https://i.ibb.co/JFzY4QvY/link-intra.png"
        className="w-full h-full" alt="" />
       </div>
     </div>
    </section>
  )
}

export default Banner
