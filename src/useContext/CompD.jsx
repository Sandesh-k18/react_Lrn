import React, { useContext } from "react";
import { UserContext } from "./CompB";

import CompE from "./CompE";

function CompD() {
  const user = useContext(UserContext);
  return (
    <>
      <div className="box">
        <h1>ComponenetD</h1>
        {/* <CompE user={props.user}/>//using props */}
        <h2>{`Hello again ${user}`}</h2>
        <CompE />
      </div>
    </>
  );
}
export default CompD;
