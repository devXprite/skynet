const InputField = (prop) => {
    return (
        <div className="my-5" >
            <label
                htmlFor={prop.name}
                className="text-sm md:text-base block my-1 text-neutral-200"
            >{prop.label}</label>
            <input
                type={prop.type}
                name={prop.name}
                placeholder={prop.placeholder || prop.label}
                className="input text-base md:text-lg w-full"
                autoSave={prop.name}
                autoComplete={prop.name}
                autoFocus={prop.autoFocus || false}
                required={true}
            />
        </div>
    );
}

export default InputField;