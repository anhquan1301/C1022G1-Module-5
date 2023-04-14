
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CustomerList from './components/customer/CustomerList';
import CustomerCreate from './components/customer/CustomerCreate';
import CustomerEdit from './components/customer/CustomerEdit';
// import ProductsList from './components/ProductsList';
// import ProductCreate from './components/ProductCreate';
// import ProductEdit from './components/ProductEdit';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={<ProductsList />}/>
      <Route path='/create' element={<ProductCreate />}/>
      <Route path='/edit/:id' element={<ProductEdit />}/> */}
      <Route path='/' element={<CustomerList />}/>
      <Route path='/create' element={<CustomerCreate />}/>
      <Route path='/edit/:id' element={<CustomerEdit />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
