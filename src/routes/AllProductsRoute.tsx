import React, { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getProducts } from "../actions/productsActions";
import useProductHook from "../actions/productsHook";

const AllProductsRoute = (props: { title: string }) => {
  const error = useSelector(
    (state: { appReducer: { error: string } }) => state?.appReducer?.error
  );
  const productsResponse = useProductHook();
  const dispatch = useDispatch();
  const dispatchProducts = useCallback(() => {
    dispatch(getProducts(productsResponse));
  }, [dispatch]);

  useEffect(() => {
    dispatchProducts();
  }, [dispatchProducts]);

  const { title } = props;
  const products = useSelector(
    (state: { appReducer: { products: [{ title: string }] } }) => {
      return state.appReducer.products;
    }
  );

  const navigate = useNavigate();
  return (
    <div>
      {error ? (
        JSON.stringify(error)
      ) : (
        <>
          {title}
          <p> all products route</p>
          {products.map((p, i) => (
            <div key={`${p}-${i}`}>{p as unknown as React.ReactNode}</div>
          ))}
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            go to Home
          </button>
        </>
      )}
    </div>
  );
};

export default AllProductsRoute;
