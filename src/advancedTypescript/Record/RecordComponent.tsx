import React from "react";
import { Vehicle } from "./RecordTypes";

// the record is the way we pass map or object in typescript
const RecordComponent = ({ motors }: { motors: Record<string, Vehicle> }) => {
  return (
    <h3>
      {" "}
      Record Component : model {motors.first.model} ** year {motors.first.year}
    </h3>
  );
};
export default RecordComponent;
