import React from "react";


type ButtonPorps = {
    onClick: () => void
    disabled: boolean

}

function Button(props: ButtonPorps) {
    return (
        <div className={"buttons"}>
            <button disabled={props.disabled} onClick={props.onClick}>inc button</button>

        </div>
    );
}

export default Button;