import React from "react";
import { MoreBtn } from "../assets/images/Icons";

function TrendsForYouAboutCart() {
  return (
    <div className="flex items-start px-[15px] justify-between">
      <div className="flex flex-col">
        <span className="leading-[21.28px] text-[16px] text-neutral-500">
          Trending in Germany
        </span>
        <p className="font-semibold leading-[26.6px] mt-[2px] mb-[3px]">Revolution</p>
        <span className="leading-[21.28px] text-[16px] text-neutral-500">
        50.4K Tweets
        </span>
      </div>
      <button className="mt-[17px]">
        <MoreBtn />
      </button>
    </div>
  );
}

export default TrendsForYouAboutCart;
