import { useState, useCallback } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator= useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (char) str += "!@#$%^&*_++{}[]~`"
    
    for(let i = 1; i <= length; i++)
    {
      let char = Math.floor(Math.random() * str.length + 1)
      pass  = str.charAt(char)
    }
    setPassword(pass)
  }, [length, number, char, setPassword])


  return (
    <div className="w-full h-screen duram-0 pt-20"
    style ={{ backgroundColor: "black" }} >
      <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-0.5 h-45  text-gray-500 bg-gray-800'> 
        <h1 className='text-white text-center p-5 top-10 my-1'>Password Generator</h1>
        <div className='bg-white flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly/>
          <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6} 
            max={50}
            value={length}
            className='cursor-pointer' />
            <label>Length:{length}</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
