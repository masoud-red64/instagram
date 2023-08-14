import React, { useState } from "react";

function SwitchInput({
  switchClassName,
  sliderClassName,
}: {
  switchClassName: string;
  sliderClassName: string;
}) {
  return (
    <label
      className={`switch relative ${switchClassName} inline-block shrink-0`}
    >
      <input type="checkbox" className="switch-input opacity-0" />
      <span className={`absolute inset-0 rounded-[34px] transition-all duration-[.4s] cursor-pointer before:absolute ${sliderClassName} before:rounded-full before:transition-all before:duration-[.4s]`}></span>
    </label>
  );
}

export default SwitchInput;
