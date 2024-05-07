import React from 'react'
`import PropTypes from 'prop-types`
import { useState } from 'react';

const Counter = () => {
const [count, setCount]= useState(0);

const handleIncreament = () => {
setCount(count + 1);

};


const handleDercreament = () => {
    setCount(count - 1);
};
  return (
    <div>
        <button onClick={() => handleIncreament()}>INCREMENT</button>
        <span>{count}</span>
        <button onClick={() => handleDercreament()}>DECREMENT</button>
    </div>
  )
}

export default Counter