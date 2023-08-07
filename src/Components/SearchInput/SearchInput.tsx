import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInputValue } from "../../store/searchInputValueSlice";

function SearchInput() {
  const [isFocus, setIsFocus] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="h-9 min-w-[268px] flex items-center justify-center gap-x-3 bg-[#efefef] dark:bg-[#262626] rounded-lg px-2 sm:px-4">
      {/* Search Icon */}
      {!isFocus && (
        <svg className="w-4 h-4 text-[#8e8e8e] dark:text-[#a8a8a8]">
          <use href="#search"></use>
        </svg>
      )}
      {/* Search Input */}
      <input
        type="text"
        className="w-full h-full dark:text-[#a8a8a8] font-[300] bg-transparent outline-none border-none placeholder-[#a8a8a8]"
        placeholder="Search"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(e) => {
          dispatch(setInputValue(e.target.value));
        }}
      />
      {/* Close Search Icon */}
      {isFocus && (
        <button
          className="w-5 h-5 bg-icons bg-no-repeat bg-[-320px_-333px]"
          aria-label="Close Searchbar"
        ></button>
      )}
    </div>
  );
}

export default SearchInput;
