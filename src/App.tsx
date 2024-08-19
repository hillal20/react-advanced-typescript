import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AllProductsRoute from "./routes/AllProductsRoute";
import Home from "./routes/Home";
import ContextComponent from "./ReactContext/contextComponent";
import ContextProvider from "./ReactContext/contextProvider";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/allProducts"
          element={<AllProductsRoute title={"this is the title"} />}
        />
        <Route path="/*" element={<Home />} />

        <Route
          path="/ContextComponent"
          element={
            <ContextProvider>
              <ContextComponent />
            </ContextProvider>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
