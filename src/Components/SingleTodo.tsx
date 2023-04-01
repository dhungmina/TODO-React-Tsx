import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../model'
import { FaRegEdit,FaTrashAlt ,FaCheck } from 'react-icons/fa';
import "./styles.css"
type Props={
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo,todos,setTodos}:Props) => {
const[edit,setEdit] = useState<boolean>(false)
const[editTodo,setEditTodo] = useState<string>(todo.todo)


    const handledone=(id:number)=>{
        setTodos(todos.map((todo)=>todo.id===id?{...todo,isDone:!todo.isDone}:todo))
    }
      const handledel=(id:number)=>{
        setTodos(todos.filter((todo)=>todo.id !==id));
    }
   const handleEdit=(e:React.FormEvent,id:number)=>{
    e.preventDefault();
    setTodos(todos.map((todo)=>(
        todo.id===id?{...todo,todo:editTodo}:todo
    )))
    setEdit(false);
   }

    useEffect(()=>{
inputRef.current?.focus();
    },[edit])
   const inputRef=useRef<HTMLInputElement>(null)
    
  return (
   <form className='todosingle' onSubmit={(e)=>handleEdit(e,todo.id)}>
{
    edit?(
         <input ref={inputRef}value={editTodo} onChange={(e)=>setEditTodo(e.target.value)} className='todosingletext'/>
    ):(
         todo.isDone?(
            <s className='todosingletext'>{todo.todo}</s>
        ):(
            <span className='todosingletext'>{todo.todo}</span>
        )
    )
}   
    <div>
        <span className="icon" onClick={()=>{if(!edit && !todo.isDone){
            setEdit(!edit)
        }}}><FaRegEdit/></span>
        <span className="icon" onClick={()=>handledel(todo.id)}><FaTrashAlt/></span>
        <span className="icon" onClick={()=>handledone(todo.id)}><FaCheck/></span>
    </div>



   </form>
  )
}

export default SingleTodo
