import { useDispatch } from "react-redux";
import {
  hideNotificationSlideShow,
  hideSearchSlideShow,
} from "../../store/slideShowSlice";
import { hideSearchBox } from "../../store/searchBoxSlice";
import { setIsOpenModal } from "../../store/createNewPostSlice";
function TransparentOverlay({ className }: { className: string }) {
  const dispatch = useDispatch();

  return (
    <div
      className={`absolute inset-0 z-10 bg-transparent ${className}`}
      onClick={() => {
        dispatch(hideSearchSlideShow());
        dispatch(hideNotificationSlideShow());
        dispatch(hideSearchBox());
        dispatch(setIsOpenModal(true));
      }}
    ></div>
  );
}

export default TransparentOverlay;
