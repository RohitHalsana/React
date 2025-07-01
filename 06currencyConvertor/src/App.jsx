import { useState } from 'react'
import { InputBox } from './components'
import useCurr from './hooks/useCurr.js'


function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [converted, setConverted] = useState(0)

  return (
    <>
      <h1 className='text-2xl bg-orange-500 text-center text-white'>Currency App</h1>
      <InputBox/>
    </>
  )
}

export default App
