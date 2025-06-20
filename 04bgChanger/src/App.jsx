import { useState } from "react"
function App() {
  const [color, setColor] = useState("green")  
  return (
    <div className="w-full h-screen duration-300"
    style ={{ backgroundColor: color }} >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl ">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={()=>{setColor("red")}}
          style={{backgroundColor: "red"}}>Red
            </button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={()=>{setColor("green")}}
          style={{backgroundColor: "green"}}>green
            </button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={()=>{setColor("yellow")}}
          style={{backgroundColor: "yellow", color: "black"}}>yellow
            </button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={()=>{setColor("orange")}}
          style={{backgroundColor: "orange"}}>orange
            </button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={()=>{setColor("Blue")}}
          style={{backgroundColor: "Blue"}}>Blue
            </button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={()=>{setColor("Purple")}}
          style={{backgroundColor: "Purple"}}>Purple
            </button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={()=>{setColor("Pink")}}
          style={{backgroundColor: "Pink", color:"black"}}>Pink
            </button>
        </div>
      </div>
    </div>
  )
}
export default App
