import React from 'react';
import Register from '../components/Register';

RegisterPage.propTypes = {

};

function RegisterPage(props) {
    return (
        <div style={{padding: "100px 0"}}>
            <h1 style={{ textAlign: "center", marginBottom: "40px" }}>Register</h1>
            <Register/>
        </div>
    );
}

export default RegisterPage;