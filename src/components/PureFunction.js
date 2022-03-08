import React, { useState } from 'react'

const PureFunction = (props) => {
    const[val,setval]=useState(10);
  return (
    <div>PureFunction
        <p>A function is called to be a pure function <br /> if it returns the same output
        <br /> and it does not conatin any side effects, side effects are any kind of modification in functions</p>
        <strong>PURE FUNCTION</strong>
        <h2 >my name is {props.name}</h2>
     {/*  it will always return salina when renders,so it can be called a pure function */}
      
      <div>
          <h3>Side effects < br /> modify value</h3> 
          value of x is = {val} <br />
          <button onClick={() =>setval( val+ 1)} >update value</button> 
      </div>
    </div>
  )
}

export default PureFunction