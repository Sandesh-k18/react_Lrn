import React, { useState } from "react";
import "./upRryStte.css";
function UpRrySt() {
  const [foods, setFoods] = useState(["Apple", "Mango", "Banana"]);

  function insertFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFoods((f) => [...f, newFood]);
  }
  function deleteFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }
  return (
    <>
      <div>
        <h1>Foods</h1>
        <ul>
          {foods.map((food, index) => (
            <li itemID="food-li" keys={index} onClick={() => deleteFood(index)}>
              {food}
            </li>
          ))}
        </ul>
        <input
          className="food-input-btn"
          id="foodInput"
          type="text"
          placeholder="Add foods"
        />
        <button className="food-submit-btn" onClick={insertFood}>
          Submit
        </button>
      </div>
    </>
  );
}
export default UpRrySt;
