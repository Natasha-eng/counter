import React, {ChangeEvent, useState} from "react";

type InputProps = {
    changeNewBorderValue: (newValue: number) => void
    BorderValue: number
    title: string
}

export function MaxInput(props: InputProps) {
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

        </div>
    );
}
