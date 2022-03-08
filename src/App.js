
import "./App.css";
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import {AddTodo} from "./MyComponents/AddTodo";
import React, {useState, useEffect} from 'react';

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete=(todo)=>{
    console.log("I am on delete of todo",todo);
    //deleting this way doesnt work so we use setTodos
    // let index =todos.indexOf(todo);
    // todos.splice(index,1);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.getItem("todos");
  }
  const addTodo=(title,desc)=>{
    console.log("I am adding this todo",title,desc);
    let sno;
    if(todos.length===0){
      sno=0;
    }
    else{
      sno=todos[todos.length-1].sno +1;
    }
    
    const myTodo ={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  const [todos,setTodos]=useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])  /*if someone change todos then call useEffect */
    //  {
    //   sno: 1,
    //   title:"Go to the market",
    //   desc:"You need to go to the market to get this job dome"
    //  },
    //  {
    //   sno: 2,
    //   title:"Go to the mall",
    //   desc:"You need to go to the mall"
    //  },
    //  {
    //   sno: 3,
    //   title:"Go to take veggies",
    //   desc:"You need to go to shops"
    //  }
  

  return (
    <>
     <Header title="My Todos List" searchBar={false}/>
     <AddTodo addTodo={addTodo}/>
     <Todos todos={todos} onDelete={onDelete}/>
     <Footer/>
    </>
  );
}

export default App;
