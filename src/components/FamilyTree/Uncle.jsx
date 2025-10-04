import React from "react";
import Cousin from "../Cousin";

const Uncle = ({asset}) => {
  return (
    <div>
      <h1>Uncle</h1>
      <div className="flex gap-4" >
        <Cousin asset={asset} name="Shadhu"></Cousin>
        <Cousin name="Jadhu"></Cousin>
      </div>
    </div>
  );
};

export default Uncle;
