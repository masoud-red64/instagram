import React from "react";
import { usersList } from "../../Data/users";
import Story from "../Story/Story";

function FollowRequests() {
  return (
    <div className="pb-12 md:pb-0">
      <div>
        {usersList.map((user) => (
          <div className="flex items-center justify-between py-3 px-1 xs:px-3 sm:px-6 hover:bg-gray-100 dark:hover:bg-[#121212] transition-all">
            <div className="flex items-center gap-x-3">
              <div className="w-11 h-11 shrink-0">
                <Story
                id={user.id}
                  img={user.img}
                  hasStory={user.hasStory}
                  hasNewStory={user.hasNewStory}
                />
              </div>
              <div className="break-all">
                <a href="#" className="block font-[700] text-sm">
                  {user.username}
                </a>
                <span className="text-sm text-[#737373]">{user.name}</span>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <button className="primary-btn">Confirm</button>
              <button className="secondary-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FollowRequests;
