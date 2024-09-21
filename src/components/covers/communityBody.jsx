import React from 'react';
import Box from '@mui/material/Box';
import Sidebar from '../navbars/sidebar';
import PostCard from '../cards/postcard';
import PollCard from '../cards/pollCard';
import { useTheme } from '@mui/material/styles';
import image6 from '../../assets/pic6.png';

function CommunityBody() {
  const theme = useTheme();
  // const posts = [
  //   { title: 'Post 1', description: 'This is the first post.' },
  //   { title: 'Post 2', description: 'This is the second post.' },
  //   { title: 'Post 1', description: 'This is the first post.' },
  //   { title: 'Post 2', description: 'This is the second post.' },
  //   { title: 'Post 1', description: 'This is the first post.' },
  //   { title: 'Post 2', description: 'This is the second post.' }
  // ];

  // const polls = [
  //   { question: 'Poll 1: What is your favorite color?' },
  //   { question: 'Poll 2: Do you like cats or dogs?' },
  //   { question: 'Poll 1: What is your favorite color?' },
  //   { question: 'Poll 2: Do you like cats or dogs?' }
  // ];

  return (
    <Box sx={{ 
        display: 'flex', 
        marginTop: '64px', 
        height: '90vh', 
        backgroundColor: theme.palette.background.primary,
        marginLeft:'40px',
        marginRight:'40px',
         }}>
      {/* Left Sidebar */}
      <Box sx={{ width: '20%', borderRight: '4px solid #0A1B25', position: 'sticky', top: '64px' }}>
        <Sidebar />
      </Box>

      {/* Right Content Section */}
      <Box 
        sx={{ 
          width: '80%', 
          padding: '20px', 
          paddingLeft: '40px',
          paddingRight: '40px',
          overflowY: 'auto' 
        }}>
        {polls.map((poll, index) => (
          <PollCard key={index} 
          creatorName = "Subhajit Biswas"
          postDate ="4th October, 2023" 
          animeName = "Naruto: Subhajit generations" 
          season = {2} 
          episode = {204} />
        ))}
        {posts.map((post, index) => (
          <PostCard 
          key={index}
          creatorName="Subhajit Biswas" 
          postDate="4th October, 2023" 
          title="New Manga Announcement" 
          description="We are excited to announce a new chapter of our manga series!" 
          image={image6} 
        />
        ))}
      </Box>
    </Box>
  );
}

export default CommunityBody;
