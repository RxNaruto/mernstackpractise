import React, { useState } from "react";

const Sum = () => {
  const [number, setNumber] = useState('');

  const inputNumber = (event) => {
    const input = event.target.value.replace(/[^0-9]/g, '');
    setNumber(findSum(parseInt(input, 10)));
  };

  const findSum = (input) => {
    let sum = 0;
    for (let i = 1; i <= input; i++) {
      sum = sum + i;
    }
    return sum;
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a number"
        value={number}
        onChange={inputNumber}
      />
      <p>Sum is {number}</p>
    </div>
  );
};

export default Sum;
