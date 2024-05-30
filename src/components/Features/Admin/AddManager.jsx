import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./AddManager.scss";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function AddManagerPage() {
  return (
    <>
     <Button color="inherit" component={Link} to="/admin">
        <ArrowBackIcon fontSize="large"></ArrowBackIcon>
      </Button>
      <div className="add-manager">
        <h1>Add Manager</h1>

        {/* Add your form or other components for adding a manager here */}
      </div>
     
    </>
  );
}

export default AddManagerPage;
