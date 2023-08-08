import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  hideNotificationSlideShow,
  hideSearchSlideShow,
} from "../../store/slideShowSlice";
import { RootState } from "../../store/store";
import { hideSearchBox } from "../../store/searchBoxSlice";
function TransparentOverlay() {
  const dispatch = useDispatch();

  return (
    <div
      className="absolute inset-0 bg-transparent"
      onClick={() => {
        dispatch(hideSearchSlideShow());
        dispatch(hideNotificationSlideShow());
        dispatch(hideSearchBox());
      }}
    ></div>
  );
}

export default TransparentOverlay;
