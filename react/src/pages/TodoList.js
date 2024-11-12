import React, { useState } from 'react'
import TodoBoard from '../component/TodoBoard';
import Header from '../component/Header';


function TodoList() {
    const [inputValue, setInputValue] = useState(''); //input state
    const [todoList, setTodolist] = useState([]); //input된 값을 저장하는 state
  
    /* 
      1. 기존 아이템을 유지하고 새 아이템 추가
      2. 전개구문을 선언해서 기존의 todoList안에 있는 입력값들을 새 배열 변수에 포함시킴  
    */
   //아이템 추가
    const addItem = ()=>{
      //console.log('inputValue :', inputValue);
      setTodolist([...todoList, inputValue]);
      //console.log(todoList)
    }
  
    //아이템 삭제
    //filter() 함수 - 배열의 각 요소에 대해서 조건을 적용하고 조건을 충족하는 요소만 포함해서 새로운 배열로 반환
  
    /* 
      todoList.filter( (item) => item !== itemToDelete) 
      -> todolist 배열에서 itemToDelete와 일치하지않는 요소들만 새 배열에 생성
      -> itemToDelete값은 필터링되서  todoList에서 제거
  
    
    */
    const deleteItem = (itemToDelete) => {
      setTodolist(todoList.filter( (item) => item !== itemToDelete) )
    }
  
    return (
      <>
      <Header />
      <div className="content">
        <h1>상담문의 페이지</h1>
        <div className="listArea">
          <input type="textAreas" 
                 value={inputValue} 
                 onChange={ (event) => {setInputValue(event.target.value)} }
          />
          <button className='btnAdd' onClick={ addItem }>작성완료</button>
  
          <TodoBoard todoList={todoList} onDelete={deleteItem} />
        </div>
      </div>
      </>
    );
  }


export default TodoList
