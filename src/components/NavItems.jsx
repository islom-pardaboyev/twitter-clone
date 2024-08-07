import React from "react";
import { NavLink } from "react-router-dom";

function NavItems({item}) {
  return (
    <li>
      <NavLink to={item.path} className={"flex items-center space-x-5"}>
        {item.icon}
        <span className="font-medium text-[18px] leading-[23.94px]">
          {item.title}
        </span>
      </NavLink>
    </li>
  );
}

export default NavItems;
