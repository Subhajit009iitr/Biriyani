// src/components/PollForm.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CloseIcon from '@mui/icons-material/Close';

import {
    Box,
    Button,
    TextField,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Typography,
} from '@mui/material';

const PollForm = () => {
    // State for form fields
    const [animeName, setAnimeName] = useState('');
    const [season, setSeason] = useState('');
    const [episodeNumber, setEpisodeNumber] = useState('');
    const [publishDate, setPublishDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [tokenAmount, setTokenAmount] = useState('1 token');
    const [seasons, setSeasons] = useState([]);

    // Fetch seasons from backend when the component mounts
    useEffect(() => {
        const fetchSeasons = async () => {
            try {
                const response = await axios.get('https://api.example.com/anime/seasons'); // Replace with your actual API endpoint
                setSeasons(response.data.seasons); // Adjust based on your response format
            } catch (error) {
                console.error('Error fetching seasons:', error);
            }
        };

        fetchSeasons();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const pollData = {
            animeName,
            season,
            episodeNumber,
            publishDate,
            endDate,
            tokenAmount,
        };
        console.log('Poll Data:', pollData);
        // Here, you would typically send the data to your backend
    };

    return (
        <Box sx={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <Typography variant="h5" sx={styles.title}>
                    <span>Create Poll</span>
                    <CloseIcon />
                </Typography>
                <Box>
                    <TextField
                        label="Anime Name"
                        variant="outlined"
                        value={animeName}
                        onChange={(e) => setAnimeName(e.target.value)}
                        sx={styles.input}
                    />
                </Box>
                <Box sx={styles.row}>
                    <FormControl fullWidth sx={styles.input}>
                        <InputLabel>Season</InputLabel>
                        <Select
                            value={season}
                            onChange={(e) => setSeason(e.target.value)}
                            label="Season"
                            sx={styles.select}
                        >
                            {seasons.length > 0 ? (
                                seasons.map((season, index) => (
                                    <MenuItem key={index} value={season} sx={styles.menuItem}>
                                        {season}
                                    </MenuItem>
                                ))
                            ) : (
                                <MenuItem value="" sx={styles.menuItem}>
                                    Loading...
                                </MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <TextField
                        label="Episode Number"
                        type="number"
                        variant="outlined"
                        value={episodeNumber}
                        onChange={(e) => setEpisodeNumber(e.target.value)}
                        sx={styles.input}
                    />
                </Box>
                <Box sx={styles.row}>
                    <TextField
                        label="Poll publish date & time"
                        type="datetime-local"
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                        value={publishDate}
                        onChange={(e) => setPublishDate(e.target.value)}
                        sx={styles.input}
                    />
                    <TextField
                        label="Poll end date & time"
                        type="datetime-local"
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        sx={styles.input}
                    />
                </Box>
                <FormControl fullWidth sx={styles.input}>
                    <InputLabel>Token amount for single choice</InputLabel>
                    <Select
                        value={tokenAmount}
                        onChange={(e) => setTokenAmount(e.target.value)}
                        label="Token amount for single choice"
                        sx={styles.select}
                    >
                        <MenuItem value="1 token" sx={styles.menuItem}>
                            1 token
                        </MenuItem>
                        <MenuItem value="2 tokens" sx={styles.menuItem}>
                            2 tokens
                        </MenuItem>
                        <MenuItem value="3 tokens" sx={styles.menuItem}>
                            3 tokens
                        </MenuItem>
                    </Select>
                </FormControl>
                <Button type="submit" variant="contained" sx={styles.button}>
                    Publish
                </Button>
            </form>
        </Box>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#2d2d2d',
    },
    form: {
        backgroundColor: '#121212',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '600px',
        color: '#ffffff',
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
        fontSize: '1.75rem', // Larger font size for the title
        color: '#ffffff',
    },
    input: {
        width: "100%",
        marginBottom: '15px',
        '& .MuiOutlinedInput-root': {
            fontSize: '0.85rem', // Smaller font size
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
            fontSize: '0.75rem', // Smaller font size
            color: '#b0b0b0',
        },
        '& .MuiInputBase-input': {
            fontSize: '0.85rem', // Smaller font size
            color: '#fff',
        },
    },
    select: {
        fontSize: '0.85rem', // Smaller font size for select input
    },
    menuItem: {
        fontSize: '0.75rem', // Smaller font size for menu items
    },
    row: {
        display: 'flex',
        gap: '10px',
    },
    button: {
        fontSize: '0.85rem', // Smaller font size for the button text
        width: '100%',
        padding: '10px',
        backgroundColor: '#3b82f6',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
};

export default PollForm;
