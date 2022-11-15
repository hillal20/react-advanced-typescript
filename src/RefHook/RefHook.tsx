import React, { useEffect, useState, useRef } from "react";

const useRefHook = () => {
  const [value, setValue] = useState<boolean>(false);
  const inputRef = useRef(null);

  const hoverHandler = () => {
    setValue(true);
  };
  const blurHandler = () => setValue(false);

  useEffect(() => {
    const node = inputRef?.current as unknown as HTMLElement;
    if (node) {
      node.addEventListener("mouseover", hoverHandler);
      node.addEventListener("mouseout", blurHandler);
    }

    return () => {
      node.removeEventListener("mouseover", () => hoverHandler);
      node.removeEventListener("mouseout", () => blurHandler);
    };
  }, []);
  return [inputRef, value];
};

export default useRefHook;
