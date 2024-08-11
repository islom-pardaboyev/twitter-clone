import React from "react";
import ProfileImg from "../../assets/images/profile.png";
import Avatar from "../../assets/images/avatar.svg";
import Button from "../../components/Button";
import {
  LocationIcon,
  BalloonIcon,
  CalendarIcon,
  ShareLinkIcon,
} from "../../assets/images/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import TrendsForYou from "../../components/TrendsForYou";

function Home() {
  const navigate = useNavigate();
  const token = JSON.parse(window.localStorage.getItem("token"));
  return (
    <div className="w-full flex">
      <div className="w-[70%] border-x border-gray">
        <div className="p-5 flex sticky top-0 z-20 dark:bg-black bg-white items-center space-x-[40px] border-b border-gray">
          <FontAwesomeIcon
            onClick={() => navigate(-1)}
            className="cursor-pointer p-4 dark:text-white dark:bg-transparent hover:bg-neutral-200 duration-300 rounded-full"
            icon="fa-solid fa-arrow-left"
          />
          <div className="flex flex-col gap-[2px]">
            <strong className="leading-[26.6px] dark:text-white text-[20px] capitalize">
              {token.login}
            </strong>
            <p className="leading-[21.28px] text-[16px] text-neutral-500">
              1,070 Tweets
            </p>
          </div>
        </div>
        <img src={ProfileImg} alt="" />
        <div className="flex flex-col -translate-y-[80px]">
          <div className="flex items-end justify-between px-[25px]">
            <img
              src={Avatar}
              width={150}
              className="border-4 border-white rounded-full"
              height={150}
              alt=""
            />
            <Button
              extraStyle={
                "!w-fit dark:!text-white px-[15px] !py-[10px] !text-black bg-transparent border border-neutral-400 dark:text-white"
              }
              title={"Edit profile"}
            />
          </div>
          <div className="flex flex-col mt-[10px] px-[25px]">
            <strong className="capitalize dark:text-white text-[24px] leading-[31.92px]">
              {token.login}
            </strong>
            <p className="text-neutral-400 text-[16px] leading-[21.28px]">
              @{token.login}
            </p>
            <p className="mt-[15px] text-[18px] dark:text-white leading-[23.94px] ">
              UX&UI designer at{" "}
              <a href="/" className="text-sky-400">
                @abutechuz
              </a>
            </p>
          </div>
          <div className="flex mt-[15px] items-center gap-[29px] px-[25px] text-neutral-400">
            <div className="flex items-center gap-[3px]">
              <LocationIcon />
              <p className="leading-[23.94px] text-[16px] line-clamp-1">
                Mashag’daman
              </p>
            </div>
            <div className="flex items-center gap-[3px]">
              <ShareLinkIcon />
              <a
                href="t.me/boburjon_mavlonov"
                className="leading-[23.94px] text-[16px] line-clamp-1 text-sky-500"
              >
                t.me/boburjon_mavlonov
              </a>
            </div>
            <div className="flex items-center gap-[3px]">
              <BalloonIcon />
              <p className="leading-[23.94px] text-[16px] line-clamp-1">
                Born November 24, 2000
              </p>
            </div>
            <div className="flex items-center gap-[3px]">
              <CalendarIcon />
              <p className="leading-[23.94px] text-[16px] line-clamp-1">
                Joined May 2020
              </p>
            </div>
          </div>
          <ul
            id="links"
            className="flex pb-[15px] dark:text-white border-b border-neutral-300 items-center justify-between px-[50px] mt-[40px] text-[18px] leading-[23.94px]"
          >
            <li className="dark:border-sky-500">
              <NavLink to="tweets">Tweets</NavLink>
            </li>
            <li>
              <NavLink to="tweets-replies">Tweets & replies</NavLink>
            </li>
            <li>
              <NavLink to="media">Media</NavLink>
            </li>
            <li>
              <NavLink to="likes">Likes</NavLink>
            </li>
          </ul>

          <Outlet />
        </div>
      </div>
      <TrendsForYou />
    </div>
  );
}
export default Home;
