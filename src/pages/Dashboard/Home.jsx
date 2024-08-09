import React, { useContext, useRef, useState } from "react";
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

function Home() {
  const date = new Date();
  const [value, setValue] = useState("");
  const { usersPost, setUsersPost } = useContext(Context);
  const [knowImgChange, setKnowImgChange] = useState(false);
  const showImgRef = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (value) {
      const newPost = {
        id: Date.now(),
        name: JSON.parse(window.localStorage.getItem("token")).login,
        userName: `@${
          JSON.parse(window.localStorage.getItem("token")).login
        } · ${date.toLocaleTimeString()}`,
        desc: value,
        userImg: <img src={Avatar} alt="" />,
        postImgUrl: knowImgChange ? (
          <img src={showImgRef.current.src} alt="" />
        ) : null,
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
      <div className="w-[70%] border-x border-gray">
        <div className="p-5 flex items-center sticky top-0 z-20 bg-white justify-between border-b border-gray">
          <p className="font-bold text-[24px] leading-[31.92px]">Home</p>
          <DarkLightModeBtn />
        </div>
        <form
          onSubmit={handleFormSubmit}
          autoComplete="off"
          className="flex relative border-b border-b-gray mb-[20px] items-start gap-[15px] px-[22px]"
        >
          <img src={Avatar} alt="User Avatar" />
          <div className="flex flex-col w-full">
            <input
              onChange={disbaledBtn}
              name="desc"
              required
              className="resize-none w-full h-fit outline-none mt-3 leading-[29.26px] text-[22px] font-semibold placeholder:text-gray-10"
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
            } absolute bottom-0 right-0 !w-[108px]`}
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
