import React from "react";

function Sidebar() {
  return (
    <div className="h-screen flex flex-col text-black dark:text-[#f5f5f5] px-3 pt-2 pb-5 border-r border-[#dbdbdb] dark:border-[#262626]">
      {/* Logo */}
      <button className="flex pt-[25px] px-3 pb-4 mb-[19px]">
        <svg className="w-[103px] h-[29px]">
          <use xlinkHref="#logo-instagram"></use>
        </svg>
        {/* <span className="inline-block hover:hover-item p-3 -m-3">
          <svg className="w-6 h-6 group-hover:scale-105 transition-all">
            <use xlinkHref="#logo"></use>
          </svg>
        </span> */}
      </button>

      {/* Menu */}
      <ul className="child:leading-5 child:p-3 child:my-1 child-hover:hover-item">
        <li className="font-[700] group">
          <a href="#" className="flex gap-x-4">
            <svg className="hidden w-6 h-6 group-hover:scale-105 transition-all">
              <use href="#home"></use>
            </svg>
            <svg className="w-6 h-6 group-hover:scale-105 transition-all">
              <use href="#home-active"></use>
            </svg>
            Home
          </a>
        </li>
        <li className="group">
          <button className="flex gap-x-4">
            <svg className="w-6 h-6 group-hover:scale-105 transition-all">
              <use href="#search"></use>
            </svg>
            <svg className="hidden w-6 h-6 group-hover:scale-105 transition-all">
              <use href="#search-active"></use>
            </svg>
            Search
          </button>
        </li>
        <li className="group">
          <a href="#" className="flex gap-x-4">
            <svg className="w-6 h-6 group-hover:scale-105 transition-all">
              <use href="#explore"></use>
            </svg>
            <svg className="hidden w-6 h-6 group-hover:scale-105 transition-all">
              <use href="#explore-active"></use>
            </svg>
            Explore
          </a>
        </li>
        <li className="group">
          <a href="#" className="flex gap-x-4">
            <svg className="w-6 h-6 group-hover:scale-105 transition-all">
              <use href="#reels"></use>
            </svg>
            <svg className="hidden w-6 h-6 group-hover:scale-105 transition-all">
              <use href="#reels-active"></use>
            </svg>
            Reels
          </a>
        </li>
        <li className="group">
          <button className="flex gap-x-4">
            <svg className="w-6 h-6 group-hover:scale-105 transition-all">
              <use href="#messages"></use>
            </svg>
            <svg className="hidden w-6 h-6 group-hover:scale-105 transition-all">
              <use href="#home-active"></use>
            </svg>
            Messages
          </button>
        </li>
        <li className="group">
          <button className="flex gap-x-4">
            <svg className="w-6 h-6 group-hover:scale-105 transition-all">
              <use href="#notifications"></use>
            </svg>
            <svg className="hidden w-6 h-6 group-hover:scale-105 transition-all">
              <use href="#notifications-active"></use>
            </svg>
            Notifications
          </button>
        </li>
        <li className="group">
          <button className="flex gap-x-4">
            <svg className="w-6 h-6 group-hover:scale-105 transition-all">
              <use href="#create"></use>
            </svg>
            <svg className="hidden w-6 h-6 group-hover:scale-105 transition-all">
              <use href="#create-active"></use>
            </svg>
            Creates
          </button>
        </li>
        <li className="group">
          <a href="#" className="flex gap-x-4">
            <img
              src="/images/users/user1.jpg"
              alt=""
              className="w-6 h-6 rounded-full group-hover:scale-105 transition-all"
            />
            Profile
          </a>
        </li>
      </ul>
      <div className="mt-auto leading-5 p-3 mb-1 hover:bg-black/5 hover:rounded-lg transition-all">
        <button className="flex gap-x-4 group">
          <svg className="w-6 h-6 group-hover:scale-105 transition-all">
            <use href="#more"></use>
          </svg>
          <svg className="hidden w-6 h-6 group-hover:scale-105 transition-all">
            <use href="#more-active"></use>
          </svg>
          More
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
