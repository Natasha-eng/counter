import React, {ChangeEvent} from "react";
import {TextField} from "@material-ui/core";

type InputPropsType = {
    changeStartValue: (newValue: number) => void
    startValue: number
    maxValue: number
    title: string
}

export function StartInput(props: InputPropsType) {
    const onStartInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeStartValue(+e.currentTarget.value);
    }
    let startInputMistake = props.startValue < 0 || props.maxValue <= props.startValue ? "StartMistakeInput" : "Input";
    return (
        <div className="input">

            {props.title} <TextField className={startInputMistake} label="Number" type={"number"} variant="filled"
                                     onChange={onStartInputChangeHandler}
                                     value={props.startValue}
                                     autoFocus/>

        </div>

    );
}


