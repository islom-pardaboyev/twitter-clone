import React, { useContext } from "react";
import Avatar from "../assets/images/avatar.svg";
import { Context } from "../context/context";

function InfoAcc() {
  const {setIsOpenModal} = useContext(Context);
  return (
    <div onClick={() => setIsOpenModal(true)} className="w-full cursor-pointer hover:bg-gray-300 p-2 z-30 rounded-md duration-300 flex items-center space-x-[10px] absolute bottom-[47px]">
      <img src={Avatar} alt="avatar" />
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col">
          <strong className="font-semibold capitalize leading-[21.28px] text-[16px]">
            {JSON.parse(window.localStorage.getItem("token")).login}
          </strong>
          <span className="font-normal leading-[21.28px] text-[16px] text-black/30">
            @{JSON.parse(window.localStorage.getItem("token")).login}
          </span>
        </div>
      </div>
      
    </div>
  );
}

export default InfoAcc;
