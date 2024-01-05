import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";

const AppLayout = () => {
    return (
        <>
            <div className="min-h-screen grid grid-cols-1 md:grid-cols-[20rem_1fr] w-full relative">
                <SideBar />
                <div className="relative">
                    <NavBar />
                    <div className="p-4">
                        <Outlet />
                    </div>
                </div>
                {/* <img className="fixed bottom-0 left-2 z-50 bg-transparent
                w-72" src="/logo_cybercon.png" alt="" srcset="" /> */}
            </div>
        </>
    );
}

export default AppLayout;