import React, { useCallback, useMemo, useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  const [item, setItem] = useState(0);
  const [name, setName] = useState('');

  const increment = ()=>{
    setCount(count + 1);
  } 

  const multiMemo = useMemo(function MultiCount() {
    console.warn('Multiply function is rendering');
    return count * 2;
  }, [count])

  const updatedName = useCallback(function updateName(e) {
    setName(e.target.value);
    console.warn('updateName function is rendering');
  }, [name])


  return (
    <div className="App">
      <h1>UseMemo example</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => increment()}>Update Count</button>
      <h2>Item : {item}</h2>
      <button onClick={() => setItem(item + 1)}>Update Item</button>
      <h2>Multiplied Value : {multiMemo}</h2>
      <input type="text" value={name} onChange={updatedName} />
      <h3>My Name is : <span style={{ color: 'green' }}>{name}</span></h3>
    </div>
  );
}

export default App;
