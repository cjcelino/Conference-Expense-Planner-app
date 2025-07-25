import React from 'react';
import '../App.css';

interface CounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const Counter: React.FC<CounterProps> = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className="counter">
      <button onClick={onDecrement}>-</button>
      <span>{count}</span>
      <button onClick={onIncrement}>+</button>
    </div>
  );
};

export default Counter;
