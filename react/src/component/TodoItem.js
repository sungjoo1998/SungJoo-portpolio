import React from 'react'

const TodoItem = (props) => {

    const itemDelete = () => {
        props.onDelete(props.item)
    }
  return (
    <div className='todo-item'>
      <p>{props.item}</p>
      <button className='btnDelete' onClick={itemDelete}>삭제</button>
    </div>
  )
}

export default TodoItem
