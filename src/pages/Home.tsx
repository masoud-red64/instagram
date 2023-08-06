import React from "react";

function Home() {
  return (
    <div>
      {/* Header */}
      <header className="md:hidden fixed top-0 right-0 left-0 h-[60px] flex justify-between items-center bg-white dark:bg-black border-b border-[#DBDBDB] dark:border-[#363636]">
        {/* Logo */}
        <div className="absolute left-4">
          <svg className="w-[103px] h-[29px] text-black dark:text-white">
            <use href="#logo-instagram"></use>
          </svg>
        </div>
        {/* Search and Notifications */}
        <div className="z-10 absolute right-4 left-4 xs:left-auto flex items-center gap-x-5">
          {/* Search Box */}
          <div className="h-9 w-[268px] flex items-center justify-center gap-x-3 bg-[#efefef] dark:bg-[#262626] rounded-lg px-2 sm:px-4">
            {/* Search Icon */}
            <svg className="w-4 h-4 text-[#8e8e8e] dark:text-[#a8a8a8]">
              <use href="#search"></use>
            </svg>
            {/* Search Input */}
            <input
              type="text"
              className="w-full h-full dark:text-[#a8a8a8] font-[300] bg-transparent outline-none border-none placeholder-[#a8a8a8]"
              placeholder="Search"
            />
            {/* Close Search Icon */}
            <button
              className="w-5 h-5 bg-icons bg-no-repeat bg-[-320px_-333px]"
              aria-label="Close Searchbar"
            ></button>
          </div>
          {/* Notifications */}
          <a href="#" title="notifications">
            <svg className="w-6 h-6 text-black dark:text-white group-hover:scale-105 transition-all">
              <use href="#notifications"></use>
            </svg>
          </a>
        </div>
      </header>
    </div>
  );
}

export default Home;
