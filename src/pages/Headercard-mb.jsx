import React from "react";
import Headercardimg from "../../public/headercardimg.png";
import secondheadercardimg from "../../public/secondheadercardimg.png";

export const Headercard = () => {
  return (
    <div class="sm:hidden">
      <section class="flex w-full">
        <div class="w-1/2 text-white bg-rose-700 text-left leading-[2] pl-[10px] pt-[25px]">
          <h1 class="font-bold text-xl leading-9 w-full">
            Never-Ending <br /> Summer
          </h1>
          <p>
            Throwback shirts & <br /> all-day dressed
          </p>
          <a class="underline" href="/">
            Explore all category
          </a>
        </div>
        <div class="w-1/2  ">
          <img src={Headercardimg} alt="" class="w-full h-[100%]" />
        </div>
      </section>

      <section class=" flex mt-2 w-full">
        <div class="w-1/2 text-white bg-sky-600 text-left leading-[2] pl-3 pt-5 ">
          <h1 class="font-bold text-xl leading-9 ">
            Best Lovin <br /> Summer
          </h1>
          <p>
            Bikini & Poolside glam
            <br /> include
          </p>
          <a class="underline" href="/">
            Explore all category
          </a>
        </div>
        <div class="w-1/2 ">
          <img src={secondheadercardimg} alt="" class="w-full h-full" />
        </div>
      </section>
    </div>
  );
};
