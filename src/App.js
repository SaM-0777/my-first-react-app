import { useState, useEffect } from "react";


const Person = (props) => {
  return (
    <>
      <h1>Name : { props.name }</h1>
      <h2>Last Name : {props.lastName}</h2>
      <h3>Age : {props.age}</h3>
    </>
  )
}

function App() {

  const [counter, setCounter] = useState(0)
  const [time, setTime] = useState()

  useEffect(() => {
    setCounter(100)
  }, [])

  return (
    <div className="App">
      <Person name='Sam' lastName='Sahu' age='20' />
      <Person name='Rahul' lastName='Sahu' age='19' />
      <div>
        <button onClick={() => setCounter((prevCount) => prevCount - 1)} >-</button>
        <h2>{ counter }</h2>
        <button onClick={() => setCounter((prevCount) => prevCount + 1)} >+</button>
      </div>
      <div>
        <h3>{ time }</h3>
      </div>
    </div>
  );
}

export default App;
