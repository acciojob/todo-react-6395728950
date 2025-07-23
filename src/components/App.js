
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import Todo from "./Todo";

const App = () => {
  const [data,setData] = useState([])
  const [task,setTask]  = useState("");
  const[flag,setFlag] = useState(false);
  
const handleclick = ()=>{
   
  
    
  
   setData([...data,{["id"]:parseInt(data.length+1),["input"]:task}
   ])
   setFlag(true);
}
 console.log("what is in data",data);

  let length =0;
 
  return (
    <div>
       <h1>To-Do List</h1>
       <input type="text" name="input"  onChange={(e)=>{setTask(e.target.value),setFlag(false)}}></input>
       <button onClick={handleclick}>Add Todo</button>
       {
        flag &&(<Todo data={data} setData={setData}></Todo>)
       }
       
       
    </div>
  )
}

export default App
