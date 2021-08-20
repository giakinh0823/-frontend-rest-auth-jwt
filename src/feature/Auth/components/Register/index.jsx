import { unwrapResult } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../userSlice';
import RegisterForm from '../RegisterForm';


Register.propTypes = {
    
};

function Register(props) {

    const dispatch = useDispatch()

    const onSubmit = async (values) => {
        try {
            const action = register(values)
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
            console.log(user)
        } catch (error) {
            console.log("error: ", error)
        }
    }

    return (
        <div style={{ display: "flex", justifyContent: "center"}}>
            <RegisterForm onSubmit={onSubmit}/>
        </div>
    );
}

export default Register;