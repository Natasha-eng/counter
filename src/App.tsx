import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter";
import Button from "./Button";
import {MaxInput} from "./MaxInput";
import {StartInput} from "./StartInput";


function App() {


    let [newStartValue, setNewStartValue] = useState<number>(0)
    let [newMaxValue, setNewMaxValue] = useState<number>(5)
    let [counter, setCounter] = useState<number>(0);
    let [error, setError] = useState<string>("")

    const changeNewMaxValue = (newValue: number) => {
        setNewMaxValue(newValue);
    }

    const changeNewStartValue = (newValue: number) => {
        setNewStartValue(newValue);
    }

    const setValue = () => {
        counter = newStartValue;

        if (counter === newStartValue) {
            setCounter(counter);
        }
    }

    const IncrementFunc = () => {
        let counterInc = counter + 1;
        setCounter(counterInc);

        if (newStartValue) {
            setCounter(counterInc);
        }

        if (counter === newMaxValue) {
            setCounter(counter)
        }

        if (newStartValue < 0) {
            setError("Incorrect value!")
        }
    }

    const ResetFunc = () => {
        if (counter >= newMaxValue) {
            setCounter(0)
        }
    }

    return (
        <div className="App">
            <div className="wrapper">
                <div>
                    <MaxInput changeNewBorderValue={changeNewMaxValue} BorderValue={newMaxValue} title={"Max Input:"}/>
                    <StartInput changeNewBorderValue={changeNewStartValue} BorderValue={newStartValue}
                                title={"Start Input:"}/>
                </div>
                <Button disabled = {counter >= newStartValue || counter === newMaxValue} onClick={setValue} title={"Set"}/>
            </div>

            <Counter  counter={counter} IncrementFunc={IncrementFunc} minValue={newStartValue} maxValue={newMaxValue}
                     ResetFunc={ResetFunc} error = {error} setError = {setError}/>
        </div>
    )
};


export default App;
