import './App.css';
import TodoList from './components/exercise1/TodoList';
import BookList from './components/exercise2/BookList';
import { Route, BrowserRouter, Routes, NavLink } from 'react-router-dom'
import BookCreate from './components/exercise2/BookCreate';
import Bookedit from './components/exercise2/BookEdit';
import { ToastContainer } from 'react-toastify';



function App() {
  return (
    <>
      <BrowserRouter>
      <NavLink to='/todo-list' className={'ms-5'}>ToDo List</NavLink>
      <NavLink to='/'  className={'ms-5'}>Book List</NavLink>
      <Routes>
          <Route path='/' element={<BookList />} />
          <Route path='/todo-list' element={<TodoList />} />
          <Route path='/book-create' element={<BookCreate />} />
          <Route path='/update/:id' element={<Bookedit />} />
      </Routes>
      <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
