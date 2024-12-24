import { useState } from "react"

export default function Counter(){
  const state = useState(0)
  const[count, setCount] = useState(0);
  function incrementCounterFunction(){
    
    setCount(count+1); 
    console.log(count)
  }

  return(
    <>
      
      <span className="count">{count}</span>
      <button className="counterButton" onClick={incrementCounterFunction}>
      +1</button>
    </>
  )
} 