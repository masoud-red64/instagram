import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import NotificationBox from "../NotificationBox/NotificationBox";
import TransparentOverlay from "../TransparentOverlay/TransparentOverlay";
import FollowRequests from "../FollowRequests/FollowRequests";
import { hideFollowRequestsInSlide } from "../../store/followRequestsSlice";

function NotificationSlideShow() {
  const slideShowSelector = useSelector(
    (state: RootState) => state.slideShowReducer
  );

  const followRequestsSelector = useSelector(
    (state: RootState) => state.followRequestsReducer
  );

  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useDispatch();

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
        } transition-[left] duration-500 delay-100 top-0 bottom-0 w-[397px] overflow-y-auto scrollbar bg-white dark:bg-black pt-2 border-r border-[#dbdbdb] dark:border-[#262626] rounded-tr-2xl rounded-br-2xl shadow-[4px_0_24px_rgba(0,0,0,.15)] ${
          isVisible ? "z-20" : "z-30"
        }`}
      >
        {followRequestsSelector.isShowFollowRequestsInSlide ? (
          <>
            {/* FollowRequests */}
            <div className="h-[45px] flex items-center justify-between dark:text-gray-100 px-4">
              <button
                className="hover:bg-gray-100 transition-all rounded-full p-3"
                onClick={() => {
                  dispatch(hideFollowRequestsInSlide());
                }}
              >
                <svg className="w-6 h-6 -rotate-90">
                  <use href="#chevron-top"></use>
                </svg>
              </button>
              <h3 className="font-[700] grow text-center dark:">
                Follow requests
              </h3>
              <div className="w-1"></div>
            </div>
            <FollowRequests />
          </>
        ) : (
          <>
            {/* Notifications */}
            <div>
              {/* Header */}
              <h2 className="text-black dark:text-neutral-100 text-2xl font-[700] pt-4 pb-2 pl-6">
                Notifications
              </h2>
              {/* Body */}
              <NotificationBox />
            </div>
          </>
        )}
      </div>

      {/* Overlay */}
      {slideShowSelector.isShowNotif && <TransparentOverlay className="" />}
    </>
  );
}

export default NotificationSlideShow;
