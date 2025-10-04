import React from "react";
import Special from "./Special";

const Myself = ({asset}) => {
  return (
    <div>
      <h1>MySelf</h1>
      <Special asset={asset}></Special>
    </div>
  );
};

export default Myself;
