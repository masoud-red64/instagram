import React from "react";
import Story from "../Story/Story";

export default function Comment() {
  return (
    <div className="flex items-center justify-between pt-3">
      <div className="flex items-center gap-x-3">
        <div className="w-9 h-9">
          <Story img="user4.jpg" hasStory hasNewStory />
        </div>
        <div>
          <div className="flex items-center gap-x-1 text-sm">
            <a href="#" className="text-[#1a1a1a] font-[600]">
              mohaddese_younesi
            </a>
            <span>مرسی👏👏</span>
          </div>
          <div className="text-xs text-neutral-500 flex items-center gap-x-3 mt-1">
            <span>30m</span>
            <span className="font-[600]">Reply</span>
          </div>
        </div>
      </div>
      <button className="text-neutral-500">
        <svg className="w-3 h-3">
          <use href="#notifications"></use>
        </svg>
        {/* <svg className="w-3 h-3">
        <use href="#fill-heart"></use>
      </svg> */}
      </button>
    </div>
  );
}
