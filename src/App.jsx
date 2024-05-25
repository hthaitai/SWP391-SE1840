
import './App.scss';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import { Box } from '@mui/material'
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Admin from './components/Admin';
import Manager from './components/Manager';
import Staff from './components/Staff';
function App() {
  return (
    <div className="App">
    <Navbar />
   
    <Box className='container'>
      <Routes>
        <Route path="/" />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={ <Admin/>} />
        <Route path="/manager" element={ <Manager/>} />
        <Route path="/staff" element={ <Staff/>} />

      </Routes>
    </Box>
    <Footer />
   
  </div>
  );
}

export default App;
