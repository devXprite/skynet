import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from './Auth.module.scss'
import { useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";


const CreateAccount = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const token = searchParams.get('token');

    const [loading, setLoading] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        const data = {
            token: token,
            password: e.target[0].value,
            password_confirmation: e.target[1].value,
        }

        if (!token) {
            alert('Invalid token!');
            return;
        }

        if (data.password !== data.password_confirmation) {
            toast.error('Password and confirm password does not match!');
            return;
        }

        setLoading(true);

        axios.post(`/auth/create-account`, data)
            .then(res => {
                console.log(res);
                toast.success('Successfully created account!');
                navigate('/auth/signin', { replace: true })
            })
            .catch(error => {
                console.log(error);
                toast.error(error?.response?.data?.msg || error?.response?.data?.message || 'Something went wrong! Please try again later.')
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <>
            <h2 className="text-4xl mb-12 text-center gradient_text">Create Your Account</h2>

            <form onSubmit={onSubmit}>
                <InputField name="password" type="password" label="Enter your password" />
                <InputField name="password_confirmation" type="password" label="Repeat your password" />

                <button type="submit" className="gradient_btn w-full mt-8 text-xl disabled:cursor-progress"  >
                    Create Your Account
                </button>
            </form>
        </>
    )
}

export default CreateAccount;