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
import { Link, useNavigate, useParams } from "react-router-dom";

function Stories() {
  const [isMutedVideo, setIsMutedVideo] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [parentSwiper, setParentSwiper] = useState();
  const [isPauseSwiper, setIsPauseSwiper] = useState(false);
  const [storyLikeStatus, setStoryLikeStatus] = useState<{
    [key: number]: boolean;
  }>({});

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [activeVideoRef, setActiveVideoRef] = useState<HTMLVideoElement | null>(
    null
  );

  const navigate = useNavigate();

  const { userID } = useParams();

  useEffect(() => {
    parentSwiper && parentSwiper.slideTo(Number(userID) - 1);
  }, [userID]);

  const handleLikeClick = (userID: number) => {
    setStoryLikeStatus((prevStatus) => ({
      ...prevStatus,
      [userID]: !prevStatus[userID],
    }));
  };

  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-[#1a1a1a] overflow-hidden">
      <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-white">
        <svg className="w-[102px] h-7">
          <use href="#logo-instagram"></use>
        </svg>
        <button onClick={() => navigate("/")}>
          <svg className="w-6 h-6">
            <use href="#close"></use>
          </svg>
        </button>
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
          // slideToClickedSlide={true}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          onSwiper={(swiper) => {
            setParentSwiper(swiper);
            swiper.slideTo(Number(userID) - 1);
          }}
        >
          {usersList.map((user, index) => (
            <>
              {console.log(activeIndex)}
              <SwiperSlide key={user.id}>
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={activeIndex === index}
                  modules={[Autoplay, Pagination, Navigation]}
                  className={`story-user-swiper ${
                    isPauseSwiper ? "swiper-paused" : ""
                  }`}
                  watchSlidesProgress={true}
                  onSlidePrevTransitionEnd={(swiper) => {
                    parentSwiper.slideNext();
                  }}
                >
                  {user.stories.map((story, index) => (
                    <SwiperSlide
                      key={story.id}
                      onMouseDown={() => {
                        setIsPauseSwiper(true);
                      }}
                      onMouseUp={() => setIsPauseSwiper(false)}
                    >
                      <div className="relative -z-10 w-full h-full rounded-lg">
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
                              {isPauseSwiper ? (
                                <button
                                  onClick={() => {
                                    setIsPauseSwiper(false);
                                  }}
                                >
                                  <svg className="w-4 h-4">
                                    <use href="#play"></use>
                                  </svg>
                                </button>
                              ) : (
                                <button
                                  onClick={() => {
                                    setIsPauseSwiper(true);
                                  }}
                                >
                                  <svg className="w-4 h-4">
                                    <use href="#pause"></use>
                                  </svg>
                                </button>
                              )}
                            </div>
                            <button
                            // onClick={() => {
                            //   if (story.video) {
                            //     videoRef.current!.muted = !isMutedVideo;
                            //     setIsMutedVideo(!isMutedVideo);
                            //   }
                            // }}
                            >
                              {isMutedVideo || story.img ? (
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
                            placeholder={`Reply to ${user.username}`}
                            className="py-2 px-4 grow bg-transparent border rounded-full text-[#dbdbdb] outline-none placeholder:text-[#dbdbdb]"
                          />
                          <button onClick={() => handleLikeClick(user.id)}>
                            {storyLikeStatus[user.id] ? (
                              <svg className="w-6 h-6 text-white">
                                <use href="#fill-heart"></use>
                              </svg>
                            ) : (
                              <svg className="w-6 h-6 text-white">
                                <use href="#notifications"></use>
                              </svg>
                            )}
                          </button>
                          <button>
                            <svg className="w-6 h-6 text-white">
                              <use href="#messages"></use>
                            </svg>
                          </button>
                        </div>

                        <div>
                          {story.video ? (
                            <video
                              autoPlay
                              ref={videoRef}
                              className="absolute -z-50 top-0 left-0 w-full h-full object-cover"
                              muted={isMutedVideo}
                              onMouseDown={() => {
                                videoRef.current?.pause();
                              }}
                              onMouseUp={() => {
                                videoRef.current?.play();
                              }}
                            >
                              <source
                                src={`/images/stories/videos/${story.video}`}
                                type="video/mp4"
                              />
                              Your browser does not support the video tag.
                            </video>
                          ) : (
                            <img
                              className="absolute -z-50 top-0 left-0 w-full h-full object-cover"
                              src={`/images/stories/images/${story.img}`}
                              alt=""
                            />
                          )}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <Link
                  to={`/stories/${user.id}`}
                  className="hidden prev-next__content"
                >
                  <div className="w-[100px] h-[100px] pointer-events-none">
                    <Story img={user.img} hasStory hasNewStory />
                  </div>
                  <span className="text-lg">{user.username}</span>
                  <span className="text-lg">2h</span>
                </Link>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Stories;
