import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Menu from "./components/Menu";
import LoginPage from "./pages/LoginPage";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { autoLogin } from "./actions/userActions";
import AdminPage from "./pages/AdminPage";
import AnimalsPage from "./pages/AnimalsPage";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  return (
    <Wrapper>
      <Router>
        <Menu />
        <Switch>
          <Route path="/donate"></Route>
          <Route path="/walk"></Route>
          <Route path="/animals" component={AnimalsPage}></Route>
          <Route path="/admin" component={AdminPage}></Route>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/" component={HomePage}></Route>
        </Switch>
      </Router>
    </Wrapper>
  );
};

export default App;
