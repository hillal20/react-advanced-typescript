import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const AllProductsRoute = (props: { title: string }) => {
  const { title } = props;
  const products = useSelector(
    (state: { appReducer: { products: [{ title: string }] } }) => {
      console.log(" state ==> ", state.appReducer.products);
      return state.appReducer.products;
    }
  );

  const navigate = useNavigate();
  return (
    <div>
      <div>
        {" "}
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
          {" "}
          go to All Products{" "}
        </button>
      </div>
    </div>
  );
};

export default AllProductsRoute;