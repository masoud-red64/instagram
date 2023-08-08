import React, { useState } from "react";
import Story from "../Story/Story";
import TwoProfile from "../TwoProfile/TwoProfile";

function NotificationBox() {
  const [isFollow1, setIsFollow1] = useState(false);
  const [isFollow2, setIsFollow2] = useState(true);
  const [isFollow3, setIsFollow3] = useState(true);

  return (
    <div className="max-w-[600px] mx-auto pb-12 md:pb-0">
      {/* Top */}
      <button className="w-full flex items-center justify-between px-6 pt-2 pb-5 border-b-2 border-[#dbdbdb] dark:border-[#262626] hover:bg-gray-100 dark:hover:bg-[#121212] transition-all">
        <div className="flex items-center gap-x-[14px]">
          <TwoProfile img1="user1.jpg" img2="user3.jpg" />
          <div className="flex flex-col items-start">
            <span className="text-sm font-[700] dark:text-gray-100">
              Follow requests
            </span>
            <span className="text-sm  text-gray-500 dark:text-[#a8a8a8]">
              ainaz_larki1995 + ۹۲ others
            </span>
          </div>
        </div>

        <div className="flex items-center gap-x-3">
          <div className="w-2 h-2 bg-[#0095f6] rounded-full"></div>
          <svg className="w-4 h-4 text-gray-500 dark:text-[#a8a8a8] rotate-90">
            <use href="#arrow-top"></use>
          </svg>
        </div>
      </button>

      {/* New */}
      <div className="pb-2 border-b-2 border-[#dbdbdb] dark:border-[#262626]">
        <h4 className="notification-section-title">امروز</h4>
        <div>
          <button className="w-full flex items-center justify-between py-1 px-3 xs:py-2 xs:px-6">
            <div className="flex items-center gap-x-[14px]">
              <div className="w-9 h-9 xs:w-11 xs:h-11 shrink-0">
                <Story img="user15.jpg" hasStory={true} hasNewStory />
              </div>
              <span className="max-w-40 text-sm text-left dark:text-gray-100 dir-rtl line-clamp-3">
                <span className="font-[600]">j_zare12</span> شما را دنبال کرد.{" "}
                <span className="text-gray-500 dark:text-[#a8a8a8]">39m</span>
              </span>
            </div>
            <button
              className={`${isFollow3 ? "secondary-btn " : "primary-btn"}  `}
              onClick={() => setIsFollow3(!isFollow3)}
            >
              {isFollow3 ? "Following" : "Follow"}
            </button>
          </button>
        </div>
      </div>

      {/* This Week */}
      <div className="pb-2 border-b-2 border-[#dbdbdb] dark:border-[#262626]">
        <h4 className="notification-section-title">این هفته</h4>
        <div className="child-hover:bg-gray-100 dark:child-hover:bg-[#121212] child:transition-all">
          <button className="w-full flex items-center justify-between py-1 px-3 xs:py-2 xs:px-6">
            <div className="flex items-center gap-x-[14px]">
              <div className="w-9 h-9 xs:w-11 xs:h-11 shrink-0">
                <Story img="user6.jpg" hasStory={false} />
              </div>
              <span className="max-w-40 text-sm text-left dark:text-gray-100 dir-rtl line-clamp-3">
                مخاطبتان، Arash با نام{" "}
                <span className="font-[600]">arash_times</span> در instagram
                است.{" "}
                <span className="text-gray-500 dark:text-[#a8a8a8]">4d</span>
              </span>
            </div>
            <button
              className={`${isFollow1 ? "secondary-btn " : "primary-btn"}  `}
              onClick={() => setIsFollow1(!isFollow1)}
            >
              {isFollow1 ? "Following" : "Follow"}
            </button>
          </button>
          <button className="w-full flex items-center justify-between py-1 px-3 xs:py-2 xs:px-6">
            <div className="flex items-center gap-x-[14px]">
              <div className="w-9 h-9 xs:w-11 xs:h-11 shrink-0">
                <Story img="user6.jpg" hasStory={false} />
              </div>
              <span className="max-w-40 text-sm text-left dark:text-gray-100 dir-rtl line-clamp-3">
                مخاطبتان، Arash با نام{" "}
                <span className="font-[600]">arash_times</span> در instagram
                است.{" "}
                <span className="text-gray-500 dark:text-[#a8a8a8]">4d</span>
              </span>
            </div>
            <button className="primary-btn">Follow</button>
          </button>
        </div>
      </div>

      {/* This Month */}
      <div className="pb-2 border-b-2 border-[#dbdbdb] dark:border-[#262626]">
        <h4 className="notification-section-title">این ماه</h4>
        <div className="child-hover:bg-gray-100 dark:child-hover:bg-[#121212] child:transition-all">
          <button className="w-full flex items-center justify-between py-1 px-3 xs:py-2 xs:px-6">
            <div className="flex items-center gap-x-[14px]">
              <div className="w-9 h-9 xs:w-11 xs:h-11 shrink-0">
                <Story img="user9.jpg" hasStory={true} hasNewStory />
              </div>
              <span className="max-w-40 text-sm text-left dark:text-gray-100 dir-rtl line-clamp-3">
                <span className="font-[600]">mohammad__dstg</span> شما را دنبال
                کرد.{" "}
                <span className="text-gray-500 dark:text-[#a8a8a8]">3w</span>
              </span>
            </div>
            <button
              className={`${isFollow2 ? "secondary-btn " : "primary-btn"}  `}
              onClick={() => setIsFollow2(!isFollow2)}
            >
              {isFollow2 ? "Following" : "Follow"}
            </button>
          </button>
        </div>
      </div>

      {/* Older */}
      <div>
        <h4 className="notification-section-title">قدیمی تر</h4>
        <div className="child-hover:bg-gray-100 dark:child-hover:bg-[#121212] child:transition-all">
          <button className="w-full flex items-center justify-between py-1 px-3 xs:py-2 xs:px-6">
            <div className="flex items-center gap-x-[14px]">
              <div className="w-9 h-9 xs:w-11 xs:h-11 shrink-0">
                <Story img="user10.jpg" hasStory={true} />
              </div>
              <span className="max-w-40 text-sm text-left dark:text-gray-100 dir-rtl line-clamp-3">
                <span className="font-[600]">aliakbar_mhp80</span> شما را دنبال
                کرد.{" "}
                <span className="text-gray-500 dark:text-[#a8a8a8]">4w</span>
              </span>
            </div>
            {/* <button className="primary-btn">
            Follow
          </button> */}
            <button className="secondary-btn">Following</button>
          </button>
          <button className="w-full flex items-center justify-between py-1 px-3 xs:py-2 xs:px-6">
            <div className="flex items-center gap-x-[14px]">
              <TwoProfile img1="user12.jpg" img2="user13.jpg" />
              <span className="max-w-40 text-sm text-left dark:text-gray-100 dir-rtl line-clamp-3">
                <span className="font-[600]">mohadeseh_haghkhah</span> و{" "}
                <span className="font-[600]">m.r_m.a.d</span> نظرتان را
                پسندیدند: 😂😐
                <span className="text-gray-500 dark:text-[#a8a8a8]">9w</span>
              </span>
            </div>
            <div className="w-9 h-9 xs:w-11 xs:h-11 shrink-0">
              <img
                src="images/notifs/notif1.jpg"
                alt=""
                className="w-full h-full"
              />
            </div>
          </button>
          <button className="w-full flex items-center justify-between py-1 px-3 xs:py-2 xs:px-6">
            <div className="flex items-center gap-x-[14px]">
              <div className="w-9 h-9 xs:w-11 xs:h-11 shrink-0">
                <Story img="user12.jpg" hasStory={false} />
              </div>
              <span className="max-w-40 text-sm text-left dark:text-gray-100 dir-rtl line-clamp-3">
                <span className="font-[600]">m.r_m.a.d</span> نظرتان را
                پسندیدند: 😍😎
                <span className="text-gray-500 dark:text-[#a8a8a8]">9w</span>
              </span>
            </div>
            <div className="w-9 h-9 xs:w-11 xs:h-11 shrink-0">
              <img
                src="images/notifs/notif2.jpg"
                alt=""
                className="w-full h-full"
              />
            </div>
          </button>
          <button className="w-full flex items-center justify-between py-1 px-3 xs:py-2 xs:px-6">
            <div className="flex items-center gap-x-[14px]">
              <TwoProfile img1="user12.jpg" img2="user11.jpg" />
              <span className="max-w-40 text-sm text-left dark:text-gray-100 dir-rtl line-clamp-3">
                <span className="font-[600]">storyhighlights11</span> ،{" "}
                <span className="font-[600]">m.r_m.a.d</span> و دیگران داستانتان
                را پسندیدند.
                <span className="text-gray-500 dark:text-[#a8a8a8]">9w</span>
              </span>
            </div>
            <div className="w-9 h-9 xs:w-11 xs:h-11 shrink-0">
              <img
                src="images/notifs/notif3.jfif"
                alt=""
                className="w-full h-full"
              />
            </div>
          </button>
          <button className="w-full flex items-center justify-between py-1 px-3 xs:py-2 xs:px-6">
            <div className="flex items-center gap-x-[14px]">
              <div className="w-9 h-9 xs:w-11 xs:h-11 shrink-0">
                <Story img="user14.jpg" hasStory={false} />
              </div>
              <span className="max-w-40 text-sm text-left dark:text-gray-100 dir-rtl line-clamp-3">
                مخاطبتان، abolfazl با نام khakestary9 در instagram است.{" "}
                <span className="text-gray-500 dark:text-[#a8a8a8]">11w</span>
              </span>
            </div>
            <button className="primary-btn">Follow</button>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotificationBox;
