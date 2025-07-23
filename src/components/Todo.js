import React from 'react'
import "./styles.css"

const Todo = (props) => {
    
    const{data,setData} = props;
    console.log("what is come in data",data);
     
    const handleclick = (ID)=>{
      console.log("what is come in id",ID);
       let val  = data?.filter((item)=>item.id!==ID);
       console.log("what is come in val",val);
       setData(val);

    }
  return (
    <div>
   {
    data && data?.map((item,index)=>(
        <div  key={index} id='container'>
          <p>{item.input}</p>
         <button onClick={()=>{handleclick(item.id)}}  id='btn'>Delete</button>
        </div>
    ))
   }

 

    </div>
  )
}

export default Todo