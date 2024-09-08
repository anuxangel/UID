import React, { useState } from 'react';
import './Calculator.css'; // Optional, for styling

const Calculator = () => {
  // State variables
  const [input, setInput] = useState(''); // Store user input
  const [result, setResult] = useState(''); // Store the result

  // Function to handle button clicks
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Function to handle the calculation
  const calculateResult = () => {
    try {
      // Evaluate the expression using eval (not recommended for production)
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  // Function to clear the input and result
  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>

        <button onClick={clearInput}>C</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
    </div>
  );
};

export default Calculator;
