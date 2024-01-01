import { Link } from "react-router-dom";
import { setNewToken } from "../../../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from './Auth.module.scss'
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { FaSignInAlt, FaSpinner } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";

const inputFields = [
    {
        name: 'email',
        type: 'email',
        label: 'Your Email',
    },
    {
        label: 'Your Password',
        name: 'password',
        type: 'password',
    }
]

const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const data = {
            username: e.target[0].value,
            password: e.target[1].value
        }

        axios.post('auth/login', data)
            .then(res => {
                const msg = res.data?.msg ?? 'Successfully Login!';
                const token = res.data?.access_token ?? null;
                dispatch(setNewToken(token));
                toast.success(msg);
                navigate('/dashboard', { replace: true });
            })
            .catch(error => {
                toast.error(error?.response?.data?.msg || error?.response?.data?.message || 'Something went wrong! Please try again later.')
            })
            .finally(() => {
                setLoading(false);
                // dispatch(setNewToken('token'));
                // navigate('/dashboard', { replace: true });
            })
    }

    return (
        <>
            <h2 className="text-4xl mb-12 text-center gradient_text">Sign In </h2>
            <form method="post" onSubmit={onSubmit}>
                {inputFields.map((field, index) => (<InputField key={index} {...field} />))}

                <button type="submit" className="gradient_btn w-full mt-8 text-base md:text-xl disabled:cursor-progress" disabled={loading} >
                    {!loading && <><FaSignInAlt /> Sign In</>}
                    {loading && <><FaSpinner className="animate-spin" /> Signing In...</>}
                </button>
            </form>

            <div className="flex mt-6 md:mt-10 items-center justify-between" >
                <Link to="/auth/forgot" className="">Forgot Password?</Link>
                <Link to="/auth/signup" className="">Don't have an account? Sign Up</Link>
            </div>
        </>

    );
}

export default SignIn;