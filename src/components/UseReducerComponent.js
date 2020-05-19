import React, { useReducer } from 'react';

const limitRGB = num => (num < 0 ? 0 : num > 255 ? 255 : num);
const step = 50;

const reducer = (state, action) => {
    switch(action.type) {
        case 'INCREMENT_R':
            return Object.assign({}, state, { r: limitRGB(state.r + step) });
        case 'DECREMENT_R':
            return Object.assign({}, state, { r: limitRGB(state.r - step) });
        case 'INCREMENT_G':
            return Object.assign({}, state, { g: limitRGB(state.g + step) });
        case 'DECREMENT_G':
            return Object.assign({}, state, { g: limitRGB(state.g - step) });
        case 'INCREMENT_B':
            return Object.assign({}, state, { b: limitRGB(state.b + step) });
        case 'DECREMENT_B':
            return Object.assign({}, state, { b: limitRGB(state.b - step) });
        default:
            return state;
    }
};

const UseReducerComponent = () => {
    const [{ r, g, b}, dispatch] = useReducer(reducer, { r: 0, g: 0, b: 0 });

    return(
        <div>
            <h1 style={{ color: `rgb(${r}, ${g}, ${b})`}}>useReducer use Example</h1>
            <div>
                <span className="span-r">r</span>
                <button onClick={() => dispatch({ type: 'INCREMENT_R'})}>➕</button>
                <button onClick={() => dispatch({ type: 'DECREMENT_R'})}>➖</button>
            </div>
            <div>
                <span className="span-g">g</span>
                <button onClick={() => dispatch({ type: 'INCREMENT_G'})}>➕</button>
                <button onClick={() => dispatch({ type: 'DECREMENT_G'})}>➖</button>
            </div>
            <div>
                <span className="span-b">b</span>
                <button onClick={() => dispatch({ type: 'INCREMENT_B'})}>➕</button>
                <button onClick={() => dispatch({ type: 'DECREMENT_B'})}>➖</button>
            </div>
        </div>
    );
};

export default UseReducerComponent;