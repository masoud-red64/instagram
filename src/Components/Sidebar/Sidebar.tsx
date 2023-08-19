import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  hideNotificationSlideShow,
  hideSearchSlideShow,
  toggleNotificationSlideShow,
  toggleSearchSlideShow,
} from "../../store/slideShowSlice";
import { RootState } from "../../store/store";
import SearchSlideShow from "../SlideShow/SearchSlideShow";
import NotificationSlideShow from "../SlideShow/NotificationSlideShow";
import { showCreateNewPost } from "../../store/createNewPostSlice";
import { useFetcher, useLocation } from "react-router-dom";
import SwitchInput from "../SwitchInput/SwitchInput";

function Sidebar() {
  const [activeItem, setActiveItem] = useState("Home");
  const [isActiveMore, setIsActiveMore] = useState(false);
  const [isSwitchAppearanceActive, setIsSwitchAppearanceActive] =
    useState(false);
  const [isSwitchInputChecked, setIsSwitchInputChecked] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  const location = useLocation();

  const dispatch = useDispatch();
  const slideShowSelector = useSelector(
    (state: RootState) => state.slideShowReducer
  );

  const createNewPostSelector = useSelector(
    (state: RootState) => state.createNewPostReducer
  );

  useEffect(() => {
    const preferredTheme = isSwitchInputChecked ? "dark" : "";

    localStorage.setItem("theme", preferredTheme);

    document.documentElement.className = preferredTheme;
  }, [isSwitchInputChecked]);

  return (
    <>
      <div
        className={`fixed md:sticky md:top-0 bottom-0 right-0 md:bottom-auto md:right-auto left-0 z-40 h-12 md:h-screen w-full md:w-[72px] ${
          slideShowSelector.isShowNotif || slideShowSelector.isShowSearch
            ? "xl:w-[72px]"
            : ""
        } xl:w-[244px] transition-[width] duration-500 md:flex flex-col text-black dark:text-[#f5f5f5] bg-white dark:bg-black md:px-3 md:pt-2 md:pb-5 border-t border-t-[#DBDBDB] dark:border-t-[#363636] md:border-r border-r-[#dbdbdb] dark:border-r-[#262626]`}
      >
        {/* Logo */}
        <button className="hidden md:flex pt-[25px] px-3 pb-4 mb-[19px]">
          <svg
            className={`${
              slideShowSelector.isShowNotif || slideShowSelector.isShowSearch
                ? "hidden"
                : "hidden xl:inline"
            } w-[103px] h-[29px]`}
          >
            <use xlinkHref="#logo-instagram"></use>
          </svg>
          <span
            className={`${
              slideShowSelector.isShowNotif || slideShowSelector.isShowSearch
                ? "inline-block"
                : "inline-block xl:hidden"
            } hover:hover-item rounded-lg p-3 -m-3`}
          >
            <svg className="w-6 h-6 group-hover:scale-105 transition-transform">
              <use xlinkHref="#logo"></use>
            </svg>
          </span>
        </button>

        {/* Menu */}
        <ul className="flex flex-row md:flex-col justify-evenly md:justify-normal child:leading-5 child:p-3 md:child:my-1 child-hover:hover-item child:rounded-lg ">
          {/* Home */}
          <li
            className={`inline-block xl:block ${
              activeItem === "Home" && "font-[700]"
            } group`}
            onClick={() => setActiveItem("Home")}
          >
            <a href="/" className="inline-flex gap-x-4 p-3 -m-3">
              {activeItem === "Home" &&
              location.pathname === "/" &&
              !createNewPostSelector.isShowCreateNewPost &&
              !slideShowSelector.isShowNotif &&
              !slideShowSelector.isShowSearch ? (
                <svg className="w-6 h-6 group-hover:scale-105 transition-transform">
                  <use href="#home-active"></use>
                </svg>
              ) : (
                <svg className="w-6 h-6 group-hover:scale-105 transition-transform">
                  <use href="#home"></use>
                </svg>
              )}

              <span
                className={`${
                  slideShowSelector.isShowNotif ||
                  slideShowSelector.isShowSearch
                    ? "hidden"
                    : "hidden xl:block"
                }`}
              >
                Home
              </span>
            </a>
          </li>
          {/* Search */}
          <li className="hidden md:inline-block xl:block group">
            <button
              className={`flex gap-x-4 p-3 -m-3 ${
                slideShowSelector.isShowSearch && "border rounded-lg"
              }`}
              onClick={() => {
                dispatch(toggleSearchSlideShow());
                dispatch(hideNotificationSlideShow());
              }}
            >
              {slideShowSelector.isShowSearch &&
              !createNewPostSelector.isShowCreateNewPost ? (
                <svg className="w-6 h-6 group-hover:scale-105 transition-transform">
                  <use href="#search-active"></use>
                </svg>
              ) : (
                <svg className="w-6 h-6 group-hover:scale-105 transition-transform">
                  <use href="#search"></use>
                </svg>
              )}

              <span
                className={`${
                  slideShowSelector.isShowSearch ||
                  slideShowSelector.isShowNotif
                    ? "hidden"
                    : "hidden xl:block"
                }`}
              >
                Search
              </span>
            </button>
          </li>
          {/* Explore */}
          <li
            className={`inline-block xl:block group ${
              activeItem === "Explore" && "font-[700]"
            }`}
            onClick={() => setActiveItem("Explore")}
          >
            <a href="#" className="inline-flex gap-x-4 p-3 -m-3">
              <svg className="w-6 h-6 group-hover:scale-105 transition-transform">
                <use href="#explore"></use>
              </svg>
              <svg className="hidden w-6 h-6 group-hover:scale-105 transition-transform">
                <use href="#explore-active"></use>
              </svg>
              <span
                className={`${
                  slideShowSelector.isShowNotif ||
                  slideShowSelector.isShowSearch
                    ? "hidden"
                    : "hidden xl:block"
                }`}
              >
                Explore
              </span>
            </a>
          </li>
          {/* Reels */}
          <li
            className={`inline-block xl:block group ${
              activeItem === "Reels" && "font-[700]"
            }`}
            onClick={() => setActiveItem("Reels")}
          >
            <a href="#" className="inline-flex gap-x-4 p-3 -m-3">
              <svg className="w-6 h-6 group-hover:scale-105 transition-transform">
                <use href="#reels"></use>
              </svg>
              <svg className="hidden w-6 h-6 group-hover:scale-105 transition-transform">
                <use href="#reels-active"></use>
              </svg>
              <span
                className={`${
                  slideShowSelector.isShowNotif ||
                  slideShowSelector.isShowSearch
                    ? "hidden"
                    : "hidden xl:block"
                }`}
              >
                Reels
              </span>
            </a>
          </li>
          {/* Messages */}
          <li
            className={`inline-block xl:block group order-7 md:order-none ${
              activeItem === "Messages" && "font-[700]"
            }`}
            onClick={() => setActiveItem("Messages")}
          >
            <a href="#" className="inline-flex gap-x-4 p-3 -m-3">
              <svg className="w-6 h-6 group-hover:scale-105 transition-transform">
                <use href="#messages"></use>
              </svg>
              <svg className="hidden w-6 h-6 group-hover:scale-105 transition-transform">
                <use href="#home-active"></use>
              </svg>
              <span
                className={`${
                  slideShowSelector.isShowNotif ||
                  slideShowSelector.isShowSearch
                    ? "hidden"
                    : "hidden xl:block"
                }`}
              >
                Messages
              </span>
            </a>
          </li>
          {/* Notifications */}
          <li className="hidden md:inline-block xl:block group">
            <button
              className={`flex gap-x-4 p-3 -m-3 ${
                slideShowSelector.isShowNotif && "border rounded-lg"
              }`}
              onClick={() => {
                dispatch(toggleNotificationSlideShow());
                dispatch(hideSearchSlideShow());
              }}
            >
              {slideShowSelector.isShowNotif &&
              !createNewPostSelector.isShowCreateNewPost ? (
                <svg className="w-6 h-6 group-hover:scale-105 transition-transform">
                  <use href="#notifications-active"></use>
                </svg>
              ) : (
                <svg className="w-6 h-6 group-hover:scale-105 transition-transform">
                  <use href="#notifications"></use>
                </svg>
              )}
              <span
                className={`${
                  slideShowSelector.isShowNotif ||
                  slideShowSelector.isShowSearch
                    ? "hidden"
                    : "hidden xl:block"
                }`}
              >
                Notifications
              </span>
            </button>
          </li>
          {/* Creates */}
          <li
            className={`inline-block xl:block group order-5 md:order-none ${
              activeItem === "Creates" &&
              createNewPostSelector.isShowCreateNewPost &&
              "font-[700]"
            }`}
            onClick={() => setActiveItem("Creates")}
          >
            <button
              className="flex gap-x-4 p-3 -m-3"
              onClick={() => {
                dispatch(showCreateNewPost());
              }}
            >
              {activeItem === "Creates" &&
              createNewPostSelector.isShowCreateNewPost ? (
                <svg className="w-6 h-6 group-hover:scale-105 transition-transform">
                  <use href="#create-active"></use>
                </svg>
              ) : (
                <svg className="w-6 h-6 group-hover:scale-105 transition-transform">
                  <use href="#create"></use>
                </svg>
              )}

              <span
                className={`${
                  slideShowSelector.isShowNotif ||
                  slideShowSelector.isShowSearch
                    ? "hidden"
                    : "hidden xl:block"
                }`}
              >
                Creates
              </span>
            </button>
          </li>
          {/* Profile */}
          <li
            className={`inline-block xl:block shrink-0 group order-last md:order-none ${
              activeItem === "Profile" && "font-[700]"
            }`}
            onClick={() => setActiveItem("Profile")}
          >
            <a href="#" className="inline-flex gap-x-4 p-3 -m-3">
              <img
                loading="lazy"
                src="/images/users/user1.jpg"
                alt=""
                className="w-6 h-6 rounded-full group-hover:scale-105 transition-transform"
              />
              <span
                className={`${
                  slideShowSelector.isShowNotif ||
                  slideShowSelector.isShowSearch
                    ? "hidden"
                    : "hidden xl:block"
                }`}
              >
                Profile
              </span>
            </a>
          </li>
        </ul>
        {/* More */}
        <div className="relative hidden md:block mt-auto leading-5 mb-1">
          <button
            className={`w-full flex gap-x-4 group ${
              isActiveMore && "font-[700]"
            } p-3 hover:hover-item hover:rounded-lg transition-all`}
            onClick={() => setIsActiveMore(!isActiveMore)}
          >
            {isActiveMore ? (
              <svg className="w-6 h-6 group-hover:scale-105 transition-transform pointer-events-none">
                <use href="#more-active"></use>
              </svg>
            ) : (
              <svg className="w-6 h-6 group-hover:scale-105 transition-transform pointer-events-none">
                <use href="#more"></use>
              </svg>
            )}

            <span
              className={`pointer-events-none ${
                slideShowSelector.isShowNotif || slideShowSelector.isShowSearch
                  ? "hidden"
                  : "hidden xl:block"
              }`}
            >
              More
            </span>
          </button>

          {/* Content */}
          {isActiveMore && (
            <div className="absolute left-12 bottom-0 xl:left-0 xl:bottom-14 w-[266px] p-2 bg-white dark:bg-neutral-800 rounded-2xl drop-shadow-[0_4px_12px_rgba(0,0,0,.15)]">
              {!isSwitchAppearanceActive ? (
                <>
                  {/* Content Of More Item */}
                  <div>
                    <ul>
                      <li className=" hover:bg-[#f8f8f8] dark:hover:bg-[#3c3c3c] transition-all rounded-lg">
                        <a href="#" className="flex items-center gap-x-3 p-4">
                          <svg className="w-[18px] h-[18px]">
                            <use href="#setting"></use>
                          </svg>
                          <span className="text-sm">Setting</span>
                        </a>
                      </li>
                      <li className=" hover:bg-[#f8f8f8] dark:hover:bg-[#3c3c3c] transition-all rounded-lg">
                        <a href="#" className="flex items-center gap-x-3 p-4">
                          <svg className="w-[18px] h-[18px]">
                            <use href="#your-activity"></use>
                          </svg>
                          <span className="text-sm">Your activity</span>
                        </a>
                      </li>
                      <li className=" hover:bg-[#f8f8f8] dark:hover:bg-[#3c3c3c] transition-all rounded-lg">
                        <a href="#" className="flex items-center gap-x-3 p-4">
                          <svg className="w-[18px] h-[18px]">
                            <use href="#saved"></use>
                          </svg>
                          <span className="text-sm">Saved</span>
                        </a>
                      </li>
                      <li className=" hover:bg-[#f8f8f8] dark:hover:bg-[#3c3c3c] transition-all rounded-lg">
                        <button className="w-full flex items-center gap-x-3 p-4">
                          <svg className="w-[18px] h-[18px]">
                            <use href="#keyboard-shortcuts"></use>
                          </svg>
                          <span className="text-sm">Keyboard shortcuts</span>
                        </button>
                      </li>
                      <li className=" hover:bg-[#f8f8f8] dark:hover:bg-[#3c3c3c] transition-all rounded-lg">
                        <button
                          className="w-full flex items-center gap-x-3 p-4"
                          onClick={() => setIsSwitchAppearanceActive(true)}
                        >
                          <svg className="w-[18px] h-[18px]">
                            <use href="#sun"></use>
                          </svg>
                          <span className="text-sm">Switch appearance</span>
                        </button>
                      </li>
                      <li className=" hover:bg-[#f8f8f8] dark:hover:bg-[#3c3c3c] transition-all rounded-lg">
                        <button className="w-full flex items-center gap-x-3 p-4">
                          <svg className="w-[18px] h-[18px]">
                            <use href="#report-problem"></use>
                          </svg>
                          <span className="text-sm">Report a problem</span>
                        </button>
                      </li>
                    </ul>

                    <div className="h-1.5 bg-[#dbdbdb]/30 -mx-2 my-2"></div>

                    <div>
                      <div className=" hover:bg-[#f8f8f8] dark:hover:bg-[#3c3c3c] transition-all rounded-lg">
                        <button className="w-full text-left text-sm p-4">
                          Switch accounts
                        </button>
                      </div>
                      <div className="h-0.5 bg-[#dbdbdb]/30 -mx-2 my-2"></div>
                      <div className=" hover:bg-[#f8f8f8] dark:hover:bg-[#3c3c3c] transition-all rounded-lg">
                        <button className="w-full text-left text-sm p-4">
                          Log out
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Switch Appearance Content */}
                  <div>
                    <div className="flex items-center justify-between pt-2 p-4 mb-2 -mx-2 border-b border-[#dbdbdb]">
                      <div className="flex items-center gap-x-3">
                        <button
                          onClick={() => setIsSwitchAppearanceActive(false)}
                        >
                          <svg className="w-3 h-3 text-[#c7c7c7] -rotate-90">
                            <use href="#chevron-top"></use>
                          </svg>
                        </button>
                        <h5 className="font-[600]">Switch appearance</h5>
                      </div>
                      {isSwitchInputChecked ? (
                        <svg className="w-[18px] h-[18px]">
                          <use href="#moon"></use>
                        </svg>
                      ) : (
                        <svg className="w-[18px] h-[18px]">
                          <use href="#sun"></use>
                        </svg>
                      )}
                    </div>

                    <div className="hover:bg-[#f8f8f8] dark:hover:bg-[#3c3c3c] transition-all rounded-lg">
                      <button className="w-full flex items-center justify-between text-sm p-4">
                        <span>Dark mode</span>
                        <SwitchInput
                          switchClassName="w-[26px] h-4"
                          sliderClassName="slider2 bg-[#dbdbdb] before:left-0.5 before:bottom-0.5 before:bg-white before:w-3 before:h-3"
                          setIsSwitchInputChecked={setIsSwitchInputChecked}
                          isSwitchInputChecked={isSwitchInputChecked}
                        />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      <SearchSlideShow />
      <NotificationSlideShow />
    </>
  );
}

export default Sidebar;
