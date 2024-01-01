
import { AppBar, Avatar, Toolbar } from "@mui/material";
import { useState } from "react";

const links = [
    'Chat',
    'Default',
    'Notebook',
    'Parameter',
    'Model',
    'Training'
]

const NavBar = ({ showLanguage = true }) => {


    return (
        <>
            <AppBar position="static" className="dark:bg-stone-800" >
                <Toolbar>
                    <div className="flex gap-10 text-lg items-center w-full">
                        {links.map((link, i) => (
                            <p>{link}</p>
                        ))}

                        <div className="ml-auto">
                            <Avatar />
                        </div>

                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default NavBar;