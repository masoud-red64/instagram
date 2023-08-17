import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";
import Story from "../Components/Story/Story";
import { usersList } from "../Data/users";

function Stories() {
  const [isMutedVideo, setIsMutedVideo] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [parentSwiper, setParentSwiper] = useState();

  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-[#1a1a1a] overflow-hidden">
      <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-white">
        <svg className="w-[102px] h-7">
          <use href="#logo-instagram"></use>
        </svg>
        <svg className="w-6 h-6">
          <use href="#close"></use>
        </svg>
      </div>

      <div>
        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={150}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 1000,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={true}
          modules={[EffectCoverflow, Navigation]}
          className="story-content-swiper"
          slideToClickedSlide={true}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
            console.log(activeIndex);
          }}
          onSwiper={(swiper) => setParentSwiper(swiper)}
        >
          {usersList.map((user, index) => (
            <>
              {console.log(activeIndex)}
              <SwiperSlide key={user.id}>
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  // autoplay={
                  //   true&& {
                  //     delay: 5000,
                  //   }
                  // }
                  pagination={{
                    clickable: true,
                  }}
                  navigation={activeIndex === index}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="story-user-swiper"
                  watchSlidesProgress={true}
                  // onSlidePrevTransitionEnd={(swiper) => {
                  //   parentSwiper.slideNext();
                  // }}
                >
                  {user.stories.map((story, index) => (
                    <SwiperSlide key={story.id}>
                      <div
                        className="relative -z-10 w-full h-full rounded-lg bg-no-repeat bg-cover"
                        style={
                          story.img
                            ? {
                                backgroundImage: `url(images/stories/images/${story.img})`,
                              }
                            : {}
                        }
                      >
                        {/* Top */}
                        <div className="flex items-center justify-between bg-gradient-to-b from-[rgba(38,38,38,.8)] to-[rgba(38, 38, 38,0)] pt-5 px-4 pb-8">
                          <div className="flex items-center gap-x-2">
                            <div className="w-8 h-8">
                              <Story img={user.img} hasStory={false} />
                            </div>
                            <span className="text-sm text-white">
                              {user.username}
                            </span>
                            <span className="text-sm text-white/60">2h</span>
                          </div>
                          <div className="flex items-center gap-x-4 text-white">
                            <div>
                              {false ? (
                                <button>
                                  <svg
                                    className="w-4 h-4"
                                    onClick={() => {
                                      videoRef.current?.play();
                                    }}
                                  >
                                    <use href="#play"></use>
                                  </svg>
                                </button>
                              ) : (
                                <button
                                  onClick={() => {
                                    videoRef.current?.pause();
                                  }}
                                >
                                  <svg className="w-4 h-4">
                                    <use href="#pause"></use>
                                  </svg>
                                </button>
                              )}
                            </div>
                            <button
                              onClick={() => {
                                videoRef.current!.muted = !isMutedVideo;
                                setIsMutedVideo(!isMutedVideo);
                              }}
                            >
                              {isMutedVideo ? (
                                <svg className="w-4 h-4">
                                  <use href="#muted"></use>
                                </svg>
                              ) : (
                                <svg className="w-4 h-4">
                                  <use href="#not-muted"></use>
                                </svg>
                              )}
                            </button>

                            <button>
                              <svg className="w-6 h-6">
                                <use href="#three-points"></use>
                              </svg>
                            </button>
                          </div>
                        </div>

                        {/* Bottom */}
                        <div className="absolute bottom-0 right-0 left-0 p-4 flex items-center justify-between gap-x-4 bg-gradient-to-t from-[rgba(38,38,38,.6)] to-[rgba(38, 38, 38,0)]">
                          <input
                            type="text"
                            placeholder="Reply to barnamenevisiinsta"
                            className="py-2 px-4 grow bg-transparent border rounded-full text-[#dbdbdb] outline-none placeholder:text-[#dbdbdb]"
                          />
                          <button>
                            {/* <svg className="w-6 h-6 text-white">
                <use href="#notifications"></use>
              </svg> */}
                            <svg className="w-6 h-6 text-white">
                              <use href="#fill-heart"></use>
                            </svg>
                          </button>
                          <button>
                            <svg className="w-6 h-6 text-white">
                              <use href="#messages"></use>
                            </svg>
                          </button>
                        </div>

                        {story.video && (
                          <video
                            autoPlay
                            className="absolute -z-50 top-0 left-0 w-full h-full object-cover"
                            ref={videoRef}
                            muted={isMutedVideo}
                            onMouseDown={() => {
                              videoRef.current?.pause();
                            }}
                            onMouseUp={() => {
                              videoRef.current?.play();
                            }}
                          >
                            <source src={story.video} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        )}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="hidden prev-next__content">
                  <div className="w-[100px] h-[100px] pointer-events-none">
                    <Story img={user.img} hasStory hasNewStory />
                  </div>
                  <span className="text-lg">{user.username}</span>
                  <span className="text-lg">2h</span>
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Stories;
