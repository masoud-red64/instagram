import React, { useEffect, useRef, useState } from "react";
import SearchInput from "../Components/SearchInput/SearchInput";
import SearchBox from "../Components/SearchBox/SearchBox";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Link } from "react-router-dom";
import Story from "../Components/Story/Story";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { userListTypes, usersList } from "../Data/users";
import ShareBox from "../Components/ShareBox/ShareBox";
import EmojiBox from "../Components/EmojiBox/EmojiBox";
import Footer from "../Components/Footer/Footer";
import PostWithCommentBox from "../Components/PostWithCommentBox/PostWithCommentBox";
import MoreOptionPostBox from "../Components/MoreOptionPostBox/MoreOptionPostBox";

function Home() {
  const serachBoxSelector = useSelector(
    (state: RootState) => state.searchBoxReducer
  );

  const [isMutedVideos, setIsMutedVideos] = useState<{
    [key: number]: boolean;
  }>({});
  const [isSaved, setIsSaved] = useState<{ [key: number]: boolean }>({});
  const [isLiked, setIsLiked] = useState<{ [key: number]: boolean }>({});
  const [isLikedComments, setIsLikedComments] = useState<{
    [key: number]: boolean;
  }>({});
  const [isShowMoreDescription, setIsShowMoreDescription] = useState<{
    [key: number]: boolean;
  }>({});
  const [isShowShareBox, setIsShowShareBox] = useState(false);
  const [isShowMoreOptionBox, setIsShowMoreOptionBox] = useState(false);
  const [mainUser, setMainUser] = useState({} as userListTypes);
  const [isShowCommentBox, setIsShowCommentBox] = useState(false);

  const [inputComment1Value, setInputComment1Value] = useState("");
  const [isShowEmojiBox, setIsShowEmojiBox] = useState(false);
  const [isShowEmojiBoxObject, setIsShowEmojiBoxObject] = useState<{
    [key: number]: boolean;
  }>({});

  const inputCommentRef1 = useRef<HTMLInputElement>(null);

  useEffect(() => {
    isShowShareBox || isShowMoreOptionBox || isShowCommentBox
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
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

  const handleCommentIconClick = (userID: number) => {
    let mainUserList = usersList.filter((user) => user.id === userID);
    setMainUser(mainUserList[0]);
    setIsShowCommentBox(true);
  };

  return (
    <div className="relative">
      {/* Header */}
      <header className="md:hidden fixed top-0 right-0 left-0 h-[60px] flex justify-between items-center bg-white dark:bg-black border-b border-[#DBDBDB] dark:border-[#363636] z-50">
        {/* Logo */}
        <div className="absolute left-4">
          <svg className="w-[103px] h-[29px] text-black dark:text-white">
            <use href="#logo-instagram"></use>
          </svg>
        </div>
        {/* Search and Notifications */}
        <div className="z-10 absolute right-4 left-4 xs:left-auto flex items-center gap-x-5">
          {/* Search Box */}
          <div className="relative">
            <SearchInput />
            {serachBoxSelector.isShow && (
              <div className="absolute -left-2 xs:left-auto top-11 xs:-right-12 w-[320px] sm:w-[375px] h-screen bg-white dark:bg-[#262626] rounded-md overflow-hidden drop-shadow-[0_4px_12px_rgba(0,0,0,.15)]">
                <SearchBox className="h-full" />
              </div>
            )}
          </div>
          {/* Notifications */}
          <Link to={"/notifications"} title="notifications">
            <svg className="w-6 h-6 text-black dark:text-white group-hover:scale-105 transition-all">
              <use href="#notifications"></use>
            </svg>
          </Link>
        </div>
      </header>

      <div className="grid grid-cols-2 lg:grid-cols-3 w-full mt-[90px] md:mt-[46px]">
        <div className="col-span-2 sm:container sm:mx-auto px-3 sm:p-0">
          {/* Stories */}
          <div>
            <Swiper
              slidesPerView={4}
              spaceBetween={10}
              breakpoints={{
                400: {
                  slidesPerView: 5,
                },
                500: {
                  slidesPerView: 6,
                },
                600: {
                  slidesPerView: 7,
                },
                700: {
                  slidesPerView: 8,
                },
                768: {
                  slidesPerView: 9,
                },
              }}
              navigation={true}
              modules={[Navigation]}
              className="stories-swiper"
            >
              {usersList.map((user) => (
                <SwiperSlide>
                  <div className="flex flex-col items-center gap-y-1">
                    <div className="w-[66px] h-[66px]">
                      <Story id={user.id} img={user.img} hasStory hasNewStory />
                    </div>
                    <span className="block max-w-[66px] text-xs dark:text-neutral-100 overflow-hidden overflow-ellipsis">
                      {user.username}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Posts */}
          <div className="w-full">
            <div className="max-w-[470px] mx-auto mt-10 ">
              {/* Post */}
              {usersList.map((user) => (
                <div className="bg-white pb-4 mb-6 border-b border-[#dbdbdb] dark:border-[#363636] dark:bg-black">
                  {/* Top */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-3">
                      <div className="w-9 h-9">
                        <Story
                          id={user.id}
                          img={user.img}
                          hasStory={user.hasStory}
                          hasNewStory={user.hasNewStory}
                        />
                      </div>
                      <div className="flex items-center gap-x-1 text-sm">
                        <span className="font-[600] dark:text-neutral-100">
                          {user.username}
                        </span>
                        <span className="text-neutral-500 dark:[#a8a8a8]">
                          •
                        </span>
                        <span className="text-neutral-500 dark:[#a8a8a8]">
                          50m
                        </span>
                      </div>
                    </div>
                    <button onClick={() => setIsShowMoreOptionBox(true)}>
                      <svg className="w-6 h-6 dark:text-neutral-100">
                        <use href="#more-options"></use>
                      </svg>
                    </button>
                  </div>

                  {/* Content */}
                  <div className="w-full h-[585px] my-3 border border-[#dbdbdb] dark:border-[#363636] rounded-md overflow-hidden">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={10}
                      navigation={true}
                      pagination={true}
                      modules={[Navigation, Pagination]}
                      className="posts-swiper h-full w-full"
                      onSlideChange={() => {
                        setIsMutedVideos((prevStatus) => {
                          const updatedStatus: { [index: number]: boolean } =
                            {};
                          for (const id in prevStatus) {
                            updatedStatus[id] = false; // Mute all videos
                          }
                          return updatedStatus;
                        });
                      }}
                    >
                      {user.stories.map((post) => (
                        <SwiperSlide>
                          {post.img ? (
                            <img
                              src={`/images/stories/images/${post.img}`}
                              alt=""
                              className="h-full w-full object-contain"
                            />
                          ) : (
                            <div className="relative w-full h-full">
                              <video
                                autoPlay
                                muted={!isMutedVideos[post.id]}
                                loop
                              >
                                <source
                                  src={`/images/stories/videos/${post.video}`}
                                />
                              </video>
                              <button
                                className="absolute bottom-7 right-4 p-2 flex items-center justify-center bg-neutral-800 rounded-full"
                                onClick={() => handleMuteVideo(post.id)}
                              >
                                {isMutedVideos[post.id] ? (
                                  <svg className="w-3 h-3 text-white">
                                    <use href="#not-muted"></use>
                                  </svg>
                                ) : (
                                  <svg className="w-3 h-3 text-white">
                                    <use href="#muted"></use>
                                  </svg>
                                )}
                              </button>
                            </div>
                          )}
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  {/* Bottom */}
                  <div className="text-sm">
                    {/* Buttons */}
                    <div className="flex items-center justify-between dark:text-neutral-100">
                      <div className="flex items-center gap-x-4">
                        <button
                          onClick={() =>
                            setIsLiked((prevStatus) => ({
                              ...prevStatus,
                              [user.id]: !prevStatus[user.id],
                            }))
                          }
                        >
                          {isLiked[user.id] ? (
                            <svg className="w-6 h-6">
                              <use href="#fill-heart"></use>
                            </svg>
                          ) : (
                            <svg className="w-6 h-6">
                              <use href="#notifications"></use>
                            </svg>
                          )}
                        </button>
                        <button onClick={() => handleCommentIconClick(user.id)}>
                          <svg className="w-6 h-6">
                            <use href="#comments"></use>
                          </svg>
                        </button>
                        <button onClick={() => setIsShowShareBox(true)}>
                          <svg className="w-6 h-6">
                            <use href="#messages"></use>
                          </svg>
                        </button>
                      </div>
                      <button
                        onClick={() =>
                          setIsSaved((prevStatus) => {
                            return {
                              ...prevStatus,
                              [user.id]: !prevStatus[user.id],
                            };
                          })
                        }
                      >
                        {isSaved[user.id] ? (
                          <svg className="w-6 h-6">
                            <use href="#save-fill"></use>
                          </svg>
                        ) : (
                          <svg className="w-6 h-6">
                            <use href="#save"></use>
                          </svg>
                        )}
                      </button>
                    </div>

                    {/* Likes */}
                    <span className="inline-block font-[600] dark:text-neutral-100 my-1">
                      {isLiked[user.id] ? "10,297" : "10,296"} likes
                    </span>

                    {/* Description */}
                    <div className="dark:text-neutral-100">
                      <a href="#" className="font-[600]">
                        {user.username}
                      </a>
                      <p
                        className={`flex flex-col ${
                          isShowMoreDescription[user.id] ? "h-auto" : "h-10"
                        } overflow-hidden`}
                      >
                        <span>با صحبتهاش موافقی؟</span>
                        <span> Spoken by Jordan Peterson</span>
                        <span>یکی از سرشناس‌ترین روانشناسان دنیا</span>
                        <span>
                          اگه علاقه‌مندید که بیشتر از این نوع ویدیوها بذاریم این
                          ویدیو رو برای بهترین دوستت بفرست و یه قلب بنفش رو این
                          زیر کامنت کنید 💜
                        </span>
                        <span>.</span>
                        <span>.</span>
                        <span>
                          {" "}
                          "I do not own the rights to this music and movie. All
                          credits and copyright belong to their respective
                          owners. This video is for entertainment purposes
                          only."
                        </span>
                        <span>.</span>
                        <span>.</span>
                        <span>
                          برای دریافت ویدیوها و مطالب بیشتر، شاه انگیزه رو دنبال
                          کنید
                        </span>
                        <a href="#">@SHAHANGIZE</a>
                        <a href="#">@SHAHANGIZE</a>
                        <a href="#">@SHAHANGIZE</a>
                        <span>.</span>
                        <span>.</span>
                        <span>
                          DM for credit or removal request (no copyright
                          intended) ©️ All rights and credits reserved to the
                          respective owner(s)
                        </span>
                        <a href="#">#خودشناسی</a>
                        <a href="#">#روانشناسی_شخصیت</a>
                        <a href="#">#قدرت</a>
                        <a href="#">#قوی_باش</a>
                        <a href="#">#ضعیف</a>
                      </p>
                      <div className="flex flex-col items-start gap-y-0.5">
                        {!isShowMoreDescription[user.id] && (
                          <button
                            className="text-neutral-500 dark:text-[#a8a8a8]"
                            onClick={() =>
                              setIsShowMoreDescription((prevStatus) => ({
                                ...prevStatus,
                                [user.id]: true,
                              }))
                            }
                          >
                            more
                          </button>
                        )}
                        <button className="text-xs font-[600]">
                          See translation
                        </button>
                        <button className="text-neutral-500 dark:text-[#a8a8a8]">
                          View all 332 comments
                        </button>
                      </div>
                      <div>
                        {user.posts.comments.map((comment) => (
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-x-1">
                              <span className="font-[600]">
                                programadordesignerpro
                              </span>
                              <span>{comment.text}</span>
                            </div>
                            <button
                              onClick={() =>
                                setIsLikedComments((prevStatus) => ({
                                  ...prevStatus,
                                  [comment.id]: !prevStatus[comment.id],
                                }))
                              }
                            >
                              {isLikedComments[comment.id] ? (
                                <svg className="w-3 h-3 text-neutral-500 dark:text-[#a8a8a8]">
                                  <use href="#fill-heart"></use>
                                </svg>
                              ) : (
                                <svg className="w-3 h-3 text-neutral-500 dark:text-[#a8a8a8]">
                                  <use href="#notifications"></use>
                                </svg>
                              )}
                            </button>
                          </div>
                        ))}
                      </div>
                      {/* Input */}
                      <div className="flex items-center gap-x-2 justify-between mt-3">
                        <input
                          className="grow border-0 outline-none bg-transparent"
                          type="text"
                          placeholder="Add a comment..."
                          ref={inputCommentRef1}
                          value={inputComment1Value}
                          onChange={(e) =>
                            setInputComment1Value(e.target.value)
                          }
                        />
                        <button className="text-[#0096f6] font-[600]">
                          Post
                        </button>
                        <div className="relative">
                          <button
                            onClick={() => {
                              setIsShowEmojiBoxObject((prevStatus) => ({
                                ...prevStatus,
                                [user.id]: !prevStatus[user.id],
                              }));
                              setIsShowEmojiBox(true);
                            }}
                          >
                            <svg className="w-3 h-3 text-neutral-500">
                              <use href="#emoji"></use>
                            </svg>
                          </button>
                          {isShowEmojiBox && isShowEmojiBoxObject[user.id] && (
                            <div className="absolute top-5 right-0 w-[200px] h-[140px] bg-white dark:bg-neutral-800 text-neutral-500 text-sm font-[600] rounded-md drop-shadow-[0_0_5px_rgba(0,0,0,.0975)] overflow-y-auto scrollbar z-10">
                              <EmojiBox
                                textAreaRef={inputCommentRef1}
                                captionTextAreaValue={inputComment1Value}
                                setCaptionTextAreaValue={setInputComment1Value}
                                setIsShowEmojiBox={setIsShowEmojiBox}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden lg:block col-span-1 pl-10 pr-4 pt-4">
          <div className="sticky top-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <div className="h-11 w-11">
                  <Story img="user1.jpg" hasStory={false} />
                </div>
                <div className="flex flex-col text-sm">
                  <span className="font-[600] dark:text-neutral-100">
                    masoud_red64
                  </span>
                  <span className="text-neutral-500 dark:text-[#a8a8a8]">
                    M҉a҉s҉o҉u҉d
                  </span>
                </div>
              </div>
              <button className="text-xs font-[600] text-[#0095f6]">
                Switch
              </button>
            </div>
            <div className="font-[600] flex items-center justify-between mt-5 mb-2">
              <span className="text-sm  text-neutral-500 dark:text-[#a8a8a8]">
                Suggested for you
              </span>
              <span className="text-xs text-neutral-100">See All</span>
            </div>
            <div>
              {usersList.slice(0, 5).map((user) => (
                <div className="flex items-center justify-between py-1.5">
                  <div className="flex items-center gap-x-3">
                    <div className="h-11 w-11">
                      <Story img={user.img} hasStory={false} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-[600] text-sm dark:text-neutral-100">
                        {user.username}
                      </span>
                      <span className="text-neutral-500 dark:text-[#a8a8a8] text-xs line-clamp-1">
                        Followed by mahdifallah80 + 8 more
                      </span>
                    </div>
                  </div>
                  <button className="text-xs font-[600] text-[#0095f6]">
                    Follow
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Footer />
            </div>
          </div>
        </div>
      </div>

      {/* overlay */}
      {(isShowShareBox || isShowMoreOptionBox) && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/60 z-[60]"
          onClick={() => {
            setIsShowShareBox(false);
            setIsShowMoreOptionBox(false);
          }}
        >
          {/* ReportBox */}
          {isShowMoreOptionBox && (
            <MoreOptionPostBox
              setIsShowMoreOptionBox={setIsShowMoreOptionBox}
            />
          )}

          {/* ShareBox */}
          {isShowShareBox && (
            <div className="w-full h-full md:w-[548px] md:h-[65vh] md:rounded-xl overflow-hidden">
              <ShareBox setIsShowShareBox={setIsShowShareBox} />
            </div>
          )}
        </div>
      )}

      {/* overlay show comments */}
      {isShowCommentBox && (
        <PostWithCommentBox
          mainUser={mainUser}
          setIsShowShareBox={setIsShowShareBox}
          setIsShowMoreOptionBox={setIsShowMoreOptionBox}
          setIsShowCommentBox={setIsShowCommentBox}
        />
      )}
    </div>
  );
}

export default Home;
