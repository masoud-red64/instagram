import React from "react";
import { slideShowSliceTypes } from "../../store/types/slideShowSlice.types";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  hideNotificationSlideShow,
  hideSearchSlideShow,
} from "../../store/slideShowSlice";
function TransparentOverlay() {
  const SlideShowSelector = useSelector((state: slideShowSliceTypes) => state);
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
