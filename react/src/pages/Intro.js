import React from 'react'
import { useNavigate } from 'react-router-dom'

const Intro = () => {
    const navigate = useNavigate();

    const gotoMain = () => {
        navigate('/main')
    }
  return (
    <div className='container intro'>
      <h1>Plantreia</h1>
      <button onClick={ gotoMain } className='btnStart'>상품구매하기</button>
    </div>
  )
}

export default Intro
