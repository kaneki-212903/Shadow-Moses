import React from 'react';
import { Box, Grid, Typography, createTheme, ThemeProvider } from '@mui/material';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Feed from '../components/feed';
import Recommendations from '../components/recommedation';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Dashboard() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', bgcolor: 'background.default' }}>
        <Navbar />
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6.5}>
                <div style={{ marginTop: '9vh' }}>
                  <Typography variant="h4" sx={{ ml: '4vw', color: 'text.primary' }}>
                    DISCOVER
                  </Typography>
                  <Feed />
                </div>
              </Grid>
              <Grid item xs={12} md={5}>
                <div style={{ marginTop: '9vh' }}>
                  <Typography variant="h5" sx={{ ml: '1.5vw', color: 'text.primary' }}>
                    Course Recommendations Based on Feed
                  </Typography>
                  <Recommendations />
                </div>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
