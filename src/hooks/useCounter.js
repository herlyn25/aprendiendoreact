import { useState } from "react"

export const useCounter = (valorInicial=1) => {
    const [counter, setCounter] =useState(valorInicial)
    const incrementar = (value=1) => setCounter(counter+value)
    const reset = () => setCounter(valorInicial)
    const decrementar = () => (counter===0) ? setCounter(0) : setCounter(counter-1)        
    
    return {
        counter,
        incrementar,
        decrementar,
        reset
    }
} 