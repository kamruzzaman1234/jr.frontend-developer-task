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

const Book_Form = () => {
  return (
    <section className="py-[60px]">
      <div className="container px-[30px] lg:px-[0px]">
        <div className="flex flex-col  md:flex-row lg:flex-row justify-between gap-[60px]">
          {/* Left Image Section */}
          <div className="relative">
            <div className="w-[468px] h-[514px] border-2 rounded-3xl border-[#B31217]"></div>
            <div className="w-[534px] h-[514px] absolute top-8 left-8">
              <img
                src="https://i.ibb.co/mFGm6sf1/Rectangle-401.png"
                className="w-full h-full object-cover rounded-3xl"
                alt=""
              />
            </div>
          </div>

          {/* Right Text & Form Section */}
         <div className="w-full lg:w-[700px]">
             <div className="flex flex-col gap-[60px]">
            {/* Title & Description */}
            <div className="flex flex-col gap-[20px]">
              <h3 className={`${cinzel_decorative.className} text-[32px]
               font-bold leading-[136%]`}>
                Reserve Your Table for an Authentic <br /> Sum Dim Sum Experience
              </h3>
              <p className={`${raleway.className} text-[16px]
              font-normal leading-[150%]`}>
                Don’t miss the chance to savor the finest flavors of authentic dim sum in a
                warm and inviting atmosphere. Whether it’s a special occasion, 
                a family gathering, or a cozy dinner for two, our handcrafted dishes
                and impeccable service make every moment memorable. Reserve your
                table now and let us take you on a culinary journey filled with tradition, 
                passion, and the joy of exceptional food. Your unforgettable dining experience awaits!
              </p>
            </div>

           
            <form className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
            
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border-b border-gray-500 focus:outline-none py-2 text-black placeholder:text-black"
                />
              </div>

              {/* Persons */}
              <div>
                <select className="w-full border-b border-gray-500 focus:outline-none py-2
                 text-black ">
                  <option>1 Person</option>
                  <option>2 Persons</option>
                  <option>3 Persons</option>
                  <option>4+ Persons</option>
                </select>
              </div>

              {/* Date */}
              <div>
                <select className="w-full border-b border-gray-500 focus:outline-none py-2 text-black 
                ">
                  <option>21-12-2024</option>
                  <option>22.12.2024</option>
                  <option>23.12.2024</option>
                  <option>24.12.2024</option>
                </select>
              </div>

              {/* Time */}
              <div>
                <select className="w-full border-b border-gray-500 focus:outline-none py-2 text-black 
                ">
                  <option>9:00 PM</option>
                  <option>10:00 PM</option>
                  <option>11:00 PM</option>
                  <option>12:00 PM</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 text-center mt-2">
                <button
                  type="submit"
                  className="bg-[#B31217] text-white px-[80px] py-[12px] rounded-md hover:bg-red-800 transition-all duration-300"
                >
                  Book Now
                </button>
              </div>
            </form>
          </div>
         </div>
        </div>
      </div>
    </section>
  );
};

export default Book_Form;
