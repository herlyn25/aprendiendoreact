import { useEffect, useState } from "react"


const useFetch = (url) => {  
    
    const [valorInicial,setValorInicial] = useState({
        name : '',
        image: '',
        cargando: true
    })
      
    const getFetch = async () => {
        const resp = await fetch(url);
        const data = await resp.json()
        const {name,image}= data
        setValorInicial({name, image})
     }

    useEffect (()=>{
        getFetch(url);
    },[url])

  return {
       valorInicial
    }  
}

export default useFetch