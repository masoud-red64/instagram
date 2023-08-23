import React from "react";
import Story from "../Components/Story/Story";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Mousewheel, Keyboard } from "swiper/modules";
import { usersList } from "../Data/users";

function Reels() {
  return (
    <div className="overflow-y-scroll pt-4">
      <Swiper
        direction={"vertical"}
        slidesPerView={1.1}
        spaceBetween={10}
        mousewheel={true}
        modules={[Mousewheel, Keyboard]}
        className="reel-swiper h-[94vh]  w-[410px]"
        slideToClickedSlide={true}
        centeredSlides={true}
        keyboard={{
          enabled: true,
          pageUpDown: true,
        }}
      >
        {usersList.map((user) =>
          user.stories.map(
            (reel) =>
              reel.video && (
                <SwiperSlide>
                  <>
                    <div className="mx-auto flex items-end justify-between">
                      <div className="relative max-w-[360px] max-h-[610px] rounded-sm overflow-hidden">
                        <video
                          className="h-full object-cover"
                          src={`/images/stories/videos/${reel.video}`}
                        ></video>
                        {/* Mute Icon */}
                        <button className="absolute top-4 right-4 bg-[#dbdbdb]/30 p-2 rounded-full">
                          <svg className="w-4 h-4 text-white">
                            <use href="#muted"></use>
                          </svg>
                        </button>

                        {/* Play Icon */}
                        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-auto bg-black/40 p-6 rounded-full">
                          <svg className="w-6 h-6 text-white">
                            <use href="#play"></use>
                          </svg>
                        </button>

                        {/* Description */}
                        <div className="absolute bottom-0 max-h-1/2 w-full p-4">
                          <div className="flex items-center gap-x-3">
                            <div className="w-8 h-8">
                              <Story img={user.img} hasStory={false} />
                            </div>
                            <div className="text-white font-[600] text-sm">
                              <span>{user.username}</span>
                              <span className="inline-block mx-1.5">•</span>
                              <span>Follow</span>
                            </div>
                          </div>

                          <div className=" overflow-y-auto text-right mt-4 mb-2">
                            <span className="text-sm text-white text-right line-clamp-1">
                              👀 سیو کن لازمت میشه
                              <br />
                              <br />
                              اسم چنلاشون 👇🏻
                              <br />
                              <br />
                              Alex Hormozi <br />
                              Ali Abdaal
                              <br />
                              Iman Gadzhi
                              <br />
                              Andrew Kirby
                              <br />
                              <br />
                              سومی رو از همه بیشتر دوست دارم من 💎
                              <br />
                              یوتیوبر های ایرانی هم تو پارت بعدی میزارم 👌🏻
                              <br />
                              <br />
                              اگه به رشد فردی و توسعه فردی علاقه داری بیا تو پیج
                              🫂
                              <br />
                              پیج اصلا انگیزشی نیست اینجا باهم یاد میگیریم !{" "}
                              <br />
                              <a>@lifeguidbook</a> <br />
                              <br />
                              <a>#تغییر</a> <a>#یوتیوبر</a>{" "}
                              <a>#تغییر_سبک_زندگی</a> <a>#زندگی</a>{" "}
                              <a>#موفقیت</a> <a>#معلم</a>
                            </span>
                            <span className="text-sm text-white/70">
                              more...
                            </span>
                          </div>

                          <div className="flex items-center gap-x-2 text-white text-sm dir-rtl">
                            <div className="flex items-center gap-x-1">
                              <span className="line-clamp-1">
                                موفقیت حاصل فکر بزرگ
                              </span>
                              <svg className="w-3 h-3">
                                <use href="#location"></use>
                              </svg>
                            </div>
                            <div className="flex items-center gap-x-1">
                              <div className="w-40 flex gap-x-10 overflow-hidden">
                                <span className="inline-block marquee-text ">
                                  lifeguidbook · Original audio
                                </span>
                              </div>
                              <svg className="w-3 h-3">
                                <use href="#audio"></use>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-5">
                        <button className="hover:opacity-50 transition-opacity">
                          <svg className="w-6 h-6 text-black dark:text-neutral-100">
                            <use href="#notifications"></use>
                          </svg>
                          <span className="text-xs">28k</span>
                        </button>
                        <button className="hover:opacity-50 transition-opacity">
                          <svg className="w-6 h-6 text-black dark:text-neutral-100">
                            <use href="#comments"></use>
                          </svg>
                          <span className="text-xs">344</span>
                        </button>
                        <button className="hover:opacity-50 transition-opacity">
                          <svg className="w-6 h-6 text-black dark:text-neutral-100">
                            <use href="#messages"></use>
                          </svg>
                        </button>
                        <button className="hover:opacity-50 transition-opacity">
                          <svg className="w-6 h-6 text-black dark:text-neutral-100">
                            <use href="#save"></use>
                          </svg>
                        </button>
                        <button className="hover:opacity-50 transition-opacity">
                          <svg className="w-6 h-6 text-black dark:text-neutral-100">
                            <use href="#more-options"></use>
                          </svg>
                        </button>
                        <button className="w-6 h-6 rounded-md overflow-hidden hover:opacity-50 transition-opacity">
                          <img src={`/images/users/${user.img}`} alt="" />
                        </button>
                      </div>
                    </div>
                  </>
                </SwiperSlide>
              )
          )
        )}
      </Swiper>
    </div>
  );
}

export default Reels;