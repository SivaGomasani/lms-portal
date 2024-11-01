import React from 'react';
import './App.css';
import Login from './components/Login.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Privacy from './components/Privacy';
import Legal from './components/Legal';
import Dashboard from './Pages/Dashboard';
import SignUp from './components/SignUp';
import Assessment from './components/Assessment'
import Practice from './components/Practice.js'
import CourseCards from './components/CourseCards.js'
import PaymentCard from './components/PaymentCard.js';
import Bootcamp from './components/Bootcamp.js';
import Techruit from './components/Techruit.js';
import Profile from './components/Profile.js';
import EditProfile from './components/EditProfile';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/lms-portal" element={<Home />} />
                    <Route path='/profile' element ={<Profile />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/practice" element={<Practice />} />
                    <Route path="/assessment" element={<Assessment />} />
                    <Route path="/privacy" element={<Privacy />} /> 
                    <Route path="/legal" element={<Legal />} />
                    <Route path='/courses' element={<CourseCards />}/>
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/courses' element={<CourseCards />} />
                    <Route path='/payment' element={<PaymentCard />}/>
                    <Route path='/bootcamp' element={<Bootcamp />}/>
                    <Route path='/techruit' element={<Techruit />}/>
                    <Route path="/edit-profile" element={<EditProfile />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
