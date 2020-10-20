import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Menu from "./components/Menu";
import LoginPage from "./pages/LoginPage";
import styled from "styled-components";
import Img from "./assets/Group 12.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainImg = styled.div`
  width: 100vw;
  min-height: 550px;
  background: url("${Img}") center no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    position: fixed;
    top: 0px;
    bottom: 0px;
    z-index: -1;
  }
`;

const App = () => {
  return (
    <Wrapper>
      <Router>
        <Menu />
        <MainImg />
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
