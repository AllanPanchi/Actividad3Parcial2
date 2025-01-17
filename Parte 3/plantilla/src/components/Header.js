// components/Header.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = ({name}) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          {name}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;