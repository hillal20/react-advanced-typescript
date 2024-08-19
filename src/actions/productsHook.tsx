
import useSWR from "swr";
import axios from "axios";

const dataUrl = "https://dummyjson.com/products";

const useProductsHook = () => {
    const { data, error } =   useSWR(dataUrl, (url: string) =>
    axios(url)
    .then((r) => r.data)
  );
 return {data, error}
};

export default useProductsHook;
