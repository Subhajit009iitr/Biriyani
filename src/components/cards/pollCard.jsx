import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Button, Divider, TextField } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import AddIcon from '@mui/icons-material/Add';

// Post Card Component
function PollCard({ creatorName, postDate, animeName, season, episode }) {
  const [pollOptions, setPollOptions] = useState([]);
  const [newOption, setNewOption] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  // Add new theory option to the poll
  const handleAddTheory = () => {
    if (newOption.trim() !== '') {
      setPollOptions([...pollOptions, newOption]);
      setNewOption('');
    }
  };

  // Handle selecting a poll option
  const handleSelectOption = (index) => {
    setSelectedOption(index);
  };

  return (
    <Card sx={{ marginBottom: '20px', padding: '20px' }}>
      <CardContent>
        {/* Top section: Creator, profile picture, and post date */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AccountCircleIcon sx={{ marginRight: '10px' }} />
            <Typography variant="subtitle1">{creatorName}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AccessTimeIcon sx={{ marginRight: '5px' }} />
            <Typography variant="subtitle2">{postDate}</Typography>
          </Box>
        </Box>

        {/* Divider */}
        <Divider sx={{ marginY: '10px' }} />

        {/* Question and anime details */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body1">
            What will happen next in <strong>{animeName}</strong>?
          </Typography>
          <Button variant="outlined" disabled>
            S{season} E{episode}
          </Button>
        </Box>

        {/* Divider */}
        <Divider sx={{ marginY: '10px' }} />

        {/* Poll options */}
        {pollOptions.length > 0 && (
          <Box sx={{ marginBottom: '10px' }}>
            {pollOptions.map((option, index) => (
              <Box
                key={index}
                sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                onClick={() => handleSelectOption(index)}
              >
                {selectedOption === index ? (
                  <CheckCircleIcon color="primary" sx={{ marginRight: '10px' }} />
                ) : (
                  <RadioButtonUncheckedIcon sx={{ marginRight: '10px' }} />
                )}
                <Typography variant="body2">{option}</Typography>
              </Box>
            ))}
          </Box>
        )}

        {/* Add theory button and input */}
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
          <TextField
            label="Add Theory"
            variant="outlined"
            size="small"
            value={newOption}
            onChange={(e) => setNewOption(e.target.value)}
            sx={{ marginRight: '10px', flexGrow: 1 }}
          />
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={handleAddTheory}
          >
            Add Theory
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default PollCard;
