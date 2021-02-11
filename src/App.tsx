import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Counter";
import {StartInput} from "./StartInput";
import {MaxInput} from "./MaxInput";
import {Box, Container, makeStyles, Paper} from "@material-ui/core";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function App() {
    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(5);
    let [counter, setCounter] = useState<number>(0);
    const [warning, setWarning] = useState<string>("");
    const [disabled, setDisabled] = useState<boolean>(false);
    const [disabledInc, setDisabledInc] = useState<boolean>(false);
    const [disabledReset, setDisabledReset] = useState<boolean>(false);

    const classes = useStyles();

    useEffect(() => {

        let startNumberAsString = localStorage.getItem('startValue')
        if (startNumberAsString) {
            let startNumber = JSON.parse(startNumberAsString)
            setStartValue(startNumber)
        }

        let maxNumberAsString = localStorage.getItem('maxValue')
        if (maxNumberAsString) {
            let maxNumber = JSON.parse(maxNumberAsString)
            setMaxValue(maxNumber)
        }

    }, [])

    useEffect(() => {
        localStorage.setItem("startValue", JSON.stringify(startValue))
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
    }, [startValue, maxValue])


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
        <Container fixed style={{height: "100vh"}}>
            <Box display="flex" alignItems="center" justifyContent="center" style={{height: "100vh"}}>
                <Box style={{height: "50%", width: "40%", margin: "20px"}}>
                    <Paper elevation={4} className={classes.root}>
                        <MaxInput changeMaxValue={changeMaxValue}
                                  maxValue={maxValue} startValue={startValue}
                                  title={"Max Input:"}/>

                        <StartInput changeStartValue={changeStartValue} title={"Min Input:"}
                                    startValue={startValue}
                                    maxValue={maxValue}/>

                        <Button variant={"contained"} size={"small"} disabled={disabled}
                                onClick={setValue}> Set</Button>
                    </Paper>
                </Box>

                <Box style={{height: "50%", width: "40%", margin: "20px"}} alignContent="center">
                    <Paper elevation={4} className={classes.root}>
                        <Counter counter={counter} increment={increment} startValue={startValue} maxValue={maxValue}
                                 reset={reset} warning={warning} incorrectValue={!!warning}/>

                        <Button variant={"contained"} size={"small"} disabled={disabledInc}
                                onClick={increment}> inc</Button>
                        <Button variant={"contained"} size={"small"} disabled={disabledReset}
                                onClick={reset}> reset</Button>

                    </Paper>
                </Box>
            </Box>
        </Container>
    )
}

export default App;
