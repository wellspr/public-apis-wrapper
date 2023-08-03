import { FC, useRef } from "react";
import Close from "~/icons/close/Close";
import Search from "~/icons/search/Search";

interface TextInputProps {
    className?: string;
    placeHolder?: string;
    label?: string;
}

const TextInput: FC<TextInputProps> = ({ className, placeHolder, label }) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const resetInputText = () => {
        if (inputRef && inputRef.current) {
            inputRef.current.value = "";
            inputRef.current.focus();
        }
    };

    return (
        <div className={className ? `text-input ${className}` : `text-input`}>
            <input
                id="term-input"
                type="text"
                name="term"
                placeholder={placeHolder}
                ref={inputRef}
            />
            <button
                name="search button"
                aria-label="search button"
                className="input-icon input-icon__left"
                type="button"
                >
                <Search />
            </button>
            <button
                className="input-icon input-icon__right"
                type="button"
                onClick={resetInputText}>
                <Close />
            </button>
            <label htmlFor="term-input">{label}</label>
        </div>
    );
};

export default TextInput;