import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperType from "swiper";

type imagesType = {
  id: string;
  img: string;
};

function CreateNewPost() {
  const dispatch = useDispatch();
  const createNewPostSelector = useSelector(
    (state: RootState) => state.overlayReducer
  );
  const [file, setFile] = useState<File | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [imgages, setImages] = useState<imagesType[] | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFile = event.target.files[0];

      if (
        selectedFile.type.startsWith("image/") ||
        selectedFile.type.startsWith("video/")
      ) {
        setFile(selectedFile);
      } else {
        // Handle unsupported file type
        alert("Unsupported file type. Please select an image or video.");
      }
    }
  };

  return (
    createNewPostSelector.isShowCreateNewPost && (
      <div className="absolute select-none top-1/2 right-1/2 w-[496px] h-[calc(67%+27px)] translate-x-1/2 -translate-y-1/2 z-[55] bg-white rounded-xl overflow-hidden">
        {/* Top */}
        <div>
          <h4 className="font-[600] text-center py-3 border-b border-[#dbdbdb]">
            Create new post
          </h4>
        </div>

        {/* Body */}
        {/* First Step */}
        {/* <div className="w-full h-[91%] flex flex-col gap-y-4 items-center justify-center p-6 ">
          <div>
            <svg className="w-24 h-[77px]">
            <use href="#create-new-post"></use>
          </svg>
          <span className="text-xl">Drag photos and videos here</span>
          <div>
            <div className="flex flex-col items-center">
              <button className="primary-btn" onClick={handleClick}>
                Select from computer
              </button>
              {file && (
                <div>
                  {file.type.startsWith("image/") ? (
                    <img src={URL.createObjectURL(file)} alt="Selected Image" />
                  ) : (
                    <video autoPlay>
                      <source
                        src={URL.createObjectURL(file)}
                        type={file.type}
                      />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              )}
            </div>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
              accept="image/*,video/*"
            />
          </div>
          </div>
          </div> */}

        {/* Second Step */}
        <div className="relative w-full h-[91%]">
          <div className="absolute inset-0">
            <Swiper
              navigation={true}
              pagination={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Pagination, Thumbs]}
              className="create-new-post-mySwiper2 h-full"
            >
              <SwiperSlide>
                <div>
                  <img
                    src="images/users/user9.jpg"
                    alt=""
                    className=" w-full h-full"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    src="images/users/user10.jpg"
                    alt=""
                    className=" w-full h-full"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="absolute bottom-4 right-6 left-6 flex justify-between items-center z-10">
            <div className="flex items-center gap-x-6">
              <div>
                <button className="text-white hover:opacity-70 transition-all">
                  <svg className="w-4 h-4">
                    <use href="#aspect-ratio"></use>
                  </svg>
                </button>
              </div>
              <div>
                <button className="text-white hover:opacity-70 transition-all">
                  <svg className="w-4 h-4">
                    <use href="#zoom"></use>
                  </svg>
                </button>
              </div>
            </div>
            <div className="relative">
              <button className="text-white hover:opacity-70 transition-all">
                <svg className="w-4 h-4">
                  <use href="#multiple-post"></use>
                </svg>
              </button>

              <div className="absolute -top-32 right-0 h-[118px] bg-[#1a1a1a] opacity-80 p-2 rounded-lg">
                <div className="flex gap-x-2">
                  {/* Slides */}
                  <Swiper
                    onSwiper={(swiper) => setThumbsSwiper(swiper)}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    navigation={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="create-new-post-mySwiper w-96"
                  >
                    <SwiperSlide>
                      <div className="relative w-[94px] h-[94px]">
                        <button className="absolute top-2 right-2 text-white hover:opacity-70 ">
                          <svg className="w-3 h-3">
                            <use href="#close"></use>
                          </svg>
                        </button>
                        <img src="images/users/user9.jpg" alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="relative w-[94px] h-[94px]">
                        <button className="absolute top-2 right-2 text-white hover:opacity-70 ">
                          <svg className="w-3 h-3">
                            <use href="#close"></use>
                          </svg>
                        </button>
                        <img src="images/users/user10.jpg" alt="" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <div>
                    <button className="w-12 h-12 flex items-center justify-center border rounded-full">
                      <svg className="w-[22px] h-[22px] text-neutral-300">
                        <use href="#plus"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default CreateNewPost;
