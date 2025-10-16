import React, { useState } from "react";
import "./UpRryoObjs.css";
function UpRryoObjs() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };
    setCars((c) => [...c, newCar]);
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }
  function handleRemoveCar(index) {
    setCars((c) => c.filter((_, i) => i !== index));
  }
  function handleYearChange(e) {
    setCarYear(e.target.value);
  }
  function handleMakeChange(e) {
    setCarMake(e.target.value);
  }
  function handleModelChange(e) {
    setCarModel(e.target.value);
  }

  return (
    <>
      <div>
        <h2>List of Car Objects</h2>
        <h3>
          Selected car/s : {carYear} {carMake} {carModel}{" "}
        </h3>
        <ul>
          {cars.map((car, index) => (
            <li
              itemID="cars-li"
              key={index}
              onClick={() => handleRemoveCar(index)}
            >
              {car.year} {car.make} {car.model}
            </li>
          ))}
        </ul>
        <input
          className="input-btn"
          type="number"
          value={carYear}
          onChange={handleYearChange}
        />{" "}
        <br />
        <input
          className="input-btn"
          type="text"
          value={carMake}
          onChange={handleMakeChange}
          placeholder="Enter car make"
        />{" "}
        <br />
        <input
          className="input-btn"
          type="text"
          value={carModel}
          onChange={handleModelChange}
          placeholder="Enter car model"
        />{" "}
        <br />
        <button className="add-car-btn" onClick={handleAddCar}>
          Add Car
        </button>
      </div>
    </>
  );
}
export default UpRryoObjs;
