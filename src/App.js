import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import usersData from "./data.json";
import ProdctDesc from "./Components/ProductDesc/ProductDesc";
import Productinfo from "./Components/Productinfo/Productinfo";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Productinfo />} />
        <Route
          path="/products/:id"
          element={<ProdctDesc productData={usersData} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
