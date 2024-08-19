import { useNavigate } from "react-router-dom";

const NestedRouteTwo = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1> *** Nested Route Two *** </h1>
      <button onClick={() => navigate("/")}>
        go to nested route one
      </button>
    </div>
  );
};

export default NestedRouteTwo;
