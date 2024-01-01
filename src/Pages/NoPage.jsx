import {AiFillHome} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const NoPage = () => {
    return ( 
        <div className="w-full h-[calc(100vh-4.5rem)] flex items-center justify-center flex-col gap-4">
            {/* <h1 className='text-9xl font-semibold text-primary-400'>404</h1>
            <h2 className="text-5xl">Page Not Found!</h2>
            <Link className="btn text-xl px-4 py-2 mt-8" to="/"> <AiFillHome/> Go back to Home</Link> */}
        </div>
     );
}
 
export default NoPage;