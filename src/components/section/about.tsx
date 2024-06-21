import { DATA } from "@/constant";
import Icon from "@/lib/icon";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about-us"
      className="mx-auto flex flex-col gap-3  min-h-screen max-w-7xl px-5 py-10  lg:p-20"
    >
      <div className=" flex flex-col gap-3">
        <div>
          <p className="text-white bg-black rounded-full inline-block px-5 py-1">
            Introduction
          </p>
        </div>
        <h2 className="font-bold text-4xl">
          {"What Is"}
          <span className="ml-2 bg-gradient-to-tr from-[#D41117] to-[#C0181D] bg-clip-text text-transparent">
            Senshi No Matsuri
          </span>
          ?
        </h2>
        <p>
          {`Senshi no Matsuri adalah festival jejepangan terbesar di Purwokerto, menawarkan pengalaman budaya Jepang yang seru dan autentik. Festival ini menampilkan cosplay, pertunjukan budaya tradisional maupun budaya pop jepang, pameran kuliner yang bervariasi, dan workshop maupun pameran komunitas yang menarik. Dengan suasana penuh semangat, Senshi no Matsuri menarik ribuan pengunjung setiap tahun, menjadikannya perayaan yang paling ditunggu di Purwokerto. Nikmati keindahan budaya Jepang di Senshi no Matsuri!`}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row my-10">
        <div className="w-full lg:w-1/2 min-h-[50vh] grid grid-cols-2 p-0 lg:p-10 gap-2">
          {DATA.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 group hover:border-[#D61016] border p-5 rounded-md overflow-hidden"
            >
              <div className="flex flex-col xl:flex-row items-start xl:items-center gap-2">
                <div className="lg:bg-[#D61016] group-hover:bg-[#D61016]  transition-all ease-in-out duration-300 group-hover:text-white overflow-hidden w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] flex items-center justify-center rounded-full">
                  <Icon name={item.icon} size={24} />
                </div>
                <p className="font-bold text-3xl  lg:text-4xl">{item.total}+</p>
              </div>

              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <div className="w-full relative lg:w-1/2 min-h-[50vh] flex items-center justify-center ">
          <div className="w-full h-full">
            <Image alt="logo Senshi No Matsuri" src={"/images/Logo Large.png"} fill objectFit="contain" />
          </div>
          <div className="bg-black absolute w-full h-full -z-20 lg:rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}
