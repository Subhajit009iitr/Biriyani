import { createSlice } from '@reduxjs/toolkit';
import image5 from '../assets/pic5.png';
import image6 from '../assets/pic6.png';


const events = [
    [ 
        { id: 0, title: 'Event 1', imageURL: image5, date: '2024-09-01', time: '11:00 AM', location: 'Location A', tokenAmount: 10 },
        { id: 1, title: 'Event 2', imageURL: image5, date: '2024-09-02', time: '1:00 PM', location: 'Location A', tokenAmount: 15 },
        { id: 2, title: 'Event 3', imageURL: image5, date: '2024-09-03', time: '3:00 PM', location: 'Location A', tokenAmount: 20 },
        { id: 3, title: 'Event 4', imageURL: image5, date: '2024-09-04', time: '10:00 AM', location: 'Location A', tokenAmount: 25 },
        { id: 4, title: 'Event 5', imageURL: image5, date: '2024-09-05', time: '2:00 PM', location: 'Location A', tokenAmount: 30 },
        { id: 5, title: 'Event 6', imageURL: image5, date: '2024-09-06', time: '4:00 PM', location: 'Location A', tokenAmount: 35 },
        { id: 6, title: 'Event 7', imageURL: image5, date: '2024-09-07', time: '11:00 AM', location: 'Location A', tokenAmount: 40 },
        { id: 7, title: 'Event 8', imageURL: image5, date: '2024-09-08', time: '1:00 PM', location: 'Location A', tokenAmount: 45 },
        { id: 8, title: 'Event 9', imageURL: image5, date: '2024-09-09', time: '3:00 PM', location: 'Location A', tokenAmount: 50 },
        { id: 9, title: 'Event 10', imageURL: image5, date: '2024-09-10', time: '10:00 AM', location: 'Location A', tokenAmount: 55 }
      ],
      [
        { id: 10, title: 'Event 1', imageURL: image6, date: '2024-09-01', time: '11:15 AM', location: 'Location B', tokenAmount: 10 },
        { id: 11, title: 'Event 2', imageURL: image6, date: '2024-09-02', time: '1:15 PM', location: 'Location B', tokenAmount: 15 },
        { id: 12, title: 'Event 3', imageURL: image6, date: '2024-09-03', time: '3:15 PM', location: 'Location B', tokenAmount: 20 },
        { id: 13, title: 'Event 4', imageURL: image6, date: '2024-09-04', time: '10:15 AM', location: 'Location B', tokenAmount: 25 },
        { id: 14, title: 'Event 5', imageURL: image6, date: '2024-09-05', time: '2:15 PM', location: 'Location B', tokenAmount: 30 },
        { id: 15, title: 'Event 6', imageURL: image6, date: '2024-09-06', time: '4:15 PM', location: 'Location B', tokenAmount: 35 },
        { id: 16, title: 'Event 7', imageURL: image6, date: '2024-09-07', time: '11:15 AM', location: 'Location B', tokenAmount: 40 },
        { id: 17, title: 'Event 8', imageURL: image6, date: '2024-09-08', time: '1:15 PM', location: 'Location B', tokenAmount: 45 },
        { id: 18, title: 'Event 9', imageURL: image6, date: '2024-09-09', time: '3:15 PM', location: 'Location B', tokenAmount: 50 },
        { id: 19, title: 'Event 10', imageURL: image6, date: '2024-09-10', time: '10:15 AM', location: 'Location B', tokenAmount: 55 }
      ],
      [
        { id: 20, title: 'Event 1', imageURL: image6, date: '2024-09-01', time: '11:30 AM', location: 'Location C', tokenAmount: 10 },
        { id: 21, title: 'Event 2', imageURL: image6, date: '2024-09-02', time: '1:30 PM', location: 'Location C', tokenAmount: 15 },
        { id: 22, title: 'Event 3', imageURL: image6, date: '2024-09-03', time: '3:30 PM', location: 'Location C', tokenAmount: 20 },
        { id: 23, title: 'Event 4', imageURL: image6, date: '2024-09-04', time: '10:30 AM', location: 'Location C', tokenAmount: 25 },
        { id: 24, title: 'Event 5', imageURL: image6, date: '2024-09-05', time: '2:30 PM', location: 'Location C', tokenAmount: 30 },
        { id: 25, title: 'Event 6', imageURL: image6, date: '2024-09-06', time: '4:30 PM', location: 'Location C', tokenAmount: 35 },
        { id: 26, title: 'Event 7', imageURL: image6, date: '2024-09-07', time: '11:30 AM', location: 'Location C', tokenAmount: 40 },
        { id: 27, title: 'Event 8', imageURL: image6, date: '2024-09-08', time: '1:30 PM', location: 'Location C', tokenAmount: 45 },
        { id: 28, title: 'Event 9', imageURL: image6, date: '2024-09-09', time: '3:30 PM', location: 'Location C', tokenAmount: 50 },
        { id: 29, title: 'Event 10', imageURL: image6, date: '2024-09-10', time: '10:30 AM', location: 'Location C', tokenAmount: 55 }
      ],
      [
        { id: 0, title: 'Event 1', imageURL: image5, date: '2024-09-01', time: '11:00 AM', location: 'Location A', tokenAmount: 10 },
        { id: 1, title: 'Event 2', imageURL: image5, date: '2024-09-02', time: '1:00 PM', location: 'Location A', tokenAmount: 15 },
        { id: 2, title: 'Event 3', imageURL: image5, date: '2024-09-03', time: '3:00 PM', location: 'Location A', tokenAmount: 20 },
        { id: 3, title: 'Event 4', imageURL: image5, date: '2024-09-04', time: '10:00 AM', location: 'Location A', tokenAmount: 25 },
        { id: 4, title: 'Event 5', imageURL: image5, date: '2024-09-05', time: '2:00 PM', location: 'Location A', tokenAmount: 30 },
        { id: 5, title: 'Event 6', imageURL: image5, date: '2024-09-06', time: '4:00 PM', location: 'Location A', tokenAmount: 35 },
        { id: 6, title: 'Event 7', imageURL: image5, date: '2024-09-07', time: '11:00 AM', location: 'Location A', tokenAmount: 40 },
        { id: 7, title: 'Event 8', imageURL: image5, date: '2024-09-08', time: '1:00 PM', location: 'Location A', tokenAmount: 45 },
        { id: 8, title: 'Event 9', imageURL: image5, date: '2024-09-09', time: '3:00 PM', location: 'Location A', tokenAmount: 50 },
        { id: 9, title: 'Event 10', imageURL: image5, date: '2024-09-10', time: '10:00 AM', location: 'Location A', tokenAmount: 55 }
      ],
      [
        { id: 10, title: 'Event 1', imageURL: image6, date: '2024-09-01', time: '11:15 AM', location: 'Location B', tokenAmount: 10 },
        { id: 11, title: 'Event 2', imageURL: image6, date: '2024-09-02', time: '1:15 PM', location: 'Location B', tokenAmount: 15 },
        { id: 12, title: 'Event 3', imageURL: image6, date: '2024-09-03', time: '3:15 PM', location: 'Location B', tokenAmount: 20 },
        { id: 13, title: 'Event 4', imageURL: image6, date: '2024-09-04', time: '10:15 AM', location: 'Location B', tokenAmount: 25 },
        { id: 14, title: 'Event 5', imageURL: image6, date: '2024-09-05', time: '2:15 PM', location: 'Location B', tokenAmount: 30 },
        { id: 15, title: 'Event 6', imageURL: image6, date: '2024-09-06', time: '4:15 PM', location: 'Location B', tokenAmount: 35 },
        { id: 16, title: 'Event 7', imageURL: image6, date: '2024-09-07', time: '11:15 AM', location: 'Location B', tokenAmount: 40 },
        { id: 17, title: 'Event 8', imageURL: image6, date: '2024-09-08', time: '1:15 PM', location: 'Location B', tokenAmount: 45 },
        { id: 18, title: 'Event 9', imageURL: image6, date: '2024-09-09', time: '3:15 PM', location: 'Location B', tokenAmount: 50 },
        { id: 19, title: 'Event 10', imageURL: image6, date: '2024-09-10', time: '10:15 AM', location: 'Location B', tokenAmount: 55 }
      ],
      [
        { id: 20, title: 'Event 1', imageURL: image6, date: '2024-09-01', time: '11:30 AM', location: 'Location C', tokenAmount: 10 },
        { id: 21, title: 'Event 2', imageURL: image6, date: '2024-09-02', time: '1:30 PM', location: 'Location C', tokenAmount: 15 },
        { id: 22, title: 'Event 3', imageURL: image6, date: '2024-09-03', time: '3:30 PM', location: 'Location C', tokenAmount: 20 },
        { id: 23, title: 'Event 4', imageURL: image6, date: '2024-09-04', time: '10:30 AM', location: 'Location C', tokenAmount: 25 },
        { id: 24, title: 'Event 5', imageURL: image6, date: '2024-09-05', time: '2:30 PM', location: 'Location C', tokenAmount: 30 },
        { id: 25, title: 'Event 6', imageURL: image6, date: '2024-09-06', time: '4:30 PM', location: 'Location C', tokenAmount: 35 },
        { id: 26, title: 'Event 7', imageURL: image6, date: '2024-09-07', time: '11:30 AM', location: 'Location C', tokenAmount: 40 },
        { id: 27, title: 'Event 8', imageURL: image6, date: '2024-09-08', time: '1:30 PM', location: 'Location C', tokenAmount: 45 },
        { id: 28, title: 'Event 9', imageURL: image6, date: '2024-09-09', time: '3:30 PM', location: 'Location C', tokenAmount: 50 },
        { id: 29, title: 'Event 10', imageURL: image6, date: '2024-09-10', time: '10:30 AM', location: 'Location C', tokenAmount: 55 }
      ],
      [
        { id: 0, title: 'Event 1', imageURL: image5, date: '2024-09-01', time: '11:00 AM', location: 'Location A', tokenAmount: 10 },
        { id: 1, title: 'Event 2', imageURL: image5, date: '2024-09-02', time: '1:00 PM', location: 'Location A', tokenAmount: 15 },
        { id: 2, title: 'Event 3', imageURL: image5, date: '2024-09-03', time: '3:00 PM', location: 'Location A', tokenAmount: 20 },
        { id: 3, title: 'Event 4', imageURL: image5, date: '2024-09-04', time: '10:00 AM', location: 'Location A', tokenAmount: 25 },
        { id: 4, title: 'Event 5', imageURL: image5, date: '2024-09-05', time: '2:00 PM', location: 'Location A', tokenAmount: 30 },
        { id: 5, title: 'Event 6', imageURL: image5, date: '2024-09-06', time: '4:00 PM', location: 'Location A', tokenAmount: 35 },
        { id: 6, title: 'Event 7', imageURL: image5, date: '2024-09-07', time: '11:00 AM', location: 'Location A', tokenAmount: 40 },
        { id: 7, title: 'Event 8', imageURL: image5, date: '2024-09-08', time: '1:00 PM', location: 'Location A', tokenAmount: 45 },
        { id: 8, title: 'Event 9', imageURL: image5, date: '2024-09-09', time: '3:00 PM', location: 'Location A', tokenAmount: 50 },
        { id: 9, title: 'Event 10', imageURL: image5, date: '2024-09-10', time: '10:00 AM', location: 'Location A', tokenAmount: 55 }
      ],
      [
        { id: 10, title: 'Event 1', imageURL: image6, date: '2024-09-01', time: '11:15 AM', location: 'Location B', tokenAmount: 10 },
        { id: 11, title: 'Event 2', imageURL: image6, date: '2024-09-02', time: '1:15 PM', location: 'Location B', tokenAmount: 15 },
        { id: 12, title: 'Event 3', imageURL: image6, date: '2024-09-03', time: '3:15 PM', location: 'Location B', tokenAmount: 20 },
        { id: 13, title: 'Event 4', imageURL: image6, date: '2024-09-04', time: '10:15 AM', location: 'Location B', tokenAmount: 25 },
        { id: 14, title: 'Event 5', imageURL: image6, date: '2024-09-05', time: '2:15 PM', location: 'Location B', tokenAmount: 30 },
        { id: 15, title: 'Event 6', imageURL: image6, date: '2024-09-06', time: '4:15 PM', location: 'Location B', tokenAmount: 35 },
        { id: 16, title: 'Event 7', imageURL: image6, date: '2024-09-07', time: '11:15 AM', location: 'Location B', tokenAmount: 40 },
        { id: 17, title: 'Event 8', imageURL: image6, date: '2024-09-08', time: '1:15 PM', location: 'Location B', tokenAmount: 45 },
        { id: 18, title: 'Event 9', imageURL: image6, date: '2024-09-09', time: '3:15 PM', location: 'Location B', tokenAmount: 50 },
        { id: 19, title: 'Event 10', imageURL: image6, date: '2024-09-10', time: '10:15 AM', location: 'Location B', tokenAmount: 55 }
      ],
      [
        { id: 20, title: 'Event 1', imageURL: image6, date: '2024-09-01', time: '11:30 AM', location: 'Location C', tokenAmount: 10 },
        { id: 21, title: 'Event 2', imageURL: image6, date: '2024-09-02', time: '1:30 PM', location: 'Location C', tokenAmount: 15 },
        { id: 22, title: 'Event 3', imageURL: image6, date: '2024-09-03', time: '3:30 PM', location: 'Location C', tokenAmount: 20 },
        { id: 23, title: 'Event 4', imageURL: image6, date: '2024-09-04', time: '10:30 AM', location: 'Location C', tokenAmount: 25 },
        { id: 24, title: 'Event 5', imageURL: image6, date: '2024-09-05', time: '2:30 PM', location: 'Location C', tokenAmount: 30 },
        { id: 25, title: 'Event 6', imageURL: image6, date: '2024-09-06', time: '4:30 PM', location: 'Location C', tokenAmount: 35 },
        { id: 26, title: 'Event 7', imageURL: image6, date: '2024-09-07', time: '11:30 AM', location: 'Location C', tokenAmount: 40 },
        { id: 27, title: 'Event 8', imageURL: image6, date: '2024-09-08', time: '1:30 PM', location: 'Location C', tokenAmount: 45 },
        { id: 28, title: 'Event 9', imageURL: image6, date: '2024-09-09', time: '3:30 PM', location: 'Location C', tokenAmount: 50 },
        { id: 29, title: 'Event 10', imageURL: image6, date: '2024-09-10', time: '10:30 AM', location: 'Location C', tokenAmount: 55 }
      ],
      [
        { id: 20, title: 'Event 1', imageURL: image6, date: '2024-09-01', time: '11:30 AM', location: 'Location C', tokenAmount: 10 },
        { id: 21, title: 'Event 2', imageURL: image6, date: '2024-09-02', time: '1:30 PM', location: 'Location C', tokenAmount: 15 },
        { id: 22, title: 'Event 3', imageURL: image6, date: '2024-09-03', time: '3:30 PM', location: 'Location C', tokenAmount: 20 },
        { id: 23, title: 'Event 4', imageURL: image6, date: '2024-09-04', time: '10:30 AM', location: 'Location C', tokenAmount: 25 },
        { id: 24, title: 'Event 5', imageURL: image6, date: '2024-09-05', time: '2:30 PM', location: 'Location C', tokenAmount: 30 },
        { id: 25, title: 'Event 6', imageURL: image6, date: '2024-09-06', time: '4:30 PM', location: 'Location C', tokenAmount: 35 },
        { id: 26, title: 'Event 7', imageURL: image6, date: '2024-09-07', time: '11:30 AM', location: 'Location C', tokenAmount: 40 },
        { id: 27, title: 'Event 8', imageURL: image6, date: '2024-09-08', time: '1:30 PM', location: 'Location C', tokenAmount: 45 },
        { id: 28, title: 'Event 9', imageURL: image6, date: '2024-09-09', time: '3:30 PM', location: 'Location C', tokenAmount: 50 },
        { id: 29, title: 'Event 10', imageURL: image6, date: '2024-09-10', time: '10:30 AM', location: 'Location C', tokenAmount: 55 }
      ],
      
  ]
  

  export const marketBodySlice = createSlice({
    name: 'marketplace',
    initialState: {
      page: 'market',
      content: [
        { name: 'upcomingevents', title: 'Upcoming Events', items: events},
      ],
    },
    reducers: {
      setPageContent: (state, action) => {
        state.page = action.payload;
      },
      setSelectedEventCard: (state, action) => {
        console.log('Setting selected card:', action.payload);
        state.selectedEventCard = action.payload;
        state.page = 'details';
      },
      setActiveTab: (state, action) => {
        state.activeTab = action.payload;
      },
    },
  });
  
  export const { setPageContent, setSelectedEventCard, setActiveTab } = marketBodySlice.actions;
  export default marketBodySlice.reducer;