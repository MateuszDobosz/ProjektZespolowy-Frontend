import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/donate"></Route>
        <Route path="/walk"></Route>
        <Route path="/animals"></Route>
        <Route path="/register"></Route>
        <Route path="/login"></Route>
        <Route path="/" component={HomePage}></Route>
      </Switch>
    </Router>
  );
};

export default App;
