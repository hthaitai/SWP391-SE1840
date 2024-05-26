
import './App.scss';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import { Box } from '@mui/material'
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Admin from './components/Admin';
import Manager from './components/Manager';
import Staff from './components/Staff';
import Homepage from './components/Homepage/Homepage';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Box className='container' sx={{position: 'relative'}}>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/login" element={<Login />} />
          
          <Route path="/admin" element={<Admin />} />
          <Route path="/manager" element={<Manager />} />
          <Route path="/staff" element={<Staff />} />

          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </Box>
      <Footer />
    </div>
  );
}

export default App;
