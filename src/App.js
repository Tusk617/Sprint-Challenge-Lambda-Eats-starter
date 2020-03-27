import React from "react";
import { Route } from "react-router-dom";
import Home from "./Components/Home";

const App = () => {
  return (
    <Route exact path="/">
      <Home />
    </Route>
  );
};
export default App;
