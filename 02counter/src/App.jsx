import { useState, useEffect} from "react";
function App() {

  const [counter, setCounter]=useState(15)// 15 is default value

  // let counter = 15;

  const addValue = () => {
      // counter++;
      if(counter<20)
        setCounter(counter+1);
      // console.log("Value Added", counter);
  }

  let decreaseValue =()=>{
      //counter--;
      if(counter>0)
        setCounter(counter-1);
      // console.log("Value Removed", counter);      
  }

   //  useEffect goes here, inside the component
  useEffect(() => {
    console.log("Counter updated:", counter); // Logs new value AFTER update
  }, [counter]);

  return (
    <>
    <h1>React with hooks</h1>
    <h2>Counter Value: {counter}</h2>

    <button
    onClick = {addValue}>Add Value</button>
    <br/>
    <button
    onClick = {decreaseValue}>Decrease Value</button>
    <p>Footer: {counter}</p>
    </>
  )
}
export default App
