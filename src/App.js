import { useState } from "react";

// import { add } from "@pradumna.bajoria/arithmetic.operations";
import "./App.css";

const Add = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <div className="operation">
      <span>Add:</span>
      <input
        className="input"
        type="number"
        placeholder="Value 1"
        value={value1}
        onChange={(e) => {
          setValue1(e.target.valueAsNumber);
          setResult(value2 + e.target.valueAsNumber);
          // setResult(add(value2, e.target.valueAsNumber));
        }}
      />
      <span>+</span>
      <input
        className="input"
        type="number"
        placeholder="Value 2"
        value={value2}
        onChange={(e) => {
          setValue2(e.target.valueAsNumber);
          setResult(value1 + e.target.valueAsNumber);
          // setResult(add(value1, e.target.valueAsNumber));
        }}
      />
      <span>=</span>
      <input
        className="input"
        type="number"
        placeholder="Result"
        value={result}
        disabled
      />
    </div>
  );
};

const Multiply = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <div className="operation">
      <span>Multiply:</span>
      <input
        className="input"
        type="number"
        placeholder="Value 1"
        value={value1}
        onChange={(e) => {
          setValue1(e.target.valueAsNumber);
          setResult(value2 * e.target.valueAsNumber);
          // setResult(multiply(value2, e.target.valueAsNumber));
        }}
      />
      <span>x</span>
      <input
        className="input"
        type="number"
        placeholder="Value 2"
        value={value2}
        onChange={(e) => {
          setValue2(e.target.valueAsNumber);
          setResult(value1 * e.target.valueAsNumber);
          // setResult(multiply(value1, e.target.valueAsNumber));
        }}
      />
      <span>=</span>
      <input
        className="input"
        type="number"
        placeholder="Result"
        value={result}
        disabled
      />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Add />
      <Multiply />
    </div>
  );
}

export default App;
