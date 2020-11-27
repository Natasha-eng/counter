<<<<<<< HEAD
import React, {ChangeEvent} from "react";

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

            {props.title} <input className={startInputMistake} type={"number"} onChange={onStartInputChangeHandler}
                                 value={props.startValue}
                                 autoFocus/>
=======
import React, {ChangeEvent, useState} from "react";

type InputProps = {
    changeNewBorderValue: (newStartValue: number) => void
    BorderValue: number
    title: string
}

export function StartInput(props: InputProps) {

    const [StartValue, setStartValue] = useState<number>(0)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value);

        props.changeNewBorderValue(StartValue);
    }

    return (
        <div className="input">

            {props.title} <input type={"number"} onChange={onChangeHandler} value={props.BorderValue} onBlur={(e) => {
            setStartValue(Number(e.currentTarget.value))
        }} autoFocus/>
>>>>>>> origin/main

        </div>

    );
}

<<<<<<< HEAD

=======
>>>>>>> origin/main
