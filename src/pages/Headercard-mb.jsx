import React from "react";
import Headercardimg from "../../public/headercardimg.png";
import secondheadercardimg from "../../public/secondheadercardimg.png";

export const Headercard = () => {
  return (
    <div className="sm:hidden">
      <section className="flex w-full">
        <div className="w-1/2 text-white bg-rose-700 text-left leading-[2] pl-[10px]  flex items-center justify-center">
          <div className="w-[250px] "> 
            <h1 className="font-bold text-xl leading-9 w-full xmd:text-[29px] xxmd:text-[35px] ">
              Never-Ending <br /> Summer
            </h1>
            <p className="xmd:text-[23px] xmd:mt-[20px] xxmd:mb-[20px] xxmd:text-[29px]">
              Throwback shirts & <br /> all-day dressed
            </p>
            <a className="underline xxmd:text-[20px] " href="/">
              Explore all category
            </a>
          </div>
        </div>
        <div className="w-1/2  ">
          <img src={Headercardimg} alt="" className="w-full h-[100%]" />
        </div>
      </section>

      <section className=" flex mt-2 w-full">
        <div className="w-1/2 text-white bg-sky-600 text-left leading-[2] pl-3 pt-5 ">
          <h1 className="font-bold text-xl leading-9 ">
            Best Lovin <br /> Summer
          </h1>
          <p>
            Bikini & Poolside glam
            <br /> include
          </p>
          <a className="underline" href="/">
            Explore all category
          </a>
        </div>
        <div className="w-1/2 ">
          <img src={secondheadercardimg} alt="" className="w-full h-full" />
        </div>
      </section>
    </div>
  );
};
