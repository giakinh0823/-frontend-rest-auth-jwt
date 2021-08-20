import React from 'react';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { useSelector } from 'react-redux';

AuthFeature.propTypes = {

};

function AuthFeature(props) {

    const match = useRouteMatch()
    const history = useHistory();
    const user = useSelector(state => state.user.current)
    const isLogin = !!user.username

    if(isLogin){
        history.push("/")
    }

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