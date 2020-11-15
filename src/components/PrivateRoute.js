import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, ...rest }) => {

    const loggedIn = useSelector((state) => state.userReducer.loggedIn);
    return (
        <Route {...rest} render={({ location }) => {
            return loggedIn === true
                ? children
                : <Redirect to={{
                    pathname: '/login',
                    state: { from: location }
                }}></Redirect>
        }}>

        </Route>
    )
}


export default PrivateRoute;