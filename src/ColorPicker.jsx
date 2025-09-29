import React, { useState } from "react";
import "./ColorPicker.css";

function ColorPicker() {
  const [color, setColor] = useState("#1aff30");

  const hndleSetColor = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
      <div className="color-picker">
        <h1>
          <b>COLOR PICKER</b>
        </h1>
        <h4>PICK A COLOR:</h4>
        <input
          className="color-box"
          type="color"
          value={color}
          onChange={hndleSetColor}
        />
      </div>

      <p itemID="p-selected-color" style={{ backgroundColor: color }}>
        Selected color: {color}
      </p>
    </>
  );
}
export default ColorPicker;
