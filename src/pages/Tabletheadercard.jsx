import React from "react";
import tabletheaderpics from "../../public/tabletheaderpics.png";

export const Tabletheadercard = () => {
  return (
    <>
      <div class="w-full flex h-20vh hidden sm:flex lg:hidden">
        <div class="w-1/2 lg:w-2/5">
          <img class="w-full h-full" src={tabletheaderpics} alt="" />
        </div>
        <div class="w-1/2 text-center leading-8 bg-blue-400 text-white">
          <h1 class="mb-8 text-2xl pt-12 font-bold md:py-20 md:pb-2 lg:text-4xl lg:py-40 lg:pb-0 ">
            KIMONOS, CAFTANS <br /> & PAREOS
          </h1>
          <p class="text-xl leading-10 pl-16 mb-4 pr-16">
            Poolside glam include From $4.99
          </p>
          <p
            class=" w-[170px] content-center items-center m-auto pl-[3px] pr-[3px] pt-[3px] pb-[3px]  text-[12px] border border-none mb-6 bg-blue-500"
            href="/"
          >
            SHOP NOW
          </p>
        </div>
      </div>
    </>
  );
};


export const Laptopheader = () => {
    return (
      <>
        <div class="w-[100%] flex h-20vh border border-red-600 hidden lg:flex ">
          <div class="w-[50%] lg:w-2/6">
            <img class="w-[100%] " src={tabletheaderpics} alt="" />
          </div>
          <div class="w-[70%] text-center leading-8 bg-blue-400 text-white border border-green-600">
            <h1 class="mb-8 mt-[20px] text-2xl pt-12 font-bold xl:text-4xl xl:pt-[100px]">
              KIMONOS, CAFTANS & PAREOS
            </h1>
            <p class="text-xl leading-10 pl-16 mb-4 pr-16">
              Poolside glam include From $4.99
            </p>
            <p
              class=" w-[170px] content-center items-center m-auto pl-4 pr-4 pt-[4px] pb-[4px]  text-[12px] border border-none mb-6 bg-blue-500"
              href="/"
            >
              SHOP NOW
            </p>
          </div>
        </div>
      </>
    );
}