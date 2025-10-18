import React, { useState, useEffect, useRef } from "react";
import "../useEffect/useEffect.css";
function UseRef() {
  //   let [number, setNumber] = useState(0);
  //   useEffect(() => {
  //     console.log("Component Rendered"); // just to prove that useState makes re-rendering
  //   });
  //   function hndleClick() {
  //     setNumber((n) => n + 1);
  //   }

  const ref = useRef(0); // useRef returns a ref object with a single current property initially set to the initial value you provided

  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const inputRef4 = useRef();
  useEffect(() => {
    console.log("Component Rendered"); // just to prove that useRef doesn't make re-rendering
  });
  function hndleClick2() {
    // ref.current = ref.current + 1;
    // console.log(ref.current);
    inputRef2.current.focus();
    inputRef2.current.style.backgroundColor = "yellow";
    inputRef3.current.style.backgroundColor = "";
    inputRef4.current.style.backgroundColor = "";
  }
  function hndleClick3() {
    inputRef3.current.focus();
    inputRef3.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "";
    inputRef4.current.style.backgroundColor = "";
  }
  function hndleClick4() {
    inputRef4.current.focus();
    inputRef4.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }
  console.log(ref);

  return (
    <>
      <div>
        <button className="use-effect-btn" onClick={hndleClick2}>
          Click me
        </button>
        <input ref={inputRef2} />
        <button className="use-effect-btn" onClick={hndleClick3}>
          Click me
        </button>
        <input ref={inputRef3} />
        <button className="use-effect-btn" onClick={hndleClick4}>
          Click me
        </button>
        <input ref={inputRef4} />
      </div>
    </>
  );
}
export default UseRef;
