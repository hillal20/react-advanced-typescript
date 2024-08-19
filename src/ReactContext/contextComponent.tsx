import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { context } from "./context";
import useUsersHook from "../actions/usersHook";

const ContextComponent = () => {
  const navigate = useNavigate();
  const { state , dispatch} = useContext(context);
  useUsersHook(dispatch);

  useEffect(()=> {
 
  }, [dispatch])

  

  console.log("state ===> ", state);
  return (
    <>
      <h2>Context Component</h2>
      <button onClick={() => navigate("/")}>Go to Home</button>
      <p>{JSON.stringify(state)}</p>
    </>
  );
};

export default ContextComponent;
