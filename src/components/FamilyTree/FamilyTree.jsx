import React, { createContext } from "react";
import Grandpa from "./Grandpa";

export const Asset2Context = createContext("");
const FamilyTree = () => {
  const asset2 = "💻";

  const asset = "💎";
  return (
    <div className="family-tree">
      <h1>Family Tree</h1>
      <div>
        <Asset2Context.Provider value={asset2}>
          <Grandpa asset={asset}></Grandpa>
        </Asset2Context.Provider>
      </div>
    </div>
  );
};

export default FamilyTree;
