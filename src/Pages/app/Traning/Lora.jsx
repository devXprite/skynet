import { Box, Button, Checkbox, FormControlLabel, Paper, Slider, TextField } from "@mui/material";
import { useState } from "react";

const Lora = () => {
    const [selectedTab, setSelectedTab] = useState(false)

    return (
        <div>
            <div className="grid grid-cols-2 gap-12">

                <div className="flex flex-col py-6 gap-6">
                    <div className="box">
                        <h3>Upload A file</h3>
                        <Button variant="contained" fullWidth>Upload File</Button >
                    </div>

                    <div className="box">
                        <h3>Name Of Your File</h3>
                        <TextField
                            fullWidth
                            size="small"
                            label="File Name"
                        />

                        <FormControlLabel
                            control={<Checkbox />}
                            label="Overwrite Existing File"
                            className="mt-2"
                        />
                    </div>

                    <div className="grid grid-cols-[2fr_1fr] gap-4">
                        <div className="box">
                            <div className="flex items-center justify-between"><h4 className="mr-auto">Lora Rank</h4><TextField size="small" placeholder="1" className="w-10" /></div>
                            <Slider defaultValue={30} />
                            <hr />

                            <div className="flex items-center justify-between"><h4 className="mr-auto">Lora Alpha</h4><TextField size="small" placeholder="1" className="w-10" /></div>
                            <Slider defaultValue={70} />
                            <hr />

                            <div className="flex items-center justify-between"><h4 className="mr-auto">Lora Batch Size</h4><TextField size="small" placeholder="1" className="w-10" /></div>
                            <Slider defaultValue={10} />
                        </div>

                        <div className="box">
                            <h4>LR Sheduler</h4>
                            <TextField
                                fullWidth
                                size="small"
                                placeholder="Linear"
                            />
                            <hr className="!my-6" />
                            <h4>Options</h4>
                            <TextField
                                fullWidth
                                size="small"
                                placeholder="Linear"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex gap-6 text-lg border-b my-5 dark:border-stone-500">
                        <p className="py-1.5 px-4 rounded-t-lg border border-b-0 dark:border-stone-500 bg-primary dark:bg-primary-200 text-white dark:text-black">Train Lora</p>
                        <p className="py-1.5 px-4 rounded-t-lg border border-b-0 dark:border-stone-500">Train Lora</p>
                    </div>

                    <div className="flex flex-col gap-6 p-4 box !bg-transparent">
                        <div className="box w-full">
                            <h4>Date Format</h4>
                            <TextField
                                fullWidth
                                size="small"
                                label="File Name"
                            />
                        </div>
                        <div className="box w-full">
                            <h4>DataSet</h4>
                            <TextField
                                fullWidth
                                size="small"
                                label="File Name"
                            />

                        </div>

                        <div className="box w-full">
                            <h4>Evaluation DataSet</h4>
                            <TextField
                                fullWidth
                                size="small"
                                label="File Name"
                            />
                        </div>

                        <div className="flex justify-end gap-8">
                            <Button color="warning" variant="contained">Upload</Button >
                            <Button color="success" variant="contained">Fien Tuning</Button >
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Lora;