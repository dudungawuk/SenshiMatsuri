import Image from "next/image";
import React from "react";

export default function MarqueItem() {
  return (
    <div className="w-full flex flex-row  items-center justify-between gap-5 px-2 ">
      <Image
        src={"/images/logos/Sponshorship/Honda_Logo.svg"}
        width={150}
        height={100}
        alt="honda logo"
        className="object-contain "
      />
                  <Image
        src={"/images/logos/Sponshorship/DepoPelita.jpg"}
        width={150}
        height={100}
        alt="honda logo"
        className="object-contain "
      />
                        <Image
        src={"/images/logos/Sponshorship/WA.png"}
        width={150}
        height={100}
        alt="honda logo"
        className="object-contain "
      />
                  <Image
        src={"/images/logos/Sponshorship/LevelUp.png"}
        width={150}
        height={100}
        alt="honda logo"
        className="object-contain "
      />
                 
    </div>
  );
}
