import Story from "../Story/Story";

export default function Comment({
  id,
  isLikedComments,
  setIsLikedComments,
}: {
  id: number;
  isLikedComments: { [key: number]: boolean };
  setIsLikedComments: (param: any) => void;
}) {
  return (
    <div className="flex items-center justify-between pt-3">
      <div className="flex items-center gap-x-3">
        <div className="w-9 h-9">
          <Story img="user4.jpg" hasStory hasNewStory />
        </div>
        <div>
          <div className="flex items-center gap-x-1 text-sm dark:text-neutral-100">
            <a
              href="#"
              className="text-[#1a1a1a] dark:text-neutral-100 font-[600]"
            >
              mohaddese_younesi
            </a>
            <span>مرسی👏👏</span>
          </div>
          <div className="text-xs text-neutral-500 dark:text-[#a8a8a8] flex items-center gap-x-3 mt-1">
            <span>30m</span>
            <span className="font-[600]">Reply</span>
          </div>
        </div>
      </div>
      <button
        className="text-neutral-500 dark:text-[#a8a8a8]"
        onClick={() =>
          setIsLikedComments((prevStatus: any) => ({
            ...prevStatus,
            [id]: !prevStatus[id],
          }))
        }
      >
        {isLikedComments[id] ? (
          <svg className="w-3 h-3">
            <use href="#fill-heart"></use>
          </svg>
        ) : (
          <svg className="w-3 h-3">
            <use href="#notifications"></use>
          </svg>
        )}
      </button>
    </div>
  );
}
