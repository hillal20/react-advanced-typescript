import useSWR from "swr";
import axios from "axios";
import { usersAction } from "./usersActions";
import { useEffect } from "react";

const dataUrl = "http://localhost:7000/users?name=hilal";

const useUsersHook = (dispatch: any) => {
  const response = useSWR(dataUrl, (url: string) =>
    axios(url).then((r) => r.data)
  );

  useEffect(() => {
    if(response)  dispatch(usersAction(response));
  }, [dispatch]);

  return null;
};

export default useUsersHook;
