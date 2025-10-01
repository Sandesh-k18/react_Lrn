import "../src/useState/Hooks.css";
import React, { useState } from "react";
function UpdterFun() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(c => c + 1);
    setCount(count => count + 1);
    setCount((c) => c + 1);
  };
  const decrement = () => {
    setCount(c => c - 1);
    setCount(c => c - 1);
    setCount(c => c - 1);
  };
  const reset = () => {
    setCount(c => c = 0 );
  };
  return (
    <>
      <div itemID="counter">
        <h1 itemID="counter">{count}</h1>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increment</button>
      </div>
    </>
  );
}
export default UpdterFun;