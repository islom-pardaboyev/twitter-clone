import React from "react";
import PostCart from "../../../components/PostCart";

function Tweets() {
  const token = JSON.parse(window.localStorage.getItem("token"));
  const usersPost = JSON.parse(window.localStorage.getItem("usersPost"));
  return (
    <div>
      {usersPost.length ? (
        usersPost.filter((item) => item.name == token.login).map(item => <PostCart item={item} key={item.id}/>)
      ) : (
        <p className="capitalize text-red-600">not yet own tweets</p>
      )}
    </div>
  );
}

export default Tweets;
