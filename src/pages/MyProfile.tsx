import { useParams } from "react-router-dom";
import Story from "../Components/Story/Story";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function MyProfile() {
  const userHighlights = [
    { id: 1, img: "highlight1.jpg" },
    { id: 2, img: "highlight2.jpg" },
    { id: 3, img: "highlight3.jpg" },
    { id: 4, img: "highlight4.jpg" },
    { id: 5, img: "highlight5.jpg" },
    { id: 6, img: "highlight6.jpg" },
    { id: 6, img: "highlight6.jpg" },
    { id: 6, img: "highlight6.jpg" },
    { id: 6, img: "highlight6.jpg" },
    { id: 6, img: "highlight6.jpg" },
  ];

  const { username } = useParams();
  if (username === "masoud_red64") {
    return (
      <div className="max-w-[975px] mx-auto sm:pt-[30px] sm:px-5">
        <header className="flex items-center gap-x-[30px] mt-4 mx-4 mb-6 md:m-0 md:mb-11">
          <div className="grow shrink-0">
            <div className="w-[77px] h-[77px] md:w-[150px] md:h-[150px] mx-auto">
              <Story id={1} img="user1.jpg" hasStory hasNewStory />
            </div>
          </div>
          <div className="grow-[2] flex flex-col gap-y-5">
            <div className="flex items-center">
              <span className="text-xl mr-5">masoud_red64</span>
              <div className="hidden md:flex items-center gap-x-2">
                <button className="secondary-btn">Edit profile</button>
                <button className="secondary-btn mr-3">View Archive</button>
              </div>
              <button>
                <svg className="w-6 h-6">
                  <use href="#setting"></use>
                </svg>
              </button>
            </div>

            <div className="flex md:hidden items-center gap-x-2">
              <button className="secondary-btn">Edit profile</button>
              <button className="secondary-btn mr-3">View Archive</button>
            </div>

            <div className="hidden md:flex items-center gap-x-10">
              <div className="flex gap-x-1">
                <span className="font-[600]">0</span>
                <span>posts</span>
              </div>
              <div className="flex gap-x-1">
                <span className="font-[600]">299</span>
                <span>followers</span>
              </div>
              <div className="flex gap-x-1">
                <span className="font-[600]">151</span>
                <span>following</span>
              </div>
            </div>

            <div className="hidden md:flex flex-col">
              <span className="text-sm font-[600]">M҉a҉s҉o҉u҉d҉</span>
              <span className="leading-[18px]">
                ▷ ●━━━━━━─────── ♪🖤
                <br />
                ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤㅤㅤ↻
              </span>
            </div>
          </div>
        </header>
        <div className="flex md:hidden flex-col px-4 pb-5">
          <span className="text-sm font-[600]">M҉a҉s҉o҉u҉d҉</span>
          <span className="leading-[18px]">
            ▷ ●━━━━━━─────── ♪🖤
            <br />
            ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤㅤㅤ↻
          </span>
        </div>

        <main>
          {/* Swiper */}
          <section className="mb-5 md:mb-11">
            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 6,
                },
                1024: {
                  slidesPerView: 8,
                },
              }}
              navigation={true}
              modules={[Navigation]}
              className="highlights-swiper w-64 xs:w-[350px] sm:w-[550px] md:w-[600px] lg:w-[850px]"
            >
              {userHighlights.map((highlight) => (
                <SwiperSlide>
                  <div className="flex flex-col items-center gap-y-3">
                    <div className="w-14 h-14 md:w-[77px] md:h-[77px]">
                      <Story
                        img={`/highlights/${highlight.img}`}
                        hasStory
                        hasNewStory={false}
                      />
                    </div>
                    <span className="text-xs font-[600]">Highlights</span>
                  </div>
                </SwiperSlide>
              ))}
              <SwiperSlide>
                <div className="flex flex-col items-center gap-y-3">
                  <div className="w-14 h-14 md:w-[77px] md:h-[77px] flex items-center justify-center bg-zinc-50 border rounded-full">
                    <svg className="w-[30px] h-[30px] md:w-11 md:h-11 text-[#c7c7c7]">
                      <use href="#plus"></use>
                    </svg>
                  </div>
                  <span className="text-xs font-[600]">New</span>
                </div>
              </SwiperSlide>
            </Swiper>
          </section>

          {/* Info Of Page */}
          <section className="md:hidden py-3 border-t border-[#dbdbdb] dark:border-[#363636]">
            <ul className="flex items-center justify-around text-sm">
              <li className="flex w-full flex-col items-center">
                <span className="font-[600]">0</span>
                <span className="text-neutral-500">posts</span>
              </li>
              <li className="flex w-full flex-col items-center">
                <span className="font-[600]">299</span>
                <span className="text-neutral-500">followers</span>
              </li>
              <li className="flex w-full flex-col items-center">
                <span className="font-[600]">151</span>
                <span className="text-neutral-500">following</span>
              </li>
            </ul>
          </section>

          {/* Nav */}
          <section>
            <nav>
              <ul className="flex items-center justify-center md:gap-x-[60px] tracking-wider border-t border-[#dbdbdb] dark:border-[#363636]">
                <li className="flex grow shrink basis-auto md:grow-0 items-center justify-center gap-x-1 text-[#0095f6] md:text-black py-4 border-t border-black">
                  <svg className="w-6 h-6 md:w-3 md:h-3">
                    <use href="#posts"></use>
                  </svg>
                  <span className="hidden md:inline-block text-xs font-[600]">
                    POSTS
                  </span>
                </li>
                <li className="flex grow shrink basis-auto md:grow-0 items-center justify-center gap-x-1 text-neutral-500 py-4">
                  <svg className="w-6 h-6 md:w-3 md:h-3">
                    <use href="#save"></use>
                  </svg>
                  <span className="hidden md:inline-block text-xs font-[600]">
                    SAVED
                  </span>
                </li>
                <li className="flex grow shrink basis-auto md:grow-0 items-center justify-center gap-x-1 text-neutral-500 py-4">
                  <svg className="w-6 h-6 md:w-3 md:h-3">
                    <use href="#tagged"></use>
                  </svg>
                  <span className="hidden md:inline-block text-xs font-[600]">
                    TAGGED
                  </span>
                </li>
              </ul>
            </nav>
          </section>

          {/* Content */}
          <section>
            {/* Tagged */}
            {/* <div className="flex flex-col items-center justify-center my-[60px]">
              <div className="w-[62px] h-[62px] bg-icons bg-no-repeat bg-[-256px_-269px]"></div>
              <span className="text-[30px] font-[800] my-3">Photos of you</span>
              <span className="text-sm">
                When people tag you in photos, they'll appear here.
              </span>
            </div> */}

            {/* Posts */}
            {/* <div>
              <div className="flex flex-col items-center justify-center my-[60px]">
                <div className="w-[62px] h-[62px] bg-icons bg-no-repeat bg-[-128px_-269px]"></div>
                <span className="text-[30px] font-[800] my-3">
                  Share Photos
                </span>
                <span className="text-sm">
                  When you share photos, they will appear on your profile.
                </span>
                <button className="text-[#0095f6] text-sm font-[600] mt-4">
                  Share your first photo
                </button>
              </div>
            </div> */}

            {/* Saved */}
            <div>
              <div className="flex items-center justify-between mt-8 mb-4">
                <span className="text-xs text-neutral-500">
                  Only you can see what you've saved
                </span>
                <span className="text-sm font-[600] text-[#0095f6]">
                  + New Collection
                </span>
              </div>
              <div className="relative group w-[300px] h-[300px] mx-auto rounded-md overflow-hidden cursor-pointer">
                <div className="grid grid-cols-2 divide-x divide-y">
                  <div>
                    <img
                      className="w-[150px] h-[150px] object-cover"
                      src="/images/stories/images/img28.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="w-[150px] h-[150px] object-cover"
                      src="/images/stories/images/img19.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="w-[150px] h-[150px] object-cover"
                      src="/images/stories/images/img24.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="w-[150px] h-[150px] object-cover"
                      src="/images/stories/images/img25.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="absolute inset-0 group-hover:bg-none bg-gradient-to-t from-[#262626]/50 to-white/0"></div>
                <span className="absolute bottom-3 left-5 text-xl text-white">
                  All Posts
                </span>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  } else {
    return null;
  }
}

export default MyProfile;
