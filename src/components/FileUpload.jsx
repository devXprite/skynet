import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { BiCloudUpload } from 'react-icons/bi';
import { AiFillFileText } from 'react-icons/ai'
import { IoClose } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux';
import { resetUploadState, uploadFile } from '../../store/slices/filesSlice';
import { useEffect } from 'react';


const FileUpload = ({ onClose, onOpen }) => {
    const dispatch = useDispatch();

    const { progress, status, title } = useSelector(state => state.files.upload);

    const onDrop = useCallback(acceptedFiles => { dispatch(uploadFile(acceptedFiles[0])) }, []);
    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
        onDrop,
        accept: {
            'application/pdf': ['.pdf']
        }
    });

    // useEffect(() => { open() }, []);

    const CloseBtn = () => (
        <button className='absolute top-0 right-0 m-5 transition opacity-75 hover:opacity-100' onClick={() => { onClose(); dispatch(resetUploadState()) }} >
            <IoClose className='text-6xl font-bold' />
        </button>
    )

    const DropBox = (
        <div
            {...getRootProps()}
            className={'px-20 py-10 rounded-xl bg-neutral-800 shadow-xl shadow-black text-center' + ' ' + (isDragActive ? 'w-[90vw] h-[90vh] flex justify-center items-center border-4 border-dashed' : '')}
        >
            {(isDragActive)
                ? <p className='text-9xl text-primary-400 animate-bounce'><AiFillFileText /></p>
                : <>
                    <BiCloudUpload className='text-9xl m-auto' />
                    <h2 className='text-3xl'>Drag and Drop file</h2>
                    <p className='text-xl my-8'>OR</p>
                    <button className='gradient_btn text-xl w-full' >
                        Browse File
                    </button>
                </>}
        </div>
    )



    const Progress = () => (<div className='text-center' >
        <p className='text-5xl animate-bounce'>{progress}%</p>
        <p className='text-3xl opacity-80 mt-4 animate-pulse'>{title}</p>
    </div>)

    return (
        <div
            className={'w-full h-screen flex items-center justify-center fixed inset-0 z-50 bg-neutral-900/70 backdrop-blur-sm'}
        >
            {status != 'uploading' && <CloseBtn />}

            {status === 'idle' && DropBox}
            {status === 'uploading' && <Progress />}
            {status === 'uploaded' && <h1>File Uploaded Successfully</h1>}
            {status === 'failed' && <h1>File Upload Failed</h1>}
        </div>
    );
}

export default FileUpload;