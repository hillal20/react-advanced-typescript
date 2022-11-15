import React from "react";
import { Starship } from "./PartialTypes";
const PartialComponent = ({
  fighterJet,
}: {
  fighterJet: Partial<Starship>;
}) => {
  return <h3> Partial Component : {fighterJet.name}</h3>;
};
export default PartialComponent;
