import React from "react";
import Marque from "./marque";
import MarquePartner from "./marquePartner";
import MarqueTenant from "./marquetenant";
import SwiperComponent from "../ui/swiper";

export default function Testimonial() {
  return (
    <section
      id="testimonial"
      className="mx-auto flex flex-col gap-3 items-center min-h-screen max-w-7xl px-5 py-10 lg:p-20"
    >
      <div>
        <p className="text-white bg-[#000000] rounded-full inline-block px-5 py-1">Testimonials</p>
      </div>
      <h2 className="text-center font-bold text-4xl">Our Sponshorship</h2>
      <p className="text-center">
        {`Let’s Take a Look at Our Incredible Support From Our Sponshorship`}
      </p>
      <Marque />
      <h2 className="text-center font-bold text-4xl">Our Partnership</h2>
      <p className="text-center">
        {`Let’s Take a Look at Our Incredible Support From Our Community or Media Partnership`}
      </p>
      <MarquePartner/>
      <h2 className="text-center font-bold text-4xl">Our Tenant</h2>
      <p className="text-center">
        {`Let’s Take a Look at Our Incredible Tenant, Happy Shopping`}
      </p>
      <MarqueTenant/>
      <h2 className="text-center font-bold text-4xl">Our Guest</h2>
      <p className="text-center">
        {`Let’s Take a Look at Our Incredible Guest About Senshi No Matsuri`}
      </p>
      <SwiperComponent />
    </section>
  );
}
