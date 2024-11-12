import { Routes, Route } from 'react-router-dom';
import './App.css';
import Intro from './pages/Intro';
import Main from './pages/Main';
import TodoList from './pages/TodoList';



function App() {
  return (
    <div className="wrap">
      <Routes>
        <Route path='/' element={<Intro />}></Route>
        <Route path='main' element={<Main />}></Route>
        <Route path='todolist' element={<TodoList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
