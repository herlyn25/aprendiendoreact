import { useState } from "react"

const HooksApp = () => {
  const [state, setCounter]=useState({
    counter1:10,
    counter2:20,
    counter3:30
  }) 
  const {counter1, counter2, counter3} = state
  const aumentar= () =>setCounter({counter1:counter1+1,counter2:counter2+2, counter3:counter3+3})
  return (
    <div>
      <h1>Counter 1 : {counter1}</h1>
      <h1>Counter 2 : {counter2}</h1>
      <h1>Counter 3 : {counter3}</h1>
      <button onClick={aumentar} className="btn btn-primary">+1</button>
    </div>
  )
}

export default HooksApp
