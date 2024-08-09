import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Bookmarks,
  Explore,
  Home,
  Lists,
  Messages,
  More,
  Notifications,
  Profile,
} from "../../pages/Dashboard";
import Navbar from "../../components/Navbar";

import { Context } from "../../context/context";

function DashboardPage() {
  const { isOpenModal, setIsOpenModal } = useContext(Context);
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <Navbar />
      <div className="h-screen w-full overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/more" element={<More />} />
        </Routes>
      </div>
    </div>
  );
}

export default DashboardPage;
