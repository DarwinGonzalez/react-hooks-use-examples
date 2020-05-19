import React, { useState, useContext, createContext } from "react";

const UserContext = createContext([
  {
    firstName: "Anakin",
    lastName: "Skywalker",
    suffix: 1,
    email: "imyoutfather@gmail.com"
  },
  obj => obj
]);

const LevelFive = () => {
    const [user, setUser] = useContext(UserContext);

    return(
        <div>
            <h5>{`${user.firstName} ${user.lastName} the ${user.suffix} born`}</h5>
            <button
                onClick={() => {
                    setUser(Object.assign({}, user, { suffix: user.suffix + 1
                }));
            }}>
                Increment suffix
            </button>
        </div>
    )
};

const LevelFour = () => (
    <div>
        <h4>Fourth level</h4>
        <LevelFive />
    </div>
);

const LevelThree = () => (
    <div>
        <h4>Third level</h4>
        <LevelFour />
    </div>
);

const LevelTwo = () => (
    <div>
        <h4>Second level</h4>
        <LevelThree />
    </div>
);

const ContextComponent = () => {
    const userState = useState({
        firstName: "Luke",
        lastName: "Skywalker",
        suffix: 1,
        email: "imyoutson@gmail.com"
    });

    return (
        <UserContext.Provider value={userState}>
            <h1>first level</h1>
            <LevelTwo />
        </UserContext.Provider>
    );
};

export default ContextComponent;