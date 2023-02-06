import React from 'react';
import Landingpage from './Components/pages/Landingpage';
import Loginpage from './Components/forms/Loginpage';
import Signup from './Components/forms/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return <BrowserRouter>
  
    <Routes>
      <Route path="/" element={<Landingpage/>}/>
      <Route path="/login"  element={<Loginpage/>}/>
      <Route path="/signup"  element={<Signup/>}/>
    </Routes>
  
  
  </BrowserRouter> 
}

export default App;
