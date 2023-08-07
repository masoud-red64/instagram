import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { slideShowSliceTypes } from "../../store/types/slideShowSlice.types";

function NotificationSlideShow() {
  const SlideShowSelector = useSelector((state: slideShowSliceTypes) => state);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (SlideShowSelector.isShowNotif) {
      setTimeout(() => {
        setIsVisible(true);
      }, 300); // Adjust the delay time as needed
    } else {
      setIsVisible(false);
    }
  }, [SlideShowSelector.isShowNotif]);

  return (
    <div
      className={`hidden md:block fixed ${
        SlideShowSelector.isShowNotif ? "left-[72px]" : "-left-[400px]"
      } transition-all duration-500 delay-100 top-0 bottom-0 w-[397px] min-h-screen bg-red-300 ${
        isVisible ? "z-0" : "z-30"
      }`}
    >
      notif
    </div>
  );
}

export default NotificationSlideShow;
