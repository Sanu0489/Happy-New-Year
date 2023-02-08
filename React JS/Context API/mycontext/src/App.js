import React, {createContext, useState} from 'react';
import Child from './Child';
import SuperChild from './SuperChild';

export const GlobalInfo = createContext();

function App() {
  const [color, setColor] = useState('red');
  const [day, setDay] = useState('Monday');
  function updateColor(){
    setColor(color=='red'? 'green' : 'red');
  }
  function getDay(item){
    console.warn(item);
    setDay(item);
  }
  return (
    <GlobalInfo.Provider value={{appColor: color, getDay: getDay}}>
    <div>
      <h1>App Component</h1>
      <Child/>
      <button onClick={updateColor}>Update color</button>
      <h2>Today is <span style={{color: color}}>{day}</span></h2>
    </div>
    </GlobalInfo.Provider>
  );
}

export default App;
