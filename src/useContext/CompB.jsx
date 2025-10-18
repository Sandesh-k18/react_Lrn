import React, { useState, createContext } from "react";
import "./comp.css";
import CompC from "./CompC";
export const UserContext = createContext();
function CompB() {
  const [user, setUser] = useState("Sandy");
  return (
    <>
      <div className="box">
        <h1>ComponenetB</h1>
        <h2>{`Hello ${user}`}</h2>
        {/* <CompC user={user} />//using props //props drilling */}
        <UserContext.Provider value={user}>
          <CompC />
        </UserContext.Provider>
      </div>
    </>
  );
}
export default CompB;
