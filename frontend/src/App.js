import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';


// MUI Theme imports
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CreateProfile from './pages/createprofile';
import PostCreationForm from './pages/post_form';
import RegisterPage from './pages/register';
import LoginPage from './pages/login';
import HomePage from './pages/Homepage';

// Create a dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark', // Switches the theme to dark mode
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}> {/* Apply the theme */}
      <CssBaseline /> {/* CssBaseline component to kickstart an elegant, consistent, and simple baseline to build upon */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/pages/dashboard" element={<Dashboard />} />
          <Route path="/pages/register" element={<RegisterPage/>}/>
          <Route path="/pages/login" element={<LoginPage/>}/>
          <Route path="/pages/createprofile" element={<CreateProfile />} />
          <Route path='/pages/post_form' element={<PostCreationForm />}/>

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
