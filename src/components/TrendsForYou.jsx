import React from "react";
import InputForTrends from "./InputForTrends";
import TrendsForYouAbout from "./TrendsForYouAbout";

function TrendsForYou({ children }) {
  return (
    <div className="w-fit sticky top-0 h-screen overflow-y-auto pl-[28px]">
      <InputForTrends />
      <TrendsForYouAbout />
      {children}
    </div>
  );
}

export default TrendsForYou;
