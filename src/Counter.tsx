import React from "react";


type PropsType = {
    counter: number;
}

function Counter(props: PropsType) {
    const counterStyle = (props.counter === 5) ? "counterStyle" : "style"
    return (
        <div className="counter">
            <div className={counterStyle}>{props.counter}</div>
        </div>
    );
}

export default Counter;