import './App.css';
import React, {useState, useEffect, useMemo} from 'react';

function useLogger(value) {
    useEffect(()=> {
        console.log('Value changed:', value);
    }, [value])
}

function useInput (initialValue) {
    const [value, setValue] = useState('');

    const onChange = event => {
        setValue(event.target.value)
    }

    return {
        value, onChange
    }
}
function App() {
    const input = useInput('');

    useLogger(input.value);

    return (
        <div className={'container pt-3'}>
            <input type='text' value={input.value} onChange={input.onChange}/>
            <h1>{input.value}</h1>
        </div>
        )
    }

export default App;
