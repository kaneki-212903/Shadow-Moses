import React, { useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Item Component
const Item = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme(); // Use theme to adapt styles dynamically

  return (
    <Box sx={{
      margin: '3vh 1vw',
      boxShadow: theme.shadows[3], // Use theme shadow for consistency
      borderRadius: '10px',
      border: `1px solid ${theme.palette.divider}`, // Use theme divider color
      bgcolor: theme.palette.background.paper, // Use theme paper color for background
      '&:hover': {
        boxShadow: theme.shadows[6], // Increase shadow intensity on hover
      },
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px', cursor: 'pointer' }} onClick={() => setExpanded(!expanded)}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={item.profilePic}
            alt={`Profile of ${item.title}`}
            style={{ marginRight: '16px', width: '56px', height: '56px', borderRadius: '50%' }}
          />
          <Box sx={{ ml: '1vw', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="subtitle1" sx={{ fontSize: '1.25rem', color: 'text.primary' }}>{item.title}</Typography>
            <Typography variant="body2" sx={{ fontSize: '1rem', color: 'text.secondary' }}>{item.detail}</Typography>
          </Box>
        </Box>
        <ExpandMoreIcon sx={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s', color: 'action.active' }} />
      </Box>
      {expanded && (
        <Box sx={{
          height: '50vh',
          overflowY: 'auto',
          p: '20px',
        }}>
          <Typography paragraph sx={{ color: 'text.primary' }}>{item.content}</Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1" sx={{ color: 'text.primary' }}>More about this profile:</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.additionalContent}</Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

// Feed Component
const Feed = ({ items }) => {
  return (
    <Box sx={{
      width: '40vw',
      ml: '3vw',
      maxWidth: '100%',
      overflow: 'auto',
      mt: 0,
      height: '80vh',
      overflowY: 'scroll',
      '&::-webkit-scrollbar': {
        width: '5px',
      },
      '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 5px',
        borderRadius: '15px',
        bgcolor: 'action.hover', // Use theme color for scrollbar track
      },
      '&::-webkit-scrollbar-thumb': {
        bgcolor: 'action.selected', // Use theme color for scrollbar thumb
        borderRadius: '15px',
      },
    }}>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Box>
  );
};
// Usage of Feed Component with mock data
const mockItems = [
  {
    id: 1,
    title: 'John Doe',
    detail: 'Software Developer',
    content: 'Expert in React and front-end development.',
    additionalContent: 'Interested in full-stack development and cloud services.',
    profilePic: 'https://via.placeholder.com/150/0000FF/808080?text=User+1',
  },
  {
    id: 2,
    title: 'Jane Smith',
    detail: 'UI/UX Designer',
    content: 'Passionate about creating user-centric designs.',
    additionalContent: 'Loves typography and minimalist design.',
    profilePic: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=User+2',
  },
  {
    id: 3,
    title: 'Emily Johnson',
    detail: 'Project Manager',
    content: 'Experienced in leading cross-functional teams.',
    additionalContent: 'Advocate for Agile methodologies and continuous improvement.',
    profilePic: 'https://via.placeholder.com/150/FFFF00/000000?text=User+3',
  },
  
  // Projects
  {
    id: 4,
    title: 'EcoNow Website Redesign',
    detail: 'Environmental NGO',
    content: 'A web design project for an environmental non-profit organization.',
    additionalContent: 'Focused on enhancing user engagement and information dissemination.',
    profilePic: 'https://via.placeholder.com/150/00FFFF/000000?text=Project+1',
  },
  {
    id: 5,
    title: 'HealthTrack App Development',
    detail: 'Health & Wellness',
    content: 'Developing a mobile app to track wellness and fitness goals.',
    additionalContent: 'Integrating smart device connectivity and personalized plans.',
    profilePic: 'https://via.placeholder.com/150/000000/FFFFFF?text=Project+2',
  },
  {
    id: 6,
    title: 'MarketPeak Data Analysis Tool',
    detail: 'Financial Analytics',
    content: 'Creating a data analysis tool for market trend prediction.',
    additionalContent: 'Utilizing AI for real-time analytics and insights.',
    profilePic: 'https://via.placeholder.com/150/FFA500/000000?text=Project+3',
  },
  
  // Alumni
  {
    id: 7,
    title: 'Patricia Martinez',
    detail: 'Alumni - Class of 2010',
    content: 'Now working as a Senior DevOps Engineer at Tech Solutions Inc.',
    additionalContent: 'Patricia leads the infrastructure team and is an AWS certified architect.',
    profilePic: 'https://via.placeholder.com/150/4B0082/FFFFFF?text=Alumni+1',
  },
  {
    id: 8,
    title: 'Daniel Garcia',
    detail: 'Alumni - Class of 2008',
    content: 'Co-founder of an innovative startup focusing on blockchain technology.',
    additionalContent: 'Daniel has been featured in numerous tech magazines for his work in the industry.',
    profilePic: 'https://via.placeholder.com/150/20B2AA/FFFFFF?text=Alumni+2',
  },
  {
    id: 9,
    title: 'Elizabeth Taylor',
    detail: 'Alumni - Class of 2012',
    content: 'Elizabeth is a cloud architect with a passion for building scalable cloud services.',
    additionalContent: 'She regularly speaks at conferences about cloud security.',
    profilePic: 'https://via.placeholder.com/150/FF69B4/FFFFFF?text=Alumni+3',
  },
  {
    id: 10,
    title: 'David Anderson',
    detail: 'Alumni - Class of 2005',
    content: 'David now leads a team of developers at a major software firm.',
    additionalContent: 'He focuses on creating robust enterprise solutions.',
    profilePic: 'https://via.placeholder.com/150/8A2BE2/FFFFFF?text=Alumni+4',
  },
  {
    id: 11,
    title: 'John Doe',
    detail: 'Software Developer',
    content: 'Expert in React and front-end development.',
    additionalContent: 'Interested in full-stack development and cloud services.',
    profilePic: 'https://via.placeholder.com/150/0000FF/808080?text=User+1',
  },
  {
    id: 12,
    title: 'Jane Smith',
    detail: 'UI/UX Designer',
    content: 'Passionate about creating user-centric designs.',
    additionalContent: 'Loves typography and minimalist design.',
    profilePic: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=User+2',
  },
  {
    id: 13,
    title: 'Emily Johnson',
    detail: 'Project Manager',
    content: 'Experienced in leading cross-functional teams.',
    additionalContent: 'Advocate for Agile methodologies and continuous improvement.',
    profilePic: 'https://via.placeholder.com/150/FFFF00/000000?text=User+3',
  },
  
  // Projects
  {
    id: 14,
    title: 'EcoNow Website Redesign',
    detail: 'Environmental NGO',
    content: 'A web design project for an environmental non-profit organization.',
    additionalContent: 'Focused on enhancing user engagement and information dissemination.',
    profilePic: 'https://via.placeholder.com/150/00FFFF/000000?text=Project+1',
  },
  {
    id: 15,
    title: 'HealthTrack App Development',
    detail: 'Health & Wellness',
    content: 'Developing a mobile app to track wellness and fitness goals.',
    additionalContent: 'Integrating smart device connectivity and personalized plans.',
    profilePic: 'https://via.placeholder.com/150/000000/FFFFFF?text=Project+2',
  },
  {
    id: 16,
    title: 'MarketPeak Data Analysis Tool',
    detail: 'Financial Analytics',
    content: 'Creating a data analysis tool for market trend prediction.',
    additionalContent: 'Utilizing AI for real-time analytics and insights.',
    profilePic: 'https://via.placeholder.com/150/FFA500/000000?text=Project+3',
  },
  
  // Alumni
  {
    id: 17,
    title: 'Patricia Martinez',
    detail: 'Alumni - Class of 2010',
    content: 'Now working as a Senior DevOps Engineer at Tech Solutions Inc.',
    additionalContent: 'Patricia leads the infrastructure team and is an AWS certified architect.',
    profilePic: 'https://via.placeholder.com/150/4B0082/FFFFFF?text=Alumni+1',
  },
  {
    id: 18,
    title: 'Daniel Garcia',
    detail: 'Alumni - Class of 2008',
    content: 'Co-founder of an innovative startup focusing on blockchain technology.',
    additionalContent: 'Daniel has been featured in numerous tech magazines for his work in the industry.',
    profilePic: 'https://via.placeholder.com/150/20B2AA/FFFFFF?text=Alumni+2',
  },
  {
    id: 19,
    title: 'Elizabeth Taylor',
    detail: 'Alumni - Class of 2012',
    content: 'Elizabeth is a cloud architect with a passion for building scalable cloud services.',
    additionalContent: 'She regularly speaks at conferences about cloud security.',
    profilePic: 'https://via.placeholder.com/150/FF69B4/FFFFFF?text=Alumni+3',
  },
  {
    id: 20,
    title: 'David Anderson',
    detail: 'Alumni - Class of 2005',
    content: 'David now leads a team of developers at a major software firm.',
    additionalContent: 'He focuses on creating robust enterprise solutions.',
    profilePic: 'https://via.placeholder.com/150/8A2BE2/FFFFFF?text=Alumni+4',
  },
  // ... add more items as needed
];

const App = () => {
  return <Feed items={mockItems} />;
};

export default App;
