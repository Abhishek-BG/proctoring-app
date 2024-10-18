// src/App.js
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';

function App() {
  const count = useSelector((state)=>state.count);
  const dispatch = useDispatch();
  const increment =()=>{
    dispatch({type:'INCREMENT',payload:1})
  };
  const decrement =()=>{
    dispatch({type:'DECREMENT',payload:1})
  };
  return (
    <div className="App">
      <h1>Installations </h1>
      <h3><ol>
        <li>npm install redux react-redux</li>
        <li>Implementation of Reducer over React using Redux</li>
        <li>Count:{count}</li>
        <li>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        </li>
       
        
        </ol></h3>
    </div>
  );
}

export default App;
