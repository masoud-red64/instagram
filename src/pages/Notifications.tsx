import React from "react";
import NotificationBox from "../Components/NotificationBox/NotificationBox";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { hideFollowRequestsInPage } from "../store/followRequestsSlice";
import FollowRequests from "../Components/FollowRequests/FollowRequests";

function Notifications() {
  const followRequestsSelector = useSelector(
    (state: RootState) => state.followRequestsReducer
  );

  const dispatch = useDispatch();

  return (
    <div className="max-w-[600px] mx-auto md:mt-4">
      <div className="h-[45px] flex md:hidden items-center justify-between dark:text-gray-100 px-4 border-b border-[#dbdbdb]">
        <button
          onClick={() => {
            followRequestsSelector.isShowFollowRequestsInPage
              ? dispatch(hideFollowRequestsInPage())
              : history.back();
          }}
        >
          <svg className="w-6 h-6 -rotate-90">
            <use href="#chevron-top"></use>
          </svg>
        </button>
        <h3 className="font-[600] grow text-center dark:">
          {followRequestsSelector.isShowFollowRequestsInPage
            ? "Follow Requests"
            : "Notifications"}
        </h3>
        <div className="w-1"></div>
      </div>
      {followRequestsSelector.isShowFollowRequestsInPage ? (
        <FollowRequests />
      ) : (
        <NotificationBox />
      )}
    </div>
  );
}

export default Notifications;
