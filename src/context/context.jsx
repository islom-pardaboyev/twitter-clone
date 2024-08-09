import { createContext, useState } from "react";
import UserAvatar1 from '../assets/images/UserImg1.svg'
import UserAvatar2 from '../assets/images/UserImg2.svg'
import UserAvatar3 from '../assets/images/UserImg3.svg'
import PostValueImg from '../assets/images/PostImgValue.png'

export const Context = createContext();

export const TokenContext = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(window.localStorage.getItem("token")) || false
  );

  const [usersPost, setUsersPost] = useState(JSON.parse(window.localStorage.getItem("usersPost")) ||[
    {
      id: 1,
      name: "Designsta",
      userName: `@inner · 25m ${new Date().toLocaleTimeString()}`,
      desc: "Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
      userImg: UserAvatar1 ,
      postImgUrl: null,
      commentCount: "10",
      replyCount: "1",
      likeCount: "8",
      shareCount: null,
      statisticCount: null,
    },
    {
      id: 2,
      name: "cloutexhibition",
      userName: `@RajLahoti · ${new Date().toLocaleTimeString()}`,
      desc: "YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.",
      userImg: UserAvatar2 ,
      postImgUrl: null,
      commentCount: null,
      replyCount: "5",
      likeCount: "9",
      shareCount: null,
      statisticCount: null,
    },
    {
      id: 3,
      name: "CreativePhoto",
      userName: `@cloutexhibition · ${new Date().toLocaleTimeString()}`,
      desc: "Обетда..... Кечиринглар",
      userImg: UserAvatar3 ,
      postImgUrl: PostValueImg ,
      commentCount: "10",
      replyCount: "1",
      likeCount: "8",
      shareCount: null,
      statisticCount: null,
    },
  ]);

  const [isOpenModal, setIsOpenModal] = useState(false)

  window.localStorage.setItem("token", JSON.stringify(token));
  window.localStorage.setItem("usersPost", JSON.stringify(usersPost));
  

  return (
    <Context.Provider
      value={{ token, setToken, usersPost, setUsersPost, isOpenModal, setIsOpenModal}}
    >
      {children}
    </Context.Provider>
  );
};

