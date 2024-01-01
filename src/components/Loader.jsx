import { FiLoader } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loader = () => {
    return ( 
        <div className="w-full h-screen flex items-center justify-center">
            <AiOutlineLoading3Quarters className="text-6xl animate-spin text-neutral-400" />
        </div>
     );
}
 
export default Loader;