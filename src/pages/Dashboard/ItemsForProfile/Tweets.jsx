import React from "react";
import PostCart from "../../../components/PostCart";

function Tweets() {
  const token = JSON.parse(window.localStorage.getItem("token"));
  const usersPost = JSON.parse(window.localStorage.getItem("usersPost"));
  return (
    <div className="dark:text-white">
      {usersPost.filter((item) => item.name == token.login).length ? (
        usersPost.filter((item) => item.name == token.login).map(item => <PostCart item={item} key={item.id}/>)
      ) : (
        <p className="capitalize font-bold text-2xl flex items-center justify-center mt-8">not yet own tweets</p>
      )}
    </div>
  );
}

export default Tweets;
