import React from "react";
import blackdress from "../../public/blackdress.png";
import star from "../../public/star.svg";
import love from "../../public/love.svg";

export const Tophundredproduct = () => {
    return (
      <div class="w-[260px] h-[480px] shadow flex-col justify-start items-start inline-flex">
        <img
          class="self-stretch grow shrink basis-0 rounded-tl-lg rounded-tr-lg"
          src={blackdress}
        />
        <div class="self-stretch h-[153px] p-5 bg-white flex-col justify-start items-start gap-3 flex">
          <div class="self-stretch h-11 justify-start items-center gap-5 flex">
            <div class="grow shrink basis-0 flex-col justify-center items-start gap-1 inline-flex">
              <div class="text-neutral-800 text-[14p6] font-bold  leading-tight">
                Mango
              </div>
              <div class="text-neutral-600 text-[11px] font-normal  leading-tight">
                Kimono & Caftan - Black - Regular fit
              </div>
            </div>
            <div>
                <img src={love} alt="" />
            </div>
          </div>
          <div class="self-stretch h-[25px] justify-start items-center gap-3 inline-flex">
            <div class="justify-start items-center flex">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <div class="text-center text-neutral-600 text-xs font-normal font-['Lato'] leading-tight">
              (289)
            </div>
          </div>
          <div class="self-stretch h-5 justify-start items-center gap-3 inline-flex">
            <div class="text-orange-600 text-[17px] font-extrabold leading-tight">
              $228
            </div>
            <div class="text-neutral-400  font-normal  leading-tight">$290</div>
            <div class="text-orange-600 text-xs text-[14px] leading-tight">
              -10%
            </div>
          </div>
        </div>
      </div>
    );
}