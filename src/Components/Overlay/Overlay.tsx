import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  hideCreateNewPost,
  setStepOfCreateNewPost,
} from "../../store/createNewPostSlice";

const Overlay = () => {
  const dispatch = useDispatch();
  const createNewPostSelector = useSelector(
    (state: RootState) => state.createNewPostReducer
  );

  return (
    createNewPostSelector.isShowCreateNewPost && (
      <div
        className="fixed inset-0 bg-black/60 z-50"
        onClick={() => {
          dispatch(hideCreateNewPost());
          dispatch(setStepOfCreateNewPost("first"));
        }}
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
