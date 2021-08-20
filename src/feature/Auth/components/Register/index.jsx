import { unwrapResult } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { register } from '../../userSlice';
import RegisterForm from '../RegisterForm';


Register.propTypes = {
    
};

function Register(props) {

    const dispatch = useDispatch()
    const history = useHistory();

    const onSubmit = async (values) => {
        try {
            const action = register(values)
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
            console.log(user)
            history.push("/")
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