import { DATA } from "@/constant";
import Icon from "@/lib/icon";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
  const t = useTranslations("Index");
  return (
    <section
      id="about-us"
      className="mx-auto flex flex-col gap-3  min-h-screen max-w-7xl px-5 py-10  lg:p-20"
    >
      <div className=" flex flex-col gap-3">
        <div>
          <p className="text-sky-500 bg-sky-100 rounded-full inline-block px-5 py-1">
            {t("introduction")}
          </p>
        </div>
        <h2 className="font-bold text-4xl">
          {t("who")}
          <span className="ml-2 bg-gradient-to-tr from-sky-500 to-cyan-300 bg-clip-text text-transparent">
            Akita
          </span>
          ?
        </h2>
        <p>{t("description")}</p>
      </div>
      <div className="flex flex-col lg:flex-row my-10">
        <div className="w-full lg:w-1/2 min-h-[50vh] grid grid-cols-2 p-0 lg:p-10 gap-2">
          {DATA.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 group hover:border-sky-500 border p-5 rounded-md overflow-hidden"
            >
              <div className="flex flex-col xl:flex-row items-start xl:items-center gap-2">
                <div className="lg:bg-sky-100 group-hover:bg-sky-500  transition-all ease-in-out duration-300 group-hover:text-white text-sky-500  overflow-hidden w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] flex items-center justify-center rounded-full">
                  <Icon name={item.icon} size={24} />
                </div>
                <p className="font-bold text-3xl  lg:text-4xl text-sky-500">{item.total}+</p>
              </div>

              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <div className="w-full relative lg:w-1/2 min-h-[50vh] flex items-center justify-center ">
          <div className="w-full h-full">
            <Image alt="logo akita" src={"/images/akitul.png"} fill objectFit="contain" />
          </div>
          <Image
            alt="pattern"
            src={"/images/pattern/pattern-1.png"}
            fill
            className="absolute -z-10 object-cover dark:opacity-10 lg:rounded-lg  opacity-10"
          />
          <div className="bg-akita absolute w-full h-full -z-20 lg:rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}
