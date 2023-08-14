import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SearchInput from "../SearchInput/SearchInput";
import TransparentOverlay from "../TransparentOverlay/TransparentOverlay";
import SearchBox from "../SearchBox/SearchBox";
import { RootState } from "../../store/store";

function SearchSlideShow() {
  const slideShowSelector = useSelector(
    (state: RootState) => state.slideShowReducer
  );
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (slideShowSelector.isShowSearch) {
      setTimeout(() => {
        setIsVisible(true);
      }, 300); // Adjust the delay time as needed
    } else {
      setIsVisible(false);
    }
  }, [slideShowSelector.isShowSearch]);

  return (
    <>
      <div
        className={`hidden md:block fixed ${
          slideShowSelector.isShowSearch ? "left-[72px]" : "-left-[400px]"
        } transition-[left] duration-500 delay-100 top-0 bottom-0 w-[397px] bg-white dark:bg-black pt-2 border-r border-[#dbdbdb] dark:border-[#262626] rounded-tr-2xl rounded-br-2xl shadow-[4px_0_24px_rgba(0,0,0,.15)] ${
          isVisible ? "z-10" : "z-30"
        }`}
      >
        {/* Header */}
        <div className="flex flex-col gap-y-11 mt-5 pb-6 text-left6 border-b border-[#dbdbdb] dark:border-[#262626]">
          <h2 className="text-black dark:text-neutral-100 text-2xl font-[600] pl-6">
            Search
          </h2>
          <div className="w-full px-4">
            <SearchInput />
          </div>
        </div>
        {/* Body */}
        <SearchBox className={"h-[77%] overflow-auto"} />
      </div>

      {/* Overlay */}
      {slideShowSelector.isShowSearch && <TransparentOverlay className="" />}
    </>
  );
}

export default SearchSlideShow;
