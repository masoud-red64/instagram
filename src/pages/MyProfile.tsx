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
      <div className="md:container md:mx-auto sm:pt-[30px] sm:px-5">
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
          <section>
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
              className="highlights-swiper w-64 container xs:w-full"
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
        </main>
      </div>
    );
  } else {
    return null;
  }
}

export default MyProfile;
