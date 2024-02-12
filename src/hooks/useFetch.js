import { useEffect, useState } from "react"

export const useFetch = (url) => {      
    const [valorInicial,setValorInicial] = useState({
        name : '',
        image: '',
        cargando: true
    })
      
    const getFetch = async () => {
      
        const resp = await fetch(url);
        const data = await resp.json()
        const {name,image}= data
        
        setValorInicial({name, image, cargando:false})
     }

    useEffect (()=>{
        setTimeout(()=>{
            getFetch(url);
        }, 1000)        
    },[url])

  return {
       valorInicial
    }  
}