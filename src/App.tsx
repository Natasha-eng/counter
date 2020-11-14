import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter";
import Button from "./Button";


function App() {
    let [counter, setCounter] = useState(0)

    let maxValue = 5
    let minValue = 0

    const IncrementFunc = () => {
        let counterInc = counter + 1;
        if (counter >= maxValue) {
            return;
        }
        setCounter(counterInc);
    }

    const ResetFunc = () => {
        if (counter != minValue) {
            setCounter(0);
        }
    }

    return (
        <div className="App">

            <Counter counter={counter}/>

            <div className={"buttons"}>
                {/* <IncButton IncrementFunc={IncrementFunc} counter={counter}/>
                <ResetButton ResetFunc={ResetFunc} counter={counter}/>*/}
                <Button onClick={IncrementFunc} disabled={counter == maxValue}/>
                <Button onClick={ResetFunc} disabled={counter === minValue}/>
            </div>
        </div>
    );
}

export default App;
