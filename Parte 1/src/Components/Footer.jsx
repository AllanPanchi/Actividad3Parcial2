// src/components/Footer.js
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <Box component="footer" sx={{ py: 3, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
            <Typography variant="h6" align="center" gutterBottom>
            Follow us
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <IconButton color="inherit">
                <FacebookIcon />
            </IconButton>
            <IconButton color="inherit">
                <TwitterIcon />
            </IconButton>
            <IconButton color="inherit">
                <InstagramIcon />
            </IconButton>
            </Box>
        </Container>
        </Box>
    );
};

export default Footer;
