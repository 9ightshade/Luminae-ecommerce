import React from "react"; 
import productbag from "../../public/productbag.png"
import star from "../../public/star.svg"
import reebokshoe from "../../public/reebokshoe.png";

export const Products = () => {
  return (
    <section class=" w-[200px] h-[380px] border border-none p-1 shadow-lg rounded-xl m-2  md:w-[350px] ">
      <div class="md:flex md:text-center md:w-[100%] md:justify-center mt-[20px]">
        <h2 class="text-neutral-400 font-bold text-center mt-2">
          Deal of the Day
        </h2>

        <div>
          <p class="tracking-widest break-words font-bold text-xl text-center">
            12:43:12
          </p>
          <div class=" text-center flex justify-around pl-8 pr-8 pt-1 text-xs mb-4 ">
            <p class="md:pr-[12px]">hour</p>
            <p>min</p>
            <p class="md:pl-[12px]">sec</p> 
          </div>
        </div>
      </div>
      <div>
        <div class="md:block md:m-[auto] md:text-center md:w-[100%] ">
          <img src={productbag} alt="" class="md:flex md:m-auto  " />
        </div>
        <p class="font-bold text-xl ml-3 mt-6 md:relative md:top-[18px] ">
          Tonny Black
        </p>
        <p class="text-sm ml-3 mt-1 md:text-right md:mr-[20px] md:relative md:bottom-[10px]">
          Shoulder bag-White-Plain
        </p>
        <div class="flex ml-3 ">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <p className="no-of-people-who-rated"> (54) </p>
        </div>
      </div>
      <div class=" flex justify-around items-center mb-2 md:justify-end md:mr-[20px] md:relative md:bottom-[23px] ">
        <p class="text-red-500 font-bold text-[15px] md:mr-[10px]">$69.99</p>
        <p class="text-[15px]">$129.99</p>
        <p class="bg-red-500 text-white mr-[5px] text-xs pl-1 pr-2 h-5 pb-4 py-px md:ml-[10px]">
          -40%
        </p>
      </div>
    </section>
  );
};

export const Product2 = () => {
  return (
    <section class="w-[200px] h-[380px] border border-none p-1 shadow-lg rounded-xl m-2  md:w-[350px] ">
      <div class="md:flex md:text-center md:w-[100%] md:justify-center mt-[20px] ">
        <h2 class="text-neutral-400 font-bold text-center mt-2">
          Deal of the Day
        </h2>

        <div>
          <p class="tracking-widest break-words font-bold text-xl text-center">
            02:05:32
          </p>
          <div class="hours text-center flex justify-around pl-8 pr-8 pt-1 text-xs mb-4 ">
            <p class="md:pr-[12px]">hour</p>
            <p>min</p>
            <p class="md:pl-[12px]">sec</p>
          </div>
        </div>
      </div>
      <div>
        <div class="md:block md:m-[auto] md:text-center md:w-[100%] ">
          <img src={reebokshoe} alt="" class="md:flex md:m-auto  " />
        </div>
        <p class="font-bold text-xl ml-3 mt-6 md:relative md:top-[18px] ">
          Rebook
        </p>
        <p class="text-sm ml-3 mt-1 md:text-right md:mr-[20px] md:relative md:bottom-[10px]">
          Women’s Powder sneakers
        </p>
        <div class="flex ml-3 ">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <p className="no-of-people-who-rated"> (54) </p>
        </div>
      </div>
      <div class=" flex justify-around items-center mb-2 md:justify-end md:mr-[20px] md:relative md:bottom-[23px] ">
        <p class="text-red-500 font-bold text-[15px] md:mr-[10px]">$112.02</p>
        <p class="text-[15px]">$129.99</p>
        <p class="bg-red-500 text-white mr-[5px] text-xs pl-1 pr-2 h-5 pb-4 py-px md:ml-[10px]">
          -40%
        </p>
      </div>
    </section>
  );
};