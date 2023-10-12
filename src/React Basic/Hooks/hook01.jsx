import { useState } from "react";
const useStateExample = () =>{
  const [counter,setCounter] = useState(0);
  function increment(){
     setCounter(counter+1)
  }
  function decrement(){
    // setCounter(counter-1)
    setCounter((counter)=>counter-1)
    setCounter((counter)=>counter-1)
    setCounter((counter)=>counter-1)
    setCounter((counter)=>counter-1)
    // using 4 set counter decrement by 4
  }
 return (
   <>
    <p>{counter}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
   </>
 );
}
export default useStateExample;