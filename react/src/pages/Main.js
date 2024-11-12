import React, { useState } from 'react'
import Header from '../component/Header'
import Product from '../component/Product';
import data from '../data'

const Main = () => {
  let [items] = useState(data);
  return (
    <>
    <Header />
      <div>
        <div className="contentsArea">
          <h2>상품소개 페이지</h2>
          <ul className="bestList">
            {/* <Product items={items[0]} i={1} />
            <Product items={items[1]} i={2}/> */}
            {
              items.map((item, i) =>{
                return (
                  <Product items={item} key={items.id} i={i} />
                )
              })
            }
          </ul>
        </div>
      </div>
    </>

  )
}

export default Main
