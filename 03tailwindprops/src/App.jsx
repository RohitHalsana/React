import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-400 text-amber-100 p-4 rounded-2xl mb-6 ">Tailwind Test</h1>
      <Card name="Delba"/>  
      <br />    
      <Card name="Dollar"/> 

    </>
  )
}

export default App
