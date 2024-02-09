import { useEffect, useState } from 'react'

const SimpleForm = () => {
  const [formState, setFormState]= useState({
    username: '',
    email: ''
  })
  const {username, email} = formState
  const onInputChange= ({target}) => {
    const {name,value} = target    
    setFormState({...formState,[name]:value})    
  }

  const onclick = () => console.log(formState)

  useEffect(()=>{console.log("UseEffect llamado!!!")},[])
  
  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />
        <input onChange={onInputChange} value={username} type="text" name="username" placeholder="Username" className='form-control'/> 
        <input onChange={onInputChange} value={email} type="text" name="email" placeholder="Email" className='form-control mt-2'/> 
        <button onClick={onclick} type="button" className='btn btn-primary'>Enviar</button>
    </>
  )
}

export default SimpleForm
