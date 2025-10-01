import React, { useState } from "react";
function UpObjSt() {
  const [car, setCr] = useState({ year: 2024, make: "Ford", model: "Mustang" });
  const hndleyer = (e) => {
    setCr((c) => ({ ...car, year: e.target.value }));
  };
  const hndlemke = (e) => {
    setCr((c) => ({ ...car, make: e.target.value }));
  };
  const hndlemodel = (e) => {
    setCr((c) => ({ ...car, model: e.target.value }));
  };
  return (
    <>
      <div>
        <p>
          Your favourite car is : &nbsp;        
          <b>
            {car.year} {car.make} {car.model}
          </b>
        </p>
        <input type="number" value={car.year} onChange={hndleyer} />
        <input type="text" value={car.make} onChange={hndlemke} />
        <input type="text" value={car.model} onChange={hndlemodel} />
        <br />
        <br />
      </div>
    </>
  );
}
export default UpObjSt;
