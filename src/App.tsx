import React, { useState } from 'react'
import './App.css';
import InputFeild from './Components/InputFeild';
import { Todo } from './model';
import Todolist from './Components/Todolist'

const  App:React.FC=()=> {
 const[todo,setTodo]= useState<string>("");
//  console.log(todo);
const [todos,setTodos] =useState<Todo[]>([]);

const handleAdd=(e: React.FormEvent)=>{
e.preventDefault();
if(todo){
setTodos([...todos,{id: Date.now(),todo,isDone:false}]);
setTodo("")
}

// console.log(todos);

};


  return (
    <div className="App">
    <span className="heading">TODO</span>
    <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    
  <Todolist todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
