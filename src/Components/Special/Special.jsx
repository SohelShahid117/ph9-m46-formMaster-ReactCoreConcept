import React, { useContext } from "react";
import { assetContext } from "./../Grandpa/Grandpa";

const Special = ({ asset }) => {
  const gift = useContext(assetContext);
  return (
    <div>
      <h2>Special</h2>
      <p>{asset}</p>
      <p>has:{gift}:using Context</p>
    </div>
  );
};

export default Special;
