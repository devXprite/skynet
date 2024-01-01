import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const initialState = {
    files: [],
    selected: null,
    status: "idle",
    error: null,
    upload: {
        status: "idle",
        progress: 0,
        error: null,
        title: null
    }
};


const fetchFiles = createAsyncThunk(
    "files/fetch",
    async () => {
        // await sleep(15000)
        return (await axios.get("thread/library")).data;
        // return ((await axios.get("https://jsonplaceholder.typicode.com/users")).data).slice(0, 3)
    }
);


const uploadFile = createAsyncThunk(
    "files/upload",
    (file, { dispatch }) => {
        return new Promise((resolve, reject) => {
            console.log('Trying to upload file');

            const formData = new FormData();
            formData.append("document", file);
            dispatch(updateTitle('Uploading your file...'));

            const config = {
                responseType: 'stream',
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                onUploadProgress: ({ loaded, total }) => {
                    const progress = ((loaded / total) * 100).toFixed(2);
                    dispatch(updateProgress(progress));
                },
                onDownloadProgress: ({ event }) => {
                    const progress = event.currentTarget.response;
                    console.log(progress);

                    const arr = progress.split('%');
                    dispatch(updateProgress((arr[arr.length - 2] || 0) + '%'))
                    dispatch(updateTitle('Processing your file...'));
                }
            };

            axios
                .post("thread/new", formData, config)
                .then(response => {
                    let res = response.data;
                    let resObj = JSON.parse(res.split('%')[1]);
                    // let res = `100% {"thread_id": "7f2df11d-e599-44cf-8974-61acd70d714f"}`;
                    // console.log(resObj);

                    dispatch(addFile({
                        id: resObj.thread_id,
                        created_at: resObj.created_at || new Date(),
                        title: resObj?.name || file.name
                    }))
                    resolve(resObj);

                }).catch(error => {
                    reject(error);
                })
        })
    }
);



const filesSlice = createSlice({
    name: "files",
    initialState,
    reducers: {
        updateProgress: (state, action) => {
            const progress = parseFloat(action.payload).toFixed(0);
            state.upload.progress = progress;
        },
        updateTitle: (state, action) => {
            state.upload.title = action.payload;
        },
        addFile: (state, action) => {
            state.files.unshift({
                id: action.payload.id,
                name: action.payload?.title,
                date: new Date().toISOString(),
            });
        },
        resetUploadState: (state) => {
            state.upload = initialState.upload;
        },
        setSeleted: (state, action) => {
            state.selected = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFiles.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(fetchFiles.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.files = action.payload;
            })
            .addCase(fetchFiles.rejected, (state, action) => {
                state.status = "failed";
                state.error = action?.error?.message;
            })

            .addCase(uploadFile.pending, (state, action) => {
                state.upload.status = "uploading";
                state.upload.isUploading = true;
            })
            .addCase(uploadFile.fulfilled, (state, action) => {
                state.upload.status = "uploaded";
                state.upload.isUploading = false;
            })
            .addCase(uploadFile.rejected, (state, action) => {
                state.upload.status = "failed";
                state.upload.error = action?.error?.message;
                state.upload.isUploading = false;
            })
    }

});

export default filesSlice.reducer;
export const { updateProgress, resetUploadState, updateTitle, addFile, setSeleted } = filesSlice.actions;
export { fetchFiles, uploadFile };