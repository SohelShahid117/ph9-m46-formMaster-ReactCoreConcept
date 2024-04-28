import React, { useContext } from "react";
import Cousin from "./../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Unt = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>Unt</h2>
      <section className="flex">
        <Cousin name={"Jahangir"}></Cousin>
        <Cousin name={"Arafat"}></Cousin>
      </section>
      <p>Money : {money}</p>
      <button onClick={() => setMoney(money + 1000)}>1000 Tk</button>
    </div>
  );
};

export default Unt;
