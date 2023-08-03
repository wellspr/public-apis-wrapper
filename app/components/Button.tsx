import React, { forwardRef } from "react";

type ButtonProps = React.JSX.IntrinsicElements["button"];

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    return (
        <button
            type="button"
            { ...props }
            className={props.className ? `button ${props.className}` : "button"}
            ref={ref}>
            { props.children }
        </button>
    );
});

export default Button;