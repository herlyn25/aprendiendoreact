import { useFetch, useCounter } from "../hooks/"

const CustomHookUseFetch = () => {
  const {counter, incrementar } = useCounter()
  const url = `https://rickandmortyapi.com/api/character/${counter}`  
  const {valorInicial} = useFetch(url)
  const {name, image, cargando}=valorInicial
  return (
    <div>
        {
            (cargando) ? <p>Cargando....</p> : 
            <div>
                <p>Nombre: {name}</p>
                <img src={image} alt="" />
            </div>
        }
        <button onClick={()=>incrementar()} type="button" className="btn btn-primary">Next</button>
    </div>
  )
}

export default CustomHookUseFetch
