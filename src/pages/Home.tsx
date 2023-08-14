import React from "react";
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
// import required modules
import { Navigation } from "swiper/modules";
import { usersList } from "../Data/users";

function Home() {
  const serachBoxSelector = useSelector(
    (state: RootState) => state.searchBoxReducer
  );

  return (
    <div>
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

      <div className="grid grid-cols-2 lg:grid-cols-3 w-full h-10 mt-[90px] md:mt-[46px]">
        <div className="col-span-2">
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
                      <Story img={user.img} hasStory hasNewStory />
                    </div>
                    <span className="block max-w-[66px] text-xs overflow-hidden overflow-ellipsis">
                      {user.username}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="hidden lg:block col-span-1"></div>
      </div>
    </div>
  );
}

export default Home;
