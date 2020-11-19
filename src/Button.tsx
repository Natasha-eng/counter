import React from "react";


type ButtonPorps = {
    onClick: () => void
    title: string
    disabled: boolean
}

function Button(props: ButtonPorps) {
    return (
        <div className={"button"}>
            <button disabled = {props.disabled} onClick={props.onClick}>{props.title}</button>
        </div>
    );
}

export default Button;