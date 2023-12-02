import Layout from "../components/shared/Layout";
import { Headercard } from "./Headercard-mb";
import { Tabletheadercard } from "../pages/Tabletheadercard"
import { Products } from "./Productstobuy";
import { Laptopheader } from "./Tabletheadercard"
import { Newarrivals } from "./Trendingnewarrivals";
import { Tophundredproduct } from "./Tophundredproduct";


const Home = () => {
  return (
    <div>
      <Layout>
        <Headercard />
        <Tabletheadercard />
        <Laptopheader />
        <div className="flex justify-between mt-5 mb-3 md:max-lg:mx-[40px] md:max-lg:mt-[40px] ">
          <p className="font-bold md:max-lg:text-[24px]"> Flash Sales</p>
          <a href="">
            <p className="text-xs md:max-lg:text-[15px]">View all</p>
          </a>
        </div>
        <div className="flex overflow-scroll overflow-x-auto ">
          <Products />
          <Products />
          <Products />
          <Products />
    
        </div>
        <div className="flex justify-between items-center mt-[20px] mb-[10px] p-[10px] ">
          <p className="font-bold text-[20px] ">trending must have</p>
          <p className="text-[14px]"> View all</p>
        </div>
        <div className="md:max-lg:w-100% sm:max-md:flex md:max-lg:block md:max-lg:overflow-scroll sm:max-md:overflow-scroll lg:flex">
          <Newarrivals />
          <Newarrivals />
          <Newarrivals />
        </div>
        <div className="flex justify-between mt-[40px] mb-[15px] items-center px-[50px]">
          <p className="font-bold text-[25px]  ">Top 100</p>
          <p>View all</p>
        </div>
        <div className=" overflow-scroll overflow-x-auto flex md:max-lg:col flex-row basis-1 lg:w-[100%] w-[100%] m-auto lg:m-auto">
          <Tophundredproduct />
          <Tophundredproduct />
          <Tophundredproduct />
          <Tophundredproduct />
        </div>
      </Layout>
    </div>

  );
};

export default Home;
