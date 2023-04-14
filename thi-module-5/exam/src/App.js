import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BookList from './components/BookList';
import BookCreate from './components/BookCreate';
import BookEdit from './components/BookEdit';
function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<BookList />} />
      <Route path='/create' element={<BookCreate />} />
      <Route path='/edit/:id' element={<BookEdit />} />
    </Routes>
   </BrowserRouter>
   </>
  );
}
export default App;
