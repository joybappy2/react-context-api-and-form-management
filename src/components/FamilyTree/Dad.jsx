import React from "react";
import Myself from "./Myself";
import Brother from "./Brother";
import Sister from "./Sister";

const Dad = ({asset}) => {
  return (
    <div>
      <h1>Dad</h1>
      <div className="flex gap-4">
        <Myself asset={asset}></Myself>
        <Brother></Brother>
        <Sister></Sister>
      </div>
    </div>
  );
};

export default Dad;
