import React from 'react';
import Landingpage from './Components/pages/Landingpage';
import Loginpage from './Components/forms/Loginpage';
import Signup from './Components/forms/Signup';
import Beforesignin from './Components/pages/Beforesign';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupForm from './Components/forms/SignupForm';
import VerifyEmail from './Components/pages/verifyEmail';
import EmailVerificationLandingPage from './Components/pages/emailVerification/EmailVerificationLandingPage';


function App() {
  return <BrowserRouter>
  
    <Routes>
      <Route path="/" element={<Landingpage/>}/>
      <Route path="/login"  element={<Loginpage/>}/>
      <Route path="/signup"  element={<Signup/>}/>
      <Route path="/beforesign" element={<Beforesignin/>}/>
      <Route path="/onsign" element={<SignupForm/>}/>
      <Route path='/verifyemail' element={<VerifyEmail/>}/>
      <Route  path='/verify-email/:verificationString' element={<EmailVerificationLandingPage/>}/>
    </Routes>
  
  
  </BrowserRouter> 
}

export default App;
