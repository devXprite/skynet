import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from './Auth.module.scss'
import { useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";




const Reset = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const token = searchParams.get('token');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

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
            alert('Password does not match!');
            return;
        }

        setLoading(true);

        axios.post(`/auth/reset-password`, data)
            .then(res => {
                console.log(res);
                toast.success('Successfully Resset Your Password!');
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
            <h2 className="text-4xl mb-12 text-center gradient_text">Set New Password</h2>

            <form onSubmit={onSubmit}>
                <InputField name="password" type="password" label="Enter your password" />
                <InputField name="password_confirmation" type="password" label="Repeat your password" />

                <button type="submit" className="gradient_btn w-full mt-8 text-xl disabled:cursor-progress"  >
                    Set New Password
                </button>
            </form>
        </>
    )
}

export default Reset;