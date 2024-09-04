// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useTheme } from '@mui/material/styles';
// import HorizontalScrollable from '../scrollers/scroller';
// import ScrollerHeader from '../header/scrollerHeader';
// import RenderCards from '../cards/renderCard';
// import EpisodeCard from '../cards/episode';
// import { setPageContent, setSelectedCard, setActiveTab } from '../../slices/bodySlice';
// import Box from '@mui/material/Box';
// import Divider from '@mui/material/Divider';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// function Body() {
//   const dispatch = useDispatch();
//   const theme = useTheme();
//   const { page, content, selectedCard, episodes, activeTab } = useSelector((state) => state.body);

//   const handleSeeMore = (section) => {
//     dispatch(setPageContent(section));
//   };

//   const handleBack = () => {
//     dispatch(setPageContent('home'));
//   };

//   const handleCardClick = (card) => {
//     console.log('Card clicked:', card);
//     dispatch(setSelectedCard(card));
//   };

//   const handleTabChange = (tab) => {
//     dispatch(setActiveTab(tab));
//   };

//   // Debugging logs
//   console.log('Current Page:', page);
//   console.log('Selected Card:', selectedCard);
//   console.log('Episodes:', episodes);
  
//   // Check if selectedCard and episodes[selectedCard.id] are correctly set
//   if (page === 'details') {
//     if (!selectedCard) {
//       console.log('Selected Card is not set.');
//     } else {
//       console.log('Selected Card ID:', selectedCard.id);
//       console.log('Episodes for Selected Card:', episodes[selectedCard.id]);
//     }
//   }

//   return (
//     <Box sx={{ backgroundColor: theme.palette.background.main, padding: theme.spacing(2), minHeight: '60vh' }}>
//       {page === 'home' ? (
//         content.map((section, index) => (
//           <Box key={index} sx={{ marginBottom: theme.spacing(4) }}>
//             <ScrollerHeader 
//               title={section.title} 
//               onSeeMore={() => handleSeeMore(section.name)} 
//               showSeeMore={true} 
//             />
//             <HorizontalScrollable items={section.items} onCardClick={handleCardClick} />
//           </Box>
//         ))
//       ) : page === 'details' ? (
//         <Box>
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: theme.spacing(2) }}>
//             <Box sx={{ display: 'flex', gap: theme.spacing(2) }}>
//               <Button 
//                 variant={activeTab === 'Episodes' ? 'contained' : 'outlined'}
//                 onClick={() => handleTabChange('Episodes')}
//               >
//                 Episodes
//               </Button>
//               <Button 
//                 variant={activeTab === 'Marketplace' ? 'contained' : 'outlined'}
//                 onClick={() => handleTabChange('Marketplace')}
//               >
//                 Marketplace
//               </Button>
//               <Button 
//                 variant={activeTab === 'Community' ? 'contained' : 'outlined'}
//                 onClick={() => handleTabChange('Community')}
//               >
//                 Community
//               </Button>
//             </Box>
//             <Button onClick={handleBack} variant="contained">Back</Button>
//           </Box>
//           <Divider />
//           <Box sx={{ marginTop: theme.spacing(2) }}>
//             {selectedCard ? (
//               episodes[selectedCard.id] ? (
//                 episodes[selectedCard.id].map((episode, index) => (
//                   <EpisodeCard 
//                     key={index} 
//                     imageURL={episode.imageURL} 
//                     title={episode.title} 
//                     description={episode.description} 
//                   />
//                 ))
//               ) : (
//                 <Box sx={{ textAlign: 'center', padding: theme.spacing(2) }}>
//                   <Typography variant="body1">No episodes available for this card.</Typography>
//                 </Box>
//               )
//             ) : (
//               <Box sx={{ textAlign: 'center', padding: theme.spacing(2) }}>
//                 <Typography variant="body1">Please select a card to view episodes.</Typography>
//               </Box>
//             )}
//           </Box>
//         </Box>
//       ) : (
//         <Box>
//           {content.find(section => section.name === page) && (
//             <>
//               <ScrollerHeader 
//                 title={content.find(section => section.name === page).title} 
//                 onSeeMore={handleBack} 
//                 showSeeMore={false}
//               />
//               <RenderCards 
//                 cardList={content.find(section => section.name === page)?.items || []} 
//                 onCardClick={handleCardClick}
//               />
//             </>
//           )}
//         </Box>
//       )}
//     </Box>
//   );
// }

// export default Body;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import HorizontalScrollable from '../scrollers/scroller';
import ScrollerHeader from '../header/scrollerHeader';
import RenderCards from '../cards/renderCard';
import EpisodeCard from '../cards/episode';
import { setPageContent, setSelectedCard, setActiveTab } from '../../slices/bodySlice';
import { resetCoverImage } from '../../slices/coverSlice'; // Import the new action
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Body() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { page, content, selectedCard, episodes, activeTab } = useSelector((state) => state.body);

  const handleSeeMore = (section) => {
    dispatch(setPageContent(section));
  };

  const handleBack = () => {
    dispatch(setPageContent('home'));
    dispatch(resetCoverImage()); // Reset cover image to initial state
  };

  const handleCardClick = (card) => {
    console.log('Card clicked:', card);
    dispatch(setSelectedCard(card));
  };

  const handleTabChange = (tab) => {
    dispatch(setActiveTab(tab));
  };

  // Debugging logs
  console.log('Current Page:', page);
  console.log('Selected Card:', selectedCard);
  console.log('Episodes:', episodes);
  
  // Check if selectedCard and episodes[selectedCard.id] are correctly set
  if (page === 'details') {
    if (!selectedCard) {
      console.log('Selected Card is not set.');
    } else {
      console.log('Selected Card ID:', selectedCard.id);
      console.log('Episodes for Selected Card:', episodes[selectedCard.id]);
    }
  }

  return (
    <Box sx={{ backgroundColor: theme.palette.background.main, padding: theme.spacing(2), minHeight: '60vh' }}>
      {page === 'home' ? (
        content.map((section, index) => (
          <Box key={index} sx={{ marginBottom: theme.spacing(4) }}>
            <ScrollerHeader 
              title={section.title} 
              onSeeMore={() => handleSeeMore(section.name)} 
              showSeeMore={true} 
            />
            <HorizontalScrollable items={section.items} onCardClick={handleCardClick} />
          </Box>
        ))
      ) : page === 'details' ? (
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: theme.spacing(2) }}>
            <Box sx={{ display: 'flex', gap: theme.spacing(2) }}>
              <Button 
                variant={activeTab === 'Episodes' ? 'contained' : 'outlined'}
                onClick={() => handleTabChange('Episodes')}
              >
                Episodes
              </Button>
              <Button 
                variant={activeTab === 'Marketplace' ? 'contained' : 'outlined'}
                onClick={() => handleTabChange('Marketplace')}
              >
                Marketplace
              </Button>
              <Button 
                variant={activeTab === 'Community' ? 'contained' : 'outlined'}
                onClick={() => handleTabChange('Community')}
              >
                Community
              </Button>
            </Box>
            <Button onClick={handleBack} variant="contained">Back</Button>
          </Box>
          <Divider />
          <Box sx={{ marginTop: theme.spacing(2) }}>
            {selectedCard ? (
              episodes[selectedCard.id] ? (
                episodes[selectedCard.id].map((episode, index) => (
                  <EpisodeCard 
                    key={index} 
                    imageURL={episode.imageURL} 
                    title={episode.title} 
                    description={episode.description} 
                  />
                ))
              ) : (
                <Box sx={{ textAlign: 'center', padding: theme.spacing(2) }}>
                  <Typography variant="body1">No episodes available for this card.</Typography>
                </Box>
              )
            ) : (
              <Box sx={{ textAlign: 'center', padding: theme.spacing(2) }}>
                <Typography variant="body1">Please select a card to view episodes.</Typography>
              </Box>
            )}
          </Box>
        </Box>
      ) : (
        <Box>
          {content.find(section => section.name === page) && (
            <>
              <ScrollerHeader 
                title={content.find(section => section.name === page).title} 
                onSeeMore={handleBack} 
                showSeeMore={false}
              />
              <RenderCards 
                cardList={content.find(section => section.name === page)?.items || []} 
                onCardClick={handleCardClick}
              />
            </>
          )}
        </Box>
      )}
    </Box>
  );
}

export default Body;
