import React, { useState, useEffect } from 'react';
import { GlobalStyles } from 'utils/GlobalStyles';
import { BrowserRouter as Router, Routes, Route,  useNavigate } from 'react-router-dom';
import { Navbar } from 'components/Navbar';
import { StartPage } from 'pages/StartPage';
import { LoginPage } from 'pages/LoginPage'; 
/* import { Form } from 'components/Form'; */
import { DashboardPage } from 'pages/DashboardPage';
import { AllEventsPage } from 'pages/AllEventsPage';
import { CreateEditEventsPage } from 'pages/CreateEditEventsPage';
import { AccountSettingsPage } from 'pages/AccountSettingsPage';
import { app } from './firebase-config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
      navigate('/dashboard')
    }
  }, [navigate])

  const handleAction = (id) => {
    const authentication = getAuth();
    if(id === 2){
    createUserWithEmailAndPassword(authentication, email, password)
    .then((response) => {
      navigate('/dashboard')
      sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
    })
    .catch((error) => {
      if(error.code === 'auth/wrong-password'){
        toast.error('Please check your Password and/or Email');
      }
      if(error.code === 'auth/user-not-found'){
        toast.error('Please check your Password and/or Email');
      }
})
    } 
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/dashboard')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch((error) => {
          if(error.code === 'auth/wrong-password'){
            toast.error('Please check your Password and/or Email');
          }
          if(error.code === 'auth/user-not-found'){
            toast.error('Please check your Password and/or Email');
          }
 })
    }
  }

  return (
    <> 
    <GlobalStyles />
    <ToastContainer />
    {/* <Router> */}
    <Navbar />
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route 
      path="/login" 
      element={<LoginPage 
        title="Login"
        setEmail={setEmail}
        setPassword={setPassword}
        handleAction={() => handleAction(1)}
        />} />
      <Route 
      path="/register" 
      element={<LoginPage 
        title="Register"
        setEmail={setEmail}
        setPassword={setPassword}
        handleAction={() => handleAction(2)}
        />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/events" element={<AllEventsPage />} />
      <Route path="/create-events" element={<CreateEditEventsPage />} />
      <Route path="/account-settings" element={<AccountSettingsPage />} />
    </Routes>
    {/* </Router> */}
    </>
  );
}
