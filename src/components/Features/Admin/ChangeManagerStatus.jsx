import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./ChangeManagerStatus.scss";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function ChangeManagerStatus() {
  return (
    <>
     <Button color="inherit" component={Link} to="/admin">
        <ArrowBackIcon fontSize="large"></ArrowBackIcon>
      </Button>
      <div className="change-manager-status">
        <h1>Change Manager Status</h1>

        {/* Add your form or other components for adding a manager here */}
      </div>
     
    </>
  );
}

export default ChangeManagerStatus;
