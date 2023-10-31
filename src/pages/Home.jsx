import React from "react";
import Layout from "../components/shared/Layout";
import { Headercard } from "./Headercard-mb";
import { Tabletheadercard } from "../pages/Tabletheadercard"
import { Products } from "./Productstobuy";
import { Product2 } from "./Productstobuy";
import { Laptopheader } from "./Tabletheadercard"
import { Newarrivals } from "./Trendingnewarrivals";
import { Tophundredproduct } from "./Tophundredproduct";

const Home = () => {
  return (
    <div class="m-3">
      <Layout>
        <Headercard />
        <Tabletheadercard />
        <Laptopheader />
        <div class="flex justify-between mt-3 mb-3">
          <p class="font-bold"> Flash Sales</p>
          <a href="">
            <p class="text-xs">View all</p>
          </a>
        </div>
        <div class="flex overflow-scroll overflow-x-auto custom-scrollbar-hidden">
          <Products />
          <Product2 />
        </div>
        <div class="flex justify-between items-center mt-[20px] mb-[10px] p-[10px] ">
          <p class="font-bold text-[20px] ">trending must have</p>
          <p class="text-[14px]"> View all</p>
        </div>
        <Newarrivals />
        <div class="flex justify-between mt-[40px] mb-[15px] items-center">
          <p class="font-bold text-[25px]  ">Top 100</p>
          <p>View all</p>
        </div>
        <Tophundredproduct />
      </Layout>
    </div>
  );
};

export default Home;
