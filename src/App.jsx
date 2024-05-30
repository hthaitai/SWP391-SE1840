import "./App.scss";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import { Box } from "@mui/material";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Admin from "./components/Actor/Admin";
import Manager from "./components/Actor/Manager";
import Staff from "./components/Actor/Staff";
import Homepage from "./components/Homepage/Homepage";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import AddManagerPage from "./components/Features/Admin/AddManager";
import UpdateManagerInfo from "./components/Features/Admin/UpdateManagerInfo";
import ChangeManagerStatus from "./components/Features/Admin/ChangeManagerStatus";
import ViewDashboard from "./components/Features/Admin/ViewDashboard";
import ViewManagerList from "./components/Features/Admin/ViewManagerList";
import ViewManagerInfo from "./components/Features/Admin/ViewManagerInfo";
import ManageManager from "./components/Features/Admin/ManageManager";
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Box className="container" sx={{ position: "relative" }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/change-manager-status" element={<ChangeManagerStatus />} />
          <Route path="/view-dashboard" element={<ViewDashboard/>} />
          <Route path="/view-manager-list" element={<ViewManagerList/>} />
          <Route path="/view-manager-info" element={<ViewManagerInfo/>} />
          <Route path="/add-manager" element={<AddManagerPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/manage-manager" element={<ManageManager/>} />
          <Route path="/update-manager" element={<UpdateManagerInfo />} />
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
