
import { AppBar, Avatar, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";



const links = [
    {
        name: 'Chat',
        href: '/app/chat'
    },
    {
        name: 'Default',
        href: '/app/default'
    },
    {
        name: 'Notebook',
        href: '/app/notebook'
    },
    {
        name: 'Parameter',
        href: '/app/parameter'
    },
    {
        name: 'Model',
        href: '/app/model'
    },
    {
        name: 'Training',
        href: '/app/traning'
    }
]

const NavBar = () => {


    return (
        <>
            <AppBar position="static" className="dark:bg-stone-800" >
                <Toolbar>
                    <div className="flex gap-10 text-lg items-center w-full">
                        {links.map((link, index) => (
                            <NavLink key={index} to={link.href}
                                className={({ isActive }) => isActive ? 'navlink .active' : 'navlink'}
                            >
                                {link.name}
                            </NavLink>
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