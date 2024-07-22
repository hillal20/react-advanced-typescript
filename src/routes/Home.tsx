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
import useSWR from "swr";
import axios from "axios";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

const dataUrl = "https://dummyjson.com/products";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, error } = useSWR(dataUrl, (url: string) =>
    axios(url).then((r) => r.data)
  );

  const dispatchProducts = useCallback(() => {
    const productsAction = {
      type: "PRODUCTS",
      payload: data ?? { products: [] },
    };
    if (error)
      return dispatch({ type: "ERROR_FETCHING_PRODUCTS", payload: [] });
    dispatch(productsAction);
  }, [error, dispatch, data]);

  useEffect(() => {
    dispatchProducts();
  }, [dispatchProducts]);

  console.log("data from useSW ==> ", data);
  return (
    <div className="App">
      {error ? (
        JSON.stringify(error)
      ) : (
        <>
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
          <button
            onClick={() => {
              navigate("/allProducts");
            }}
          >
            {" "}
            go to All Products{" "}
          </button>
        </>
      )}
    </div>
  );
};

export default Home