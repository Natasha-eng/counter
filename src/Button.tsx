import React from "react";

type ButtonProps = {
    onClick: () => void
    title: string
    disabled: boolean
}

function Button(props: ButtonProps) {
    return (
        <div className={"button"}>
            <button disabled={props.disabled} onClick={props.onClick}>{props.title}</button>
        </div>
    );
}

export default Button;