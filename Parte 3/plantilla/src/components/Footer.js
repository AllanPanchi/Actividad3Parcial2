// components/Footer.js
import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} My Store. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
