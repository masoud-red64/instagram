import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

function CreateNewPost() {
  const dispatch = useDispatch();
  const createNewPostSelector = useSelector(
    (state: RootState) => state.overlayReducer
  );

  return (
    createNewPostSelector.isShowCreateNewPost && (
      <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 z-[55] bg-red-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse sequi
        asperiores laboriosam quas illo nam omnis accusantium officia accusamus
        est quidem perferendis, eius dolore mollitia facere, sit tempora libero
        beatae?
      </div>
    )
  );
}

export default CreateNewPost;
