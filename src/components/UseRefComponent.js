import React, { useState, useRef } from 'react';

const UseRefComponent = () => {
    const [stateNumber, setStateNumber] = useState(0);
    const numRef = useRef(0);

    function incrementAndDelayLogging() {
        setStateNumber(stateNumber + 1);
        numRef.current++;
        setTimeout(
            () => alert(`state: ${stateNumber} | ref: ${numRef.current}`),
            1000
        );
    }

    return (
        <div>
            <h1>useRef use Example</h1>
            <button onClick={incrementAndDelayLogging}>delay loggin</button>
            <h4>state: {stateNumber}</h4>
            <h4>ref: {numRef.current}</h4>
            <hr />
        </div>
    );
};

export default UseRefComponent;