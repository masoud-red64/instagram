import React, { useEffect, useRef, useState } from "react";
import Story from "../Components/Story/Story";
import { userListTypes, usersList } from "../Data/users";
import PostWithCommentBox from "../Components/PostWithCommentBox/PostWithCommentBox";
import ShareBox from "../Components/ShareBox/ShareBox";
import MoreOptionPostBox from "../Components/MoreOptionPostBox/MoreOptionPostBox";
import EmojiBox from "../Components/EmojiBox/EmojiBox";

type userMessage = { id: string; text: string; img: string; video: string };

function Direct() {
  const [mainUser, setMainUser] = useState({} as userListTypes);
  const [isShowShareBox, setIsShowShareBox] = useState(false);
  const [isShowMoreOptionBox, setIsShowMoreOptionBox] = useState(false);
  const [isShowCommentBox, setIsShowCommentBox] = useState(false);
  const [userMessages, setUserMessages] = useState<{
    [key: number]: userMessage[];
  }>({});
  const [inputMessageValue, setInputMessageValue] = useState("");
  const [isShowEmojiBox, setIsShowEmojiBox] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [mainMessageVideoOrImg, setMainMessageVideoOrImg] = useState(
    {} as userMessage
  );
  const [isShowMainImgOrVideo, setIsShowMainImgOrVideo] = useState(false);

  const messagesContainerRef = useRef(null);
  const inputMessageRef = useRef(null);
  const inputFileRef = useRef<HTMLInputElement>(null);

  // Send Message With Enter Keyboard
  useEffect(() => {
    const documentKeyDownHandler = (e: KeyboardEvent) => {
      e.key === "Enter" && sendMessageHandler(inputMessageValue, "", "");
    };

    document.addEventListener("keydown", documentKeyDownHandler);
    return () =>
      document.removeEventListener("keydown", documentKeyDownHandler);
  }, [inputMessageValue]);

  // Scroll Down Automaticly
  useEffect(() => {
    scrollToBottom();
  }, [userMessages,mainUser]);

  const getMainUserHandle = (userID: number) => {
    const filterUser = usersList.filter((user) => user.id === userID);
    setMainUser(filterUser[0]);
  };

  const scrollToBottom = () => {
    const messageContainer: any = messagesContainerRef.current;
    if (messageContainer) {
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }
  };

  const sendMessageHandler = (text: string, img: string, video: string) => {
    setUserMessages((prevMessages) => ({
      ...prevMessages,
      [mainUser.id]: [
        ...(prevMessages[mainUser.id] || []),
        {
          id: crypto.randomUUID(),
          text,
          img,
          video,
        },
      ],
    }));
    setInputMessageValue("");
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFile = event.target.files[0];

      // Clear the input value
      event.target.value = "";

      if (
        selectedFile.type.startsWith("image/") ||
        selectedFile.type.startsWith("video/")
      ) {
        if (selectedFile.type.startsWith("image/")) {
          sendMessageHandler("", URL.createObjectURL(selectedFile), "");
        } else if (selectedFile.type.startsWith("video/")) {
          sendMessageHandler("", "", URL.createObjectURL(selectedFile));
        }
        setFile(selectedFile);
      } else {
        // Handle unsupported file type
        alert("Unsupported file type. Please select an image or video.");
      }
    }
  };

  function formatDate(date: Date) {
    const options = {
      weekday: "short" as const, // Short weekday name (e.g., "Wed")
      hour: "numeric" as const, // Numeric hour (e.g., "10")
      minute: "2-digit" as const, // Two-digit minute (e.g., "23")
      hour12: false, // Use 24-hour format
    };

    return date.toLocaleString("en-US", options);
  }

  return (
    <>
      <div className="flex h-[calc(100vh-48px)] md:h-screen">
        <div className="md:w-[397px] flex flex-col bg-white dark:bg-black pt-2 border-r border-[#dbdbdb] dark:border-[#262626]">
          {/* Header */}
          <div className="flex items-center justify-center md:justify-between pt-7 pb-3 px-6">
            <div className="hidden md:flex items-center gap-x-2">
              <h2 className="text-black dark:text-neutral-100 text-xl font-[700]">
                masoud_red64
              </h2>
              <button>
                <svg className="w-3 h-3 dark:text-neutral-100 rotate-180">
                  <use href="#chevron-top"></use>
                </svg>
              </button>
            </div>
            <button className="">
              <svg className="w-6 h-6 dark:text-neutral-100">
                <use href="#new-message"></use>
              </svg>
            </button>
          </div>

          {/* Main */}
          <div className="hidden md:flex items-center justify-between pt-[14px] pb-2.5 px-6 ">
            <span className="font-[700] dark:text-neutral-100">Messages</span>
            <button className="font-[600] text-sm text-neutral-500 dark:text-[#a8a8a8]">
              Requests
            </button>
          </div>
          <div className="h-full overflow-y-auto scrollbar">
            <ul>
              {usersList.map((user, index) => (
                <li
                  className={`flex items-center justify-center sm:justify-between py-2 px-1 sm:px-6 ${
                    mainUser.id === user.id &&
                    "bg-neutral-100 dark:bg-neutral-800"
                  } hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer`}
                  onClick={() => getMainUserHandle(user.id)}
                >
                  <div className="flex items-center justify-center gap-x-3">
                    <div className="w-10 h-10 sm:w-14 sm:h-14">
                      <Story img={user.img} hasStory={false} />
                    </div>
                    <div className="hidden md:block">
                      <span
                        className={`text-sm dark:text-neutral-100 ${
                          index === 0 && "font-[600]"
                        }`}
                      >
                        {user.name}
                      </span>
                      <div className="text-xs text-neutral-500 dark:text-[#a8a8a8] mt-1">
                        <span
                          className={`${
                            index === 0
                              ? "text-black dark:text-neutral-100 font-[700]"
                              : "text-neutral-500 dark:text-[#a8a8a8]"
                          }`}
                        >
                          {index % 5 === 0
                            ? "You sent an attachment."
                            : index % 3 === 0
                            ? "Liked a message"
                            : `${user.name} shared a story`}
                        </span>
                        <span> · </span>
                        <span>1d</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-2">
                    {index % 5 === 0 && (
                      <svg className="hidden md:inline-block w-[15px] h-[15px] text-neutral-500 dark:text-[#a8a8a8]">
                        <use href="#muted-message"></use>
                      </svg>
                    )}
                    {index === 0 && (
                      <div className="w-2 h-2 bg-[#0095f6] rounded-full"></div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grow">
          {Object.keys(mainUser).length ? (
            <>
              {/* Messages Box */}
              <div className="w-full h-full flex flex-col">
                {/* Top */}
                <div className="h-[75px] flex items-center justify-between px-4 border-b border-[#dbdbdb] dark:border-[#363636]">
                  <div className="flex items-center gap-x-3">
                    <div className="w-11 h-11">
                      <Story img={mainUser.img} hasStory={false} />
                    </div>
                    <span className="font-[600] dark:text-neutral-100">
                      {mainUser?.name}
                    </span>
                  </div>
                  <div className="flex items-center dark:text-neutral-100 gap-x-4">
                    <button>
                      <svg className="w-6 h-6">
                        <use href="#audio-call"></use>
                      </svg>
                    </button>
                    <button>
                      <svg className="w-6 h-6">
                        <use href="#video-call"></use>
                      </svg>
                    </button>
                    <button>
                      <svg className="w-6 h-6">
                        <use href="#information"></use>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Center => Messages */}
                <div
                  ref={messagesContainerRef}
                  className="h-[calc(100vh-150px)] overflow-y-auto scrollbar px-1 sm:px-4"
                >
                  {/* Date */}
                  <div className="text-xs text-[#8a8d91] font-[500] py-4 text-center">
                    Wed 10:28
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-y-3">
                    {/*Send Post */}
                    {mainUser.stories.slice(0, 1).map((post) => (
                      <div className="flex items-center flex-row-reverse gap-x-4 group">
                        <div
                          className="relative w-[150px] sm:w-[198px] sm:h-[352px] rounded-2xl overflow-hidden cursor-pointer"
                          onClick={() => setIsShowCommentBox(true)}
                        >
                          {post.video ? (
                            <video
                              src={`/images/stories/videos/${post.video}`}
                              className="h-full object-cover"
                            ></video>
                          ) : (
                            <img
                              src={`/images/stories/images/${post.img}`}
                              alt=""
                              className="h-full object-cover"
                            />
                          )}

                          {/* Top */}
                          <div className="absolute top-3 left-3 right-3 flex items-center gap-x-2">
                            <div className="w-8 h-8">
                              <Story img={mainUser.img} hasStory={false} />
                            </div>
                            <span className="text-white text-sm font-[600]">
                              {mainUser.username}
                            </span>
                          </div>

                          {/* Video Icon */}
                          {post.video ? (
                            <svg className="absolute w-6 h-6 bottom-3 left-3 text-white">
                              <use href="#reels-active"></use>
                            </svg>
                          ) : (
                            <svg className="absolute w-6 h-6 bottom-3 left-3 text-white">
                              <use href="#gallery"></use>
                            </svg>
                          )}
                        </div>
                        <div className="hidden group-hover:flex items-center justify-center gap-x-1 sm:gap-x-4 gap-y-2 flex-wrap dark:text-neutral-100  opacity-50">
                          <button>
                            <svg className="w-4 h-4">
                              <use href="#more-options"></use>
                            </svg>
                          </button>
                          <button>
                            <svg className="w-4 h-4">
                              <use href="#reply"></use>
                            </svg>
                          </button>
                          <button>
                            <svg className="w-4 h-4">
                              <use href="#emoji"></use>
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}

                    {/* Receive Post */}
                    {mainUser.stories.slice(1, 2).map((post) => (
                      <div className="flex items-center group">
                        <div className="w-7 h-7 mt-auto">
                          <Story img={mainUser.img} hasStory={false} />
                        </div>
                        <div
                          className="relative w-[150px] sm:w-[198px] sm:h-[352px] ml-2 mr-4 rounded-2xl overflow-hidden cursor-pointer"
                          onClick={() => setIsShowCommentBox(true)}
                        >
                          {post.video ? (
                            <video
                              src={`/images/stories/videos/${post.video}`}
                              className="h-full object-cover"
                            ></video>
                          ) : (
                            <img
                              src={`/images/stories/images/${post.img}`}
                              alt=""
                              className="h-full object-cover"
                            />
                          )}

                          {/* Top */}
                          <div className="absolute top-3 left-3 right-3 flex items-center gap-x-2">
                            <div className="w-8 h-8">
                              <Story img={mainUser.img} hasStory={false} />
                            </div>
                            <span className="text-white text-sm font-[600]">
                              {mainUser.username}
                            </span>
                          </div>

                          {/* Video Icon */}
                          {post.video ? (
                            <svg className="absolute w-6 h-6 bottom-3 left-3 text-white">
                              <use href="#reels-active"></use>
                            </svg>
                          ) : (
                            <svg className="absolute w-6 h-6 bottom-3 left-3 text-white">
                              <use href="#gallery"></use>
                            </svg>
                          )}
                        </div>
                        <div className="hidden group-hover:flex items-center justify-center gap-x-1 sm:gap-x-4 gap-y-2 flex-wrap dark:text-neutral-100 opacity-50">
                          <button>
                            <svg className="w-4 h-4">
                              <use href="#emoji"></use>
                            </svg>
                          </button>
                          <button>
                            <svg className="w-4 h-4">
                              <use href="#reply"></use>
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}

                    {/* Text Messages */}
                    <ul className="flex flex-col gap-y-2">
                      {/* Date */}
                      {(userMessages[mainUser.id] || []).length !== 0 && (
                        <div className="text-xs text-[#8a8d91] font-[500] py-4 text-center">
                          {formatDate(new Date())}
                        </div>
                      )}
                      {(userMessages[mainUser.id] || []).map((message) => (
                        <li className="flex items-center flex-row-reverse gap-x-4 pb-1 group">
                          <div>
                            {message.text &&
                              (message.text === "❤️" ? (
                                <span className="text-5xl">{message.text}</span>
                              ) : (
                                <span className="text-white bg-[#0095f6] py-1 px-3 rounded-full">
                                  {message.text}
                                </span>
                              ))}

                            {(message.img || message.video) && (
                              <div
                                className="w-[150px] sm:w-[198px] ml-2 mr-4 rounded-2xl overflow-hidden"
                                onClick={() => {
                                  setMainMessageVideoOrImg(message);
                                  setIsShowMainImgOrVideo(true);
                                }}
                              >
                                {message.img ? (
                                  <img
                                    src={message.img}
                                    alt=""
                                    onLoad={() => scrollToBottom()}
                                  />
                                ) : (
                                  <video
                                    src={message.video}
                                    onLoad={() => scrollToBottom()}
                                  ></video>
                                )}
                              </div>
                            )}
                          </div>
                          <div className="hidden group-hover:flex items-center justify-center gap-x-1 sm:gap-x-4 gap-y-2 flex-wrap dark:text-neutral-100  opacity-50">
                            <button>
                              <svg className="w-4 h-4">
                                <use href="#more-options"></use>
                              </svg>
                            </button>
                            <button>
                              <svg className="w-4 h-4">
                                <use href="#reply"></use>
                              </svg>
                            </button>
                            <button>
                              <svg className="w-4 h-4">
                                <use href="#emoji"></use>
                              </svg>
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom */}
                <div className="flex items-center justify-center grow px-4">
                  <div className="w-full h-11 flex items-center pr-4 pl-3 dark:text-neutral-100  border border-[#dbdbdb] dark:border-[#363636] rounded-full">
                    <div className="relative">
                      <button
                        onClick={() => setIsShowEmojiBox(!isShowEmojiBox)}
                      >
                        <svg className="w-6 h-6">
                          <use href="#emoji"></use>
                        </svg>
                      </button>
                      {isShowEmojiBox && (
                        <div className="absolute bottom-10 w-[340px] h-[340px] bg-white dark:bg-neutral-800 rounded-md drop-shadow-[0_4px_12px_rgba(0,0,0,.15)]">
                          <EmojiBox
                            textAreaRef={inputMessageRef}
                            captionTextAreaValue={inputMessageValue}
                            setCaptionTextAreaValue={setInputMessageValue}
                            setIsShowEmojiBox={setIsShowEmojiBox}
                          />
                        </div>
                      )}
                    </div>
                    <input
                      ref={inputMessageRef}
                      type="text"
                      placeholder="Message..."
                      className="w-full grow mx-3 bg-transparent dark:text-neutral-100 border-0 outline-none"
                      value={inputMessageValue}
                      onChange={(e) => setInputMessageValue(e.target.value)}
                    />
                    {inputMessageValue ? (
                      <button
                        className="font-[600] text-sm text-[#0095f6]"
                        onClick={() =>
                          sendMessageHandler(inputMessageValue, "", "")
                        }
                      >
                        Send
                      </button>
                    ) : (
                      <div className="flex items-center gap-x-4">
                        <button>
                          <svg className="w-6 h-6">
                            <use href="#voice"></use>
                          </svg>
                        </button>
                        <div>
                          <button onClick={() => inputFileRef.current?.click()}>
                            <svg className="w-6 h-6">
                              <use href="#gallery"></use>
                            </svg>
                          </button>
                          <input
                            ref={inputFileRef}
                            className="hidden"
                            type="file"
                            onChange={handleFileChange}
                            accept="image/*,video/*"
                          />
                        </div>
                        <button
                          onClick={() =>
                            setUserMessages((prevMessages) => ({
                              ...prevMessages,
                              [mainUser.id]: [
                                ...(prevMessages[mainUser.id] || []),
                                {
                                  id: crypto.randomUUID(),
                                  text: "❤️",
                                  img: "",
                                  video: "",
                                },
                              ],
                            }))
                          }
                        >
                          <svg className="w-6 h-6">
                            <use href="#notifications"></use>
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Empty Box */}
              <div className="h-full w-full flex flex-col items-center justify-center">
                <svg className="w-24 h-24 dark:text-neutral-100">
                  <use href="#empty-message-box"></use>
                </svg>
                <span className="text-xl pt-4 dark:text-neutral-100">
                  Your messages
                </span>
                <span className="text-sm text-neutral-500 dark:text-[#a8a8a8] text-center pt-2">
                  Send private photos and messages to a friend or group
                </span>
                <button className="primary-btn mt-4">Send message</button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* overlay */}
      {(isShowShareBox || isShowMoreOptionBox || isShowMainImgOrVideo) && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/60 z-[60]"
          onClick={() => {
            setIsShowShareBox(false);
            setIsShowMoreOptionBox(false);
            setIsShowMainImgOrVideo(false);
          }}
        >
          {/* ReportBox */}
          {isShowMoreOptionBox && (
            <div className="w-[260px] md:w-[400px]">
              <MoreOptionPostBox
                setIsShowMoreOptionBox={setIsShowMoreOptionBox}
              />
            </div>
          )}

          {/* ShareBox */}
          {isShowShareBox && (
            <div className="w-full h-full md:w-[548px] md:h-[65vh] md:rounded-xl overflow-hidden">
              <ShareBox setIsShowShareBox={setIsShowShareBox} />
            </div>
          )}

          {/* ImgOrVideo */}
          <div className="max-h-[80vh] max-w-[90vw] flex items-center justify-center p-10 rounded-md ">
            {mainMessageVideoOrImg.img ? (
              <img src={mainMessageVideoOrImg.img} alt="" />
            ) : (
              <video controls src={mainMessageVideoOrImg.video}></video>
            )}
          </div>
        </div>
      )}

      {/* overlay show comments */}
      {isShowCommentBox && (
        <PostWithCommentBox
          mainUser={mainUser}
          setIsShowShareBox={setIsShowShareBox}
          setIsShowMoreOptionBox={setIsShowMoreOptionBox}
          setIsShowCommentBox={setIsShowCommentBox}
        />
      )}
    </>
  );
}

export default Direct;
