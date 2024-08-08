import React, { useRef, useState } from "react";
import {
  DarkLightModeBtn,
  GifIcon,
  PostValueImg,
  ScheduleIcon,
  SetImgIcon,
  SmileIcon,
  StatusIcon,
  UserAvatar1,
  UserAvatar2,
  UserAvatar3,
} from "../../assets/images/Icons";
import Avatar from "../../assets/images/avatar.svg";
import Button from "../../components/Button";
import PostCart from "../../components/PostCart";
import TrendsForYou from "../../components/TrendsForYou";

function Home() {
  const [value, setValue] = useState("");
  const usersPostValues = [
    {
      id: 1,
      name: "Designsta",
      userName: "@inner · 25m",
      desc: "Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
      userImg: <UserAvatar1 />,
      postImgUrl: null,
      commentCount: "10",
      replyCount: "1",
      likeCount: "8",
      shareCount: null,
      statusticCount: null,
    },
    {
      id: 2,
      name: "cloutexhibition",
      userName: "@RajLahoti · 22m",
      desc: "YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.",
      userImg: <UserAvatar2 />,
      postImgUrl: null,
      commentCount: null,
      replyCount: "5",
      likeCount: "9",
      shareCount: null,
      statusticCount: null,
    },
    {
      id: 3,
      name: "CreativePhoto",
      userName: "@cloutexhibition · 1h",
      desc: "Обетда..... Кечиринглар",
      userImg: <UserAvatar3 />,
      postImgUrl: <PostValueImg />,
      commentCount: "10",
      replyCount: "1",
      likeCount: "8",
      shareCount: null,
      statusticCount: null,
    },
  ];
  const [knowImgChange, setKnowImgChange] = useState(false);
  const showImgRef = useRef();
  function takeChoosenImg(e) {
    console.log(e);
    showImgRef.current.src = URL.createObjectURL(e.target.files[0]);
    console.log(showImgRef);
    setKnowImgChange(true);
  }

  function disbaledBtn(e) {
    setValue(e.target.value.trim());
  }

  function handleFormSubmit(e) {
    e.preventDefault();
  }

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
              className="resize-none w-full outline-none mt-3 leading-[29.26px] text-[22px] font-semibold placeholder:text-gray-10"
              placeholder="What’s happening"
              type="text"
            />
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
              <GifIcon/>
              <StatusIcon/>
              <SmileIcon/>
              <ScheduleIcon/>
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
          {usersPostValues.map((item) => (
            <PostCart key={item.id} item={item} />
          ))}
        </div>
      </div>
      <TrendsForYou />
    </div>
  );
}
export default Home;
