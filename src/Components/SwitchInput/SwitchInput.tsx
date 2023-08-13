import React, { useState } from "react";

function SwitchInput() {

  return (
    <label className="switch shrink-0">
      <input type="checkbox" />
      <span className="slider round"></span>
    </label>
  );
}

export default SwitchInput;
