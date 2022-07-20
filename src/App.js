/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
import React, { useState } from "react";
import './App.css';
import TodoItem from "./TodoItem";
const App=()=>{

  const [list, setList] = useState("");
  const [item, setItem] = useState([]);

  const addItem = e => {
    console.log(e);
    setList(e.target.value)
  }

  const newItem = () => {
    setItem((itemAdded) => {
      return [...itemAdded, list];

    })
    setList("");
  }

  const deleteList= (id) => {
      setItem((old)=>{
        return old.filter((element,idx)=>{
          return idx!=id;
        });
      });
  }


  return (
    <div className="container">
      <div className="todoList">
        <h1>TODO List</h1>
        <input 
          type="text" 
          placeholder="Enter new item" 
          onChange={addItem} 
          value={list}/>
        <button onClick={newItem}><i className="fa-solid fa-circle-plus"></i></button>
        <ol>
          {item.map((val,idx)=>{
            return (
              <>
                <TodoItem 
                  key={idx}
                  id={idx} 
                  val={val} 
                  del={deleteList} />
              </>
            )
          })}
        </ol>
      </div>
    </div>
  )
}

export default App;

