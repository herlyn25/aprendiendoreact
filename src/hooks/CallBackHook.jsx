import { useCallback, useState } from 'react'
import {ButtonCallBack} from './ButtonCallBack'

export const CallBackHook = () => {
  const [counter, setCounter] =useState(10)
  const incrementFather = useCallback(()=>{
    setCounter((value)=>value+1)
  },[],)
  
  return (
    <div>
      <h1>Contador: {counter}</h1>
      <ButtonCallBack increment={incrementFather} />
    </div>
  )
}