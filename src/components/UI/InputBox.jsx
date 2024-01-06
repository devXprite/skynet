import { Button, Checkbox, FormControlLabel, MenuItem, Slider, TextField } from "@mui/material";

const InputBox = ({ type, name, ...props }) => {

    if (type == 'button') {
        return (
            <>
                <h3>{name}</h3>
                <Button
                    variant="contained"
                    color={props.color || 'primary'}
                    size={props.size || 'medium'}
                    fullWidth={props.fullWidth ?? true}
                >
                    {name}
                </Button>
            </>
        )
    }

    if (type == 'slider') {
        return (
            <>
                <div className="flex items-center justify-between">
                    <h4 className="mr-auto">{name}</h4>
                    <TextField
                        // type="number"
                        size="small"
                        className="w-10"
                        placeholder="1"
                    />
                </div>
                <Slider defaultValue={30} />
            </>
        );
    }

    if (type == 'checkbox') {
        return (
            <>
                <FormControlLabel
                    control={<Checkbox
                        size={props.size || 'medium'}
                    />}
                    label={name}
                    className="mt-2"
                />
            </>
        );
    }

    console.log(props);


    return (
        <>
            <h3>{name}</h3>
            <TextField
                placeholder={name}
                type={type || 'text'}
                size={props.size || 'small'}
                fullWidth={props.fullWidth ?? true}
                rows={props.rows}
                minRows={props.minRows || 3}
                maxRows={props.maxRows || 10}
                select={props.select ?? false}
                multiline={type == 'textarea' ? true : false}
            >

                {props.select && props.options.map((option, i) => (
                    <MenuItem key={i} value={option}>
                        {option}
                    </MenuItem>
                ))}

            </TextField>
        </>
    );
}

export default InputBox;