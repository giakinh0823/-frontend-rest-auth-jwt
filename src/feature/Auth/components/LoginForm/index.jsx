import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InputField from '../../../../components/form-control/InputField';
import Button from '@material-ui/core/Button';
import PasswordField from '../../../../components/form-control/PasswordField';

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

function LoginForm(props) {

    const {onSubmit} = props

    const schema = yup.object().shape({
        username: yup.string().required(),
        password: yup.string().required(),
    });

    const form = useForm({
        defaultValue: {
            username: "",
            password: "",
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {
        if(onSubmit){
            onSubmit(values)
        }
    }

    return (
        <div style={{ width: "500px"}}>
            <form onSubmit={form.handleSubmit(handleSubmit)} noValidate autoComplete="off">
                <InputField form={form} name="username" label="Tài Khoản" id="username"/>
                <PasswordField form={form} name="password" label="Mật khẩu" id="password"/>
                <Button variant="contained" color="primary" type="submit">Đăng nhập</Button>
            </form>
        </div>
    );
}

export default LoginForm;