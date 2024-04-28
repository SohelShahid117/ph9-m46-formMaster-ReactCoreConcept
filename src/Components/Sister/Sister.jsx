import React, { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";

const Sister = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>Sister</h2>
      <p>Total money : {money}</p>
    </div>
  );
};

export default Sister;
