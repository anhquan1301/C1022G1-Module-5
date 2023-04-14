import './index.css'

import Footer from './components/Footer'
import FacilityCreate from './components/FacilityCreate';
import Home from './components/Home';
import Header from './components/Header';
import FacilityList from './components/FacilityList';
import ContractList from './components/ContractList';
import CustomerList from './components/CustomerList';
import CustomerCreate from './components/CustomerCreate';
import ContractCreate from './components/ContractCreate';
import CustomerEdit from './components/CustomerEdit';
import FacilityEdit from './components/FacilityEdit';
import Detail from './components/Detail';
import Scroll from './components/Scroll';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Scroll />
      <Header />
        <Routes>
          <Route>
          <Route path='/' element={<Home />} />
          <Route path='/facility-list' element={<FacilityList />} />
          <Route path='/customer-list' element={<CustomerList />} />
          <Route path='/contract-list' element={<ContractList />} />
          <Route path='/facility-detail/:id' element={<Detail />} />
          <Route path='/facility-create' element={<FacilityCreate />} />
          <Route path='/facility-edit/:id' element={<FacilityEdit />} />
          <Route path='/customer-create' element={<CustomerCreate />} />
          <Route path='/customer-edit/:id' element={<CustomerEdit />} />
          <Route path='/contract-create' element={<ContractCreate />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
