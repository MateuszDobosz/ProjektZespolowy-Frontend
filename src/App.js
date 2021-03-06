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
import NewsPage from "./pages/NewsPage";
import SurveyPage from "./pages/SurveyPage";
import DonationsPage from "./pages/DonationsPage";
import PrivateRoute from './components/PrivateRoute';

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
          <Route path="/walk"></Route>
          <Route path="/news" component={NewsPage}></Route>
          <Route path="/animals" component={AnimalsPage}></Route>
          <Route path="/login" component={LoginPage}></Route>
          <PrivateRoute path="/survey" Private><SurveyPage /></PrivateRoute>
          <PrivateRoute path="/admin" ><AdminPage /></PrivateRoute>
          <PrivateRoute path="/donations" ><DonationsPage/></PrivateRoute>
          <Route path="/" component={HomePage}></Route>
        </Switch>
      </Router>
    </Wrapper>
  );
};

export default App;
