import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./ViewMangerInfo.scss";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function ViewManagerInfo() {
  return (
    <>
     <Button color="inherit" component={Link} to="/admin">
        <ArrowBackIcon fontSize="large"></ArrowBackIcon>
      </Button>
      <div className="view-manager-info">
        <h1>View Manager Info</h1>

        {/* Add your form or other components for adding a manager here */}
      </div>
     
    </>
  );
}

export default ViewManagerInfo;
