import tabletheaderpics from "../../public/tabletheaderpics.png";


export const Tabletheadercard = () => {
  return (
    <>
      <div className="w-full h-20vh border-none hidden md:flex lg:hidden">
        <div className="w-1/2 lg:w-2/5">
          <img className="w-full h-full" src={tabletheaderpics} alt="" />
        </div>
        <div className="w-1/2 text-center border-none leading-8 bg-blue-400 text-white">
          <h1 className="mb-8 text-2xl pt-12 font-bold md:py-20 md:pb-2 lg:text-4xl lg:py-40 lg:pb-0 ">
            KIMONOS, CAFTANS <br /> & PAREOS
          </h1>
          <p className="text-xl leading-10 pl-16 mb-4 pr-16">
            Poolside glam include From $4.99
          </p>
          <a href="">
            <p
              className=" w-[170px] content-center items-center m-auto pl-[3px] pr-[3px] pt-[3px] pb-[3px]  text-[12px] border border-none mb-6 bg-blue-500"
              href="/"
            >
              SHOP NOW
            </p>
          </a>
        </div>
      </div>
    </>
  );
};


export const Laptopheader = () => {
    return (
      <>
        <div className="w-[100%] h-20vh border hidden lg:flex ">
          <div className="w-[50%] lg:w-2/6">
            <img className="w-[100%] " src={tabletheaderpics} alt="" />
          </div>
          <div className="w-[70%] text-center leading-8 bg-blue-400 text-white border border-green-600">
            <h1 className="mb-8 mt-[20px] text-2xl pt-12 font-bold xl:text-4xl xl:pt-[100px]">
              KIMONOS, CAFTANS & PAREOS
            </h1>
            <p className="text-xl leading-10 pl-16 mb-4 pr-16">
              Poolside glam include From $4.99
            </p>
            <p
              className=" w-[170px] content-center items-center m-auto pl-4 pr-4 pt-[4px] pb-[4px]  text-[12px] border border-none mb-6 bg-blue-500"
              href="/"
            >
              SHOP NOW
            </p>
          </div>
        </div>
      </>
    );
}