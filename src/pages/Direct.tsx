import React from "react";
import Story from "../Components/Story/Story";
import { usersList } from "../Data/users";

function Direct() {
  return (
    <div className="flex h-[calc(100vh-48px)] md:h-screen">
      <div className="max-w-[397px] flex flex-col bg-white dark:bg-black pt-2 border-r border-[#dbdbdb] dark:border-[#262626]">
        {/* Header */}
        <div className="flex items-center justify-center md:justify-between pt-7 pb-3 px-6">
          <div className="hidden md:flex items-center gap-x-2">
            <h2 className="text-black dark:text-neutral-100 text-xl font-[700]">
              masoud_red64
            </h2>
            <button>
              <svg className="w-3 h-3 rotate-180">
                <use href="#chevron-top"></use>
              </svg>
            </button>
          </div>
          <button className="">
            <svg className="w-6 h-6">
              <use href="#new-message"></use>
            </svg>
          </button>
        </div>

        {/* Main */}
        <div className="hidden md:flex items-center justify-between pt-[14px] pb-2.5 px-6 ">
          <span className="font-[700]">Messages</span>
          <button className="font-[600] text-sm text-neutral-500">
            Requests
          </button>
        </div>
        <div className="h-full overflow-y-auto scrollbar">
          <ul>
            {usersList.map((user, index) => (
              <li className="flex items-center justify-between py-2 px-6 hover:bg-neutral-100 transition-colors cursor-pointer">
                <div className="flex items-center gap-x-3">
                  <div className="w-14 h-14">
                    <Story img={user.img} hasStory={false} />
                  </div>
                  <div className="hidden md:block">
                    <span className="text-sm">{user.name}</span>
                    <div className="text-xs text-neutral-500 mt-1">
                      <span>
                        {index % 5 === 0
                          ? "You sent an attachment."
                          : index % 3 === 0
                          ? "Liked a message"
                          : `${user.name} shared a story`}
                      </span>
                      <span> · </span>
                      <span>1d</span>
                    </div>
                  </div>
                </div>
                {index % 5 === 0 && (
                  <svg className="hidden md:inline-block w-[15px] h-[15px] text-neutral-500">
                    <use href="#muted-message"></use>
                  </svg>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grow"></div>
    </div>
  );
}

export default Direct;
