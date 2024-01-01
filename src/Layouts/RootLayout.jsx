import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../components/Loader";

const RootLayout = () => {
    return (
        <>
            <Suspense fallback={<Loader />} >
                <Outlet />
            </Suspense>
            {/* <img className="fixed left-2 bottom-4 invert rounded-md px-2 opacity-50 h-20" src="/company_logo.png" alt="" /> */}
        </>
    );
}

export default RootLayout;