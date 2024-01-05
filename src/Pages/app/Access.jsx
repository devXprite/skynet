import { useState } from "react";
import Tabs from "../../components/UI/Tabs";
import { Button, Checkbox, FormControlLabel, MenuItem, TextField } from "@mui/material";

const Access = () => {

    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <div>
            <Tabs
                active={selectedTab}
                setSelectedTab={setSelectedTab}
                tabsList={[
                    'Input',
                    'Data Validation',
                    'Data History'
                ]}
            />

            <div className="grid grid-cols-[2fr_2fr] gap-12 py-8">
                <div className="box">
                    <h3>Select Command Line User </h3>

                    <div className="flex gap-0 flex-col">
                        <FormControlLabel
                            control={<Checkbox size="large" />}
                            label="User 1"
                        />

                        <FormControlLabel
                            control={<Checkbox size="large" />}
                            label="User 1"
                        />

                        <FormControlLabel
                            control={<Checkbox size="large" />}
                            label="User 1"
                        />

                        <FormControlLabel
                            control={<Checkbox size="large" />}
                            label="User 1"
                        />

                    </div>


                </div>

                <div className="box">
                    <h3>Model Adapters </h3>

                    <TextField
                        fullWidth
                        // size="large"
                        placeholder="Model V1"
                        select
                    >
                        <MenuItem selected value="Model V1">Model V1</MenuItem>
                    </TextField>

                    <div className="flex gap-8 mt-8 justify-end">
                        <Button size="small" variant="contained" color="warning" >Unload</Button>
                        <Button size="small" variant="contained" color="info" >Reload</Button>
                        <Button size="small" variant="contained" color="success" >Save</Button>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Access;