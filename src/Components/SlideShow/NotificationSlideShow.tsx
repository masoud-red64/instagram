import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import NotificationBox from "../NotificationBox/NotificationBox";
import TransparentOverlay from "../TransparentOverlay/TransparentOverlay";

function NotificationSlideShow() {
  const slideShowSelector = useSelector(
    (state: RootState) => state.slideShowReducer
  );
  const [isVisible, setIsVisible] = useState(false);

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
    <>
      <div
        className={`hidden md:block fixed ${
          slideShowSelector.isShowNotif ? "left-[72px]" : "-left-[400px]"
        } transition-all duration-500 delay-100 top-0 bottom-0 w-[397px] overflow-y-auto scrollbar bg-white dark:bg-black pt-2 border-r border-[#dbdbdb] dark:border-[#262626] rounded-tr-2xl rounded-br-2xl shadow-[4px_0_24px_rgba(0,0,0,.15)] ${
          isVisible ? "z-10" : "z-30"
        }`}
      >
        {/* Header */}
        <h2 className="text-black dark:text-neutral-100 text-2xl font-[700] pt-4 pb-2 pl-6">
          Notifications
        </h2>
        {/* Body */}
        <NotificationBox />
      </div>

      {/* Overlay */}
      {slideShowSelector.isShowNotif && <TransparentOverlay />}
    </>
  );
}

export default NotificationSlideShow;
