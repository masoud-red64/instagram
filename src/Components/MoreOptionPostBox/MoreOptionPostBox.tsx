import React from "react";

type MoreOptionPostBoxPropsType = {
  setIsShowMoreOptionBox: (param: boolean) => void;
};

function MoreOptionPostBox({
  setIsShowMoreOptionBox,
}: MoreOptionPostBoxPropsType) {
  return (
    <div className=" bg-white rounded-xl">
      <ul className="text-sm child:py-1 divide-y divide-[#dbdbdb]">
        <li className="h-12">
          <button className="w-full h-full font-[700] text-[#ed4956]">
            Report
          </button>
        </li>
        <li className="h-12">
          <button className="w-full h-full font-[700] text-[#ed4956]">
            Unfollow
          </button>
        </li>
        <li className="h-12">
          <button className="w-full h-full">Add to favorites</button>
        </li>
        <li className="h-12">
          <button className="w-full h-full">
            <a href="#">Go to post</a>
          </button>
        </li>
        <li className="h-12">
          <button className="w-full h-full">Share to...</button>
        </li>
        <li className="h-12">
          <button className="w-full h-full">Share to...</button>
        </li>
        <li className="h-12">
          <button className="w-full h-full">Embed</button>
        </li>
        <li className="h-12">
          <button
            className="w-full h-full"
            onClick={() => setIsShowMoreOptionBox(false)}
          >
            Cancel
          </button>
        </li>
      </ul>
    </div>
  );
}

export default MoreOptionPostBox;
