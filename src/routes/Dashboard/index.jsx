import React, { lazy, Suspense, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Context } from "../../context/context";
import {
  Likes,
  Media,
  Tweets,
  TweetsReplies,
} from "../../pages/Dashboard/ItemsForProfile";
import CustomModal from "../../components/CustomModal";
import Button from "../../components/Button";
import LaodingVideo from "../../assets/images/loading.mp4";

function DashboardPage() {
  const { isOpenModal, setIsOpenModal } = useContext(Context);

  // loading Page
  const Home = lazy(
    () =>
      new Promise((resolve) => {
        return setTimeout(
          () => resolve(import("../../pages/Dashboard/Home")),
          1500
        );
      })
  );
  const Explore = lazy(
    () =>
      new Promise((resolve) => {
        return setTimeout(
          () => resolve(import("../../pages/Dashboard/Explore")),
          1500
        );
      })
  );
  const Notifications = lazy(
    () =>
      new Promise((resolve) => {
        return setTimeout(
          () => resolve(import("../../pages/Dashboard/Notifications")),
          1500
        );
      })
  );

  const Messages = lazy(
    () =>
      new Promise((resolve) => {
        return setTimeout(
          () => resolve(import("../../pages/Dashboard/Notifications")),
          1500
        );
      })
  );
  const Bookmarks = lazy(
    () =>
      new Promise((resolve) => {
        return setTimeout(
          () => resolve(import("../../pages/Dashboard/Bookmarks")),
          1500
        );
      })
  );

  const Lists = lazy(
    () =>
      new Promise((resolve) => {
        return setTimeout(() => {
          resolve(import("../../pages/Dashboard/Lists"));
        }, 1500);
      })
  );

  const Profile = lazy(
    () =>
      new Promise((resolve) =>
        setTimeout(() => {
          resolve(import("../../pages/Dashboard/Profile"));
        }, 1500)
      )
  );
  const More = lazy(
    () =>
      new Promise((resolve) =>
        setTimeout(() => {
          resolve(import("../../pages/Dashboard/More"));
        }, 1500)
      )
  );

  function cancelFn() {
    console.log("hello");
    window.localStorage.clear();
    window.location.pathname = "/";
    window.location.reload();
  }
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <Navbar />
      <div className="h-screen w-full overflow-y-auto">
        <Routes>
          <Route
            path="/"
            element={
              <Suspense
                fallback={
                  <div className="h-screen w-full flex items-center justify-center">
                    <video src={LaodingVideo} loop muted autoPlay></video>
                  </div>
                }
              >
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/explore"
            element={
              <Suspense
                fallback={
                  <div className="h-screen w-full flex items-center justify-center">
                    <video src={LaodingVideo} loop muted autoPlay></video>
                  </div>
                }
              >
                <Explore />
              </Suspense>
            }
          />
          <Route
            path="/notifications"
            element={
              <Suspense
                fallback={
                  <div className="h-screen w-full flex items-center justify-center">
                    <video src={LaodingVideo} loop muted autoPlay></video>
                  </div>
                }
              >
                <Notifications />
              </Suspense>
            }
          />
          <Route
            path="/messages"
            element={
              <Suspense
                fallback={
                  <div className="h-screen w-full flex items-center justify-center">
                    <video src={LaodingVideo} loop muted autoPlay></video>
                  </div>
                }
              >
                <Messages />
              </Suspense>
            }
          />
          <Route
            path="/bookmarks"
            element={
              <Suspense
                fallback={
                  <div className="h-screen w-full flex items-center justify-center">
                    <video src={LaodingVideo} loop muted autoPlay></video>
                  </div>
                }
              >
                <Bookmarks />
              </Suspense>
            }
          />
          <Route
            path="/lists"
            element={
              <Suspense
                fallback={
                  <div className="h-screen w-full flex items-center justify-center">
                    <video src={LaodingVideo} loop muted autoPlay></video>
                  </div>
                }
              >
                <Lists />
              </Suspense>
            }
          />
          <Route
            path="/profile"
            element={
              <Suspense
                fallback={
                  <div className="h-screen w-full flex items-center justify-center">
                    <video src={LaodingVideo} loop muted autoPlay></video>
                  </div>
                }
              >
                <Profile />
              </Suspense>
            }
          >
            <Route path="tweets" index element={<Tweets />} />

            <Route path="tweets-replies" element={<TweetsReplies />} />
            <Route path="media" element={<Media />} />
            <Route path="likes" element={<Likes />} />
          </Route>
          <Route
            path="/more"
            element={
              <Suspense
                fallback={
                  <div className="h-screen w-full flex items-center justify-center">
                    <video src={LaodingVideo} loop muted autoPlay></video>
                  </div>
                }
              >
                <More />
              </Suspense>
            }
          />
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
            <Button onClick={() => setIsOpenModal(false)} extraStyle={"bg-green-600"} title={"Yo'q, Qolaman"} />
          </div>
        </CustomModal>
      </div>
    </div>
  );
}

export default DashboardPage;
