import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Typography,
  ThemeProvider,
  CssBaseline,
} from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#00008B', // Dark blue color
    },
    background: {
      default: '#000', // Black background
    },
    text: {
      primary: '#FFF', // Light color for text
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif', // Cool font, make sure to import it in your project
  },
});

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: theme.palette.background.default,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: theme.palette.text.primary,
          animation: 'fadeIn 1s ease-in, slideIn 1s ease-out', // Multiple animations
          '@keyframes fadeIn': {
            from: { opacity: 0 },
            to: { opacity: 1 },
          },
          '@keyframes slideIn': {
            from: { transform: 'translateY(-20px)', opacity: 0 },
            to: { transform: 'translateY(0)', opacity: 1 },
          },
        }}
      >
        <Typography variant="h2" gutterBottom>
          Welcome to Maitree
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            component={RouterLink}
            to="/pages/register"
            sx={{ mr: 2 }}
          >
            Sign Up
          </Button>
          <Button
            variant="contained"
            color="primary"
            component={RouterLink}
            to="/pages/login"
          >
            Login
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
