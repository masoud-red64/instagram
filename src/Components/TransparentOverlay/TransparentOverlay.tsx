import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  hideNotificationSlideShow,
  hideSearchSlideShow,
} from "../../store/slideShowSlice";
import { RootState } from "../../store/store";
function TransparentOverlay() {
  const SlideShowSelector = useSelector(
    (state: RootState) => state.slideShowReducer
  );
  const dispatch = useDispatch();

  return (
    <div
      className={`${
        SlideShowSelector.isShowNotif || SlideShowSelector.isShowSearch
          ? "block"
          : "hidden"
      } absolute inset-0 bg-transparent`}
      onClick={() => {
        dispatch(hideSearchSlideShow());
        dispatch(hideNotificationSlideShow());
      }}
    ></div>
  );
}

export default TransparentOverlay;
