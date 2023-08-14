import React, { useState } from "react";

type SwitchInputPropsType = {
  switchClassName: string;
  sliderClassName: string;
  setIsSwitchInputChecked?: (isSwitchInputChecked: boolean) => void;
  isSwitchInputChecked?: boolean;
};

function SwitchInput({
  switchClassName,
  sliderClassName,
  setIsSwitchInputChecked,
  isSwitchInputChecked,
}: SwitchInputPropsType) {
  return (
    <label
      className={`switch relative ${switchClassName} inline-block shrink-0`}
    >
      <input
        type="checkbox"
        className="switch-input opacity-0"
        onChange={(e) =>
          setIsSwitchInputChecked && setIsSwitchInputChecked(e.target.checked)
        }
        checked={isSwitchInputChecked}
      />
      <span
        className={`absolute inset-0 rounded-[34px] transition-all duration-[.4s] cursor-pointer before:absolute ${sliderClassName} before:rounded-full before:transition-all before:duration-[.4s]`}
      ></span>
    </label>
  );
}

export default SwitchInput;
