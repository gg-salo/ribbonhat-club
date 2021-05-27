import React from "react";
import Navigation from "./Navigation";
import Grid from "./Grid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductDetail from "./ProductDetail";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Route exact path="/" component={Grid} />
      <Route exact path="/ribbon-hat" component={ProductDetail} />
    </Router>
  );
};

export default App;
