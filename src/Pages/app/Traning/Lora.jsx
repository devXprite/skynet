import { useState } from "react";
import InputBox from "../../../components/UI/InputBox";
import PageBody from "../../../components/PageBody";

// Page Data conains all the sections and fields
const pageData = {
    wrappers: [
        {
            name: null,
            boxes: [
                {
                    span: 2,
                    fields: [
                        {
                            name: 'Upload File',
                            type: 'button'
                        }
                    ]
                },
                {
                    span: 2,
                    fields: [
                        {
                            name: 'File Name',
                            type: 'text'
                        },
                        {
                            name: 'Overwrite Existing File',
                            type: 'checkbox'
                        }
                    ]
                },


                {
                    fields: [
                        {
                            name: 'Lora Rank',
                            type: 'slider'
                        },
                        {
                            name: 'Lora Alpha',
                            type: 'slider'
                        },
                        {
                            name: 'Lora Batch Size',
                            type: 'slider'
                        }
                    ]
                },
                {
                    fields: [
                        {
                            name: 'LR Sheduler',
                            type: 'text'
                        },
                        {
                            name: 'Options',
                            type: 'text'
                        }
                    ]
                }

            ]
        },
        {
            name: 'Formetted Datasets',
            boxes: [
                {
                    span: 2,
                    fields: [
                        {
                            name: 'Date Format',
                            type: 'text'
                        }
                    ]
                },
                {
                    span: 2,
                    fields: [
                        {
                            name: 'DataSet',
                            type: 'text'
                        }
                    ]
                },
                {
                    span: 2,
                    fields: [
                        {
                            name: 'Evaluation DataSet',
                            type: 'text'
                        }
                    ]
                }
            ],
            action: [
                {
                    name: 'Upload',
                    type: 'button',
                    color: 'warning',
                },
                {
                    name: 'Fien Tuning',
                    type: 'button',
                    color: 'success',
                }
            ]

        },
        {
            name: 'Raw Text File',
            boxes: [
                {
                    name: null,
                    span: 2,
                    fields: [
                        {
                            name: 'Text File',
                            type: 'text'
                        }
                    ]
                },
                {
                    fields: [
                        {
                            name: 'OverLap Length',
                            type: 'slider'
                        },
                        {
                            name: 'Prefer New Line Cut Length',
                            type: 'slider'
                        }
                    ]
                },
                {
                    name: null,
                    span: 1,
                    fields: [
                        {
                            name: 'Hard Cut String',
                            type: 'text'
                        },
                        {
                            name: 'Ignore Small Blocks',
                            type: 'text'
                        }
                    ]
                }
            ],
            action: [
                {
                    name: 'Start Lora traning',
                    type: 'button',
                    color: 'success',
                },
                {
                    name: 'Inruppet',
                    type: 'button',
                    color: 'warning',
                }
            ]
        }

    ]
}


const Lora = () => {

    return (
        <div className="page">
            <PageBody pageData={pageData} />
        </div>
    )
}





// const Lora = () => {

//     return (
//         <div className="page">
//             <div className="wrapper">
//                 <div className="box">
//                     <h3>Upload A file</h3>
//                     <Button variant="contained" fullWidth>Upload File</Button >
//                 </div>

//                 <div className="box">
//                     <h3>Name Of Your File</h3>
//                     <TextField
//                         fullWidth
//                         size="small"
//                         label="File Name"
//                     />

//                     <FormControlLabel
//                         control={<Checkbox />}
//                         label="Overwrite Existing File"
//                         className="mt-2"
//                     />
//                 </div>

//                 <div className="">
//                     <div className="box">
//                         <div className="flex items-center justify-between"><h4 className="mr-auto">Lora Rank</h4><TextField size="small" placeholder="1" className="w-10" /></div>
//                         <Slider defaultValue={30} />
//                         <hr />

//                         <div className="flex items-center justify-between"><h4 className="mr-auto">Lora Alpha</h4><TextField size="small" placeholder="1" className="w-10" /></div>
//                         <Slider defaultValue={70} />
//                         <hr />

//                         <div className="flex items-center justify-between"><h4 className="mr-auto">Lora Batch Size</h4><TextField size="small" placeholder="1" className="w-10" /></div>
//                         <Slider defaultValue={10} />
//                     </div>

//                     <div className="box">
//                         <h4>LR Sheduler</h4>
//                         <TextField
//                             fullWidth
//                             size="small"
//                             placeholder="Linear"
//                         />
//                         <hr className="!my-6" />
//                         <h4>Options</h4>
//                         <TextField
//                             fullWidth
//                             size="small"
//                             placeholder="Linear"
//                         />
//                     </div>
//                 </div>
//             </div>


//             <div className="wrapper">
//                 <h2>Formetted Datasets</h2>
//                 <div className="box">
//                     <h4>Date Format</h4>
//                     <TextField
//                         fullWidth
//                         size="small"
//                         label="File Name"
//                     />
//                 </div>

//                 <div className="box">
//                     <h4>DataSet</h4>
//                     <TextField
//                         fullWidth
//                         size="small"
//                         label="File Name"
//                     />
//                 </div>

//                 <div className="box">
//                     <h4>Evaluation DataSet</h4>
//                     <TextField
//                         fullWidth
//                         size="small"
//                         label="File Name"
//                     />
//                 </div>

//                 <div className="btn-container">
//                     <Button color="warning" variant="contained">Upload</Button >
//                     <Button color="success" variant="contained">Fien Tuning</Button >
//                 </div>

//             </div>

//             <div className="wrapper">
//                 <h2>Raw Text File</h2>

//                 <div className="box">
//                     <h3>Text File</h3>
//                     <TextField
//                         select
//                         fullWidth
//                         size="small"
//                     >
//                         <MenuItem value='none'>None</MenuItem>
//                     </TextField>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                     <div className="box">
//                         <div className="flex items-center justify-between"><h4 className="mr-auto">OverLap Length</h4><TextField size="small" placeholder="1" className="w-10" /></div>
//                         <Slider defaultValue={30} />
//                         <hr />

//                         <div className="flex items-center justify-between"><h4 className="mr-auto">Prefer New Line Cut Length</h4><TextField size="small" placeholder="1" className="w-10" /></div>
//                         <Slider defaultValue={70} />
//                         <hr />
//                     </div>

//                     <div className="box">
//                         <h4>Hard Cut String</h4>
//                         <TextField
//                             fullWidth
//                             size="small"
//                             placeholder="Linear"
//                         />
//                         <hr className="!my-6" />
//                         <h4>Ignore Small Blocks</h4>
//                         <TextField
//                             fullWidth
//                             size="small"
//                             placeholder="Linear"
//                         />
//                     </div>
//                 </div>


//                 <div className="btn-container">
//                     <Button color="success" variant="contained">Start Lora traning</Button>
//                     <Button color="warning" variant="contained">Inruppet</Button>
//                 </div>

//             </div>
//         </div>
//     );
// }

export default Lora;