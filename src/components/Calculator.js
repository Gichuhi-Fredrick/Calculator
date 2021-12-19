import React, { useState } from 'react';
import NumberPad from './NumberPad';
import Header from './Header';
import Display from './Display';
// import '../css/header.css';
// import '../css/calculator.css';
import '../css/theme-light.css';
// import '../css/theme-purple.css';

// export const CalcContext = React.createContext();

export default function Calculator() {
  const [btnValues, setBtnValues] = useState('');
  const [result, setResult] = useState('');

  const ops = ['/', '*', '+', '-', '.'];

  function handleDelete() {
    if (btnValues !== '') {
      setBtnValues(btnValues.slice(0, btnValues.length - 1));
    }
  }

  function handleClick(e, value) {
    value = e.target.value;

    if (
      (ops.includes(value) && btnValues === '') ||
      (ops.includes(value) && ops.includes(btnValues.slice(-1)))
    ) {
      return;
    }

    setBtnValues(btnValues + value);

    if (!ops.includes(value)) {
      setResult(eval(btnValues + value).toString());
    }
  }

  function handleTotal() {
    setResult(eval(btnValues).toString());
  }

  function handleReset() {
    setBtnValues('');
    setResult('');
  }

  return (
    <div className="calculator">
      <div className="container">
        <Header></Header>
        <Display value={btnValues} result={result}></Display>
        <NumberPad
          handleClick={handleClick}
          handleDelete={handleDelete}
          handleReset={handleReset}
          handleTotal={handleTotal}
        ></NumberPad>
      </div>
    </div>
  );
}
