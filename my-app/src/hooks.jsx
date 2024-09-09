import React, { useState } from 'react'

function Hooks() {
    const [count, setCount] = useState(0);
  return (
    <>
      <p>Click Count: {count}</p>
      <button onClick={() => {setCount(count+1)}}>Click me</button>
      <button onClick={() => {setCount(count-1)}}>Reduce</button>
    </>
  )
}

export default Hooks


