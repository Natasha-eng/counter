import React from "react";
import Button from "./Button";


type CounterPropsType = {
    counter: number;
    IncrementFunc: () => void
    maxValue: number
    minValue: number
    ResetFunc: () => void
    error: string
    setError: (error: string)=> void

}

function Counter(props: CounterPropsType) {
    const counterStyle = (props.counter === props.maxValue) ? "counterStyle" : "CounterResult"
    return (
        <div className="wrapper">
            <div className={counterStyle}>{props.counter}</div>
            <div className="CounterButtons">
                <Button disabled = {props.counter === props.maxValue} onClick={props.IncrementFunc} title={"inc"}/>
                <Button disabled = {false} onClick={props.ResetFunc} title={"reset"}/>
            </div>
        </div>
    );
}

export default Counter;