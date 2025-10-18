import React, { useContext } from "react";
import { UserContext } from "./CompB";

function CompE() {
  const user = useContext(UserContext);
  return (
    <>
      <div className="box">
        <h1>ComponenetE</h1>
        {/* <h2>{`Bye ${props.user}`}</h2>//using props  */}
        <h2>{`Bye ${user}`}</h2>
      </div>
    </>
  );
}
export default CompE;
