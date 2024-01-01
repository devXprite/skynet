import { Outlet } from "react-router-dom";
import styles from '../Pages/auth/Auth.module.scss'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";


const AuthLayout = () => {
    return (
        <>
            <main className="min-h-screen flex items-center justify-center" >
                <div className="bg-neutral-800 border border-neutral-600 shadow-xl shadow-black m-3 px-4 py-8 md:px-8 md:py-12 rounded-xl w-full max-w-lg [&_a]:text-xs md:[&_a]:text-sm [&_a]:text-cyan-400">
                    <Outlet />
                </div>
            </main>
        </>
    );
}

export default AuthLayout;