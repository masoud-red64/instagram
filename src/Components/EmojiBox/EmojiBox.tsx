import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

type EmojiBoxTypes = {
  textAreaRef: any;
  captionTextAreaValue: string;
  setCaptionTextAreaValue: (param: string) => void;
  setIsShowEmojiBox: (param: boolean) => void;
};

export default function EmojiBox({
  textAreaRef,
  captionTextAreaValue,
  setCaptionTextAreaValue,
  setIsShowEmojiBox,
}: EmojiBoxTypes) {
  const createNewPostSelector = useSelector(
    (state: RootState) => state.createNewPostReducer
  );

  const handleEmojiClick = (emoji: string) => {
    const cursorPosition = textAreaRef.current?.selectionStart;
    const newValue =
      captionTextAreaValue.substring(0, cursorPosition) +
      emoji +
      captionTextAreaValue.substring(cursorPosition as number);
    setCaptionTextAreaValue(newValue);
  };

  return (
    <>
      <div className="p-3 emoji-box bg-white dark:bg-neutral-800">
        <span className="dark:text-neutral-400">Most Popular</span>
        <div className="flex gap-2 flex-wrap pt-2">
          {createNewPostSelector.emojis.popular.map((emoji) => (
            <div
              onClick={() => {
                handleEmojiClick(emoji.emoji);
                setIsShowEmojiBox(false);
              }}
              className="cursor-pointer"
            >
              {emoji.emoji}
            </div>
          ))}
        </div>
      </div>
      <div className="p-3 bg-white dark:bg-neutral-800">
        <span className="dark:text-neutral-400">Activities</span>
        <div className="flex flex-wrap gap-2 pt-2">
          {createNewPostSelector.emojis.activities.map((emoji) => (
            <div
              onClick={() => {
                handleEmojiClick(emoji.emoji);
                setIsShowEmojiBox(false);
              }}
              className="emoji cursor-pointer"
            >
              {emoji.emoji}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
