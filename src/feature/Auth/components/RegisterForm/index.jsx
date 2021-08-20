import React from 'react';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from '../../../../components/form-control/InputField';
import PasswordField from '../../../../components/form-control/PasswordField';
import { Button } from '@material-ui/core';


RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {

    const { onSubmit } = props

    const schema = yup.object().shape({
        username: yup.string()
            .required("Xin vui lòng nhập username."),
        email: yup.string()
            .required("Xin vui lòng nhập email.")
            .email("Xin vui lòng nhập một email"),
        password: yup.string()
            .required("Xin vui lòng nhập password.")
            .min(6, "Password phải có ít nhất 6 ký tự."),
        password1: yup.string()
            .required("Xin vui lòng nhập password")
            .oneOf([yup.ref('password')], 'Password không đúng.'),
        first_name: yup.string()
            .required("Xin vui lòng nhập Tên."),
        last_name: yup.string()
            .required("Xin vui lòng nhập Họ."),
        address: yup.string()
            .required("Xin vui lòng nhập địa chỉ."),
        phone_number: yup.string()
            .required("Xin vui lòng nhập số điện thoại."),
    });

    const form = useForm({
        defaultValue: {
            username: "",
            password: "",
            password1: "",
            email: "",
            first_name: "",
            last_name: "",
            address: "",
            phone_number: "",
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {
        if (onSubmit) {
            onSubmit(values)
        }
    }

    return (
        <div style={{ width: "500px" }}>
            <form onSubmit={form.handleSubmit(handleSubmit)} noValidate autoComplete="off">
                <InputField form={form} name="username" label="Tài Khoản" id="username" />
                <PasswordField form={form} name="password" label="Mật khẩu" id="password" />
                <PasswordField form={form} name="password1" label="Mật khẩu" id="confirm_password" />
                <InputField form={form} name="email" label="Email" id="email" />
                <InputField form={form} name="first_name" label="Tên" id="first_name" />
                <InputField form={form} name="last_name" label="Họ" id="last_name" />
                <InputField form={form} name="phone_number" label="Số điện thoại" id="phone_number" />
                <InputField form={form} name="address" label="Địa chỉ" id="address" />
                <Button variant="contained" color="primary" type="submit">Đăng ký</Button>
            </form>
        </div>
    );
}

export default RegisterForm;