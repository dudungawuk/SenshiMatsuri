import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Image from "next/image";

export default function TabsGallery() {
  return (
    <Tabs
      defaultValue="first"
      className="w-full flex items-center justify-center flex-col overflow-hidden"
    >
      <TabsList>
        <TabsTrigger value="first">Senshi Matsuri 2022</TabsTrigger>
        <TabsTrigger value="second">Senshi Matsuri 2023</TabsTrigger>
      </TabsList>
      <TabsContent value="first" className="w-full flex flex-col md:flex-row gap-2 ">
        <div className="logos w-full md:w-1/3 p-2 flex flex-col items-center h-screen bg-slate-100 dark:bg-slate-500">
          <div className="slide-up">
            <Image
              alt="gallery senshi"
              src={"/images/2022/2022-1.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2022/2022-2.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2022/2022-3.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
                        <Image
              alt="gallery senshi"
              src={"/images/2022/2022-7.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
          </div>
          <div className="slide-up">
            <Image
              alt="gallery senshi"
              src={"/images/2022/2022-4.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2022/2022-5.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2022/2022-6.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
                        <Image
              alt="gallery senshi"
              src={"/images/2022/2022-7.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            
          </div>
        </div>
        <div className="logos w-full md:w-1/3 p-2 flex flex-col items-center h-screen bg-slate-100 dark:bg-slate-500">
          <div className="slide-down">
            <Image
              alt="gallery senshi"
              src={"/images/2022/2022-7.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2022/2022-8.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2022/2022-9.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
              <Image
              alt="gallery senshi"
              src={"/images/2022/2022-10.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
          </div>
          <div className="slide-down">
          <Image
              alt="gallery senshi"
              src={"/images/2022/2022-1.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2022/2022-2.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2022/2022-3.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2022/2022-4.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
          </div>
        </div>
        <div className="logos w-full  md:w-1/3 p-2 flex flex-col items-center h-screen bg-slate-100 dark:bg-slate-500">
          <div className="slide-up">
          <Image
              alt="gallery senshi"
              src={"/images/2022/2022-5.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2022/2022-6.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2022/2022-7.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2022/2022-8.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2022/2022-9.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
          </div>
          <div className="slide-up">
          <Image
              alt="gallery senshi"
              src={"/images/2022/2022-10.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2022/2022-1.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2022/2022-2.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2022/2022-3.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2022/2022-4.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
          </div>
        </div>
      </TabsContent>
      <TabsContent value="second" className="w-full flex flex-col md:flex-row gap-2 ">
        <div className="logos w-full md:w-1/3 p-2 flex flex-col items-center h-screen bg-slate-100 dark:bg-slate-500">
          <div className="slide-down">
          <Image
              alt="gallery senshi"
              src={"/images/2023/2023-1.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2023/2023-2.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2023/2023-3.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2023/2023-8.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2023/2023-9.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
          </div>
          <div className="slide-down">
          <Image
              alt="gallery senshi"
              src={"/images/2023/2023-10.png"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2023/2023-11.jpg"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2023/2023-12.jpg"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2023/2023-1.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2023/2023-2.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
          </div>
        </div>
        <div className="logos w-full md:w-1/3 p-2 flex flex-col items-center h-screen bg-slate-100 dark:bg-slate-500">
          <div className="slide-up">
          <Image
              alt="gallery senshi"
              src={"/images/2023/2023-3.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2023/2023-4.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2023/2023-5.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2023/2023-6.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2023/2023-7.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
          </div>
          <div className="slide-up">
          <Image
              alt="gallery senshi"
              src={"/images/2023/2023-8.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2023/2023-9.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2023/2023-10.png"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2023/2023-11.jpg"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2023/2023-12.jpg"}
              className="object-contain"
              width={350}
              height={100}
            />
          </div>
        </div>
        <div className="logos w-full md:w-1/3 p-2 flex flex-col items-center h-screen bg-slate-100 dark:bg-slate-500">
          <div className="slide-down">
          <Image
              alt="gallery senshi"
              src={"/images/2023/2023-1.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2023/2023-2.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2023/2023-3.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2023/2023-4.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2023/2023-5.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
          </div>
          <div className="slide-down">
          <Image
              alt="gallery senshi"
              src={"/images/2023/2023-6.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2023/2023-7.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2023/2023-8.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2023/2023-9.JPG"}
              className="object-contain"
              width={350}
              height={100}
            />
            <Image
              alt="gallery senshi"
              src={"/images/2023/2023-10.png"}
              className="object-contain"
              width={350}
              height={100}
            />
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
