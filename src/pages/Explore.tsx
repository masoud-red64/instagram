import { useState, useEffect } from "react";
import { userListTypes, usersList } from "../Data/users";
import ShareBox from "../Components/ShareBox/ShareBox";
import PostWithCommentBox from "../Components/PostWithCommentBox/PostWithCommentBox";
import MoreOptionPostBox from "../Components/MoreOptionPostBox/MoreOptionPostBox";

function Explore() {
  const [isShowMoreOptionBox, setIsShowMoreOptionBox] = useState(false);
  const [isShowCommentBox, setIsShowCommentBox] = useState(false);
  const [isShowShareBox, setIsShowShareBox] = useState(false);
  const [mainUser, setMainUser] = useState({} as userListTypes);

  useEffect(() => {
    isShowShareBox || isShowMoreOptionBox || isShowCommentBox
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [isShowShareBox, isShowMoreOptionBox, isShowCommentBox]);

  const handlePostClick = (userID: number) => {
    let mainUserList = usersList.filter((user) => user.id === userID);
    setMainUser(mainUserList[0]);
    setIsShowCommentBox(true);
  };

  return (
    <div>
      <div className="pt-6 mb-12 md:mb-6 max-w-[975px] mx-auto">
        <div className="grid grid-cols-3 gap-1 sm:mx-8 mb-1 px-1 sm:px-5">
          {usersList.map((user, index) => (
            <div
              key={user.id}
              className={`relative group cursor-pointer col-span-1 row-span-${
                (index - 2) % 10 === 0 || (index - 5) % 10 === 0 ? "2" : "1"
              } max-w-[300px] max-h-${
                (index - 2) % 10 === 0 || (index - 5) % 10 === 0
                  ? "[608px]"
                  : "[300px]"
              }`}
              onClick={() => handlePostClick(user.id)}
            >
              {user.stories.slice(0, 1).map((story) => {
                return story.img ? (
                  <img
                    key={story.id}
                    src={`/images/stories/images/${story.img}`}
                    className="h-full w-full object-cover"
                    alt=""
                  />
                ) : (
                  <div key={story.id}>
                    <video
                      src={`/images/stories/videos/${story.video}`}
                      className="h-full w-full object-cover"
                    ></video>
                    {/* Reels Icon */}
                    <div className="absolute right-3 top-3">
                      <svg className="w-6 h-6 text-neutral-100">
                        <use href="#reels"></use>
                      </svg>
                    </div>
                  </div>
                );
              })}

              {/* Hover */}
              <div className="absolute hidden group-hover:flex inset-0 items-center justify-center bg-black/40">
                <div className="flex flex-col md:flex-row items-center gap-y-2 gap-x-8 text-neutral-100 text-xs md:text-sm font-[600]">
                  <span className="flex items-center gap-x-1">
                    <svg className="w-3 h-3 md:w-6 md:h-6">
                      <use href="#notifications"></use>
                    </svg>
                    652
                  </span>
                  <span className="flex items-center gap-x-1">
                    <svg className="w-3 h-3 md:w-6 md:h-6 fill-white">
                      <use href="#comments"></use>
                    </svg>
                    48
                  </span>
                </div>
              </div>

              {/* multiple-post-fill Icon */}
              <div className="absolute top-3 right-3">
                {user.stories.length > 1 && (
                  <svg className="w-6 h-6 text-neutral-100">
                    <use href="#multiple-post-fill"></use>
                  </svg>
                )}
              </div>
            </div>
          ))}
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
          {isShowShareBox && <ShareBox setIsShowShareBox={setIsShowShareBox} />}
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

export default Explore;
