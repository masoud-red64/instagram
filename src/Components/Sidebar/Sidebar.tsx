import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  hideNotificationSlideShow,
  hideSearchSlideShow,
  toggleNotificationSlideShow,
  toggleSearchSlideShow,
} from "../../store/slideShowSlice";
import { slideShowSliceTypes } from "../../store/types/slideShowSlice.types";

function Sidebar() {
  const dispatch = useDispatch();
  const slideShowSelector = useSelector((state: slideShowSliceTypes) => state);

  return (
    <div
      className={`h-12 md:h-screen w-full md:w-[72px] ${
        slideShowSelector.isShowNotif || slideShowSelector.isShowSearch
          ? "xl:w-[72px]"
          : ""
      } xl:w-[244px] transition-all duration-300 md:flex flex-col text-black dark:text-[#f5f5f5] bg-white dark:bg-black md:px-3 md:pt-2 md:pb-5 border-t border-t-[#DBDBDB] dark:border-t-[#363636] md:border-r border-r-[#dbdbdb] dark:border-r-[#262626]`}
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
          } hover:hover-item p-3 -m-3`}
        >
          <svg className="w-6 h-6 group-hover:scale-105 transition-all">
            <use xlinkHref="#logo"></use>
          </svg>
        </span>
      </button>

      {/* Menu */}
      <ul className="flex flex-row md:flex-col justify-evenly md:justify-normal child:leading-5 child:p-3 md:child:my-1 child-hover:hover-item">
        {/* Home */}
        <li className="inline-block xl:block font-[700] group">
          <a href="#" className="inline-flex gap-x-4 p-3 -m-3">
            <svg className="hidden w-6 h-6 group-hover:scale-105 transition-all">
              <use href="#home"></use>
            </svg>
            <svg className="w-6 h-6 group-hover:scale-105 transition-all">
              <use href="#home-active"></use>
            </svg>
            <span
              className={`${
                slideShowSelector.isShowNotif || slideShowSelector.isShowSearch
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
            {slideShowSelector.isShowSearch ? (
              <svg className="w-6 h-6 group-hover:scale-105 transition-all">
                <use href="#search-active"></use>
              </svg>
            ) : (
              <svg className="w-6 h-6 group-hover:scale-105 transition-all">
                <use href="#search"></use>
              </svg>
            )}

            <span
              className={`${
                slideShowSelector.isShowSearch || slideShowSelector.isShowNotif
                  ? "hidden"
                  : "hidden xl:block"
              }`}
            >
              Search
            </span>
          </button>
        </li>
        {/* Explore */}
        <li className="inline-block xl:block group">
          <a href="#" className="inline-flex gap-x-4 p-3 -m-3">
            <svg className="w-6 h-6 group-hover:scale-105 transition-all">
              <use href="#explore"></use>
            </svg>
            <svg className="hidden w-6 h-6 group-hover:scale-105 transition-all">
              <use href="#explore-active"></use>
            </svg>
            <span
              className={`${
                slideShowSelector.isShowNotif || slideShowSelector.isShowSearch
                  ? "hidden"
                  : "hidden xl:block"
              }`}
            >
              Explore
            </span>
          </a>
        </li>
        {/* Reels */}
        <li className="inline-block xl:block group">
          <a href="#" className="inline-flex gap-x-4 p-3 -m-3">
            <svg className="w-6 h-6 group-hover:scale-105 transition-all">
              <use href="#reels"></use>
            </svg>
            <svg className="hidden w-6 h-6 group-hover:scale-105 transition-all">
              <use href="#reels-active"></use>
            </svg>
            <span
              className={`${
                slideShowSelector.isShowNotif || slideShowSelector.isShowSearch
                  ? "hidden"
                  : "hidden xl:block"
              }`}
            >
              Reels
            </span>
          </a>
        </li>
        {/* Messages */}
        <li className="inline-block xl:block group order-7 md:order-none">
          <a href="#" className="inline-flex gap-x-4 p-3 -m-3">
            <svg className="w-6 h-6 group-hover:scale-105 transition-all">
              <use href="#messages"></use>
            </svg>
            <svg className="hidden w-6 h-6 group-hover:scale-105 transition-all">
              <use href="#home-active"></use>
            </svg>
            <span
              className={`${
                slideShowSelector.isShowNotif || slideShowSelector.isShowSearch
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
            {slideShowSelector.isShowNotif ? (
              <svg className="w-6 h-6 group-hover:scale-105 transition-all">
                <use href="#notifications-active"></use>
              </svg>
            ) : (
              <svg className="w-6 h-6 group-hover:scale-105 transition-all">
                <use href="#notifications"></use>
              </svg>
            )}
            <span
              className={`${
                slideShowSelector.isShowNotif || slideShowSelector.isShowSearch
                  ? "hidden"
                  : "hidden xl:block"
              }`}
            >
              Notifications
            </span>
          </button>
        </li>
        {/* Creates */}
        <li className="inline-block xl:block group order-5 md:order-none">
          <button className="flex gap-x-4 p-3 -m-3">
            <svg className="w-6 h-6 group-hover:scale-105 transition-all">
              <use href="#create"></use>
            </svg>
            <svg className="hidden w-6 h-6 group-hover:scale-105 transition-all">
              <use href="#create-active"></use>
            </svg>
            <span
              className={`${
                slideShowSelector.isShowNotif || slideShowSelector.isShowSearch
                  ? "hidden"
                  : "hidden xl:block"
              }`}
            >
              Creates
            </span>
          </button>
        </li>
        {/* Profile */}
        <li className="inline-block xl:block shrink-0 group order-last md:order-none">
          <a href="#" className="inline-flex gap-x-4 p-3 -m-3">
            <img
              src="/images/users/user1.jpg"
              alt=""
              className="w-6 h-6 rounded-full group-hover:scale-105 transition-all"
            />
            <span
              className={`${
                slideShowSelector.isShowNotif || slideShowSelector.isShowSearch
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
      <div className="hidden md:block mt-auto leading-5 p-3 mb-1 hover:bg-black/5 hover:rounded-lg transition-all">
        <button className="flex gap-x-4 group p-3 -m-3">
          <svg className="w-6 h-6 group-hover:scale-105 transition-all">
            <use href="#more"></use>
          </svg>
          <svg className="hidden w-6 h-6 group-hover:scale-105 transition-all">
            <use href="#more-active"></use>
          </svg>
          <span
            className={`${
              slideShowSelector.isShowNotif || slideShowSelector.isShowSearch
                ? "hidden"
                : "hidden xl:block"
            }`}
          >
            More
          </span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;