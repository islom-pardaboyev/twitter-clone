import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CommentIcon,
  LikeIcon,
  ReplyIcon,
  ShareIcon,
  StatisticIcon,
  MoreBtn,
} from "../assets/images/Icons";
import { useContext } from "react";
import { Context } from "../context/context";

const PostCart = ({ item }) => {
  const { usersPost, setUsersPost } = useContext(Context);
  const handleDelete = () => {
    setUsersPost(usersPost.filter((post) => post.id !== item.id));
  };

  function changeCommentCount(value) {
    value.isCommit = !value.isCommit;
    value.commentCount = value.isCommit
      ? ++value.commentCount
      : --value.commentCount;
    if (value.commentCount == 0) {
      value.commentCount = null;
    }

    setUsersPost([...usersPost]);
  }

  function changeReplyCount(value) {
    value.isReply = !value.isReply;
    value.replyCount = value.isReply ? ++value.replyCount : --value.replyCount;
    if (value.replyCount == 0) {
      value.replyCount = null;
    }

    setUsersPost([...usersPost]);
  }

  function changeLikeCount(value) {
    value.isLike = !value.isLike;
    value.likeCount = value.isLike ? ++value.likeCount : --value.likeCount;
    if (value.likeCount == 0) {
      value.likeCount = null;
    }
    setUsersPost([...usersPost]);
  }

  function changeShareCount(value) {
    value.isShare = !value.isShare;
    value.shareCount = value.isShare ? ++value.shareCount : --value.shareCount;
    if (value.shareCount == 0) {
      value.shareCount = null;
    }
    setUsersPost([...usersPost]);
  }

  function changeStatisticCount(value) {
    value.isStatistic = !value.isStatistic;
    value.statisticCount = value.isStatistic
      ? (value.statisticCount = value.statisticCount + 1 || 1)
      : (value.statisticCount = value.statisticCount - 1 || 0);
    if (value.statisticCount == 0) {
      value.statisticCount = null;
    }
    setUsersPost([...usersPost]);
  }

  return (
    <div className="flex relative items-start border-b border-gray space-x-[15px] px-[25px] pt-[10px] pb-[21px]">
      <img src={item.userImg} alt="" />
      <div className="flex w-full flex-col">
        <div className="flex space-x-[5px]">
          <strong>{item.name}</strong>
          <p className="text-black/40 font-normal leading-[23.94px] text-[16px]">
            {item.userName}
          </p>
        </div>
        <p className="font-normal w-full leading-[23.94px] text-[16px] mt-[5px]">
          {item.desc}
        </p>
        <img className="mt-[15px] mx-auto" src={item.postImgUrl} alt="" />
        <div className="mt-[22px] mb-[21px] flex items-center justify-between">
          <button
            onClick={() => changeCommentCount(item)}
            className={`flex items-center space-x-[10px] font-bold ${
              item.isCommit ? "text-sky-500" : ""
            }`}
          >
            <CommentIcon />
            <span>{item.commentCount}</span>
          </button>
          <button
            onClick={() => changeReplyCount(item)}
            className={`flex items-center space-x-[10px] font-bold ${
              item.isReply ? "text-green-500" : ""
            }`}
          >
            <ReplyIcon />
            <span>{item.replyCount}</span>
          </button>
          <button
            onClick={() => changeLikeCount(item)}
            className={`flex items-center space-x-[10px] font-bold ${
              item.isLike ? "text-red-600" : ""
            }`}
          >
            <LikeIcon />
            <span>{item.likeCount}</span>
          </button>
          <button
            onClick={() => changeShareCount(item)}
            className={`flex items-center space-x-[10px] font-bold ${
              item.isShare ? "text-pink-500" : ""
            }`}
          >
            <ShareIcon />
            <span>{item.shareCount}</span>
          </button>
          <button
            onClick={() => changeStatisticCount(item)}
            className={`flex items-center space-x-[10px] font-bold ${
              item.isStatistic ? "text-orange-500" : ""
            }`}
          >
            <StatisticIcon />
            <span>{item.statisticCount}</span>
          </button>
        </div>
      </div>
      <button className="absolute top-[21px] p-3 right-[25px] group">
        <MoreBtn />
        <div className="absolute shadow-xl border p-2 -left-10 rounded-md border-sky-500 scale-0 group-hover:scale-100 transition-transform bg-white duration-300">
          <div>
            <p
              onClick={() => handleDelete(item.id)}
              className="flex items-center gap-3 p-2 rounded-md hover:bg-red-500 hover:text-white duration-300"
            >
              <FontAwesomeIcon icon="fa-solid fa-trash" /> Delete
            </p>
          </div>
        </div>
      </button>
    </div>
  );
};

export default PostCart;

