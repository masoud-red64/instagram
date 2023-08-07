import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { slideShowSliceTypes } from "../../store/types/slideShowSlice.types";
import SearchInput from "../SearchInput/SearchInput";
import Story from "../Story/Story";
import TransparentOverlay from "../TransparentOverlay/TransparentOverlay";

function SearchSlideShow() {
  const SlideShowSelector = useSelector((state: slideShowSliceTypes) => state);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (SlideShowSelector.isShowSearch) {
      setTimeout(() => {
        setIsVisible(true);
      }, 300); // Adjust the delay time as needed
    } else {
      setIsVisible(false);
    }
  }, [SlideShowSelector.isShowSearch]);

  return (
    <>
      <div
        className={`hidden md:block fixed ${
          SlideShowSelector.isShowSearch ? "left-[72px]" : "-left-[400px]"
        } transition-all duration-500 delay-100 top-0 bottom-0 w-[397px] bg-white dark:bg-black pt-2 border-r border-[#dbdbdb] dark:border-[#262626] rounded-tr-2xl rounded-br-2xl shadow-[4px_0_24px_rgba(0,0,0,.15)] ${
          isVisible ? "z-10" : "z-30"
        }`}
      >
        {/* Header */}
        <div className="flex flex-col gap-y-11 mt-5 pb-6 text-left6 border-b border-[#dbdbdb] dark:border-[#262626]">
          <h2 className="text-black dark:text-neutral-100 text-2xl font-[600] pl-6">
            Search
          </h2>
          <div className="w-full px-4">
            <SearchInput />
          </div>
        </div>
        {/* Body */}
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
                  <svg className="w-4 h-4 text-[#737373]">
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
      </div>

      {/* Overlay */}
      <TransparentOverlay />
    </>
  );
}

export default SearchSlideShow;
