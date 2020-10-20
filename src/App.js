import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Menu from "./components/Menu";
import LoginPage from "./pages/LoginPage";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <Wrapper>
      <Router>
        <Menu />

        <Switch>
          <Route path="/donate"></Route>
          <Route path="/walk"></Route>
          <Route path="/animals"></Route>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/" component={HomePage}></Route>
        </Switch>
      </Router>
    </Wrapper>
  );
};

export default App;
