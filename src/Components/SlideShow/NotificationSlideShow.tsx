import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Story from "../Story/Story";
import TwoProfile from "../TwoProfile/TwoProfile";

function NotificationSlideShow() {
  const slideShowSelector = useSelector(
    (state: RootState) => state.slideShowReducer
  );
  const [isVisible, setIsVisible] = useState(false);

  const [isFollow1, setIsFollow1] = useState(false);
  const [isFollow2, setIsFollow2] = useState(true);

  useEffect(() => {
    if (slideShowSelector.isShowNotif) {
      setTimeout(() => {
        setIsVisible(true);
      }, 300); // Adjust the delay time as needed
    } else {
      setIsVisible(false);
    }
  }, [slideShowSelector.isShowNotif]);

  return (
    <div
      className={`hidden md:block fixed ${
        slideShowSelector.isShowNotif ? "left-[72px]" : "-left-[400px]"
      } transition-all duration-500 delay-100 top-0 bottom-0 w-[397px] overflow-y-auto scrollbar bg-white dark:bg-black pt-2 border-r border-[#dbdbdb] dark:border-[#262626] rounded-tr-2xl rounded-br-2xl shadow-[4px_0_24px_rgba(0,0,0,.15)] ${
        isVisible ? "z-10" : "z-30"
      }`}
    >
      {/* Header */}
      <h2 className="text-black dark:text-neutral-100 text-2xl font-[700] pt-4 pb-6 pl-6">
        Notifications
      </h2>
      {/* Body */}
      <div>
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

        {/* This Week */}
        <div className="pb-2 border-b-2 border-[#dbdbdb] dark:border-[#262626]">
          <h4 className="notification-section-title">این هفته</h4>
          <div className="child-hover:bg-gray-100 dark:child-hover:bg-[#121212] child:transition-all">
            <button className="w-full flex items-center justify-between py-2 px-6">
              <div className="flex items-center gap-x-[14px]">
                <div className="w-11 h-11">
                  <Story img="user6.jpg" hasStory={false} />
                </div>
                <span className="w-40 text-sm text-left dark:text-gray-100 dir-rtl line-clamp-3">
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
            <button className="w-full flex items-center justify-between py-2 px-6">
              <div className="flex items-center gap-x-[14px]">
                <div className="w-11 h-11">
                  <Story img="user6.jpg" hasStory={false} />
                </div>
                <span className="w-40 text-sm text-left dark:text-gray-100 dir-rtl line-clamp-3">
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
            <button className="w-full flex items-center justify-between py-2 px-6">
              <div className="flex items-center gap-x-[14px]">
                <div className="w-11 h-11">
                  <Story img="user9.jpg" hasStory={true} hasNewStory />
                </div>
                <span className="w-40 text-sm text-left dark:text-gray-100 dir-rtl line-clamp-3">
                  <span className="font-[600]">mohammad__dstg</span> شما را
                  دنبال کرد.{" "}
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
            <button className="w-full flex items-center justify-between py-2 px-6">
              <div className="flex items-center gap-x-[14px]">
                <div className="w-11 h-11">
                  <Story img="user10.jpg" hasStory={true} />
                </div>
                <span className="w-40 text-sm text-left dark:text-gray-100 dir-rtl line-clamp-3">
                  <span className="font-[600]">aliakbar_mhp80</span> شما را
                  دنبال کرد.{" "}
                  <span className="text-gray-500 dark:text-[#a8a8a8]">4w</span>
                </span>
              </div>
              {/* <button className="primary-btn">
                Follow
              </button> */}
              <button className="secondary-btn">Following</button>
            </button>
            <button className="w-full flex items-center justify-between py-2 px-6">
              <div className="flex items-center gap-x-[14px]">
                <TwoProfile img1="user12.jpg" img2="user13.jpg" />
                <span className="w-40 text-sm text-left dark:text-gray-100 dir-rtl line-clamp-3">
                  <span className="font-[600]">mohadeseh_haghkhah</span> و{" "}
                  <span className="font-[600]">m.r_m.a.d</span> نظرتان را
                  پسندیدند: 😂😐
                  <span className="text-gray-500 dark:text-[#a8a8a8]">9w</span>
                </span>
              </div>
              <div className="w-11 h-11">
                <img
                  src="images/notifs/notif1.jpg"
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </button>
            <button className="w-full flex items-center justify-between py-2 px-6">
              <div className="flex items-center gap-x-[14px]">
                <div className="w-11 h-11">
                  <Story img="user12.jpg" hasStory={false} />
                </div>
                <span className="w-40 text-sm text-left dark:text-gray-100 dir-rtl line-clamp-3">
                  <span className="font-[600]">m.r_m.a.d</span> نظرتان را
                  پسندیدند: 😍😎
                  <span className="text-gray-500 dark:text-[#a8a8a8]">9w</span>
                </span>
              </div>
              <div className="w-11 h-11">
                <img
                  src="images/notifs/notif2.jpg"
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </button>
            <button className="w-full flex items-center justify-between py-2 px-6">
              <div className="flex items-center gap-x-[14px]">
                <TwoProfile img1="user12.jpg" img2="user11.jpg" />
                <span className="w-40 text-sm text-left dark:text-gray-100 dir-rtl line-clamp-3">
                  <span className="font-[600]">storyhighlights11</span> ،{" "}
                  <span className="font-[600]">m.r_m.a.d</span> و دیگران
                  داستانتان را پسندیدند.
                  <span className="text-gray-500 dark:text-[#a8a8a8]">9w</span>
                </span>
              </div>
              <div className="w-11 h-11">
                <img
                  src="images/notifs/notif3.jfif"
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </button>
            <button className="w-full flex items-center justify-between py-2 px-6">
              <div className="flex items-center gap-x-[14px]">
                <div className="w-11 h-11">
                  <Story img="user14.jpg" hasStory={false} />
                </div>
                <span className="w-40 text-sm text-left dark:text-gray-100 dir-rtl line-clamp-3">
                  مخاطبتان، abolfazl با نام khakestary9 در instagram است.{" "}
                  <span className="text-gray-500 dark:text-[#a8a8a8]">11w</span>
                </span>
              </div>
              <button className="primary-btn">Follow</button>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationSlideShow;
