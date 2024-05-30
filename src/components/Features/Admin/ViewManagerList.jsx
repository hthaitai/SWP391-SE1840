import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./ViewManagerList.scss";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function ViewManagerList() {
  return (
    <>
     <Button color="inherit" component={Link} to="/admin">
        <ArrowBackIcon fontSize="large"></ArrowBackIcon>
      </Button>
      <div className="view-manager-list">
        <h1>View Manager List</h1>

        {/* Add your form or other components for adding a manager here */}
      </div>
     
    </>
  );
}

export default ViewManagerList;
