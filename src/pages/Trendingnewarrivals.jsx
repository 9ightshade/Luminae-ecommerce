import newarrivalimg from "../../public/newarrivalimg.png";
import tabletimgforTMH from "../../public/tabletimgforTMH.png"

export const Newarrivals = () => {
    return (
      <div className="m-[15px] w-[357px] md:max-lg:w-[80%] md:max-lg:block md:max-lg:mx-auto lg:w-[380px]  flex-col justify-start items-center flex   ">
        <div className="w-[357px] relative bg-white border-none md:w-[100%] ">
          <div className="w-[100%] md:bg-right  md:flex md:m-auto">
            <img
              className="w-[100%] h-[auto] md:bg-cover md:bg-center md:bg-no-repeat object-cover block md:hidden "
              src={newarrivalimg}
            />
            <img
              className=" hidden md:max-lg:block object-cover bg-center "
              src={tabletimgforTMH}
              alt=""
            />
            <img
              className=" hidden md:max-lg:hidden w-full lg:block object-cover bg-center "
              src={newarrivalimg}
              alt=""
            />
          </div>
          <div className="p-2.5 left-0 top-0 absolute  ">
            <div className="px-1.5 py-[3px] bg-emerald-600 rounded  ">
              <div className="justify-center items-center gap-1 flex">
                <div className="w-4 h-4 relative"></div>
                <div className="text-white text-[12px] font-normal ">
                  New Arivals
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[357px] h-[93px] p-5 bg-neutral-800 rounded-bl-lg rounded-br-lg justify-between items-center inline-flex md:w-[100%]">
          <div className="grow shrink basis-0 h-[58px] flex-col justify-start items-start gap-1 inline-flex mb-[5px]">
            <div className=" text-white text-[16px] lg:text-[14px]  leading-[25px]">
              Cool & Sexy Calvin 
              Klein
            </div>
            <div className="opacity-90 text-stone-300  leading-tight">
              Dotted dress-Casual
            </div>
          </div>
          <div className="px-6 py-3 lg:py-[10px] lg:px-[10px]  rounded-lg border border-zinc-300 flex-col justify-center items-start gap-2.5 inline-flex">
            <div className="gap-2 flex items-center">
              <div className="text-white text-sm text-[16px] lg:text-[14px] ">
                $89
              </div>
              <div className="text-right text-white leading-tight lg:text-[14px] ">
                Shop Now
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}