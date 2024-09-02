import React, {useState} from 'react';
import { Card, CardMedia, CardContent, Typography, Button, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ShareIcon from '@mui/icons-material/Share';
import { useTheme } from '@mui/material/styles';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { hover } from '@testing-library/user-event/dist/hover';
import { Diversity1 } from '@mui/icons-material';
// Action to add item (assuming you have this in your Redux slice)
const addItem = (item) => ({
  type: 'ADD_ITEM',
  payload: item,
});

const AnimeCard = ({title, imageURL,  date, time, rating, onClick  }) => {
    const theme = useTheme();
    onClick={onClick}
    const dispatch = useDispatch();
  const item = useSelector((state) => state.selectedItem); // Assuming you have selected item in your Redux state

  const handleAddItem = () => {
    dispatch(addItem(item));
  };

  const handleShare = () => {
    // Handle share functionality here
  };

  const [hovered, setHovered] = useState(false);
  return (
    <Card sx={{ minWidth: 300, maxWidth: 300 , margin: '1rem 1rem 1rem 1rem', backgroundColor: '#0b1419',
      position: 'relative',
      transition: 'transform 0.3s ease-in-out, height 0.3s ease-in-out',
      overflow: 'hidden',
      height: hovered ? 300 : 150, // Adjust height based on hover state
      '&:hover': {
        transform: 'scale(1.1)',
      },
    }}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    >

      <CardMedia
        component="img"
        height= "150"
        image={imageURL} // Update this to your image path or a URL
        alt={title}
        />

        
   
      <CardContent
      className="card-expanded-info"
      sx={{padding: '0.5rem',
        // position: 'absolute',
        transition: 'transform 0.3s ease-in-out',
            transform: hovered ? 'translateY(0)' : 'translateY(100%)',
       }}>
        <Typography  gutterBottom sx={{fontSize: '0.9rem'}} component="div">
          {title}

        </Typography>
        <Button  style={{
          width: '95%',
          backgroundColor: '#D1D1D1',
          color: '#071116',
          fontWeight: 'bold',
          alignContent: 'center',
          justifyContent: 'center',
          fontSize: '1rem',
          
        }} >
        <PlayArrowIcon sx={{ marginRight: '0.3rem', fontSize: '1.5rem'}}/>
          Play
        </Button>
      

      </CardContent>

      <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.1rem 0.1rem 0.1rem 0.9rem',
      // position: 'absolute',
      transition: 'transform 0.3s ease-in-out',
          transform: hovered ? 'translateY(0)' : 'translateY(100%)',
      }}>
        <div>
          <IconButton onClick={handleAddItem}>
            <AddCircleOutlineIcon sx={{fontSize: '1.5rem'}} />
          </IconButton>
          <IconButton onClick={handleShare}>
            <ShareIcon sx={{fontSize: '1.5rem'}} />
          </IconButton>
        </div>
        
      </CardContent>
      <CardContent sx={{padding: '0.1rem 0.1rem 0.1rem 0.1rem',
        // position: 'absolute',
        transition: 'transform 0.3s ease-in-out',
            transform: hovered ? 'translateY(0)' : 'translateY(100%)',
      }}>
      <Typography sx={{display: 'flex', fontSize: '0.8rem', padding: '0.1rem 0.1rem 0.1rem 1rem'}} color="text.secondary">
          {date} | {time} | {rating}
        </Typography>
      </CardContent>
            

      
    </Card>
  );
};

export default AnimeCard;
