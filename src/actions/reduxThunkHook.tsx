import useSWR from "swr";
import axios from "axios";
const url = "https://api.thedogapi.com/v1";
import { useDispatch } from "react-redux";
import { reduxThunkActions } from "./reduxThunkActions";

const useReduxThunkHook = () => {
  const dispatch = useDispatch();
  const { data, error } = useSWR(url, async (uri: string) => {
    const res = await axios.get(uri);
    return res.data;
  });
  dispatch(reduxThunkActions({ data, error }));
  return null;
};

export default useReduxThunkHook;
