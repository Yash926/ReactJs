import React, { useState } from 'react'

function Addition() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [sum, setSum] = useState(0);

    function calculate() {
        let sum = parseInt(num1) + parseInt(num2);
        setSum(sum);
    }
  return (
    <div>

        <h1>Addition</h1>

        <label htmlFor="num1">Number 1: </label>
        <input onChange={(e) => setNum1(e.target.value)} type="text" placeholder='number'/>

        <br /><br />

        <label htmlFor="num2">Number 2: </label>
        <input onChange={(e) => setNum2(e.target.value)} type="text" placeholder='number' />

        <br /><br />

        <button onClick={calculate}>Add</button>

        <h2>Sum is equal to: {sum}</h2>

    </div>
  )
}

export default Addition