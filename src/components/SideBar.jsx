import { Drawer, FormControl, InputAdornment, OutlinedInput, Toolbar } from "@mui/material";


const chatTitles = [
    "Introduction to the Theory of Relativity",
    "Principles of Democracy",
    "Photosynthesis in Plants"
];

const SideBar = () => {
    const drawerWidth = '20rem';

    return (
        <aside
            className="dark:bg-stone-800 border-r border-stone-300 dark:border-stone-600 h-full shadow-2xl"
        >
            <Toolbar>
                <h1 className="text-4xl text-center w-full p-8">SKYNET</h1>
            </Toolbar>

            <div className="px-3 w-full">
                <div className="border-2 rounded-md py-2 border-zinc-400 dark:border-zinc-500 focus-within:border-zinc-800 dark:bg-zinc-700 focus-within:dark:border-zinc-200">
                    <input className="w-full rounded-lg px-3 text-lg border-none focus:outline-none bg-transparent" placeholder="Search..." type="search" />
                </div>
            </div>
        </aside>
    );
}

export default SideBar;