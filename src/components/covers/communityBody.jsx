import React from 'react';
import Box from '@mui/material/Box';
import Sidebar from '../navbars/sidebar';
import PostCard from '../cards/postcard';
import PollCard from '../cards/pollCard';
import { useTheme } from '@mui/material/styles';

function CommunityBody() {
  const theme = useTheme();
  const posts = [
    { title: 'Post 1', description: 'This is the first post.' },
    { title: 'Post 2', description: 'This is the second post.' },
    { title: 'Post 1', description: 'This is the first post.' },
    { title: 'Post 2', description: 'This is the second post.' },
    { title: 'Post 1', description: 'This is the first post.' },
    { title: 'Post 2', description: 'This is the second post.' }
  ];

  const polls = [
    { question: 'Poll 1: What is your favorite color?' },
    { question: 'Poll 2: Do you like cats or dogs?' },
    { question: 'Poll 1: What is your favorite color?' },
    { question: 'Poll 2: Do you like cats or dogs?' }
  ];

  return (
    <Box sx={{ 
        display: 'flex', 
        marginTop: '64px', 
        height: '90vh', 
        backgroundColor: theme.palette.background.primary,
        // paddingLeft: '40px',
        marginLeft:'40px',
        // paddingRight: '40px',
        marginRight:'40px',
         }}>
      {/* Left Sidebar */}
      <Box sx={{ width: '20%', borderRight: '1px solid #ccc', position: 'sticky', top: '64px' }}>
        <Sidebar />
      </Box>

      {/* Right Content Section */}
      <Box 
        sx={{ 
          width: '80%', 
          padding: '20px', 
          paddingLeft: '40px',  // Add padding to the left side
          paddingRight: '40px', // Add padding to the right side
          overflowY: 'auto' 
        }}>
        {polls.map((poll, index) => (
          <PollCard key={index} question={poll.question} />
        ))}
        {posts.map((post, index) => (
          <PostCard key={index} title={post.title} description={post.description} />
        ))}
      </Box>
    </Box>
  );
}

export default CommunityBody;
