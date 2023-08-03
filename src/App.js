
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './pages/About';
import Recruiter from './pages/Recruiter';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import JobSeeker from './pages/JobSeeker';


function App() {
  
  return (
    
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/recruiter' element={<Recruiter />} />
        <Route path='/sign-in' element={<Login />} />
        <Route path='/job' element={<JobSeeker />} />
        <Route path='/sign-up' element={<Register />} />
      </Routes>
   </div>
  );
}

export default App;
