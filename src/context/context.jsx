import { createContext, useState } from "react";
import {
  PostValueImg,
  UserAvatar1,
  UserAvatar2,
  UserAvatar3,
} from "../assets/images/Icons";

export const Context = createContext();

export const TokenContext = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(window.localStorage.getItem("token")) || false
  );

  const [usersPost, setUsersPost] = useState([
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
  ]);

  window.localStorage.setItem("token", JSON.stringify(token));


  return (
    <Context.Provider value={{ token, setToken, usersPost, setUsersPost }}>
      {children}
    </Context.Provider>
  );
};
