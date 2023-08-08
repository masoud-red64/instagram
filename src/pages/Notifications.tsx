import React from "react";
import NotificationBox from "../Components/NotificationBox/NotificationBox";

function Notifications() {
  return (
    <div>
      <div className="h-[45px] flex md:hidden items-center justify-between dark:text-gray-100 px-4 border-b border-[#dbdbdb]">
        <div>
          <svg className="w-6 h-6 -rotate-90">
            <use href="#arrow-top"></use>
          </svg>
        </div>
        <h3 className="font-[600] grow text-center dark:">Notifications</h3>
        <div className="w-1"></div>
      </div>
      <NotificationBox />
    </div>
  );
}

export default Notifications;
