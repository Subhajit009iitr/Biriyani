import { createSlice } from '@reduxjs/toolkit';
import image5 from '../assets/pic5.png';
import image6 from '../assets/pic6.png';

const cards = [
    { title: 'Card 1', imageURL: image5, date: '2024-09-02', time: '10:00 AM', rating: 4.5 },
    { title: 'Card 2', imageURL: image6, date: '2024-09-03', time: '11:00 AM', rating: 4.0 },
    { title: 'Card 3', imageURL: image5, date: '2024-09-04', time: '12:00 PM', rating: 4.2 },
    { title: 'Card 4', imageURL: image6, date: '2024-09-05', time: '01:00 PM', rating: 4.7 },
    { title: 'Card 5', imageURL: image5, date: '2024-09-06', time: '02:00 PM', rating: 4.9 },
    { title: 'Card 6', imageURL: image6, date: '2024-09-02', time: '10:00 AM', rating: 4.5 },
    { title: 'Card 7', imageURL: image5, date: '2024-09-03', time: '11:00 AM', rating: 4.0 },
    { title: 'Card 8', imageURL: image6, date: '2024-09-04', time: '12:00 PM', rating: 4.2 },
    { title: 'Card 9', imageURL: image5, date: '2024-09-05', time: '01:00 PM', rating: 4.7 },
    { title: 'Card 10', imageURL: image6, date: '2024-09-06', time: '02:00 PM', rating: 4.9 },
];

export const bodySlice = createSlice({
  name: 'body',
  initialState: {
    page: 'home',
    content: [
      { name: 'continueWatching', title: 'Continue Watching', items: cards },
      { name: 'trending', title: 'Trending', items: cards },
      { name: 'recommended', title: 'Recommended', items: cards },
      { name: 'action', title: 'Action', items: cards },
    ],
  },
  reducers: {
    setPageContent: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setPageContent } = bodySlice.actions;
export default bodySlice.reducer;
