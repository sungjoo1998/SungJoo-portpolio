import React from 'react'
import TodoItem from './TodoItem'

const TodoBoard = (props) => {
    //console.log('pros', props.todoList)
  return (
    <div className='todoBoard'>

        {
            props.todoList.map((item, i) => 
                <TodoItem key={i} item={item} onDelete={props.onDelete} />
            )
        }
    </div>
  )
}

export default TodoBoard
