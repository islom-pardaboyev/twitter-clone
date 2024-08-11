import React, { useContext, useEffect, useRef, useState } from "react";
import {
  DarkLightModeBtn,
  GifIcon,
  ScheduleIcon,
  SetImgIcon,
  SmileIcon,
  StatusIcon,
} from "../../assets/images/Icons";
import Avatar from "../../assets/images/avatar.svg";
import Button from "../../components/Button";
import PostCart from "../../components/PostCart";
import TrendsForYou from "../../components/TrendsForYou";
import { Context } from "../../context/context";
import DarkMode from "../../components/DarkMode";

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const date = new Date();
  const [value, setValue] = useState("");
  const { usersPost, setUsersPost } = useContext(Context);
  const [knowImgChange, setKnowImgChange] = useState(false);
  const showImgRef = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (value) {
      const newPost = {
        id: usersPost.length ? usersPost[usersPost.length - 1].id + 1 : 1,
        name: JSON.parse(window.localStorage.getItem("token")).login,
        userName: `@${
          JSON.parse(window.localStorage.getItem("token")).login
        } · ${date.toLocaleTimeString()}`,
        desc: value,
        userImg: Avatar,
        postImgUrl: knowImgChange ? showImgRef.current.src : null,
        commentCount: null,
        replyCount: null,
        likeCount: null,
        shareCount: null,
        statusticCount: null,
      };
      setUsersPost((prevPosts) => [newPost, ...prevPosts]);
      resetFormAndImg(e);
    }
  };

  const takeChoosenImg = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      showImgRef.current.src = reader.result;
      setKnowImgChange(true);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const disbaledBtn = (e) => {
    setValue(e.target.value.trim());
  };

  const resetFormAndImg = (e) => {
    setValue("");
    setKnowImgChange(false);
    e.target.reset();
  };

  return (
    <div className="w-full flex">
      <div className="w-[70%] border-x border-gray dark:border-neutral-500">
        <div className="p-5 flex items-center sticky top-0 z-20 bg-white justify-between dark:bg-black duration-300 border-b border-gray dark:border-neutral-600">
          <p className="font-bold text-[24px] leading-[31.92px] dark:text-white duration-300">Home</p>
          <DarkMode/>
        </div>
        <form
          onSubmit={handleFormSubmit}
          autoComplete="off"
          className="flex dark:bg-black duration-300 relative border-b border-b-gray dark:border-neutral-500 pb-[20px] items-start gap-[15px] px-[22px]"
        >
          <img src={Avatar} alt="User Avatar" />
          <div className="flex flex-col w-full">
            <input
              onChange={disbaledBtn}
              name="desc"
              required
              className="dark:text-white duration-300 bg-transparent w-full h-fit outline-none mt-3 leading-[29.26px] text-[22px] font-semibold placeholder:text-gray-10"
              placeholder="What’s happening"
            ></input>
            <img
              className={`mt-5 ${knowImgChange ? "" : "hidden"}`}
              src=""
              ref={showImgRef}
              alt=""
            />
            <div className="mt-[32px] mb-[46px] flex items-center space-x-[20px]">
              <label className="cursor-pointer">
                <input onChange={takeChoosenImg} type="file" hidden />
                <SetImgIcon />
              </label>
              <GifIcon />
              <StatusIcon />
              <SmileIcon />
              <ScheduleIcon />
            </div>
          </div>
          <Button
            extraStyle={`${
              value ? "" : "opacity-20"
            } absolute bottom-0 right-0 !w-[108px] dark:bg-white dark:text-black`}
            title={"Tweet"}
            disabled={!value}
          />
        </form>
        <div className="flex flex-col">
          {usersPost.map((item) => (
            <PostCart key={item.id} item={item} />
          ))}
        </div>
      </div>
      <TrendsForYou />
    </div>
  );
}
export default Home;
