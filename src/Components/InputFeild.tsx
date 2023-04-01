import React, { useRef } from 'react'
import './styles.css'
interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e:React.FormEvent)=>void;
  }
  
const InputFeild = ({todo,setTodo,handleAdd}:Props) => {
    const inputref= useRef<HTMLInputElement>(null);
  return (
    <form className="input" onSubmit={(e)=>{handleAdd(e);
    inputref.current?.blur();}}>
        <input ref={inputref} type="input" placeholder='Enter a task' className='inputbox' value={todo} onChange={(e)=>{setTodo(e.target.value)}}/>
        <button className='inputsub' type='submit'>Go</button>
    </form>
  )
}

export default InputFeild
