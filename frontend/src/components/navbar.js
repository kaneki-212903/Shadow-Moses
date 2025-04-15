import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, InputBase, Box, Tooltip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';



function Navbar({ isActive = true }) {
  const navigate = useNavigate();
  const handleLogout = () => {
  
    // Perform logout actions, such as clearing user info or tokens
    localStorage.removeItem('token'); // Assuming you store a token in localStorage
  
    // Redirect to the login page
    navigate('/pages/login');
  };
  
  if (!isActive) {
    // If the navbar should be completely inaccessible, you can return null or an empty fragment
    // return null;
    // Or, return a visually different navbar, e.g., with dimmed colors and disabled buttons
    return (
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between', opacity: 0.5 }}> {/* Dimmed look */}
          <Typography variant="h6" noWrap component="div">
            Application Name
          </Typography>
          <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%', maxWidth: '30%' }}>
            {/* Input disabled */}
            <InputBase
              sx={{ ml: 1, flex: 1, width: '100%' }}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              disabled
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" disabled>
              <SearchIcon />
            </IconButton>
          </Box>
          <Box>
            {/* Buttons disabled */}
            <Tooltip title="Home" disableFocusListener disableTouchListener>
              <span>
                <IconButton color="inherit" disabled>
                  <HomeIcon />
                </IconButton>
              </span>
            </Tooltip>
            <Tooltip title="Settings" disableFocusListener disableTouchListener>
              <span>
                <IconButton color="inherit" disabled>
                  <SettingsIcon />
                </IconButton>
              </span>
            </Tooltip>
            <Tooltip title="Notifications" disableFocusListener disableTouchListener>
              <span>
                <IconButton color="inherit" disabled>
                  <NotificationsIcon />
                </IconButton>
              </span>
            </Tooltip>
            <Tooltip title="Logout" disableFocusListener disableTouchListener>
              <span>
                <IconButton color="inherit" disabled>
                  <LogoutIcon />
                </IconButton>
              </span>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }

  // Normal navbar rendering for active state
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" noWrap component="div">
          Application Name
        </Typography>
        <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%', maxWidth: '30%' }}>
          <InputBase
            sx={{ ml: 1, flex: 1, width: '100%' }}
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Box>
        <Box>
          <IconButton color="inherit">
            <HomeIcon />
          </IconButton>
          <IconButton color="inherit">
            <SettingsIcon />
          </IconButton>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit" onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
