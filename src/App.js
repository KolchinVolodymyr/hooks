import './App.css';
import React, {useState, useEffect, useMemo} from 'react';

function complexCompute(num) {
    let i = 0
    while(i<1000000000) i++
    return num*2
}

function App() {

    const [number, setNumber] = useState(42);
    const [colored, setColored] = useState(false);

    const styles = useMemo(()=>({
        color: colored ? 'darkred' : 'black'
    }), [colored])

    const computed = useMemo(()=>{
        return complexCompute(number)
    }, [number])

    useEffect(()=>{
        console.log('Style changed')
    }, [styles])

    return (
        <div>
            <h1 style={styles}>Count: {computed}</h1>
            <button className="btn btn-success" onClick={()=>{setNumber(prev=>prev+1)}}>+</button>
            <button className="btn btn-success" onClick={()=>{setNumber(prev=>prev-1)}}>-</button>
            <button className="btn btn-success" onClick={()=>{setColored(prev=>!prev)}}>Change</button>
        </div>
        )
    }

export default App;
