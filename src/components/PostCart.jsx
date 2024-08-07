import {
  CommentIcon,
  LikeIcon,
  ReplyIcon,
  ShareIcon,
  StatisticIcon,
} from "../assets/images/Icons";

const PostCart = ({ item }) => {
  return (
    <div className="flex items-start border-b border-gray space-x-[15px] px-[25px] pt-[10px] pb-[21px]">
      {item.userImg}
      <div className="flex flex-col">
        <div className="flex space-x-[5px]">
          <strong>{item.name}</strong>
          <p className="text-black/40">{item.userName}</p>
        </div>
        <p>{item.desc}</p>
        <div className="mt-[15px]">{item.postImgUrl}</div>
        <div className="mt-[22px] mb-[21px] flex items-center justify-between">
          <button className="flex items-center space-x-[10px]">
            <CommentIcon />
            <span>{item.commentCount}</span>
          </button>
          <button className="flex items-center space-x-[10px]">
            <ReplyIcon />
            <span>{item.replyCount}</span>
          </button>
          <button className="flex items-center space-x-[10px]">
            <LikeIcon />
            <span>{item.likeCount}</span>
          </button>
          <button className="flex items-center space-x-[10px]">
            <ShareIcon />
            <span>{item.shareCount}</span>
          </button>
          <button className="flex items-center space-x-[10px]">
            <StatisticIcon />
            <span>{item.statuscticCount}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCart;
