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
              <li className="flex items-center justify-center sm:justify-between py-2 px-1 sm:px-6 hover:bg-neutral-100 transition-colors cursor-pointer">
                <div className="flex items-center justify-center gap-x-3">
                  <div className="w-10 h-10 sm:w-14 sm:h-14">
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
      <div className="w-full grow">
        {/* Empty Box */}
        {/* <div className="h-full w-full flex flex-col items-center justify-center">
          <svg className="w-24 h-24">
            <use href="#empty-message-box"></use>
          </svg>
          <span className="text-xl pt-4">Your messages</span>
          <span className="text-sm text-neutral-500 text-center pt-2">
            Send private photos and messages to a friend or group
          </span>
          <button className="primary-btn mt-4">Send message</button>
        </div> */}

        {/* Messages Box */}
        <div className="w-full h-full flex flex-col">
          {/* Top */}
          <div className="h-[75px] flex items-center justify-between px-4 border-b border-[#dbdbdb]">
            <div className="flex items-center gap-x-3">
              <div className="w-11 h-11">
                <Story img="user1.jpg" hasStory={false} />
              </div>
              <span>amenej</span>
            </div>
            <div className="flex items-center gap-x-4">
              <button>
                <svg className="w-6 h-6">
                  <use href="#audio-call"></use>
                </svg>
              </button>
              <button>
                <svg className="w-6 h-6">
                  <use href="#video-call"></use>
                </svg>
              </button>
              <button>
                <svg className="w-6 h-6">
                  <use href="#information"></use>
                </svg>
              </button>
            </div>
          </div>

          {/* Center => Messages */}
          <div className="h-[calc(100vh-150px)] overflow-y-auto scrollbar px-1 sm:px-4">
            {/* Date */}
            <div className="text-xs text-[#8a8d91] font-[500] py-4 text-center">
              Wed 10:28
            </div>

            {/* Message */}
            <div className="flex flex-col gap-y-3">
              {/*Send Post */}
              <div className="flex items-center flex-row-reverse gap-x-4">
                <div className="relative w-[150px] sm:w-[198px] sm:h-[352px] rounded-2xl overflow-hidden">
                  <video
                    src="/images/stories/videos/video21.mp4"
                    className="h-full object-cover"
                  ></video>

                  {/* Top */}
                  <div className="absolute top-3 left-3 right-3 flex items-center gap-x-2">
                    <div className="w-8 h-8">
                      <Story img="user3.jpg" hasStory={false} />
                    </div>
                    <span className="text-white text-sm font-[600]">
                      tarafdar.football
                    </span>
                  </div>

                  {/* Video Icon */}
                  <svg className="absolute w-6 h-6 bottom-3 left-3 text-white">
                    <use href="#reels-active"></use>
                  </svg>
                </div>
                <div className="flex items-center justify-center gap-x-1 sm:gap-x-4 gap-y-2 flex-wrap  opacity-50">
                  <button>
                    <svg className="w-4 h-4">
                      <use href="#more-options"></use>
                    </svg>
                  </button>
                  <button>
                    <svg className="w-4 h-4">
                      <use href="#reply"></use>
                    </svg>
                  </button>
                  <button>
                    <svg className="w-4 h-4">
                      <use href="#emoji"></use>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Receive Post */}
              <div className="flex items-center">
                <div className="w-7 h-7 mt-auto">
                  <Story img="user1.jpg" hasStory={false} />
                </div>
                <div className="relative w-[150px] sm:w-[198px] sm:h-[352px] ml-2 mr-4 rounded-2xl overflow-hidden">
                  <video
                    src="/images/stories/videos/video21.mp4"
                    className="h-full object-cover"
                  ></video>

                  {/* Top */}
                  <div className="absolute top-3 left-3 right-3 flex items-center gap-x-2">
                    <div className="w-8 h-8">
                      <Story img="user3.jpg" hasStory={false} />
                    </div>
                    <span className="text-white text-sm font-[600]">
                      tarafdar.football
                    </span>
                  </div>

                  {/* Video Icon */}
                  <svg className="absolute w-6 h-6 bottom-3 left-3 text-white">
                    <use href="#reels-active"></use>
                  </svg>
                </div>
                <div className="flex items-center justify-center gap-x-1 sm:gap-x-4 gap-y-2 flex-wrap  opacity-50">
                  <button>
                    <svg className="w-4 h-4">
                      <use href="#emoji"></use>
                    </svg>
                  </button>
                  <button>
                    <svg className="w-4 h-4">
                      <use href="#reply"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex items-center justify-center grow px-4">
            <div className="w-full h-11 flex items-center pr-4 pl-3  border border-[#dbdbdb] rounded-full">
              <button>
                <svg className="w-6 h-6">
                  <use href="#emoji"></use>
                </svg>
              </button>
              <input
                type="text"
                placeholder="Message..."
                className="w-full grow mx-3 border-0 outline-none"
              />
              <div className="flex items-center gap-x-4">
                <button>
                  <svg className="w-6 h-6">
                    <use href="#voice"></use>
                  </svg>
                </button>
                <button>
                  <svg className="w-6 h-6">
                    <use href="#gallery"></use>
                  </svg>
                </button>
                <button>
                  <svg className="w-6 h-6">
                    <use href="#notifications"></use>
                  </svg>
                </button>
              </div>
              {/* <button className="font-[600] text-sm text-[#0095f6]">Send</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Direct;
