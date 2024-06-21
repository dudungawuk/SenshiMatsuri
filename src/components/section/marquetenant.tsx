import React from "react";
import Marquee from "react-fast-marquee";
import { cn } from "@/lib/utils";
import MarqueItemTenant from "../ui/marqueitemtenant";

const MarqueTenant = () => {
  return (
    <>
      <div className={cn(`max-container py-10`)}>
        <Marquee autoFill pauseOnHover pauseOnClick>
          <MarqueItemTenant />
        </Marquee>
      </div>
    </>
  );
};

export default MarqueTenant;
