import React, { LegacyRef } from "react";
import useRefHook from "./RefHook";

const InputUsingRefComponent = () => {
  const [inputRef, value] = useRefHook();
  console.log("value ===> ", value);
  return (
    <input
      ref={inputRef as LegacyRef<HTMLInputElement>}
      style={{ border: value ? "3px solid red" : "3px solid green" }}
    />
  );
};

export default InputUsingRefComponent;
