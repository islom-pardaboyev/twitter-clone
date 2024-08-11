import React from "react";
import { DarkLightModeBtn } from "../../assets/images/Icons";
import TrendsForYou from "../../components/TrendsForYou";
import DarkMode from "../../components/DarkMode";

function Home() {
  return (
    <div className="w-full flex">
      <div className="w-[70%] border-x border-gray">
      <div className="p-5 flex items-center sticky top-0 z-20 bg-white justify-between dark:bg-black duration-300 border-b border-gray dark:border-neutral-600">
          <p className="font-bold text-[24px] leading-[31.92px] dark:text-white duration-300">Notifications</p>
          <DarkMode/>
        </div>
      </div>
      <TrendsForYou />
    </div>
  );
}
export default Home;
