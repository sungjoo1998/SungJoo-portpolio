import React from 'react'
import { Link } from 'react-router-dom'

const Product = (props) => {
    let data = props.items
  return (
    <>
    <li>
        <Link to={'/todolist/'}>
        <div className="imgArea">
        <img src={props.items.img} /> 
        <p className="title">{props.items.title}</p>
        <p className="contents">{props.items.content}</p>
        <p className="text">{props.items.text}</p>
        </div>
        </Link>
    </li>
    </>
  )
}

export default Product
