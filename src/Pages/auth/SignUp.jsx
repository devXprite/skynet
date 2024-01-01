import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { IoIosMail } from "react-icons/io"
import InputField from "./InputField";
import { FaSignInAlt, FaSpinner } from 'react-icons/fa';



const SignUp = () => {
    const [loading, setLoading] = useState(false);
    const [success, setsuccess] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        const data = { email: e.target[0].value };

        setLoading(true)
        axios.post('auth/register', data)
            .then(res => {
                const msg = res.data?.msg ?? 'Account creation mail will be sent to you soon';
                toast.success(msg);
                setsuccess(msg);
            })
            .catch(error => {
                console.log(error);
                toast.error(error?.response?.data?.msg || error?.response?.data?.message || 'Something went wrong! Please try again later.')
            })
            .finally(() => { setLoading(false) })
    }

    if (success) {
        return (
            <div className="text-center">
                <IoIosMail className="text-9xl block mx-auto" />
                <h3 className="text-2xl">{success}</h3>
            </div>
        )
    }

    return (
        <>
            <h2 className="text-4xl mb-12 text-center gradient_text">Sign Up </h2>
            <form action="#" onSubmit={onSubmit}>
                <InputField name="email" type="email" label="Enter your email" autoFocus={true} />

                <button type="submit" className="gradient_btn w-full mt-8 text-xl disabled:cursor-progress" disabled={loading} >
                    {!loading && <><FaSignInAlt /> Sign Up</>}
                    {loading && <><FaSpinner className="animate-spin" /> Signing Up...</>}
                </button>

                <div className="flex mt-8 items-center justify-between" >
                    <Link to="/auth/forgot" className="text-sm text-cyan-400">Forgot Password?</Link>
                    <Link to="/auth/signin" className="text-sm text-cyan-400">Already have an account? Sign In</Link>
                </div>
            </form>
        </>
    );
}

export default SignUp;