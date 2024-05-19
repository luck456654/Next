// pages/test.js
import { useSelector, useDispatch } from 'react-redux';

const Test = () => {
  const counter = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const increment = () => dispatch({ type: 'counter/increment' });
  const decrement = () => dispatch({ type: 'counter/decrement' });

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Test;