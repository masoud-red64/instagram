import { useState, useEffect } from "react";
import { userListTypes, usersList } from "../../Data/users";
import Story from "../Story/Story";

type sendStoryToUsersTypes = {
  id: number;
  name: string;
};

export default function ShareBox({
  setIsShowShareBox,
}: {
  setIsShowShareBox: (param: boolean) => void;
}) {
  const [isCheckedInputStatus, setIsCheckedInputStatus] = useState<{
    [key: number]: boolean;
  }>({});
  const [sendStoryToUsers, setSendStoryToUsers] = useState<
    sendStoryToUsersTypes[]
  >([]);
  const [shareInputValue, setShareInputValue] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<userListTypes[]>([]);

  useEffect(() => {
    filteredUsersList();
  }, [shareInputValue]);

  const removeSendStoryToUser = (userID: number) => {
    setSendStoryToUsers(sendStoryToUsers.filter((user) => user.id !== userID));
  };

  const handleSetAllCheckedInputFalse = () => {
    const newStatus: { [index: number]: boolean } = {};
    for (const key in isCheckedInputStatus) {
      newStatus[key] = false;
    }
    setIsCheckedInputStatus(newStatus);
  };

  const filteredUsersList = () => {
    let filtered = usersList.filter((user) =>
      (user.name + user.username)
        .toLowerCase()
        .includes(shareInputValue.toLowerCase())
    );

    setFilteredUsers(filtered);
  };
  return (
    <div
      className="w-full h-full flex flex-col pb-2 bg-white dark:bg-neutral-800"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Top */}
      <div className="flex items-center justify-between dark:text-neutral-100 py-2 border-b border-[#dbdbdb] dark:border-[#363636]">
        <h4 className="font-[700] grow text-center">Share</h4>
        <button
          className="pr-4"
          onClick={() => {
            setIsShowShareBox(false);
            setSendStoryToUsers([]);
            handleSetAllCheckedInputFalse();
          }}
        >
          <svg className="w-[18px] h-[18px]">
            <use href="#close"></use>
          </svg>
        </button>
      </div>

      {/* Center */}
      <div className="h-[370px] grow flex flex-col">
        <div className="flex items-center flex-wrap gap-4 px-4 pt-1 pb-2 border-b border-[#dbdbdb] dark:border-[#363636]">
          <div className="flex gap-x-1">
            <span className="dark:text-neutral-100 font-[600]">To:</span>
            <div className="flex items-center gap-2 flex-wrap">
              {sendStoryToUsers.map((user) => (
                <div className="flex items-center h-[26px] gap-x-2 bg-[#e0f1ff] text-sm/[18px] font-[600] text-[#0095f6] px-3 rounded-full">
                  <span>{user.name}</span>
                  <button
                    onClick={() => {
                      removeSendStoryToUser(user.id);
                      setIsCheckedInputStatus((prevStatus) => ({
                        ...prevStatus,
                        [user.id]: false,
                      }));
                    }}
                  >
                    <svg className="w-3 h-3">
                      <use href="#close"></use>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="grow text-sm dark:text-neutral-100 bg-transparent outline-none border-0 dark:caret-neutral-100"
            value={shareInputValue}
            onChange={(e) => setShareInputValue(e.target.value)}
          />
        </div>
        <div className="grow overflow-y-scroll scrollbar">
          <h4 className="font-[600] text-sm dark:text-neutral-100 px-4 py-2">
            Suggested
          </h4>
          <div>
            {filteredUsers.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between px-4 py-2"
              >
                <div className="flex items-center gap-x-3">
                  <div className="w-11 h-11">
                    <Story img={user.img} hasStory={false} />
                  </div>
                  <div className="flex flex-col text-sm">
                    <span className="dark:text-neutral-100">{user.name}</span>
                    <span className="text-neutral-500 dark:text-[#a8a8a8]">
                      {user.username}
                    </span>
                  </div>
                </div>
                <div className="w-[22.5px] h-[22.5px]">
                  {isCheckedInputStatus[user.id] ? (
                    <button
                      onClick={() => {
                        setIsCheckedInputStatus((prevStatus) => ({
                          ...prevStatus,
                          [user.id]: false,
                        }));

                        removeSendStoryToUser(user.id);
                      }}
                    >
                      <svg className="w-[22.5px] h-[22.5px]">
                        <use href="#fill-checkbox"></use>
                      </svg>
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setIsCheckedInputStatus((prevStatus) => ({
                          ...prevStatus,
                          [user.id]: true,
                        }));

                        setSendStoryToUsers((prevUsers) => [
                          ...prevUsers,
                          { id: user.id, name: user.name },
                        ]);
                      }}
                    >
                      <svg className="w-[22.5px] h-[22.5px] text-black dark:text-neutral-100">
                        <use href="#empty-checkbox"></use>
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-neutral-100 dark:border-[#363636]">
          {sendStoryToUsers.length !== 0 && (
            <input
              type="text"
              className="h-[50px] text-sm dark:text-neutral-100 bg-transparent bottom-0 outline-none pl-5 py-2 pr-3"
              placeholder="Write a message..."
            />
          )}
        </div>
      </div>

      {/* Bottom */}

      <div className="px-4 pt-2">
        <button
          className={`w-full primary-btn ${
            sendStoryToUsers.length !== 0 ? "" : "opacity-30"
          }`}
          disabled={sendStoryToUsers.length === 0}
        >
          {sendStoryToUsers.length > 1 ? "Send separately" : "Send"}
        </button>
      </div>
    </div>
  );
}
