import React from "react";

function Button({ title, extraStyle, children }) {
  return (
    <button
      id="button"
      className={`w-full pt-[15px] pb-[16px] duration-300 bg-[#1da1f2] text-white rounded-[76px] font-semibold text-[17px] ${extraStyle}`}
    >
      {title}
      {children}
    </button>
  );
}

export default Button;
