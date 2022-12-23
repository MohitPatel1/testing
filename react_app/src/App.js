import './App.css';
import React from 'react';
import { useState } from 'react';
import List from './List';

function App() {
    const [count, setCount] = useState(0);
    const [mcount, setMcount] = useState(0);
    const handleClick = () => {
      setCount(count + 3);
        setCount(count + 2);
      }
      // updater function
      const handleMultipleClick = () => {
        setMcount((prevCount) => prevCount + 1)
        setMcount((prevCount) => prevCount + 1)
      setMcount((prevCount) => prevCount + 1)
    }
        
    return(
      <div>
            <button onClick={handleClick}>count:{count}</button>
            <button onClick={handleMultipleClick}>mcount:{mcount}</button>
              <List />
        </div>

    )

    // let text = "mohit"
    // return(
    //   <div>
    //     <span>
    //       {text}
    //     </span>
    //   </div>
    // )
}


export default App;
