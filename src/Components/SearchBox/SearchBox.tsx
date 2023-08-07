import React from "react";
import Story from "../Story/Story";

function SearchBox() {
  return (
    <div className="h-3/4 mt-3 overflow-auto scrollbar">
      {/* Top */}
      <div className="flex justify-between items-center text-left font-[600] mt-1.5 mb-2 mx-6 pt-1">
        <span className="text-black dark:text-neutral-100">Recent</span>
        <button className="text-sm text-[#0095f6] hover:text-[#00376b] transition-colors">
          Clear all
        </button>
      </div>

      {/* Content */}
      <ul className="my-2">
        <li className="hover:hover-item transition-colors">
          <div className="flex items-center justify-between px-6 py-2">
            <button className="flex items-center gap-x-3">
              <div className="w-[54px] h-[54px]">
                <Story img="user1.jpg" hasStory={true} hasNewStory={true} />
              </div>

              <a href="#" className="block text-sm text-left">
                <span className="text-black dark:text-neutral-100 line-clamp-1">
                  masoud_red64
                </span>
                <span className="text-[#737373] line-clamp-1">Masoud</span>
              </a>
            </button>
            <button>
              <svg className="w-4 h-4 text-[#737373] pointer-events-none">
                <use href="#close"></use>
              </svg>
            </button>
          </div>
        </li>
        <li className="hover:hover-item transition-colors">
          <div className="link-content flex items-center justify-between px-6 py-2">
            <button className="flex items-center gap-x-3  ">
              <div className="w-[54px] h-[54px]">
                <Story img="user2.jpg" hasStory={true} />
              </div>

              <a href="#" className="block text-sm text-left">
                <span className="text-black dark:text-neutral-100 line-clamp-1">
                  m2.designing
                </span>
                <span className="text-[#737373] line-clamp-1">
                  M2 D E S I G N • Following
                </span>
              </a>
            </button>
            <button>
              <svg className="w-4 h-4 text-[#737373]">
                <use href="#close"></use>
              </svg>
            </button>
          </div>
        </li>
        <li className="hover:hover-item transition-colors">
          <div className="link-content flex items-center justify-between px-6 py-2">
            <button className="flex items-center gap-x-3">
              <div className="w-[54px] h-[54px]">
                <Story img="user3.jpg" hasStory={false} />
              </div>

              <a href="#" className="block text-sm text-left">
                <span className="text-black dark:text-neutral-100 line-clamp-1">
                  nikolausofpersia
                </span>
                <span className="text-[#737373] line-clamp-1">
                  Nikolaus • Following
                </span>
              </a>
            </button>
            <button>
              <svg className="w-4 h-4 text-[#737373]">
                <use href="#close"></use>
              </svg>
            </button>
          </div>
        </li>
        <li className="hover:hover-item transition-colors">
          <div className="flex items-center justify-between px-6 py-2">
            <button className="flex items-center gap-x-3">
              <div className="w-[54px] h-[54px]">
                <Story img="user4.jpg" hasStory={true} hasNewStory={true} />
              </div>

              <a href="#" className="block text-sm text-left">
                <span className="flex items-end gap-x-1 text-black dark:text-neutral-100 line-clamp-1">
                  bbcpersian
                  <svg className="w-3 h-3">
                    <use href="#blue-tik"></use>
                  </svg>
                </span>
                <span className="text-[#737373] line-clamp-1">
                  BBC NEWS فارسی • 19.4M followers
                </span>
              </a>
            </button>
            <button>
              <svg className="w-4 h-4 text-[#737373]">
                <use href="#close"></use>
              </svg>
            </button>
          </div>
        </li>
        <li className="hover:hover-item transition-colors">
          <div className="link-content flex items-center justify-between px-6 py-2">
            <button className="flex items-center gap-x-3">
              <div className="w-[54px] h-[54px]">
                <Story img="user5.jpg" hasStory={true} />
              </div>

              <a href="#" className="block text-sm text-left">
                <span className="text-black dark:text-neutral-100 line-clamp-1">
                  marzieh_d64
                </span>
                <span className="text-[#737373] line-clamp-1">Marzieh</span>
              </a>
            </button>
            <button>
              <svg className="w-4 h-4 text-[#737373]">
                <use href="#close"></use>
              </svg>
            </button>
          </div>
        </li>
        <li className="hover:hover-item transition-colors">
          <div className="link-content flex items-center justify-between px-6 py-2">
            <button className="flex items-center gap-x-3">
              <div className="w-[54px] h-[54px]">
                <Story img="user6.jpg" hasStory={false} />
              </div>

              <a href="#" className="block text-sm text-left">
                <span className="text-black dark:text-neutral-100 line-clamp-1">
                  arash_times
                </span>
                <span className="text-[#737373] line-clamp-1">
                  Arash • Following
                </span>
              </a>
            </button>
            <button>
              <svg className="w-4 h-4 text-[#737373]">
                <use href="#close"></use>
              </svg>
            </button>
          </div>
        </li>
        <li className="hover:hover-item transition-colors">
          <div className="flex items-center justify-between px-6 py-2">
            <button className="flex items-center gap-x-3">
              <div className="w-[54px] h-[54px]">
                <Story img="user7.jpg" hasStory={true} hasNewStory={true} />
              </div>

              <a href="#" className="block text-sm text-left">
                <span className="text-black dark:text-neutral-100 line-clamp-1">
                  ketab20.ir
                </span>
                <span className="text-[#737373] line-clamp-1">
                  فروشگاه آنلاین کتاب • Following
                </span>
              </a>
            </button>
            <button>
              <svg className="w-4 h-4 text-[#737373]">
                <use href="#close"></use>
              </svg>
            </button>
          </div>
        </li>
        <li className="hover:hover-item transition-colors">
          <div className="link-content flex items-center justify-between px-6 py-2">
            <button className="flex items-center gap-x-3">
              <div className="w-[54px] h-[54px]">
                <Story img="user8.jpg" hasStory={true} />
              </div>

              <a href="#" className="block text-sm text-left">
                <span className="text-black dark:text-neutral-100 line-clamp-1">
                  mobonews
                </span>
                <span className="text-[#737373] line-clamp-1">
                  Mobonews | موبونیوز • Following
                </span>
              </a>
            </button>
            <button>
              <svg className="w-4 h-4 text-[#737373]">
                <use href="#close"></use>
              </svg>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SearchBox;
