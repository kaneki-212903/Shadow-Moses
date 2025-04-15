import React, { useState } from 'react';
import {
  Box, Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Grid, InputAdornment, Radio, RadioGroup, TextField, Typography, ThemeProvider, createTheme
} from '@mui/material';
import Navbar from '../components/navbar'; // Assuming this is the path to your Navbar component
import Sidebar from '../components/sidebar'; // Assuming this is the path to your Sidebar component
import PhotoCamera from '@mui/icons-material/PhotoCamera';

// Define the dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const PostCreationForm = () => {
  const [postType, setPostType] = useState('');
  const [postDetails, setPostDetails] = useState({
    title: '',
    domain: '',
    description: '',
    techStack: '',
    personalDetail: '',
    numberOfMembers: '',
  });

  const handleTypeChange = (event) => {
    setPostType(event.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostDetails(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(postDetails);
    // Implement the submission logic here
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: 'flex' }}>
        <Navbar isActive={false} />
        <Sidebar isActive={false} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 7 }}>
            <Card raised sx={{ p: 3 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Create New Post
                </Typography>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Post Type</FormLabel>
                  <RadioGroup row name="postType" value={postType} onChange={handleTypeChange}>
                    <FormControlLabel value="ProjectShowcase" control={<Radio />} label="Project Showcase" />
                    <FormControlLabel value="CollaborationRequest" control={<Radio />} label="Collaboration Request" />
                    <FormControlLabel value="LookingForTeam" control={<Radio />} label="Looking For Team" />
                  </RadioGroup>
                </FormControl>
                {postType === 'ProjectShowcase' && (
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Project Title"
                  name="title"
                  value={postDetails.title}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Domain"
                  name="domain"
                  value={postDetails.domain}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  name="description"
                  multiline
                  rows={4}
                  value={postDetails.description}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Tech Stack Used"
                  name="techStack"
                  value={postDetails.techStack}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  component="label"
                  startIcon={<PhotoCamera />}
                >
                  Upload Photo
                  <input type="file" hidden />
                </Button>
              </Grid>
            </Grid>
          )}
          {postType === 'CollaborationRequest' && (
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Post Title"
                  name="title"
                  value={postDetails.title}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Personal Detail"
                  name="personalDetail"
                  multiline
                  rows={4}
                  value={postDetails.personalDetail}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Proficiency in Tech Stack"
                  name="techStack"
                  value={postDetails.techStack}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          )}
          {postType === 'LookingForTeam' && (
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Post Title"
                  name="title"
                  value={postDetails.title}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Project Details"
                  name="description"
                  multiline
                  rows={4}
                  value={postDetails.description}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="No of Members Required"
                  name="numberOfMembers"
                  type="number"
                  value={postDetails.numberOfMembers}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Preferred Tech Stack"
                  name="techStack"
                  value={postDetails.techStack}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          )}
              </CardContent>
              <Button type="submit" variant="contained" sx={{ m: 2 }}>
                Submit Post
              </Button>
            </Card>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default PostCreationForm;
