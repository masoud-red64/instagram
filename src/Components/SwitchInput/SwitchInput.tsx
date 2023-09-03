import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { toggleDarkMode } from "../../store/darkModeSlice";

type SwitchInputPropsType = {
  switchClassName: string;
  sliderClassName: string;
};

function SwitchInput({
  switchClassName,
  sliderClassName,
}: SwitchInputPropsType) {
  const dispatch = useDispatch();

  const darkModeSelector = useSelector(
    (state: RootState) => state.darkModeReducer
  );

  return (
    <label
      className={`switch relative ${switchClassName} inline-block shrink-0`}
    >
      <input
        type="checkbox"
        className="switch-input opacity-0"
        onChange={(e) => dispatch(toggleDarkMode(e.target.checked))}
        checked={darkModeSelector.isDarkMode}
      />
      <span
        className={`absolute inset-0 rounded-[34px] transition-all duration-[.4s] cursor-pointer before:absolute ${sliderClassName} before:rounded-full before:transition-all before:duration-[.4s]`}
      ></span>
    </label>
  );
}

export default SwitchInput;
