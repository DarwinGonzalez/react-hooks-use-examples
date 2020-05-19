import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import "./styles.css";
import UseStateComponent from "./components/UseStateComponent";
import UseEffectComponent from "./components/UseEffectComponent";
import ContextComponent from "./components/UseContextComponent";
import UseRefComponent from "./components/UseRefComponent";
import UseReducerComponent from "./components/UseReducerComponent";
import UseMemoComponent from "./components/UseMemoComponent";
import UserCallbackComponent from "./components/UseCallbackComponent";
import UseLayoutEffectComponent from "./components/useLayoutEffectComponent";

function App() {
  return (
    <>
      <div className="header">
        <a className="logo">
            React Hooks
        </a>
        <div className="header-right">
          <Link className="Nav_link" to="/useState">
            useState
          </Link>
          <Link className="Nav_link" to="/useEffect">
            useEffect
          </Link>
          <Link className="Nav_link" to="/userContext">
            userContext
          </Link>
          <Link className="Nav_link" to="/useRef">
            useRef
          </Link>
          <Link className="Nav_link" to="/useReducer">
            useReducer
          </Link>
          <Link className="Nav_link" to="/useMemo">
            useMemo
          </Link>
          <Link className="Nav_link" to="/useCallback">
            useCallback
          </Link>
          <Link className="Nav_link" to="/useLayoutEffect">
            useLayoutEffect
          </Link>
        </div>
      </div>
      <br></br>
      <div className="App">
        <Router>
          <UseStateComponent path="/useState" />
          <UseEffectComponent path="/useEffect" />
          <ContextComponent path="/userContext" />
          <UseRefComponent path="/useRef" />
          <UseReducerComponent path="/useReducer" />
          <UseMemoComponent path="/useMemo" />
          <UserCallbackComponent path="/useCallback" />
          <UseLayoutEffectComponent path="/useLayoutEffect" />
        </Router>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
