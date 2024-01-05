import { Link } from "react-router-dom";

const TabLinks = ({ tabsList }) => {
    const { pathname } = location;

    return (
        <div className="flex gap-6 text-lg border-b mt-2 dark:border-stone-500">
            {tabsList.map((tab) => (
                <Link
                    to={tab.href}
                    key={tab.name}
                    className={`py-1.5 px-4 rounded-t-lg border border-b-0 dark:border-stone-500 ${pathname === tab.href ? "bg-primary dark:bg-primary-200 text-white dark:text-black" : ""}`}>
                    {tab.name}
                </Link>
            ))}
        </div>
    );
}

export default TabLinks;