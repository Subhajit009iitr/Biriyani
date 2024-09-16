import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

function Sidebar() {
  const theme = useTheme();

  const tabs = ['Home', 'Polls', 'Posts'];

  const [activeTab, setActiveTab] = useState('Home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Handle the "Create" button click
  const handleCreateClick = () => {
    alert('Create button clicked');
  };

  return (
    <Box sx={{ width: '18vw', padding: '10px' }}>
      <List>
        {tabs.map((tab, index) => (
          <ListItem
            button
            key={index}
            onClick={() => handleTabClick(tab)}
            sx={{
              backgroundColor: activeTab === tab ? theme.palette.background.light : 'transparent',
              color: activeTab === tab ? theme.palette.background.lightest : 'inherit',
              '&:hover': {
                backgroundColor: activeTab !== tab ? theme.palette.action.hover : theme.palette.background.dark,
              },
              borderRadius: '4px',
              marginBottom: '8px'
            }}
          >
            <ListItemText primary={tab} />
          </ListItem>
        ))}

        {/* "Create" button - no active state */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleCreateClick}
          sx={{ marginTop: '20px' }}
        >
          Post something!
        </Button>
      </List>
    </Box>
  );
}

export default Sidebar;
