import { MdExplore } from "react-icons/md";
import { MdRocketLaunch } from "react-icons/md";
import { Link } from "react-router-dom";

const Page = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div>
                <h2 className=" md:text-3xl text-center text-primary-300 mb-4 max-w-[90%] mx-auto">Your Intelligent Companion for Instant Conversations!</h2>
                <h1 className="text-4xl md:text-6xl text-center font-semibold bg-clip-text text-transparent" ><span className="gradient_text">Now Converse effortlessly in Hinglish</span></h1>

                <div className="flex flex-col justify-center mt-24 md:flex-row gap-5 md:gap-12 mb-8 w-[85%] md:w-auto mx-auto">
                    <Link to={'/chat'}
                        className="gradient_btn md:px-8 py-2 md:py-3 !w-auto text-base md:text-xl">
                        <span>Get Started</span> <MdRocketLaunch />
                    </Link>

                    <Link to={'/chat'}
                        className="btn border border-primary-500 hover:bg-primary-600 md:px-8 py-2 md:py-3 !w-auto text-base md:text-xl">
                        <span>Explore Tools</span> <MdExplore />
                    </Link>

                </div>

            </div>

        </div>

    );
}

export default Page;