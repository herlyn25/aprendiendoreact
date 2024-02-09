import { useForm } from "../hooks/useForm"

const FormWithCustomHook = () => {  
  const {formState, onReset ,onInputChange , onImprimir} = useForm({
    username:'', email:'', password:''
  })
  const {username, email, password} = formState
  
  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />
        <input onChange={onInputChange} value={username} type="text" name="username" placeholder="Username" className='form-control'/> 
        <input onChange={onInputChange} value={email} type="text" name="email" placeholder="Email" className='form-control mt-2'/> 
        <input onChange={onInputChange} value={password} type="password" name="password" placeholder="password" className='form-control mt-2'/> 
        <button onClick={onReset} type="button" className='btn btn-secondary'>Reset</button>
        <button onClick={onImprimir} type="button" className='btn btn-primary'>Imprimir</button>
    </>
  )
}

export default FormWithCustomHook
