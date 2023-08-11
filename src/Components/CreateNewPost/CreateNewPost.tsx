import React, { useRef, useState, useEffect } from "react";
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
import {
  setIsOpenModal,
  setStepOfCreateNewPost,
} from "../../store/createNewPostSlice";
import TransparentOverlay from "../TransparentOverlay/TransparentOverlay";

type NewPostsType = {
  id: string;
  img: string;
  video: string;
};

function CreateNewPost() {
  const dispatch = useDispatch();
  const createNewPostSelector = useSelector(
    (state: RootState) => state.createNewPostReducer
  );
  const [file, setFile] = useState<File | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [newPosts, setNewPosts] = useState<NewPostsType[] | null>(null);
  const [isActiveMultiplePostTool, setIsActiveMultiplePostTool] =
    useState(false);
  const [inputRangeZoomValue, setInputRangeZoomValue] = useState("0");
  const [isActiveZoomPostTool, setIsActiveZoomPostTool] = useState(false);
  const [isActiveRatioPostTool, setIsActiveRatioPostTool] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setThumbsSwiper(null);
  }, [createNewPostSelector.step]);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFile = event.target.files[0];
      dispatch(setStepOfCreateNewPost("second"));

      // Clear the input value
      event.target.value = "";

      if (
        selectedFile.type.startsWith("image/") ||
        selectedFile.type.startsWith("video/")
      ) {
        if (selectedFile.type.startsWith("image/")) {
          setNewPosts([
            ...(newPosts || []),
            {
              id: crypto.randomUUID(),
              img: URL.createObjectURL(selectedFile),
              video: "",
            },
          ]);
        } else if (selectedFile.type.startsWith("video/")) {
          setNewPosts([
            ...(newPosts || []),
            {
              id: crypto.randomUUID(),
              video: URL.createObjectURL(selectedFile),
              img: "",
            },
          ]);
        }
        setFile(selectedFile);
      } else {
        // Handle unsupported file type
        alert("Unsupported file type. Please select an image or video.");
      }
    }
  };

  function removeNewPost(newPostID: string) {
    setNewPosts((newPosts ?? []).filter((newPost) => newPost.id !== newPostID));
    setIsActiveMultiplePostTool(false);
  }

  return (
    createNewPostSelector.isShowCreateNewPost && (
      <>
        <div className="absolute select-none top-1/2 right-1/2 w-[496px] h-[calc(67%+27px)] translate-x-1/2 -translate-y-1/2 z-[55] bg-white rounded-xl overflow-hidden">
          {/* Top */}
          <div className="p-3">
            {createNewPostSelector.step === "first" && (
              <h4 className="font-[600] text-center py-3 border-b border-[#dbdbdb]">
                Create new post
              </h4>
            )}

            {createNewPostSelector.step === "second" && (
              <div className="flex justify-between items-center">
                <button
                  onClick={() => {
                    dispatch(setIsOpenModal(true));
                  }}
                >
                  <svg className="w-6 h-6">
                    <use href="#arrow-left"></use>
                  </svg>
                </button>
                <span className="font-[600]">Crop</span>
                <button className="font-[600] text-[#0095f6]">Next</button>
              </div>
            )}
          </div>

          {/* Body */}
          {/* First Step */}
          {createNewPostSelector.step === "first" && (
            <div className="w-full h-[91%] flex flex-col gap-y-4 items-center justify-center p-6 ">
              <svg className="w-24 h-[77px]">
                <use href="#create-new-post"></use>
              </svg>
              <span className="text-xl">Drag photos and videos here</span>
              <div>
                <div className="flex flex-col items-center">
                  <button className="primary-btn" onClick={handleClick}>
                    Select from computer
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Second Step */}
          {createNewPostSelector.step === "second" && (
            <div className="relative w-full h-[91%]">
              <div className="absolute inset-0">
                <Swiper
                  navigation={true}
                  pagination={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Pagination, Thumbs]}
                  className="create-new-post-mySwiper2 h-full"
                >
                  {newPosts?.map((newPost) => (
                    <SwiperSlide key={newPost.id} style={{ width: "100rem" }}>
                      <div className="overflow-hidden">
                        {file && (
                          <div className="h-[29rem]">
                            {newPost.img ? (
                              <img
                                src={newPost.img}
                                alt=""
                                className={`w-full h-full`}
                                style={{
                                  transform: `scale(${
                                    1 + Number(inputRangeZoomValue) / 100
                                  })`,
                                }}
                              />
                            ) : (
                              <video
                                autoPlay
                                className="h-full object-cover"
                                style={{
                                  transform: `scale(${
                                    1 + Number(inputRangeZoomValue) / 100
                                  })`,
                                }}
                              >
                                <source src={newPost.video} type={file.type} />
                                Your browser does not support the video tag.
                              </video>
                            )}
                          </div>
                        )}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="absolute bottom-4 right-6 left-6 flex justify-between items-center z-10">
                <div className="flex items-center gap-x-6">
                  <div className="relative">
                    <button
                      className="text-white hover:opacity-70 transition-all"
                      onClick={() => {
                        setIsActiveRatioPostTool(!isActiveRatioPostTool);
                        setIsActiveMultiplePostTool(false);
                        setIsActiveZoomPostTool(false);
                      }}
                    >
                      <svg className="w-4 h-4">
                        <use href="#aspect-ratio"></use>
                      </svg>
                    </button>

                    {isActiveRatioPostTool && (
                      <div className="w-[120px] h-[195px]  absolute bg-[#1a1a1a] -top-52 py-2 rounded-lg divide-y">
                        <div className="h-12 flex items-center justify-center gap-x-3 text-neutral-500">
                          <span className="text-sm">Original</span>
                          <svg className="w-6 h-6">
                            <use href="#image"></use>
                          </svg>
                        </div>
                        <div className="h-12 flex items-center justify-center gap-x-3 text-neutral-500">
                          <span className="text-sm">1:1</span>
                          <svg className="w-6 h-6">
                            <use href="#1-1"></use>
                          </svg>
                        </div>
                        <div className="h-12 flex items-center justify-center gap-x-3 text-neutral-500">
                          <span className="text-sm">4:5</span>
                          <svg className="w-6 h-6">
                            <use href="#4-5"></use>
                          </svg>
                        </div>
                        <div className="h-12 flex items-center justify-center gap-x-3 text-neutral-500">
                          <span className="text-sm">16-9</span>
                          <svg className="w-6 h-6">
                            <use href="#16-9"></use>
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <button
                      className="text-white hover:opacity-70 transition-all"
                      onClick={() => {
                        setIsActiveZoomPostTool(!isActiveZoomPostTool);
                        setIsActiveMultiplePostTool(false);
                        setIsActiveRatioPostTool(false);
                      }}
                    >
                      <svg className="w-4 h-4">
                        <use href="#zoom"></use>
                      </svg>
                    </button>

                    {isActiveZoomPostTool && (
                      <div className="flex items-center justify-center w-[132px] h-8  absolute bg-[#1a1a1a] -top-10 py-2 px-3 rounded-lg">
                        <input
                          className="input-range-zoom"
                          value={inputRangeZoomValue}
                          onChange={(e) =>
                            setInputRangeZoomValue(e.target.value)
                          }
                          type="range"
                          name=""
                          id=""
                          style={{
                            backgroundImage: `linear-gradient(to right,rgb(255, 255, 255) 0%,rgb(255, 255, 255) ${Number(
                              inputRangeZoomValue
                            )}% ,rgb(0, 0, 0) ${Number(
                              inputRangeZoomValue
                            )}% ,rgb(0, 0, 0) 100%`,
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="relative">
                  <button
                    className="text-white hover:opacity-70 transition-all"
                    onClick={() => {
                      setIsActiveMultiplePostTool(!isActiveMultiplePostTool);
                      setIsActiveZoomPostTool(false);
                      setIsActiveRatioPostTool(false);
                    }}
                  >
                    <svg className="w-4 h-4">
                      <use href="#multiple-post"></use>
                    </svg>
                  </button>

                  {isActiveMultiplePostTool && (
                    <div className="absolute -top-32 right-0 h-[118px] bg-[#1a1a1a] opacity-80 p-2 rounded-lg">
                      <div className="flex gap-x-2">
                        {/* Slides */}
                        <Swiper
                          onSwiper={(swiper) => setThumbsSwiper(swiper)}
                          spaceBetween={20}
                          slidesPerView={4}
                          freeMode={true}
                          watchSlidesProgress={true}
                          navigation={true}
                          modules={[FreeMode, Navigation, Thumbs]}
                          className="create-new-post-mySwiper w-96"
                        >
                          {newPosts?.map((newPost) => (
                            <SwiperSlide key={newPost.id}>
                              {file && (
                                <div>
                                  <div className="relative w-[94px] h-[94px]">
                                    <button
                                      className="remove-new-post-icon absolute top-2 right-2 text-white hover:opacity-70 "
                                      onClick={() => removeNewPost(newPost.id)}
                                    >
                                      <svg className="w-3 h-3">
                                        <use href="#close"></use>
                                      </svg>
                                    </button>
                                    {newPost.img ? (
                                      <img
                                        src={newPost.img}
                                        alt=""
                                        className="h-full"
                                      />
                                    ) : (
                                      <video autoPlay className="h-full ">
                                        <source
                                          src={newPost.video}
                                          type={file.type}
                                        />
                                        Your browser does not support the video
                                        tag.
                                      </video>
                                    )}
                                  </div>
                                </div>
                              )}
                            </SwiperSlide>
                          ))}
                        </Swiper>
                        <div>
                          <button
                            className="w-12 h-12 flex items-center justify-center border rounded-full"
                            onClick={handleClick}
                          >
                            <svg className="w-[22px] h-[22px] text-neutral-300">
                              <use href="#plus"></use>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input File */}
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
          accept="image/*,video/*"
        />

        {createNewPostSelector.step === "second" && (
          <TransparentOverlay className="z-[51]" />
        )}

        {/* Modal */}
        {createNewPostSelector.isOpenModal && (
          <div
            className="absolute inset-0 bg-black/70 z-[55]"
            onClick={() => {
              dispatch(setIsOpenModal(false));
            }}
          >
            <div className="w-[400px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col z-[55] bg-white p-3 text-center rounded-xl">
              <h4 className="text-xl">Discard post?</h4>
              <span className="text-sm text-neutral-500 pt-2 pb-6">
                If you leave, your edits won't be saved.
              </span>
              <button
                className="block h-12 text-sm text-[#ed4996] font-[700] py-1 px-2 border-t border-[#dbdbdb]"
                onClick={() => {
                  dispatch(setStepOfCreateNewPost("first"));
                  setThumbsSwiper(null);
                  setNewPosts([]);
                }}
              >
                Discard
              </button>
              <button
                className="block h-12 text-sm py-1 px-2 border-t border-[#dbdbdb]"
                onClick={() => dispatch(setIsOpenModal(false))}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </>
    )
  );
}

export default CreateNewPost;
