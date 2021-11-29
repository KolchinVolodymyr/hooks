import './App.css';
import React, {useState, useEffect, useRef} from 'react';

let renderCount = 1

function App() {

   // const [renderCount, setRenderCount] = useState();
    const [value, setValue] = useState('initial');
    const renderCount = useRef(1);

    useEffect(()=>{
        renderCount.current++
    })
    return (
        <div>
            <h1>Render Count: {renderCount.current}</h1>
            <input type="text" onChange={e => setValue(e.target.value)} value={value}/>
        </div>
        )
    }

export default App;
