import { FC, useState } from "react";
import Box from "~/icons/box/Box";
import Check from "~/icons/check/Check";

interface CheckboxInputProps {
    name: string,
    initialState: boolean,
    label: string
}

const CheckboxInput: FC<CheckboxInputProps> = ({ name, initialState, label }) => {

    const [fieldChecked, setFieldChecked] = useState(initialState);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLLabelElement>) => {
        const key = event.code;

        if (key === "Enter" || key === "Space") {
            event.preventDefault();
            setFieldChecked(!fieldChecked);
        }
    };

    return (
        <div className="field-input">
            <label 
                htmlFor={`field-${name}`} 
                tabIndex={0}
                onKeyDown={e => handleKeyDown(e)}
                >
                {fieldChecked ? <Check /> : <Box />}
                <input
                    id={`field-${name}`}
                    type="checkbox"
                    name={`${name}`}
                    value={`${name}`}
                    checked={fieldChecked}
                    onChange={e => setFieldChecked(e.target.checked)}
                    hidden
                />
                <span>{ label }</span>
            </label>
        </div>
    );
};

export default CheckboxInput;