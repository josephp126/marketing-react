import React, {useEffect, useState, useReducer} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

function Counter({name}) {
  const numbers = [1, 2, 3, 4, 5, 6];
  const sum = numbers.reduce((total, num) => total + num, 0);
  const truth = numbers.filter(Boolean).length;
  const a = 1;
  console.log(numbers.flatMap(val => val/3));
  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setCount(name + 1);
      
  //   }, 1000);
  //   console.log('inside');
  //   return () => clearInterval(id);
  // }, [name]);
  return <h1>success</h1>;
}

// function Counter({ step }) {  
//   const [count, dispatch] = useReducer(reducer, 0);

//   function reducer(state, action) {
//     console.log(state, action);
//     if (action.type === 'tick') {
//       return state + step;    } else {
//       throw new Error();
//     }
//   }

//   useEffect(() => {
//     const id = setInterval(() => {
//       dispatch({ type: 'tick' });
//     }, 1000);
//     return () => clearInterval(id);
//   }, [dispatch]);

//   return <h1>{count}</h1>;
// }

ReactDOM.render(
  <Counter step={2} />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
