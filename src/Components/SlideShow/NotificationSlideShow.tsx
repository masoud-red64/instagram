import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

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
    <div
      className={`hidden md:block fixed ${
        slideShowSelector.isShowNotif ? "left-[72px]" : "-left-[400px]"
      } transition-all duration-500 delay-100 top-0 bottom-0 w-[397px] min-h-screen bg-red-300 ${
        isVisible ? "z-0" : "z-30"
      }`}
    >
      notif
    </div>
  );
}

export default NotificationSlideShow;
