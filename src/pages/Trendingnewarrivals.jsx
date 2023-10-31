import React from "react";
import newarrivalimg from "../../public/newarrivalimg.png";

export const Newarrivals = () => {
    return (
      <div class="w-[357px] md:w-[100%] md flex-col justify-start items-center inline-flex   ">
        <div class="w-[357px] relative bg-white rounded-tl-lg rounded-tr-lg md:w-[100%] ">
          <div class="w-[100%] md:w-[100%]   md:flex md:m-auto ">
            <img class="w-[100%] h-[auto]  " src={newarrivalimg} />
          </div>
          <div class="p-2.5 left-0 top-0 absolute  ">
            <div class="px-1.5 py-[3px] bg-emerald-600 rounded  ">
              <div class="justify-center items-center gap-1 flex">
                <div class="w-4 h-4 relative"></div>
                <div class="text-white text-[12px] font-normal ">
                  New Arivals
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class=" w-[357px] h-[93px] p-5 bg-neutral-800 rounded-bl-lg rounded-br-lg justify-between items-center inline-flex md:w-[100%]">
          <div class="grow shrink basis-0 h-[58px] flex-col justify-start items-start gap-1 inline-flex">
            <div class=" text-white text-[16px]   leading-[25px]">
              Cool & Sexy Calvin <br />
              Klein
            </div>
            <div class="opacity-90 text-stone-300   leading-tight">
              Dotted dress-Casual
            </div>
          </div>
          <div class="px-6 py-3 rounded-lg border border-zinc-300 flex-col justify-center items-start gap-2.5 inline-flex">
            <div class="gap-2 flex items-center">
              <div class="text-white text-sm text-[16px]">$89</div>
              <div class="text-right text-white leading-tight">Shop Now</div>
            </div>
          </div>
        </div>
      </div>
    );
}