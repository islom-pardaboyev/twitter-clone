import React from "react";
import { SearchIcon } from "../assets/images/Icons";

function InputForTrends() {
  return (
    <div className="flex mt-5 bg-gray-20 dark:bg-black/50 border border-transparent dark:border-white/50 w-full space-x-[20px] rounded-[31px] px-5 py-[15px]">
      <SearchIcon />
      <input className="bg-transparent dark:text-white w-full outline-none" type="text" placeholder="Search Twitter" />
    </div>
  );
}

export default InputForTrends;
