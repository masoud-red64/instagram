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
import Story from "../Story/Story";
import locations from "countries-list";
import SwitchInput from "../SwitchInput/SwitchInput";
import EmojiBox from "../EmojiBox/EmojiBox";

type NewPostsType = {
  id: string;
  img: string;
  video: string;
};

type inputRangeAdjustmentValuesType = {
  Blur: number;
  Brightness: number;
  Contrast: number;
  Grayscale: number;
  Invert: number;
  Opacity: number;
  Saturate: number;
  Sepia: number;
  HueRotate: number;
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
  const [inputRangeZoomValues, setInputRangeZoomValues] = useState<number[]>(
    []
  );
  const [isActiveZoomPostTool, setIsActiveZoomPostTool] = useState(false);
  const [isActiveRatioPostTool, setIsActiveRatioPostTool] = useState(false);
  const [aspectRatioValue, setAspectRatioValue] = useState("");
  const [filterValue, setFilterValue] = useState<string | undefined>("");
  const [editNav, setEditNav] = useState("filters");
  const defaultAdjustmentValues: any = {
    Blur: 0,
    Brightness: 1,
    Contrast: 1,
    Grayscale: 0,
    Invert: 0,
    Opacity: 100,
    Saturate: 100,
    Sepia: 0,
    HueRotate: 0,
  };
  const [inputRangeAdjustmentValues, setInputRangeAdjustmentValues] = useState(
    defaultAdjustmentValues
  );
  const [isShowEmojiBox, setIsShowEmojiBox] = useState(false);
  const [captionTextAreaValue, setCaptionTextAreaValue] = useState("");
  const [filteredCountries, setFilteredCountries] = useState<string[]>([]);

  const countries: Record<string, any> = locations;
  const countryCodes: string[] = Object.keys(countries.countries);
  const countryNames: string[] = countryCodes.map(
    (code: string) => countries.countries[code].name
  );
  const [locationInputValue, setLocationInputValue] = useState("");
  const [isShowLocationBox, setIsShowLocationBox] = useState(false);
  const [isShowAccessibilityAccordion, setIsShowAccessibilityAccordion] =
    useState(false);
  const [isShowAdvancedSettingsAccordion, setIsShowAdvancedSettingsAccordion] =
    useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const locationBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setThumbsSwiper(null);
  }, [createNewPostSelector.step]);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (
        locationBoxRef.current &&
        !locationBoxRef.current.contains(event.target as Node)
      ) {
        setIsShowLocationBox(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

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

  const handleZoomChange = (index: number, value: string) => {
    const updatedZoomValues = [...inputRangeZoomValues];
    updatedZoomValues[index] = Number(value);
    setInputRangeZoomValues(updatedZoomValues);
  };

  function handleChangeAdjustmentsInput(name: string, value: number) {
    setInputRangeAdjustmentValues(
      (prevAdjustments: inputRangeAdjustmentValuesType) => ({
        ...prevAdjustments,
        [name]: value,
      })
    );
  }

  const handleChangeLocationInputValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLocationInputValue(event.target.value);

    const filtered = countryNames.filter((countryName) =>
      countryName
        .toLocaleLowerCase()
        .includes(event.target.value.toLocaleLowerCase())
    );

    setFilteredCountries(filtered);

    setIsShowLocationBox(true);
    if (!event.target.value.length) {
      setIsShowLocationBox(false);
    }
  };

  return (
    createNewPostSelector.isShowCreateNewPost && (
      <>
        <div className="fixed select-none top-1/2 right-1/2 w-fit h-[496px] translate-x-1/2 -translate-y-1/2 z-[55] bg-white dark:bg-neutral-800 rounded-xl overflow-hidden">
          {/* Top */}
          <div className="p-3 border-b border-[#dbdbdb] dark:border-[#363636]">
            {createNewPostSelector.step === "first" && (
              <h4 className="font-[600] text-center dark:text-white">
                Create new post
              </h4>
            )}

            {createNewPostSelector.step !== "first" && (
              <div className="flex justify-between items-center">
                <button
                  onClick={() => {
                    if (createNewPostSelector.step === "second") {
                      dispatch(setIsOpenModal(true));
                    } else if (createNewPostSelector.step === "third") {
                      dispatch(setStepOfCreateNewPost("second"));
                    } else if (createNewPostSelector.step === "fourth") {
                      dispatch(setStepOfCreateNewPost("third"));
                    }
                  }}
                >
                  <svg className="w-6 h-6 dark:text-white">
                    <use href="#arrow-left"></use>
                  </svg>
                </button>
                <span className="font-[600] dark:text-white">
                  {createNewPostSelector.step === "second"
                    ? "Crop"
                    : createNewPostSelector.step === "third"
                    ? "Edit"
                    : createNewPostSelector.step === "fourth" &&
                      "Create new post"}
                </span>
                <button
                  className="font-[600] text-[#0095f6]"
                  onClick={() => {
                    if (createNewPostSelector.step === "second") {
                      dispatch(setStepOfCreateNewPost("third"));
                      setIsActiveZoomPostTool(false);
                    } else if (createNewPostSelector.step === "third") {
                      dispatch(setStepOfCreateNewPost("fourth"));
                    }
                  }}
                >
                  {createNewPostSelector.step === "second" ||
                  createNewPostSelector.step === "third"
                    ? "Next"
                    : createNewPostSelector.step === "fourth" && "Share"}
                </button>
              </div>
            )}
          </div>

          {/* Body */}
          {/* First Step */}
          {createNewPostSelector.step === "first" && (
            <div className="w-72 xs:w-80 sm:w-[496px] h-[91%] flex flex-col gap-y-4 items-center justify-center p-6 ">
              <svg className="w-24 h-[77px] dark:text-white">
                <use href="#create-new-post"></use>
              </svg>
              <span className="text-xl dark:text-white">
                Drag photos and videos here
              </span>
              <div>
                <div className="flex flex-col items-center">
                  <button className="primary-btn" onClick={handleClick}>
                    Select from computer
                  </button>
                </div>
              </div>
            </div>
          )}

          {(createNewPostSelector.step === "second" ||
            createNewPostSelector.step === "third" ||
            createNewPostSelector.step === "fourth") && (
            <div className="relative w-fit h-[91%] flex">
              {/* Second Step */}
              <div
                className={`${
                  createNewPostSelector.step === "second"
                    ? "w-72 xs:w-80 sm:w-[496px]"
                    : "w-[8rem] xs:w-[10rem] sm:w-[22rem] md:w-[25rem] lg:w-[30rem]"
                } `}
              >
                <div>
                  <Swiper
                    onSliderMove={() => {
                      setIsActiveMultiplePostTool(false);
                      setIsActiveRatioPostTool(false);
                      setIsActiveZoomPostTool(false);
                    }}
                    navigation={true}
                    pagination={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Pagination, Thumbs]}
                    className="create-new-post-mySwiper2 h-full"
                  >
                    {newPosts?.map((newPost, index) => (
                      <>
                        <SwiperSlide
                          key={newPost.id}
                          style={{ width: "100rem" }}
                          onClick={() => {
                            setIsActiveMultiplePostTool(false);
                            setIsActiveRatioPostTool(false);
                            setIsActiveZoomPostTool(false);
                          }}
                        >
                          <div className="relative overflow-hidden">
                            {file && (
                              <div className="h-[29rem] flex items-center justify-center">
                                {newPost.img ? (
                                  <img
                                    loading="lazy"
                                    src={newPost.img}
                                    alt=""
                                    style={{
                                      transform: `scale(${
                                        1 +
                                        Number(inputRangeZoomValues[index]) /
                                          100
                                      })`,
                                      aspectRatio: aspectRatioValue,
                                      filter:
                                        editNav === "filters"
                                          ? filterValue
                                          : `blur(${
                                              inputRangeAdjustmentValues.Blur
                                            }px) brightness(${
                                              inputRangeAdjustmentValues.Brightness
                                            }) contrast(${
                                              inputRangeAdjustmentValues.Contrast
                                            }) grayscale(${
                                              inputRangeAdjustmentValues.Grayscale
                                            }%) invert(${
                                              inputRangeAdjustmentValues.Invert
                                            }%) opacity(${
                                              inputRangeAdjustmentValues.Opacity /
                                              100
                                            }) saturate(${
                                              inputRangeAdjustmentValues.Saturate
                                            }%) sepia(${
                                              inputRangeAdjustmentValues.Sepia
                                            }%) hue-rotate(${
                                              inputRangeAdjustmentValues.HueRotate
                                            }deg)`,
                                    }}
                                  />
                                ) : (
                                  <video
                                    autoPlay
                                    className="h-full object-cover"
                                    style={{
                                      transform: `scale(${
                                        1 +
                                        Number(inputRangeZoomValues[index]) /
                                          100
                                      })`,
                                    }}
                                  >
                                    <source
                                      src={newPost.video}
                                      type={file.type}
                                    />
                                    Your browser does not support the video tag.
                                  </video>
                                )}
                              </div>
                            )}
                            {isActiveZoomPostTool && (
                              <div className="flex items-center justify-center w-[132px] h-8  absolute bg-[#1a1a1a] bottom-16 left-20 py-2 px-3 rounded-lg">
                                <input
                                  className="input-range-zoom"
                                  value={inputRangeZoomValues[index] || 0}
                                  onChange={(e) =>
                                    handleZoomChange(index, e.target.value)
                                  }
                                  type="range"
                                  name=""
                                  id=""
                                  style={{
                                    backgroundImage: `linear-gradient(to right,rgb(255, 255, 255) 0%,rgb(255, 255, 255) ${Number(
                                      inputRangeZoomValues[index] || 0
                                    )}% ,rgb(0, 0, 0) ${Number(
                                      inputRangeZoomValues[index] || 0
                                    )}% ,rgb(0, 0, 0) 100%)`,
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        </SwiperSlide>
                      </>
                    ))}
                  </Swiper>
                </div>
                {createNewPostSelector.step === "second" && (
                  <div className="absolute bottom-4 right-6 left-6 flex justify-between items-center z-10">
                    <div className="flex items-center gap-x-6">
                      <div className="relative">
                        <button
                          className="text-white bg-black/50 p-2 rounded-full hover:opacity-70 transition-all"
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
                          <div className="w-[120px] h-[195px]  absolute bg-[#1a1a1a] -top-52 rounded-lg divide-y">
                            <button
                              onClick={() => setAspectRatioValue("")}
                              className={`w-full h-12 flex items-center justify-center gap-x-3 ${
                                aspectRatioValue === ""
                                  ? "text-white"
                                  : "text-neutral-500"
                              }`}
                            >
                              <span className="text-sm">Original</span>
                              <svg className="w-6 h-6">
                                <use href="#image"></use>
                              </svg>
                            </button>
                            <button
                              onClick={() => setAspectRatioValue("1/1")}
                              className={`w-full h-12 flex items-center justify-center gap-x-3 ${
                                aspectRatioValue === "1/1"
                                  ? "text-white"
                                  : "text-neutral-500"
                              }`}
                            >
                              <span className="text-sm">1:1</span>
                              <svg className="w-6 h-6">
                                <use href="#1-1"></use>
                              </svg>
                            </button>
                            <button
                              onClick={() => setAspectRatioValue("4/5")}
                              className={`w-full h-12 flex items-center justify-center gap-x-3 ${
                                aspectRatioValue === "4/5"
                                  ? "text-white"
                                  : "text-neutral-500"
                              }`}
                            >
                              <span className="text-sm">4:5</span>
                              <svg className="w-6 h-6">
                                <use href="#4-5"></use>
                              </svg>
                            </button>
                            <button
                              onClick={() => setAspectRatioValue("16/9")}
                              className={`w-full h-12 flex items-center justify-center gap-x-3 ${
                                aspectRatioValue === "16/9"
                                  ? "text-white"
                                  : "text-neutral-500"
                              }`}
                            >
                              <span className="text-sm">16-9</span>
                              <svg className="w-6 h-6">
                                <use href="#16-9"></use>
                              </svg>
                            </button>
                          </div>
                        )}
                      </div>
                      <div className="relative">
                        <button
                          className="text-white bg-black/50 p-2 rounded-full hover:opacity-70 transition-all"
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
                      </div>
                    </div>
                    <div className="relative">
                      <button
                        className="text-white bg-black/50 p-2 rounded-full hover:opacity-70 transition-all"
                        onClick={() => {
                          setIsActiveMultiplePostTool(
                            !isActiveMultiplePostTool
                          );
                          setIsActiveZoomPostTool(false);
                          setIsActiveRatioPostTool(false);
                        }}
                      >
                        <svg className="w-4 h-4">
                          <use href="#multiple-post"></use>
                        </svg>
                      </button>

                      {isActiveMultiplePostTool && (
                        <div className="w-60 sm:w-[400px] absolute -top-32 right-0 h-[118px] bg-[#1a1a1a] opacity-80 p-2 rounded-lg">
                          <div className="flex gap-x-2">
                            {/* Slides */}
                            <Swiper
                              onSwiper={(swiper) => setThumbsSwiper(swiper)}
                              slidesPerView={1}
                              spaceBetween={10}
                              breakpoints={{
                                664: {
                                  slidesPerView: 3,
                                  spaceBetween: 5,
                                },
                              }}
                              freeMode={true}
                              watchSlidesProgress={true}
                              navigation={true}
                              modules={[FreeMode, Navigation, Thumbs]}
                              className="create-new-post-mySwiper w-full"
                            >
                              {newPosts?.map((newPost) => (
                                <SwiperSlide key={newPost.id}>
                                  {file && (
                                    <div>
                                      <div className="relative w-[94px] h-[94px]">
                                        <button
                                          className="remove-new-post-icon absolute top-2 right-2 text-white hover:opacity-70 "
                                          onClick={() =>
                                            removeNewPost(newPost.id)
                                          }
                                        >
                                          <svg className="w-3 h-3">
                                            <use href="#close"></use>
                                          </svg>
                                        </button>
                                        {newPost.img ? (
                                          <img
                                            loading="lazy"
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
                                            Your browser does not support the
                                            video tag.
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
                )}
              </div>

              {/* Third Step */}
              {(createNewPostSelector.step === "third" ||
                createNewPostSelector.step === "fourth") && (
                <div className="h-full w-[10rem] xs:w-[12rem] sm:w-[16rem] md:w-[18rem] lg:w-[20rem] bg-white dark:bg-neutral-800 border-l dark:border-[#363636]">
                  {/* Third Step */}
                  {createNewPostSelector.step === "third" && (
                    <div>
                      {/* Header */}
                      <div className="flex items-center justify-between child:grow child:text-sm/[18px] text-center child:py-2 border-b border-black/30 dark:border-white/30">
                        <button
                          className={`${
                            editNav === "filters"
                              ? "border-b border-black/70 dark:border-white dark:text-white font-[600]"
                              : "opacity-30 dark:text-[#e0f1ff]"
                          }`}
                          onClick={() => setEditNav("filters")}
                        >
                          Filters
                        </button>
                        <button
                          className={`${
                            editNav === "adjustments"
                              ? "border-b border-black/70 dark:border-white dark:text-white font-[600]"
                              : "opacity-30 dark:text-[#e0f1ff]"
                          }`}
                          onClick={() => setEditNav("adjustments")}
                        >
                          Adjustments
                        </button>
                      </div>

                      {editNav === "filters" ? (
                        <>
                          {/* Filters */}
                          <div className="h-[25.6rem] flex flex-wrap child:grow gap-4 p-4 overflow-y-auto">
                            {createNewPostSelector.filters.map((filter) => (
                              <div
                                className="flex flex-col items-center gap-y-1 cursor-pointer"
                                onClick={() => setFilterValue(filter.filter)}
                              >
                                <img
                                  loading="lazy"
                                  src={`images/filters/${filter.name}.jpg`}
                                  alt=""
                                  className={`w-[88px] h-[88px] ${
                                    filter.filter === filterValue &&
                                    "border-[3px] border-[#0096f6]"
                                  } rounded-sm`}
                                />
                                <span
                                  className={`text-xs ${
                                    filter.filter === filterValue
                                      ? "text-[#0096f6] font-[600]"
                                      : "text-neutral-500 dark:text-neutral-400"
                                  }`}
                                >
                                  {filter.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Adjustments */}
                          <div className="px-4 pb-4 h-[25.6rem] overflow-y-auto">
                            {createNewPostSelector.adjustments.map(
                              (adjustment) => (
                                <div>
                                  <div className="flex items-center justify-between py-[14px]">
                                    <span className="dark:text-white">
                                      {adjustment.name}
                                    </span>

                                    {inputRangeAdjustmentValues[
                                      adjustment.name
                                    ] !==
                                      defaultAdjustmentValues[
                                        adjustment.name
                                      ] && (
                                      <button
                                        className="font-[600] text-sm text-[#0095f6]"
                                        onClick={() => {
                                          setInputRangeAdjustmentValues(
                                            (
                                              prevAdjustments: inputRangeAdjustmentValuesType
                                            ) => ({
                                              ...prevAdjustments,
                                              [adjustment.name]:
                                                defaultAdjustmentValues[
                                                  adjustment.name
                                                ],
                                            })
                                          );
                                        }}
                                      >
                                        Reset
                                      </button>
                                    )}
                                  </div>

                                  <div className="flex items-center justify-between gap-x-3">
                                    <input
                                      type="range"
                                      value={
                                        inputRangeAdjustmentValues[
                                          adjustment.name
                                        ]
                                      }
                                      min={-100}
                                      max={100}
                                      name=""
                                      id=""
                                      className="input-adjustments grow"
                                      onInput={(e) => {
                                        const target =
                                          e.target as HTMLInputElement;
                                        handleChangeAdjustmentsInput(
                                          adjustment.name,
                                          Number(target.value)
                                        );
                                      }}
                                      style={{
                                        backgroundImage: `linear-gradient(to right, rgb(219, 219, 219) 0%, rgb(219, 219, 219) ${
                                          inputRangeAdjustmentValues[
                                            adjustment.name
                                          ] < 0
                                            ? inputRangeAdjustmentValues[
                                                adjustment.name
                                              ] /
                                                2 +
                                              50
                                            : "50"
                                        }%, rgb(38, 38, 38) ${
                                          inputRangeAdjustmentValues[
                                            adjustment.name
                                          ] < 0
                                            ? inputRangeAdjustmentValues[
                                                adjustment.name
                                              ] /
                                                2 +
                                              50
                                            : "50"
                                        }%, rgb(38, 38, 38) ${
                                          inputRangeAdjustmentValues[
                                            adjustment.name
                                          ] > 0
                                            ? inputRangeAdjustmentValues[
                                                adjustment.name
                                              ] /
                                                2 +
                                              50
                                            : "50"
                                        }%, rgb(219, 219, 219) ${
                                          inputRangeAdjustmentValues[
                                            adjustment.name
                                          ] > 0
                                            ? inputRangeAdjustmentValues[
                                                adjustment.name
                                              ] /
                                                2 +
                                              50
                                            : "50"
                                        }%, rgb(219, 219, 219) 100%)`,
                                      }}
                                    />
                                    <span
                                      className={`block w-6 text-xs ${
                                        inputRangeAdjustmentValues[
                                          adjustment.name
                                        ] !==
                                        defaultAdjustmentValues[adjustment.name]
                                          ? "text-black dark:text-white"
                                          : "text-neutral-500  dark:text-[#a8a8a8]"
                                      }`}
                                    >
                                      {
                                        inputRangeAdjustmentValues[
                                          adjustment.name
                                        ]
                                      }
                                    </span>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  )}

                  {/* Fourth Step */}
                  {createNewPostSelector.step === "fourth" && (
                    <div className="h-full overflow-y-scroll scrollbar pb-2">
                      <div className="flex items-center gap-x-3 p-4">
                        <div className="w-8 h-8">
                          <Story img="user1.jpg" hasStory={false} />
                        </div>
                        <span className="font-[600] text-sm dark:text-white">
                          masoud_red64
                        </span>
                      </div>
                      <div>
                        <textarea
                          onClick={() => setIsShowEmojiBox(false)}
                          maxLength={2200}
                          className="w-full h-[168px] dark:text-white bg-white dark:bg-neutral-800 px-4 outline-none border-0 resize-none overflow-y-auto placeholder:text-gray-300 dark:placeholder:text-neutral-500"
                          placeholder="Write a caption..."
                          value={captionTextAreaValue}
                          ref={textAreaRef}
                          onChange={(e) => {
                            setCaptionTextAreaValue(e.target.value);
                          }}
                        ></textarea>
                      </div>
                      <div className="flex items-center justify-between px-4 py-2">
                        <div
                          className="relative"
                          onClick={() => textAreaRef.current?.focus()}
                        >
                          <button
                            onClick={() => {
                              setIsShowEmojiBox(!isShowEmojiBox);
                              // textAreaRef.current?.focus()
                            }}
                          >
                            <svg
                              className={`w-5 h-5  ${
                                isShowEmojiBox
                                  ? "text-[#0095f6]"
                                  : "text-neutral-500 dark:text-[#a8a8a8]"
                              }`}
                            >
                              <use href="#emoji"></use>
                            </svg>
                          </button>
                          {isShowEmojiBox && (
                            <>
                              <div className="absolute top-6 left-0.5 w-3 h-3 bg-white dark:bg-neutral-800 rotate-[225deg] drop-shadow-[1px_1px_1px_rgba(0,0,0,.09)] z-20"></div>
                              <div className="absolute top-7 -left-2 w-[265px] h-[140px] bg-white dark:bg-neutral-800 text-neutral-500 text-sm font-[600] rounded-md drop-shadow-[0_0_5px_rgba(0,0,0,.0975)] overflow-y-auto scrollbar z-10">
                                <EmojiBox
                                  textAreaRef={textAreaRef}
                                  captionTextAreaValue={captionTextAreaValue}
                                  setCaptionTextAreaValue={
                                    setCaptionTextAreaValue
                                  }
                                  setIsShowEmojiBox={setIsShowEmojiBox}
                                />
                              </div>
                            </>
                          )}
                        </div>
                        <span className="text-xs text-[#c7c7c7] dark:text-neutral-500">
                          {captionTextAreaValue.length}/2,200
                        </span>
                      </div>

                      <div className="relative flex items-center justify-between gap-x-1 px-4 border-y border-[#dbdbdb dark:border-neutral-700">
                        <input
                          type="text"
                          placeholder="Add location"
                          className="grow dark:text-white bg-white dark:bg-neutral-800 placeholder:text-neutral-400 py-2 outline-none"
                          value={locationInputValue}
                          onChange={handleChangeLocationInputValue}
                          onBlur={() => setLocationInputValue("")}
                        />
                        <div className="text-black dark:text-white">
                          {!isShowLocationBox ? (
                            <svg className="w-4 h-4">
                              <use href="#location"></use>
                            </svg>
                          ) : (
                            <button>
                              <svg className="w-4 h-4">
                                <use href="#close"></use>
                              </svg>
                            </button>
                          )}
                        </div>

                        {/* Locations */}
                        {isShowLocationBox && (
                          <div
                            ref={locationBoxRef}
                            className="absolute top-10 left-0 w-full h-28 p-4 bg-white dark:bg-black overflow-y-auto rounded-md drop-shadow-[0px_0px_5px_rgba(0,0,0,.0975)] z-10"
                          >
                            <ul className="flex flex-col gap-2">
                              {filteredCountries.length ? (
                                filteredCountries.map((country) => (
                                  <li
                                    className="font-[600] dark:text-white cursor-pointer"
                                    onClick={() => {
                                      setLocationInputValue(country);
                                      setIsShowLocationBox(false);
                                    }}
                                  >
                                    {country}
                                  </li>
                                ))
                              ) : (
                                <span className="text-neutral-500">
                                  Not found
                                </span>
                              )}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Accordion */}
                      <div>
                        <div className="child:px-4 py-2 border-b border-[#dbdbdb] dark:border-neutral-700">
                          <div
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() =>
                              setIsShowAccessibilityAccordion(
                                !isShowAccessibilityAccordion
                              )
                            }
                          >
                            <span
                              className={`dark:text-white ${
                                isShowAccessibilityAccordion && "font-[600]"
                              }`}
                            >
                              Accessibility
                            </span>
                            <button>
                              <svg
                                className={`w-4 h-4 dark:text-white ${
                                  isShowAccessibilityAccordion
                                    ? ""
                                    : "rotate-180"
                                }`}
                              >
                                <use href="#chevron-top"></use>
                              </svg>
                            </button>
                          </div>

                          {isShowAccessibilityAccordion && (
                            <div className="pt-1.5">
                              <p className="text-xs text-neutral-500">
                                Alt text describes your photos for people with
                                visual impairments. Alt text will be
                                automatically created for your photos or you can
                                choose to write your own.
                              </p>

                              <div>
                                {newPosts?.map((newPost) => (
                                  <div className="flex items-center gap-x-2 my-3">
                                    <div className="w-11 h-11">
                                      {newPost.img ? (
                                        <img
                                          loading="lazy"
                                          src={newPost.img}
                                          alt=""
                                          className="w-full h-full object-cover"
                                        />
                                      ) : (
                                        <video
                                          autoPlay
                                          className="w-full h-full object-cover"
                                        >
                                          <source src={newPost.video} />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      )}
                                    </div>
                                    <input
                                      className="h-11 grow dark:text-white bg-white dark:bg-neutral-800 text-sm placeholder:text-neutral-300 dark:placeholder:text-neutral-500 px-3 py-1 outline-none focus:border border-[#dbdbdb] dark:border-neutral-600 rounded-md"
                                      type="text"
                                      placeholder="Write alt text..."
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        <div
                          className={`child:px-4 py-2 ${
                            !isShowAdvancedSettingsAccordion &&
                            "border-b border-[#dbdbdb] dark:border-neutral-700"
                          }`}
                        >
                          <div
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() =>
                              setIsShowAdvancedSettingsAccordion(
                                !isShowAdvancedSettingsAccordion
                              )
                            }
                          >
                            <span
                              className={`dark:text-white ${
                                isShowAdvancedSettingsAccordion && "font-[600]"
                              }`}
                            >
                              Advanced Settings
                            </span>
                            <button>
                              <svg
                                className={`w-4 h-4 dark:text-white ${
                                  isShowAdvancedSettingsAccordion
                                    ? ""
                                    : "rotate-180"
                                }`}
                              >
                                <use href="#chevron-top"></use>
                              </svg>
                            </button>
                          </div>

                          {isShowAdvancedSettingsAccordion && (
                            <div className="pt-1.5">
                              <div>
                                <div className="flex items-center justify-between">
                                  <h5 className="dark:text-white">
                                    Hide like and view counts on this post
                                  </h5>
                                  <SwitchInput
                                    switchClassName="w-[56px] h-[28px]"
                                    sliderClassName="slider bg-neutral-500 before:left-1 before:bottom-1 before:bg-white before:w-5 before:h-5"
                                  />
                                </div>
                                <p className="text-xs text-neutral-500 py-2">
                                  Only you will see the total number of likes
                                  and views on this post. You can change this
                                  later by going to the ··· menu at the top of
                                  the post. To hide like counts on other
                                  people's posts, go to your account settings.
                                </p>
                              </div>
                              <div>
                                <div className="flex items-center justify-between">
                                  <h5 className="dark:text-white">
                                    Turn off commenting
                                  </h5>
                                  <SwitchInput
                                    switchClassName="w-[56px] h-[28px]"
                                    sliderClassName="slider bg-neutral-500 before:left-1 before:bottom-1 before:bg-white before:w-5 before:h-5"
                                  />
                                </div>
                                <p className="text-xs text-neutral-500 py-2">
                                  You can change this later by going to the ···
                                  menu at the top of your post.
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
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

        {createNewPostSelector.step !== "first" && (
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
            <div className="w-[400px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col z-[55] bg-white dark:bg-neutral-800 p-3 text-center rounded-xl">
              <h4 className="text-xl dark:text-white">Discard post?</h4>
              <span className="text-sm text-neutral-500 dark:text-neutral-400 pt-2 pb-6">
                If you leave, your edits won't be saved.
              </span>
              <button
                className="block h-12 text-sm text-[#ed4956] font-[700] py-1 px-2 border-t border-[#dbdbdb] dark:border-neutral-700"
                onClick={() => {
                  dispatch(setStepOfCreateNewPost("first"));
                  setThumbsSwiper(null);
                  setNewPosts([]);
                }}
              >
                Discard
              </button>
              <button
                className="block h-12 text-sm dark:text-white py-1 px-2 border-t border-[#dbdbdb] dark:border-neutral-700"
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
