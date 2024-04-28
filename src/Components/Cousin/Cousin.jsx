import React from "react";
import Special from "../Special/Special";
import Friend from "../Friend/Friend";
// import Special from './../Special/Special';

const Cousin = ({ name }) => {
  return (
    <div>
      <h2>Cousin</h2>
      <p>{name}</p>
      {name == "Tarek" && <Special></Special>}
      {name == "Arafat" && <Friend></Friend>}
    </div>
  );
};

export default Cousin;
