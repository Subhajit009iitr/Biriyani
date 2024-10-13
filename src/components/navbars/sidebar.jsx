import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import CreatePost from '../create/createpost'; // Adjust the import path if necessary

function Sidebar() {
  const theme = useTheme();

  const tabs = ['Home', 'Polls', 'Posts'];
  const [activeTab, setActiveTab] = useState('Home');
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Manage dialog state

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCreateClick = () => {
    setIsDialogOpen(true); // Open the dialog
  };

  const handleClose = () => {
    setIsDialogOpen(false); // Close the dialog
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
              marginBottom: '8px',
            }}
          >
            <ListItemText primary={tab} />
          </ListItem>
        ))}

        {/* "Create" button */}
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

      {/* Render the CreatePost dialog when isDialogOpen is true */}
      {isDialogOpen && <CreatePost onClose={handleClose} />}
    </Box>
  );
}

export default Sidebar;
