import React, { useState } from "react";
import { hot } from "react-hot-loader";

export const App = hot(module)(() => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((counter) => counter + 1);
  const decrement = () => setCounter((counter) => counter - 1);

  return (
    <div>
      <h1>Welcome to Counter:</h1>
      <h2 className={counter >= 5 ? "warning" : ""}>Counter: {counter}</h2>
      <button type="button" onClick={decrement}>
        -1
      </button>
      <button type="button" onClick={increment}>
        +1
      </button>
    </div>
  );
});
