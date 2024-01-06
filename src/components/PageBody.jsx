import { Box, Button, Checkbox, FormControlLabel, MenuItem, Paper, Slider, TextField } from "@mui/material";
import InputBox from "./UI/InputBox";

const PageBody = ({ pageData }) => {
    return (
        <>
            {pageData.wrappers.map((wrapper, i) => (
                // check col span
                <div key={i} className={`wrapper ${wrapper.name ? '' : 'no-bg'} ${wrapper.span ? `col-span-${wrapper.span}` : ''}`}>

                    {wrapper.name && <h2>{wrapper.name}</h2>}

                    <div className="content">
                        {wrapper.boxes.map((box, index) => (
                            <div className={`box ${box.span ? `col-span-${box.span}` : ''}`} key={index}>
                                {box.name && <h3>{box.name}</h3>}
                                {box.fields.map((field, i) => (
                                    <>
                                        <InputBox key={i} {...field} />
                                        {/* there shoud be a next field and next field should not checkbox */}
                                        {i < box.fields.length - 1 && box.fields[i + 1].type != 'checkbox' && <hr />}
                                    </>
                                ))}

                            </div>
                        ))}
                    </div>

                    {wrapper.actions && <div className="btn-container">
                        {wrapper.actions.map((action, i) => (
                            <Button key={i} color={action.color} variant="contained">{action.name}</Button >
                        ))}
                    </div>}

                </div>
            ))}
        </>
    );
}

export default PageBody;