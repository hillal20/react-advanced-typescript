

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import AllProductsRoute from "./routes/AllProductsRoute";
import Home from "./routes/Home";


function App() {
  return (
    <Router>
    <Routes>
          <Route path="/allProducts" element={< AllProductsRoute title={"this is the title"}/>} />
          <Route path="/" element={< Home />} />
    </Routes>
    </Router>
  );
}

export default App;
