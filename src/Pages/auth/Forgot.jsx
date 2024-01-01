import { Link } from "react-router-dom";
import styles from './Auth.module.scss'
import axios from "axios";
import { IoIosMail } from "react-icons/io"
import { useState } from "react";
import { toast } from "react-hot-toast";
import InputField from "./InputField";

const Forgot = () => {
    const [success, setsuccess] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        const data = { email: e.target[0].value }

        axios.post('auth/password-recovery', data)
            .then(res => {
                const msg = res.data?.msg ?? 'Password recovery mail will be sent to you soon';
                setsuccess(msg)
            })
            .catch(error => {
                console.log(error);
                toast.error(error?.response?.data?.msg || error?.response?.data?.message || 'Something went wrong! Please try again later.')
            })
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
            <h2 className="text-4xl mb-12 text-center gradient_text">Forgot Password?</h2>

            <form onSubmit={onSubmit}>
                <InputField name="email" type="email" label="Enter your email" autoFocus={true} />

                <button type="submit" className="gradient_btn w-full mt-8 text-xl disabled:cursor-progress"  >
                    Reset Password
                </button>
            </form>

            <div className="flex mt-10 items justify-end" >
                <Link to="/auth/signin" className="text-sm text-cyan-400">Already have an account? Sign In</Link>
            </div>
        </>
    )
}

export default Forgot;