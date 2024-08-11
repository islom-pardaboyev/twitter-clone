import React from "react";
import {
  TwitterLogo,
  BookmarksIcon,
  ExploreIcon,
  HomeIcon,
  ListsIcon,
  MessagesIcon,
  MoreIcon,
  NotificationsIcon,
  ProfileIcon,
} from "../assets/images/Icons";
import NavItems from "./NavItems";
import Button from "./Button";
import { Link } from "react-router-dom";
import InfoAcc from "./InfoAcc";

function Navbar() {
  const navbarLinks = [
    {
      id: 1,
      title: "Home",
      icon: <HomeIcon />,
      path: "/",
    },
    {
      id: 2,
      title: "Explore",
      icon: <ExploreIcon />,
      path: "/explore",
    },
    {
      id: 3,
      title: "Notifications",
      icon: <NotificationsIcon />,
      path: "/notifications",
    },
    {
      id: 4,
      title: "Messages",
      icon: <MessagesIcon />,
      path: "/messages",
    },
    {
      id: 5,
      title: "Bookmarks",
      icon: <BookmarksIcon />,
      path: "/bookmarks",
    },
    {
      id: 6,
      title: "Lists",
      icon: <ListsIcon />,
      path: "/lists",
    },
    {
      id: 7,
      title: "Profile",
      icon: <ProfileIcon />,
      path: "/profile",
    },
    {
      id: 8,
      title: "More",
      icon: <MoreIcon />,
      path: "/more",
    },
  ];
  return (
    <div className="h-screen dark:bg-black relative pt-[31px] min-w-[20%] max-w-full overflow-y-auto">
      <div className="pr-4">
        <Link to={"/"}>
          <TwitterLogo />
        </Link>
        <nav className="flex flex-col mt-[49px] space-y-5">
          <ul className="flex flex-col space-y-5">
            {navbarLinks.map((item) => (
              <NavItems item={item} key={item.id} />
            ))}
          </ul>
        </nav>
        <Button extraStyle={"mt-[45px]"} title={"Tweet"} />
      </div>
      <InfoAcc />
    </div>
  );
}

export default Navbar;
