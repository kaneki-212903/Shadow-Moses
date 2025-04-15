import React from 'react';
import { Card, CardContent, Typography, Button, Grid, Box, useTheme } from '@mui/material';

const courseRecommendations = [
  {
    id: 1,
    name: 'Introduction to Programming',
    field: 'Computer Science',
    duration: '4 weeks',
    skillLevel: 'Beginner',
    instructor: 'Jane Doe',
    link: '#'
  },
  {
    id: 2,
    name: 'Advanced Machine Learning',
    field: 'Data Science',
    duration: '8 weeks',
    skillLevel: 'Advanced',
    instructor: 'John Smith',
    link: '#'
  },
  {
    id: 3,
    name: 'Web Development Bootcamp',
    field: 'Web Development',
    duration: '12 weeks',
    skillLevel: 'Intermediate',
    instructor: 'Alex Johnson',
    link: '#'
  },
  {
    id: 4,
    name: 'Cloud Computing Fundamentals',
    field: 'Cloud Computing',
    duration: '6 weeks',
    skillLevel: 'Beginner',
    instructor: 'Samantha Green',
    link: '#'
  },
  {
    id: 5,
    name: 'Cybersecurity Basics',
    field: 'Cybersecurity',
    duration: '5 weeks',
    skillLevel: 'Beginner',
    instructor: 'Michael Brown',
    link: '#'
  }
  ,{
    id: 6,
    name: 'Introduction to Programming',
    field: 'Computer Science',
    duration: '4 weeks',
    skillLevel: 'Beginner',
    instructor: 'Jane Doe',
    link: '#'
  },
  {
    id: 7,
    name: 'Advanced Machine Learning',
    field: 'Data Science',
    duration: '8 weeks',
    skillLevel: 'Advanced',
    instructor: 'John Smith',
    link: '#'
  },
  {
    id: 8,
    name: 'Web Development Bootcamp',
    field: 'Web Development',
    duration: '12 weeks',
    skillLevel: 'Intermediate',
    instructor: 'Alex Johnson',
    link: '#'
  },
  {
    id: 9,
    name: 'Cloud Computing Fundamentals',
    field: 'Cloud Computing',
    duration: '6 weeks',
    skillLevel: 'Beginner',
    instructor: 'Samantha Green',
    link: '#'
  },
  {
    id: 10,
    name: 'Cybersecurity Basics',
    field: 'Cybersecurity',
    duration: '5 weeks',
    skillLevel: 'Beginner',
    instructor: 'Michael Brown',
    link: '#'
  }
];

const Recommendations = () => {
  const theme = useTheme(); // Access theme to use theme properties

  return (
    <Box 
      sx={{ 
        overflowY: 'auto',
        maxHeight: '75vh', // Adjusted to a fixed value for demonstration
        padding: '5%',
        '&::-webkit-scrollbar': {
          width: '5px',
        },
        '&::-webkit-scrollbar-track': {
          boxShadow: `inset 0 0 5px ${theme.palette.divider}`,
          borderRadius: '10px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: theme.palette.action.disabledBackground,
          borderRadius: '10px',
        },
      }}
    >
      <Grid container spacing={4}>
        {courseRecommendations.map(course => (
          <Grid item key={course.id} xs={12}> {/* Adjusted to fill the full width of the grid */}
            <Card raised sx={{
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between',
              bgcolor: 'background.paper', // Use theme's paper color for background
              border: `1px solid ${theme.palette.divider}`, // Use theme's divider color for border
              boxShadow: theme.shadows[3], // Use theme's shadow
              borderRadius: '7px',
              color: 'text.primary', // Use theme's primary text color
            }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {course.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Field: {course.field}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Duration: {course.duration}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Skill Level: {course.skillLevel}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Instructor: {course.instructor}
                </Typography>
              </CardContent>
              <Button size="small" href={course.link} sx={{ margin: '16px', color: 'primary.main' }}>
                Learn More
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Recommendations;