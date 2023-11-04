import React from "react";
import productbag from "../../public/productbag.png";
import star from "../../public/star.svg";
import reebokshoe from "../../public/reebokshoe.png";

export const Products = () => {
  return (
    <section className=" min-w-[200px] h-[380px] border border-none p-1 shadow-lg rounded-xl m-2  md:max-lg:min-w-[350px] lg:w-[250px]">
      <div className="md:max-lg:flex md:max-lg:text-center md:max-lg:w-[100%] md:max-lg:justify-center mt-[20px]">
        <h2 className="text-neutral-400 font-bold text-center mt-2">
          Deal of the Day
        </h2>

        <div className="">
          <p className=" tracking-widest break-words font-bold text-xl text-center">
            12:43:12
          </p>
          <div className="w-[150px] justify-between text-center flex m-auto pl-8 pr-8 pt-1 text-xs mb-4 ">
            <p className="md:pr-[12px]">hour</p>
            <p>min</p>
            <p className="md:pl-[12px]">sec</p>
          </div>
        </div>
      </div>

      <div className="md:block md:m-auto md:text-center md:w-[100%] ">
        <img src={productbag} alt="" className="md:flex md:m-auto  " />
      </div>
      <div className=" mt-[18px] flex flex-col gap-1 md:max-lg:max-h-[150px] md:max-lg:h-[100px]  md:max-lg:justify-center md:max-lg:pl-[10px]  max-w-[85%] md:max-lg:max-w-none mx-auto  ">
        {/* first row */}
        <div className="flex items-start md:max-lg:items-center justify-center md:max-lg:justify-between flex-col md:max-lg:flex-row ">
          <p className="font-bold text-xl lg:text-[17px] ">Tonny Black</p>
          <p className="text-sm  mt-1  md:max-lg:mr-[20px]  ">
            Shoulder bag-White-Plain
          </p>
        </div>

        {/* second row */}
        <div className=" items-center justify-between sm:max-md:block md:max-lg:flex ">
          <div className="flex">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <p className="no-of-people-who-rated"> (54) </p>
          </div>

          <div className=" flex justify-between md:max-lg:mr-[20px]">
            <p className="text-red-500 font-bold text-[13px] md:mr-[10px]">
              $69.99
            </p>
            <p className="text-[13px]">$129.99</p>
            <p className="bg-red-500 text-white text-[10px] pl-1 pr-1 h-[20px] py-px md:ml-[10px]">
              -40%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// export const Product2 = () => {
//   return (
//     <section className="w-[200px] h-[380px] border border-none p-1 shadow-lg rounded-xl m-2  md:w-[350px] ">
//       <div className="md:flex md:text-center md:w-[100%] md:justify-center mt-[20px] ">
//         <h2 className="text-neutral-400 font-bold text-center mt-2">
//           Deal of the Day
//         </h2>

//         <div>
//           <p className="tracking-widest break-words font-bold text-xl text-center">
//             02:05:32
//           </p>
//           <div className="hours text-center flex justify-around pl-8 pr-8 pt-1 text-xs mb-4 ">
//             <p className="md:pr-[12px]">hour</p>
//             <p>min</p>
//             <p className="md:pl-[12px]">sec</p>
//           </div>
//         </div>
//       </div>
//       <div>
//         <div className="md:block md:m-[auto] md:text-center md:w-[100%] ">
//           <img src={reebokshoe} alt="" className="md:flex md:m-auto  " />
//         </div>
//         <p className="font-bold text-xl ml-3 mt-6 md:relative md:top-[18px] ">
//           Rebook
//         </p>
//         <p className="text-sm ml-3 mt-1 md:text-right md:mr-[20px] md:relative md:bottom-[10px]">
//           Women’s Powder sneakers
//         </p>
//         <div className="flex ml-3 ">
//           <img src={star} alt="" />
//           <img src={star} alt="" />
//           <img src={star} alt="" />
//           <img src={star} alt="" />
//           <p className="no-of-people-who-rated"> (54) </p>
//         </div>
//       </div>
//       <div className=" flex justify-around items-center mb-2 md:justify-end md:mr-[20px] md:relative md:bottom-[23px] ">
//         <p className="text-red-500 font-bold text-[15px] md:mr-[10px]">
//           $112.02
//         </p>
//         <p className="text-[15px]">$129.99</p>
//         <p className="bg-red-500 text-white mr-[5px] text-xs pl-1 pr-2 h-5 pb-4 py-px md:ml-[10px]">
//           -40%
//         </p>
//       </div>
//     </section>
//   );
// };
