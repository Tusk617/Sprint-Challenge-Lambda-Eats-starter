import React from "react";
import { Route } from "react-router-dom";
import Home from "./Components/Home";
import Order from "./Components/Form";

const App = () => {
  return (
    <div>
    <Route exact path="/" component={Home}>
      <Home />
    </Route>

    <Route path="/pizza" component={Order}>
      <Order />
    </Route>
    </div>
  );
};
export default App;
