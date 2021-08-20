import React from 'react';
import LoginForm from '../LoginForm';
import { useDispatch } from 'react-redux';
import { login } from '../../userSlice';
import { unwrapResult } from '@reduxjs/toolkit';


Login.propTypes = {
    
};

function Login(props) {

    const dispatch = useDispatch()

    const onSubmit = async (values) => {
        console.log(values)
        try {
            const action = login(values)
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction)
            console.log(user)
        } catch (error) {
            console.log("error: ", error)
        }
    }

    return (
        <div style={{ display: "flex", justifyContent: "center"}}>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
}

export default Login;