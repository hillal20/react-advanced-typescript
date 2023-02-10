    
import PartialComponent from "./advancedTypescript/PartialType/PartialComponent";
import RequiredComponent from "./advancedTypescript/RquiredType/RequiredComponent";
import RecordComponent from "./advancedTypescript/Record/RecordComponent";
import PickComponent from "./advancedTypescript/Pick/PickComponent";
import OmitComponent from "./advancedTypescript/Omit/OmitComponent";
import ExcludeComponent from "./advancedTypescript/Exclude/ExcludeComponent";
import ExtractComponent from "./advancedTypescript/Extract/ExtractComponent";
import NonNullableComponent from "./advancedTypescript/NonNullable/NonNullableComponent";
import ReturnComponent from "./advancedTypescript/Return/ReturnComponent";
import InputUsingRefComponent from "./RefHook/InputUsingRefComponent";
import useSW from "swr";
import axios from "axios";

function App() {
  const { data } = useSW("https://dummyjson.com/products/1", (url: string) =>
    axios(url).then((r) => r.data)
  );

  console.log("data from useSW ==> ", data);
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
    </div>
  );
}

export default App;
