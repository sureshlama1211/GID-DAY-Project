import React from 'react';
import Landingpage from './Components/pages/Landingpage';
import Loginpage from './Components/forms/Loginpage';
import Signup from './Components/forms/Signup';
import Beforesignin from './Components/pages/Beforesign';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupForm from './Components/forms/SignupForm';

function App() {
  return <BrowserRouter>
  
    <Routes>
      <Route path="/" element={<Landingpage/>}/>
      <Route path="/login"  element={<Loginpage/>}/>
      <Route path="/signup"  element={<Signup/>}/>
      <Route path="/beforesign" element={<Beforesignin/>}/>
      <Route path="/onsign" element={<SignupForm/>}/>
 
    </Routes>
  
  
  </BrowserRouter> 
}

export default App;
