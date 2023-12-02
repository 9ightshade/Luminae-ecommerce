import blackdress from "../../public/blackdress.png";
import blackdresstwo from "../../public/blackdress2.png";
import star from "../../public/star.svg";
import love from "../../public/love.svg";

export const Tophundredproduct = () => {
    return (
      <div className=" min-w-[220px]  sm:max-md:block border-none p-1 shadow-lg rounded-xl m-2 lg:w-[250px]   flex-col justify-start items-start inline-flex md:max-lg:min-w-[380px] border md:max-lg:mx-[15px] md:max-lg:my-[40px] lg:mx-[10px] ">
        <div>
          <img
            className="self-stretch grow shrink basis-0 rounded-tl-lg rounded-tr-lg block md:hidden lg:hidden"
            src={blackdress}
          />
          <img
            className="self-stretch grow shrink basis-0 rounded-tl-lg rounded-tr-lg hidden md:block lg:hidden "
            src={blackdresstwo}
          />
          <img
            className="self-stretch grow shrink basis-0 rounded-tl-lg rounded-tr-lg hidden md:hidden lg:block "
            src={blackdresstwo}
          />
        </div>
        <div className="self-stretch h-[153px] p-5 bg-white flex-col justify-start items-start gap-3 flex">
          <div className="self-stretch h-11 justify-start items-center gap-5 flex">
            <div className="grow shrink basis-0 flex-col justify-center items-start gap-1 inline-flex">
              <div className="text-neutral-800 text-[14p6] font-bold  leading-tight">
                Mango
              </div>
              <div className="text-neutral-600 text-[11px] font-normal  leading-tight">
                Kimono & Caftan - Black - Regular fit
              </div>
            </div>
            <div>
              <img src={love} alt="" />
            </div>
          </div>
          <div className="self-stretch h-[25px] justify-start items-center gap-3 inline-flex">
            <div className="justify-start items-center flex">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <div className="text-center text-neutral-600 text-xs font-normal font-['Lato'] leading-tight">
              (289)
            </div>
          </div>
          <div className="self-stretch h-5 justify-start items-center gap-3 inline-flex">
            <div className="text-orange-600 text-[17px] font-extrabold leading-tight">
              $228
            </div>
            <div className="text-neutral-400  font-normal  leading-tight">
              $290
            </div>
            <div className="text-orange-600 text-xs text-[14px] leading-tight">
              -10%
            </div>
          </div>
        </div>
      </div>
    );
}