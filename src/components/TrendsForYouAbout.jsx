import React from "react";
import { SettingsIcon } from "../assets/images/Icons";
import TrendsForYouAboutCart from "./TrendsForYouAboutCart";
import { Link } from "react-router-dom";

function TrendsForYouAbout() {
  return (
    <div className="relative">
      <div className="mt-[20px] w-full pt-[20px] pb-[30px] flex flex-col space-y-[20px] dark:bg-black rounded-[10px] bg-gray-20 border border-transparent dark:border-slate-500">
        <h1 className="leading-[31.92px] dark:text-white pl-[15px] mb-[20px] font-bold text-[24px]">
          Trends for you
        </h1>
        <div className="flex flex-col gap-[15px]">
          <TrendsForYouAboutCart />
          <TrendsForYouAboutCart />
          <TrendsForYouAboutCart />
          <TrendsForYouAboutCart />
          <Link to={'/'} className="pl-[15px] text-blue">Show More</Link>
        </div>
      </div>
      <button className="dark:text-white absolute top-6 right-[20px]">
        <SettingsIcon />
      </button>
    </div>
  );
}

export default TrendsForYouAbout;
