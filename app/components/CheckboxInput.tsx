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

    return (
        <div className="field-input">
            <label 
                htmlFor={`field-${name}`} 
                tabIndex={0}
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