import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
//    const [counter, setCounter] = useState(0);
//    function increment() {
////        setCounter(counter+1)
////        setCounter(counter+1)
//        setCounter((prevCounter)=>{
//            return prevCounter + 1
//        })
//        setCounter(prev => prev +1)
//    }
//    function decrement() {
//        setCounter(counter-1)
//    }
    const [type, setType] = useState('users');
    const [data, setData] = useState('users');
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
         .then(response => response.json())
         .then(json => setData(json))
    }, [type])
    return (
        <div>
            <h1>Ресурс: {type}</h1>
            <button onClick={()=>{setType('users')}}>Users</button>
            <button onClick={()=>{setType('todos')}}>Todo</button>
            <button onClick={()=>{setType('posts')}}>Post</button>
            <pre>{JSON.stringify(data, null, )}</pre>
        </div>
        )
    }

export default App;
