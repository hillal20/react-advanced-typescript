import React from "react";
import { AvailableDrinks, JohnLikeToDrink } from "./ExtractTypes";

const ExtractComponent = ({
  drink,
}: {
  drink: Extract<AvailableDrinks, JohnLikeToDrink>;
}) => {
  return <h3>Extract Component : {drink}</h3>;
};

export default ExtractComponent;
