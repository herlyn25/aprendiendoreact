import { useState } from "react"

export const useForm = (valorInicial={}) => {
    const [formState, setFormState]= useState(valorInicial)
      
      const onInputChange= ({target}) => {
        const {name,value} = target    
        setFormState({...formState,[name]:value})    
      }
    
      const onReset = () => setFormState(valorInicial)
      const onImprimir = () => console.log(formState)
    return {
        ...formState,
        formState,
        onInputChange,
        onReset,
        onImprimir
    }
    
}