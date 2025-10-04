import React, { useContext } from "react";
import Special from "./Special";
import { MoneyContext } from "./FamilyTree";

const Myself = ({asset}) => {
  const [money,setMoney] = useContext(MoneyContext)
  return (
    <div>
      <h1>MySelf</h1>
      <button onClick={()=>setMoney(money+500)}>add 500</button>
      <Special asset={asset}></Special>
    </div>
  );
};

export default Myself;
