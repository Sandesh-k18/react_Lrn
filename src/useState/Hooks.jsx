import React, { useState } from "react";

import "./Hooks.css";

function Hooks() {
  const [name, setName] = useState();
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);
  const [counter, setCounter] = useState(0);
  const nameHandle = () => {
    // name = "Sandy 🔥"  // won't work
    setName("Sandy 🔥");
  };
  const ageHandle = () => {
    setAge(age + 1);
  };
  const toggleHandle = () => {
    setIsEmployed(!isEmployed);
  };
  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    setCounter(counter - 1);
  };
  const resetCounter = () => {
    setCounter(0);
  };
  return (
    <>
      <div itemID="counter">
        {/* <p>Name: {name} </p>
        <button onClick={nameHandle}>Set Name</button>

        <p>Age: {age} </p>
        <button onClick={ageHandle}>Increment Age</button>

        <p>isEmployed: {isEmployed ? "Yes" : "No"} </p>
        <button onClick={toggleHandle}>Set Status</button> */}

        <h1 itemID="counter">{counter}</h1>
        <button itemID="counter" onClick={decrementCounter}>
          <h2>Decrement</h2>
        </button>
        <button onClick={resetCounter}>
          <h2>Reset</h2>
        </button>
        <button onClick={incrementCounter}>
          <h2>Increment</h2>
        </button>
      </div>
    </>
  );
}

export default Hooks;
