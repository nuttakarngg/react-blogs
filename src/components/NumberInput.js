import { useState } from "react";

function NumberInput(props) {
  let [number_1, setNumber1] = useState(props.initialValue);
  function increase() {
    setNumber1(number_1 + props.increaseBy);
  }
  function decrease() {
    setNumber1(number_1 - 1);
  }
  return (
    <div>
      <button onClick={decrease}>Decrease</button>
      <div>
        <input type="text" value={number_1} />
      </div>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default NumberInput;
