/* eslint-disable no-restricted-globals */
import React from 'react'

const TodoItem = ({key,id,val,del}) => {



    return (
        <>
            <div className='addedItem'>
            <li key={key}>{val}</li>
            <i className="fas fa-trash" onClick={()=>{
                del(id);
            
            }}></i>
            </div>
        </>
    )
    }

export default TodoItem