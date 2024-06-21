import Image from "next/image";
import React from "react";

export default function MarqueItemTenant() {
  return (
    <div className="w-full flex flex-row  items-center justify-between gap-5 px-2 ">
      <Image
        src={"/images/logos/Sponshorship/HokBen_new_logo.png"}
        width={150}
        height={100}
        alt="Hoka Bento logo"
        className="object-contain "
      />
       <Image
        src={"/images/logos/Sponshorship/Hokage.png"}
        width={150}
        height={100}
        alt="honda logo"
        className="object-contain "
      />
                  <Image
        src={"/images/logos/Sponshorship/Inviz.png"}
        width={150}
        height={100}
        alt="honda logo"
        className="object-contain "
      />
                  <Image
        src={"/images/logos/Sponshorship/Nakama.png"}
        width={150}
        height={100}
        alt="honda logo"
        className="object-contain "
      />

                  <Image
        src={"/images/logos/Sponshorship/Logo Cleo.png"}
        width={150}
        height={100}
        alt="honda logo"
        className="object-contain "
      />
                  <Image
        src={"/images/logos/Sponshorship/GL.png"}
        width={150}
        height={100}
        alt="honda logo"
        className="object-contain "
      />
    </div>
  );
}
