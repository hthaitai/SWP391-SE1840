import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import './Navbar.scss';
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <Box className='navbar'>
      <AppBar position="static" className='appbar'>
        <Toolbar>
          <Typography className='title' sx={{ flexGrow: 1 }} component={Link} to="/">
            Sparkle 'n Shine
          </Typography>
          <Button color="inherit" component={Link} to="/login">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}