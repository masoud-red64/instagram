import React from "react";
import Story from "../Components/Story/Story";

function Direct() {
  return (
    <div className="flex">
      <div className="w-[397px] min-h-screen overflow-y-auto scrollbar bg-white dark:bg-black pt-2 border-r border-[#dbdbdb] dark:border-[#262626]">
        {/* Header */}
        <div className="flex items-center justify-between pt-7 pb-3 px-6">
          <div className="flex items-center gap-x-2">
            <h2 className="text-black dark:text-neutral-100 text-xl font-[700]">
              masoud_red64
            </h2>
            <button>
              <svg className="w-3 h-3 rotate-180">
                <use href="#chevron-top"></use>
              </svg>
            </button>
          </div>
          <button>
            <svg className="w-6 h-6">
              <use href="#new-message"></use>
            </svg>
          </button>
        </div>

        {/* Main */}
        <div className="flex items-center justify-between pt-[14px] pb-2.5 px-6">
          <span className="font-[700]">Messages</span>
          <button className="font-[600] text-sm text-neutral-500">
            Requests
          </button>
        </div>
        <div>
          <ul>
            <li className="flex items-center justify-between py-2 px-6 hover:bg-neutral-100 transition-colors cursor-pointer">
              <div className="flex items-center gap-x-3">
                <div className="w-14 h-14">
                  <Story img="user1.jpg" hasStory={false} />
                </div>
                <div>
                  <span className="text-sm">Heydar</span>
                  <div className="text-xs text-neutral-500 mt-1">
                    <span>You sent an attachment.</span>
                    <span> · </span>
                    <span>1d</span>
                  </div>
                </div>
              </div>
              <svg className="w-[15px] h-[15px] text-neutral-500">
                <use href="#muted-message"></use>
              </svg>
            </li>
          </ul>
        </div>
      </div>
      <div className="grow"></div>
    </div>
  );
}

export default Direct;
