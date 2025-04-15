import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  Grid,
  CardContent,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  ThemeProvider,
  CssBaseline,
} from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
          borderRadius: '16px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
    },
  },
  palette: {
    background: {
      default: 'transparent',
    },
    primary: {
      main: '#1A237E',
    },
  },
});

const RegisterPage = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: name === 'acceptTerms' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userDetails.password !== userDetails.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    console.log(userDetails);
    const { email, password } = userDetails;
    try {
      const response = await fetch('http://localhost:8080/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      localStorage.setItem('token', data.token);
      navigate('/pages/createprofile');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          background: `url("https://img.freepik.com/free-vector/gradient-network-connection-background_23-2148865393.jpg?w=996&t=st=1707914723~exp=1707915323~hmac=ccabc61859da326b02a197822eabbd624e79dcfe309231483541c3e06977056c") center/cover no-repeat`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Card
          sx={{
            maxWidth: 'lg',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            m: 4,
            overflow: 'hidden',
          }}
        >
           <Grid container component="main" sx={{ height: '100%' }}>
            <Grid item xs={12} sm={8} md={7} component={Card} elevation={6} square>
              <CardContent sx={{ mx: 4, my: 2 }}>
                <Typography component="h1" variant="h5" color="primary" gutterBottom>
                  Sign Up
                </Typography>
                <form onSubmit={handleSubmit} noValidate>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={userDetails.email}
                    onChange={handleChange}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={userDetails.password}
                    onChange={handleChange}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    value={userDetails.confirmPassword}
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    control={<Checkbox value="acceptTerms" color="primary" checked={userDetails.acceptTerms} onChange={handleChange} name="acceptTerms" />}
                    label="I accept and agree to the terms and conditions"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                </form>
              </CardContent>
            </Grid>
            <Grid item xs={false} sm={4} md={5} sx={{
              backgroundImage: 'url("https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg")',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }} />
          </Grid>
        </Card>
      </Box>
    </ThemeProvider>
  );
};

export default RegisterPage;
