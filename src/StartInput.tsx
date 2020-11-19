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

        </div>

    );
}

