import React, { useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Context } from "../../context/context";
import {
  Likes,
  Media,
  Tweets,
  TweetsReplies,
} from "../../pages/Dashboard/ItemsForProfile";
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
import CustomModal from "../../components/CustomModal";
import Button from "../../components/Button";

function DashboardPage() {
  const { isOpenModal, setIsOpenModal } = useContext(Context);
  const navigate = useNavigate();

  function cancelFn() {
    console.log("hello");
    window.localStorage.clear();
    navigate("/");
    window.location.reload();
  }
  return (
    <div className="flex w-full  h-screen overflow-hidden">
      <Navbar />
      <div className="h-screen w-full overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="tweets" element={<Tweets />} />

            <Route path="tweets-replies" element={<TweetsReplies />} />
            <Route path="media" element={<Media />} />
            <Route path="likes" element={<Likes />} />
          </Route>
          <Route path="/more" element={<More />} />
        </Routes>
        <CustomModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
          <h1 className="font-bold text-2xl text-center">
            Rostan ham chiqib ketmoqchimisiz? 🤨
          </h1>
          <div className="flex items-center gap-6 mt-5">
            <Button
              onClick={cancelFn}
              extraStyle={"bg-red-600"}
              title={"Ha, Chiqmoqchiman"}
            />
            <Button
              onClick={() => setIsOpenModal(false)}
              extraStyle={"bg-green-600"}
              title={"Yo'q, Qolaman"}
            />
          </div>
        </CustomModal>
      </div>
    </div>
  );
}

export default DashboardPage;
