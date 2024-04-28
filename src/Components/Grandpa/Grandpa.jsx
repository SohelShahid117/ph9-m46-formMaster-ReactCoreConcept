import React, { createContext } from "react";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import Unt from "../Unt/Unt";
import "../Grandpa/Grandpa.css";
//46-6 Create A List Of Components To Create Connection
//46-7 Prop Drilling To Pass Data To A Many Level Components

const assetContext = createContext("Gold");

const Grandpa = () => {
  const asset = "Diamond Ring";
  return (
    <div className="grandpa ">
      <h2>Grandpa</h2>
      {/* <section className="flex">
        <Dad asset={asset}></Dad>
        <Uncle></Uncle>
        <Unt></Unt>
      </section> */}
      <assetContext.Provider value="gold">
        <section className="flex">
          <Dad asset={asset}></Dad>
          <Uncle></Uncle>
          <Unt></Unt>
        </section>
      </assetContext.Provider>
    </div>
  );
};

//1.create a context & export it
//2.add provider for the context with a value

export default Grandpa;
