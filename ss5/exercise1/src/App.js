import ContactForm from './components/ContactForm';
import MedicalForm from './components/MedicalForm';
import { NavLink, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
      <NavLink to='/'>Contact Form</NavLink>
      <NavLink to='/medical-form' className="ms-5">Medical Form</NavLink>
      <Routes>
        <Route path='/' element={<ContactForm />} />
        <Route path='/medical-form' element={<MedicalForm />} />
      </Routes>
      {/* <ContactForm />
      <MedicalForm /> */}
    </>
  );
}

export default App;
