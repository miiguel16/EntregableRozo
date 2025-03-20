import React, {useState } from 'react'

export const Class1 = () => {
  
  const [username, setUsername] = useState("Bienvenido usuario")

  const [Text, setText] = useState('')

  const handleGreet = () =>{
    
    setUsername('Bienvenido '+Text)
  }

  return (
    <main className='w-screen h-screen bg-gray-600 flex flex-col items-center justify-center'>
    <h1>{username} </h1>
      <input 
      value={Text}
      onChange={(e)=> setText(e.target.value)}
      placeholder='Ingrese su nombre'/>

      <button onClick={handleGreet}> 
        Saludos
      </button>
    </main>

  )
}
