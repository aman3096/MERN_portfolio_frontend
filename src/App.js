import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom"
import Signup from './components/Signup/Signup';
import Aboutus from './components/About/Aboutus';
import Contact from './components/Contact/Contact';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Home from "./components/Home/Home";
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
           
          <Route index element={<Home />}/>
          <Route path="/aboutus" element={<Aboutus />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/registration" element={<Register/>}/>
        </Routes>

    </div>
  );
}

export default App;
