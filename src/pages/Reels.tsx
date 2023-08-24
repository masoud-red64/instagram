import React, { useState, useRef, useEffect } from "react";
import Story from "../Components/Story/Story";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Mousewheel, Keyboard } from "swiper/modules";
import { usersList } from "../Data/users";
import ShareBox from "../Components/ShareBox/ShareBox";
import MoreOptionPostBox from "../Components/MoreOptionPostBox/MoreOptionPostBox";
import Comment from "../Components/Comment/Comment";
import EmojiBox from "../Components/EmojiBox/EmojiBox";

function Reels() {
  const [isMutedVideos, setIsMutedVideos] = useState<{
    [key: number]: boolean;
  }>({});
  const [isPauseVideos, setIsPauseVideos] = useState<{
    [key: number]: boolean;
  }>({});
  const [isLikedReel, setIsLikedReel] = useState<{
    [key: number]: boolean;
  }>({});
  const [isSavedReel, setIsSavedReel] = useState<{
    [key: number]: boolean;
  }>({});
  const [isShowShareBoxOneReel, setIsShowShareBoxOneReel] = useState<{
    [key: number]: boolean;
  }>({});
  const [isShowShareBox, setIsShowShareBox] = useState(false);
  const [isShowMoreOptionBox, setIsShowMoreOptionBox] = useState(false);
  const [isShowReply, setIsShowReply] = useState<{
    [key: number]: boolean;
  }>({});
  const [isLikedComments, setIsLikedComments] = useState<{
    [key: number]: boolean;
  }>({});
  const [isShowCommentBox, setIsShowCommentBox] = useState<{
    [key: number]: boolean;
  }>({});
  const [isShowEmojiBox, setIsShowEmojiBox] = useState(false);
  const [commentInputValue, setCommentInputValue] = useState("");
  const [isShowMoreDescription, setIsShowMoreDescription] = useState<{
    [key: number]: boolean;
  }>({});

  const videoRefs: { [key: number]: React.RefObject<HTMLVideoElement> } = {};
  const commentInputRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const windowClickHandler = (event: MouseEvent) => {
      const targetElement = event.target as Element;

      // Close Share Box When Click OutSide
      isShowShareBox &&
        !targetElement.closest(".share-box") &&
        setIsShowShareBox(false);

      // Close More Option Box When Click OutSide
      isShowMoreOptionBox &&
        !targetElement.closest(".more-option-box") &&
        setIsShowMoreOptionBox(false);

      // Close Comment Box When Click OutSide;

      if (
        isShowCommentBox &&
        !targetElement.closest(".comment-box") &&
        !targetElement.closest(".emoji")
      ) {
        setIsShowCommentBox((prevStatus) => {
          const updatedStatus: { [key: number]: boolean } = {};
          for (const id in prevStatus) {
            updatedStatus[id] = false;
          }
          return updatedStatus;
        });

        setIsShowEmojiBox(false);
        setCommentInputValue("");
      }
    };

    window.addEventListener("click", windowClickHandler);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("click", windowClickHandler);
    };
  }, [isShowShareBox, isShowMoreOptionBox, isShowCommentBox]);

  const handleMuteVideo = (postID: number) => {
    setIsMutedVideos((prevStatus) => {
      const updatedStatus: { [index: number]: boolean } = {};
      for (const id in prevStatus) {
        updatedStatus[id] = false; // Mute all videos
      }
      updatedStatus[postID] = !prevStatus[postID]; // Toggle the clicked video
      return updatedStatus;
    });
  };
  return (
    <div className="md:pt-4 container mx-auto px-3">
      <Swiper
        direction={"vertical"}
        slidesPerView={1.6}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 1.1,
          },
          300: {
            slidesPerView: 1.3,
          },
        }}
        mousewheel={true}
        modules={[Mousewheel, Keyboard]}
        className="reel-swiper max-h-[94vh]  max-w-[410px]"
        slideToClickedSlide={true}
        centeredSlides={true}
        keyboard={{
          enabled: true,
          pageUpDown: true,
        }}
        onSlideChange={(swiper) => {
          setIsMutedVideos((prevStatus) => {
            const updatedStatus: { [index: number]: boolean } = {};
            for (const id in prevStatus) {
              updatedStatus[id] = false; // Mute all videos
            }
            return updatedStatus;
          });

          setIsShowShareBox(false);
          setIsShowMoreOptionBox(false);
        }}
      >
        {usersList.map((user) =>
          user.stories.map(
            (reel, index) =>
              reel.video && (
                <SwiperSlide>
                  <>
                    <div className="flex items-end gap-x-4 justify-between">
                      <div
                        className="relative max-w-[360px] max-h-[610px] rounded-sm overflow-hidden cursor-pointer"
                        onClick={() => {
                          setIsPauseVideos((prevStatus) => ({
                            ...prevStatus,
                            [reel.id]: !prevStatus[reel.id],
                          }));

                          isPauseVideos[reel.id]
                            ? videoRefs[reel.id].current?.play()
                            : videoRefs[reel.id].current?.pause();
                        }}
                      >
                        <video
                          muted={!isMutedVideos[reel.id]}
                          autoPlay
                          loop
                          className="h-full object-cover"
                          src={`/images/stories/videos/${reel.video}`}
                          ref={
                            videoRefs[reel.id] ||
                            (videoRefs[reel.id] = React.createRef())
                          }
                        ></video>
                        {/* Mute Icon */}
                        <button
                          className="absolute top-4 right-4 bg-[#dbdbdb]/30 p-2 rounded-full"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleMuteVideo(reel.id);
                          }}
                        >
                          {isMutedVideos[reel.id] ? (
                            <svg className="w-4 h-4 text-white">
                              <use href="#not-muted"></use>
                            </svg>
                          ) : (
                            <svg className="w-4 h-4 text-white">
                              <use href="#muted"></use>
                            </svg>
                          )}
                        </button>

                        {/* Play Icon */}
                        {isPauseVideos[reel.id] && (
                          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-auto bg-black/40 p-6 rounded-full">
                            <svg className="w-6 h-6 text-white">
                              <use href="#play"></use>
                            </svg>
                          </button>
                        )}

                        {/* Description */}
                        <div
                          className="absolute z-10 bottom-0 max-h-1/2 w-full p-4"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsShowMoreDescription((prevStatus) => ({
                              ...prevStatus,
                              [reel.id]: false,
                            }));
                          }}
                        >
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

                          <div
                            className={`${
                              isShowMoreDescription[reel.id] && "h-32"
                            } overflow-y-auto scrollbar text-right mt-4 mb-2`}
                          >
                            <span
                              className={`text-sm text-white text-right ${
                                !isShowMoreDescription[reel.id] &&
                                "line-clamp-1"
                              }`}
                            >
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
                            {!isShowMoreDescription[reel.id] && (
                              <span
                                className="text-sm text-white/70"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIsShowMoreDescription((prevStatus) => ({
                                    ...prevStatus,
                                    [reel.id]: true,
                                  }));
                                }}
                              >
                                more...
                              </span>
                            )}
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
                        {/* Overlay For Description */}
                        {isShowMoreDescription[reel.id] && (
                          <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-black/30 to-black/0"></div>
                        )}
                      </div>
                      <div className="flex flex-col gap-y-5">
                        <button
                          className="hover:opacity-50 transition-opacity"
                          onClick={() =>
                            setIsLikedReel((prevStatus) => ({
                              ...prevStatus,
                              [reel.id]: !prevStatus[reel.id],
                            }))
                          }
                        >
                          {isLikedReel[reel.id] ? (
                            <svg className="w-6 h-6 text-black dark:text-neutral-100">
                              <use href="#fill-heart"></use>
                            </svg>
                          ) : (
                            <svg className="w-6 h-6 text-black dark:text-neutral-100">
                              <use href="#notifications"></use>
                            </svg>
                          )}
                          <span className="text-xs dark:text-neutral-100">
                            28k
                          </span>
                        </button>
                        <div className="relative comment-box">
                          <button
                            className="hover:opacity-50 transition-opacity"
                            onClick={() =>
                              setIsShowCommentBox((prevStatus) => ({
                                ...prevStatus,
                                [reel.id]: !prevStatus[reel.id],
                              }))
                            }
                          >
                            <svg className="w-6 h-6 text-black dark:text-neutral-100">
                              <use href="#comments"></use>
                            </svg>
                            <span className="text-xs dark:text-neutral-100">
                              344
                            </span>
                          </button>
                          {isShowCommentBox[reel.id] && (
                            <>
                              <div className="hidden sm:block absolute right-8 bottom-7 sm:z-20 w-4 h-4 bg-white dark:bg-neutral-800 rotate-45"></div>
                              <div className="absolute right-10 -bottom-10 sm:bottom-0 w-[280px] sm:w-[340px] h-[400px] bg-white dark:bg-neutral-800 drop-shadow-[0_4px_12px_rgba(0,0,0,.15)] rounded-md">
                                <div className="flex items-center p-6">
                                  <button
                                    onClick={() =>
                                      setIsShowCommentBox((prevStatus) => ({
                                        ...prevStatus,
                                        [reel.id]: false,
                                      }))
                                    }
                                  >
                                    <svg className="w-4 h-4 dark:text-neutral-100">
                                      <use href="#close"></use>
                                    </svg>
                                  </button>
                                  <span className="font-[700] grow text-center dark:text-neutral-100">
                                    Comments
                                  </span>
                                </div>
                                <div className="h-[260px] px-8 overflow-y-scroll scrollbar">
                                  {user.posts.comments.map((comment) => (
                                    <div>
                                      <Comment
                                        id={comment.id}
                                        isLikedComments={isLikedComments}
                                        setIsLikedComments={setIsLikedComments}
                                      />
                                      {true && (
                                        <div className="ml-1 sm:ml-8 mt-4 text-xs text-neutral-500">
                                          <button
                                            className="flex items-center gap-x-3 dark:text-[#a8a8a8]"
                                            onClick={() =>
                                              setIsShowReply((prevStatus) => ({
                                                ...prevStatus,
                                                [comment.id]:
                                                  !prevStatus[comment.id],
                                              }))
                                            }
                                          >
                                            <div className="w-6 border-b border-neutral-500 dark:border-[#a8a8a8]"></div>
                                            {isShowReply[comment.id]
                                              ? "Hide replies (1)"
                                              : "View replies (1)"}
                                          </button>
                                          {isShowReply[comment.id] && (
                                            <Comment
                                              id={comment.id}
                                              isLikedComments={isLikedComments}
                                              setIsLikedComments={
                                                setIsLikedComments
                                              }
                                            />
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                                <div className="my-3 px-7">
                                  <div className="flex items-center p-1 border border-[#dbdbdb] dark:border-[#363636] rounded-full">
                                    <div className="w-8 h-8">
                                      <Story img="user1.jpg" hasStory={false} />
                                    </div>
                                    <textarea
                                      ref={commentInputRef}
                                      rows={1}
                                      className="px-3 text-sm border-0 outline-none bg-transparent dark:text-neutral-100 resize-none"
                                      placeholder="Add a comment..."
                                      value={commentInputValue}
                                      onChange={(e) =>
                                        setCommentInputValue(e.target.value)
                                      }
                                    ></textarea>
                                    <button className="text-sm text-[#0095f6] font-[600]">
                                      Post
                                    </button>
                                    <div className="relative emoji-box flex items-center justify-center">
                                      <button
                                        className="px-2 ml-auto"
                                        onClick={() =>
                                          setIsShowEmojiBox(!isShowEmojiBox)
                                        }
                                      >
                                        <svg className="w-6 h-6 text-neutral-500">
                                          <use href="#emoji"></use>
                                        </svg>
                                      </button>
                                      {isShowEmojiBox && (
                                        <div className="absolute -right-16 bottom-10 w-[300px] h-[300px] overflow-y-auto scrollbar bg-white dark:bg-neutral-800 rounded-md  drop-shadow-[0_4px_12px_rgba(0,0,0,.15)]">
                                          <EmojiBox
                                            textAreaRef={commentInputRef}
                                            setIsShowEmojiBox={
                                              setIsShowEmojiBox
                                            }
                                            captionTextAreaValue={
                                              commentInputValue
                                            }
                                            setCaptionTextAreaValue={
                                              setCommentInputValue
                                            }
                                          />
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                        <div className="relative share-box">
                          <button
                            className="hover:opacity-50 transition-opacity"
                            onClick={() => {
                              setIsShowShareBox(!isShowShareBox);
                              setIsShowShareBoxOneReel((prevStatus) => ({
                                ...prevStatus,
                                [reel.id]: true,
                              }));
                            }}
                          >
                            <svg className="w-6 h-6 text-black dark:text-neutral-100">
                              <use href="#messages"></use>
                            </svg>
                          </button>
                          {isShowShareBox && isShowShareBoxOneReel[reel.id] && (
                            <>
                              <div className="absolute right-7 bottom-3 sm:z-20 w-3 h-3 bg-white dark:bg-neutral-800 rotate-45"></div>
                              <div className="absolute right-8 -bottom-20 sm:bottom-0 z-10 w-[280px] sm:w-[340px] h-[460px] md:h-[460px] bg-white drop-shadow-[0_4px_12px_rgba(0,0,0,.15)] rounded-md overflow-hidden">
                                <ShareBox
                                  setIsShowShareBox={setIsShowShareBox}
                                />
                              </div>
                            </>
                          )}
                        </div>
                        <button
                          className="hover:opacity-50 transition-opacity"
                          onClick={() =>
                            setIsSavedReel((prevStatus) => ({
                              ...prevStatus,
                              [reel.id]: !prevStatus[reel.id],
                            }))
                          }
                        >
                          {isSavedReel[reel.id] ? (
                            <svg className="w-6 h-6 text-black dark:text-neutral-100">
                              <use href="#save-fill"></use>
                            </svg>
                          ) : (
                            <svg className="w-6 h-6 text-black dark:text-neutral-100">
                              <use href="#save"></use>
                            </svg>
                          )}
                        </button>
                        <div className="relative more-option-box">
                          <button
                            className="hover:opacity-50 transition-opacity"
                            onClick={() =>
                              setIsShowMoreOptionBox(!isShowMoreOptionBox)
                            }
                          >
                            <svg className="w-6 h-6 text-black dark:text-neutral-100">
                              <use href="#more-options"></use>
                            </svg>
                          </button>
                          {isShowMoreOptionBox && (
                            <div className="absolute bottom-5 z-10 right-10 w-[250px] sm:w-[295px] h-[366px] bg-white dark:bg-neutral-800 drop-shadow-[0_4px_12px_rgba(0,0,0,.15)] rounded-md">
                              <MoreOptionPostBox
                                setIsShowMoreOptionBox={setIsShowMoreOptionBox}
                              />
                            </div>
                          )}
                        </div>
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
