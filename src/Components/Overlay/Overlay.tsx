import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { hideCreateNewPost } from "../../store/createNewPostSlice";

const Overlay = () => {
  const dispatch = useDispatch();
  const createNewPostSelector = useSelector(
    (state: RootState) => state.overlayReducer
  );

  return (
    createNewPostSelector.isShowCreateNewPost && (
      <div
        className="absolute inset-0 bg-black/60 z-50"
        onClick={() => dispatch(hideCreateNewPost())}
      >
        <div className="relative h-full">
          <button className="p-2 absolute right-2 top-2">
            <svg className="w-[18px] h-[18px] text-white">
              <use href="#close"></use>
            </svg>
          </button>
        </div>
      </div>
    )
  );
};

export default Overlay;
