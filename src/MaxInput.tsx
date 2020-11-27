<<<<<<< HEAD
import React, {ChangeEvent} from "react";


type InputProps = {
    changeMaxValue: (newValue: number) => void
    maxValue: number
    startValue: number
=======
import React, {ChangeEvent, useState} from "react";

type InputProps = {
    changeNewBorderValue: (newValue: number) => void
    BorderValue: number
>>>>>>> origin/main
    title: string
}

export function MaxInput(props: InputProps) {
<<<<<<< HEAD

    const onMaxInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMaxValue(+e.currentTarget.value);
    }

    let maxInputMistake = props.maxValue < 0 || props.maxValue <= props.startValue ? "MaxMistakeInput" : "Input";

    return (
        <div className="input">

            {props.title} <input className={maxInputMistake} type={"number"}
                                 onChange={onMaxInputChangeHandler} value={props.maxValue}/>
=======
    const [Maxvalue, setMaxValue] = useState<number>(0)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value);
        props.changeNewBorderValue(Maxvalue);
    }

    return (
        <div className="input">

            {props.title} <input type={"number"} onChange={onChangeHandler} value={props.BorderValue} onBlur={(e) => {
            setMaxValue(Number(e.currentTarget.value))
        }} autoFocus/>
>>>>>>> origin/main

        </div>
    );
}
