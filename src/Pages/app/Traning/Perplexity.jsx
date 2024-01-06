import { TextField, Slider, Button } from "@mui/material";

const Perplexity = () => {
    return (
        <div className="page">
            <div className="wrapper col border-none shadow-none">

                <div className="box col-span-2">
                    <h4>Models</h4>
                    <TextField size="small" fullWidth select />
                </div>

                <div className="box col-span-2">
                    <h4>Input DataSet</h4>
                    <TextField size="small" fullWidth select />
                </div>

                <div className="box">
                    <div className="flex items-center justify-between"><h4 className="mr-auto">Stride</h4><TextField size="small" placeholder="1" className="w-10" /></div>
                    <Slider defaultValue={30} />
                </div>

                <div className="box">
                    <div className="flex items-center justify-between"><h4 className="mr-auto">Max Length</h4><TextField size="small" placeholder="1" className="w-10" /></div>
                    <Slider defaultValue={70} />
                </div>

                <div className="btn-container col-span-2">
                    <Button variant="contained" >Evaluate Loaded Model</Button>
                    <Button variant="contained" >Evaluate Selected Model</Button>
                    <Button variant="contained" >Interrupt</Button>
                </div>
            </div>
        </div>
    );
}

export default Perplexity; 