import React, { useState, useEffect } from "react";
import "./useEffect.css";

function UseEffect() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    document.title = `Count ${count} | ${color} `;
  }, [count, color]);

  useEffect(() => {
    window.addEventListener("resize", handleSize);
    console.log("EVENT LISTENER ADDED");

    return () => {
      window.removeEventListener("resize", handleSize);
      console.log("EVENT LISTENER REMOVED");
    };
  }, [width, height]);

  useEffect(() => {
    document.title = `Size:${width} x ${width}`;
  }, [width, height]);

  function handleSize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  function increment() {
    setCount((c) => c + 1);
  }
  function decrement() {
    setCount((c) => c - 1);
  }
  function colorSwitch() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }
  return (
    <>
      <div>
        <div>
          <h2 style={{ color: color }}>Count : {count}</h2>
        </div>
        <button className="use-effect-btn" onClick={increment}>
          Increment
        </button>
        <button className="use-effect-btn" onClick={decrement}>
          Decrement
        </button>
        <button className="use-effect-btn" onClick={colorSwitch}>
          Change Color
        </button>
      </div>
      <div>
        <p>Window Width: {width}</p>
        <p>Window Height :{height}</p>
      </div>
    </>
  );
}
export default UseEffect;
