import { Box, Button, Checkbox, FormControlLabel, MenuItem, Paper, Slider, TextField } from "@mui/material";
import { useState } from "react";

const Lora = () => {
    const [selectedTab, setSelectedTab] = useState(false)

    return (
            <div className="page">
                <div className="flex flex-col gap-6">
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


                <div className="wrapper">
                    <h2>Formetted Datasets</h2>
                    <div className="box">
                        <h4>Date Format</h4>
                        <TextField
                            fullWidth
                            size="small"
                            label="File Name"
                        />
                    </div>

                    <div className="box">
                        <h4>DataSet</h4>
                        <TextField
                            fullWidth
                            size="small"
                            label="File Name"
                        />
                    </div>

                    <div className="box">
                        <h4>Evaluation DataSet</h4>
                        <TextField
                            fullWidth
                            size="small"
                            label="File Name"
                        />
                    </div>

                    <div className="btn-container">
                        <Button color="warning" variant="contained">Upload</Button >
                        <Button color="success" variant="contained">Fien Tuning</Button >
                    </div>

                </div>

                <div className="wrapper">
                    <h2>Raw Text File</h2>

                    <div className="box">
                        <h3>Text File</h3>
                        <TextField
                            select
                            fullWidth
                            size="small"
                        >
                            <MenuItem value='none'>None</MenuItem>
                        </TextField>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="box">
                            <div className="flex items-center justify-between"><h4 className="mr-auto">OverLap Length</h4><TextField size="small" placeholder="1" className="w-10" /></div>
                            <Slider defaultValue={30} />
                            <hr />

                            <div className="flex items-center justify-between"><h4 className="mr-auto">Prefer New Line Cut Length</h4><TextField size="small" placeholder="1" className="w-10" /></div>
                            <Slider defaultValue={70} />
                            <hr />
                        </div>

                        <div className="box">
                            <h4>Hard Cut String</h4>
                            <TextField
                                fullWidth
                                size="small"
                                placeholder="Linear"
                            />
                            <hr className="!my-6" />
                            <h4>Ignore Small Blocks</h4>
                            <TextField
                                fullWidth
                                size="small"
                                placeholder="Linear"
                            />
                        </div>
                    </div>


                    <div className="btn-container">
                        <Button color="success" variant="contained">Start Lora traning</Button>
                        <Button color="warning" variant="contained">Inruppet</Button>
                    </div>

                </div>
            </div>
    );
}

export default Lora;