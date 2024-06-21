import Image from "next/image";

export default function Hero() {
  return (
    <div id="home" className="relative w-full h-screen flex flex-col justify-center items-center ">
      <Image
        alt="hero"
        src={"/images/Background Lanscape.png"}
        fill
        className="object-cover"
      />
      <div className="absolute w-full lg:w-1/2 h-[150px] sm:h-[200px] md:blur-md hover:blur-none ease-in-out transition-all duration-500 cursor-pointe">
        <div>
          <Image alt="hero" src={"/images/senshi-1.png"} fill className="object-contain" />
        </div>
      </div>
    </div>
  );
}
