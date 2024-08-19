import React from "react";
import PartialComponent from "../advancedTypescript/PartialType/PartialComponent";
import RequiredComponent from "../advancedTypescript/RquiredType/RequiredComponent";
import RecordComponent from "../advancedTypescript/Record/RecordComponent";
import PickComponent from "../advancedTypescript/Pick/PickComponent";
import OmitComponent from "../advancedTypescript/Omit/OmitComponent";
import ExcludeComponent from "../advancedTypescript/Exclude/ExcludeComponent";
import ExtractComponent from "../advancedTypescript/Extract/ExtractComponent";
import NonNullableComponent from "../advancedTypescript/NonNullable/NonNullableComponent";
import ReturnComponent from "../advancedTypescript/Return/ReturnComponent";
import InputUsingRefComponent from "../RefHook/InputUsingRefComponent";
import { useNavigate } from "react-router-dom";
import NestedRouteOne from "./NestedRouteOne";
import { Route, Routes } from "react-router-dom";
import NestedRouteTwo from "./NestedRouteTwo";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <h1 id="welcome">Welcome to this tutorial page</h1>
      <InputUsingRefComponent />
      <h1>Advance Typescript </h1>
      <PartialComponent fighterJet={{ name: "Omega" }} />
      <RequiredComponent building={{ name: "Villa", price: 1000 }} />
      <RecordComponent motors={{ first: { model: "Honda", year: 1999 } }} />
      <PickComponent team={{ name: "bayern", formed: 1889 }} />
      <OmitComponent phone={{ model: "samsung", country: "Korea" }} />
      <ExcludeComponent response="data from Server" />
      <ExtractComponent drink="Coffee" />
      <NonNullableComponent song="Aisha" />
      <ReturnComponent paintColor="red" />

      <button onClick={() => navigate("/nestedRouteTwo")}>
        Change nested Route
      </button>

      <Routes>
        <Route path="" element={<NestedRouteOne />} />
        <Route path="/nestedRouteTwo" element={<NestedRouteTwo />} />
      </Routes>
      <button
        onClick={() => {
          navigate("/allProducts");
        }}
      >
        go to All Products
      </button>

      <button
        onClick={() => {
          navigate("/contextComponent");
        }}
      >
        go to Context Component 
      </button>
    </div>
  );
};

export default Home;
