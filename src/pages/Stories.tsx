import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperType from "swiper";

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
import { userListTypes, usersList } from "../Data/users";
import { Link, useNavigate, useParams } from "react-router-dom";
import ShareBox from "../Components/ShareBox/ShareBox";

function Stories() {
  const [isMutedVideos, setIsMutedVideos] = useState<{
    [key: number]: boolean;
  }>({});
  const [activeIndex, setActiveIndex] = useState(0);
  const [parentSwiper, setParentSwiper] = useState<SwiperType | undefined>();
  const [isPauseSwiper, setIsPauseSwiper] = useState(false);
  const [storyLikeStatus, setStoryLikeStatus] = useState<{
    [key: number]: boolean;
  }>({});
  const [boxEmojiStatus, setBoxEmojiStatusStatus] = useState<{
    [key: number]: boolean;
  }>({});
  const [reactionInputValue, setReactionInputValue] = useState<{
    [key: number]: string;
  }>({});
  const [showOverlayOnStoryStatus, setShowOverlayOnStoryStatus] = useState<{
    [key: number]: boolean;
  }>({});
  const [isShowReportBox, setIsShowReportBox] = useState(false);
  const [isShowShareBox, setIsShowShareBox] = useState(false);

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

  const handleShowBoxEmojiClick = (userID: number) => {
    setBoxEmojiStatusStatus((prevStatus) => ({
      ...prevStatus,
      [userID]: true,
    }));
    setShowOverlayOnStoryStatus((prevStatus) => ({
      ...prevStatus,
      [userID]: true,
    }));
  };

  const handleHideBoxEmojiClick = (userID: number) => {
    setBoxEmojiStatusStatus((prevStatus) => ({
      ...prevStatus,
      [userID]: false,
    }));
    setShowOverlayOnStoryStatus((prevStatus) => ({
      ...prevStatus,
      [userID]: false,
    }));
  };

  const handleChangeInputValue = (userID: number, inputValue: string) => {
    setReactionInputValue((prevValue) => ({
      ...prevValue,
      [userID]: inputValue,
    }));
  };

  const handleMuteVideo = (postID: number, video: string) => {
    if (video) {
      setIsMutedVideos((prevStatus) => {
        const updatedStatus: { [index: number]: boolean } = {};
        for (const id in prevStatus) {
          updatedStatus[id] = false; // Mute all videos
        }
        updatedStatus[postID] = !prevStatus[postID]; // Toggle the clicked video
        return updatedStatus;
      });
    }
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

            setIsMutedVideos((prevStatus) => {
              const updatedStatus: { [index: number]: boolean } = {};
              for (const id in prevStatus) {
                updatedStatus[id] = false; // Mute all videos
              }
              return updatedStatus;
            });
          }}
          onSwiper={(swiper) => {
            setParentSwiper(swiper);
            swiper.slideTo(Number(userID) - 1);
          }}
        >
          {usersList.map((user, index) => (
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
                  parentSwiper && parentSwiper.slideNext();
                }}
                onSlideChange={() => {
                  setIsMutedVideos((prevStatus) => {
                    const updatedStatus: { [index: number]: boolean } = {};
                    for (const id in prevStatus) {
                      updatedStatus[id] = false; // Mute all videos
                    }
                    return updatedStatus;
                  });
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
                            onClick={() =>
                              handleMuteVideo(story.id, story.video)
                            }
                          >
                            {isMutedVideos[story.id] && !story.img ? (
                              <svg className="w-4 h-4">
                                <use href="#not-muted"></use>
                              </svg>
                            ) : (
                              <svg className="w-4 h-4">
                                <use href="#muted"></use>
                              </svg>
                            )}
                          </button>

                          <button onClick={() => setIsShowReportBox(true)}>
                            <svg className="w-6 h-6">
                              <use href="#three-points"></use>
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* Bottom */}
                      <div className="absolute bottom-0 right-0 left-0 p-4 flex items-center justify-between gap-x-4 bg-gradient-to-t from-[rgba(38,38,38,.6)] to-[rgba(38, 38, 38,0)]">
                        <div className="relative grow">
                          <div className="flex border rounded-full">
                            <input
                              type="text"
                              placeholder={`Reply to ${user.username}`}
                              className="py-2 px-4 w-full bg-transparent text-[#dbdbdb] outline-none placeholder:text-[#dbdbdb]"
                              onFocus={() => handleShowBoxEmojiClick(user.id)}
                              onBlur={() => handleHideBoxEmojiClick(user.id)}
                              value={reactionInputValue[user.id]}
                              onChange={(e) =>
                                handleChangeInputValue(user.id, e.target.value)
                              }
                            />
                            {reactionInputValue[user.id] && (
                              <button className="text-white mr-3">send</button>
                            )}
                          </div>

                          {/* Emojis */}
                          {boxEmojiStatus[user.id] &&
                            !reactionInputValue[user.id] && (
                              <div className="absolute -top-32 w-full flex flex-col items-center px-16">
                                <h5 className="text-white">Quick Reactions</h5>
                                <div className="flex flex-wrap justify-center text-2xl gap-2.5 mt-3">
                                  <span>😀</span>
                                  <span>😎</span>
                                  <span>😍</span>
                                  <span>😑</span>
                                  <span>🤩</span>
                                  <span>😅</span>
                                  <span>😂</span>
                                  <span>😛</span>
                                </div>
                              </div>
                            )}
                        </div>
                        {!boxEmojiStatus[user.id] && (
                          <>
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
                            <button onClick={() => setIsShowShareBox(true)}>
                              <svg className="w-6 h-6 text-white">
                                <use href="#messages"></use>
                              </svg>
                            </button>
                          </>
                        )}
                      </div>

                      <div>
                        {story.video ? (
                          <video
                            autoPlay
                            ref={videoRef}
                            className="absolute -z-50 top-0 left-0 w-full h-full object-cover"
                            muted={!isMutedVideos[story.id]}
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
                            loading="lazy"
                            className="absolute -z-50 top-0 left-0 w-full h-full object-cover"
                            src={`/images/stories/images/${story.img}`}
                            alt=""
                          />
                        )}
                      </div>

                      {/* overlay */}
                      {showOverlayOnStoryStatus[user.id] && (
                        <div className="absolute inset-0 bg-black/30 -z-10"></div>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button
                onClick={() => navigate(`/stories/${user.id}`)}
                className="hidden prev-next__content"
              >
                <div className="w-[100px] h-[100px] pointer-events-none">
                  <Story img={user.img} hasStory hasNewStory />
                </div>
                <span className="text-lg">{user.username}</span>
                <span className="text-lg">2h</span>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* overlay */}
      {(isShowReportBox || isShowShareBox) && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-black/60 z-10"
          onClick={() => {
            setIsShowReportBox(false);
            setIsShowShareBox(false);
          }}
        >
          {/* ReportBox */}
          {isShowReportBox && (
            <div
              className="w-[260px] md:w-[400px] bg-white dark:bg-neutral-800 rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="text-sm divide-y divide-[#dbdbdb] dark:divide-[#363636]">
                <li className="h-12 flex items-center justify-center font-[700] text-[#ed4956]">
                  <button className="w-full h-full">
                    Report Inappropriate
                  </button>
                </li>
                <li className="h-12 flex items-center justify-center text-black dark:text-neutral-100">
                  <button
                    className="w-full h-full"
                    onClick={() => setIsShowReportBox(false)}
                  >
                    Cancel
                  </button>
                </li>
              </ul>
            </div>
          )}

          {/* ShareBox */}
          {isShowShareBox && (
            <div className="w-full h-full md:w-[548px] md:h-[65vh] md:rounded-xl overflow-hidden">
              <ShareBox setIsShowShareBox={setIsShowShareBox} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Stories;
