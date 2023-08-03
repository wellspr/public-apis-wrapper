import { forwardRef } from "react";

type ButtonProps = JSX.IntrinsicElements["button"];

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    return (
        <button
            className={props.className ? `button ${props.className}` : "button"}
            ref={ref}>
            { props.children }
        </button>
    );
});

export default Button;