// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import './Navbar.css'



const Navbar = () => {
 

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className='title'>
          Data Fetch
        </Typography>
        <Button color="inherit">
          <Link to="/" className='navlink'>Home</Link>
        </Button>
        <Button color="inherit">
          <Link to="/about" className='navlink'>About</Link>
        </Button>
        <Button color="inherit">
          <Link to="/contact" className='navlink'>Contact</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
