import React from 'react'
import { Route,Redirect } from 'react-router-dom'
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, ...rest }) => {

    const loggedIn = useSelector((state) => state.userReducer.loggedIn);
return(
    <Route {...rest} render={() => {
        return loggedIn === true
          ? children
          : <Redirect to='/login' />
      }}>

    </Route>
)
}


export default PrivateRoute;