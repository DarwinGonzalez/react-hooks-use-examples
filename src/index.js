import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import UseStateComponent from './components/UseStateComponent';
import UseEffectComponent from './components/UseEffectComponent';
import ContextComponent from './components/UseContextComponent';
import UseRefComponent from './components/UseRefComponent';
import UseReducerComponent from './components/UseReducerComponent';
import UseMemoComponent from './components/UseMemoComponent';
import UserCallbackComponent from './components/UseCallbackComponent';
import UseLayoutEffectComponent from './components/useLayoutEffectComponent';

function App () {
    return (
        <div className="App">
            <UseStateComponent />
            <UseEffectComponent />
            <ContextComponent />
            <UseRefComponent />
            <UseReducerComponent />
            <UseMemoComponent />
            <UserCallbackComponent />
            <UseLayoutEffectComponent />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);