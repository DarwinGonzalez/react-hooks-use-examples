import React, { useState } from 'react';

const UseStateComponent = () => {
    const [isGreen, setIsGreen] = useState(true);

    return (
        <>
            <h1
                onClick={() => setIsGreen(!isGreen)}
                style={{ color: isGreen ? 'limegreen' : 'crimson'}}>
                useState use Example
            </h1>
            <hr/>
        </>
    )
}

export default UseStateComponent;