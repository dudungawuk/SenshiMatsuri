import React from "react";
import Marquee from "react-fast-marquee";
import { cn } from "@/lib/utils";
import MarqueItempartner from "../ui/marqueitempartner";

const MarquePartner = () => {
  return (
    <>
      <div className={cn(`max-container py-10`)}>
        <Marquee autoFill pauseOnHover pauseOnClick>
          <MarqueItempartner />
        </Marquee>
      </div>
    </>
  );
};

export default MarquePartner;
