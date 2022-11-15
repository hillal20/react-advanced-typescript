import React from "react";
import { Response } from "./ExcludeTypes";

const ExcludeComponent = ({
  response,
}: {
  response: Exclude<Response, undefined>;
}) => {
  return <h3>Exclude Component : {response}</h3>;
};

export default ExcludeComponent;
