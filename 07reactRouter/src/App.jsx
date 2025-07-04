import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <h1 className='bg-green-600 p-4 text-center'>React Router</h1>
    <Footer/>
    </>
  )
}

export default App
