import { useState, useCallback, useEffect, useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  
  const passwordRef = useRef(null)
  const [copied, setCopied] = useState(false);

  const passwordGenerator= useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (char) str += "!@#$%^&*_++{}[]~`"
    
    for(let i = 1; i <= length; i++)
    {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, number, char, setPassword])

  //copyPass
  const copyPass = useCallback(() =>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password)
    
    setCopied(true);
    setTimeout(() => {
      setCopied(false); // hide after 1 second
      passwordRef.current.blur(); // optional: remove focus
    }, 1000);    
    // alert("copied")
  },[password])
  // passwordGenerator()
  useEffect(() => {
    passwordGenerator()
  }, [length, number, char, passwordGenerator])

  return (
    <div className="w-full h-screen duram-0 pt-20"
    style ={{ backgroundColor: "black" }} >
      <div className='relative w-full max-w-max mx-auto shadow-md rounded-lg px-4 py-3 text-orange-500 bg-gray-800'> 
        <h1 className='text-white text-center p-5 top-10 my-1'>Password Generator</h1>
        <div className=' flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          className='bg-white rounded-2xl  outline-none w-full py-1 px-3 text-gray-700'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          
          <button
            onClick={passwordGenerator}
            className=" bg-gray-600 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded-lg shadow"
          >
            Generate
          </button>
        </div>
        
        <button
          onClick={copyPass}
          className='outline-none rounded-2xl  bg-blue-700 hover:bg-blue-600 text-white px-3 py-0.5 shrink-0 transition-transform duration-200 ease-in-out 
             hover:scale-105 active:scale-95'>copy</button>
          
          {copied && (
            <span className="absolute top-0 left-full ml-2 text-sm bg-gray-700 text-white px-2 py-1 rounded shadow animate-fade">
            Copied!
            </span>
          )}

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6} 
            max={50}
            value={length}
            className='cursor-pointer'
            style={{
            accentColor:"skyblue"}}
            onChange={(e)=> {setLength(e.target.value)}}
            />
            <label className='px-2'>Length: {length} </label>
            <input type="checkbox"
            defaultChecked = {number}
            id='numberInput'
            onChange={()=>{
              setNumber((prev)=>!prev);
            }} />
            <label >Numbers: {number ? "ON" : "OFF"}</label>
            <input 
             type="checkbox"
            defaultChecked = {char}
            id='characterInput'
            onChange={()=>{
              setChar((prev)=>!prev);
            }}
            className='ml-2'/>
            <label >Characters: {char ? "ON" : "OFF"}</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
