import React from "react";

function CustomModal({ setIsOpenModal, isOpenModal, children }) {
  return (
    <div
      id="wrapper"
      onClick={(e) => {
        e.target.id == "wrapper" ? setIsOpenModal(false) : "";
      }}
      className={`fixed top-0 left-0 z-40 duration-300 right-0 backdrop-blur-md bottom-0 w-full h-full scale-${
        isOpenModal ? "100" : "0"
      }`}
    >
      <div className="absolute p-5 top-0 left-0 right-0 bottom-0 m-auto w-[700px] h-[500px] bg-neutral-300 shadow-md rounded-md">
        {children}
      </div>
    </div>
  );
}

export default CustomModal;
