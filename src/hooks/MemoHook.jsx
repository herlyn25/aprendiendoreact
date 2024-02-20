import { useMemo, useState } from "react"
import { useCounter } from "./useCounter"


const heavyStuff= (initialValue) => {
    for (let index = 0; index < initialValue; index++) {
        console.log("hasta aqui vamos")        
    }
    return `Hasta aqui vamos ${initialValue} veces`
}

const MemoHook = () => {
  const {counter, incrementar} = useCounter(1000)
  const [show, setShow] = useState(true)
  const memorizeValue=useMemo(()=>heavyStuff(counter),[counter])
  return (
    <>
      <h1>Counter: <small>{counter}</small></h1> 
      <hr />
      <h4>{memorizeValue}</h4>
      <button className="btn btn-primary" onClick={()=>incrementar()}>+1</button>
      <button className="btn btn-outline-primary" onClick={()=>setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
    </>
  )
}

export default MemoHook
