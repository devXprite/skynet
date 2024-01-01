import { FaFilePdf } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFiles, setSeleted } from '../../store/slices/filesSlice';
import { clearChats, fetchChats } from '../../store/slices/chatSlice';
import { MdDeleteOutline } from "react-icons/md";
import axios from 'axios';
import timesAgo from 'timesago';
import { useMemo } from 'react';

const FileListEl = ({ id, name, title, created_at}) => {
    const dispatch = useDispatch();
    const isSelected = false;

    // const date = useMemo(() => {
    //     const date = new Date(created_at);
    //     const dateOffset = date.getTimezoneOffset();

    //     date.setMinutes(date.getMinutes() - dateOffset);
    //     return timesAgo(date);
    // }, [created_at]);
    

    // const onSelect = () => {
    //     dispatch(setSeleted(id));
    //     dispatch(clearChats());
    //     dispatch(fetchChats(id))
    // }

    // const onDelete = async () => {
    //     await axios.delete(`thread/${id}`);
    //     dispatch(fetchFiles());
    // }

    return (
        <div
            className={`px-2 py-1.5 my-1.5 rounded-md cursor-pointer transition hover:bg-primary-700`}
            // onClick={onSelect}
        >
            <div className='overflow-hidden'>
                <p className='text-xs md:text-sm truncate text-primary-100' title={title ?? name}>{title ?? name}</p>
                {/* <p className='text-xs opacity-75'>{date}</p> */}
            </div>

            {/* {isSelected && <MdDeleteOutline
                onClick={onDelete}
                className='text-3xl mr-2 opacity-60 hover:text-red-400 hover:opacity-100' title='Delete this thread' />} */}
        </div>
    );
}

export default FileListEl;