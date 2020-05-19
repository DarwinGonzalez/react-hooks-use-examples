import React, { useState, useMemo } from 'react';

const fibonacci = n => {
    if (n <= 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
};

const UseMemoComponent = () => {
    const [num, setNum] = useState(1);
    const [isGreen, setIsGreen] = useState(true);
    const fib = useMemo(() => fibonacci(num), [num]);

    return (
        <div>
            <h1
                onClick={() => setIsGreen(!isGreen)}
                style={{ color: isGreen ? 'limegreen' : 'crimson', cursor: 'pointer' }}>
            useMemo use Example
            </h1>
            <h2>
                Fibpnacci of {num} is {fib}
            </h2>
            <button onClick={() => setNum(num + 1)}>➕</button>
            <hr />
        </div>
    );
};

export default UseMemoComponent;