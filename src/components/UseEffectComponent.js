import React, { useState, useEffect } from 'react';

const UseEffectComponent = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setTimeout(setTime(new Date()), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <h1>
                useEffect use Example: { time.toLocaleTimeString() }
            </h1>
            <hr/>
        </>
    );
}

export default UseEffectComponent;