import { Button } from '@mui/material';
import {AiFillHome} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const NoPage = () => {
    return ( 
        <div className="w-full h-[calc(100vh-4.5rem)] flex items-center justify-center flex-col gap-4">
            <h1 className='text-9xl font-semibold text-primary-400'>404</h1>
            <h2 className="text-5xl">Page Not Found!</h2>
            <br />
            <Button size='large' startIcon={<AiFillHome/>} variant="contained" component={Link} to="/" >Go back to Home</Button>
        </div>
     );
}
 
export default NoPage;