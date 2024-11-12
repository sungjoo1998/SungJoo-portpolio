import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <nav>
        <Link to='/'>홈</Link>
        <Link to='../main'>상품소개</Link>
        <Link to='../todolist'>상품문의</Link>
      </nav>
    </div>
  )
}

export default Header
