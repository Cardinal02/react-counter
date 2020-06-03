import React, { useState } from "react";
//import ReactCSSTransitionGroup from "react-transition-group";

function App() {
  const [count, setCount] = useState(0);
  const [name, setIncrement] = useState(1);
  function handleChange(event) {
    console.log(event.target.value);
    let i = setIncrement(event.target.value);
    return i;
  }
  function increase() {
    setCount(count + Number(name));
  }

  function decrease() {
    setCount(count - Number(name));
  }

  function reset() {
    setCount(0);
  }
  return (
    <div className="container">
      <h1 className="heading">Counter</h1>
      <h3 className="count">{count} </h3>
      <div className="button-panel">
        <button onClick={increase}>Add {name}</button>
        <button onClick={decrease}>Subtract {name}</button>
        <button onClick={reset}>Reset</button>
      </div>
      <form>
        <label>
          Counter increment
          <select className="increment" value={name} onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </label>
      </form>
    </div>
  );
}
export default App;
