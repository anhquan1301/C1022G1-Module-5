import'./index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import FacilityCreate from './components/FacilityCreate';
import Home from './components/Home';
import Header from './components/Header';
import FacilityList from './components/FacilityList';
function App() {
  return (
    <>  
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Header />}  />
            <Route path='/' element={<FacilityList />}  />
            <Route path='/' element={<Footer />}  />
          </Routes>
        </BrowserRouter>
        {/* <Header /> */}
        {/* <FacilityList /> */}
        {/* <Footer /> */}
    </>
  );
}

export default App;
