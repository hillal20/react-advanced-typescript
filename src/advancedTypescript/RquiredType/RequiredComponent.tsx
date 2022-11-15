import { House } from "./RequiredTypes";

const RequiredComponent = ({ building }: { building: Required<House> }) => (
  <h3>
    {" "}
    Required Component : {building.name} ** price {building.price}{" "}
  </h3>
);

export default RequiredComponent;
