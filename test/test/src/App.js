
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentList from './components/components/student/StudentList';
import StudentCreate from './components/components/student/StudentCreate';
import StudentEdit from './components/components/student/StudentEdit';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<StudentList />}/>
      <Route path='/create' element={<StudentCreate />}/>
      <Route path='/edit/:id' element={<StudentEdit />}/>
    </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
