import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Authenticate from './Authenticate'
export const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={
            (props) => {
                if (Authenticate.isAuthenticated()) {
                    return <Component {...props} />
                } else {
                    return <Redirect to={
                        {
                            pathname: '/',
                            state: {
                                from: props.location
                            }
                        }
                    } />
                }
            }
        } />
    )
}