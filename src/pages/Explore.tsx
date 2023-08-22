import React from "react";
import { usersList } from "../Data/users";

function Explore() {
  console.log(usersList.length);

  return (
    <div className="pt-6 mb-6">
      <div className="grid grid-cols-3 gap-1 mx-8 mb-1 px-5">
        {usersList.map((user, index) => (
          <div
            className={`relative group cursor-pointer col-span-1 row-span-${
              (index - 2) % 10 === 0 || (index - 5) % 10 === 0 ? "2" : "1"
            } max-h-${
              (index - 2) % 10 === 0 || (index - 5) % 10 === 0
                ? "[608px]"
                : "[300px]"
            }`}
          >
            {user.stories.slice(0, 1).map((story) => {
              return story.img ? (
                <img
                  src={`/images/stories/images/${story.img}`}
                  className="h-full w-full object-cover"
                  alt=""
                />
              ) : (
                <>
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
                </>
              );
            })}

            {/* Hover */}
            <div className="absolute hidden group-hover:flex inset-0 items-center justify-center bg-black/40">
              <div className="flex items-center gap-x-8 text-neutral-100 text-sm font-[600]">
                <span className="flex items-center gap-x-1">
                  <svg className="w-6 h-6">
                    <use href="#notifications"></use>
                  </svg>
                  652
                </span>
                <span className="flex items-center gap-x-1">
                  <svg className="w-6 h-6 fill-white">
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
  );
}

export default Explore;

