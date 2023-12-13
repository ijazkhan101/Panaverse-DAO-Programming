import React from 'react'
import { useState } from 'react'
export const CounterComponent = () => {

    const [counter , setCounter] = useState(15)
    //let counter = 15
  
    const addValue = () => {
      console.log('clicked',counter);
      setCounter(counter+1)
    }
  
    const removeValue = () => {
      console.log('clicked',counter);
      setCounter(counter-1)
    }

  return (
    <>
     <>
    <h1> React Counter Project </h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue}>Add Value {counter} </button>
    <br />
    <button onClick={removeValue}> Remove Value {counter}</button>
    </>
    
    </>
  )
}
