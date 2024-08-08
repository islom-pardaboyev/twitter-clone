import React from "react";
import { DarkLightModeBtn } from "../../assets/images/Icons";

function Home() {
  return (
    <div className="w-full flex">
      <div className="w-[70%] border-x border-gray">
        <div className="p-5 flex items-center sticky top-0 z-20 bg-white justify-between border-b border-gray">
          <p className="font-bold text-[24px] leading-[31.92px]">Profile</p>
          <DarkLightModeBtn />
        </div>
      </div>
      <div className="h-screen overflow-y-auto">
        another trend for you
      </div>
    </div>
  );
}
export default Home;
