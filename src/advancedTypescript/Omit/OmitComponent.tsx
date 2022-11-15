import React from "react";
import { Phones } from "./OmitTypes";

const OmitComponent = ({
  phone,
}: {
  phone: Omit<Phones, "warrantee" | "year">;
}) => {
  return (
    <h3>
      Omit Component : {phone.model} ** country {phone.country}
    </h3>
  );
};

export default OmitComponent;
