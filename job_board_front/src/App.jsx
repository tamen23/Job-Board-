import {Route, Routes} from "react-router-dom";
import "./App.css";
import {Navbar} from "./components/Navbar";
import "./index.css";
import Signup from './components/pages/Signup';
import Contact from './components/pages/Contact';
import Find from './components/pages/Find';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Footer from "./components/Footer";
import Profile from "./components/pages/Profile";
import Dashboard from "./components/pages/Dashboard";
import AuthAPI from "./Requests/authAPI.js";
import {useState} from "react";


function App(){

  AuthAPI.setup();

  const [isAuthenticated, setIsAuthenticated] = useState(AuthAPI.isAuthenticated());
  return (

  <div className="App  flex flex-col min-h-screen" >
    <Navbar isAuthenticated = {isAuthenticated} onLogout = {setIsAuthenticated} />
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/find" element={<Find/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/login" element={<Login isAuthenticated={isAuthenticated} onLogin={setIsAuthenticated} />} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
    <Footer/>
  </div>
   
  );

}

export default App;

