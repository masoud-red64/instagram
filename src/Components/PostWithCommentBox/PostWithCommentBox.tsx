import { useState, useRef } from "react";
import Comment from "../Comment/Comment";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination } from "swiper/modules";
import Story from "../Story/Story";
import EmojiBox from "../EmojiBox/EmojiBox";
import { userListTypes } from "../../Data/users";

type PostWithCommentBoxPropTypes = {
  mainUser: userListTypes;
  setIsShowShareBox: (param: boolean) => void;
  setIsShowMoreOptionBox: (param: boolean) => void;
  setIsShowCommentBox: (param: boolean) => void;
};

function PostWithCommentBox({
  mainUser,
  setIsShowShareBox,
  setIsShowMoreOptionBox,
  setIsShowCommentBox,
}: PostWithCommentBoxPropTypes) {
  const [isShowReply, setIsShowReply] = useState<{
    [key: number]: boolean;
  }>({});
  const [inputComment2Value, setInputComment2Value] = useState("");
  const [isMutedVideos, setIsMutedVideos] = useState<{
    [key: number]: boolean;
  }>({});
  const [isLikedComments, setIsLikedComments] = useState<{
    [key: number]: boolean;
  }>({});
  const [isShowEmojiBox, setIsShowEmojiBox] = useState(false);
  const [isSaved, setIsSaved] = useState<{ [key: number]: boolean }>({});
  const [isLiked, setIsLiked] = useState<{ [key: number]: boolean }>({});

  const inputCommentRef2 = useRef<HTMLInputElement>(null);

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
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
      onClick={() => setIsShowCommentBox(false)}
    >
      <button
        className="absolute right-4 top-4"
        onClick={() => setIsShowCommentBox(false)}
      >
        <svg className="w-[18px] h-[18px] text-white">
          <use href="#close"></use>
        </svg>
      </button>

      <div
        className="max-w-[calc(100%-10px)] md:max-w-[calc(100%-64px-64px)] max-h-[calc(100vh-100px)] md:max-h-[calc(100vh-40px)] flex flex-col md:flex-row  bg-white dark:bg-black rounded-[4px] overflow-y-auto scrollbar md:overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full md:w-[50%] border border-[#a9a9a9] dark:border-[#363636]">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            pagination={true}
            modules={[Navigation, Pagination]}
            className="comment-posts-swiper h-full"
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
            {mainUser.stories.map((post) => (
              <SwiperSlide>
                {post.img ? (
                  <img
                    src={`/images/stories/images/${post.img}`}
                    alt=""
                    className="w-full h-full"
                  />
                ) : (
                  <div className="relative h-full">
                    <video
                      autoPlay
                      muted={!isMutedVideos[post.id]}
                      loop
                      className="h-full w-full"
                    >
                      <source src={`/images/stories/videos/${post.video}`} />
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
        <div className="w-full md:w-[50%] flex flex-col dark:bg-black">
          {/* Top */}

          <div className="flex items-center justify-between border-b border-[#efefef] dark:border-[#363636] p-4">
            <div className="flex items-center gap-x-3">
              <div className="w-9 h-9">
                <Story
                  id={mainUser.id}
                  img={mainUser.img}
                  hasStory={mainUser.hasStory}
                  hasNewStory={mainUser.hasNewStory}
                />
              </div>
              <span className="font-[600] text-sm dark:text-neutral-100">
                {mainUser.username}
              </span>
            </div>
            <button onClick={() => setIsShowMoreOptionBox(true)}>
              <svg className="w-6 h-6 dark:text-neutral-100">
                <use href="#more-options"></use>
              </svg>
            </button>
          </div>

          {/* Center */}
          <div className="p-4 overflow-y-auto scrollbar">
            <div className="flex gap-x-3">
              <div className="w-9 h-9 shrink-0">
                <Story
                  id={mainUser.id}
                  img={mainUser.img}
                  hasStory={mainUser.hasStory}
                  hasNewStory={mainUser.hasNewStory}
                />
              </div>
              <p className="flex flex-col text-sm dark:text-neutral-100">
                <span>
                  <span className="font-[600] text-sm">
                    {mainUser.username}
                  </span>{" "}
                  با صحبتهاش موافقی؟
                </span>
                <span> Spoken by Jordan Peterson</span>
                <span>یکی از سرشناس‌ترین روانشناسان دنیا</span>
                <span>
                  اگه علاقه‌مندید که بیشتر از این نوع ویدیوها بذاریم این ویدیو
                  رو برای بهترین دوستت بفرست و یه قلب بنفش رو این زیر کامنت کنید
                  💜
                </span>
                <span>.</span>
                <span>.</span>
                <span>
                  {" "}
                  "I do not own the rights to this music and movie. All credits
                  and copyright belong to their respective owners. This video is
                  for entertainment purposes only."
                </span>
                <span>.</span>
                <span>.</span>
                <span>
                  برای دریافت ویدیوها و مطالب بیشتر، شاه انگیزه رو دنبال کنید
                </span>
                <a href="#">@SHAHANGIZE</a>
                <a href="#">@SHAHANGIZE</a>
                <a href="#">@SHAHANGIZE</a>
                <span>.</span>
                <span>.</span>
                <span>
                  DM for credit or removal request (no copyright intended) ©️
                  All rights and credits reserved to the respective owner(s)
                </span>
                <a href="#">#خودشناسی</a>
                <a href="#">#روانشناسی_شخصیت</a>
                <a href="#">#قدرت</a>
                <a href="#">#قوی_باش</a>
                <a href="#">#ضعیف</a>
                <span className="text-neutral-500 text-xs mt-1">2d</span>
              </p>
            </div>

            {/* Comments */}
            <div>
              {mainUser.posts.comments.map((comment) => (
                <div>
                  <Comment
                    id={comment.id}
                    isLikedComments={isLikedComments}
                    setIsLikedComments={setIsLikedComments}
                  />
                  {true && (
                    <div className="ml-8 sm:ml-[54px] mt-4 text-xs text-neutral-500">
                      <button
                        className="flex items-center gap-x-3 dark:text-[#a8a8a8]"
                        onClick={() =>
                          setIsShowReply((prevStatus) => ({
                            ...prevStatus,
                            [comment.id]: !prevStatus[comment.id],
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
                          setIsLikedComments={setIsLikedComments}
                        />
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="text-sm p-4 border-t border-[#efefef] dark:border-[#363636]">
            {/* Buttons */}
            <div className="flex items-center justify-between dark:text-neutral-100">
              <div className="flex items-center gap-x-4">
                <button
                  onClick={() =>
                    setIsLiked((prevStatus) => ({
                      ...prevStatus,
                      [mainUser.id]: !prevStatus[mainUser.id],
                    }))
                  }
                >
                  {isLiked[mainUser.id] ? (
                    <svg className="w-6 h-6">
                      <use href="#fill-heart"></use>
                    </svg>
                  ) : (
                    <svg className="w-6 h-6">
                      <use href="#notifications"></use>
                    </svg>
                  )}
                </button>
                <button>
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
                      [mainUser.id]: !prevStatus[mainUser.id],
                    };
                  })
                }
              >
                {isSaved[mainUser.id] ? (
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
            <div className="flex items-center gap-1 mt-4">
              <div className="w-5 h-5">
                <Story img="user9.jpg" hasStory={false} />
              </div>
              <p className="text-sm dark:text-neutral-100">
                Liked by{" "}
                <a href="#" className="font-[600]">
                  mohaddese_younesi
                </a>{" "}
                and{" "}
                <button className="font-[600]">
                  {isLiked[mainUser.id] ? "351" : "350"} others
                </button>
              </p>
            </div>
            <span className="text-[10px] text-neutral-500 dark:text-[#a8a8a8]">
              2 DAYS AGO
            </span>

            {/* Input */}
            <div className="flex items-center gap-x-2 justify-between mt-1 -mx-4 pt-3 px-4 border-t border-[#efefef] dark:border-[#363636]">
              <div className="relative">
                <button
                  onClick={() => {
                    setIsShowEmojiBox(!isShowEmojiBox);
                  }}
                >
                  <svg className="w-6 h-6 dark:text-neutral-100">
                    <use href="#emoji"></use>
                  </svg>
                </button>
                {isShowEmojiBox && (
                  <div className="absolute bottom-10 left-0 w-[200px] h-[140px] bg-white dark:bg-neutral-800 text-neutral-500 text-sm font-[600] rounded-md drop-shadow-[0_0_5px_rgba(0,0,0,.0975)] overflow-y-auto scrollbar z-10">
                    <EmojiBox
                      textAreaRef={inputCommentRef2}
                      captionTextAreaValue={inputComment2Value}
                      setCaptionTextAreaValue={setInputComment2Value}
                      setIsShowEmojiBox={setIsShowEmojiBox}
                    />
                  </div>
                )}
              </div>
              <input
                className="grow border-0 outline-none bg-transparent dark:text-neutral-100"
                type="text"
                placeholder="Add a comment..."
                ref={inputCommentRef2}
                value={inputComment2Value}
                onChange={(e) => setInputComment2Value(e.target.value)}
              />
              <button className="text-[#0096f6] font-[600]">Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostWithCommentBox;
