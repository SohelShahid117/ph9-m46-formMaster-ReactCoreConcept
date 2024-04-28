import React, { useContext } from "react";
import { assetContext } from "../Grandpa/Grandpa";

const Friend = () => {
  const gifttt = useContext(assetContext);
  return (
    <div>
      <h2>Friend</h2>
      <p>has:{gifttt}</p>
    </div>
  );
};

export default Friend;
