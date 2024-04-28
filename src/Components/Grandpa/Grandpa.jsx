import React from "react";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import Unt from "../Unt/Unt";
import "../Grandpa/Grandpa.css";
//46-6 Create A List Of Components To Create Connection
//2 min

const Grandpa = () => {
  return (
    <div className="grandpa  flex">
      <Dad></Dad>
      <Uncle></Uncle>
      <Unt></Unt>
    </div>
  );
};

export default Grandpa;
