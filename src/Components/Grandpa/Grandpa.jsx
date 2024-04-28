import React, { createContext, useState } from "react";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import Unt from "../Unt/Unt";
import "../Grandpa/Grandpa.css";
//46-6 Create A List Of Components To Create Connection
//46-7 Prop Drilling To Pass Data To A Many Level Components
//46-8 How To Use Context API To Avoid Prop Drilling

export const assetContext = createContext("Gold");

export const MoneyContext = createContext(1000);

const Grandpa = () => {
  const asset = "Diamond Ring";

  const [money, setMoney] = useState(1000);

  return (
    <div className="grandpa ">
      <h2>Grandpa</h2>
      <p>Money === {money}</p>
      {/* <section className="flex">
        <Dad asset={asset}></Dad>
        <Uncle></Uncle>
        <Unt></Unt>
      </section> */}

      {/* <assetContext.Provider value="gold">
        <section className="flex">
          <Dad asset={asset}></Dad>
          <Uncle></Uncle>
          <Unt></Unt>
        </section>
      </assetContext.Provider> */}

      {/* <MoneyContext.Provider value={money}> */}
      <MoneyContext.Provider value={[money, setMoney]}>
        <assetContext.Provider value="gold">
          <section className="flex">
            <Dad asset={asset}></Dad>
            <Uncle></Uncle>
            <Unt></Unt>
          </section>
        </assetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

//1.create a context(export const xyz = createContext) & export it
//2.add provider for the context with a value(xyz.Provider value = "...")
//3.useContext(const abc = useContext(xyz)) to access value in context API--->{abc}
//https://react.dev/learn/passing-data-deeply-with-context
//https://reactrouter.com/en/main/start/tutorial

export default Grandpa;
