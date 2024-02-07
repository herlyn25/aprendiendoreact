import { useCounter } from "../hooks/useCounter"

const CustomHookCounter = () => {
  const {counter, incrementar, decrementar, reset} = useCounter()
  return (
    <div>
      <h1>Counter = {counter}</h1>
      <button className="btn btn-primary" onClick={()=>incrementar(2)}>+1</button>
      <button className="btn btn-secondary" onClick={reset}>Reset</button>
      <button className="btn btn-danger" onClick={decrementar}>-1</button>
    </div>
  )
}

export default CustomHookCounter