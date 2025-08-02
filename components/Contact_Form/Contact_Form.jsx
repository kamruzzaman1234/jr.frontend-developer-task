"use client";

import { useState } from "react";
import { Cinzel_Decorative, Raleway, Poppins } from "next/font/google";

const cinzel_decorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700", "800"],
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const Contact_form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone1: "",
    phone2: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://contactformapi.com/send", { // 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone1: "", phone2: "" });
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error("API error:", error);
      alert("Network error!");
    }
  };

  return (
    <section className="py-[60px] relative">
      <div className="container px-[30px] lg:px-[0px]">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-[826px] h-[746px] contact-bg">
            <div className="bg-overly">
              <div className="px-[60px] py-[120px]">
                <div className="flex flex-col gap-[60px]">
                  <div className="relative z-60">
                    <h4 className={`${raleway.className} text-[24px] text-white font-semibold`}>
                      Just Say Hi !
                    </h4>
                    <p className={`${raleway.className} text-[16px] text-white`}>
                      Tell us more about you and we’ll contact you soon.
                    </p>
                  </div>
                  <div>
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
                        <div className="col-span-2 flex flex-col">
                          <label className="text-white">Name</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="outline-none border-b-1 text-white border-white bg-transparent"
                            required
                          />
                        </div>
                        <div className="flex flex-col">
                          <label className="text-white">Email</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="outline-none border-b-1 text-white border-white bg-transparent"
                            required
                          />
                        </div>
                        <div className="flex flex-col">
                          <label className="text-white">Phone Number</label>
                          <input
                            type="tel"
                            name="phone1"
                            value={formData.phone1}
                            onChange={handleChange}
                            className="outline-none border-b-1 text-white border-white bg-transparent"
                          />
                        </div>
                        <div className="col-span-2 mt-[20px] flex flex-col">
                          <label className="text-white">Type your message here</label>
                          <input
                            type="text"
                            name="phone2"
                            value={formData.phone2}
                            onChange={handleChange}
                            className="outline-none border-b-1 text-white border-white bg-transparent"
                          />
                        </div>
                        <div className="flex justify-end col-span-2 relative">
                          <button type="submit" className="bg-[#B31217] text-white pl-[49.5px] 
                          cursor-pointer pr-[56px] py-[11.5px] rounded-2xl relative z-50">
                            Send
                          </button>
                          <div className="w-[18px] h-[7.5px] absolute z-50 right-[20px] top-[22px]">
                            <img
                              src="https://i.ibb.co/39fLGPJY/Vector-1.png"
                              className="w-full h-full"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div> 
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[494px] h-[746px] bg-[url('https://i.ibb.co/kVz0B0TR/tree1.png')] relative bg-[length:500px_500px] z-20 bg-no-repeat bg-center">
            <div className="absolute w-full h-full rounded-r-2xl opacity-80 bg-[#F7E7E8]">
              <div className="flex flex-col justify-center min-h-screen">
                <div className="flex flex-col gap-[60px] px-[60px]">
                  <div className="flex flex-col gap-[20px]">
                    <h3 className={`${poppins.className} text-[24px] font-semibold text-black`}>
                      Contact Information
                    </h3>
                    <ul className="space-y-[18px]">
                      <li className={`${raleway.className} text-[18px]`}>Maui, Hawaii, USA</li>
                      <li className={`${raleway.className} text-[18px]`}>Call us: +1234567890</li>
                      <li className={`${raleway.className} text-[18px]`}>Whatsapp: +1234567890</li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-[20px]">
                    <h3 className={`${poppins.className} text-[24px] font-semibold text-black`}>
                      Follow us
                    </h3>
                    <div className="flex gap-[10px]">
                      <img src="https://i.ibb.co/r2ksKLw6/f11.png" className="w-[9.29px] h-[20px]" alt="fb" />
                      <img src="https://i.ibb.co/rfMp27jC/l22.png" className="w-[20px] h-[20px]" alt="linkedin" />
                      <img src="https://i.ibb.co/VcnY1Vtr/l44.png" className="w-[20px] h-[20px]" alt="insta" />
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
          <img src="https://i.ibb.co/YTp2DKCS/Contact-Us.png" alt="" className="w-full"/>
        </div>
      </div>
    </section>
  );
};

export default Contact_form;
