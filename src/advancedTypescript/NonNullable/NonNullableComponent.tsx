import React from "react";
import { Songs } from "./NonNullableTypes";

const NonNullableComponent = ({ song }: { song: NonNullable<Songs> }) => {
  return <h3>NonNullable Component : {song}</h3>;
};

export default NonNullableComponent;
