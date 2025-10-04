import React, { createContext, useState } from "react";
import Grandpa from "./Grandpa";

export const Asset2Context = createContext("");
export const MoneyContext = createContext("");
const FamilyTree = () => {
  const asset2 = "💻";
  const asset = "💎";

  const [money, setMoney] = useState(0);
  return (
    <div className="family-tree">
      <h1>Family Tree</h1>
      <h2>Family Balance: { money }</h2>
      <div>
        <MoneyContext value={[money, setMoney]}>
          <Asset2Context.Provider value={asset2}>
            <Grandpa asset={asset}></Grandpa>
          </Asset2Context.Provider>
        </MoneyContext>
      </div>
    </div>
  );
};

export default FamilyTree;
