import React from 'react';
import Login from '../components/Login';

LoginPage.propTypes = {
    
};

function LoginPage(props) {
    return (
        <div>
            <h1 style={{ textAlign: "center", marginBottom: "40px" }}>Login</h1>
            <Login/>
        </div>
    );
}

export default LoginPage;