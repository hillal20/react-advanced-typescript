import React from "react";
import { Teams } from "./PickTypes";

const PickComponent = ({ team }: { team: Pick<Teams, "name" | "formed"> }) => {
  return (
    <h3>
      Pick Component : {team.name} ** formed {team.formed}{" "}
    </h3>
  );
};

export default PickComponent;
