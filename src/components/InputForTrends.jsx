import React from "react";
import { SearchIcon } from "../assets/images/Icons";

function InputForTrends() {
  return (
    <div className="flex mt-5 bg-gray-20 w-full space-x-[20px] rounded-[31px] px-5 py-[15px]">
      <SearchIcon />
      <input className="bg-transparent w-full outline-none" type="text" placeholder="Search Twitter" />
    </div>
  );
}

export default InputForTrends;
