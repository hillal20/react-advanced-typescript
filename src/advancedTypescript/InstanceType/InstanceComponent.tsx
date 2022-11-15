import React from "react";
import { Songs } from "./InstanceTypes";

const InstanceComponent = ({ song }: { song: Songs["name"] }) => {
  return <h3>Instance Component : {song} </h3>;
};

export default InstanceComponent;
