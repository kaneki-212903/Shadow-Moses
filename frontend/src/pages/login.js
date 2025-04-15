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
  Link,
  ThemeProvider,
  CssBaseline,
} from '@mui/material';
import { createTheme } from '@mui/material/styles';

// Create a theme instance with custom properties
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

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [error, setError] = useState(null); // State to manage error message

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setLoginDetails((prevDetails) => ({
      ...prevDetails,
      [name]: name === 'rememberMe' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    const { email, password } = loginDetails;

    try {
      const response = await fetch('http://localhost:8080/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
           // Send the token from local storage
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message); // Throw an error with the message from the server
      }

      const data = await response.json();
      console.log(data);
      localStorage.setItem('token', data.token);
      navigate(data.redirectUrl);
    } catch (error) {
      console.error('Error:', error);
      setError(error.message); // Set error message to be displayed to the user
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
        <Card sx={{ maxWidth: 'lg', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, m: 4, overflow: 'hidden' }}>
          <Grid container component="main" sx={{ height: '100%' }}>
            <Grid item xs={12} sm={8} md={7} component={Card} elevation={6} square>
              <CardContent sx={{ mx: 4, my: 2 }}>
                <Typography component="h1" variant="h5" color="primary" gutterBottom>
                  Sign In
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
                    value={loginDetails.email}
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
                    autoComplete="current-password"
                    value={loginDetails.password}
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" checked={loginDetails.rememberMe} onChange={handleChange} name="rememberMe" />}
                    label="Remember me"
                  />
                  {error && <Typography color="error">{error}</Typography>} {/* Display error message */}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="register" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Grid>
            <Grid item xs={false} sm={4} md={5} sx={{
              backgroundImage: 'url("https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg")',
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

export default LoginPage;
