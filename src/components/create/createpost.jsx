import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  InputLabel,
  FormControl,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const CreatePost = ({ onClose }) => {
  const [caption, setCaption] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('File:', file);
    console.log('Caption:', caption);
    onClose(); // Close dialog after submission
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Typography variant="h6" sx={styles.title}>
          Create Post
        </Typography>
        <IconButton onClick={onClose} sx={styles.closeButton}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box component="form" onSubmit={handleSubmit} sx={styles.form}>
        <Typography variant="h6" sx={styles.subTitle}>
          Details
        </Typography>
        <FormControl fullWidth sx={styles.input}>
          <InputLabel shrink sx={styles.label}>
            Upload Images
          </InputLabel>
          <Box sx={styles.uploadBox}>
            <Button
              component="label"
              variant="outlined"
              sx={styles.uploadButton}
            >
              {file ? file.name : 'Upload file'}
              <CloudUploadIcon sx={styles.uploadIcon} />
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleFileChange}
              />
            </Button>
          </Box>
        </FormControl>
        <TextField
          label="Captions"
          multiline
          rows={4}
          placeholder="Enter the captions here"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          sx={styles.input}
          InputLabelProps={{ shrink: true }}
        />
        <Button type="submit" variant="contained" sx={styles.postButton}>
          Post
        </Button>
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
    backgroundColor: '#0e1621',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  title: {
    fontSize: '1.25rem',
    color: '#ffffff',
  },
  closeButton: {
    color: '#ffffff',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  subTitle: {
    marginBottom: '10px',
    fontSize: '1rem',
    color: '#ffffff',
  },
  input: {
    marginBottom: '15px',
    '& .MuiOutlinedInput-root': {
      color: '#ffffff',
      '& fieldset': {
        borderColor: '#444',
      },
      '&:hover fieldset': {
        borderColor: '#888',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#3b82f6',
      },
    },
    '& .MuiInputLabel-root': {
      color: '#b0b0b0',
    },
  },
  label: {
    fontSize: '0.85rem',
    color: '#b0b0b0',
  },
  uploadBox: {
    display: 'flex',
    alignItems: 'center',
    border: '1px dashed #444',
    borderRadius: '5px',
    padding: '10px',
  },
  uploadButton: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    color: '#ffffff',
    borderColor: '#444',
    textTransform: 'none',
  },
  uploadIcon: {
    marginLeft: '10px',
  },
  postButton: {
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#1e60c4',
    },
  },
};

export default CreatePost;
