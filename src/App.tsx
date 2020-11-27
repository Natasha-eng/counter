import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter";
import {StartInput} from "./StartInput";
import {MaxInput} from "./MaxInput";
import Button from "./Button";

function App() {
    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(5);
    let [counter, setCounter] = useState<number>(0);
    const [warning, setWarning] = useState<string>("");
    const [disabled, setDisabled] = useState<boolean>(false);
    const [disabledInc, setDisabledInc] = useState<boolean>(false);
    const [disabledReset, setDisabledReset] = useState<boolean>(false);

    const changeMaxValue = (newValue: number) => {

        setMaxValue(newValue);
        setDisabled(false)
        setDisabledInc(true);
        setDisabledReset(true);

        let incorrectValue = startValue < 0 || startValue >= newValue;

        if (incorrectValue) {
            setWarning("Incorrect value!");
            setDisabled(!disabled)
        } else {
            setWarning("Enter values and press 'set'");
            setDisabledInc(true);
            setDisabledReset(true);

        }
    }

    const changeStartValue = (newValue: number) => {

        setStartValue(newValue);
        setDisabled(false);
        setDisabledInc(false);
        setDisabledReset(false);

        let incorrectValue = newValue < 0 || newValue >= maxValue;

        if (incorrectValue) {
            setWarning("Incorrect value!");
            setDisabled(true)
            setDisabledInc(true);
            setDisabledReset(true);
        } else {
            setWarning("Enter values and press 'set'");
            setDisabledInc(true);
            setDisabledReset(true);
        }
    }

    const setValue = () => {
        setCounter(startValue);
        setWarning("");
        setDisabled(!disabled);
        setDisabledInc(false);
        setDisabledReset(false);
    }

    const increment = () => {
        if (counter === maxValue || startValue < 0 || startValue >= maxValue) {
            setDisabledInc(true);
        } else setCounter(counter + 1)
    }

    const reset = () => {
        setCounter(startValue)
        setDisabledInc(false);
    }


    return (
        <div className="App">
            <div className="wrapper">
                <MaxInput changeMaxValue={changeMaxValue}
                          maxValue={maxValue} startValue={startValue}
                          title={"Max Input:"}/>

                <StartInput changeStartValue={changeStartValue} title={"Min Input:"}
                            startValue={startValue}
                            maxValue={maxValue}/>

                <Button disabled={disabled} onClick={setValue} title={"Set"}/>

            </div>
            <div className={"wrapper"}>
                <Counter counter={counter} increment={increment} startValue={startValue} maxValue={maxValue}
                         reset={reset} warning={warning} incorrectValue={!!warning}/>

                <Button disabled={disabledInc}
                        onClick={increment} title={"inc"}/>
                <Button disabled={disabledReset} onClick={reset} title={"reset"}/>

            </div>
        </div>
    )
}

export default App;
