import React, { useRef, useState } from 'react';
import './style.css';

export default function App() {
  let a = 0;

  let [count, setCount] = useState(0);
  let countRef = useRef(a);

  const func = () => {
    a++;
    countRef.current.innerHTML = a;
    setCount(count++);
  };

  return (
    <div>
      <h1>useRef 공부</h1>
      <div>{count}</div>
      <div ref={countRef}>{a}</div>
      <button onClick={func}> 버튼 </button>
    </div>
  );
}
