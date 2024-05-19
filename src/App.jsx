
import './App.scss';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import { Box } from '@mui/material'
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Box className='container'>
        <Routes>
          <Route path="/" />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Box>
      <Footer />
    </div>
  );
}

export default App;
