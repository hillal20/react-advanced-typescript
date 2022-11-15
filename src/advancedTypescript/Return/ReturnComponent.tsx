import React from "react";
import { PaintProperties } from "./ReturnTypes";

const ReturnComponent = ({
  paintColor,
}: {
  paintColor: NonNullable<PaintProperties["color"]>;
}) => {
const myFn = ()=> 'Hello World';
type  returnType = ReturnType<typeof myFn>
const simple: returnType = 'Hey world'
  return <h3>Return Component : {paintColor} ** { simple} </h3>;
};

export default ReturnComponent;
