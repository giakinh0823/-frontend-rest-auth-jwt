import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

AuthFeature.propTypes = {

};

function AuthFeature(props) {

    const match = useRouteMatch()
    const user = useSelector(state => state.user.current)
    const isLogin = !!user.username

    return (
        <div>
            {!isLogin && (
                <Switch>
                    <Route path={`${match.url}/login`} exact>
                        <LoginPage />
                    </Route>
                    <Route path={`${match.url}/register`} exact>
                        <RegisterPage />
                    </Route>
                </Switch>
            )}
        </div>
    );
}

export default AuthFeature;